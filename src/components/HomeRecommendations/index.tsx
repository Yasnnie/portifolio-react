import { theme } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'
import Teste from '/public/assets/img/teste.png'

export default function HomeRecommendations() {
  return (
    <Container>
      <h3 className="c-recommendations__title">Recomendações</h3>

      <section className="c-recommendations__card">
        <div className="c-recommendations__card__c-img">
          <Image src={Teste} alt="Profile Image" fill />
        </div>
        <p className="c-recommendations__card__author">Pablo Daivyd</p>
        <p className="c-recommendations__card__career">
          Desenvolvedor Backend - Lenovo
        </p>
        <p className="c-recommendations__card__text">
          “Yasmin foi e ainda é minha colega em diversos projetos, tanto
          acadêmicos quanto profissionais. Trabalhando com ela, eu percebi o
          real significado de dedicação, responsabilidade e excelência. Tenho
          certeza que ela, aonde quer que ela vá, irá trabalhar com sua
          excelência, que é sua marca registrada.”
        </p>
      </section>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  margin: 28px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .c-recommendations__title {
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
    color: ${theme.white};
    text-align: center;
    margin-bottom: 24px;
  }

  .c-recommendations__card {
    background: #ffffff0a;
    padding: 16px 16px 22px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 652px;

    .c-recommendations__card__c-img {
      width: 88px;
      height: 88px;
      border-radius: 100px;
      position: relative;
      overflow: hidden;
    }

    .c-recommendations__card__author {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      margin-top: 10px;
    }

    .c-recommendations__card__career {
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
    }

    .c-recommendations__card__text {
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      text-align: center;
      margin-top: 14px;
    }
  }
`
