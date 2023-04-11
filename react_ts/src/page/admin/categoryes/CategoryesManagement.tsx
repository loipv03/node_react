import { Link } from 'react-router-dom'
import { IProduct } from '../../../types/products';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ICategoryes } from '../../../types/categoryes';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

interface IPropsCate {
    category: ICategoryes[]
    onRemove: (id: number | string) => void
}

export const CategoryManagementPage = (props: IPropsCate) => {
    interface DataType {
        key: string | number;
        name: string;
    }
    const data = props.category.map((item: any) => {
        return {
            key: item?._id,
            name: item.name,
        }
    })

    const removeCategory = (id: number | string) => {
        props.onRemove(id)
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Category name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                < Space size="middle" >
                    <Button type="primary" danger><Link to={`/admin/categoryes/update/${record.key}`}>Update</Link></Button>
                    <Button type="primary" danger onClick={() => removeCategory(record.key)}>Remove</Button>
                </Space >
            ),
        },
    ];

    const user = JSON.parse(localStorage.getItem("user") as string)
    const navigate = useNavigate()
    useEffect(() => {
        if (user?.user?.role !== "admin") {
            return navigate('/')
        }
    }, [navigate])

    return (
        <div className='admin_cate'>
            <Button type="primary" danger><Link to={'/admin/categoryes/add'}>ADD NEW</Link></Button>
            <Table columns={columns} dataSource={data} />
        </div>

    )

}