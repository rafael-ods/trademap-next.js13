import {
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaSquareInstagram,
  FaSquareXTwitter,
 }
  from "react-icons/fa6";

import NextLink from 'next/link'
import classMerge from "@/lib/utils/classMerge";
import { ReactTagManager } from "react-gtm-ts";


const navIcon = [
  {
    id: 0,
    path: '#',
    icon: <FaSquareXTwitter />,
  },
  {
    id: 1,
    path: '#',
    icon: <FaSquareInstagram />,
  },
  {
    id: 2,
    path: '#',
    icon: <FaTelegram />,
  },
  {
    id: 3,
    path: '#',
    icon: <FaFacebook />,
  },
  {
    id: 4,
    path: '#',
    icon: <FaYoutube />,
  },
  {
    id: 5,
    path: '#',
    icon: <FaLinkedin />,
  },
  {
    id: 6,
    path: '#',
    icon: <FaTiktok />,
  },
]

type NavIconProps = {
  colorMode: 'main' | 'contrast'
}

export default function NavIcon({colorMode} : NavIconProps) {
  return (
    <nav>
      <ul className="flex gap-2">
        {navIcon.map((item) => {
          return (
            <li key={item.id}>
              <NextLink href={item.path}
              className={classMerge([
                'p-2 ',
                'flex',
                'text-xs',
                'rounded',
                'items-center',
                'justify-center',
                'hover:bg-green-main',
                'text-gray-main-icon',
                {
                'hover:text-gray-main' : colorMode === 'contrast',
                  'duration-300': colorMode === 'contrast',
                  'transition-all': colorMode === 'contrast',
                  'hover:scale-110': colorMode === 'contrast',
                  'bg-background-main-icon': colorMode === 'contrast',
                  'bg-green-main': colorMode === 'main',
                  'text-gray-main': colorMode === 'main',
                  'hover:animate-pulse': colorMode === 'main',
                  'hover:duration-300': colorMode === 'main',
                  'hover:ease-linear': colorMode === 'main',
                  'animate-repeat-1': colorMode === 'main',
                },
              ])}
              >
                <span className="">{item.icon}</span>
              </NextLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
