import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
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
import { ProductDetails } from './page/ProductDetails'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categoryes, setCategoryes] = useState<ICategoryes[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data))
    getAllCategoryes().then(({ data }) => setCategoryes(data))
  }, [])

  const onHandelRemove = async (id: string | number) => {
    const result = confirm("Xóa danh mục sản phẩm!")
    if (result) {
      deleteCategory(id)
      await location.reload()
    }
  }

  const onHandleAdd = async (category: ICategoryes) => {
    const result = confirm("Thêm danh mục sản phẩm!")
    if (result) {
      addCategoryes(category)
      await setCategoryes([...categoryes, category])
      navigate('/admin/categoryes')
    }
  }

  // const onHandleUpdate = () => {

  // }

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element={<ProductPage />} />
            <Route path=':id' element={<ProductDetails />} />
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
