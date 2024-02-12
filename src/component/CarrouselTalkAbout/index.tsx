/* eslint-disable @next/next/no-img-element */
'use client'
import classMerge from '@/lib/utils/classMerge'
import Slider from 'react-slick'
type CarrouselTrademapProps = {
  children: React.ReactNode
}

export default function CarrouselTalkAbout({
  children,
}: CarrouselTrademapProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    variableWidth: true,
    variableHeight: true,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div
      className={classMerge([
        '[&_.slick-slide]:flex',
        '[&_.slick-slide]:justify-center',
        '[&_.slick-slide]:mr-5',
        '[&_.slick-slide]:md:mr-7',
        '[&_.slick-slide]:lg:mr-12',
        '[&_.slick-slide]:h-full',
        '[&_.slick-slide]:lg:block',
        '[&_.slick-slide]:lg:block',
        '[&_.slick-track]:flex',
        '[&_.slick-prev]:!hidden',
        '[&_.slick-next]:!hidden',
        '[&_.slick-dots]:!flex',
        '[&_.slick-dots]:justify-center',
        '[&_.slick-dots]:mt-6',
        '[&_.slick-dots_li]:overflow-hidden',
        '[&_.slick-dots_li]:relative',
        '[&_.slick-dots_li]:mr-[10px]',
        '[&_.slick-dots_li]:w-[11px]',
        '[&_.slick-dots_li]:h-[11px]',
        '[&_.slick-dots_li]:rounded-full',
        '[&_.slick-dots_.slick-active]:before:flex',
        '[&_.slick-dots_.slick-active]:bg-green-main-hover',
        '[&_.slick-dots_.slick-active]:before:h-full',
        '[&_.slick-dots_li_button]:h-[11px]',
        '[&_.slick-dots_li_button]:w-[11px]',
        '[&_.slick-dots_li_button]:border-hidden',
        '[&_.slick-dots_li_button]:outline-none',
        '[&_.slick-dots_li_button]:rounded-full',
        '[&_.slick-dots_li_button]:bg-gray-main',
      ])}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}
