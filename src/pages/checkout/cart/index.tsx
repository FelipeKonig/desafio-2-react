import { CoffeeItem } from './coffeeItem'
import { CartContainer, CartValues, CoffeeCard } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>
      <CoffeeCard>
        <CoffeeItem />
        <CartValues>
          <div>
            <p>Total de itens</p>
            <p className="price">29,70</p>
          </div>
          <div>
            <p>Entrega</p>
            <p className="price">3,50</p>
          </div>
          <div id="total">
            <p>Total</p>
            <p className="price">33,20</p>
          </div>
          <button>Confirmar Pedido</button>
        </CartValues>
      </CoffeeCard>
    </CartContainer>
  )
}
