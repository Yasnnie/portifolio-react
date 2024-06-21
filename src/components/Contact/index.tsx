import styled from 'styled-components'
import { Linkedin, GitHub, Instagram, Mail } from 'react-feather'

export default function Contact() {
  const iconSize = 22

  return (
    <Container id="contato">
      <a
        className="c-contact__link"
        href="https://www.linkedin.com/in/carvalho-yas/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin width={iconSize} height={iconSize} />

        <span className="c-contact__link__text">/carvalho-yas</span>
      </a>
      <a
        className="c-contact__link"
        href="https://github.com/Yasnnie"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub width={iconSize} height={iconSize} />
        <span className="c-contact__link__text">@Yasnnie</span>
      </a>
      <a
        className="c-contact__link"
        href="https://www.instagram.com/yas_fca/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram width={iconSize} height={iconSize} />
        <span className="c-contact__link__text">@yas_fca</span>
      </a>
      <a
        className="c-contact__link"
        href="mailto:dev.cyas@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Mail width={iconSize} height={iconSize} />
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

    color: ${({ theme }) => theme.navLinkColor};
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
      color: #fff;
    }

    &:hover {
      transition: 0.6s;
      .c-contact__link__text {
        transition: 0.6s;
        opacity: 1;
        top: 28px;
        background: ${({ theme }) => theme.primary};
        padding: 4px 6px;
      }
    }
  }
`
