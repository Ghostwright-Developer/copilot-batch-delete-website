import type { Metadata } from 'next'
import PageShell from '@/components/site/page-shell'
import { SITE, mailto } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Sorry to see you go',
  description: 'Tell me what went wrong with Clearcut Chats.',
  robots: { index: false, follow: false },
}

const reasons = [
  { label: "It didn't work on my site", subject: "Clearcut Chats: didn't work on my site", body: 'Which site and address were you on (Copilot, ChatGPT or Claude)? What did the side panel say?' },
  { label: "I couldn't see or find my chats", subject: "Clearcut Chats: couldn't find my chats", body: 'Which site were you on? Was the Chats list in the sidebar expanded?' },
  { label: "I only needed it once", subject: 'Clearcut Chats: only needed it once', body: 'No problem at all. Thanks for trying it.' },
  { label: 'Something else', subject: 'Clearcut Chats: feedback', body: 'What would have made it better?' },
]

export default function Uninstalled() {
  return (
    <PageShell>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">Clearcut Chats</p>
      <h1 className="text-4xl font-bold">Sorry to see you go.</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        The extension has been removed and nothing is left behind. If you have a minute, tell me what went wrong. I read every message and I fix
        what I can. This page does not track you, and nothing is sent unless you choose to email.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {reasons.map((r) => (
          <a
            key={r.label}
            href={`${mailto(r.subject)}&body=${encodeURIComponent(r.body)}`}
            className="rounded-2xl border border-border bg-card p-5 text-sm font-medium text-foreground transition-colors hover:border-cyan/60"
          >
            {r.label}
          </a>
        ))}
      </div>
      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
        Removed it by accident? You can add it back any time from the{' '}
        <a href="/go/install?src=uninstalled" className="text-foreground underline underline-offset-4 hover:text-cyan">
          store
        </a>
        . Emails go to {SITE.email}.
      </p>
    </PageShell>
  )
}
