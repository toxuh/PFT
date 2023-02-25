import React, { createContext, useState, useEffect, useContext } from 'react'

import { DEFAULT_APPLICATION_THEME, LOCALSTORAGE_THEME } from '../constants'

interface ThemeContextProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {}
})

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    DEFAULT_APPLICATION_THEME === 'dark'
  )

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    )
  }, [isDarkMode])

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_THEME, isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCALSTORAGE_THEME)

    if (savedTheme === 'dark') {
      setIsDarkMode(true)
    }
  }, [])

  const contextValue: ThemeContextProps = {
    isDarkMode,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextProps => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return { isDarkMode, toggleTheme }
}
