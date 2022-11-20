import { createContext, ReactNode, useState } from 'react'

export interface CoffeeCart {
  id: number
  name: string
  img: string
  price: string
  quantity: number
}

interface CartContextProviderType {
  cart: CoffeeCart[]
  addNewCoffee: (data: CoffeeCart) => void
}

export const CartContext = createContext({} as CartContextProviderType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeCart[]>([])

  function addNewCoffee(newCoffee: CoffeeCart) {
    console.log(cart)

    if (containsCoffeeInCart(newCoffee)) {
      setCart((state) =>
        cart.map((coffee) => {
          if (coffee.id === newCoffee.id) {
            return {
              ...coffee,
              quantity: coffee.quantity + newCoffee.quantity,
            }
          } else {
            return { ...coffee }
          }
        }),
      )
    } else {
      return setCart([...cart, newCoffee])
    }
  }

  function containsCoffeeInCart(newCoffee: CoffeeCart) {
    return cart.find((coffee) => coffee.id === newCoffee.id) && cart.length > 0
  }

  return (
    <CartContext.Provider value={{ cart, addNewCoffee }}>
      {children}
    </CartContext.Provider>
  )
}
