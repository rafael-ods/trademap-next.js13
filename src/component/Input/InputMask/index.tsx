'use client'
import classMerge from '@/lib/utils/classMerge'
import React, { InputHTMLAttributes } from 'react'
import MaskedInput from 'react-input-mask'

type InputProps = {
  label?: string
  helpText?: string
  type?: 'email' | 'text' | 'password'
  mask: string
} & InputHTMLAttributes<HTMLInputElement>

export default function InputMask({
  type,
  label,
  helpText,
  mask,
  ...props
}: InputProps) {
  return (
    <div>
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor={label}
          className="text-white-main text-xs cursor-pointer"
        >
          {label}
        </label>

        <MaskedInput
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
          type={type}
          id={label}
          mask={mask}
        />
      </div>
      <p className="text-[#D30D48] font-medium text-xs mt-2">{helpText}</p>
    </div>
  )
}
