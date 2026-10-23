'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Initial animation
    const timer = setTimeout(() => setVisible(true), 100)
    
    // Scroll detection
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-500',
        scrolled 
          ? 'border-white/10 bg-[oklch(0.1_0.05_268/0.78)] shadow-lg shadow-black/20' 
          : 'border-transparent bg-[oklch(0.1_0.05_268/0.35)]',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/icons/icon48.png"
            alt="Clearcut Chats icon"
            width={32}
            height={32}
            className="rounded-lg transition-transform duration-300 hover:rotate-6"
          />
          <span className="text-sm font-semibold text-foreground">
            Clearcut Chats
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {[
            { href: '/#features', label: 'Features' },
            { href: '/#how-it-works', label: 'How It Works' },
            { href: '/#faq', label: 'FAQ' },
            { href: '/support', label: 'Support' },
            { href: '/privacy', label: 'Privacy' },
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative text-sm text-muted-foreground transition-all duration-300 hover:text-foreground',
                'after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-cyan after:transition-all after:duration-300 hover:after:w-full',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              )}
              style={{ transitionDelay: `${150 + index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div
          className={cn(
            'flex items-center gap-3 transition-all duration-500',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href="/go/install?src=nav"
            className="rounded-full bg-gradient-to-r from-[oklch(0.62_0.2_250)] to-[oklch(0.58_0.26_300)] px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-[oklch(0.5_0.25_295/0.45)] transition-all duration-300 hover:scale-105"
          >
            Get the extension
          </a>
        </div>
      </div>
    </header>
  )
}
