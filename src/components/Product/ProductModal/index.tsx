import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { IoTrash } from 'react-icons/io5'
import { motion } from 'framer-motion'
import slugify from 'slugify'

import Service from '@/service'
import { IProductModal } from '@/interface'

import Button from '@/components/Button'
import { InputName, InputPrice, InputImage } from '@/components/Input'

const ProductModal: React.FC<IProductModal> = ({ closeModal }) => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [image, setImage] = useState<File | null>(null)

  const { slug } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const isPathProduct = slug && location.pathname.includes(`/product/${slug}`)

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (isPathProduct) {
          const response = await Service.GetProductById(slug)
          setName(response.data.name)
          setPrice(response.data.price)
        }
      } catch (err) {
        console.error('Failed to fetch product data:', err)
      }
    }
    fetchProductData()
  }, [slug, isPathProduct])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !price) {
      console.error('All fields are required.')
      return
    }

    const priceStringToNumber = Number(price
      .replace('R$ ', '')
      .replace(',', '.')
      .trim()
    )

    const updatedProduct = () => {
      const newSlug = slugify(name, { lower: true, strict: true })
      navigate(`/product/${newSlug}`, { replace: true })
      window.location.reload()
    }

    try {
      if (isPathProduct) {
        await Service.PutProduct(slug, { name, price: priceStringToNumber })
        updatedProduct()
      } else {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        if (image) {
          formData.append('image', image)
        }
        await Service.PostProduct(formData)
        newProduct()
      }
    } catch (error) {
      console.error('Failed to save product:', error)
    }
  }


  const newProduct = useCallback(() => {
    setName('')
    setPrice('')
    setImage(null)
    closeModal()
    window.location.reload()
  }, [closeModal])

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
        className={`flex flex-col justify-center relative bg-white px-10 py-10 rounded-[15px] sm:px-6 ${isPathProduct ? 'items-stretch' : 'items-center'}`}
      >
        <div className="flex items-center justify-between mb-5">
          <h2
            className={`flex text-tertiary items-center font-medium text-3xl ${isPathProduct ? 'justify-start' : 'justify-center'}`}
          >
            {isPathProduct ? 'Editar Item' : 'Cadastrar Item'}
          </h2>
          {isPathProduct ? (
            <button>
              <IoTrash size={30} className="text-tertiary hover:text-red-700 transition-all ease-in-out duration-500" />
            </button>
          ) : null}
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <InputName
            label="Nome"
            type="text"
            placeholder="Insira o nome"
            value={name}
            updateValue={(value) => setName(value)}  // Atualizar nome e slug
          />
          <InputPrice
            label="Preço"
            type="tel"
            placeholder="Insira o preço"
            value={price}
            updateValue={(value) => setPrice(value)}
          />
          {!isPathProduct && (
            <InputImage
              label="Imagem"
              type="file"
              accept="image/*"
              placeholder="Insira a imagem"
              value={image}
              updateValue={(value) => setImage(value)}
            />
          )}
          <div className="flex gap-2">
            <Button
              label="Cancelar"
              onClick={closeModal}
              className="bg-none border border-primary text-tertiary hover:text-white hover:bg-primary/90 hover:border-primary/90"
            />
            <Button
              label={isPathProduct ? 'Atualizar' : 'Adicionar'}
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
