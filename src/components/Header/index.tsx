import React from 'react'
import { IoAddCircle } from 'react-icons/io5'

import { IHeader } from '@/interface'

import Search from '@/components/Header/Search'
import Button from '@/components/Button'

import Logo from '../../assets/logo.png'

const Header: React.FC<IHeader> = ({ addProduct }) => {
  return (
    <header className="flex flex-col justify-center w-full">
      <Search />
      <div className="flex items-center justify-between w-full py-2">
        <a href="/" aria-label="Home" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-20 md:w-10"/>
          <h1 className="text-primary font-medium text-3xl sm:text-lg md:text-3xl">
            Catálogo Digital
          </h1>
        </a>
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
