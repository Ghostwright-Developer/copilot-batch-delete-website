import type { Metadata } from 'next'
import PageShell from '@/components/site/page-shell'
import ShareCard from '@/components/site/share-card'
import WelcomeSteps from '@/components/site/welcome-steps'
import Reviews from '@/components/site/reviews'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Welcome',
  description: 'You\'re all set. Here is how to use Clearcut Chats.',
  robots: { index: false, follow: false },
}

export default function Welcome() {
  return (
    <PageShell>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">Installed</p>
      <h1 className="text-balance text-4xl font-bold">You&apos;re all set. Thanks for installing.</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Clearcut Chats is ready. Here is the quick way to use it.
      </p>
      <WelcomeSteps />
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
