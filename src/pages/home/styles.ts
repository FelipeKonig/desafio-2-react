import styled from 'styled-components'

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin-left: 2rem;
  margin-top: 5rem;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const List = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 1.5rem;
`

export const CoffeeCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  width: 15rem;
  height: 19rem;
  margin-bottom: 10rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-left: calc(50% - 7.5rem / 2);
    margin-top: -1.25rem;
  }

  .tags {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 0.25rem;
  }

  .tags > span {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 0.5rem;
    padding: 0.25rem 0.5rem;
    width: 5rem;
    height: 1.31rem;
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;

    p {
      width: 4rem;
      height: 0.8rem;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 0.6rem;
      line-height: 130%;

      text-transform: uppercase;

      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  h4 {
    align-items: flex-end;
    text-align: center;

    height: 1.6rem;
    margin-top: 0.875rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .description {
    height: 2.25rem;
    margin-top: 0.5rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;

    color: ${(props) => props.theme['base-label']};
  }
`

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.875rem;

  height: 2.375rem;
  margin: 1.6rem 1.5rem 1.25rem 1.5rem;

  span {
    display: inline-flex;
    align-items: baseline;
    gap: 3px;

    width: 4.18rem;
    height: 1.9rem;
    font-size: 0.875rem;
    line-height: 130%;
    margin-bottom: -0.625rem;
    font-family: 'Baloo 2';

    p {
      font-weight: 800;
      font-size: 1.25rem;
      text-align: right;
      color: ${(props) => props.theme['base-text']};
    }
  }

  .actions {
    flex-direction: row;
    align-items: center;
    order: 0;
    flex-grow: 0;
    padding: 0px;

    width: 7rem;
    height: 2.375rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      gap: 0.5rem;

      width: 4.5rem;
      height: 2.375rem;
      float: right;
      background: ${(props) => props.theme['base-button']};
      border-radius: 6px;
    }

    button {
      background: transparent;
      border: 0;
      color: ${(props) => props.theme.purple};
    }

    .icon {
      width: 0.875rem;
      height: 0.875rem;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
  .cart {
    padding: 0.25rem;
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: white;
    border-radius: 6px;

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.purple};
    }
  }
`
