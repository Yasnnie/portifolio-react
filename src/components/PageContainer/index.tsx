import styled from 'styled-components'
import Header from '../Header'
import { ReactNode } from 'react'
import { Language } from '@/i18n/locales'

interface Props {
  children: ReactNode
  language: Language
  onLanguageChange: (language: Language) => void
}

export default function PageContainer({
  children,
  language,
  onLanguageChange,
}: Props) {
  return (
    <Container>
      <div className="c-main">
        <Header language={language} onLanguageChange={onLanguageChange} />

        <main className="c-main__main">{children}</main>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(
    81.94% 128.27% at 50% -28.27%,
    ${({ theme }) => theme.bg000} 0%,
    ${({ theme }) => theme.bg100} 100%
  );
  display: flex;
  justify-content: center;
  padding: 5.5rem 1.5rem;
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -18rem;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.6;
    z-index: 0;
    pointer-events: none;
  }

  &::before {
    background: conic-gradient(
      from 45deg,
      rgba(30, 70, 170, 0.32),
      rgba(30, 70, 170, 0.05),
      rgba(30, 70, 170, 0.24),
      rgba(30, 70, 170, 0.05),
      rgba(30, 70, 170, 0.32)
    );
    animation: spinGlow 24s linear infinite;
  }

  &::after {
    background: radial-gradient(
        circle at 20% 25%,
        rgba(255, 255, 255, 0.08),
        transparent 40%
      ),
      radial-gradient(
        circle at 82% 18%,
        rgba(30, 70, 170, 0.16),
        transparent 44%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(30, 70, 170, 0.14),
        transparent 45%
      );
    animation: driftGlow 26s ease-in-out infinite;
  }

  .c-main {
    width: 100%;
    max-width: 72rem;
    display: flex;
    gap: 3.5rem;
    position: relative;
    z-index: 1;

    .c-main__main {
      width: 100%;
    }
  }

  @media (max-width: 1080px) {
    padding: 2.5rem 1.5rem;
    .c-main {
      justify-content: flex-start;
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  @keyframes spinGlow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes driftGlow {
    0% {
      transform: translate(-8%, -4%) scale(1);
    }
    50% {
      transform: translate(6%, 5%) scale(1.05);
    }
    100% {
      transform: translate(-8%, -4%) scale(1);
    }
  }
`
