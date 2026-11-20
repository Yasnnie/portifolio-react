import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Inter_Tight } from 'next/font/google'
import Analytics from '@/components/Analytics'

// Self-hosted by Next at build time: no render-blocking request to Google.
const inter = Inter({ subsets: ['latin'], display: 'swap' })
const interTight = Inter_Tight({ subsets: ['latin'], display: 'swap' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-body: ${inter.style.fontFamily}, 'Helvetica Neue', Helvetica,
            Arial, sans-serif;
          --font-display: ${interTight.style.fontFamily}, 'Helvetica Neue',
            Helvetica, Arial, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
