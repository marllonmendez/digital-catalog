import React from 'react'
import { IoAddCircle } from 'react-icons/io5'

import { IHeader } from '@/interface'

import Search from '@/components/Header/Search'
import Button from '@/components/Button'

const Header: React.FC<IHeader> = ({ addProduct }) => {
  return (
    <header className="flex flex-col justify-center w-full">
      <Search />
      <div className="flex items-center justify-between w-full py-5">
        <h2 className="text-white font-bold text-4xl sm:text-3xl md:text-3xl">Catálogo</h2>
        <Button
          label="Novo"
          onClick={addProduct}
          icon={IoAddCircle}
          className="bg-primary text-white border-none w-32 h-12 gap-1 hover:bg-primary/90"
        />
      </div>
    </header>
  )
}

export default Header
