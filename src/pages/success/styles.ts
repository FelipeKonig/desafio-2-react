import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19rem;

  margin-top: 5rem;
  margin-left: 2rem;

  img {
    width: 20.75rem;
    height: 18.31rem;
    margin-top: 8rem;
  }

  div {
    max-width: 95%;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    gap: 3rem;

    img {
      margin-top: 0%;
      max-width: 90%;
    }
  }
`

export const TitleContainer = styled.div`
  display: block;
  gap: 0.25rem;
`

export const Title = styled.h2`
  width: 22rem;

  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;

  color: ${(props) => props.theme['yellow-dark']};
`

export const Subtitle = styled.p`
  max-width: 100%;

  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`

export const OrderInfo = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  width: 32.9rem;
  height: 17rem;
  margin-top: 5rem;

  border: solid 2px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(#fafafa, #fafafa),
    radial-gradient(circle at top left, #dbac2c 2.61%, #8047f8 98.76%);
  background-origin: border-box;
  background-clip: content-box, border-box;

  div:first-child {
    margin-top: 40px;
  }
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  width: 350.25rem;
  height: 2.6rem;
  margin: 0px 2.5rem;

  svg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;
    border-radius: 1000px;
    color: #fafafa;
  }

  #mapIn {
    background: ${(props) => props.theme.purple};
  }

  #timer {
    background: ${(props) => props.theme.yellow};
  }

  #currency {
    background: ${(props) => props.theme['yellow-dark']};
  }

  p {
    width: 19.4rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`
