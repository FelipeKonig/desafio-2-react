import { Cart } from './cart'
import { Form } from './form'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Form />
      <Cart />
    </CheckoutContainer>
  )
}
