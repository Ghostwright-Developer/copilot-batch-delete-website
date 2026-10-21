'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'

export default function Hero({ actions, stats }: { actions: ReactNode; stats?: ReactNode }) {
  const { ref: iconRef, isVisible: iconVisible } = useAnimateOnScroll()
  const { ref: badgeRef, isVisible: badgeVisible } = useAnimateOnScroll()
  const { ref: headlineRef, isVisible: headlineVisible } = useAnimateOnScroll()
  const { ref: subRef, isVisible: subVisible } = useAnimateOnScroll()
  const { ref: ctaRef, isVisible: ctaVisible } = useAnimateOnScroll()
  const { ref: trustRef, isVisible: trustVisible } = useAnimateOnScroll()

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 text-center">
      {/* Animated background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 animate-pulse"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.20 0.09 255 / 0.5) 0%, transparent 70%)',
          animationDuration: '4s',
        }}
      />
      {/* Floating cyan glow under icon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
        style={{ 
          background: 'oklch(0.79 0.14 202 / 0.08)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Icon with bounce animation */}
        <div
          ref={iconRef}
          className={cn(
            'relative transition-all duration-1000 ease-out',
            iconVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
          )}
        >
          <div
            className="absolute inset-0 -m-4 rounded-3xl blur-2xl transition-all duration-500"
            aria-hidden="true"
            style={{ 
              background: 'oklch(0.79 0.14 202 / 0.12)',
              animation: iconVisible ? 'glow-pulse 3s ease-in-out infinite' : 'none',
            }}
          />
          <Image
            src="/icons/icon128.png"
            alt="Copilot Delete Helper"
            width={100}
            height={100}
            className="relative rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>

        {/* Badge */}
        <div
          ref={badgeRef}
          className={cn(
            'flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 transition-all duration-700',
            badgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: '150ms' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          <span className="text-xs font-medium text-cyan tracking-wide uppercase">
            Browser Extension
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className={cn(
            'max-w-3xl text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl transition-all duration-700',
            headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionDelay: '300ms' }}
        >
          Bulk Delete{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, oklch(0.79 0.14 202), oklch(0.63 0.22 293))',
            }}
          >
            Microsoft Copilot
          </span>{' '}
          Chats
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className={cn(
            'max-w-xl text-balance text-lg leading-relaxed text-muted-foreground transition-all duration-700',
            subVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionDelay: '450ms' }}
        >
          Tick the chats you don&apos;t want and delete them in one go. Works with
          Microsoft Copilot and Microsoft 365 Copilot Chat, right from your
          browser&apos;s side panel. No account, no tracking, no servers.
        </p>

        {/* Buttons */}
        <div
          ref={ctaRef}
          className={cn(
            'flex flex-wrap items-center justify-center gap-4 transition-all duration-700',
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          {actions}
        </div>
        {stats}
        <Link href="/privacy" className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
          Read the privacy policy
        </Link>

        {/* Trust line */}
        <p
          ref={trustRef}
          className={cn(
            'flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground transition-all duration-700',
            trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: '750ms' }}
        >
          <span className="flex items-center gap-1.5">
            <span
              className="h-1 w-1 rounded-full animate-pulse"
              style={{ background: 'var(--cyan)' }}
              aria-hidden="true"
            />
            No tracking
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="h-1 w-1 rounded-full animate-pulse"
              style={{ background: 'var(--cyan)', animationDelay: '0.2s' }}
              aria-hidden="true"
            />
            No telemetry
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="h-1 w-1 rounded-full animate-pulse"
              style={{ background: 'var(--cyan)', animationDelay: '0.4s' }}
              aria-hidden="true"
            />
            No external servers
          </span>
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
      `}</style>
    </section>
  )
}
