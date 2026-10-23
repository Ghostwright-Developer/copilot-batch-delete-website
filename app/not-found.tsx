import Link from 'next/link'
import PageShell from '@/components/site/page-shell'

export default function NotFound() {
  return (
    <PageShell>
      <div className="py-24 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">404</p>
        <h1 className="text-balance text-4xl font-bold text-foreground">That page isn&apos;t here</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The link may be old or mistyped. The home page has everything about Clearcut Chats.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl px-8 py-3 text-sm font-semibold text-primary-foreground"
          style={{ background: 'linear-gradient(135deg, oklch(0.79 0.14 202), oklch(0.70 0.18 230))' }}
        >
          Back to home
        </Link>
      </div>
    </PageShell>
  )
}
