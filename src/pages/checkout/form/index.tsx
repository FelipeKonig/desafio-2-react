import { InputMask } from 'primereact/inputmask'
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
  function optionalText() {
    if (
      (document.getElementById('complemento') as HTMLInputElement)!.value !== ''
    ) {
      document.getElementById('opcional')!.style.visibility = 'hidden'
    } else {
      document.getElementById('opcional')!.style.visibility = 'visible'
    }
  }

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
          <InputMask
            id="cep"
            placeholder="CEP"
            {...register('cep')}
            min="1"
            mask="99999-999"
            required
          ></InputMask>
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
                onChange={(e) => {
                  optionalText()
                }}
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
            <select id="uf" placeholder="UF" {...register('uf')}>
              <option value="" disabled selected>
                UF
              </option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
              <option value="EX">EX</option>
            </select>
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
