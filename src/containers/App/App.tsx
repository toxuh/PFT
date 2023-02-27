import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Analytics from '../Analytics/Analytics'
import AuthLayout from '../Auth/AuthLayout'
import Balance from '../Balance/Balance'
import Dashboard from '../Dashboard/Dashboard'
import Layout from '../Layout/Layout'
import Notifications from '../Notifications/Notifications'
import Settings from '../Settings/Settings'
import SignUp from '../Auth/SignUp'
import Transfer from '../Transfer/Transfer'

const App: React.FC = () => (
  <Routes>
    <Route element={<Layout />} path="/">
      <Route element={<Dashboard />} index />
      <Route element={<Analytics />} path="analytics" />
      <Route element={<Balance />} path="balance" />
      <Route element={<Notifications />} path="notifications" />
      <Route element={<Settings />} path="settings" />
      <Route element={<Transfer />} path="transfer" />
    </Route>
    <Route element={<AuthLayout />} path="auth">
      <Route element={<SignUp />} path="sign-up" />
    </Route>
  </Routes>
)

export default App
