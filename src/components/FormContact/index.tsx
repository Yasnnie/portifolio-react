import styled from 'styled-components'
import Line from '../Line'
import { theme } from '@/styles/theme'
import WhiteGithub from '/public/assets/icon/WhiteGithub.svg'
import WhiteInsta from '/public/assets/icon/WhiteInsta.svg'
import WhiteLinkedin from '/public/assets/icon/WhiteLinkedin.svg'
import Image from 'next/image'
export default function FormContact() {
  return (
    <Container>
      <div>
        <h2 className="c-form__title">Contato</h2>
        <p className="c-form__subtitle">
          Dúvidas? Soluções? Conecte-se agora! 🚀
          <br /> Me chame para resolver seus desafios tecnológicos!
        </p>
      </div>
      <input className="c-form__input" type="text" placeholder="Nome" />
      <input className="c-form__input" type="email" placeholder="Email" />
      <textarea className="c-form__textarea" placeholder="Mensagem" />

      <button className="c-form__button">Enviar</button>

      <div className="c-form__d-flex">
        <Line />
        ou
        <Line />
      </div>

      <div className="c-form__d-flex">
        <a href="https://www.linkedin.com/in/yasmin-carvalho-targino-de-alencar-6980841a3/">
          <Image src={WhiteLinkedin} alt="Linkedin" width={28} height={28} />
        </a>
        <a href="https://github.com/Yasnnie">
          <Image src={WhiteGithub} alt="Github" width={28} height={28} />
        </a>
        <a href="https://www.instagram.com/yas_fca/">
          <Image src={WhiteInsta} alt="Instagram" width={28} height={28} />
        </a>
      </div>
    </Container>
  )
}

const Container = styled.form`
  background: #0067ff0d;
  width: 100%;
  flex: 1;
  padding: 24px;
  border-radius: 12px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .c-form__title {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    color: ${theme.primaryBlue};
    text-align: center;
  }

  .c-form__subtitle {
    color: ${theme.white};
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    margin-top: 0.5rem;
  }

  .c-form__textarea,
  .c-form__input {
    width: 100%;

    border-radius: 6px;
    border: none;
    outline: none;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: ${theme.white};
    background: #1f2c3d;
    box-shadow: 2px 4px 4px 0px #00000040;
  }

  .c-form__input {
    height: 48px;
    padding: 0px 16px;
  }

  .c-form__textarea {
    resize: none;
    padding: 16px;
    height: 150px;
  }

  .c-form__button {
    padding: 12px 20px;
    border-radius: 6px;
    background: #0066ff;
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    color: ${theme.white};
    border: none;
    cursor: pointer;
  }

  .c-form__d-flex {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 16px;
    justify-content: center;
  }
`
