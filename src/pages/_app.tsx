import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics'

export default function App({ Component, pageProps }: AppProps) {
  
  useGoogleAnalytics('G-VKSV6D8H7C')

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
