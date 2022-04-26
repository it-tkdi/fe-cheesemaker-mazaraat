import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar, TopMenu } from '../components'
import { DashboardPage, MakeCheese } from '../pages'
import { AdminContainer, AdminContent } from './AdminElement'

const AdminLayout = ({logout}) => {
  return (
    <AdminContainer>
      <Sidebar />
      <TopMenu logout={logout} />
      <AdminContent>
        <Routes>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="make-cheese/*" element={<MakeCheese />} />
        </Routes>
      </AdminContent>
    </AdminContainer>
  );
}

export default AdminLayout