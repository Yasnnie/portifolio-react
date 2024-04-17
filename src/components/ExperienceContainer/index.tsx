import styled from 'styled-components'
import ExperienceCard from '../ExperienceCard'

export default function ExperienceContainer() {
  return (
    <Container id="experiencia">
      <h3 className="c-title">Profissional</h3>

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

  .c-title {
    color: #06f;
    font-family: Inter;
    text-align: center;
    width: 116px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 2rem;
  }
`

const dataWork = [
  {
    timer: '2022 - Presente',
    title: 'Desenvolvedora Frontend e Mobile - NADIC',
    text: 'Trabalhei em projetos nacionais e internacionais de grande escala, incluindo colaborações com o Ministério da Educação para desenvolver sistemas para o novo ensino médio. Utilizei tecnologias como Next.js, React, React Native e Angular;',
    link: 'https://nadic.ifrn.edu.br/',
  },
  {
    timer: '2021 - 2022',
    title: 'Desenvolvedora Frontend e Mobile - Pechinchou',
    text: 'Trabalhei em projetos nacionais e internacionais de grande escala, incluindo colaborações com o Ministério da Educação para desenvolver sistemas para o novo ensino médio. Utilizei tecnologias como Next.js, React, React Native e Angular;',
    link: 'https://pechinchou.com.br/',
  },
  {
    timer: '2020 - 2021',
    title: 'Aprendiz - VVC Distribuidora de Bebidas Ltda.',
    text: 'Trabalhei em projetos nacionais e internacionais de grande escala, incluindo colaborações com o Ministério da Educação para desenvolver sistemas para o novo ensino médio. Utilizei tecnologias como Next.js, React, React Native e Angular;',
    link: 'https://vvcdistribuidora.com.br/',
  },
]

const dataStudy = [
  {
    timer: '2022 - Presente',
    title: 'Graduação em Análise e Desenvolvimento de Sistemas',
    text: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte - Campus Pau dos Ferros',
    link: 'https://portal.ifrn.edu.br/cursos/superiores/graduacao/tecnologia-em-analise-e-desenvolvimento-de-sistemas/',
  },
  {
    timer: '2018 - 2022',
    title: 'Ensino Médio Técnico Integrado em Informática',
    text: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte - Campus Pau dos Ferros',
    link: 'https://portal.ifrn.edu.br/cursos/tecnicos/tecnico-integrado/informatica/',
  },
]
