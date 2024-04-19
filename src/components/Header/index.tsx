import { theme } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'

import ProfileImg from '/public/assets/img/profile.jpeg'

import WhiteHome from '/public/assets/icon/WhiteHome.svg'
import WhiteProfile from '/public/assets/icon/WhiteProfile.svg'
import WhiteWork from '/public/assets/icon/WhiteWork.svg'
import WhiteProject from '/public/assets/icon/WhiteProject.svg'
import WhitePhone from '/public/assets/icon/WhitePhone.svg'

import BlueHome from '/public/assets/icon/BlueHome.svg'
import BlueProfile from '/public/assets/icon/BlueProfile.svg'
import BlueWork from '/public/assets/icon/BlueWork.svg'
import BlueProject from '/public/assets/icon/BlueProject.svg'
import BluePhone from '/public/assets/icon/BluePhone.svg'
import { useEffect, useState } from 'react'
import Contact from '../Contact'

const NavOptions = [
  {
    text: 'Início',
    icon: WhiteHome,
    selectIcon: BlueHome,
    link: '#',
  },
  {
    text: 'Experiência',
    icon: WhiteWork,
    selectIcon: BlueWork,
    link: '#experiencia',
  },
  {
    text: 'Projetos',
    icon: WhiteProject,
    selectIcon: BlueProject,
    link: '#projetos',
  },
]

export default function Header() {
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

  return (
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
      <p className="c-header__subtitle">Desenvolvedora Web e Mobile</p>
      <Contact />
      <nav className="c-header__nav">
        {NavOptions.map((item, index) => {
          const isSelect = selected == item.link

          return (
            <a
              className={`c-header__nav__link ${
                isSelect && 'c-header__nav__link--selected'
              }`}
              key={index}
              href={item.link}
            >
              <Image src={isSelect ? item.selectIcon : item.icon} alt="icone" />{' '}
              {item.text}
            </a>
          )
        })}
      </nav>

 
    </Container>
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
    color: ${theme.primaryBlue};
  }

  .c-header__subtitle {
    font-size: 0.875rem;
    line-height: 1rem;
    text-align: center;
    margin-top: 0.25rem;
  }

  .c-header__nav {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    margin: 1.25rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);

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
      color: ${theme.white};
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.2s;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        background: rgba(0, 102, 255, 0.04);
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
      color: ${theme.primaryBlue};
      transition: 0.2s;
      &::before {
        background: rgba(0, 102, 255, 0.08);
        width: 100%;
      }
    }
  }

  .c-header__copyright {
    font-size: 0.75rem;
    line-height: 0.75rem;
    letter-spacing: 0em;
    color: ${theme.white};
    position: absolute;
    bottom: 0px;
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
      }
    }
  }
`
