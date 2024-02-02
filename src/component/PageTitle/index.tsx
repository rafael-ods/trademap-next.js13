type PageTitle = {
  overline: string
  title: string
  paragraph: string
}

export default function PageTitle({ overline, title, paragraph }: PageTitle) {
  return (
    <section className="bg-gray-main py-10">
      <div className="container flex flex-col gap-4">
        <h6
          data-aos="fade-up"
          className="text-white-main-light uppercase text-base font-bold"
        >
          {overline}
        </h6>
        <h1
          data-aos="fade-up"
          data-aos-delay={400}
          className="heading-primary md:text-[60px] font-bold"
        >
          {title}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay={500}
          className="text-white text-2xl"
        >
          {paragraph}
        </p>
      </div>
    </section>
  )
}
