import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '@/context/ThemeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
