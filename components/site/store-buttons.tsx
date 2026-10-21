import { SITE, hasEdge } from '@/lib/site'

// Install buttons. Chrome is always there. The Edge button appears once an Edge URL is set in lib/site.ts.
export default function StoreButtons({ source = 'site' }: { source?: string }) {
  const edge = hasEdge()
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={`/go/chrome?src=${source}`}
          className="rounded-xl px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan/20"
          style={{ background: 'linear-gradient(135deg, oklch(0.79 0.14 202), oklch(0.70 0.18 230))' }}
        >
          Add to Chrome — it&apos;s free
        </a>
        {edge && (
          <a
            href={`/go/edge?src=${source}`}
            className="rounded-xl border border-cyan/40 bg-cyan/5 px-8 py-3 text-sm font-semibold text-cyan transition-all duration-300 hover:scale-105 hover:bg-cyan/10"
          >
            Add to Edge
          </a>
        )}
      </div>
      <p className="text-xs text-muted-foreground">
        {edge
          ? 'Works in Chrome, Edge, Brave and other Chromium browsers.'
          : 'Works in Chrome, Brave and other Chromium browsers. The Edge Add-ons listing is on its way. Edge users can install from the Chrome Web Store today.'}
      </p>
    </div>
  )
}
