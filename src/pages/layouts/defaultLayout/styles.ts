import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 50rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 5rem auto;
  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`
