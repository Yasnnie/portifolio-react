import styled from 'styled-components'
import { theme } from '@/styles/theme'
import BlueArrow from '/public/assets/icon/BlueArrow.svg'
import Image from 'next/image'
import LineProjectCard from '../LineProjectCard'
import { projects } from '@/data/projects'
import { useEffect } from 'react'

export default function HomeProjects() {
  return (
    <Container id="projetos">
      <div className="c-home-projects__d-flex">
        <h3 className="c-home-projects__title">Projetos</h3>

        {/* <a className="c-home-projects__link">
          Todos os projetos
          <Image src={BlueArrow} alt="icone ir" />
        </a> */}
      </div>

      <div className="c-home-projects__c-cards">
        {projects.map((item, index) => (
          <LineProjectCard key={index} item={item} />
        ))}
      </div>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  padding: 32px 0;

  .c-home-projects__d-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;

    .c-home-projects__title {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      line-height: 24px;
      color: ${({ theme }) => theme.primary};
    }

    .c-home-projects__link {
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      color: ${theme.primaryBlue};
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .c-home-projects__c-cards {
    display: flex;
    flex-direction: column;
    gap: 32px;

    &:hover {
      .card-project {
        opacity: 0.35;
        filter: blur(1.5px);
      }
    }
  }

  @media (max-width: 600px) {
    padding: 48px 0;
    .c-home-projects__title {
      display: none;
    }
  }
`
