import { CoffeeItemContainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

import coffee1 from '../../../../assets/cafes/coffee1.png'
import { useState } from 'react'

export function CoffeeItem() {
  const [coffeeCount, setCoffeeCount] = useState(1)

  function handleAddCoffee() {
    setCoffeeCount(coffeeCount + 1)
  }

  function handleRemoveCoffee() {
    if (coffeeCount > 1) {
      setCoffeeCount(coffeeCount - 1)
    }
  }

  return (
    <CoffeeItemContainer>
      <div>
        <img src={coffee1} alt="" />
        <div id="details">
          <p> Expresso Tradicional</p>
          <div id="actions">
            <div>
              <button type="button" onClick={handleRemoveCoffee}>
                <Minus className="icon" weight="bold" />
              </button>
              <p>{coffeeCount}</p>
              <button type="button" onClick={handleAddCoffee}>
                <Plus className="icon" weight="bold" />
              </button>
            </div>
            <button type="button" id="remove">
              <Trash size={32} weight="fill" className="cart" />
              <span>Remover</span>
            </button>
          </div>
        </div>
      </div>
      <p id="price">R$9,90</p>
    </CoffeeItemContainer>
  )
}
