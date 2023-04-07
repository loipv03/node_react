import { instance } from "./instance";
import { ICategoryes } from "../types/categoryes";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmJjZTI4MzE3NzljYTk0Y2E5YTlkNSIsImlhdCI6MTY4MDYwMDI1OSwiZXhwIjoxNjgwNjg2NjU5fQ.fRB6dkOA93YAeg05zNKi9k0JFcf8sNY_8GSH5xD9EJw'

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