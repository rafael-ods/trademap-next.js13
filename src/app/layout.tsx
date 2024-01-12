import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '../providers'
import getPageTitle from '@/lib/utils/getPageTitle'
import Header from '@/feature/Header'

const inter = Inter({ subsets: ['latin'], weight: ['300','400', '500', '600', '700']})

export const metadata: Metadata = {
  title: getPageTitle(),
  description: '',
  icons: '/assets/favicon.png',
  keywords: ['template', 'api', 'route'],
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_SITE_URL)),
  openGraph: {
    type: 'website',
    title: getPageTitle(),
    url: String(process.env.NEXT_PUBLIC_SITE_URL),
    description: '',
    images: '/assets/og.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: getPageTitle(),
    site: String(process.env.NEXT_PUBLIC_SITE_URL),
    description: '',
    images: '/assets/og.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white-main-light`}>
        <Providers>
          <Header/>
            <main>
             {children}
            </main>
        </Providers>
        </body>
    </html>
  )
}
