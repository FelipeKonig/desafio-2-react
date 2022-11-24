import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  const [countCafes, setCountCafes] = useState(0)

  useEffect(() => {
    if (cart.length > 0) {
      let count = 0

      cart.forEach((coffee) => (count += coffee.quantity))

      setCountCafes((state) => count)

      document.getElementById('counter')!.style.visibility = 'visible'
    } else {
      setCountCafes((state) => 0)
      document.getElementById('counter')!.style.visibility = 'hidden'
    }
  }, [cart])

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" title="Home">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Canoinhas, SC
        </span>
        <div>
          <NavLink id="cart" to="/checkout" title="Carrinho">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
          <span id="counter">{countCafes}</span>
        </div>
      </nav>
    </HeaderContainer>
  )
}
