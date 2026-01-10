import styled from 'styled-components'
import { theme } from '@/styles/theme'
import LineProjectCard from '../LineProjectCard'
import { projects } from '@/data/projects'
import { Language, localeContent } from '@/i18n/locales'

interface Props {
  language: Language
}

export default function HomeProjects({ language }: Props) {
  return (
    <Container id="projetos">
      <div className="c-home-projects__d-flex">
        <h3 className="c-home-projects__title">
          {localeContent[language].homeProjectsTitle}
        </h3>
      </div>

      <div className="c-home-projects__c-cards">
        {projects.map((item, index) => (
          <LineProjectCard
            key={index}
            item={{
              title: item.title[language],
              subtitle: item.subtitle,
              description: item.description[language],
              technologies: item.technologies,
              link: item.link,
              img: item.img,
            }}
          />
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
