import React, { createElement, useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  BarChartOutlined,
  DashboardOutlined,
  DollarOutlined,
  ExportOutlined,
  LeftOutlined,
  NotificationOutlined,
  RightOutlined,
  SettingOutlined,
  SwapOutlined
} from '@ant-design/icons'

import './Navbar.sass'

const { Sider } = Layout

const Navbar: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(false)

  const menuItems = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: 'Dashboard'
    },
    {
      key: '2',
      icon: <BarChartOutlined />,
      label: 'Analytics'
    },
    {
      key: '3',
      icon: <DollarOutlined />,
      label: 'Balance'
    },
    {
      key: '4',
      icon: <SwapOutlined />,
      label: 'Transfer'
    },
    {
      key: '5',
      icon: <NotificationOutlined />,
      label: 'Notifications'
    },
    {
      key: '6',
      icon: <SettingOutlined />,
      label: 'Settings'
    }
  ]

  return (
    <Sider
      className={`navbar ${isCollapsed ? 'navbar--collapsed' : ''}`}
      trigger={null}
      collapsible
      collapsed={isCollapsed}
      collapsedWidth={110}
      width={300}
    >
      <div className="navbar__logo">
        {isCollapsed ? 'PFT' : 'Personal Finance Tracker'}
      </div>
      {createElement(isCollapsed ? RightOutlined : LeftOutlined, {
        className: `navbar__toggle-button ${
          isCollapsed ? 'navbar__toggle-button--toggled' : ''
        }`,
        onClick: () => {
          setCollapsed(!isCollapsed)
        }
      })}
      <Menu
        className="navbar__menu"
        theme="dark"
        defaultSelectedKeys={['1']}
        items={menuItems}
      />
      <Menu
        className="navbar__menu navbar__menu-bottom"
        theme="dark"
        items={[{ key: '100', icon: <ExportOutlined />, label: 'Logout' }]}
      />
    </Sider>
  )
}

export default Navbar
