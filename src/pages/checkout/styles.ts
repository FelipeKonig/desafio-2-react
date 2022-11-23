import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  width: 100%;
  margin-top: 5rem;
  margin-left: 2rem;

  h2 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-subtitle']};
  }
`
