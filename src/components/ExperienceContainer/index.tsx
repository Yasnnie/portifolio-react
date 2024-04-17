import styled from 'styled-components'

export default function ExperienceContainer() {
  return (
    <Container>
      <h3 className="c-title">Profissional</h3>
      <div className="c-experience">
        <p className="c-experience__time">Set/2022 - Presente</p>
        <div className="c-experience__content">
          <p className="c-experience__content__title">NADIC</p>
          <p className="c-experience__content__text">
            Trabalhei em projetos nacionais e internacionais de grande escala,
            incluindo colaborações com o Ministério da Educação para desenvolver
            sistemas para o novo ensino médio. Utilizei tecnologias como
            Next.js, React, React Native e Angular;
          </p>
        </div>
      </div>
      <div className="c-experience">
        <p className="c-experience__time">Ago/2021 - Set/2022</p>
        <div className="c-experience__content">
          <p className="c-experience__content__title">Pechinchou</p>
          <p className="c-experience__content__text">
            Liderei a equipe na transição do aplicativo, originalmente
            desenvolvido em Flutter, para React Native. Após o lançamento, o
            aplicativo obteve mais de 100 mil downloads em apenas um mês; <br />
            <br />
            Liderei a reconstrução do frontend do site da empresa com Next.js e
            Styled-Components, resultando em maior capacidade de tráfego,
            suportando mais de 3 mil acessos simultâneos; <br /> <br />
            Assumi temporariamente o papel de Scrum Master, liderando a
            distribuição de tarefas e coordenando as reuniões diárias. Essa
            responsabilidade garantiu um fluxo de trabalho eficiente e
            colaborativo dentro da equipe;
          </p>
        </div>
      </div>
      <div className="c-experience">
        <p className="c-experience__time">Mar/2020 - Dez/2021</p>
        <div className="c-experience__content">
          <p className="c-experience__content__title">
            VVC Distribuidora de Bebidas Ltda.
          </p>
          <p className="c-experience__content__text">
            Auxiliei no monitoramento e suporte da infraestrutura de rede da
            empresa, garantindo sua estabilidade e funcionamento adequado;
            <br /> <br />
            Desenvolvi uma aplicação desktop em C# para reorganizar e facilitar
            a distribuição de notas fiscais de pedidos. Essa aplicação
            automatizou um processo manual, reduzindo significativamente o tempo
            gasto no setor de logística, de minutos para segundos;
          </p>
        </div>
      </div>

      <h3 className="c-title" style={{ marginTop: '24px' }}>
        Acadêmica
      </h3>

      <div className="c-experience">
        <p className="c-experience__time">Abr/2022 - Presente</p>
        <div className="c-experience__content">
          <p className="c-experience__content__title">
            Graduação em Análise e Desenvolvimento de Sistemas
          </p>
          <p className="c-experience__content__text">
            Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do
            Norte - Campus Pau dos Ferros
          </p>
        </div>
      </div>

      <div className="c-experience">
        <p className="c-experience__time">Mar/2018 - Jan/2022</p>
        <div className="c-experience__content">
          <p className="c-experience__content__title">
            Ensino Médio Técnico Integrado em Informática
          </p>
          <p className="c-experience__content__text">
            Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do
            Norte - Campus Pau dos Ferros
          </p>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;

  .c-title {
    color: #06f;
    font-family: Inter;
    text-align: center;
    width: 160px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .c-experience {
    display: grid;
    grid-template-columns: 160px 1fr;
    height: calc(max-content + 20px);
    align-items: center;
    gap: 16px;

    .c-experience__time {
      display: flex;
      flex-direction: column;
      vertical-align: middle;
      text-align: center;
      width: 100%;
      min-height: 100px;
      height: 100%;
      color: #fff;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      gap: 10px;

      &:before,
      &:after {
        content: '';
        display: flex;
        position: relative;
        flex: 1;
        background: #fff;
        width: 1px;
        height: 100%;
        margin: 0 auto;
      }
    }

    .c-experience__content {
      padding: 24px 0;

      .c-experience__content__title {
        color: #fff;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 6px;
      }

      .c-experience__content__text {
        color: #fff;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`
