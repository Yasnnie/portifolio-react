import { theme } from '@/styles/theme'
import styled from 'styled-components'
import Logo from '/public/assets/icon/Logo.svg'
import Image from 'next/image'
import Testand from '../../../public/assets/img/SageValorant2.png'
export default function HomeAbout() {
  return (
    <Container>
      <h2>
        <Image src={Logo} alt="Logo" width={24} height={24} />
      </h2>

      <p className="c-home-about__text">
        Por volta de 2020, comecei a explorar HTML e CSS para criar sites para
        servidores de RP e Javascrip para bots do Discord. Não demorou muito,
        logo entrei no mercado de trabalho para minha primeira vaga como
        desenvolvedora web em uma{' '}
        <a href="https://pechinchou.com.br/" target="_blank">
          startup
        </a>{' '}
        local. Lá, foquei em desenvolver sistemas escaláveis e com uma boa
        experiência de usuário.
      </p>
      <p className="c-home-about__text">
        Atualmente, faço parte do{' '}
        <a href="https://nadic.ifrn.edu.br/" target="_blank">
          NADIC
        </a>
        , um núcleo de pesquisa dedicado a criar soluções tecnológicas para
        diversas empresas. Lá trabalho em projetos voltados para{' '}
        <a href="https://rieh.mec.gov.br/" target="_blank">
          educação brasileira
        </a>
        . Meu objetivo é contribuir para a sociedade através da tecnologia,
        buscando impactar positivamente a vida das pessoas. Sempre me dediquei a
        projetos que têm o potencial de alcançar grandes massas e fazer a
        diferença no mundo.
      </p>
      <p className="c-home-about__text">
        No meu tempo livre, gosto de jogar{' '}
        <span className="cursor">Valorant</span> e outros jogos online, ouvir
        música e assistir a séries e filmes. Fora do computador, priorizo
        momentos de qualidade com minha família e amigos, como também conhecer
        novos lugares.
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
