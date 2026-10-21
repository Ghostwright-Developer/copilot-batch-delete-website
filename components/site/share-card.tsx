'use client'

import { useState } from 'react'
import { Check, Copy, Star } from 'lucide-react'
import { SITE } from '@/lib/site'

// Review + share in one card. Used on the welcome page, the what's-new page and the home page.
export default function ShareCard({
  heading = 'Did it save you time?',
  body = 'A short review helps other people find it, and it is the best way to say thanks. Sharing it with a friend or a coworker helps too.',
}: {
  heading?: string
  body?: string
}) {
  const [copied, setCopied] = useState(false)
  const link = `${SITE.url}/?utm_source=share`
  const text = SITE.shareText

  const links = [
    { label: 'X', href: `https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}` },
    {
      label: 'Reddit',
      href: `https://www.reddit.com/submit?url=${encodeURIComponent(link)}&title=${encodeURIComponent('Free extension to bulk delete Microsoft Copilot chats')}`,
    },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}` },
    {
      label: 'Email',
      href: `mailto:?subject=${encodeURIComponent('Bulk delete your Copilot chats')}&body=${encodeURIComponent(`${text}\n\n${link}`)}`,
    },
  ]

  async function copy() {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.prompt('Copy this link:', link)
    }
  }

  return (
    <section
      className="rounded-3xl border border-border/80 p-8"
      style={{ background: 'linear-gradient(135deg, oklch(0.13 0.06 255) 0%, oklch(0.11 0.05 270) 100%)' }}
    >
      <h2 className="text-2xl font-bold text-foreground">{heading}</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{body}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="/go/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          style={{ background: 'linear-gradient(135deg, oklch(0.79 0.14 202), oklch(0.70 0.18 230))' }}
        >
          <Star className="h-4 w-4" aria-hidden="true" /> Leave a review
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-cyan/40"
        >
          {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
          {copied ? 'Link copied' : 'Copy share link'}
        </button>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Share on">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.label === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-cyan/40 hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
