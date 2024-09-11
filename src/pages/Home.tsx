import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Service from '@/service'
import { FormatSearch } from '@/utils/FormatSearch'
import { useProductsContext } from '@/context/useProductContext'

import Header from '@/components/Header'
import Loading from '@/components/Loading'
import { ProductCard, ProductModal, ProductNotFound } from '@/components/Product'

export default function Home() {
  const { products, setProducts, search } = useProductsContext()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [productsLoading, setProductsLoading] = useState<boolean>(false)
  const [searchLoading, setSearchLoading] = useState<boolean>(false)

  const { slug } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    async function getProducts() {
      setProductsLoading(true)
      try {
        const response = await Service.GetProducts()
        setProducts(response.data)
      } catch (err) {
        console.error(err)
      } finally {
        setTimeout(() => {
          setProductsLoading(false)
        }, 1000)
      }
    }
    getProducts()
  }, [setProducts])

  useEffect(() => {
    if (search) {
      setSearchLoading(true)
    } else {
      setSearchLoading(false)
    }
    setTimeout(() => {
      setSearchLoading(false)
    }, 1000)
  }, [search])


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

  const filteredProducts = products.filter(product =>
    FormatSearch(product.name).includes(FormatSearch(search))
  )

  const isProduct = filteredProducts.length > 0

  return (
    <div className="flex flex-col py-5 px-10 min-h-screen bg-secondary sm:px-2">
      <Header addProduct={handleAddProduct} />
      <main>
        {(productsLoading || searchLoading) ? (
          <section className="flex flex-grow items-center justify-center w-full">
            <Loading />
          </section>
        ) : (
          <>
            {isProduct ? (
              <section className="grid gap-6 grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
                {filteredProducts.map((product) => (
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
          </>
        )}
        <AnimatePresence>
          {showModal && <ProductModal closeModal={handleClose} />}
        </AnimatePresence>
      </main>
    </div>
  )
}
