import { reviews, type Review } from '@/lib/reviews'

// Hidden until lib/reviews.ts has at least one real review.
// Fewer than RING_MIN reviews: plain cards in a grid.
// RING_MIN or more: the cards sit on a slowly turning ring (right to left, wrapping around the back).
const RING_MIN = 5
const CARD_W = 320
const CARD_H = 250
const GAP = 36

function Attribution({ r }: { r: Review }) {
  return (
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
  )
}

function Stars({ n }: { n?: number }) {
  if (!n) return null
  return (
    <p className="mb-2 text-sm tracking-widest text-cyan" aria-label={`${n} out of 5 stars`}>
      {'★'.repeat(n)}
      <span className="text-muted-foreground">{'★'.repeat(5 - n)}</span>
    </p>
  )
}

function Cta() {
  return (
    <p className="mt-10 text-center text-sm text-muted-foreground">
      Clearcut Chats saved you time?{' '}
      <a href="/go/review?src=reviews" className="font-medium text-foreground underline underline-offset-4 hover:text-cyan">
        A short review in the store
      </a>{' '}
      helps other people find it.
    </p>
  )
}

export default function Reviews() {
  if (!reviews.length) return null
  const n = reviews.length
  const ring = n >= RING_MIN
  const radius = Math.round((CARD_W + GAP) / 2 / Math.tan(Math.PI / n))

  return (
    <section id="reviews" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">Kind words</p>
          <h2 className="text-balance text-4xl font-bold text-foreground">What people say</h2>
        </div>

        {ring ? (
          <>
            {/* Reduced-motion visitors and screen readers get the plain list below instead of the moving ring. */}
            <div className="review-ring-stage" aria-hidden="true">
              <div
                className="review-ring"
                style={{ ['--n' as string]: n, ['--r' as string]: `${radius}px`, ['--cw' as string]: `${CARD_W}px`, ['--ch' as string]: `${CARD_H}px`, ['--dur' as string]: `${Math.max(40, n * 9)}s` }}
              >
                {reviews.map((r, i) => (
                  <div key={r.name + i} className="review-ring-card" style={{ ['--i' as string]: i }}>
                    <figure className="review-face review-front">
                      <Stars n={r.stars} />
                      <blockquote className="line-clamp-6 text-base leading-relaxed text-foreground">&ldquo;{r.quote}&rdquo;</blockquote>
                      <Attribution r={r} />
                    </figure>
                    <div className="review-face review-back" />
                  </div>
                ))}
              </div>
            </div>
            <div className="review-ring-fallback grid gap-4 md:grid-cols-2">
              {reviews.map((r, i) => (
                <figure key={r.name + i} className="rounded-2xl border border-border bg-card p-6">
                  <Stars n={r.stars} />
                <blockquote className="text-base leading-relaxed text-foreground">&ldquo;{r.quote}&rdquo;</blockquote>
                  <Attribution r={r} />
                </figure>
              ))}
            </div>
          </>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map((r, i) => (
              <figure key={r.name + i} className="rounded-2xl border border-border bg-card p-6">
                <Stars n={r.stars} />
                <blockquote className="text-base leading-relaxed text-foreground">&ldquo;{r.quote}&rdquo;</blockquote>
                <Attribution r={r} />
              </figure>
            ))}
          </div>
        )}
        <Cta />
      </div>
    </section>
  )
}
