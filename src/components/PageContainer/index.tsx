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

  .c-main {
    width: 100%;
    max-width: 72rem;
    display: flex;
    gap: 3.5rem;

    position: relative;

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
`
