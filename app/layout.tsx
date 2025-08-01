import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Axie Cord - Official Website',
  description: 'Discover, collect, and trade unique Axie Cord NFTs. Join our community and explore the world of digital collectibles.',
  keywords: 'NFT, Axie Cord, Digital Art, Blockchain, Collectibles, Crypto',
  authors: [{ name: 'Axie Cord Team' }],
  openGraph: {
    title: 'Axie Cord - Official Website',
    description: 'Discover, collect, and trade unique Axie Cord NFTs',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axie Cord - Official Website',
    description: 'Discover, collect, and trade unique Axie Cord NFTs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
} 