import { CoffeeItemContainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

import { useContext, useState } from 'react'
import { CartContext, CoffeeCart } from '../../../../contexts/CartContext'

interface CoffeeItemProps {
  coffee: CoffeeCart
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const [coffeeCount, setCoffeeCount] = useState(coffee.quantity)

  const { increaseMoreCoffee, decreaseMoreCoffee, removeCoffee } =
    useContext(CartContext)

  function handleIncreaseMoreCoffee() {
    setCoffeeCount(coffeeCount + 1)
    increaseMoreCoffee(coffee.id)
  }

  function handleDecreaseMoreCoffee() {
    if (coffeeCount > 1) {
      setCoffeeCount(coffeeCount - 1)
      decreaseMoreCoffee(coffee.id)
    }
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee.id)
  }

  return (
    <CoffeeItemContainer>
      <div>
        <img src={coffee.img} alt="" />
        <div id="details">
          <p> {coffee.name}</p>
          <div id="actions">
            <div>
              <button type="button" onClick={handleDecreaseMoreCoffee}>
                <Minus className="icon" weight="bold" />
              </button>
              <p>{coffeeCount}</p>
              <button type="button" onClick={handleIncreaseMoreCoffee}>
                <Plus className="icon" weight="bold" />
              </button>
            </div>
            <button type="button" id="remove" onClick={handleRemoveCoffee}>
              <Trash size={32} weight="fill" className="cart" />
              <span>Remover</span>
            </button>
          </div>
        </div>
      </div>
      <p id="price">R${coffee.price}</p>
    </CoffeeItemContainer>
  )
}
