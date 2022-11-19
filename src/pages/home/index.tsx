import { Header } from './header'
import { CoffeeList, List } from './styles'

import { cafes } from '../../bd/cafes'
import { CoffeeCard } from './coffeeCard'

export function Home() {
  return (
    <>
      <Header />
      <CoffeeList>
        <h3>Nossos cafés</h3>
        <List>
          {cafes.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                img={coffee.img}
                tags={coffee.tags}
                name={coffee.name}
                description={coffee.description}
                price={coffee.price}
              />
            )
          })}
        </List>
      </CoffeeList>
    </>
  )
}
