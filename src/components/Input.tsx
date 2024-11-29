import React from "react"
import { UseFormRegister } from "react-hook-form"
interface Props {
  className: string,
  register: UseFormRegister<any>,
  name: string
  type: React.HTMLInputTypeAttribute,
  placeholder: string,
  errorMessage?: string
}
function Input(props: Props) {
    const {className, register, name, type, placeholder, errorMessage} = props 
  return (
    <div className={className}>
      <input
        {...register(name)}
        type={type}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
        placeholder={placeholder}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'> {errorMessage || ''}</div>
    </div>
  )
}

export default Input
