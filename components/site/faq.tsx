import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SITE } from '@/lib/site'

export const faqs: { q: string; a: React.ReactNode; text: string }[] = [
  {
    q: 'Is it free? What does it cost?',
    text: 'It is free. There are no accounts, subscriptions or ads.',
    a: 'It is free. There are no accounts, subscriptions or ads.',
  },
  {
    q: 'Which Copilot does it work with?',
    text: 'Microsoft Copilot on copilot.microsoft.com and copilot.com, Copilot on copilot.cloud.microsoft, and the chat page of Microsoft 365 Copilot (m365.cloud.microsoft/chat). On shared Microsoft 365 sites it only runs on the chat page, never on Word, Outlook or other apps.',
    a: (
      <>
        Microsoft Copilot on copilot.microsoft.com and copilot.com, Copilot on copilot.cloud.microsoft, and the chat
        page of Microsoft 365 Copilot (m365.cloud.microsoft/chat). On shared Microsoft 365 sites it only runs on the
        chat page, never on Word, Outlook or your other apps.
      </>
    ),
  },
  {
    q: 'Do I need to refresh Copilot after installing?',
    text: 'No. Version 1.1.0 starts working in tabs you already have open. If the panel ever says it can\'t connect, press Try again in the panel.',
    a: "No. Version 1.1.0 starts working in tabs you already have open. If the panel ever says it can't connect, press Try again in the panel.",
  },
  {
    q: 'Why can I only select some of my chats?',
    text: 'Copilot only loads part of your history into the page at a time, and the extension can only select what is loaded. Press Load More in the panel and it scrolls the list for you until everything is loaded.',
    a: 'Copilot only loads part of your history into the page at a time, and the extension can only select what is loaded. Press Load More in the panel and it scrolls the list for you until everything is loaded.',
  },
  {
    q: 'Can I get deleted chats back?',
    text: 'No. Copilot deletes them for good, which is why the panel asks you to confirm first. Use Stop at any time to end a run.',
    a: 'No. Copilot deletes them for good, which is why the panel asks you to confirm first. Use Stop at any time to end a run.',
  },
  {
    q: 'What does it see or send?',
    text: 'Nothing leaves your browser. There are no servers, analytics or tracking. It reads the visible chat list only to put checkboxes next to your chats and click Copilot\'s own delete buttons.',
    a: (
      <>
        Nothing leaves your browser. There are no servers, analytics or tracking. It reads the visible chat list only
        to put checkboxes next to your chats and click Copilot&apos;s own delete buttons. The{' '}
        <a href="/privacy" className="underline underline-offset-4">
          privacy policy
        </a>{' '}
        has the details.
      </>
    ),
  },
  {
    q: 'A chat shows as Failed. What now?',
    text: 'Copilot sometimes refuses a delete or is slow to respond. Press Retry Failed, or switch to Safe mode, which waits longer between steps.',
    a: 'Copilot sometimes refuses a delete or is slow to respond. Press Retry Failed, or switch to Safe mode, which waits longer between steps.',
  },
  {
    q: 'It stopped working after Copilot changed.',
    text: 'The extension works through Copilot\'s own buttons, so a big redesign can break it. Email the support address with what you see and it will be fixed in an update.',
    a: (
      <>
        The extension works through Copilot&apos;s own buttons, so a big redesign can break it. Email{' '}
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
        <AccordionItem key={f.q} value={`q${i}`} className="border-border/60">
          <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
