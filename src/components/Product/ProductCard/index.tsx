import React from 'react'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

import { IProductCard } from '@/interface'
import { FormatPrice } from '@/utils/FormatPrice'

const ProductCard: React.FC<IProductCard> = ({ product, onShowInfo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-56 object-contain p-4" />
        <button className="absolute top-2 right-2 cursor-pointer" onClick={onShowInfo}>
          <IoInformationCircleOutline
            size={25}
            className="text-tertiary hover:text-primary transition-all ease-in-out duration-500"
          />
        </button>
      </div>
      <div className="flex flex-col p-4">
        <h2 className="text-lg text-tertiary font-normal md:w-32 lg:w-36">{product.name}</h2>
        <p className="text-xl text-tertiary font-medium mt-2">
          {FormatPrice(product.price)}
        </p>
      </div>
    </motion.div>
  )
}

export { ProductCard }
