import { darkTheme, lightTheme } from '@/styles/theme'
import { ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: ReactNode
}

export function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <button onClick={toggleTheme}>mudar tema</button>
      {children}
    </ThemeProvider>
  )
}
