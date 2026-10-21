import type { Metadata } from 'next'
import PageShell from '@/components/site/page-shell'
import ShareCard from '@/components/site/share-card'
import { latest } from '@/lib/changelog'

export const metadata: Metadata = {
  title: "What's new",
  description: 'What changed in the latest version of Copilot Delete Helper.',
  robots: { index: false, follow: false },
}

export default function WhatsNew() {
  return (
    <PageShell>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">Updated to {latest.version}</p>
      <h1 className="text-balance text-4xl font-bold">{latest.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{latest.summary}</p>
      <div className="mt-10 space-y-8">
        {latest.groups.map((g) => (
          <section key={g.heading}>
            <h2 className="text-lg font-semibold">{g.heading}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="mt-12">
        <ShareCard />
      </div>
    </PageShell>
  )
}
