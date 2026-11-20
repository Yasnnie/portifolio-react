import { useEffect, useRef } from 'react'
import type { AnimationItem } from 'lottie-web'

interface Props {
  data: object
  loop?: boolean
  className?: string
  /** Accessible name. Leave empty for purely decorative animations. */
  label?: string
  /** Frame shown when the visitor prefers reduced motion. */
  staticFrame?: number
}

/**
 * Plays a Lottie animation without getting in the way of the first paint.
 * The player (SVG-only build) is fetched only after the browser is idle,
 * so it never competes with the content that search engines and visitors
 * see first.
 */
export default function LottieAnimation({
  data,
  loop = true,
  className,
  label,
  staticFrame = 120,
}: Props) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animation: AnimationItem | undefined
    let cancelled = false

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const start = async () => {
      const lottie = (await import('lottie-web/build/player/lottie_light'))
        .default
      if (cancelled || !container.current) return

      animation = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop,
        autoplay: !reduceMotion,
        animationData: data,
      })

      if (reduceMotion) animation.goToAndStop(staticFrame, true)
    }

    // Safari only added requestIdleCallback recently, so fall back to a timer.
    const hasIdle = 'requestIdleCallback' in window
    const handle = hasIdle
      ? window.requestIdleCallback(() => void start(), { timeout: 2500 })
      : window.setTimeout(() => void start(), 800)

    return () => {
      cancelled = true
      if (hasIdle) window.cancelIdleCallback(handle)
      else window.clearTimeout(handle)
      animation?.destroy()
    }
  }, [data, loop, staticFrame])

  return (
    <div
      ref={container}
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  )
}
