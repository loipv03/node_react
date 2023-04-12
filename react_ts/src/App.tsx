import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { HomePage } from './page/HomePage'
import { ProductPage } from './page/Product'
import { addProduct, deleteProduct, getAllProducts, updateProduct } from './api/products'
import { IProduct } from './types/products'
import Dashboard from './page/admin/categoryes/Dashboard'
import { CategoryManagementPage } from './page/admin/categoryes/CategoryesManagement'
import { addCategoryes, deleteCategory, getAllCategoryes, updateCategory } from './api/categoryes'
import { ICategoryes } from './types/categoryes'
import { AddCategoryPage } from './page/admin/categoryes/AddCategoryes'
import { UpdateCategoryPage } from './page/admin/categoryes/UpdateCategory'
import { ProductDetails } from './page/ProductDetails'
import { Signin } from './page/signin'
import { Signup } from './page/signup'
import ProductManagementPage from './page/admin/products/ProductManagement'
import AddProductPage from './page/admin/products/AddProduct'
import { UpdateProductPage } from './page/admin/products/UpdateProduct'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categoryes, setCategoryes] = useState<ICategoryes[]>([])

  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data))
    getAllCategoryes().then(({ data }) => setCategoryes(data))
  }, [])

  const handleRemoveCategory = async (id: string | number) => {
    const result = confirm("Xóa danh mục sản phẩm!")
    if (result) {
      await deleteCategory(id)
      getAllCategoryes().then(({ data }) => setCategoryes(data))
    }
  }

  const handleAddCategoryes = async (category: ICategoryes) => {
    const result = confirm("Thêm danh mục sản phẩm!")
    if (result) {
      await addCategoryes(category)
      getAllCategoryes().then(({ data }) => setCategoryes(data))
    }
  }

  const handleUpdateCategory = async (category: ICategoryes) => {
    const result = confirm("Update danh mục sản phẩm!")
    if (result) {
      await updateCategory(category)
      getAllCategoryes().then(({ data }) => setCategoryes(data))

    }
  }
  const removeProduct = async (id: number | string | undefined) => {
    const result = confirm("Xóa sản phẩm!")
    if (result) {
      await deleteProduct(id)
      getAllProducts().then(({ data }) => setProducts(data))
    }
  }

  const handleAddProducts = async (product: IProduct) => {
    const result = confirm("Thêm sản phẩm!")
    if (result) {
      await addProduct(product)
      getAllProducts().then(({ data }) => setProducts(data))
    }
  }

  const handleUpdateProducts = async (product: IProduct) => {
    const result = confirm("Update sản phẩm!")
    if (result) {
      console.log(product);

      await updateProduct(product)
      getAllProducts().then(({ data }) => setProducts(data))

    }
  }



  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element={<ProductPage />} />
            <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='admin'>
          <Route index element={<Dashboard />} />
          <Route path='Categoryes'>
            <Route index element={<CategoryManagementPage category={categoryes} onRemove={handleRemoveCategory} />} />
            <Route path='add' element={<AddCategoryPage onAdd={handleAddCategoryes} />} />
            <Route path='update/:id' element={<UpdateCategoryPage onUpdate={handleUpdateCategory} />} />
          </Route>
          <Route path='products'>
            <Route index element={<ProductManagementPage product={products} onRemove={removeProduct} />} />
            <Route path='add' element={<AddProductPage onAdd={handleAddProducts} />} />
            <Route path='update/:id' element={<UpdateProductPage onUpdate={handleUpdateProducts} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
