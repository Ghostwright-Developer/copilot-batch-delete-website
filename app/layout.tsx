import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://copilot.ghostwrightweb.com'

export const viewport: Viewport = {
  themeColor: '#060d1f',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Copilot Delete Helper — Bulk Delete Microsoft Copilot Chats',
    template: '%s — Copilot Delete Helper',
  },
  description:
    'Free browser extension to bulk delete your Microsoft Copilot and Microsoft 365 Copilot chats. Side panel, no refresh, no tracking, no servers.',
  keywords: ['Copilot', 'Microsoft Copilot', 'Microsoft 365 Copilot', 'delete chats', 'bulk delete', 'browser extension', 'privacy'],
  alternates: { canonical: '/' },
  authors: [{ name: 'Ghostwright Web Development' }],
  icons: {
    icon: [
      { url: '/icons/icon16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Copilot Delete Helper',
    description: 'Bulk delete Microsoft Copilot chats. Fast, private and free.',
    type: 'website',
    siteName: 'Copilot Delete Helper',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Copilot Delete Helper' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copilot Delete Helper',
    description: 'Bulk delete Microsoft Copilot chats. Fast, private and free.',
    images: ['/og.png'],
  },
}

const appLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Copilot Chat Batch Delete Helper',
  applicationCategory: 'BrowserApplication',
  operatingSystem: 'Chrome, Edge',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: siteUrl,
  author: { '@type': 'Organization', name: 'Ghostwright Web Development' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      </body>
    </html>
  )
}
