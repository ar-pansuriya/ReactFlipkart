import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AdminLogin from '../../Components/AdminComponents/AdminLogin'
import AddProduct from './AddProduct'
import ProductList from './ProductList'
import Order from './Order'
import api from '../../Utils/api'

export default function AdminPage() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token === null) {
            navigate('/admin')
        }
        
    }, [token, navigate])

    return (
        <>
            <Routes>
                {token !== null ? (
                    <>
                        <Route path='/add-product' element={<AddProduct />} />
                        <Route path='/order' element={<Order />} />
                        <Route path='/productlist' element={<ProductList />} />
                    </>
                ) : (
                    <Route path='/' element={<AdminLogin />} />
                )}
            </Routes>
        </>
    )
}
