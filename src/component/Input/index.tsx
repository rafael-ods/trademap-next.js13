'use client'
import classMerge from '@/lib/utils/classMerge'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type InputProps = {
  label?: string
  required?: boolean
  helptext?: string
  placeholder?: string
  type?: 'email' | 'text' | 'password'
}

export default function Input({
  type,
  label,
  helptext,
  placeholder,
  required = false,
}: InputProps) {
  const [inputType, setInputType] = useState(type)

  const handleTogglePassword = () => {
    setInputType((prevInputType) =>
      prevInputType === 'password' ? 'text' : 'password',
    )
  }

  return (
    <div>
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor={label}
          className="text-white-main text-xs cursor-pointer"
        >
          {label}
        </label>

        <input
          className={classMerge([
            'py-4 ',
            'pr-10 ',
            'text-sm ',
            'border-2 ',
            'rounded-lg ',
            'focus:ring-0 ',
            'bg-transparent ',
            'font-extralight ',
            'text-white-main ',
            'border-[#353546] ',
            'focus:border-green-main',
          ])}
          id={label}
          type={inputType}
          required={required}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute top-[40px] right-5"
          >
            {inputType === 'password' ? (
              <FaEye size={22} color="#C6C6C6" />
            ) : (
              <FaEyeSlash size={22} color="#C6C6C6" />
            )}
          </button>
        )}
      </div>
      <p>{helptext}</p>
    </div>
  )
}
