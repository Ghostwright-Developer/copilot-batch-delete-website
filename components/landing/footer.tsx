'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { ref: footerRef, isVisible: footerVisible } = useAnimateOnScroll()

  return (
    <footer ref={footerRef} className="border-t border-white/10 bg-[oklch(0.08_0.04_268/0.7)] backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div
            className={cn(
              'flex flex-col items-center gap-3 md:items-start transition-all duration-700',
              footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            <Link 
              href="/" 
              className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/icons/icon32.png"
                alt="Clearcut Chats icon"
                width={24}
                height={24}
                className="rounded-md transition-transform duration-300 hover:rotate-12"
              />
              <span className="text-sm font-semibold text-foreground">
                Clearcut Chats
              </span>
            </Link>
            <p className="max-w-xs text-center text-xs leading-relaxed text-muted-foreground md:text-left">
              A privacy-first browser extension for cleaning up your Copilot, ChatGPT and Claude chat history.
            </p>
            <p className="text-xs text-muted-foreground">
              Not affiliated with Microsoft, OpenAI or Anthropic.
            </p>
          </div>

          {/* Links */}
          <nav
            aria-label="Footer navigation"
            className={cn(
              'flex flex-col items-center gap-3 md:items-end transition-all duration-700',
              footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '150ms' }}
          >
            {[
              { href: '/support', label: 'Support', icon: null },
              { href: '/changelog', label: 'What\'s new', icon: null },
              { href: '/privacy', label: 'Privacy Policy', icon: null },
              { href: 'mailto:owen@ghostwrightweb.com', label: 'owen@ghostwrightweb.com', icon: null },
              { href: 'https://github.com/Cyberhawk-9/copilot-chat-deletion', label: 'GitHub', icon: Github, external: true },
            ].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={cn(
                  'flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1',
                  footerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                )}
                style={{ transitionDelay: `${200 + index * 75}ms` }}
              >
                {link.icon && <link.icon className="h-3.5 w-3.5" aria-hidden="true" />}
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className={cn(
            'mt-10 border-t border-border/40 pt-6 text-center transition-all duration-700',
            footerVisible ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Clearcut Chats by Ghostwright Web Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
