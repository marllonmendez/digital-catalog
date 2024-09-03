import React from 'react'
import { IoSearch } from 'react-icons/io5'

const Search: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <form className="relative w-full">
        <input
          type="text"
          placeholder="Pesquisar produto..."
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
