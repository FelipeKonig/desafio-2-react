import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { UseFormRegister } from 'react-hook-form'
import { newAddressFormData } from '..'
import {
  AddressCard,
  FormAddressContainer,
  FormContainer,
  PaymentCard,
  Title,
} from './styles'

interface FormProps {
  register: UseFormRegister<newAddressFormData>
}

export function Form({ register }: FormProps) {
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
          <input
            id="cep"
            type="number"
            placeholder="CEP"
            {...register('cep')}
            min="1"
            required
          />
          <input
            id="rua"
            type="text"
            placeholder="Rua"
            {...register('rua')}
            required
          />
          <div>
            <input
              type="number"
              placeholder="Número"
              {...register('numero')}
              min="1"
              required
            />
            <div>
              <input
                id="complemento"
                type="text"
                placeholder="Complemento"
                {...register('complemento')}
              />
              <span id="opcional">Opcional</span>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Bairro" {...register('bairro')} />
            <input
              id="cidade"
              type="text"
              placeholder="Cidade"
              {...register('cidade')}
              required
            />
            <input id="uf" type="text" placeholder="UF" {...register('uf')} />
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
          <input
            type="radio"
            id="credito"
            value="credito"
            required
            {...register('pagamento')}
          />
          <label htmlFor="credito">
            <CreditCard className="purpleIcon" size={22} weight="regular" />
            Cartão de crédito
          </label>

          <input
            type="radio"
            id="debito"
            value="debito"
            required
            {...register('pagamento')}
          />
          <label htmlFor="debito">
            <Bank className="purpleIcon" size={22} weight="regular" />
            Cartão de débito
          </label>

          <input
            type="radio"
            id="dinheiro"
            value="dinheiro"
            required
            {...register('pagamento')}
          />
          <label htmlFor="dinheiro">
            <Money className="purpleIcon" size={22} weight="regular" />
            Dinheiro
          </label>
        </div>
      </PaymentCard>
    </FormContainer>
  )
}
