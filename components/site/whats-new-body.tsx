'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ShareCard from '@/components/site/share-card'
import { releases, latest } from '@/lib/changelog'

function Body() {
  const v = useSearchParams().get('v')
  // Show the notes for the version the user actually updated to; fall back to the newest.
  const r = releases.find((x) => x.version === v) ?? latest
  return (
    <>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">Updated to {r.version}</p>
      <h1 className="text-balance text-4xl font-bold">{r.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{r.summary}</p>
      <div className="mt-10 space-y-8">
        {r.groups.map((g) => (
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
    </>
  )
}

export default function WhatsNewBody() {
  return (
    <Suspense fallback={null}>
      <Body />
    </Suspense>
  )
}
