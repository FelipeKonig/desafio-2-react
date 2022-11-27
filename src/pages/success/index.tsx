import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { AddressContext } from '../../contexts/AddressContext'
import {
  InfoItem,
  OrderInfo,
  Subtitle,
  SuccessContainer,
  Title,
  TitleContainer,
} from './styles'
import delivery from '../../assets/delivery.png'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { address } = useContext(AddressContext)
  const { cleanCart } = useContext(CartContext)

  useEffect(() => {
    cleanCart()
  }, [cleanCart])

  return (
    <SuccessContainer>
      <div>
        <TitleContainer>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
        </TitleContainer>
        <OrderInfo>
          <InfoItem>
            <MapPin id="mapIn" size={32} weight="fill" />
            <p>
              Entrega em Rua{' '}
              <strong>
                {address.rua}, {address.numero}{' '}
              </strong>
              - {address.cidade}, {address.uf}
            </p>
          </InfoItem>
          <InfoItem>
            <Timer id="timer" size={32} weight="fill" />
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </InfoItem>
          <InfoItem>
            <CurrencyDollar id="currency" size={32} weight="fill" />
            <p>
              Pagamento na entrega <br />
              <strong>{address.pagamento}</strong>
            </p>
          </InfoItem>
        </OrderInfo>
      </div>
      <div>
        <img src={delivery} alt="" />
      </div>
    </SuccessContainer>
  )
}
