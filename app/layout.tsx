import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuroraBackground from '@/components/site/aurora-background'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://clearcutchats.ghostwrightweb.com'

export const viewport: Viewport = {
  themeColor: '#0a0d24',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Clearcut Chats — Bulk Delete Copilot, ChatGPT and Claude Chats',
    template: '%s — Clearcut Chats',
  },
  description:
    'Free browser extension to bulk delete your Microsoft Copilot, ChatGPT and Claude chats. Side panel, no refresh, no tracking, no servers.',
  keywords: ['Clearcut Chats', 'delete ChatGPT chats', 'delete Claude chats', 'delete Copilot chats', 'bulk delete chats', 'bulk delete', 'browser extension', 'privacy'],
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
    title: 'Clearcut Chats',
    description: 'Bulk delete your AI chats. Fast, private and free.',
    type: 'website',
    siteName: 'Clearcut Chats',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Clearcut Chats' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clearcut Chats',
    description: 'Bulk delete your AI chats. Fast, private and free.',
    images: ['/og.png'],
  },
}

const appLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Clearcut Chats',
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
        <AuroraBackground />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      </body>
    </html>
  )
}
