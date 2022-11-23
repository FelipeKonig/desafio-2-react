import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem;

  @media only screen and (max-width: 900px) {
    padding-top: 0.5rem;
  }

  nav {
    display: inline-flex;
    gap: 4px;
  }

  a:focus {
    box-shadow: none;
  }

  span {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    padding: 0.6rem;
    display: inline-flex;
    align-items: center;
  }

  #cart {
    position: absolute;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 6px;
    padding: 0.5rem;

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }

  #counter {
    display: block;
    margin-top: -0.5rem;
    margin-left: 1.75rem;
    position: sticky;
    padding: 2.5px 0px 0px;

    width: 1.25rem;
    height: 1.25rem;

    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;

    text-align: center;
    letter-spacing: -0.06em;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 1000px;
    visibility: hidden;
  }
`
