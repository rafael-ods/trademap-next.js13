/* eslint-disable @next/next/no-img-element */
'use client'
import Button from '@/component/Button'
import NavRow from '@/feature/Header/NavIcon'
import NextLink from 'next/link'
import InputSearch from '@/component/Input/InputSearch'
import classMerge from '@/lib/utils/classMerge'
import { useRouter } from 'next/router'
import { HiDownload } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { FaBars } from 'react-icons/fa6'
import { useState } from 'react'

const navList = [
  {
    path: '#',
    title: 'TradeCast',
    src: '/assets/nav-icon-header/listen.svg',
  },
  {
    path: '#',
    title: 'TradeMap App',
    src: '/assets/nav-icon-header/cell.svg',
  },
  {
    path: '#',
    title: 'Liga',
    src: '/assets/nav-icon-header/shield.svg',
  },
  {
    path: '#',
    title: 'Educa',
    src: '/assets/nav-icon-header/flag.svg',
  },
]

const linksheaderMobile = [
  {
    id: 0,
    title: 'Mercados',
    path: '/',
  },
  {
    id: 1,
    title: 'TM-Explica',
    path: '/',
  },
  {
    id: 2,
    title: 'TradeCast',
    path: '/',
  },
  {
    id: 3,
    title: 'Webstories',
    path: '/',
  },
  {
    id: 4,
    title: 'TradeMap Home',
    path: '/',
    src: '/assets/header/arrow.svg',
    alt: 'icon shield',
  },
  {
    id: 5,
    title: 'Planos',
    path: '/plano',
    src: '/assets/header/alvo.svg',
    alt: 'icon flag',
  },
  {
    id: 6,
    title: 'Ligas',
    path: '/',
    src: '/assets/header/shield-mobile.svg',
    alt: 'icon flag',
  },
  {
    id: 7,
    title: 'EducaMap',
    path: '/',
    src: '/assets/header/flag.svg',
    alt: 'icon flag',
  },
]

export default function HeaderNews() {
  const [selected, setSelected] = useState(false)
  const router = useRouter

  return (
    <header className="bg-gray-main-login flex px-4 md:px-0 item-center justify-between py-6 md:block md:py-0">
      <div className="bg-gray-main-light hidden md:flex">
        <div className="container">
          <NavRow links={navList} />
        </div>
      </div>
      <div className="container hidden py-11 md:flex items-center  justify-center xl:justify-between gap-4 flex-wrap">
        <NextLink href="/">
          <img
            alt="logo trademap"
            className="w-[182px] h-auto"
            src="/assets/new-page/hero/logo-agencia-trademap.png"
          />
        </NextLink>
        <div className="w-full md:max-w-[447px] ">
          <InputSearch
            placeholder="Pesquisa por..."
            classProps={
              'bg-gray-main-light border-none pl-12 text-white-main focus:ring-0'
            }
          />
        </div>

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

      {/* MOBILE */}
      <NextLink href="/">
        <img
          alt="logo trademap"
          className="w-[117px] h-auto md:hidden"
          src="/assets/new-page/hero/logo-agencia-trademap.png"
        />
      </NextLink>
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
            <div className="flex py-3 items-center">
              <NextLink href="/">
                <img
                  alt="logo trademap"
                  className="w-[200px] h-auto"
                  src="/assets/new-page/hero/logo-agencia-trademap.png"
                />
              </NextLink>
            </div>
            <ul className=" flex flex-col px-5 gap-4">
              <h5 className="text-white-main-light -ml-4 mt-3">Categorias:</h5>
              {linksheaderMobile.map((item, index, array) => {
                return (
                  <li
                    key={item.id}
                    className={classMerge([
                      'flex ',
                      'items-center ',
                      'text-xl',
                      'gap-2',
                      'font-normal',
                      'text-green-main',
                      'last-of-type:flex ',
                      'last-of-type:gap-2 ',
                      'last-of-type:border-b ',
                      'last-of-type:border-gray-main-icon ',
                      'last-of-type:border-opacity-40 ',
                      'last-of-type:pb-5 ',
                      'last-of-type:w-[280px] ',
                      index === array.length - 4
                        ? 'border-t border-gray-main-icon border-opacity-40 w-[280px] pt-5 '
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
              <div className="mt-4 space-y-11">
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
      </div>
    </header>
  )
}
