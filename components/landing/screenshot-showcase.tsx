'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'

const screenshots = [
  {
    id: 'ready',
    url: '/screenshots/panel-ready.png',
    caption: 'Open the panel',
    description:
      'Click the extension on any Copilot page. The side panel connects by itself, then Add Checkboxes puts a box on every chat.',
  },
  {
    id: 'selected',
    url: '/screenshots/panel-selected.png',
    caption: 'Pick your chats',
    description:
      'Tick chats one by one, Shift-click a range, or Select All Loaded. The count updates live.',
  },
  {
    id: 'confirm',
    url: '/screenshots/panel-confirm.png',
    caption: 'Confirm',
    description:
      'You always get a confirmation in the panel before anything is deleted.',
  },
  {
    id: 'deleting',
    url: '/screenshots/panel-deleting.png',
    caption: 'Watch it work',
    description:
      'Progress shows live. Stop whenever you like. A chat only counts once it has really left your list.',
  },
  {
    id: 'done',
    url: '/screenshots/panel-done.png',
    caption: 'All done',
    description:
      'A summary of what was deleted, with a one-click Retry for anything Copilot refused.',
  },
]

export default function ScreenshotShowcase() {
  const [active, setActive] = useState(0)
  const current = screenshots[active]
  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll()
  const { ref: showcaseRef, isVisible: showcaseVisible } = useAnimateOnScroll()

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={cn(
            'mb-12 text-center transition-all duration-700',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">See it in action</p>
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">A cleaner Copilot history</h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-muted-foreground">
            Walk through the side panel step by step.
          </p>
        </div>

        <div
          ref={showcaseRef}
          className={cn(
            'grid items-center gap-8 rounded-3xl border border-border/80 p-6 transition-all duration-700 md:grid-cols-[minmax(0,320px)_1fr] md:p-10',
            showcaseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ background: 'oklch(0.12 0.05 255)' }}
        >
          <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-border/80 shadow-2xl shadow-black/40">
            {screenshots.map((shot, index) => (
              <div key={shot.id} className={cn(index === active ? 'block' : 'hidden')}>
                <Image
                  src={shot.url}
                  alt={`Side panel: ${shot.caption}`}
                  width={380}
                  height={940}
                  className="h-auto w-full"
                  sizes="320px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div aria-live="polite">
              <p className="text-xl font-semibold text-foreground">{current.caption}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {screenshots.map((shot, index) => (
                <button
                  key={shot.id}
                  onClick={() => setActive(index)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 hover:scale-105',
                    active === index
                      ? 'border-cyan bg-cyan/10 text-cyan'
                      : 'border-border bg-transparent text-muted-foreground'
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
