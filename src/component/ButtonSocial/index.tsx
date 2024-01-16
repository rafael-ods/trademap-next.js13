/* eslint-disable @next/next/no-img-element */
'use client'
import NextLink from 'next/link'

type ButtonSocialProps = {
  src: string
  href: string
  alt: string
  target?: string
}

export default function ButtonSocial({
  src,
  alt,
  href,
  target,
}: ButtonSocialProps) {
  return (
    <button className="shadow-btn-green-main-boxShadow w-fit">
      <NextLink href={href} target={target}>
        <img src={src} alt={alt} />
      </NextLink>
    </button>
  )
}
