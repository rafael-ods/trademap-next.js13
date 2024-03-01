'use client'
import { InputHTMLAttributes, useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

type InputSearchProps = {
  classProps: React.CSSProperties | string
} & InputHTMLAttributes<HTMLInputElement>

export default function InputSearch({
  classProps,
  ...props
}: InputSearchProps) {
  const [searchValue, setSearchValue] = useState('')

  const handleClearClick = () => {
    setSearchValue('')
  }
  return (
    <div className="relative">
      {searchValue.length > 0 && (
        <FaTimes
          className="absolute top-1/3 right-4 !cursor-pointer"
          color="#a09f9f"
          onClick={handleClearClick}
        />
      )}
      <input
        {...props}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={`${classProps} w-full`}
        type="text"
      />
      <FaSearch className="absolute top-1/3 left-4" color="#a09f9f" />
    </div>
  )
}
