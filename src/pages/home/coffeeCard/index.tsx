import { BuyContainer, CoffeeCardContainer } from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext, CoffeeCart } from '../../../contexts/CartContext'

interface Coffee {
  id: number
  img: string
  tags: string[]
  name: string
  description: string
  price: string
}

export function CoffeeCard(coffee: Coffee) {
  const { addNewCoffee } = useContext(CartContext)

  const [coffeeCount, setCoffeeCount] = useState(1)

  function handleAddCoffee() {
    setCoffeeCount(coffeeCount + 1)
  }

  function handleRemoveCoffee() {
    if (coffeeCount > 1) {
      setCoffeeCount(coffeeCount - 1)
    }
  }

  function handlePushToCart() {
    const newCoffee: CoffeeCart = {
      id: coffee.id,
      img: coffee.img,
      name: coffee.name,
      price: coffee.price,
      quantity: coffeeCount,
    }
    addNewCoffee(newCoffee)
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={coffee.img} alt="" />
      <div className="tags">
        {coffee.tags.map((tag) => {
          return (
            <span key={tag}>
              <p>{tag}</p>
            </span>
          )
        })}
      </div>
      <h4>{coffee.name}</h4>
      <p className="description">{coffee.description}</p>
      <form name="form" action="" method="post">
        <BuyContainer>
          <span>
            R$ <p>{coffee.price}</p>
          </span>
          <div className="actions">
            <div>
              <button type="button" onClick={handleRemoveCoffee}>
                <Minus className="icon" weight="bold" />
              </button>
              <p>{coffeeCount}</p>
              <button type="button" onClick={handleAddCoffee}>
                <Plus className="icon" weight="bold" />
              </button>
            </div>
          </div>
          <button type="button" onClick={handlePushToCart}>
            <ShoppingCart size={22} weight="fill" className="cart" />
          </button>
        </BuyContainer>
      </form>
    </CoffeeCardContainer>
  )
}
