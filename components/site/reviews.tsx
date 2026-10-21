import { reviews } from '@/lib/reviews'

// Hidden until lib/reviews.ts has at least one real review.
export default function Reviews() {
  if (!reviews.length) return null
  return (
    <section id="reviews" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">Kind words</p>
          <h2 className="text-balance text-4xl font-bold text-foreground">What people say</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name + r.quote.slice(0, 16)} className="rounded-2xl border border-border bg-card p-6">
              <blockquote className="text-base leading-relaxed text-foreground">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{r.name}</span>
                {r.detail ? `, ${r.detail}` : ''}
                {r.source && (
                  <>
                    {' · '}
                    <a
                      href={r.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 transition-colors hover:text-foreground"
                    >
                      {r.source.label}
                    </a>
                  </>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
