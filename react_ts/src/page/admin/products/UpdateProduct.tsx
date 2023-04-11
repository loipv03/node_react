import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { IProduct } from '../../../types/products'
import { Button, Checkbox, Input, Form } from 'antd'
import { getOneProduct } from '../../../api/products'

interface IProps {
    onUpdate: (product: IProduct) => void
}

export const UpdateProductPage = (props: IProps) => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [products, setProducts] = useState<IProduct>()

    useEffect(() => {
        getOneProduct(id).then(({ data }) => setProducts(data))
    }, [props])

    useEffect(() => {
        setField()
    }, [products])

    const [form] = Form.useForm();

    const setField = () => {
        form.setFieldsValue({
            _id: products?._id,
            name: products?.name,
            price: products?.price,
            image: products?.image,
            desc: products?.desc,
            categoryId: products?.categoryId
        })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    const onFinish = (values: any) => {
        props.onUpdate(values)
        navigate('/admin/products')
    }
    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 800, margin: '0 auto' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Products Id"
                name="_id"
                style={{ display: 'none' }}
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Products Name"
                name="name"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Products Price"
                name="price"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Products Image"
                name="image"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Products Desc"
                name="desc"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="CategoryID"
                name="categoryId"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                    type="primary"
                    htmlType="submit">
                    Update Product
                </Button>
            </Form.Item>
        </Form>
    )
}

