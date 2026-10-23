import type { Metadata } from 'next'
import PageShell from '@/components/site/page-shell'
import ShareCard from '@/components/site/share-card'
import Reviews from '@/components/site/reviews'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Welcome',
  description: 'You\'re all set. Here is how to use Clearcut Chats.',
  robots: { index: false, follow: false },
}

const steps = [
  ['Pin it', 'Click the puzzle-piece icon in your browser toolbar, then the pin beside Clearcut Chats.'],
  ['Open a chat site', 'Go to Microsoft Copilot, ChatGPT or Claude and sign in as usual. Copilot works straight away. For ChatGPT or Claude, press Turn on in the panel and allow that one site. No refresh needed.'],
  ['Click the extension', 'A side panel opens and stays open until you close it. Press Load More for older chats, then Add Checkboxes.'],
  ['Select and delete', 'Tick chats, or Shift-click a range, then Delete Selected and confirm. Leave the chat tab alone while it runs.'],
]

export default function Welcome() {
  return (
    <PageShell>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">Installed</p>
      <h1 className="text-balance text-4xl font-bold">You&apos;re all set. Thanks for installing.</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Clearcut Chats is ready. Here is the quick way to use it.
      </p>
      <ol className="mt-10 space-y-4">
        {steps.map(([t, d], i) => (
          <li key={t} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan/10 text-sm font-semibold text-cyan">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold">{t}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-muted-foreground">
        It never sends your chats anywhere, and it only runs on the sites you allow. Stuck? Email{' '}
        <a className="text-cyan underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
      <div className="mt-12">
        <ShareCard />
      </div>
      <Reviews />
    </PageShell>
  )
}
