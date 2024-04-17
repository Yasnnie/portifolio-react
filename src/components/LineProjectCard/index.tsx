import Image from 'next/image'
import styled from 'styled-components'
import Teste from '/public/assets/img/teste.png'

export default function LineProjectCard() {
  return (
    <Container>
      <div className="c-card__c-img">
        <Image src={Teste} alt="tumb card" fill />
      </div>

      <div className="c-card__content">
        <h3 className="c-card__title">Projeto 1</h3>
        <p className="c-card__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500sLorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>

        <div className="c-card__technology">
          <p className="c-card__technology__option">Next.js</p>
          <p className="c-card__technology__option">React</p>
          <p className="c-card__technology__option">Styled-Components</p>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  flex: 1;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #34373d;
  gap: 1rem;
  box-shadow: 0px 0px 8px 0px #a3a3a340;
  grid-template-columns: 220px 1fr;

  .c-card__c-img {
    width: 100%;
    min-height: 200px;
    height: 100%;
    position: relative;
    overflow: hidden;
    align-self: stretch;
    border-radius: 10px;
  }

  .c-card__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .c-card__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #0067ff;
  }

  .c-card__description {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: justify;
    flex: 1;
  }

  .c-card__technology {
    display: flex;
    gap: 10px;

    .c-card__technology__option {
      display: flex;
      padding: 2px 8px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 100px;
      background: #06f;
      color: #001f4d;
      font-family: Inter;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`
