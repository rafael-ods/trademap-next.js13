import React from 'react'
import NextLink from 'next/link'
/* eslint-disable @next/next/no-img-element */

type LogoTradeMapProps = {
  href: string
  src: string
  classProps: React.CSSProperties | string
}

export default function LogoTradeMap({
  href,
  src,
  classProps,
}: LogoTradeMapProps) {
  return (
    <NextLink href={href}>
      <img className={`${classProps}`} src={src} alt="logo trademap" />
    </NextLink>
  )
}
