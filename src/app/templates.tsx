import Footer from '@/feature/Footer'
import Header from '@/feature/Header'

type templateProps = {
  children: React.ReactNode
}

export default function Template({ children }: templateProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
