import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Input, Form } from 'antd'
import { ICategoryes } from '../../../types/categoryes'
import { getOneCategory } from '../../../api/categoryes'


interface IProps {
    onUpdate: (category: ICategoryes) => void
}
export const UpdateCategoryPage = (props: IProps) => {
    const { id } = useParams()

    const [category, setCategory] = useState<ICategoryes>()
    const navigate = useNavigate()

    useEffect(() => {
        getOneCategory(id).then(({ data }) => setCategory(data))
    }, [props])

    useEffect(() => {
        setField()
    }, [category])

    const [form] = Form.useForm();

    const setField = () => {
        form.setFieldsValue({
            _id: category?._id,
            name: category?.name,
        })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    const onFinish = (values: any) => {
        props.onUpdate(values)
        navigate('/admin/categoryes')
    }

    return (
        <div>
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
                    label="Category Id"
                    name="_id"
                    style={{ display: 'none' }}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit">
                        Add New Category
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

