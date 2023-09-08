import '@styles/main.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eco-Friendly Online Store Mockup',
  description: 'A visually stunning and user-friendly e-commerce website mockup promoting sustainability by showcasing eco-friendly products.',
  authors: [{ name: 'Oliver Ebsworth', url: 'https://github.com/DigitalDreamerOfficial' }],
  keywords: ['web design', 'e-commerce', 'sustainability', 'mockup', 'eco-friendly'],
}

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
