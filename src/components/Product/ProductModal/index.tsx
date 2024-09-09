import React, { FormEvent, useCallback, useState } from 'react'
import { motion } from 'framer-motion'

import Service from '@/service'
import { IProductModal } from '@/interface'

import { InputName, InputPrice, InputImage } from '@/components/Input'
import Button from '@/components/Button'

const ProductModal: React.FC<IProductModal> = ({ closeModal }) => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !price || !image) {
      console.error('All fields are required.')
      return
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('image', image)

    try {
      await Service.PostProduct(formData)
      onClear()
      closeModal()
    } catch (error) {
      console.error('Failed to create product:', error)
    }
  }

  const onClear = useCallback(() => {
    setName('')
    setPrice('')
    setImage(null)
  }, [])

  return (
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/50">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col relative items-center justify-center bg-white px-10 py-10 rounded-[15px] sm:px-6"
      >
        <h2 className="text-tertiary font-medium mb-5 text-3xl">Cadastrar Item</h2>
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <InputName
            label="Nome"
            type="text"
            placeholder="Insira o nome"
            value={name}
            updateValue={(value) => setName(value)}
          />
          <InputPrice
            label="Preço"
            type="tel"
            placeholder="Insira o preço"
            value={price}
            updateValue={(value) => setPrice(value)}
          />
          <InputImage
            label="Imagem"
            type="file"
            accept="image/*"
            placeholder="Insira a imagem"
            value={image}
            updateValue={(value) => setImage(value)}
          />
          <div className="flex gap-2">
            <Button
              label="Cancelar"
              onClick={closeModal}
              className="bg-none border border-primary text-tertiary hover:text-white hover:bg-primary/90 hover:border-primary/90"
            />
            <Button
              label="Adicionar"
              type="submit"
              className="bg-primary border border-primary text-white hover:bg-primary/90 hover:border-primary/90"
            />
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export { ProductModal }
