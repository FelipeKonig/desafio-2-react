import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem;

  nav {
    display: inline-flex;
    gap: 12px;
  }

  span {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 16px;
    padding: 0.875rem;
    display: inline-flex;
    gap: 2px;
    align-items: center;
  }

  a {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 16px;
    padding: 0.875rem;
  }
`
