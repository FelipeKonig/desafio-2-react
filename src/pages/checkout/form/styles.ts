import styled from 'styled-components'

export const FormContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

export const AddressCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  max-width: 50rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  @media only screen and (max-width: 850px) {
    width: 95%;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;

  width: 100%;
  height: 2.75rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  #title {
    color: ${(props) => props.theme['base-subtitle']};
  }

  #subtitle {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const FormAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  input,
  select {
    padding: 0.75rem;
    height: 2.625rem;
    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    box-shadow: none;

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }
  }

  #cep {
    width: 12.5rem;
  }

  #rua {
    width: 46.25rem;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }

  #complemento {
    width: 32.5rem;
  }

  #opcional {
    width: 2.9rem;
    height: 1rem;
    right: 5rem;
    position: relative;

    font-style: italic;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};

    @media only screen and (max-width: 850px) {
      position: absolute;
      right: 18rem;
    }

    @media only screen and (max-width: 760px) {
      position: absolute;
      right: 12rem;
    }

    @media only screen and (max-width: 630px) {
      position: absolute;
      right: 7rem;
    }
    @media only screen and (max-width: 500px) {
      position: absolute;
      right: 3rem;
    }
  }

  #cidade {
    width: 27rem;
  }

  #uf {
    width: 5rem;
  }

  @media only screen and (max-width: 850px) {
    div {
      flex-wrap: wrap;
      width: 100%;
    }

    input,
    #uf,
    #cidade,
    #complemento,
    #rua,
    #cep {
      width: 100%;
    }
  }
`

export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  width: 100%;
  max-width: 50rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  .purpleIcon {
    color: ${(props) => props.theme.purple};
  }

  #paymentForm {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
  }

  input {
    display: none;
  }

  #paymentForm label {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;

    cursor: pointer;
    width: 11.43rem;
    height: 3.1rem;

    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  #paymentForm input[type='radio']:checked + label {
    background: ${(props) => props.theme['purple-light']};
    /* Brand/Purple */

    border: 1px solid ${(props) => props.theme.purple};
    border-radius: 6px;
  }

  @media only screen and (max-width: 850px) {
    max-width: 95%;
  }
`
