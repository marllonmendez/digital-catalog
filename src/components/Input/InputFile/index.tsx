import React, { ChangeEvent, useState } from 'react'
import { IInput } from '@/interface'
import InputContainer from '@/components/Input/InputContainer'

const InputFile: React.FC<IInput> = ({ label, type, placeholder, accept, updateValue }) => {
  const [fileName, setFileName] = useState<string | undefined>(placeholder)
  const [isFileSelected, setIsFileSelected] = useState<boolean>(false)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setIsFileSelected(true)
      if (updateValue) updateValue(file)
    } else {
      setFileName(placeholder)
      setIsFileSelected(false)
      if (updateValue) updateValue(null)
    }
  }

  return (
    <InputContainer label={label}>
      <label
        className={`w-[500px] sm:w-[300px] pl-4 p-3 bg-transparent ${
          isFileSelected ? 'text-tertiary' : 'text-tertiary/50'
        } border-2 border-dashed border-tertiary/50 rounded-lg cursor-pointer outline-none transition-all duration-500 ease-in-out hover:border-primary hover:ring-0 hover:ring-primary focus:border-primary focus:ring-0 focus:ring-primary`}
      >
        <input
          type={type}
          accept={accept}
          className="hidden"
          onChange={handleFileChange}
        />
        {fileName}
      </label>
    </InputContainer>
  )
}

export { InputFile }
