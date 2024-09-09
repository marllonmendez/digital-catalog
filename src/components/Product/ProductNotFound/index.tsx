import React from 'react'
import { RiFileList3Fill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const ProductNotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="flex items-center justify-center text-white text-center w-full h-full"
    >
      <div className="flex flex-col items-center justify-center min-h-80">
        <RiFileList3Fill size={120} />
        <h1 className="font-bold text-2xl">Nenhum produto encontrado</h1>
        <p className="font-normal text-[1rem]">
          Entre em contato com o suporte.
        </p>
      </div>
    </motion.div>
  )
}

export { ProductNotFound }
