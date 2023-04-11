import { IProduct } from "../types/products";
import { instance } from "./instance";


const user = JSON.parse(localStorage.getItem("user") as string)
let token = ''
if (user) {
    token = user.accessToken
}

export const getAllProducts = () => {
    return instance.get("/products")
}

export const getOneProduct = (id: String | Number | undefined) => {
    return instance.get(`/products/${id}`)
}

export const deleteProduct = (id: Number | String | undefined) => {
    return instance.delete(`/products/${id}`, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
}

export const addProduct = (product: IProduct) => {
    return instance.post("/products", product, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
}
export const updateProduct = (product: IProduct) => {
    return instance.patch(`/products/${product._id}`, product, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
}