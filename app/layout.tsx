import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LikedProductsProvider } from '@/context/liked-products-context'
import { LikedProductsDrawer } from '@/components/liked-products-drawer'
import { LikedProductsFAB } from '@/components/liked-products-fab'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Hydronex — Leading Hose & Fittings Manufacturer',
  description:
    'Hydronex provides hydraulic hoses, industrial hoses, fittings and complete fluid-power solutions. ISO 9001 certified. Custom solutions available.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LikedProductsProvider>
          {children}
          <LikedProductsDrawer global />
          <LikedProductsFAB global />
        </LikedProductsProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
