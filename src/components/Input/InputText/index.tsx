import React, { useRef } from 'react'

import { IInput } from '@/interface'
import InputContainer from '@/components/Input/InputContainer'

const InputText: React.FC<IInput> = ({
  label,
  type,
  placeholder,
  value,
  updateValue,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <InputContainer label={label}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => updateValue && updateValue(e.target.value)}
        autoComplete="off"
        ref={inputRef}
        className="w-[500px] sm:w-[300px] p-3 bg-transparent text-tertiary border-2 border-solid border-tertiary/50 rounded-lg pl-5 outline-none transition-all duration-500 ease-in-out hover:border-primary hover:ring-0 hover:ring-primary focus:border-primary focus:ring-0 focus:ring-primary"
      />
    </InputContainer>
  )
}

export { InputText }
