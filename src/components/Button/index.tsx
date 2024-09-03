import React from 'react'

import { IButton } from '@/interface'

const Button: React.FC<IButton> = ({ label, className, onClick, icon: Icon}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded font-medium text-lg w-1/2 p-2 outline-none transition-all ease-in-out duration-500 ${className}`}
    >
      {Icon && <Icon size={25} />}
      {label}
    </button>
  )
}

export default Button
