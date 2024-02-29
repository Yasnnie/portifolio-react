import Image from 'next/image'
import styled from 'styled-components'
import Teste from '/public/assets/img/teste.png'
import GrayReact from '/public/assets/icon/GrayReact.svg'
import GrayNext from '/public/assets/icon/GrayNext.svg'
import GrayTs from '/public/assets/icon/GrayTs.svg'
import GrayPython from '/public/assets/icon/GrayPython.svg'

export default function ProjectCard() {
  return (
    <Container>
      <div className="c-card__c-img">
        <Image src={Teste} alt="tumb card" fill />
      </div>

      <p className="c-card__title">Projeto 2</p>

      <p className="c-card__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      <div className="c-card__stacks">
        <Image src={GrayReact} alt="Icone React" />
        <Image src={GrayNext} alt="Icone Next" />
        <Image src={GrayTs} alt="Icone Typescript" />
        <Image src={GrayPython} alt="Icone " />
      </div>
    </Container>
  )
}

const Container = styled.section`
  flex: 1;
  min-width: 280px;
  padding: 10px 0.5rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid #34373d;
  gap: 1.5rem;
  box-shadow: 0px 0px 8px 0px #a3a3a340;

  .c-card__c-img {
    width: 100%;
    height: 240px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }

  .c-card__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #0067ff;
    margin: 20px 12px 0;
  }

  .c-card__description {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: justify;
    margin: 12px 12px 0;
  }

  .c-card__stacks {
    margin: 14px 12px 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    opacity: 0.5;
  }
`
