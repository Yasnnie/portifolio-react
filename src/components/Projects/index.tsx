import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight } from 'react-feather'
import styled from 'styled-components'
import { localeContent, Language } from '@/i18n/locales'
import { projects, ProjectItem } from '@/data/projects'
import studoFlow from '@/assets/lottie/study-flow.json'
import orcaPay from '@/assets/lottie/orca-pay.json'
import LottieAnimation from '../LottieAnimation'
import Reveal from '../Reveal'

interface Props {
  language: Language
}

const lotties = { studoFlow, orcaPay }

export default function Projects({ language }: Props) {
  const copy = localeContent[language].projects
  const featured = projects.find((item) => item.featured)
  const rest = projects.filter((item) => !item.featured)

  return (
    <Section id="projetos">
      <div className="inner">
        <Reveal>
          <header>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>{copy.title}</h2>
          </header>
        </Reveal>

        {featured && (
          <Reveal>
            <Featured>
              <div className="copy">
                <p className="badge">{copy.featuredLabel}</p>
                <h3>{featured.title[language]}</h3>
                <p className="description">{featured.description[language]}</p>
                <ul className="tags">
                  {featured.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="footer-row">
                  <div className="live">
                    <span className="live-dot" aria-hidden />
                    {copy.live}
                  </div>
                  {featured.link && (
                    <a
                      className="visit"
                      href={featured.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy.visit} <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
              </div>
              {featured.img[0] ? (
                <div className="shot">
                  <Image
                    src={featured.img[0]}
                    alt={featured.title[language]}
                    fill
                    sizes="(min-width: 960px) 560px, 100vw"
                    style={{ objectFit: 'cover', objectPosition: 'top left' }}
                  />
                </div>
              ) : (
                featured.lottie && (
                  <LottieAnimation
                    data={lotties[featured.lottie]}
                    className="animation"
                    label={featured.title[language]}
                  />
                )
              )}
            </Featured>
          </Reveal>
        )}

        <div className="grid">
          {rest.map((item, index) => (
            <Reveal key={item.title.en} delay={0.08 * (index % 2)}>
              <ProjectCard item={item} language={language} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

function ProjectCard({
  item,
  language,
}: {
  item: ProjectItem
  language: Language
}) {
  const [hovered, setHovered] = useState(false)
  const hasLink = Boolean(item.link)
  const title = item.title[language]

  return (
    <Card
      as={hasLink ? 'a' : 'div'}
      {...(hasLink
        ? { href: item.link, target: '_blank', rel: 'noreferrer' }
        : {})}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="media">
        {item.lottie ? (
          <div className="lottie-tile">
            <LottieAnimation data={lotties[item.lottie]} label={title} />
          </div>
        ) : (
          item.img.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={index === 0 ? title : ''}
              fill
              sizes="(min-width: 960px) 560px, 100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'top left',
                opacity: index === (hovered && item.img.length > 1 ? 1 : 0) ? 1 : 0,
                transition: 'opacity 0.5s ease',
              }}
            />
          ))
        )}
        <span className="arrow" aria-hidden>
          <ArrowUpRight size={22} />
        </span>
      </div>

      <p className="subtitle">{item.subtitle}</p>
      <h3>{title}</h3>
      <p className="description">{item.description[language]}</p>
      <ul className="tags">
        {item.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </Card>
  )
}

const Section = styled.section`
  padding: var(--section-gap) 0;
  background: var(--surface);

  .inner {
    max-width: calc(var(--max-width) + var(--gutter) * 2);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem 2rem;
    margin-bottom: clamp(2.5rem, 5vw, 4rem);

    .eyebrow {
      font-family: var(--font-display);
      font-size: 1.0625rem;
      font-weight: 700;
    }

    h2 {
      font-size: clamp(2.5rem, 6.4vw, 3.94rem);
      letter-spacing: -0.05em;
      line-height: 1;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(3rem, 6vw, 4.5rem) clamp(2rem, 5vw, 5rem);
    margin-top: clamp(3.5rem, 7vw, 6rem);
  }

  @media (max-width: 820px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`

/* The one warm block of the page: square corners, orange fill. */
const Featured = styled.article`
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  align-items: center;
  gap: 2rem;
  padding: clamp(2rem, 4.5vw, 3.3rem) clamp(1.5rem, 5vw, 3.7rem);
  background: var(--orange);
  color: var(--ink);
  border-radius: 0;

  .badge {
    display: inline-block;
    padding: 0.4rem 0.95rem 0.45rem;
    border: 1px solid var(--ink);
    border-radius: 1000px;
    font-family: var(--font-display);
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.1;
  }

  h3 {
    margin-top: 1.5rem;
    font-size: clamp(2.8rem, 7vw, 5.2rem);
    letter-spacing: -0.055em;
    line-height: 0.95;
  }

  .description {
    max-width: 34rem;
    margin-top: 1.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.75rem;
    list-style: none;

    li {
      padding: 0.3rem 0.9rem 0.35rem;
      background: var(--ink);
      color: var(--white);
      border-radius: 1000px;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.3;
    }
  }

  .footer-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1.75rem;
    margin-top: 1.75rem;
  }

  .visit,
  .live {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-display);
    font-weight: 700;
  }

  .live-dot {
    position: relative;
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 0.35rem;
    border-radius: 100%;
    background: var(--ink);

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      border: 2px solid var(--ink);
      animation: live-pulse 1.8s ease-out infinite;
    }
  }

  @keyframes live-pulse {
    from {
      transform: scale(1);
      opacity: 0.8;
    }
    to {
      transform: scale(3);
      opacity: 0;
    }
  }

  .visit {
    border-bottom: 2px solid var(--ink);
  }

  .animation {
    width: 100%;
    max-width: 26rem;
    justify-self: center;
  }

  .shot {
    position: relative;
    width: 100%;
    aspect-ratio: 2936 / 1672;
    overflow: hidden;
    background: var(--white);
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;

    .animation {
      max-width: 17rem;
    }
  }
`

const Card = styled.article`
  display: block;
  color: inherit;

  .media {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: var(--media-bg);
  }

  .media img {
    transition:
      opacity 0.5s ease,
      transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
  }

  &:is(a):hover .media img {
    transform: scale(1.04);
  }

  .lottie-tile {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: var(--charcoal);

    > div {
      height: 96%;
      aspect-ratio: 1;
    }
  }

  .arrow {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    background: var(--text);
    color: var(--text-inverse);
    opacity: 0;
    transform: translateY(0.5rem) scale(0.9);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      background 0.3s ease,
      color 0.3s ease;
  }

  &:is(a):hover .arrow,
  &:is(a):focus-visible .arrow {
    opacity: 1;
    transform: none;
  }

  .arrow:hover {
    background: var(--orange);
    color: var(--ink);
  }

  .subtitle {
    margin-top: 1.4rem;
    padding-top: 1.1rem;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.3;
  }

  h3 {
    margin-top: 0.4rem;
    font-size: 1.9rem;
    letter-spacing: -0.035em;
    line-height: 1.05;
  }

  .description {
    margin-top: 0.85rem;
    color: var(--muted);
    font-size: 1.0625rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 1.25rem;
    list-style: none;

    li {
      padding: 0.2rem 0.8rem 0.25rem;
      border: 1px solid var(--line);
      border-radius: 1000px;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
    }
  }
`
