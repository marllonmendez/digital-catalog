import { Dispatch, ReactNode, SetStateAction } from 'react'
import { IconType } from 'react-icons'
import { a } from 'vite/dist/node/types.d-aGj9QkWt'

export interface IProduct {
  id?: number
  name: string
  price: number
  image: string
}

export interface IProductCard {
  product: IProduct
  onShowInfo: () => void
}

export interface IProductModal {
  closeModal: () => void
}

export interface IHeader {
  addProduct: () => void
}

export interface IInputContainer {
  label: string
  children: ReactNode
}

export interface IInput {
  label: string
  type: any
  placeholder: string
  accept?: string
  value?: any
  updateValue?: (value: any) => void
}

export interface IButton {
  label: string
  type?: any
  className: string
  onClick?: () => void
  icon?: IconType
}

export interface IProductContext {
  products: IProduct[]
  setProducts: Dispatch<SetStateAction<IProduct[]>>
}

export interface IProductProvider {
  children: ReactNode
}
