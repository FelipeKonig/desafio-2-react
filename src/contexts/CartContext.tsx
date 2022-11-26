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
  removeCoffee: (id: number) => void
  increaseMoreCoffee: (id: number) => void
  decreaseMoreCoffee: (id: number) => void
}

export const CartContext = createContext({} as CartContextProviderType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeCart[]>([])

  function increaseMoreCoffee(id: number) {
    setCart((state) =>
      cart.map((coffee) => {
        if (coffee.id === id) {
          return {
            ...coffee,
            quantity: coffee.quantity + 1,
          }
        } else {
          return { ...coffee }
        }
      }),
    )
  }

  function decreaseMoreCoffee(id: number) {
    setCart((state) =>
      cart.map((coffee) => {
        if (coffee.id === id) {
          return {
            ...coffee,
            quantity: coffee.quantity - 1,
          }
        } else {
          return { ...coffee }
        }
      }),
    )
  }

  function removeCoffee(id: number) {
    setCart((state) => cart.filter((coffee) => coffee.id !== id))
  }

  function addNewCoffee(newCoffee: CoffeeCart) {
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
    <CartContext.Provider
      value={{
        cart,
        addNewCoffee,
        increaseMoreCoffee,
        decreaseMoreCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
