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
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`
