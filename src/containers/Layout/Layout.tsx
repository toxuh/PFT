import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout as AntLayout } from 'antd'

import Navbar from './Navbar'

import './Layout.sass'

const { Content } = AntLayout

const Layout: React.FC = () => {
  return (
    <AntLayout className="layout">
      <Navbar />
      <Content className="layout__content">
        <div className="layout__content-wrapper">
          <Outlet />
        </div>
      </Content>
    </AntLayout>
  )
}

export default Layout
