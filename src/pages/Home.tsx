import React, { useState } from 'react'

import Header from '@/components/Header'
import ProductModal from '@/components/Product/ProductModal'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className={`flex flex-col py-5 px-10 min-h-screen bg-secondary sm:px-2`}>
      <Header addProduct={handleShowModal} />
      <main className={`flex flex-wrap items-center justify-center`}>
        {showModal && <ProductModal closeModal={handleCloseModal}/>}
      </main>
    </div>
  )
}
