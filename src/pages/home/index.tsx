import { Header } from './Header'
import { BuyContainer, CoffeeCard, CoffeeList, List } from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { cafes } from '../../bd/cafes'

export function Home() {
  return (
    <>
      <Header />
      <CoffeeList>
        <h3>Nossos cafés</h3>
        <List>
          {cafes.map((coffee) => {
            return (
              <CoffeeCard key={coffee.id}>
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
                <BuyContainer>
                  <span>
                    R$ <p>{coffee.price}</p>
                  </span>
                  <div className="actions">
                    <div>
                      <button>
                        <Minus className="icon" weight="bold" />
                      </button>
                      <p>1</p>
                      <button>
                        <Plus className="icon" weight="bold" />
                      </button>
                    </div>
                  </div>
                  <ShoppingCart size={22} weight="fill" className="cart" />
                </BuyContainer>
              </CoffeeCard>
            )
          })}
        </List>
      </CoffeeList>
    </>
  )
}
