import React from 'react'
import NextLink from 'next/link'
import NavIcon from '@/component/NavIcon'
import classMerge from '@/lib/utils/classMerge'
const navList = [
  {
  id: 0,
  path: '#',
  title: 'TradeCast',
  src: '/assets/nav-icon-header/listen.svg',
},
  {
  id: 1,
  path: '#',
  title: 'Liga',
  src: '/assets/nav-icon-header/shield.svg',
},
  {
  id: 1,
  path: '#',
  title: 'Educa',
  src: '/assets/nav-icon-header/flag.svg',
},
]


export default function NavRow() {
  return (
    <nav className='py-3 md:flex items-center justify-between hidden'>
      <ul className='flex gap-3'>
        {navList.map((item) => {
          return (
            <li key={item.id}>
              <NextLink href={item.path} className='flex gap-2'>
                <img src={item.src} alt={item.title} />
                <span className={classMerge([
                  'text-[12px]',
                  'duration-300',
                  'cursor-pointer',
                  'text-green-main',
                  'font-extralight',
                  'transition-colors',
                  'hover:text-green-main-hover',
                ])}>
                  {item.title}
                </span>
              </NextLink>
            </li>
          )
        })}
      </ul>
        <NavIcon colorMode='contrast' />
    </nav>
  )
}
