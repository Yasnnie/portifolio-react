import { theme } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'

import ProfileImg from '/public/assets/img/profile.png'

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
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NavOptions = [
  {
    text: 'Início',
    icon: WhiteHome,
    selectIcon: BlueHome,
    link: "/"
  },
  {
    text: 'Sobre',
    icon: WhiteProfile,
    selectIcon: WhiteProfile,
    link: "/sobre"
  },
  {
    text: 'Experiência',
    icon: WhiteWork,
    selectIcon: BlueWork,
    link: "/experiencia"
  },
  {
    text: 'Projetos',
    icon: WhiteProject,
    selectIcon: BlueProject,
    link: "/projetos"
  },
  {
    text: 'Contato',
    icon: WhitePhone,
    selectIcon: BluePhone,
    link: "/contato"
  },
]

export default function Header() {
    const router = useRouter()


  return (
    <Container>
      <div className="c-header__c-img">
        <Image
          src={ProfileImg}
          alt="foto perfil Yasmin"
          objectFit="contain"
          fill
          quality={100}
        />
      </div>
      <h1 className="c-header__title">Yasmin Carvalho</h1>
      <p className="c-header__subtitle">Desenvolvedora Web e Mobile</p>

      <nav className="c-header__nav">
        {NavOptions.map((item) => {
            const isSelect = router.asPath == item.link

          return (
            <Link href={item.link} passHref legacyBehavior>
              <a className={`c-header__nav__link ${isSelect && 'c-header__nav__link--selected'}`}>
                <Image src={isSelect ? item.selectIcon : item.icon} alt="icone" /> {item.text}
              </a>
            </Link>
          )
        })}
      </nav>

      <span className="c-header__copyright">
        © 2024 - Yasmin Carvalho T. de Alencar
      </span>
    </Container>
  )
}

const Container = styled.header`
  width: 16.25rem;

  .c-header__c-img {
    width: 160px;
    height: 160px;
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
    margin: 1rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);

    .c-header__nav__link {
      font-size: 1rem;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      border-radius: 6px;
      padding: 10px 0.5rem;
      font-weight: 500;
      gap: 10px;
      color: #fff;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    
    .c-header__nav__link--selected{
        background: rgba(0, 102, 255, 0.08);
        color: ${theme.primaryBlue};
    }
  }

  .c-header__copyright {
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0em;
    color: #fff;
  }
`
