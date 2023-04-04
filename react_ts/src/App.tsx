import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './page/HomePage'
import { ProductPage } from './page/Product'
import { getAllProducts } from './api/products'
import { IProduct } from './types/products'
import Dashboard from './page/admin/Dashboard'
import { CategoryManagementPage } from './page/admin/CategoryesManagement'
import { addCategoryes, deleteCategory, getAllCategoryes, updateCategory } from './api/categoryes'
import { ICategoryes } from './types/categoryes'
import { AddCategoryPage } from './page/admin/AddCategoryes'
import { UpdateCategoryPage } from './page/admin/UpdateCategory'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categoryes, setCategoryes] = useState<ICategoryes[]>([])

  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data))
    getAllCategoryes().then(({ data }) => setCategoryes(data))
  }, [])

  const onHandelRemove = async (id: string | number) => {
    deleteCategory(id)
    await location.reload()
  }

  const onHandleAdd = async (category: ICategoryes) => {
    addCategoryes(category)
    await setCategoryes([...categoryes, category])
  }

  // const onHandleUpdate = () => {

  // }

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element />
            <Route path=':id' element />
          </Route>
        </Route>
        <Route path='admin'>
          <Route index element={<Dashboard />} />
          <Route path='Categoryes'>
            <Route index element={<CategoryManagementPage category={categoryes} onRemove={onHandelRemove} />} />
            <Route path='add' element={<AddCategoryPage onAdd={onHandleAdd} />} />
            {/* <Route path='update/:id' element={<UpdateCategoryPage onUpdate={onHandleUpdate} />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
