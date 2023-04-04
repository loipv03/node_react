import { instance } from "./instance";

export const getAllProducts = () => {
    return instance.get("/products")
}

export const getOneProduct = (id: String | Number | undefined) => {
    return instance.get(`/products/${id}`)
}