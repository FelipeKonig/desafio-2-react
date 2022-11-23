import styled from 'styled-components'

export const CartContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.75rem;
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;

  max-width: 31rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  @media only screen and (max-width: 850px) {
    max-width: 95%;
  }
`

export const CartValues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  margin-top: 1.5rem;
  width: 23rem;
  height: 5.75rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    width: 23rem;
    height: 1.25rem;
  }

  p {
    display: flex;
    align-items: center;
    text-align: right;

    width: 5.25rem;
    height: 1.1rem;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  .price {
    justify-content: end;
  }

  #total p {
    width: 2.8rem;
    height: 1.62rem;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  button {
    padding: 0.75rem 0.5rem;

    width: 23rem;
    height: 2.9rem;
    background: ${(props) => props.theme.yellow};
    border-radius: 6px;
    border: 0;

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
