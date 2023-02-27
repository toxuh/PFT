import React from 'react'
import { Typography } from 'antd'

import { Glass } from '../../components'

import './Sign.sass'

const { Title } = Typography

const SignUp: React.FC = () => (
  <div className="sign-wrapper">
    <Glass color="yellow">
      <div>Personal Finance Tracker</div>
      <Title level={2}>Sign up</Title>
    </Glass>
  </div>
)

export default SignUp
