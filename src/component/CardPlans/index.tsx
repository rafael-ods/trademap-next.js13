import classMerge from '@/lib/utils/classMerge'
import NextLink from 'next/link'
import { ReactNode } from 'react'

type CardPlansProps = {
  cards: {
    title: string
    flag?: boolean
    flagLabel?: string
    prize: string
    cents: string
    icons: ReactNode[]
    descriptions: string[]
    path: string
    link: string
    textAbout?: string
  }[]
}
export default function CardPlans({ cards }: CardPlansProps) {
  return (
    <>
      {cards.map((item) => {
        return (
          <article
            data-aos="fade-up"
            data-aos-delay={500}
            className="w-full rounded-lg shadow-xl flex flex-col"
            key={item.title}
          >
            <div className="text-center rounded-t-lg bg-gray-main py-5 relative">
              <h4 className="font-bold text-2xl text-white-main-light max-w-[200px] mx-auto">
                {item.title}
              </h4>
              {item.flag && (
                <div className="absolute h-[150px] w-[150px] right-0 top-0 rotate-90 overflow-hidden">
                  <span
                    className="text-center text-[13px] py-1 w-[200%] mt-[35px] bg-[#01E59B] font-semibold uppercase text-white-main-light block -rotate-45 -translate-y-1/2 -translate-x-1/3
                  "
                  >
                    {item.flagLabel}
                  </span>
                </div>
              )}
            </div>
            <div className="py-10 text-center">
              <div className="flex justify-center">
                <sup className="font-bold text-gray-main text-xl">R$</sup>
                <span className="font-bold text-6xl"> {item.prize}</span>
                <sup className="font-bold text-gray-main text-xl">
                  {item.cents}
                </sup>
              </div>
              <p className="text-green-main-hover">Més</p>
            </div>
            <ul className="flex flex-col  mx-auto w-full px-5 lg:px-24">
              {item.icons.map((icon, i, array) => (
                <li
                  key={`icon-${i}`}
                  className={classMerge([
                    'flex',
                    'items-start ',
                    'gap-3',
                    'py-1',
                    {
                      'border-b-[1px]': i !== array.length - 1, // Adiciona borda inferior se não for o último item
                      'border-t-[1px]': i !== 0, // Adiciona borda superior se não for o primeiro item
                    },
                  ])}
                >
                  <span>{icon}</span>
                  <p>{item.descriptions[i]}</p>
                </li>
              ))}
            </ul>
            <div className="py-8 flex flex-col text-center items-center gap-4">
              <NextLink
                className={classMerge([
                  'bg-green-main ',
                  'uppercase ',
                  'font-bold ',
                  'rounded-lg ',
                  'py-3 ',
                  'px-9 ',
                  'hover:text-white',
                ])}
                href={item.path}
              >
                {item.link}
              </NextLink>
              <p className="text-xs">{item.textAbout}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}
