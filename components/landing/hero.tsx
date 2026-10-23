'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Zap, ShieldCheck, MousePointerClick } from 'lucide-react'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'

const triad = [
  { icon: Zap, title: 'Fast Cleanup', text: 'Delete hundreds of chats, fast.', color: 'oklch(0.80 0.15 215)' },
  { icon: ShieldCheck, title: 'Privacy First', text: 'Your data stays on your device.', color: 'oklch(0.72 0.2 270)' },
  { icon: MousePointerClick, title: 'Easy to Use', text: 'Simple, powerful controls.', color: 'oklch(0.70 0.26 325)' },
]

const sites = [
  { name: 'Copilot', dot: 'oklch(0.75 0.17 230)' },
  { name: 'ChatGPT', dot: 'oklch(0.78 0.16 165)' },
  { name: 'Claude', dot: 'oklch(0.72 0.17 45)' },
]

export default function Hero({ actions, stats }: { actions: ReactNode; stats?: ReactNode }) {
  const { ref: leftRef, isVisible: leftVisible } = useAnimateOnScroll()
  const { ref: rightRef, isVisible: rightVisible } = useAnimateOnScroll()

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24 lg:pt-40">
      <div aria-hidden="true" className="grid-fade pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left */}
        <div
          ref={leftRef}
          className={cn(
            'flex flex-col items-center gap-7 text-center transition-all duration-1000 ease-out lg:items-start lg:text-left',
            leftVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div aria-hidden="true" className="absolute inset-0 -m-3 rounded-[2rem] bg-[oklch(0.55_0.25_290/0.55)] blur-2xl" />
              <Image src="/icons/icon128.png" alt="Clearcut Chats icon" width={84} height={84} priority className="ring-glow relative rounded-[1.4rem]" />
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              <span className="text-xs font-medium uppercase tracking-widest text-cyan">Free browser extension</span>
            </div>
          </div>

          <h1 className="text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
            Clearcut
            <br />
            <span className="text-gradient">Chats</span>
          </h1>

          <p className="max-w-xl text-balance text-xl leading-snug text-[oklch(0.82_0.04_270)]">
            Bulk delete your AI chats.{' '}
            <span className="font-semibold text-white">
              Hundreds of chats, <span className="text-gradient-soft">fast.</span>
            </span>
          </p>
          <p className="max-w-xl text-balance text-base leading-relaxed text-muted-foreground">
            Tick the chats you don&apos;t want and delete them in one go, right from your browser&apos;s side panel. Works with Microsoft Copilot,
            ChatGPT and Claude. No account, no tracking, no servers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {sites.map((s) => (
              <span key={s.name} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-foreground">
                <span className="h-2 w-2 rounded-full" style={{ background: s.dot, boxShadow: `0 0 10px ${s.dot}` }} aria-hidden="true" />
                {s.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">{actions}</div>
          {stats}
          <Link href="/privacy" className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            Read the privacy policy
          </Link>
        </div>

        {/* Right: tilted panel with depth */}
        <div
          ref={rightRef}
          className={cn(
            'relative mx-auto w-full max-w-md transition-all delay-200 duration-1000 ease-out',
            rightVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          )}
          style={{ perspective: '1800px' }}
        >
          <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-[oklch(0.5_0.26_295/0.35)] blur-3xl" />
          <div
            aria-hidden="true"
            className="absolute -right-10 top-10 hidden w-[78%] opacity-40 blur-[3px] sm:block"
            style={{ transform: 'rotateY(-22deg) rotateX(5deg) translateZ(-60px)' }}
          >
            <Image src="/screenshots/panel/done.png" alt="" width={760} height={1640} className="rounded-3xl border border-white/10" />
          </div>
          <div
            className="relative mx-auto w-[88%] animate-[float_7s_ease-in-out_infinite] sm:w-[84%]"
            style={{ transform: 'rotateY(-12deg) rotateX(3deg)', transformStyle: 'preserve-3d' }}
          >
            <Image
              src="/screenshots/panel/selected.png"
              alt="The Clearcut Chats side panel with ten chats selected"
              width={760}
              height={1640}
              priority
              className="rounded-3xl border border-white/15 shadow-[0_40px_90px_-20px_rgba(90,60,255,0.55)]"
            />
          </div>
        </div>

        {/* Triad */}
        <div className="grid gap-6 sm:grid-cols-3 lg:col-span-2">
          {triad.map((t) => {
            const Icon = t.icon
            return (
              <div key={t.title} className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="ring-glow flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full" style={{ borderColor: t.color }}>
                  <Icon className="h-5 w-5" style={{ color: t.color }} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -12px; }
        }
      `}</style>
    </section>
  )
}
