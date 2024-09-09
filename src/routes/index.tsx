import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import ProductProvider from '@/context/useProductContext'

const AppRoutes = () => {
  return (
    <Router>
     <ProductProvider>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/add-product" element={<Home />} />
         <Route path="/info-product" element={<Home />} />
       </Routes>
     </ProductProvider>
    </Router>
  )
}

export default AppRoutes
