'use client'

import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    title: 'Open Copilot and click the extension',
    description:
      'Go to Microsoft Copilot or the Microsoft 365 Copilot chat page, then click the extension icon. The side panel opens and connects by itself, with no refresh. Use Load More to bring older chats into view.',
  },
  {
    number: '02',
    title: 'Select the conversations to delete',
    description:
      'Add checkboxes, then tick individual chats, hold Shift to select a range, or choose Select All Loaded. You stay in full control of what gets removed.',
  },
  {
    number: '03',
    title: 'Run deletion and let it work',
    description:
      'Confirm in the panel and the extension works through Copilot&apos;s own delete flow for each chat. Progress shows in the panel, and you can stop at any time.',
  },
]

export default function HowItWorks() {
  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll()
  const { ref: stepsRef, isVisible: stepsVisible } = useAnimateOnScroll()

  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            'mb-16 text-center transition-all duration-700',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">
            Simple by design
          </p>
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-muted-foreground">
            Three straightforward steps. No setup, no accounts, no configuration.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative grid gap-6 md:grid-cols-3">
          {/* Animated connector line (desktop only) */}
          <div
            aria-hidden="true"
            className={cn(
              'absolute top-12 left-1/6 right-1/6 hidden h-px md:block transition-all duration-1000',
              stepsVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            )}
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, oklch(0.79 0.14 202 / 0.3) 30%, oklch(0.79 0.14 202 / 0.3) 70%, transparent 100%)',
              transformOrigin: 'left',
              transitionDelay: '500ms',
            }}
          />

          {steps.map((step, index) => {
            const isCyan = index % 2 === 0
            const glowColor = isCyan 
              ? 'oklch(0.79 0.14 202 / 0.12)' 
              : 'oklch(0.63 0.22 293 / 0.12)'
            const borderHoverColor = isCyan ? 'var(--cyan)' : 'var(--purple)'
            
            return (
              <div
                key={step.number}
                className={cn(
                  'group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-500',
                  'hover:scale-[1.03]',
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Glow effect on hover */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
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
                  {/* Step number */}
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-sm font-bold transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: isCyan
                          ? 'oklch(0.79 0.14 202 / 0.10)'
                          : 'oklch(0.63 0.22 293 / 0.10)',
                        color: isCyan ? 'var(--cyan)' : 'var(--purple)',
                      }}
                      aria-label={`Step ${index + 1}`}
                    >
                      {step.number}
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
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
