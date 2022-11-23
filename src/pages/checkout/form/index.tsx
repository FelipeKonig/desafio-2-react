import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressCard,
  FormAddressContainer,
  FormContainer,
  PaymentCard,
  Title,
} from './styles'

export function Form() {
  return (
    <FormContainer>
      <h2>Complete o seu pedido</h2>
      <AddressCard>
        <Title>
          <MapPinLine size={22} weight="regular" />
          <span>
            <p id="title">Endereço de Entrega</p>
            <p id="subtitle">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </span>
        </Title>
        <FormAddressContainer>
          <input id="cep" type="text" placeholder="CEP" />
          <input id="rua" type="text" placeholder="Rua" />
          <div>
            <input type="text" placeholder="Número" />
            <input id="complemento" type="text" placeholder="Complemento" />
          </div>
          <div>
            <input type="text" placeholder="Bairro" />
            <input id="cidade" type="text" placeholder="Cidade" />
            <input id="uf" type="text" placeholder="UF" />
          </div>
        </FormAddressContainer>
      </AddressCard>
      <PaymentCard>
        <Title>
          <CurrencyDollar className="purpleIcon" size={22} weight="regular" />
          <span>
            <p id="title">Endereço de Entrega</p>
            <p id="subtitle">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </span>
        </Title>
        <div id="paymentForm">
          <input type="radio" id="credito" name="payment" value="credito" />
          <label htmlFor="credito">
            <CreditCard className="purpleIcon" size={22} weight="regular" />
            Cartão de crédito
          </label>

          <input type="radio" id="debito" name="payment" value="debito" />
          <label htmlFor="debito">
            <Bank className="purpleIcon" size={22} weight="regular" />
            Cartão de débito
          </label>

          <input type="radio" id="dinheiro" name="payment" value="dinheiro" />
          <label htmlFor="dinheiro">
            <Money className="purpleIcon" size={22} weight="regular" />
            Dinheiro
          </label>
        </div>
      </PaymentCard>
    </FormContainer>
  )
}
