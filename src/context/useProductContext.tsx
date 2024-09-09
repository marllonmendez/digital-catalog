import { createContext, useContext, useState } from 'react'

import { IProduct, IProductContext, IProductProvider } from '@/interface'

const ProductContext = createContext({} as IProductContext)

export default function ProductProvider({ children }: IProductProvider) {
  const [products, setProducts] = useState<IProduct[]>([])

  return (
    <ProductContext.Provider value={{ products, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => useContext(ProductContext)
