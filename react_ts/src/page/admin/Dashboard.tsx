import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user") as string)
    const navigate = useNavigate()
    useEffect(() => {
        if (user?.user?.role !== "admin") {
            return navigate('/')
        }
    }, [navigate])
    return (
        <div>Dashboard</div>
    )

}

export default Dashboard