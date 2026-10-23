'use client'

import { ShieldCheck, EyeOff, Wifi, UserX, Code2, BarChart2 } from 'lucide-react'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'

const bullets = [
  { icon: BarChart2, label: 'No telemetry' },
  { icon: EyeOff, label: 'No analytics' },
  { icon: Wifi, label: 'No external servers' },
  { icon: UserX, label: 'No account access' },
  { icon: Code2, label: 'No hidden or private APIs' },
  { icon: ShieldCheck, label: 'Only the sites you allow, and only /chat on Microsoft 365' },
]

export default function PrivacySection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useAnimateOnScroll()

  return (
    <section
      id="privacy"
      className="relative overflow-hidden px-6 py-24"
    >
      {/* Animated glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-1000"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.63 0.22 293 / 0.06) 0%, transparent 70%)',
          opacity: sectionVisible ? 1 : 0,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div
          ref={sectionRef}
          className={cn(
            'group overflow-hidden rounded-3xl border border-border/80 transition-all duration-700',
            'hover:shadow-2xl hover:shadow-purple/10 hover:scale-[1.01]',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{
            background:
              'linear-gradient(160deg, oklch(1 0 0 / 0.08), oklch(1 0 0 / 0.025))',
          }}
        >
          {/* Glow on hover */}
          <div
            className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: 'oklch(0.63 0.22 293 / 0.1)' }}
            aria-hidden="true"
          />
          
          <div className="relative grid gap-12 p-10 md:grid-cols-2 md:p-16">
            {/* Left: copy */}
            <div className="flex flex-col justify-center gap-6">
              {/* Badge */}
              <div
                className={cn(
                  'inline-flex w-fit items-center gap-2 rounded-full border border-purple/30 bg-purple/5 px-4 py-1.5 transition-all duration-500',
                  sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                )}
                style={{ transitionDelay: '150ms' }}
              >
                <ShieldCheck
                  className="h-3.5 w-3.5 animate-pulse"
                  style={{ color: 'var(--purple)', animationDuration: '2s' }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--purple)' }}
                >
                  Privacy First
                </span>
              </div>

              <h2
                className={cn(
                  'text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl transition-all duration-700',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                style={{ transitionDelay: '250ms' }}
              >
                Stays entirely in{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, oklch(0.63 0.22 293), oklch(0.79 0.14 202))',
                  }}
                >
                  your browser
                </span>
              </h2>

              <p
                className={cn(
                  'text-base leading-relaxed text-muted-foreground transition-all duration-700',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                style={{ transitionDelay: '350ms' }}
              >
                Clearcut Chats runs locally in your browser. It does not
                collect, transmit, sell, or store your conversations or personal
                data. The only things it saves are your own settings, on your own device.
              </p>

              <a
                href="/privacy"
                className={cn(
                  'inline-flex w-fit items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                style={{ color: 'var(--cyan)', transitionDelay: '450ms' }}
              >
                Read the full privacy policy
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>

            {/* Right: checklist */}
            <div className="flex flex-col justify-center">
              <ul className="space-y-4" aria-label="Privacy guarantees">
                {bullets.map((bullet, index) => {
                  const Icon = bullet.icon
                  return (
                    <li
                      key={bullet.label}
                      className={cn(
                        'group/item flex items-center gap-4 transition-all duration-500 hover:translate-x-1',
                        sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      )}
                      style={{ transitionDelay: `${200 + index * 80}ms` }}
                    >
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover/item:scale-110"
                        style={{ background: 'oklch(0.63 0.22 293 / 0.10)' }}
                      >
                        <Icon
                          className="h-4 w-4 transition-transform duration-300 group-hover/item:rotate-12"
                          style={{ color: 'var(--purple)' }}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {bullet.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
