import { useState, useEffect } from "react"
import { IProps, IProduct } from "../types/products"
import { useParams } from "react-router-dom"
import { getOneProduct } from "../api/products"


export const ProductDetails = () => {
    const [product, setProduct] = useState(
        {
            _id: "",
            name: "",
            price: 0,
            image: "",
            desc: "",
            categoryId: ""
        })

    const { id } = useParams()

    useEffect(() => {
        getOneProduct(id).then(({ data }) => setProduct(data))
    }, [])

    return (
        <div className="max-w-screen-2xl m-auto shadow-md">
            <a href="/add">
                <button className="font-medium hover:underline border-inherit mt-3 mb-3 border p-2 rounded-lg bg-red-600 text-slate-50">Add Product</button>
            </a>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-collapse">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-center">
                        <th scope="col" className="w-14 border border-slate-200">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 border border-slate-200">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3 border border-slate-200">
                            image
                        </th>
                        <th scope="col" className="px-6 py-3 border border-slate-200">
                            desc
                        </th>
                        <th scope="col" className="px-3 py-3 border border-slate-200">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={product._id} className="border border-slate-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="border border-slate-200 text-black text-center">
                            {product.name}
                        </td>
                        <td className="border border-slate-200 text-black text-center">
                            {product.price}
                        </td>
                        <td className="border border-slate-200 text-black text-center">
                            {product.image}
                        </td>
                        <td className="border border-slate-200 text-black text-center">
                            {product.desc}
                        </td>
                        <td className="max-w-[80px] border m-auto border-slate-300 pl-8">
                            <button className="border-inherit mt-3 mb-3 border p-2 rounded-lg bg-red-600 text-slate-50 font-medium hover:underline">Remove</button>
                            <button className="border-inherit mt-3 mb-3 border p-2 rounded-lg bg-red-600 text-slate-50 font-medium hover:underline">Update</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}