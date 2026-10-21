'use client'

import { Info } from 'lucide-react'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'

const notes = [
  {
    heading: 'Works with visible and loaded chats',
    body: 'The extension can only interact with conversations that have been loaded on-screen. Use Load More in the side panel to bring older chats into view before you run a bulk delete.',
    accent: 'cyan',
  },
  {
    heading: 'Keep the Copilot tab focused',
    body: 'Leave the Copilot tab alone while deletion runs. The side panel can stay open, but clicking around in Copilot can get in the way.',
    accent: 'purple',
  },
  {
    heading: 'UI changes may require updates',
    body: 'Since the extension works through the visible Copilot interface, changes to Copilot may occasionally need an extension update. If something stops working, email owen@ghostwrightweb.com.',
    accent: 'cyan',
  },
  {
    heading: 'Not affiliated with Microsoft',
    body: 'Copilot Delete Helper is an independent utility. It is not affiliated with, endorsed by, or connected to Microsoft in any way.',
    accent: 'purple',
  },
]

export default function ImportantNotes() {
  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll()
  const { ref: gridRef, isVisible: gridVisible } = useAnimateOnScroll()

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            'mb-12 flex items-start gap-4 transition-all duration-700',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <div
            className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 hover:scale-110"
            style={{ background: 'oklch(0.79 0.14 202 / 0.10)' }}
          >
            <Info
              className="h-4 w-4"
              style={{ color: 'var(--cyan)' }}
              aria-hidden="true"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Good to know
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              A few things to be aware of before using the extension.
            </p>
          </div>
        </div>

        {/* Notes grid */}
        <div ref={gridRef} className="grid gap-4 sm:grid-cols-2">
          {notes.map((note, index) => {
            const isCyan = note.accent === 'cyan'
            const glowColor = isCyan 
              ? 'oklch(0.79 0.14 202 / 0.1)' 
              : 'oklch(0.63 0.22 293 / 0.1)'
            const borderHoverColor = isCyan ? 'var(--cyan)' : 'var(--purple)'
            
            return (
              <div
                key={note.heading}
                className={cn(
                  'group relative rounded-2xl border border-border/60 p-6 transition-all duration-500',
                  'hover:scale-[1.02]',
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ 
                  background: 'oklch(0.12 0.05 255 / 0.5)',
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: glowColor }}
                  aria-hidden="true"
                />
                {/* Border glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ 
                    boxShadow: `inset 0 0 0 1px ${borderHoverColor}40`,
                  }}
                  aria-hidden="true"
                />
                
                <div className="relative z-10">
                  <h3 className="mb-2 text-sm font-semibold text-foreground">
                    {note.heading}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {note.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
