/* eslint-disable @next/next/no-img-element */

type CardInformationSteps = {
  alt: string
  src: string
  title: string
}

export default function CardInformationSteps({
  alt,
  src,
  title,
}: CardInformationSteps) {
  return (
    <div className=" w-[256px] sm:w-full md:max-w-[234px]">
      <img className="mb-4" src={src} alt={alt} />
      <p className="paragraph">{title}</p>
    </div>
  )
}
