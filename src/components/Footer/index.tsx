import { motion } from 'framer-motion'
import { ArrowUpRight } from 'react-feather'
import styled from 'styled-components'
import { localeContent, Language } from '@/i18n/locales'
import Button from '../Button'

interface Props {
  language: Language
}

const EMAIL = 'dev.cyas@gmail.com'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/carvalho-yas/' },
  { label: 'GitHub', href: 'https://github.com/Yasnnie' },
  { label: 'Instagram', href: 'https://www.instagram.com/yasc.mp4/' },
]

export default function Footer({ language }: Props) {
  const contact = localeContent[language].contact
  const footer = localeContent[language].footer

  return (
    <Section id="contato">
      <div className="inner">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p className="text">{contact.text}</p>

        <div className="actions">
          <Button variant="orange" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </Button>
          {socials.map((social) => (
            <Button
              key={social.label}
              variant="ghostLight"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
              <ArrowUpRight size={18} />
            </Button>
          ))}
        </div>
      </div>

      <motion.div
        className="wordmark"
        aria-hidden
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        variants={{ shown: { transition: { staggerChildren: 0.07 } } }}
      >
        {'Yasmin.'.split('').map((letter, index) => (
          <span className="mask" key={index}>
            <motion.span
              className={letter === '.' ? 'line dot' : 'line'}
              variants={{
                hidden: { y: '110%' },
                shown: {
                  y: 0,
                  transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] },
                },
              }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </motion.div>

      <div className="legal">
        <span>{footer.copyright}</span>
        <span>{footer.built}</span>
        <a href="#top">{contact.backToTop} ↑</a>
      </div>
    </Section>
  )
}

const Section = styled.footer`
  overflow: hidden;
  padding-top: var(--section-gap);
  background: var(--ink);
  color: var(--white);

  .inner {
    max-width: calc(var(--max-width) + var(--gutter) * 2);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  .eyebrow {
    color: var(--ash-on-dark);
    font-family: var(--font-display);
    font-size: 1.0625rem;
    font-weight: 700;
  }

  h2 {
    margin-top: 0.75rem;
    font-size: clamp(3.2rem, 11vw, 8.2rem);
    letter-spacing: -0.055em;
    line-height: 0.9;
  }

  .text {
    max-width: 30rem;
    margin-top: 1.75rem;
    color: var(--ash-on-dark);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 2.5rem;
  }

  .wordmark {
    margin-top: clamp(3rem, 7vw, 6rem);
    padding: 0 var(--gutter);
    color: var(--white);
    font-family: var(--font-display);
    font-size: clamp(6rem, 27vw, 24rem);
    font-weight: 700;
    letter-spacing: -0.06em;
    line-height: 0.76;
    text-align: center;
    white-space: nowrap;
    user-select: none;

    .mask {
      display: inline-block;
      overflow: hidden;
      padding: 0 0 0.04em;
    }

    .line {
      display: inline-block;
    }

    .dot {
      color: var(--orange);
    }
  }

  .legal {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem 2rem;
    max-width: calc(var(--max-width) + var(--gutter) * 2);
    margin: 0 auto;
    padding: 1.75rem var(--gutter) 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    color: var(--ash-on-dark);
    font-size: 0.9375rem;

    a {
      color: var(--white);
      font-family: var(--font-display);
      font-weight: 700;

      &:hover {
        color: var(--orange);
      }
    }
  }
`
