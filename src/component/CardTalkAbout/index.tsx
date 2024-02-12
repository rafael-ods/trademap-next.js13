import classMerge from '@/lib/utils/classMerge'
import { FaStar } from 'react-icons/fa6'
type CardTalkAboutProps = {
  description: string
  stars?: number
  nameUser?: string
}
export default function CardTalkAbout({
  description,
  nameUser,
  stars,
}: CardTalkAboutProps) {
  const numberOfStars = typeof stars === 'number' ? stars : 0
  const createStarsArray = () =>
    Array.from({ length: numberOfStars }, (_, index) => index)
  return (
    <div>
      <div className="absolute top-1 bg-[#06F1B0] w-full max-w-[340px] h-[100px] rounded-2xl" />
      <div
        className={classMerge([
          'relative',
          'px-4',
          'py-6',
          'top-4',
          'left-3',
          'text-base',
          'text-center',
          'rounded-2xl',
          'border-[1px]',
          'w-[374px]',
          'border-2',
          'border-[#06F1B0]',
          'bg-white-main-light',
        ])}
      >
        <p>{description}</p>
      </div>
      <h6 className="mt-8 font-semibold">{nameUser}</h6>
      <span className="flex justify-center mt-3">
        {createStarsArray().map((index) => (
          <FaStar key={index} color="#FCB814" />
        ))}
      </span>
    </div>
  )
}
