import { Header } from './Header'
import { BuyContainer, CoffeeCard, CoffeeList, List } from './styles'

import coffee1 from '../../assets/cafes/coffee1.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function Home() {
  return (
    <>
      <Header />
      <CoffeeList>
        <h3>Nossos cafés</h3>
        <List>
          <CoffeeCard>
            <img src={coffee1} alt="" />
            <div className="tags">
              <span>
                <p>tradicional</p>
              </span>
            </div>
            <h4>Expresso Tradicional</h4>
            <p className="description">
              O tradicional café feito com água quente e grãos moídos
            </p>
            <BuyContainer>
              <span>
                R$ <p>9,90</p>
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
        </List>
      </CoffeeList>
    </>
  )
}
