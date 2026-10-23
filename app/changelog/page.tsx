import type { Metadata } from 'next'
import PageShell from '@/components/site/page-shell'
import { releases } from '@/lib/changelog'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Every release of Clearcut Chats and what changed.',
  alternates: { canonical: '/changelog' },
}

export default function Changelog() {
  return (
    <PageShell>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">Changelog</p>
      <h1 className="text-4xl font-bold">What&apos;s changed</h1>
      <div className="mt-10 space-y-12">
        {releases.map((r) => (
          <article key={r.version} id={`v${r.version}`} className="border-t border-border/60 pt-8">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Version {r.version}</span> · {r.date}
            </p>
            <h2 className="mt-1 text-2xl font-bold">{r.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
            {r.groups.map((g) => (
              <div key={g.heading} className="mt-5">
                <h3 className="text-sm font-semibold">{g.heading}</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </div>
    </PageShell>
  )
}
