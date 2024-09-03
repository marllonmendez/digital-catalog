import { IconType } from 'react-icons'

export interface IProduct {
  name?: string
  price?: number
}

export interface IProductModal extends IProduct {
  closeModal: () => void
}

export interface IHeader {
  addProduct: () => void
}

export interface IInput {
  name: string
  type: any
  placeholder: string
  value?: string | number
  updateValue?: (value: string | number) => void
  addonBefore?: string
}

export interface IButton {
  label: string
  className: string
  onClick?: () => void
  icon?: IconType
}
