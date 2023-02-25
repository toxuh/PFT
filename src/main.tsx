import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from './utils/ThemeContext'
import App from './containers/App/App'

import './index.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
