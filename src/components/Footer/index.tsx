import { theme } from '@/styles/theme'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
      <p className="c-footer__text">
        O Designer desse portifólio foi criado no{' '}
        <a
          className="c-footer__link"
          href="https://www.figma.com/"
          target="_blank"
        >
          Figma
        </a>{' '}
        e código feito pelo{' '}
        <a
          className="c-footer__link"
          href="https://code.visualstudio.com/"
          target="_blank"
        >
          Visual Studio Code
        </a>
        . As tecnológias usasdas são:{' '}
        <a
          className="c-footer__link"
          href="https://nextjs.org/"
          target="_blank"
        >
          Next.js
        </a>{' '}
        e{' '}
        <a
          className="c-footer__link"
          href="https://styled-components.com/"
          target="_blank"
        >
          Styled-Componets
        </a>
        , públicado na{' '}
        <a
          className="c-footer__link"
          href="https://vercel.com/"
          target="_blank"
        >
          Vercel
        </a>
        .
      </p>

      <p className='c-footer__text'>Até a próxima! 👋</p>
      <span className="c-footer__copyright">
        © 2024 - Yasmin Carvalho T. de Alencar
      </span>
    </Container>
  )
}

const Container = styled.footer`
  margin-top: 32px;
  max-width: 480px;
  color: ${theme.gray300};

  .c-footer__text {
    font-size: 16px;
    line-height: 145%;

    & + p {
        margin-top: 16px;
    }
  }

  .c-footer__link {
    color: ${theme.white};
    transition: 200ms;
    
    &:hover{
      color: ${theme.primaryBlue};
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
    
    .c-footer__copyright{
        width: 100%;
        justify-content: center;
    }
  }
`
