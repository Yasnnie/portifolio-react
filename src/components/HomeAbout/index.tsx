import { localeContent, Language } from '@/i18n/locales'
import { theme } from '@/styles/theme'
import styled from 'styled-components'
import Logo from '/public/assets/icon/Logo.svg'
import Image from 'next/image'
import Testand from '../../../public/assets/img/SageValorant2.png'

interface Props {
  language: Language
}

export default function HomeAbout({ language }: Props) {
  const paragraphs = localeContent[language].homeAbout
  return (
    <Container>
      <h2>
        <Image src={Logo} alt="Logo" width={24} height={24} />
      </h2>

      <p className="c-home-about__text">
        {paragraphs.paragraph1.intro}
        <a href="https://pechinchou.com.br/" target="_blank" rel="noreferrer">
          {paragraphs.paragraph1.link}
        </a>
        {paragraphs.paragraph1.afterLink}
      </p>
      <p className="c-home-about__text">
        {paragraphs.paragraph2.intro}
        <a href="https://nadic.ifrn.edu.br/" target="_blank" rel="noreferrer">
          {paragraphs.paragraph2.highlight1}
        </a>
        {paragraphs.paragraph2.middle}
        <a href="https://rieh.mec.gov.br/" target="_blank" rel="noreferrer">
          {paragraphs.paragraph2.highlight2}
        </a>
        {paragraphs.paragraph2.outro}
      </p>
      <p className="c-home-about__text">
        {paragraphs.paragraph3.intro}
        <span className="cursor">{paragraphs.paragraph3.highlight}</span>
        {paragraphs.paragraph3.outro}
      </p>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  margin-bottom: 1.75rem;

  .c-home-about__text {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin-top: 1rem;

    color: ${({ theme }) => theme.aboutMeTextColor};

    a,
    span {
      color: ${({ theme }) => theme.aboutMeHighlightTextColor};
      font-weight: 600;
      cursor: pointer;
      transition: 200ms;

      &:hover {
        color: ${({ theme }) => theme.primary};
        transition: 200ms;
      }
    }

    .cursor {
      cursor: url(${Testand.src}), pointer;
    }
  }

  .c-home-about__link {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
    color: ${theme.primaryBlue};
    margin-top: 1rem;
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
`
