import { localeContent, Language } from '@/i18n/locales'
import styled from 'styled-components'

interface Props {
  language: Language
}

export default function Footer({ language }: Props) {
  const footer = localeContent[language].footer

  return (
    <Container>
      <p className="c-footer__text">
        {footer.designer}
        <a
          className="c-footer__link"
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
        >
          Figma
        </a>{' '}
        {footer.code}
        <a
          className="c-footer__link"
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visual Studio Code
        </a>
        . {footer.technologies}
        <a
          className="c-footer__link"
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>
        {footer.techConnector}
        <a
          className="c-footer__link"
          href="https://styled-components.com/"
          target="_blank"
          rel="noreferrer"
        >
          Styled-Components
        </a>
        , {footer.published}
      </p>

      <p className="c-footer__text">{footer.closing}</p>
      <span className="c-footer__copyright">{footer.copyright}</span>
    </Container>
  )
}

const Container = styled.footer`
  margin-top: 32px;
  max-width: 480px;
  color: ${({ theme }) => theme.footerTextColor};

  .c-footer__text {
    font-size: 16px;
    line-height: 145%;

    & + p {
      margin-top: 16px;
    }
  }

  .c-footer__link {
    color: ${({ theme }) => theme.footerLinkColor};
    transition: 200ms;

    &:hover {
      color: ${({ theme }) => theme.primary};
      transition: 200ms;
    }
  }

  .c-footer__copyright {
    margin-top: 16px;
    font-size: 12px;
    display: flex;
  }

  @media (max-width: 600px) {
    margin: 32px auto 0px auto;
    text-align: center;

    .c-footer__copyright {
      width: 100%;
      justify-content: center;
    }
  }
`
