import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import './AuthLayout.sass'

const AuthLayout: React.FC = () => (
  <Layout className="auth-layout">
    <Outlet />
  </Layout>
)

export default AuthLayout
