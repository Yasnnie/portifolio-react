import styled from 'styled-components'
import { localeContent, Language } from '@/i18n/locales'
import Reveal from '../Reveal'
import SageCursor from '/public/assets/img/SageValorant2.png'

interface Props {
  language: Language
}

export default function About({ language }: Props) {
  const about = localeContent[language].about

  return (
    <Section id="sobre">
      <div className="inner">
        <Reveal className="eyebrow-col">
          <p className="eyebrow">{about.eyebrow}</p>
        </Reveal>

        <div className="content">
          <Reveal>
            <h2>{about.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">{about.intro}</p>
          </Reveal>

          <div className="grid">
            {about.cards.map((card, index) => (
              <Reveal key={card.title} delay={0.08 * (index % 2)}>
                <article className="block">
                  <p className="label">{card.label}</p>
                  <h3>{card.title}</h3>
                  <p className="text">
                    {card.text ? (
                      card.text
                    ) : (
                      <>
                        {about.fun.before}
                        <span className="cursor">{about.fun.highlight}</span>
                        {about.fun.after}
                      </>
                    )}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding: var(--section-gap) 0;

  .inner {
    display: grid;
    grid-template-columns: 1fr 2.3fr;
    gap: 2rem;
    max-width: calc(var(--max-width) + var(--gutter) * 2);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  .eyebrow {
    padding-top: 1.1rem;
    font-family: var(--font-display);
    font-size: 1.0625rem;
    font-weight: 700;
    line-height: 1.2;
  }

  h2 {
    max-width: 16ch;
    font-size: clamp(2.5rem, 5.2vw, 4.1rem);
    letter-spacing: -0.045em;
    line-height: 1;
  }

  .lead {
    max-width: 40rem;
    margin-top: 2rem;
    color: var(--muted);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem 5rem;
    margin-top: clamp(3rem, 6vw, 5rem);
  }

  .block {
    padding-top: 1.4rem;
    border-top: 1px solid var(--line);

    .label {
      margin-bottom: 0.9rem;
      color: var(--accent-text);
      font-family: var(--font-display);
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      line-height: 1.2;
    }

    h3 {
      font-size: 1.9rem;
      letter-spacing: -0.03em;
      line-height: 1.05;
    }

    .text {
      margin-top: 0.85rem;
      color: var(--muted);
    }
  }

  .cursor {
    color: var(--text);
    font-weight: 600;
    cursor:
      url(${SageCursor.src}),
      pointer;
    border-bottom: 2px solid var(--orange);
  }

  @media (max-width: 820px) {
    .inner {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .eyebrow {
      padding-top: 0;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
`
