import React from 'react'

import { IInputContainer } from '@/interface'

const InputContainer: React.FC<IInputContainer> = ({
  label,
  children
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-tertiary font-medium text-lg pl-1">{label}</h2>
      <div className="flex items-center w-full relative">
        {children}
      </div>
    </div>
  )
}

export default InputContainer
