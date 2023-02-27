import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Analytics from '../Analytics/Analytics'
import Balance from '../Balance/Balance'
import Dashboard from '../Dashboard/Dashboard'
import Notifications from '../Notifications/Notifications'
import Settings from '../Settings/Settings'
import Transfer from '../Transfer/Transfer'
import Layout from '../Layout/Layout'

const App: React.FC = () => (
  <Routes>
    <Route element={<Layout />} path="/">
      <Route element={<Dashboard />} index />
      <Route element={<Analytics />} path="/analytics" />
      <Route element={<Balance />} path="/balance" />
      <Route element={<Notifications />} path="/notifications" />
      <Route element={<Settings />} path="/settings" />
      <Route element={<Transfer />} path="/transfer" />
    </Route>
  </Routes>
)

export default App
