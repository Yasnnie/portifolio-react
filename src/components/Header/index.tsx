import Image from 'next/image'
import styled from 'styled-components'
import ProfileImg from '/public/assets/img/profile.jpeg'
import { useEffect, useState } from 'react'
import Contact from '../Contact'
import { Home, Codepen, Briefcase } from 'react-feather'
import { localeContent, Language } from '@/i18n/locales'

const iconSize = 20
const languageOptions: Language[] = ['pt', 'en']

interface Props {
  language: Language
  onLanguageChange: (language: Language) => void
}

export default function Header({ language, onLanguageChange }: Props) {
  const [selected, setSelected] = useState('#')

  useEffect(() => {
    const sections = [
      { id: '', offset: 0 },
      {
        id: 'experiencia',
        offset: document.getElementById('experiencia')?.offsetTop || 0,
      },
      {
        id: 'projetos',
        offset: document.getElementById('projetos')?.offsetTop || 0,
      },
    ]

    const handleScroll = () => {
      const scrollY = window.scrollY

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        const nextSection = sections[i + 1]

        const nextOffset = nextSection ? nextSection.offset : Infinity

        if (scrollY >= section.offset && scrollY < nextOffset) {
          setSelected(`#${section.id}`)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerContent = localeContent[language].header
  const navOptions = [
    {
      text: headerContent.nav.home,
      icon: <Home width={iconSize} height={iconSize} />,
      link: '#',
    },
    {
      text: headerContent.nav.experience,
      icon: <Briefcase width={iconSize} height={iconSize} />,
      link: '#experiencia',
    },
    {
      text: headerContent.nav.projects,
      icon: <Codepen width={iconSize} height={iconSize} />,
      link: '#projetos',
    },
  ]

  const objectSelected = navOptions.find((item) => item.link == selected)

  return (
    <>
      <MobileTitle open={objectSelected?.link != '#'}>
        {objectSelected?.text}
      </MobileTitle>

      <Container>
        <div className="c-header__c-img">
          <Image
            src={ProfileImg}
            alt="foto perfil Yasmin"
            fill
            quality={100}
            objectFit="cover"
          />
        </div>
        <h1 className="c-header__title">Yasmin Carvalho</h1>
        <p className="c-header__subtitle">{headerContent.subtitle}</p>
        <Contact />
        <nav className="c-header__nav">
          {navOptions.map((item, index) => {
            const isSelect = selected == item.link

            return (
              <a
                className={`c-header__nav__link ${
                  isSelect && 'c-header__nav__link--selected'
                }`}
                key={index}
                href={item.link}
              >
                {item.icon}
                {item.text}
              </a>
            )
          })}
        </nav>
        <div className="c-header__language">
          <span>{headerContent.languageLabel}</span>
          <div className="c-header__language__buttons">
            {languageOptions.map((option) => (
              <button
                type="button"
                key={option}
                className={`c-header__language__button ${
                  language === option && 'c-header__language__button--selected'
                }`}
                aria-pressed={language === option}
                onClick={() => onLanguageChange(option)}
              >
                {option === 'pt' ? 'PT-BR' : 'EN'}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

const Container = styled.header`
  min-width: 17.5rem;
  max-width: 17.5rem;
  display: flex;
  flex-direction: column;
  position: sticky;
  height: 500px;
  top: 32px;

  .c-header__c-img {
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    border-radius: 100%;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    position: relative;
  }

  .c-header__title {
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.primary};
  }

  .c-header__subtitle {
    font-size: 0.875rem;
    line-height: 1rem;
    text-align: center;
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.navLinkColor};
  }

  .c-header__language {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.navLinkColor};
  }

  .c-header__language__buttons {
    display: flex;
    gap: 0.35rem;
  }

  .c-header__language__button {
    border: 1px solid ${({ theme }) => theme.navLinkColor};
    background: transparent;
    color: ${({ theme }) => theme.navLinkColor};
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      background: ${({ theme }) => theme.muted} !important;
      border-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
    }
  }

  .c-header__language__button--selected {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    border-color: ${({ theme }) => theme.primary};
  }

  .c-header__nav {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    margin: 1.25rem 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.headerBoderColor};

    .c-header__nav__link {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.25rem;
      letter-spacing: 0em;
      text-align: left;
      border-radius: 0.375rem;
      padding: 0.625rem 0.5rem;
      font-weight: 500;
      gap: 0.625rem;
      color: ${({ theme }) => theme.navLinkColor};
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.2s;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        background: ${({ theme }) => theme.navLinkBgHover};
        height: 100%;
        left: 0px;
        border-radius: 0.375rem;
        z-index: -1;
        width: 0%;
        transition: 0.4s;
      }

      &:hover {
        &::before {
          content: '';
          transition: 0.4s;
          width: 100%;
        }
      }
    }

    .c-header__nav__link--selected {
      color: ${({ theme }) => theme.primary};
      transition: 0.2s;
      &::before {
        background: ${({ theme }) => theme.navLinkBgHover};
        width: 100%;
      }
    }
  }

  @media (max-width: 1080px) {
    position: relative;
    top: unset;
    min-width: 100%;
    max-width: 100%;
    height: max-content;

    .c-header__nav {
      flex-direction: row;
      width: 100%;
      padding: 4px 0;
      margin-bottom: 0px;

      .c-header__nav__link {
        flex: 1;
        justify-content: center;
        gap: 6px;
        padding: 10px 4px;
        font-size: 14px;

        &::before {
          z-index: 1;
        }
      }
    }
  }
`

const MobileTitle = styled.div<{ open: boolean }>`
  position: fixed;
  display: none;
  z-index: 100;
  width: 100%;
  left: 0px;
  padding: 20px 24px;
  background: ${({ theme }) => theme.mobileHeaderBg};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.mobileHeaderColor};
  letter-spacing: 1px;
  transition: 0.5s;

  @media (max-width: 600px) {
    display: flex;
    top: ${({ open }) => (open ? '0px' : '-150px')};
    transition: 0.5s;
  }
`
