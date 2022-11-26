import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Cart } from './cart'
import { Form } from './form'
import * as zod from 'zod'

import { CheckoutContainer } from './styles'
import { Address, AddressContext } from '../../contexts/AddressContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

const newAddressFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'O CEP precisa ser maior do que 1'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.string().min(1, 'O número precisa ser maior do que 1'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  pagamento: zod.string().min(1, 'Informe o tipo de pagamento'),
})

export type newAddressFormData = zod.infer<
  typeof newAddressFormValidationSchema
>

export function Checkout() {
  const { createAddress } = useContext(AddressContext)
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm<newAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      pagamento: '',
    },
  })

  function createNewAddress(data: newAddressFormData) {
    if (cart.length > 0) {
      const newAddress: Address = {
        cep: data.cep,
        rua: data.rua,
        numero: parseInt(data.numero),
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        pagamento: data.pagamento,
      }
      createAddress(newAddress)
      reset()

      navigate('/success')
    } else {
      alert('Pedido sem cafés')
      reset()
    }
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(createNewAddress)} action="/checkout">
        <Form register={register} />
        <Cart />
      </form>
    </CheckoutContainer>
  )
}
