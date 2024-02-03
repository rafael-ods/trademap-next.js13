import classMerge from '@/lib/utils/classMerge'
import { SelectHTMLAttributes } from 'react'

type Option = {
  value: string
  label: string
}

type InputSelectProps = {
  label?: string
  helpText?: string
  options: Option[]
} & SelectHTMLAttributes<HTMLSelectElement>

export default function InputSelect({
  label,
  helpText,
  options,
  ...props
}: InputSelectProps) {
  return (
    <div>
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor={label}
          className="text-white-main text-xs cursor-pointer"
        >
          {label}
        </label>

        <select
          id={label}
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
        >
          <option value=""></option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <p className="text-[#D30D48] font-medium text-xs mt-2">{helpText}</p>
    </div>
  )
}
