import React, { useRef } from 'react'

import { IInput } from '@/interface'

const InputText: React.FC<IInput> = ({
  name,
  type,
  placeholder,
  value,
  updateValue,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex flex-col">
      <h2 className="text-tertiary font-medium text-lg pl-1">{name}</h2>
      <div className="flex items-center w-full relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => updateValue && updateValue(e.target.value)}
          autoComplete="off"
          ref={inputRef}
          className="w-[500px] sm:w-[300px] h-14 px-4 py-2 bg-transparent border border-tertiary text-tertiary rounded-lg pl-5 outline-none transition-all duration-500 ease-in-out focus:border-primary focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  )
}

export { InputText }
