import classMerge from '@/lib/utils/classMerge'
import Link from 'next/link'
import React from 'react'

type CardFaqProps = {
  title: string
  description: string
  href: string
}

export default function CardFaq({ title, description, href }: CardFaqProps) {
  return (
    <Link
      className={classMerge([
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'text-center',
        'h-full',
        'py-5',
        'group',
        'border',
        'px-[30px]',
        'rounded-md',
        'text-[#06E59B]',
        'border-[#06E59B]',
        'hover:bg-[#06E59B]',
      ])}
      href={href}
      key={title}
    >
      <h6 className="mb-4 text-base group-hover:text-white">{title}</h6>
      <p className="group-hover:text-white text-base">{description}</p>
    </Link>
  )
}
