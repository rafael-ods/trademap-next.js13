/* eslint-disable @next/next/no-img-element */
import classMerge from '@/lib/utils/classMerge'
import Slider from 'react-slick'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
type CarrouselTrademapProps = {
  children: React.ReactNode
}

export default function CarrouselTrademap({
  children,
}: CarrouselTrademapProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    variableWidth: true,
    variableHeight: true,
    slidesToScroll: 1,
    prevArrow: <MdChevronLeft />,
    nextArrow: <MdChevronRight />,
  }

  return (
    <div
      className={classMerge([
        '[&_.slick-slide]:flex',
        '[&_.slick-slide]:justify-center',
        '[&_.slick-slide]:mr-1',
        '[&_.slick-slide]:h-full',
        '[&_.slick-slide]lg:block',
        '[&_.slick-track]:flex',
        '[&_.slick-prev]:z-[1]',
        '[&_.slick-prev]:text-4xl',
        '[&_.slick-prev]:text-green-main',
        '[&_.slick-prev]:absolute',
        '[&_.slick-prev]:cursor-pointer',
        '[&_.slick-prev]:left-0',
        '[&_.slick-prev]:top-[125px]',
        '[&_.slick-next]:text-4xl',
        '[&_.slick-next]:text-green-main',
        '[&_.slick-next]:absolute',
        '[&_.slick-next]:cursor-pointer',
        '[&_.slick-next]:right-0',
        '[&_.slick-next]:top-[125px]',
        '[&_.slick-list]:px-[55px]',
      ])}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}
