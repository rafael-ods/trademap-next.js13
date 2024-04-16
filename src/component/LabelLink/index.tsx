'use client'
import classMerge from '@/lib/utils/classMerge'
import NextLink from 'next/link'

type labelLinkProps = {
  label: string
  href: string
  position: 'start' | 'center' | 'end'
}
export default function LabelLink({
  href,
  label,
  position = 'start',
}: labelLinkProps) {
  return (
    <div className={classMerge(['flex', `justify-${position}`, 'mt-4'])}>
      <NextLink
        className={classMerge([
          'p-[5px]',
          'px-4',
          'text-[11px]',
          'font-semibold',
          'uppercase',
          'bg-slate-200',
          'w-fit',
          'rounded-lg',
          'transition-all',
          'duration-300',
          'hover:bg-slate-400',
        ])}
        href={href}
      >
        {label}
      </NextLink>
    </div>
  )
}
