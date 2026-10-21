'use client'

import {
  Trash2,
  CheckSquare,
  MousePointerClick,
  Gauge,
  RefreshCw,
  Activity,
  HardDrive,
  ShieldCheck,
} from 'lucide-react'
import { useAnimateOnScroll } from '@/hooks/use-animate-on-scroll'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Trash2,
    title: 'Bulk Delete Chats',
    description:
      'Select and remove dozens or hundreds of Copilot conversations at once instead of deleting them one by one.',
    accent: 'cyan',
  },
  {
    icon: CheckSquare,
    title: 'Side Panel That Stays Open',
    description:
      'The controls live in your browser\'s side panel and stay open while you work. Checkboxes appear right on your chat list.',
    accent: 'purple',
  },
  {
    icon: MousePointerClick,
    title: 'Shift-Click Range Selection',
    description:
      'Hold Shift and click to select a range of conversations instantly — no need to check each one.',
    accent: 'cyan',
  },
  {
    icon: Gauge,
    title: 'Works Right Away',
    description:
      'No page refresh after installing or updating. Open the panel on Copilot and it connects on its own.',
    accent: 'purple',
  },
  {
    icon: RefreshCw,
    title: 'Verified Deletions',
    description:
      'A chat only counts as deleted once it has actually left your list. Anything Copilot refuses is reported and can be retried.',
    accent: 'cyan',
  },
  {
    icon: Activity,
    title: 'Copilot & Microsoft 365',
    description:
      'Works on Microsoft Copilot and on the Microsoft 365 Copilot Chat page, and only on the chat pages.',
    accent: 'purple',
  },
  {
    icon: HardDrive,
    title: 'Local-Only Operation',
    description:
      'Everything runs in your browser. Your chats never go anywhere, and there is no account.',
    accent: 'cyan',
  },
  {
    icon: ShieldCheck,
    title: 'Minimal Permissions',
    description:
      'Only three permissions, and access is limited to Copilot sites. On Microsoft 365 hosts it is limited to the /chat pages.',
    accent: 'purple',
  },
]

export default function Features() {
  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll()
  const { ref: gridRef, isVisible: gridVisible } = useAnimateOnScroll()

  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          ref={headerRef}
          className={cn(
            'mb-16 text-center transition-all duration-700',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">
            What it does
          </p>
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Everything you need to clean up faster
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-muted-foreground">
            Built for people who use Copilot every day and want to take
            control of their conversation history.
          </p>
        </div>

        {/* Feature grid */}
        <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isCyan = feature.accent === 'cyan'
            const glowColor = isCyan 
              ? 'oklch(0.79 0.14 202 / 0.15)' 
              : 'oklch(0.63 0.22 293 / 0.15)'
            const borderHoverColor = isCyan ? 'var(--cyan)' : 'var(--purple)'
            
            return (
              <div
                key={feature.title}
                className={cn(
                  'group relative rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-out',
                  'hover:scale-[1.03] hover:border-opacity-60',
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{
                  background: 'var(--card)',
                  transitionDelay: gridVisible ? `${index * 75}ms` : '0ms',
                  ['--glow-color' as string]: glowColor,
                  ['--border-hover' as string]: borderHoverColor,
                }}
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
                  {/* Icon container */}
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-xl p-2.5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: isCyan
                        ? 'oklch(0.79 0.14 202 / 0.10)'
                        : 'oklch(0.63 0.22 293 / 0.10)',
                    }}
                  >
                    <Icon
                      className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6"
                      style={{
                        color: isCyan ? 'var(--cyan)' : 'var(--purple)',
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {feature.description}
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
