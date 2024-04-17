import styled from 'styled-components'
import { theme } from '@/styles/theme'
import BlueArrow from '/public/assets/icon/BlueArrow.svg'
import Image from 'next/image'
import LineProjectCard from '../LineProjectCard'
import { highLightProjects } from '@/data/projects'

export default function HomeProjects() {
  return (
    <Container id="projetos">
      <div className="c-home-projects__d-flex">
        <h3 className="c-home-projects__title">Projetos</h3>

        <a className="c-home-projects__link">
          Todos os projetos
          <Image src={BlueArrow} alt="icone ir" />
        </a>
      </div>

      <div className="c-home-projects__c-cards">
        {highLightProjects.map((item, index) => (
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
      font-size: 26px;
      font-weight: 700;
      line-height: 31px;
      color: ${theme.white};
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
      .card {
        opacity: 0.5;
      }
    }
  }
`
