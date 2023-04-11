import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../../types/products';
import { getAllProducts } from '../../../api/products';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { test } from 'node:test';

interface IProps {
    product: IProduct[]
    onRemove: (id: number | string | undefined) => void
}

const ProductManagementPage = (props: IProps) => {
    interface DataType {
        key: string;
        name: string;
        price: string;
        image: string;
        desc: string;
        categoryId: string
    }
    const data = props.product.map((item: any) => {
        return {
            key: item?._id,
            name: item.name,
            price: item.price,
            image: item.image,
            desc: item.desc,
            categoryId: item.categoryId
        }
    })

    const removeProduct = (id: number | string | undefined) => {
        props.onRemove(id)
    }



    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Product Image',
            dataIndex: 'image',
            key: 'image',
            render: (text) => <img src={text} width={100} alt="" />
        },
        {
            title: 'Product Desc',
            dataIndex: 'desc',
            key: 'desc'
        },
        {
            title: 'Product CategoryId',
            dataIndex: 'categoryId',
            key: 'categoryId'
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                < Space size="middle" >
                    <Button type="primary" danger><Link to={`/admin/products/update/${record.key}`}>Update</Link></Button>
                    <Button type="primary" danger onClick={() => removeProduct(record.key)}>Remove</Button>
                </Space >
            ),
        },
    ];

    return (
        <div>
            <Button type="primary"><Link to={'/admin/products/add'}>ADD NEW</Link></Button>
            <Table columns={columns} dataSource={data} />
        </div>

    )

}


export default ProductManagementPage