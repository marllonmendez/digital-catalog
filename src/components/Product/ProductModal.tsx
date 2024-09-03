import React from 'react'

import { IProductModal } from '@/interface'

import { InputText as InputName } from '@/components/Input/InputText'
import { InputNumber as InputPrice } from '@/components/Input/InputNumber'
import Button from '@/components/Button'

const ProductModal: React.FC<IProductModal> = ({ name, price, closeModal }) => {
  return (
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/50">
      <div className="flex flex-col relative items-center justify-center bg-white px-10 py-10 rounded-[15px] sm:px-6">
        <h2 className="text-tertiary font-medium mb-5 text-3xl">Cadastrar Item</h2>
        <div className="flex flex-col gap-2">
          <InputName
            name="Nome"
            type="text"
            placeholder="Insira o nome"
            value={name}
          />
          <InputPrice
            name="Preço"
            type="tel"
            placeholder="Insira o preço"
            value={price}
          />
          <div className="flex gap-2">
            <Button
              label="Cancelar"
              onClick={closeModal}
              className="bg-none border border-primary text-tertiary hover:text-white hover:bg-primary/90 hover:border-primary/90"
            />
            <Button
              label="Adicionar"
              className="bg-primary border border-primary text-white hover:bg-primary/90 hover:border-primary/90"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
