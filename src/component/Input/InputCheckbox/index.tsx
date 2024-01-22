type InputCheckbox = {
  label: string
}

export default function InputCheckbox({ label }: InputCheckbox) {
  return (
    <div className="flex items-center gap-4 ">
      <input
        className="border-[2px] w-[18px] h-[18px] rounded border-green-main bg-transparent  checked:text-green-main  focus:right-0"
        type="checkbox"
        id={label}
      />
      <label
        className="text-white-main font-extralight cursor-pointer"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  )
}
