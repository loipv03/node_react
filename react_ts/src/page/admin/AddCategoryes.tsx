import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Input, Form } from 'antd'
import { ICategoryes } from '../../types/categoryes'


interface IProps {
    onAdd: (category: ICategoryes) => void
}

export const AddCategoryPage = (props: IProps) => {

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    const onFinish = (values: any) => {
        props.onAdd(values)

    }

    return (
        <div>
            <Form
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

