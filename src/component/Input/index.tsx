'use client'
import classMerge from '@/lib/utils/classMerge'
import React, { InputHTMLAttributes, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type InputProps = {
  label?: string
  helpText?: string
  type?: 'email' | 'text' | 'password'
  inputRef?: React.Ref<HTMLInputElement>
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({
  type,
  label,
  helpText,
  inputRef,
  ...props
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
          ref={inputRef}
          {...props}
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
            {
              'border-[#D30D48]': helpText,
              'focus:border-[#D30D48]': helpText,
            },
          ])}
          id={label}
          type={inputType}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute top-[40px] right-5"
          >
            {inputType === 'password' ? (
              <FaEye size={22} color={helpText ? '#D30D48' : '#C6C6C6'} />
            ) : (
              <FaEyeSlash size={22} color={helpText ? '#D30D48' : '#C6C6C6'} />
            )}
          </button>
        )}
      </div>
      <p className="text-[#D30D48] font-medium text-xs mt-2">{helpText}</p>
    </div>
  )
}
