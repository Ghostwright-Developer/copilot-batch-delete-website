import type { Metadata } from 'next'
import PageShell from '@/components/site/page-shell'
import Faq from '@/components/site/faq'
import { SITE, mailto } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help with Clearcut Chats: common questions and how to reach me.',
  alternates: { canonical: '/support' },
}

export default function Support() {
  return (
    <PageShell>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">Support</p>
      <h1 className="text-4xl font-bold">Need a hand?</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Most questions are answered below. If yours isn&apos;t, email me. I read every message.
      </p>
      <div className="mt-6 rounded-2xl border border-border bg-card p-5">
        <p className="text-sm font-semibold">Email</p>
        <a className="text-cyan underline-offset-4 hover:underline" href={mailto('Clearcut Chats support')}>
          {SITE.email}
        </a>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Helpful to include: your browser and version, which site (Copilot, ChatGPT or Claude) and address you were on, and what the side panel
          said. Please don&apos;t send chat contents.
        </p>
      </div>
      <h2 className="mb-2 mt-12 text-2xl font-bold">Common questions</h2>
      <Faq />
    </PageShell>
  )
}
