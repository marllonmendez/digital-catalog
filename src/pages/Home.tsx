import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import Service from '@/service'
import { useProductsContext } from '@/context/useProductContext'

import Header from '@/components/Header'
import { ProductCard, ProductModal, ProductNotFound } from '@/components/Product'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const { products, setProducts } = useProductsContext()

  const { slug } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await Service.GetProducts()
        setProducts(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    getProducts()
  }, [setProducts])

  useEffect(() => {
    const isPathAddProduct = location.pathname === '/add-product'
    const isPathProduct = location.pathname.includes(`/product/${slug}`)
    setShowModal(isPathAddProduct || isPathProduct)
  }, [location.pathname])

  const handleAddProduct = () => {
    setShowModal(true)
    navigate('/add-product', { replace: true })
  }

  const handleOnShowInfo = (slug: string) => {
    setShowModal(true)
    navigate(`/product/${slug}`, { replace: true })
  }

  const handleClose = () => {
    setShowModal(false)
    navigate('/', { replace: true })
  }

  const isProduct = products.length > 0

  return (
    <div className="flex flex-col py-5 px-10 min-h-screen bg-secondary sm:px-2">
      <Header addProduct={handleAddProduct} />
      <main>
        {isProduct ? (
          <section className="grid gap-6 grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onShowInfo={() => handleOnShowInfo(product.slug)}
              />
            ))}
          </section>
        ) : (
          <section className="flex flex-grow items-center justify-center w-full">
            <ProductNotFound />
          </section>
        )}
        {showModal && <ProductModal closeModal={handleClose} />}
      </main>
    </div>
  )
}
