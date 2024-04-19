import { theme } from '@/styles/theme'
import Image, { StaticImageData } from 'next/image'
import styled from 'styled-components'

interface Props {
  item: {
    title: string
    subtitle: string
    description: string
    technologies: string[]
    link: string
    img: StaticImageData
  }
}

export default function LineProjectCard({ item }: Props) {
  return (
    <ScrollContainer className='scroll-review-item'> 
      <Container
        href={item.link}
        target="_blank"
        className=" card-project"
      >
        <div className="c-card">
          <div className="c-card__c-img">
            <Image src={item.img} alt="tumb card" fill objectFit="cover" />
          </div>

          <div className="c-card__content">
            <h3 className="c-card__title">{item.title}</h3>
            <p className="c-card__description">{item.description}</p>

            <div className="c-card__technology">
              {item.technologies.map((technology) => (
                <p className="c-card__technology__option">{technology}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </ScrollContainer>
  )
}

const Container = styled.a`
  transition: 0.2s;
  box-sizing: border-box;
  padding: 1px;
  border-radius: 1rem;
  position: relative;

  .c-card {
    width: 100%;
    display: grid;
    flex: 1;
    padding: 12px 16px 12px 12px;
    border-radius: 1rem;
    position: relative;
    gap: 1rem;
    grid-template-columns: 220px 1fr;
    transition: 0.2s;
    background: #111112;

    z-index: 1;
    .c-card__c-img {
      width: 100%;
      min-height: 160px;
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
      /* color: #0067ff; */
      color: #fff;
    }

    .c-card__description {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      flex: 1;
      color: ${theme.gray300};
    }

    .c-card__technology {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      
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
  }

  &:hover {
    transform: scale(1.04);
    cursor: pointer;
    opacity: 1 !important;
    transition: 0.2s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: -0.2px;
      z-index: -1;
      background: conic-gradient(
        from var(--gradient-angle),
        #06f,
        #003d99,
        #001f4d,
        #00122e,
        #06f
      );
      border-radius: inherit;
      animation: rotation 6s linear infinite;
    }

    &::after {
      filter: blur(4px);
    }

    @keyframes rotation {
      0% {
        --gradient-angle: 0deg;
      }
      100% {
        --gradient-angle: 360deg;
      }
    }
  }
`

const ScrollContainer = styled.section`
  width: 100%;

  display: flex;
  flex: 1;
  align-items: center;
`
