import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem 5.625rem;
  gap: 3.75rem;

  width: 23rem;
  height: 5rem;

  border-bottom: 1px solid #e6e5e5;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;

    width: 16rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  #details {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    width: 10.625rem;
  }

  p {
    width: 9.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  #actions {
    gap: 0.5rem;

    width: 10.625rem;
  }

  #actions > div {
    padding: 0.5rem;
    gap: 0.5rem;

    width: 4.5rem;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
  }

  button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }

  .icon {
    width: 0.875rem;
    height: 0.875rem;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  #remove {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 0.5rem;
    gap: 0.25rem;

    width: 5.625rem;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  span {
    width: 3.43rem;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }

  #price {
    width: 3.43rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`
