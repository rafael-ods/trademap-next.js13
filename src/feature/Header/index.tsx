/* eslint-disable @next/next/no-img-element */
'use client'
import NavRow from './NavIcon'
import NextLink from 'next/link'
import classMerge from '@/lib/utils/classMerge'
import { usePathname } from 'next/navigation'
import { FaBars } from 'react-icons/fa6'
import Button from '@/component/Button'
import { MdOutlineClose } from 'react-icons/md'
import { HiDownload } from 'react-icons/hi'
import { useState } from 'react'
import { useRouter } from 'next/router'
import LogoTradeMap from '@/component/LogoTradeMap'

export default function Header() {
  const path = usePathname()
  const [selected, setSelected] = useState(false)
  const router = useRouter

  const linksheader = [
    {
      id: 0,
      title: 'Home',
      path: '/',
    },
    {
      id: 0,
      title: 'Planos',
      path: '/plano',
    },
    {
      id: 0,
      title: 'Notícias',
      path: '#',
    },
    {
      id: 0,
      title: 'FAQ',
      path: '/faq',
    },
  ]
  const linksheaderMobile = [
    {
      id: 0,
      title: 'Home',
      path: '/',
    },
    {
      id: 1,
      title: 'Planos',
      path: '/plano',
    },
    {
      id: 2,
      title: 'Notícias',
      path: '#',
    },
    {
      id: 3,
      title: 'FAQ',
      path: '/faq',
    },
    {
      id: 4,
      title: 'Ligas',
      path: '#',
      src: '/assets/header/shield-mobile.svg',
      alt: 'icon shield',
    },
    {
      id: 5,
      title: 'EducaMap',
      path: '#',
      src: '/assets/header/flag.svg',
      alt: 'icon flag',
    },
  ]

  return (
    <header className="bg-gray-main-light">
      <div className="bg-gray-main">
        <div className="container">
          <NavRow />
        </div>
      </div>
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <nav className="flex md:gap-6 lg:gap-9">
            <LogoTradeMap
              classProps={'w-[97px] h-auto lg:w-[128px]'}
              href="/"
              src="/assets/header/logo-trademap.svg"
            />
            <ul className="hidden md:flex items-center md:gap-3 lg:gap-10 ">
              {linksheader.map((item) => {
                const isActive = path === item.path
                return (
                  <li key={item.id}>
                    <NextLink
                      href={item.path}
                      // eslint-disable-next-line no-sparse-arrays
                      className={classMerge([
                        'font-normal',
                        'text-[18px]',
                        'hover:text-green-main',
                        'tracking-wide',
                        ,
                        {
                          'text-green-main': !!isActive,
                          'text-white-main': !isActive,
                        },
                      ])}
                    >
                      {item.title}
                    </NextLink>
                  </li>
                )
              })}
            </ul>
          </nav>
          {/* MOBILE */}
          <nav
            className={classMerge([
              {
                'right-0': !!selected,
                '-right-full': !selected,
              },
              ' md:hidden ',
              'transition-all',
              'duration-300',
              'ease-in-out',
              ' fixed ',
              ' w-full ',
              ' top-0 ',
              ' h-full ',
              ' z-[99999]',
              'bg-header-bg',
              'bg-cover',
              'bg-right-bottom',
            ])}
          >
            <div
              className={classMerge([
                'w-full',
                'fixed',
                'h-full',
                'opacity-[0.94]',
                'bg-header-bg-gradient',
              ])}
            >
              <div className="container pt-[10px]">
                <div className="flex items-center">
                  <NextLink href="/">
                    <img
                      className="w-[127.75px] h-auto lg:w-[128px]"
                      src="/assets/header/logo-trademap.svg"
                      alt="logo trademap"
                    />
                  </NextLink>
                </div>
                <ul className="mt-8 flex flex-col px-5 gap-4">
                  {linksheaderMobile.map((item, index, array) => {
                    return (
                      <li
                        key={item.id}
                        className={classMerge([
                          'flex ',
                          'items-center ',
                          'text-xl',
                          'font-normal',
                          'text-green-main',
                          'last-of-type:flex ',
                          'last-of-type:gap-2 ',
                          'last-of-type:border-b ',
                          'last-of-type:border-gray-main-icon ',
                          'last-of-type:border-opacity-40 ',
                          'last-of-type:pb-5 ',
                          'last-of-type:w-[280px] ',
                          index === array.length - 2
                            ? 'flex gap-2 border-t border-gray-main-icon border-opacity-40 w-[280px] pt-5 '
                            : '',
                        ])}
                      >
                        <img src={item.src} alt={item.alt} />
                        <NextLink onClick={router} href={item.path}>
                          {item.title}
                        </NextLink>
                      </li>
                    )
                  })}
                  <div className="mt-4 space-y-11 w-[280px]">
                    <Button colorMode="contrast" classProps="w-full">
                      <NextLink
                        href="/onboard/login"
                        className="flex items-center gap-16 uppercase text-green-main text-base font-light"
                      >
                        <img
                          className="!h-[20px] w-[20px]"
                          src="/assets/header/login.svg"
                          alt="login icon"
                        />
                        Trademap Web
                      </NextLink>
                    </Button>
                    <Button colorMode="main" classProps="w-full">
                      <NextLink
                        href="/onboard/login"
                        className="flex items-center gap-12 uppercase text-base"
                      >
                        <HiDownload size={18} />
                        Baixe o app grátis!
                      </NextLink>
                    </Button>
                  </div>
                </ul>
              </div>
            </div>
          </nav>

          <div>
            {selected ? (
              <MdOutlineClose
                className={classMerge([
                  {
                    fixed: !!selected,
                    'z-[9999999]': !!selected,
                    'right-5': !!selected,
                    'top-7': !!selected,
                  },
                  ' text-white-main ',
                  ' text-2xl ',
                  ' block ',
                  ' md:hidden',
                ])}
                onClick={() => setSelected((old) => !old)}
                size={36}
              />
            ) : (
              <FaBars
                className={classMerge([
                  {
                    fixed: !!selected,
                    'z-[9999999]': !!selected,
                    'right-5': !!selected,
                    'top-7': !!selected,
                  },
                  ' text-green-main ',
                  ' text-2xl ',
                  ' block ',
                  ' md:hidden',
                ])}
                size={28}
                onClick={() => setSelected((old) => !old)}
              />
            )}
            <div className="hidden md:flex items-centerS gap-2 lg:gap-8">
              <Button colorMode="contrast">
                <NextLink
                  href="/onboard/login"
                  className="flex items-center gap-2 justify-between"
                >
                  <img
                    className="h-fit w-[20px]"
                    src="/assets/header/login.svg"
                    alt="login icon"
                  />
                  Trademap Web
                </NextLink>
              </Button>
              <Button colorMode="main">
                <NextLink
                  href="/onboard/login"
                  className="flex items-center gap-2 justify-between"
                >
                  <img src="/assets/header/user.svg" alt="login icon" />
                  Cadastre-se grátis!
                </NextLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
