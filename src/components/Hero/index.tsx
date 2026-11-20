import Image from 'next/image'
import { CSSProperties, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import styled from 'styled-components'
import { localeContent, Language } from '@/i18n/locales'
import ProfileImg from '/public/assets/img/profile.png'
import statusDot from '@/assets/lottie/status-dot.json'
import spark from '@/assets/lottie/spark.json'
import brackets from '@/assets/lottie/code-brackets.json'
import LottieAnimation from '../LottieAnimation'
import Button from '../Button'

interface Props {
  language: Language
}

/** Per-element delay for the CSS entrance animations. */
const delay = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties

function MaskedLine({
  children,
  after = 0,
}: {
  children: string
  after?: number
}) {
  return (
    <span className="mask">
      <span className="line" style={delay(after)}>
        {children}
      </span>
    </span>
  )
}

export default function Hero({ language }: Props) {
  const hero = localeContent[language].hero
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])

  return (
    <Section id="top" ref={ref}>
      <div className="inner">
        <motion.h1
          className="wordmark"
          style={reduce ? undefined : { y: wordmarkY }}
        >
          <span className="sr-only">
            Yasmin Carvalho, {localeContent[language].structuredData.jobTitle}
          </span>
          <span aria-hidden className="letters">
            {'Yasmin.'.split('').map((letter, index) => (
              <span className="mask" key={index}>
                <span
                  className={letter === '.' ? 'line dot' : 'line'}
                  style={delay(0.05 + index * 0.06)}
                >
                  {letter}
                </span>
              </span>
            ))}
          </span>
        </motion.h1>

        <div className="headline">
          <h2>
            <MaskedLine after={0.5}>{hero.line1}</MaskedLine>
            <MaskedLine after={0.6}>{hero.line2}</MaskedLine>
          </h2>
          <div className="actions fade-up" style={delay(0.8)}>
            <Button variant="ink" href="#projetos">
              {hero.ctaProjects}
            </Button>
            <Button
              variant="ghost"
              href="/CV - Yasmin Carvalho.pdf"
              download
            >
              {hero.ctaResume}
            </Button>
          </div>
        </div>

        <figure className="photo fade-up" style={delay(0.3)}>
          <motion.div style={reduce ? undefined : { y: imageY }}>
            <Image
              src={ProfileImg}
              alt={hero.photoAlt}
              priority
              fetchPriority="high"
              sizes="(min-width: 960px) 720px, 90vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>

          <LottieAnimation data={spark} className="deco spark" />
          <LottieAnimation
            data={brackets}
            className="deco brackets"
            staticFrame={110}
          />
          <div className="deco terminal" aria-hidden>
            <span className="prompt">$</span>
            <span className="typed">yarn dev</span>
          </div>
        </figure>

        <div className="intro fade-up" style={delay(0.7)}>
          <div className="status">
            <LottieAnimation data={statusDot} className="dot-anim" />
            {hero.status}
          </div>
          <p className="text">{hero.intro}</p>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  overflow: hidden;
  background: var(--hero-gradient);

  .inner {
    position: relative;
    display: grid;
    grid-template-columns: 1fr clamp(320px, 42vw, 720px) 1fr;
    grid-template-areas:
      'wordmark wordmark wordmark'
      'intro    photo    headline';
    grid-template-rows: auto 1fr;
    column-gap: clamp(1.5rem, 3vw, 3rem);
    min-height: 100svh;
    max-width: calc(90rem + var(--gutter) * 2);
    margin: 0 auto;
    padding: 6.5rem var(--gutter) 0;
  }

  .mask {
    display: inline-block;
    overflow: hidden;
    padding-bottom: 0.06em;
    vertical-align: top;
  }

  .line {
    display: inline-block;
    transform: translateY(115%);
    animation: rise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) var(--d, 0s) forwards;
  }

  .fade-up {
    animation: fade-up 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) var(--d, 0s) both;
  }

  @keyframes rise {
    to {
      transform: none;
    }
  }

  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(1.5rem);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  .wordmark {
    grid-area: wordmark;
    position: relative;
    z-index: 1;
    margin-left: -0.04em;
    font-size: clamp(5.5rem, 19.5vw, 11.7rem);
    font-weight: 700;
    letter-spacing: -0.055em;
    line-height: 0.86;
    pointer-events: none;

    .letters {
      display: block;
    }

    .dot {
      color: var(--orange);
    }
  }

  .headline {
    grid-area: headline;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    padding: 2.25rem 0 3.25rem;
    text-align: right;

    h2 {
      font-size: clamp(2.25rem, 3.7vw, 3.94rem);
      letter-spacing: -0.05em;
      line-height: 1;
      white-space: nowrap;
    }

    h2 .mask {
      display: block;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 0.6rem;
    }
  }

  /* Transparent cutout: no frame, no crop, no background. */
  .photo {
    grid-area: photo;
    position: relative;
    z-index: 2;
    align-self: end;
    width: 100%;
    margin-top: -4.5rem;
  }

  /* Floating dev pieces around the photo. Positions are relative to the photo. */
  .deco {
    position: absolute;
    z-index: 3;
    pointer-events: none;
    animation: float 7s ease-in-out infinite;
  }

  .spark {
    width: 20%;
    aspect-ratio: 1;
    right: -13%;
    top: 36%;
  }

  .brackets {
    width: 26%;
    aspect-ratio: 3 / 2;
    left: -17%;
    top: 20%;
    animation-delay: -2s;
  }

  .terminal {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    left: -25%;
    top: 47%;
    padding: 0.6rem 1.05rem 0.65rem;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 1000px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    animation-delay: -1s;

    .prompt {
      color: var(--accent-text);
    }

    .typed {
      display: inline-block;
      overflow: hidden;
      width: 8ch;
      border-right: 2px solid var(--accent-text);
      animation:
        type 5s steps(8, end) infinite,
        caret 0.8s step-end infinite;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.7rem);
    }
  }

  @keyframes type {
    0% {
      width: 0;
    }
    45%,
    85% {
      width: 8ch;
    }
    100% {
      width: 0;
    }
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }

  .intro {
    grid-area: intro;
    align-self: end;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 24rem;
    padding-bottom: 3.25rem;

    .status {
      display: inline-flex;
      align-items: center;
      align-self: flex-start;
      gap: 0.35rem;
      padding: 0.2rem 1.1rem 0.2rem 0.4rem;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: 1000px;
      font-family: var(--font-display);
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .dot-anim {
      width: 2.4rem;
      height: 2.4rem;
      flex-shrink: 0;
    }

    .text {
      color: var(--muted);
      font-size: 1.125rem;
    }
  }

  @media (max-width: 960px) {
    .inner {
      grid-template-columns: 1fr;
      grid-template-areas:
        'wordmark'
        'headline'
        'photo'
        'intro';
      grid-template-rows: none;
      min-height: 0;
      padding-top: 6rem;
    }

    .headline {
      align-items: flex-start;
      text-align: left;
      padding: 0.5rem 0 2rem;

      .actions {
        justify-content: flex-start;
      }
    }

    .photo {
      max-width: 26rem;
      margin: 0 auto;
    }

    .spark {
      right: 2%;
      top: 30%;
    }

    .brackets {
      left: 0;
      top: 16%;
      width: 24%;
    }

    .terminal {
      left: 2%;
      top: 54%;
      font-size: 0.8rem;
      padding: 0.45rem 0.8rem 0.5rem;
    }

    .intro {
      max-width: none;
      padding: 2rem 0 3rem;
    }
  }
`
