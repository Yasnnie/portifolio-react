import { theme } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'

import WhiteGithub from '/public/assets/icon/WhiteGithub.svg'
import WhiteInsta from '/public/assets/icon/WhiteInsta.svg'
import WhiteLinkedin from '/public/assets/icon/WhiteLinkedin.svg'
import WhiteEmail from '/public/assets/icon/WhiteEmail.svg'

export default function Contact() {
  return (
    <Container id="contato">
      <a
        className="c-contact__link"
        href="https://www.linkedin.com/in/carvalho-yas/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={WhiteLinkedin} alt="Linkedin" width={24} height={24} />

        <span className="c-contact__link__text">/carvalho-yas</span>
      </a>
      <a
        className="c-contact__link"
        href="https://github.com/Yasnnie"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={WhiteGithub} alt="Github" width={24} height={24} />
        <span className="c-contact__link__text">@Yasnnie</span>
      </a>
      <a
        className="c-contact__link"
        href="https://www.instagram.com/yas_fca/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={WhiteInsta} alt="Instagram" width={24} height={24} />
        <span className="c-contact__link__text">@yas_fca</span>
      </a>
      <a
        className="c-contact__link"
        href="mailto:dev.cyas@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={WhiteEmail} alt="Instagram" width={24} height={24} />
        <span className="c-contact__link__text">dev.cyas@gmail.com</span>
      </a>
    </Container>
  )
}

const Container = styled.section`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .c-contact__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    height: 36px;
    font-size: 11px;
    font-weight: 500;
    position: relative;
    transition: 0.6s;
    
    .c-contact__link__text {
      position: absolute;
      word-break: keep-all;
      width: max-content;
      top: 0px;
      border-radius: 4px;
      opacity: 0;
      transition: 0.6s;
      z-index: -1;
    
    }
    
    &:hover {
      transition: 0.6s;
      .c-contact__link__text {
        transition: 0.6s;
        opacity: 1;
        top: 28px;
        background: linear-gradient(91.84deg, #00122d 30.95%, #001f4d 98.87%);
        padding: 4px 6px;
      }
    }
  }
`
