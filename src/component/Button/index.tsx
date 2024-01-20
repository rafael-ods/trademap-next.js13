import classMerge from '@/lib/utils/classMerge'

type ButtonProps = {
  children: React.ReactNode
  colorMode: 'main' | 'contrast'
  classProps?: React.CSSProperties | string
}

export default function Button({
  children,
  colorMode,
  classProps,
}: ButtonProps) {
  return (
    <button
      className={classMerge([
        `${classProps}`,
        'py-2',
        'px-[0.5rem]',
        'lg:px-4',
        'rounded-sm',
        'tracking-wide',
        'uppercase',
        'text-xs',
        'ease-in-out',
        'duration-300',
        'transition-all',
        'transition-transform',
        'hover:translate-y-[-8px]',
        {
          border: colorMode === 'contrast',
          'border-green-main': colorMode === 'contrast',
          'text-green-main-hover': colorMode === 'contrast',
          'font-light': colorMode === 'contrast',
          'hover:bg-gray-main': colorMode === 'contrast',

          'bg-green-main-gradient': colorMode === 'main',
          'hover:bg-green-main-gradient-hover': colorMode === 'main',
          'font-semibold': colorMode === 'main',
          'shadow-green-main-boxShadow': colorMode === 'main',
        },
      ])}
    >
      {children}
    </button>
  )
}
