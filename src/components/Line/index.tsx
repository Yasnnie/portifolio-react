import styled from 'styled-components'

export default function Line() {
  return <Container />
}

const Container = styled.div`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.lineColor};
  width: 100%;
`
