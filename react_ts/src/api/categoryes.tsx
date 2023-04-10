import { instance } from "./instance";
import { ICategoryes } from "../types/categoryes";

const user = JSON.parse(localStorage.getItem("user") as string)

if (user) {
    const token = user.accessToken
}

export const getAllCategoryes = () => {
    return instance.get("/categoryes")
}

export const getOneCategory = (id: Number | String | undefined) => {
    return instance.get(`/categoryes/${id}`)
}

export const deleteCategory = (id: Number | String) => {
    return instance.delete(`/categoryes/${id}`, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
}

export const addCategoryes = (product: ICategoryes) => {
    return instance.post("/categoryes", product, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
}
export const updateCategory = (product: ICategoryes) => {
    return instance.patch(`/categoryes/${product._id}`, product, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
}