import { theme } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'

import WhiteGithub from '/public/assets/icon/WhiteGithub.svg'
import WhiteInsta from '/public/assets/icon/WhiteInsta.svg'
import WhiteLinkedin from '/public/assets/icon/WhiteLinkedin.svg'

export default function Contact() {
  return (
    <Container id="contato">
      <h3 className="c-contact__title">Entre em contato</h3>
      <p className="c-contact__subtitle">
        Dúvidas? Soluções? Conecte-se agora! 🚀 <br /> Me chame para resolver
        seus desafios tecnológicos!
      </p>
      <div className="c-contact__d-flex">
        <a
          className="c-contact__link"
          href="https://www.linkedin.com/in/carvalho-yas/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={WhiteLinkedin} alt="Linkedin" width={28} height={28} />

          <span className="c-contact__link__text">Linkedin</span>
        </a>
        <a
          className="c-contact__link"
          href="https://github.com/Yasnnie"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={WhiteGithub} alt="Github" width={28} height={28} />
          <span className="c-contact__link__text">@Yasnnie</span>
        </a>
        <a
          className="c-contact__link"
          href="https://www.instagram.com/yas_fca/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={WhiteInsta} alt="Instagram" width={28} height={28} />
          <span className="c-contact__link__text">@yas_fca</span>
        </a>
      </div>
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
  margin-top: 28px;
  align-items: center;

  .c-contact__title {
    font-size: 26px;
    font-weight: 600;
    line-height: 32px;
    color: ${theme.white};
    margin-bottom: 6px;
  }

  .c-contact__subtitle {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 20px;
    color: ${theme.white};
  }

  .c-contact__d-flex {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
  }

  .c-contact__link {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 36px;
    font-size: 16px;
    font-weight: 500;
    max-width: 30px;
    overflow: hidden;
    transition: 0.34s;
    border-radius: 4px;

    .c-contact__link__text {
      position: relative;
      left: -100px;
      opacity: 0;
      transition: 0.4s;
    }

    &:hover {
      max-width: 120px;
      padding: 4px 6px;
      background: ${theme.blue300};
      transition: 0.4s;

      .c-contact__link__text {
        transition: 0.4s;
        opacity: 1;
        left: 0px;
      }
    }
  }
`
