import { theme } from '@/styles/theme'
import styled from 'styled-components'

interface Props {
  item: { timer: string; title: string; text: string; link: string }
  isLast?: boolean
}

export default function ExperienceCard({ item, isLast }: Props) {
  return (
    <Container
      href={item.link}
      target="_blank"
      isLast={isLast}
      className="scroll-review-item"
    >
      <p className="c-experience__time">{item.timer}</p>
      <div className="c-experience__content">
        <div className="c-experience__content__padding">
          <p className="c-experience__content__title">
            {item.title}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="c-experience__content__icon"
                d="M13.0004 11.75C12.8104 11.75 12.6204 11.68 12.4704 11.53C12.1804 11.24 12.1804 10.76 12.4704 10.47L20.6704 2.26999C20.9604 1.97999 21.4404 1.97999 21.7304 2.26999C22.0204 2.55999 22.0204 3.03999 21.7304 3.32999L13.5304 11.53C13.3804 11.68 13.1904 11.75 13.0004 11.75Z"
                fill="white"
              />
              <path
                className="c-experience__content__icon"
                d="M22.0002 7.55C21.5902 7.55 21.2502 7.21 21.2502 6.8V2.75H17.2002C16.7902 2.75 16.4502 2.41 16.4502 2C16.4502 1.59 16.7902 1.25 17.2002 1.25H22.0002C22.4102 1.25 22.7502 1.59 22.7502 2V6.8C22.7502 7.21 22.4102 7.55 22.0002 7.55Z"
                fill="white"
              />
              <path
                className="c-experience__content__icon"
                d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
                fill="white"
              />
            </svg>
          </p>
          <p className="c-experience__content__text">{item.text}</p>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.a<{ isLast?: boolean }>`
  display: grid;
  grid-template-columns: 116px 1fr;
  height: calc(max-content + 20px);
  align-items: center;
  gap: 8px;

  .c-experience__time {
    display: flex;
    flex-direction: column;
    vertical-align: middle;
    text-align: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.timeExpirienceColor};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: 10px;
    padding-bottom: ${({ isLast }) => (isLast ? '0px' : '10px')};
    transition: 0.2s;

    &:after {
      content: '';
      display: flex;
      position: relative;
      flex: 1;
      background: ${({ theme }) => theme.timeExpirienceLine};
      width: 1px;
      height: 100%;
      margin: 0 auto;
      transition: 0.2s;
    }
  }

  .c-experience__content {
    padding-bottom: ${({ isLast }) => (isLast ? '0px' : '40px')};

    font-family: Inter;
    font-style: normal;
    line-height: normal;

    .c-experience__content__padding {
      padding: 8px 12px 12px 12px;
      margin-top: -8px;
      border-radius: 8px;
      transition: background 0.2s;
    }

    .c-experience__content__title {
      display: flex;
      color: ${({ theme }) => theme.titleExpirienceColor};
      gap: 8px;
      align-items: center;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 6px;

      .c-experience__content__icon {
        fill: ${({ theme }) => theme.titleExpirienceColor};
        transition: 0.2s;
      }
    }

    .c-experience__content__text {
      font-size: 14px;
      color: ${({ theme }) => theme.textExpirienceColor};

      font-weight: 400;
    }
  }

  &:hover {
    cursor: pointer;

    .c-experience__content__padding {
      background: rgba(237, 236, 255, 0.06);
      border-radius: 8px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);

      transition: background 0.2s;

      .c-experience__content__title {
        color: ${({ theme }) => theme.primary};
        transition: 0.2s;

        .c-experience__content__icon {
          fill: ${({ theme }) => theme.primary};
          transition: 0.2s;
        }
      }
    }

    .c-experience__time {
      color: ${({ theme }) => theme.primary};
      transition: 0.2s;

      &::after {
        background: ${({ theme }) => theme.primary};
        transition: 0.2s;
      }
    }
  }

  .c-experience--no-padding {
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-bottom: ${({ isLast }) => (isLast ? '0px' : '40px')};

    .c-experience__time {
      padding: 0;
      text-align: left;
      flex-direction: row;
      align-items: center;
      margin-bottom: 8px;

      &::after {
        height: 1px;
      }
    }

    .c-experience__content {
      padding: 0px;
      .c-experience__content__padding {
        padding: 0px;
      }
    }
  }
`
