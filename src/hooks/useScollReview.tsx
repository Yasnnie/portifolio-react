import { useEffect } from 'react'

interface ScrollReviewConfig {
  origin?: string | undefined
  distance?: string | undefined
  duration?: number | undefined
  delay?: number | undefined
  interval?: number | undefined
  opacity?: number | undefined
  scale?: number | undefined
  easing?: string | undefined
  cleanup?: boolean | undefined
  container?: any
  mobile?: boolean | undefined
  reset?: boolean | undefined
  useDelay?: string | undefined
  viewFactor?: number | undefined
}

function useScrollReveal(selector: string, config: ScrollReviewConfig) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((modulo) => {
        const ScrollReveal = modulo.default
        const sr = ScrollReveal()
        sr.reveal(selector, config)
      })
    }
  }, [selector, config])

  return null
}

export default useScrollReveal
