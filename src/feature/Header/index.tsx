'use client'
import Image from "next/image"
import NavRow from "./NavIcon"
import NextLink from "next/link"
import classMerge from "@/lib/utils/classMerge"
import { usePathname } from "next/navigation"
import { FaBars } from "react-icons/fa6";
import Button from "@/component/Button"
import nextLink from 'next/link'

export default function Header() {
  const path = usePathname()


  const linksheader = [
    {
      id: 0,
      title: 'Home',
      path: '/',
    },
    {
      id: 0,
      title: 'Planos',
      path: '#',
    },
    {
      id: 0,
      title: 'Notícias',
      path: '#',
    },
    {
      id: 0,
      title: 'FAQ',
      path: '#',
    },
  ]


  return (
    <header className="bg-gray-main-light">
      <div className="bg-gray-main">
        <div className="container">
        <NavRow/>
        </div>
      </div>
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <div className="flex md:gap-6 lg:gap-9">
            <img className="w-[97px] h-auto lg:w-[128px]" src="/assets/header/logo-trademap.svg" alt="logo trademap" />
            <ul className="hidden md:flex items-center md:gap-3 lg:gap-10 ">
              {linksheader.map((item) => {
                const isActive = path === item.path;
                return (
                  <li key={item.id}>
                    <NextLink href={item.path} className={classMerge([
                      'font-normal',
                      'text-[18px]',
                      'hover:text-green-main',
                      'tracking-wide',
                      , {
                        'text-green-main': !!isActive,
                        'text-white-main': !isActive
                      }
                    ])}>
                      {item.title}
                    </NextLink>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
             <FaBars className="text-green-main text-2xl block md:hidden" />
              <div className="hidden md:flex items-center gap-2 lg:gap-8">
              <Button colorMode="contrast">
                <NextLink href='#' className="flex items-center gap-2 justify-between">
                  <img className="h-fit w-[20px]" src="/assets/header/login.svg" alt="login icon" />
                  Trademap Web
                </NextLink>
              </Button>
              <Button colorMode="main">
                <NextLink href='#' className="flex items-center gap-2 justify-between">
                  <img  src="/assets/header/user.svg" alt="login icon" />
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
