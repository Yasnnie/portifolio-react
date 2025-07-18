import styled from 'styled-components'
import ExperienceCard from '../ExperienceCard'
import { Download } from 'react-feather'
import { dataStudy, dataWork } from '@/data/work'
export default function ExperienceContainer() {
  return (
    <Container id="experiencia">
      <div className="row">
        <h3 className="c-title">Profissional</h3>
        <a href="/CV - Yasmin Carvalho.pdf" download>
          <Download size={16} />
          Download CV
        </a>
      </div>

      {dataWork.map((item, index) => (
        <ExperienceCard
          key={index}
          item={item}
          isLast={index == dataWork.length - 1}
        />
      ))}

      <h3 className="c-title" style={{ marginTop: '64px' }}>
        Acadêmica
      </h3>
      {dataStudy.map((item, index) => (
        <ExperienceCard
          key={index}
          item={item}
          isLast={index == dataStudy.length - 1}
        />
      ))}
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  padding: 32px 0;

  .row {
    margin-bottom: 2rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;

    a {
      color: ${({ theme }) => theme.timeExpirienceColor};
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: 0.2s;

      &:hover {
        transition: 0.2s;
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  .c-title {
    color: ${({ theme }) => theme.primary};
    font-family: Inter;
    text-align: center;
    width: 116px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @media (max-width: 600px) {
    padding: 68px 0;
  }
`

