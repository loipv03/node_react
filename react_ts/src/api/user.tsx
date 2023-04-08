import { instance } from "./instance";

export const signin = (data: any) => {
    return instance.post('/signin', data)
}