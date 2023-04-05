export interface IProduct {
    _id?: string | number
    name: string,
    price: number,
    image: string,
    desc: string,
    categoryId: string | number
}

export interface IProps {
    product: IProduct[]
}