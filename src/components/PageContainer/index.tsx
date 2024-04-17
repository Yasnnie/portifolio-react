import { theme } from '@/styles/theme'
import styled from 'styled-components'
import Header from '../Header'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageContainer({ children }: Props) {
  return (
    <Container id="sobre">
      <div className="c-main">
        <Header />

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
    ${theme.gray800} 0%,
    ${theme.black500} 100%
  );
  display: flex;
  justify-content: center;
  padding: 5.5rem 1.5rem;

  .c-main {
    width: 100%;
    max-width: 68.75rem;
    display: flex;
    gap: 3.5rem;

    position: relative;

    .c-main__main {
      width: 100%;
    }
  }
`
