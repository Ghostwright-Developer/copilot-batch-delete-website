'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'

export default function FinalCTA({ actions }: { actions: ReactNode }) {
  const { ref: sectionRef, isVisible: sectionVisible } = useAnimateOnScroll()

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div
          ref={sectionRef}
          className={cn(
            'group relative overflow-hidden rounded-3xl border border-border/60 px-8 py-16 text-center md:px-16 transition-all duration-700',
            'hover:shadow-2xl hover:shadow-cyan/10 hover:scale-[1.01]',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{
            background:
              'linear-gradient(135deg, oklch(0.24 0.14 275 / 0.85) 0%, oklch(0.18 0.1 300 / 0.85) 100%)',
          }}
        >
          {/* Animated glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.79 0.14 202 / 0.08) 0%, transparent 70%)',
              animation: 'glow-drift 4s ease-in-out infinite',
            }}
          />
          
          {/* Hover glow */}
          <div
            className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: 'oklch(0.79 0.14 202 / 0.08)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div
              className={cn(
                'transition-all duration-700',
                sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              )}
              style={{ transitionDelay: '150ms' }}
            >
              <Image
                src="/icons/icon128.png"
                alt="Clearcut Chats"
                width={64}
                height={64}
                className="rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110 hover:rotate-3"
              />
            </div>

            <div
              className={cn(
                'transition-all duration-700',
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '300ms' }}
            >
              <h2 className="text-balance text-4xl font-bold text-white md:text-5xl">
                Clear your chats. Keep your privacy.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-muted-foreground">
                Free, private, and built for anyone with a long list of AI chats
                they&apos;d rather not click through one by one.
              </p>
            </div>

            <div
              className={cn(
                'flex flex-wrap items-center justify-center gap-4 transition-all duration-700',
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '450ms' }}
            >
              {actions}
            </div>

            <p
              className={cn(
                'text-xs text-muted-foreground transition-all duration-700',
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              )}
              style={{ transitionDelay: '600ms' }}
            >
              No account required. No data collected.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow-drift {
          0%, 100% { opacity: 0.8; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-5px); }
        }
      `}</style>
    </section>
  )
}
