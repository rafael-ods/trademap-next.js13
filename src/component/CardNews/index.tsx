/* eslint-disable @next/next/no-img-element */
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import Link from 'next/link'

type CardNewsProps = {
  src: string
  alt: string
  title: string
  href: string
  label: string
}

export default function CardNews({
  alt,
  href,
  label,
  src,
  title,
}: CardNewsProps) {
  return (
    <Link href={href} className="text-xs text-gray-500">
      <article className="flex items-start gap-3">
        <img className="w-[124px] h-auto rounded-lg" src={src} alt={alt} />
        <div>
          <h6 className="text-sm lg:text-xs leading-5 font-bold text-gray-main mb-3">
            {title}
          </h6>
          <span className="flex items-center gap-1">
            {label} <MdKeyboardDoubleArrowRight size={12} />
          </span>
        </div>
      </article>
    </Link>
  )
}
