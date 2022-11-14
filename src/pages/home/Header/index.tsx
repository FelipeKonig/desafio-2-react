import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HeaderContainer,
  ImgContainer,
  IntroContainer,
  ItemsContainer,
  TitleContainer,
} from './styles'

import titleCover from '../../../assets/titleCover.png'

export function Header() {
  return (
    <HeaderContainer>
      <IntroContainer>
        <TitleContainer>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContainer>
        <ItemsContainer>
          <span>
            <ShoppingCart weight="fill" id="shoppingcart" />
            Compra simples e segura
          </span>
          <span>
            <Package weight="fill" id="package" />
            Embalagem mantém o café intacto
          </span>
          <span>
            <Timer weight="fill" id="timer" />
            Entrega rápida e rastreada
          </span>
          <span>
            <Coffee weight="fill" id="coffee" />O café chega fresquinho até você
          </span>
        </ItemsContainer>
      </IntroContainer>
      <ImgContainer>
        <img src={titleCover} alt="" />
      </ImgContainer>
    </HeaderContainer>
  )
}
