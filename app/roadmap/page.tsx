import type { Metadata } from 'next'
import PageShell from '@/components/site/page-shell'
import { SITE, mailto } from '@/lib/site'
import { roadmap, statusLabels, type RoadmapStatus } from '@/lib/roadmap'

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'What is in Clearcut Chats now, what is coming, and how to vote on what I build next.',
  alternates: { canonical: '/roadmap' },
}

const order: RoadmapStatus[] = ['now', 'next', 'considering', 'later']

export default function Roadmap() {
  const hasForm = Boolean(SITE.feedbackForm)
  return (
    <PageShell width="max-w-4xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">Roadmap</p>
      <h1 className="text-4xl font-bold">What&apos;s next for Clearcut Chats</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        I&apos;m Owen, and I build this myself. Here is everything I&apos;m planning, including what I expect to stay free and what might become
        Pro. Bulk delete stays free. Nothing here is a promise, and your votes decide the order.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {hasForm && (
          <a
            href={SITE.feedbackForm}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[oklch(0.62_0.2_250)] to-[oklch(0.58_0.26_300)] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[oklch(0.5_0.25_295/0.45)] transition-transform hover:scale-105"
          >
            Vote or suggest an idea
          </a>
        )}
        <a
          href={mailto('Clearcut Chats: feature idea')}
          className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-cyan/60"
        >
          {hasForm ? 'Or email me' : 'Email me your idea'}
        </a>
      </div>

      {order.map((status) => {
        const items = roadmap.filter((i) => i.status === status)
        if (!items.length) return null
        const label = statusLabels[status]
        return (
          <section key={status} className="mt-12" aria-labelledby={`r-${status}`}>
            <h2 id={`r-${status}`} className="text-2xl font-bold">{label.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{label.blurb}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <article key={item.title} className="flex flex-col rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                        item.tier === 'pro' ? 'bg-[oklch(0.58_0.26_300/0.25)] text-foreground' : 'bg-cyan/15 text-cyan'
                      }`}
                    >
                      {item.tier === 'pro' ? 'Pro (planned)' : 'Free'}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                  {status !== 'now' && (
                    <a
                      href={`${mailto(`Clearcut Chats: I want ${item.title}`)}&body=${encodeURIComponent('I would use this. (Add anything else you want me to know.)')}`}
                      className="mt-4 self-start text-sm text-foreground underline underline-offset-4 hover:text-cyan"
                    >
                      I want this
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
        )
      })}
      <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
        The extension never sends your votes anywhere. Emails go to {SITE.email}, and the optional form is a Google Form.
      </p>
    </PageShell>
  )
}
