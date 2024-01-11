import classMerge from "@/lib/utils/classMerge"

type ButtonProps = {
  children: React.ReactNode
  colorMode: 'main' | 'contrast'
}

export default function Button({children, colorMode}: ButtonProps) {
  return (
    <button className={classMerge([
      'py-2',
      'px-[0.5rem]',
      'lg:px-4',
      'rounded-sm',
      'hover:translate-y-[-8px]',
      'transition-all',
      'duration-300',
      'transition-transform',
      'ease-in-out',
      'tracking-wide',
      'uppercase',
      'text-xs',
      {
        'border': colorMode === 'contrast',
        'border-green-main': colorMode === 'contrast',
        'text-green-main-hover': colorMode === 'contrast',
        'font-light': colorMode === 'contrast',
        'hover:bg-gray-main': colorMode === 'contrast',

        'bg-green-main-gradient': colorMode === 'main',
        'hover:bg-green-main-gradient-hover': colorMode === 'main',
        'font-semibold': colorMode === 'main',
        'shadow-green-main-boxShadow': colorMode === 'main',
      }
    ])}>
      {children}
    </button>
  )
}
