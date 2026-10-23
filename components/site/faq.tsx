import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SITE } from '@/lib/site'

export const faqs: { q: string; a: React.ReactNode; text: string }[] = [
  {
    q: 'Is it free? What does it cost?',
    text: 'It is free. There are no accounts, subscriptions or ads.',
    a: 'It is free. There are no accounts, subscriptions or ads.',
  },
  {
    q: 'Which sites does it work with?',
    text: 'Microsoft Copilot (copilot.microsoft.com, copilot.com, copilot.cloud.microsoft and the chat page of Microsoft 365 Copilot), ChatGPT (chatgpt.com) and Claude (claude.ai). Copilot works right after install. ChatGPT and Claude are optional: you turn each one on from the side panel and your browser asks permission for just that site.',
    a: (
      <>
        Microsoft Copilot (copilot.microsoft.com, copilot.com, copilot.cloud.microsoft and the chat page of Microsoft 365
        Copilot), ChatGPT (chatgpt.com) and Claude (claude.ai). Copilot works right after install. ChatGPT and Claude are
        optional: you turn each one on from the side panel and your browser asks permission for just that site.
      </>
    ),
  },
  {
    q: 'Why does it ask permission for ChatGPT and Claude?',
    text: 'So it can only see the sites you choose. Until you press Turn on in the panel, it cannot see those pages at all. You can turn a site off again from the same panel.',
    a: 'So it can only see the sites you choose. Until you press Turn on in the panel, it cannot see those pages at all. You can turn a site off again from the same panel.',
  },
  {
    q: 'Do I need to refresh the page after installing?',
    text: 'No. It starts working in tabs you already have open. If the panel ever says it can\'t connect, press Try again in the panel.',
    a: "No. It starts working in tabs you already have open. If the panel ever says it can't connect, press Try again in the panel.",
  },
  {
    q: 'Why can I only select some of my chats?',
    text: 'These sites only load part of your history into the page at a time, and the extension can only select what is loaded. Press Load more in the panel and it scrolls the list for you until everything is loaded. Very long histories can take a few minutes.',
    a: 'These sites only load part of your history into the page at a time, and the extension can only select what is loaded. Press Load more in the panel and it scrolls the list for you until everything is loaded. Very long histories can take a few minutes.',
  },
  {
    q: 'Can I get deleted chats back?',
    text: 'No. The sites delete them for good, which is why the panel asks you to confirm first. Use Stop at any time to end a run.',
    a: 'No. The sites delete them for good, which is why the panel asks you to confirm first. Use Stop at any time to end a run.',
  },
  {
    q: 'What does it see or send?',
    text: 'Nothing leaves your browser. There are no servers, analytics or tracking. It reads the visible chat list only to put checkboxes next to your chats and click each site\'s own delete buttons.',
    a: (
      <>
        Nothing leaves your browser. There are no servers, analytics or tracking. It reads the visible chat list only
        to put checkboxes next to your chats and click each site&apos;s own delete buttons. The{' '}
        <a href="/privacy" className="underline underline-offset-4">
          privacy policy
        </a>{' '}
        has the details.
      </>
    ),
  },
  {
    q: 'A chat shows as Failed. What now?',
    text: 'A site sometimes refuses a delete or is slow to respond. Press Retry Failed, or switch to Safe mode, which waits longer between steps.',
    a: 'A site sometimes refuses a delete or is slow to respond. Press Retry Failed, or switch to Safe mode, which waits longer between steps.',
  },
  {
    q: 'It stopped working after a site changed.',
    text: 'The extension works through each site\'s own buttons, so a big redesign can break it. Email the support address with what you see and it will be fixed in an update.',
    a: (
      <>
        The extension works through each site&apos;s own buttons, so a big redesign can break it. Email{' '}
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">
          {SITE.email}
        </a>{' '}
        with what you see and it will be fixed in an update.
      </>
    ),
  },
]

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((f, i) => (
        <AccordionItem key={f.q} value={`q${i}`} className="border-white/10">
          <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
