import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;

  margin-top: 5rem;

  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 2rem;
  }
`

export const IntroContainer = styled.div`
  flex: 1;

  margin-left: 2rem;
  max-width: 45rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h2 {
    font-size: 3.4rem;
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ItemsContainer = styled.div`
  margin-top: 2rem;
  font-size: 0.67rem;

  span {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    padding: 0.5rem;
    font-size: 1rem;
    width: 50%;
  }

  #shoppingcart {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 1000px;
    width: 32px;
    height: 32px;
    padding: 0.5rem;
  }

  #package {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['base-text']};
    border-radius: 1000px;
    width: 32px;
    height: 32px;
    padding: 0.5rem;
  }

  #timer {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellow};
    border-radius: 1000px;
    width: 32px;
    height: 32px;
    padding: 0.5rem;
  }

  #coffee {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};
    border-radius: 1000px;
    width: 32px;
    height: 32px;
    padding: 0.5rem;
  }
`

export const ImgContainer = styled.div`
  align-items: center;

  max-width: 29rem;
  max-height: 22rem;

  @media only screen and (max-width: 1100px) {
    img {
      width: 90%;
    }
  }
`
