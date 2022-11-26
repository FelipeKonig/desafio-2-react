import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { CoffeeItem } from './coffeeItem'
import { CartContainer, CartValues, CoffeeCard } from './styles'

export function Cart() {
  const { cart } = useContext(CartContext)

  const [totalCafesPrice, setTotalCartPrice] = useState(0)
  const shipping = 3.5
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    console.log(cart.length)
    if (cart.length === 0) {
      document.getElementById('confirmOrder')!.style.cursor = 'no-drop'
    }

    let totalPrice = 0

    cart.forEach((coffee) => {
      totalPrice += parseFloat(coffee.price) * coffee.quantity
    })

    setTotalCartPrice((state) => totalPrice)
    setTotalPrice((state) => totalPrice + shipping)
  }, [cart])

  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>
      <CoffeeCard>
        {cart.map((coffee) => {
          return <CoffeeItem key={coffee.id} coffee={coffee} />
        })}

        <CartValues>
          <div>
            <p>Total de itens</p>
            <p className="price">{totalCafesPrice.toFixed(2)}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p className="price">{shipping.toFixed(2)}</p>
          </div>
          <div id="total">
            <p>Total</p>
            <p className="price">{totalPrice.toFixed(2)}</p>
          </div>
          <button id="confirmOrder" type="submit">
            Confirmar Pedido
          </button>
        </CartValues>
      </CoffeeCard>
    </CartContainer>
  )
}
