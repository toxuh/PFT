import React, { createElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import {
  BsArrowLeftRight,
  BsBell,
  BsBoxArrowRight,
  BsCoin,
  BsGear,
  BsGraphUp,
  BsMoon,
  BsSpeedometer,
  BsSun
} from 'react-icons/bs'

import { Glass } from '../../components'

import { useTheme } from '../../utils/ThemeContext'

import './Navbar.sass'

const { Sider } = Layout

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const { isDarkMode, toggleTheme } = useTheme()
  const [isCollapsed, setCollapsed] = useState(false)

  const menuItems = [
    {
      key: '/',
      icon: <BsSpeedometer />,
      label: 'Dashboard',
      onClick: () => {
        navigate('/')
      }
    },
    {
      key: '/analytics',
      icon: <BsGraphUp />,
      label: 'Analytics',
      onClick: () => {
        navigate('/analytics')
      }
    },
    {
      key: '/balance',
      icon: <BsCoin />,
      label: 'Balance',
      onClick: () => {
        navigate('/balance')
      }
    },
    {
      key: '/transfer',
      icon: <BsArrowLeftRight />,
      label: 'Transfer',
      onClick: () => {
        navigate('/transfer')
      }
    },
    {
      key: '/notifications',
      icon: <BsBell />,
      label: 'Notifications',
      onClick: () => {
        navigate('/notifications')
      }
    },
    {
      key: '/settings',
      icon: <BsGear />,
      label: 'Settings',
      onClick: () => {
        navigate('/settings')
      }
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
      <Glass color="purple">
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
          items={[
            {
              key: '100',
              icon: isDarkMode ? <BsSun /> : <BsMoon />,
              label: isDarkMode ? 'Light theme' : 'Dark theme',
              onClick: toggleTheme
            },
            { key: '101', icon: <BsBoxArrowRight />, label: 'Logout' }
          ]}
          selectedKeys={[]}
        />
      </Glass>
    </Sider>
  )
}

export default Navbar
