import type { Metadata } from 'next'
import PageShell from '@/components/site/page-shell'
import WhatsNewBody from '@/components/site/whats-new-body'

export const metadata: Metadata = {
  title: "What's new",
  description: 'What changed in the latest version of Clearcut Chats.',
  robots: { index: false, follow: false },
}

export default function WhatsNew() {
  return (
    <PageShell>
      <WhatsNewBody />
    </PageShell>
  )
}
