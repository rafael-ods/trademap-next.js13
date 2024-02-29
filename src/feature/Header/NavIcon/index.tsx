/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NextLink from 'next/link'
import NavIcon from '@/component/NavIcon'
import classMerge from '@/lib/utils/classMerge'

type NavRowProps = {
  links: {
    path: string
    title: string
    src: string
  }[]
}

export default function NavRow({ links }: NavRowProps) {
  return (
    <nav className="py-3 md:flex items-center justify-between hidden">
      <ul className="flex gap-3">
        {links.map((item) => {
          return (
            <li key={item.title}>
              <NextLink href={item.path} className="flex gap-2">
                <img src={item.src} alt={item.title} />
                <span
                  className={classMerge([
                    'text-[12px]',
                    'duration-300',
                    'cursor-pointer',
                    'text-green-main',
                    'font-extralight',
                    'transition-colors',
                    'hover:text-green-main-hover',
                  ])}
                >
                  {item.title}
                </span>
              </NextLink>
            </li>
          )
        })}
      </ul>
      <NavIcon colorMode="contrast" />
    </nav>
  )
}
