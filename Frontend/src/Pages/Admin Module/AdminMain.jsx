import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminNavbar from './Components/AdminNavbar'
import AdminIndex from './AdminIndex'

const AdminMain = () => {
  return (
    <div>
        <div><AdminNavbar/></div>
        <div>
            <AdminIndex/>
        </div>
    </div>
  )
}

export default AdminMain