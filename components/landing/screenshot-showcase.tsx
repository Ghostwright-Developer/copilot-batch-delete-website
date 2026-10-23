'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'

const screenshots = [
  {
    id: 'load',
    url: '/screenshots/store/02-load-older-chats-copilot.png',
    caption: 'Load your history',
    description: 'Open the side panel on any supported chat site. It connects by itself, and Load more scrolls the list until your older chats are in view.',
    alt: 'Clearcut Chats on Microsoft Copilot with the Load more button highlighted',
  },
  {
    id: 'select',
    url: '/screenshots/store/01-select-chats-chatgpt.png',
    caption: 'Tick what to remove',
    description: 'Tick chats one by one, Shift-click a range, or Select all loaded. The count updates live.',
    alt: 'Clearcut Chats on ChatGPT with ten chats ticked',
  },
  {
    id: 'confirm',
    url: '/screenshots/store/03-confirm-delete-claude.png',
    caption: 'Confirm once',
    description: 'You always get a clear confirmation in the panel before anything is deleted.',
    alt: 'Clearcut Chats on Claude asking to confirm deleting ten chats',
  },
  {
    id: 'done',
    url: '/screenshots/store/04-done-copilot.png',
    caption: 'Verified when done',
    description: 'A chat only counts as deleted once it has really left your list. Anything a site refuses is flagged, with a one-click Retry.',
    alt: 'Clearcut Chats finished deleting ten chats on Microsoft Copilot',
  },
  {
    id: 'sites',
    url: '/screenshots/store/05-you-choose-the-sites.png',
    caption: 'You choose the sites',
    description: 'Copilot works right after install. ChatGPT and Claude stay off until you turn each one on, and you can turn them off again.',
    alt: 'Copilot is included, ChatGPT and Claude are optional',
  },
]

export default function ScreenshotShowcase() {
  const [active, setActive] = useState(0)
  const current = screenshots[active]
  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll()
  const { ref: showcaseRef, isVisible: showcaseVisible } = useAnimateOnScroll()

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={cn('mb-12 text-center transition-all duration-700', headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">See it in action</p>
          <h2 className="text-balance text-4xl font-bold text-white md:text-5xl">
            A cleaner chat history, <span className="text-gradient">in minutes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-muted-foreground">Walk through it step by step.</p>
        </div>

        <div
          ref={showcaseRef}
          className={cn('glass rounded-[2rem] p-4 transition-all duration-700 md:p-8', showcaseVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
            {screenshots.map((shot, index) => (
              <div key={shot.id} className={cn(index === active ? 'block' : 'hidden')}>
                <Image src={shot.url} alt={shot.alt} width={1280} height={800} className="h-auto w-full" sizes="(min-width: 1152px) 1088px, 100vw" priority={index === 0} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div aria-live="polite" className="max-w-xl">
              <p className="text-xl font-semibold text-white">{current.caption}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{current.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {screenshots.map((shot, index) => (
                <button
                  key={shot.id}
                  onClick={() => setActive(index)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 hover:scale-105',
                    active === index ? 'border-transparent bg-gradient-to-r from-[oklch(0.62_0.2_250)] to-[oklch(0.58_0.26_300)] text-white shadow-lg shadow-[oklch(0.5_0.25_295/0.5)]' : 'border-white/15 bg-white/5 text-muted-foreground'
                  )}
                  aria-pressed={active === index}
                >
                  {index + 1}. {shot.caption}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
