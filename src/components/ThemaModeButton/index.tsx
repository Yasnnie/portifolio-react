import { useTheme } from '@/context/ThemeContext'
import styled from 'styled-components'

export function ThemaModeButton() {
  const { toggleTheme } = useTheme()
  return (
    <Container onClick={toggleTheme}>
      <button className="c-checkbox">
        <div className="c-checkbox__control" />
      </button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: 'center';
  justify-content: 'center';
  gap: 0.5rem;
  max-width: 'max-content';

  border: none;

  .c-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 2.5rem;
    height: 1.25rem;
    border-radius: 24px;
    background: ${({ theme }) => theme.checkbox};
    border: none;
    transition: 0.2s;
    position: relative;

    &__control {
      width: 1rem;
      height: 1rem;
      position: absolute;
      left: 2px;
      background: ${({ theme }) => theme.checkboxIndicator};
      border-radius: 100%;
    }
  }
`
