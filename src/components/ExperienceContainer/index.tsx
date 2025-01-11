import styled from 'styled-components'
import ExperienceCard from '../ExperienceCard'
import { Download } from 'react-feather'
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

const dataWork = [
  {
    timer: '2022 - Presente',
    title: 'Desenvolvedora Frontend e Mobile - NADIC',
    text: 'Trabalhei em projetos nacionais e internacionais de grande escala, incluindo colaborações com o Ministério da Educação para desenvolver sistemas para o novo ensino médio, atuando como Desenvolvedora Frontend e Mobile. Utilizei tecnologias como Next.js, React, React Native e Angular, buscando alta performance e escalabilidade para esses sistemas. Além disso, pude aplicar abordagens como microfrontends, consumo de microserviços e "Offline First" em aplicações mobile.',
    link: 'https://nadic.ifrn.edu.br/',
  },
  {
    timer: '2021 - 2022',
    title: 'Desenvolvedora Frontend e Mobile - Pechinchou',
    text: 'Liderei a equipe na transição do aplicativo de Flutter para React Native, resultando em mais de 100 mil downloads em apenas um mês após o lançamento.Participei da Reconstrução do frontend do site da empresa com Next.js e Styled-Components, aumentando a capacidade de tráfego para suportar mais de 3 mil acessos simultâneos. Assumi temporariamente o papel de Scrum Master, garantindo um fluxo de trabalho eficiente e colaborativo por meio da distribuição de tarefas e coordenação das reuniões diárias.',
    link: 'https://pechinchou.com.br/',
  },
  {
    timer: '2020 - 2021',
    title: 'Aprendiz - VVC Distribuidora de Bebidas Ltda.',
    text: 'Auxiliei no monitoramento e suporte da infraestrutura de rede da empresa, assegurando sua estabilidade e operação eficaz.Também desenvolvi uma aplicação desktop em C# para otimizar a distribuição de notas fiscais de pedidos, automatizando um processo manual e reduzindo o tempo gasto no setor de logística de minutos para segundos.',
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
