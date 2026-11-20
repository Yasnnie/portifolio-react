import { useState } from 'react'
import { ArrowUpRight, Download } from 'react-feather'
import styled from 'styled-components'
import { localeContent, Language } from '@/i18n/locales'
import { dataStudy, dataWork, ExperienceEntry } from '@/data/work'
import Reveal from '../Reveal'
import Button from '../Button'

interface Props {
  language: Language
}

export default function Experience({ language }: Props) {
  const copy = localeContent[language].experience

  return (
    <Section id="experiencia">
      <div className="inner">
        <Reveal>
          <header>
            <div>
              <p className="eyebrow">{copy.eyebrow}</p>
              <h2>{copy.professionalTitle}</h2>
            </div>
            <Button variant="orange" href="/CV - Yasmin Carvalho.pdf" download>
              <Download size={18} />
              {copy.downloadResume}
            </Button>
          </header>
        </Reveal>

        <div className="list">
          {dataWork.map((item) => (
            <Row key={item.timer.en + item.title.en} item={item} language={language} expandable />
          ))}
        </div>

        <Reveal>
          <h2 className="subheading">{copy.academicTitle}</h2>
        </Reveal>
        <div className="list">
          {dataStudy.map((item) => (
            <Row key={item.timer.en + item.title.en} item={item} language={language} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function Row({
  item,
  language,
  expandable = false,
}: {
  item: ExperienceEntry
  language: Language
  expandable?: boolean
}) {
  const copy = localeContent[language].experience
  const [open, setOpen] = useState(false)
  const [role, ...companyParts] = item.title[language].split(' - ')
  const company = companyParts.join(' - ')
  const texts = item.texts.map((text) => text[language])
  const visible = expandable && !open ? texts.slice(0, 1) : texts

  return (
    <Reveal>
      <RowArticle>
        <p className="time">{item.timer[language]}</p>
        <div className="body">
          <h3>{role}</h3>
          {company && (
            <a
              className="company"
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${copy.visitCompany} ${company}`}
            >
              {company}
              <ArrowUpRight size={18} />
            </a>
          )}
          {!company && item.link && (
            <a
              className="company"
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${copy.visitCourse} ${role}`}
            >
              <ArrowUpRight size={18} />
            </a>
          )}

          {visible.map((text, index) => (
            <p
              key={index}
              className={`text${expandable && !open ? ' clamped' : ''}`}
            >
              {text}
            </p>
          ))}

          {expandable && texts.length > 0 && (
            <button
              type="button"
              className="toggle"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? copy.showLess : copy.showMore}
            </button>
          )}
        </div>
      </RowArticle>
    </Reveal>
  )
}

const Section = styled.section`
  padding: var(--section-gap) 0;
  background: var(--band);
  color: var(--white);

  .inner {
    max-width: calc(var(--max-width) + var(--gutter) * 2);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: clamp(2rem, 4vw, 3.5rem);

    .eyebrow {
      margin-bottom: 0.75rem;
      color: var(--ash-on-dark);
      font-family: var(--font-display);
      font-size: 1.0625rem;
      font-weight: 700;
    }
  }

  h2 {
    font-size: clamp(2.5rem, 6.4vw, 3.94rem);
    letter-spacing: -0.05em;
    line-height: 1;
  }

  .subheading {
    margin: clamp(4rem, 8vw, 7rem) 0 clamp(2rem, 4vw, 3rem);
  }

  .list {
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }
`

const RowArticle = styled.article`
  display: grid;
  grid-template-columns: minmax(8rem, 1fr) 3fr;
  gap: 1.5rem 2rem;
  padding: 2.25rem 0 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.16);

  .time {
    padding-top: 0.5rem;
    color: var(--ash-on-dark);
    font-size: 1rem;
    font-variant-numeric: tabular-nums;
  }

  h3 {
    font-size: clamp(1.6rem, 3vw, 2.25rem);
    letter-spacing: -0.035em;
    line-height: 1.05;
  }

  .company {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 0.6rem;
    color: var(--orange);
    font-family: var(--font-display);
    font-weight: 700;
    line-height: 1.3;
    transition: gap 0.25s ease;

    &:hover {
      gap: 0.6rem;
    }
  }

  .text {
    max-width: 46rem;
    margin-top: 1.25rem;
    color: #e4e4ea;
    font-size: 1.0625rem;

    &.clamped {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .toggle {
    margin-top: 1.25rem;
    padding: 0.6rem 1.1rem 0.65rem;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 1000px;
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
    transition:
      background 0.25s ease,
      color 0.25s ease;

    &:hover {
      background: var(--white);
      color: var(--ink);
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;

    .time {
      padding-top: 0;
    }
  }
`
