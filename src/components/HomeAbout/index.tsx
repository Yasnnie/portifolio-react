import { theme } from '@/styles/theme'
import Link from 'next/link'
import styled from 'styled-components'

export default function HomeAbout() {
  return (
    <Container>
      <h2 className="c-home-about__title">
        Olá, eu sou{' '}
        <span className="c-home-about__title__bold">Yasmin Carvalho</span>
      </h2>

      <p className="c-home-about__text">
        Minha abordagem combina criatividade e tecnologia para criar soluções
        digitais que não apenas funcionam bem, mas também se destacam
        visualmente. Acredito que a tecnologia pode ser uma poderosa ferramenta
        para agregar pessoas e melhorar suas vidas. Estou comprometida em criar
        experiências de usuário excepcionais que facilitam a vida das pessoas e
        proporcionam resultados excepcionais para os negócios.
      </p>
      <Link href="/sobre" passHref legacyBehavior>
        <a className="c-home-about__link">Ler mais</a>
      </Link>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  margin-bottom: 1.75rem;

  .c-home-about__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0em;
    text-align: left;
    color: ${theme.white};

    .c-home-about__title__bold {
      color: ${theme.primaryBlue};
    }
  }

  .c-home-about__text {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
    text-align: justify;
    margin-top: 1.75rem;
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
