import styled from 'styled-components'
import ProjectCard from '../ProjectCard'
import { theme } from '@/styles/theme'

import WhitePaginationArrowLeft from '/public/assets/icon/WhitePaginationArrowLeft.svg'
import WhitePaginationArrowRight from '/public/assets/icon/WhitePaginationArrowRight.svg'
import Image from 'next/image'

export default function GridProjects() {
  return (
    <Container>
      <h2 className="c-projects__title">Projetos</h2>
      <p className="c-projects__subtitle">
        <b>Código, Café e Criatividade:</b> Aqui, você encontrará uma coleção de
        projetos, variando de trabalhos e hobbys, que ilustram minha paixão pelo
        desenvolvimento.
      </p>

      <div className="c-projects__grid">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div className="c-projects__pagination">
        <button className="c-projects__pagination__button">
          <Image src={WhitePaginationArrowLeft} alt="voltar" />
        </button>
        <button className="c-projects__pagination__button c-projects__pagination__button--selected">
          1
        </button>
        <button className="c-projects__pagination__button">2</button>
        <button className="c-projects__pagination__button">3</button>
        <button className="c-projects__pagination__button">...</button>
        <button className="c-projects__pagination__button">6</button>
        <button className="c-projects__pagination__button">
          <Image src={WhitePaginationArrowRight} alt="Próximo" />
        </button>
      </div>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .c-projects__title {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    color: ${theme.primaryBlue};
    margin-bottom: 12px;
  }

  .c-projects__subtitle {
    max-width: 550px;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: ${theme.white};
    margin-bottom: 28px;
  }

  .c-projects__grid {
    margin-top: 28px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding-top: 28px;
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .c-projects__pagination {
    margin-top: 28px;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .c-projects__pagination__button {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      font-size: 16px;
      justify-content: center;
      border-radius: 4px;
      border: none;
      background: transparent;
      cursor: pointer;
    }

    .c-projects__pagination__button--selected {
      background: ${theme.primaryBlue};
    }
  }
`
