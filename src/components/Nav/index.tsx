import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import { localeContent, Language } from '@/i18n/locales'
import LogoMark from '/public/assets/icon/Logo.svg'
import LogoMarkDark from '/public/assets/icon/LogoDark.svg'

const languageOptions: Language[] = ['pt', 'en']
const sectionIds = ['sobre', 'projetos', 'experiencia', 'contato'] as const

interface Props {
  language: Language
  onLanguageChange: (language: Language) => void
}

export default function Nav({ language, onLanguageChange }: Props) {
  const nav = localeContent[language].nav
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const links = [
    { id: 'sobre', label: nav.about },
    { id: 'projetos', label: nav.projects },
    { id: 'experiencia', label: nav.experience },
    { id: 'contato', label: nav.contact },
  ]

  return (
    <Bar>
      <a className="logo" href="#top" aria-label="Yasmin Carvalho">
        {/* The browser downloads only the mark that matches the theme. */}
        <picture>
          <source
            srcSet={LogoMarkDark.src}
            media="(prefers-color-scheme: dark)"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LogoMark.src} alt="" width={43} height={48} />
        </picture>
      </a>

      <nav className="pill links" aria-label="Principal">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-current={active === link.id ? 'true' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="right">
        <div
          className="pill language"
          role="group"
          aria-label={nav.languageLabel}
        >
          {languageOptions.map((option) => (
            <button
              type="button"
              key={option}
              aria-pressed={language === option}
              onClick={() => onLanguageChange(option)}
            >
              {option === 'pt' ? 'PT' : 'EN'}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? nav.closeMenu : nav.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          <span data-open={open} />
          <span data-open={open} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Bar>
  )
}

const Bar = styled.header`
  position: fixed;
  top: 0.9rem;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  max-width: calc(90rem + var(--gutter) * 2);
  margin: 0 auto;
  padding: 0 var(--gutter);

  .pill {
    display: flex;
    align-items: center;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 1000px;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .logo {
    display: flex;
    align-items: center;
    height: 2.25rem;
    transition: transform 0.3s ease;

    picture {
      display: block;
      height: 100%;
    }

    img {
      display: block;
      width: auto;
      height: 2.25rem;
    }

    &:hover {
      transform: rotate(-6deg) scale(1.06);
    }
  }

  .links {
    gap: 0.15rem;
    padding: 0.3rem;

    a {
      padding: 0.55rem 1.05rem;
      border-radius: 1000px;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.2;
      transition:
        background 0.25s ease,
        color 0.25s ease;

      &:hover {
        background: var(--hover-soft);
      }

      &[aria-current='true'] {
        background: var(--text);
        color: var(--text-inverse);
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .language {
    padding: 0.3rem;
    gap: 0.15rem;

    button {
      padding: 0.45rem 0.8rem;
      border: 0;
      border-radius: 1000px;
      background: transparent;
      font-family: var(--font-display);
      font-size: 0.9rem;
      font-weight: 700;
      line-height: 1.2;
      cursor: pointer;
      transition:
        background 0.25s ease,
        color 0.25s ease;

      &[aria-pressed='true'] {
        background: var(--orange);
        color: var(--ink);
      }

      &:not([aria-pressed='true']):hover {
        background: var(--hover-soft);
      }
    }
  }

  .menu-button {
    display: none;
    position: relative;
    width: 2.9rem;
    height: 2.9rem;
    border: 0;
    border-radius: 100%;
    background: var(--text);
    cursor: pointer;

    span {
      position: absolute;
      left: 50%;
      width: 1.1rem;
      height: 2px;
      background: var(--text-inverse);
      border-radius: 2px;
      transition:
        transform 0.3s ease,
        top 0.3s ease;

      &:nth-child(1) {
        top: calc(50% - 4px);
        transform: translateX(-50%);
      }

      &:nth-child(2) {
        top: calc(50% + 3px);
        transform: translateX(-50%);
      }

      &[data-open='true']:nth-child(1) {
        top: 50%;
        transform: translateX(-50%) rotate(45deg);
      }

      &[data-open='true']:nth-child(2) {
        top: 50%;
        transform: translateX(-50%) rotate(-45deg);
      }
    }
  }

  .mobile-panel {
    display: none;
  }

  @media (max-width: 820px) {
    .links {
      display: none;
    }

    .menu-button {
      display: block;
    }

    .mobile-panel {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 3.8rem;
      left: var(--gutter);
      right: var(--gutter);
      padding: 0.75rem;
      background: var(--glass-strong);
      border: 1px solid var(--glass-border);
      border-radius: 1.5rem;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);

      a {
        padding: 0.95rem 1rem;
        border-radius: 1rem;
        font-family: var(--font-display);
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: -0.02em;

        &:hover {
          background: var(--orange-soft);
        }
      }
    }
  }
`
