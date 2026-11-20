import styled from 'styled-components'

const technologies = [
  'Spring Boot',
  'Next.js',
  'PostgreSQL',
  'React',
  'TypeScript',
  'React Native',
  'Docker',
  'Expo',
  'Django',
  'Python',
  'WebSocket',
  'Styled-Components',
]

export default function Marquee() {
  return (
    <Band aria-label="Stack">
      <div className="track">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {technologies.map((tech) => (
              <li key={tech}>
                <span>{tech}</span>
                <i aria-hidden>✦</i>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Band>
  )
}

const Band = styled.section`
  overflow: hidden;
  background: var(--ink);
  color: var(--white);
  border-block: 1px solid var(--marquee-edge);
  padding: 0.9rem 0;

  .track {
    display: flex;
    width: max-content;
    animation: slide 46s linear infinite;
  }

  &:hover .track {
    animation-play-state: paused;
  }

  ul {
    display: flex;
    flex-shrink: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding-right: 1.25rem;
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
    white-space: nowrap;

    i {
      color: var(--orange);
      font-style: normal;
      font-size: 0.7em;
    }
  }

  @keyframes slide {
    to {
      transform: translateX(-50%);
    }
  }
`
