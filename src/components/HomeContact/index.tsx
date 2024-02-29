import { theme } from '@/styles/theme'
import styled from 'styled-components'

export default function HomeContact() {
  return (
    <Container>
      <h3 className="c-home-contact__title">Entre em contato</h3>
      <p className="c-home-contact__text">
        Entre em contatoEntre em contatoEntre em contatoEntre em contatoEntre em
        contatoEntre em contatoEntre em contatoEntre em contatoEntre em
        contatoEntre em contatoEntre em
      </p>

      <a className="c-home-contact__link">Contate-me </a>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(91.84deg, #00122d 30.95%, #001f4d 98.87%);
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  gap: 20px;
  margin-top: 28px;

  .c-home-contact__title {
    font-size: 26px;
    font-weight: 600;
    line-height: 32px;
    color: ${theme.white};
  }

  .c-home-contact__text {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: ${theme.white};
  }

  .c-home-contact__link {
    background: ${theme.white};
    width: max-content;
    padding: 10px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #003b90;
    cursor: pointer;
    text-decoration: none;
  }
`
