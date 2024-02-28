import { theme } from '@/styles/theme'
import styled from 'styled-components'
import Header from '../Header'

export default function PageContainer() {
  return (
    <Container>
      <div className="c-main">
        <Header />

        <main>oi</main>
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
    max-width: 67.5rem;
    display: flex;
    gap: 2.5rem;
  }
`
