/* eslint-disable @next/next/no-img-element */
import classMerge from '@/lib/utils/classMerge'
import Slider from 'react-slick'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
type CarrouselNewsProps = {
  children: React.ReactNode
}

export default function CarrouselNewsPage({ children }: CarrouselNewsProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <MdChevronLeft />,
    nextArrow: <MdChevronRight />,
  }

  return (
    <div
      className={classMerge([
        '[&_.slick-slide]:h-full',
        '[&_.slick-prev]:z-[1]',
        '[&_.slick-prev]:text-4xl',
        '[&_.slick-prev]:font-bold',
        '[&_.slick-prev]:text-black',
        '[&_.slick-prev]:absolute',
        '[&_.slick-prev]:cursor-pointer',
        '[&_.slick-prev]:left-0',
        '[&_.slick-prev]:-bottom-12',
        '[&_.slick-next]:text-4xl',
        '[&_.slick-next]:font-bold',
        '[&_.slick-next]:text-black',
        '[&_.slick-next]:absolute',
        '[&_.slick-next]:cursor-pointer',
        '[&_.slick-next]:left-14',
        '[&_.slick-next]:-bottom-12',
      ])}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}
