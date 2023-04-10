import React, { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { signin, signup } from "../api/user";
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Input, Form } from 'antd'

export const Signup = () => {
    const navigate = useNavigate()

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    const onFinish = (values: any) => {
        signup(values)
        navigate('/')
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
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="ConfirmPassword"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        danger
                        htmlType="submit">
                        Signup
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}