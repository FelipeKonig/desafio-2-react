import { createContext, ReactNode, useState } from 'react'

export interface Address {
  cep: number
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
  pagamento: string
}

interface AddressContextProviderType {
  address: Address
  createAddress: (newAddress: Address) => void
}

export const AddressContext = createContext({} as AddressContextProviderType)

interface AddressContextProviderProps {
  children: ReactNode
}

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [address, setAddress] = useState<Address>({
    cep: 0,
    bairro: '',
    cidade: '',
    complemento: '',
    numero: 0,
    pagamento: '',
    rua: '',
    uf: '',
  })

  function createAddress(newAddress: Address) {
    setAddress((state) => newAddress)
  }

  return (
    <AddressContext.Provider value={{ address, createAddress }}>
      {children}
    </AddressContext.Provider>
  )
}
