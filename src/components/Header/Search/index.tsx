import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'

import { FormatSearch } from '@/utils/FormatSearch'
import { useProductsContext } from '@/context/useProductContext'

const Search: React.FC = () => {
  const { setSearch } = useProductsContext()
  const [localQuery, setLocalQuery] = useState<string>('')

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const filterQuery = queryParams.get('q') || ''
    setLocalQuery(filterQuery)
    setSearch(FormatSearch(filterQuery))
  }, [location.search, setSearch])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (localQuery.length > 0) {
      setSearch(FormatSearch(localQuery))
      navigate(`/product?q=${encodeURIComponent(localQuery)}`, { replace: true })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      return handleSearchSubmit
    }
  }

  return (
    <div className="flex items-center justify-center w-full">
      <form onSubmit={handleSearchSubmit} className="relative w-full">
        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={localQuery}
          onChange={handleOnChange}
          onKeyDown={handleKeyPress}
          className="font-normal text-[1rem] p-2 pl-5 w-full h-[60px] outline-none pr-14 rounded-[8px] text-tertiary bg-white"
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2"
        >
          <IoSearch size={25} />
        </button>
      </form>
    </div>
  )
}

export default Search
