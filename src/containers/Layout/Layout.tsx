import React from 'react'
import { Layout as AntLayout } from 'antd'

import Navbar from './Navbar'

import './Layout.sass'

interface Props {
  children: React.ReactNode
}

const { Content } = AntLayout

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AntLayout className="layout">
      <Navbar />
      <Content className="layout__content">
        <div className="layout__content-wrapper">{children}</div>
      </Content>
    </AntLayout>
  )
}

export default Layout
