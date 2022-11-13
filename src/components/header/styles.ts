import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem;

  nav {
    display: inline-flex;
    gap: 4px;
  }

  span {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
  }

  a {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 6px;
    padding: 0.5rem;

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
