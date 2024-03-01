import NextLink from 'next/link'

/* eslint-disable @next/next/no-img-element */
type CardNewsMain = {
  src: string
  title: string
  link: string
  description: string
}

export default function CardNewsMain({
  description,
  link,
  src,
  title,
}: CardNewsMain) {
  return (
    <NextLink key={title} href={link}>
      <div className="flex flex-col w-full lg:w-[255px] h-auto gap-2">
        <img
          className="rounded-lg h-[200px] md:h-auto "
          src={src}
          alt={title}
        />
        <h6 className="font-bold text-base">{title}</h6>
        <p className="text-gray-500 text-xs">{description}</p>
      </div>
    </NextLink>
  )
}
