import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — Copilot Delete Helper',
  description:
    'Copilot Delete Helper does not collect, transmit, or store any personal data. Read the full privacy policy.',
}

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <>
        <p>
          Copilot Delete Helper is a browser extension that helps users bulk
          delete Microsoft Copilot conversation history. This Privacy Policy
          describes how the extension handles your data — or more accurately,
          how it does not handle it at all.
        </p>
        <p>
          The short version: the extension collects nothing, sends nothing, and
          stores nothing outside of your browser.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p>
          <strong className="text-foreground">We do not collect any personal information.</strong>
        </p>
        <p>
          The extension does not collect, log, or retain:
        </p>
        <ul>
          <li>Your name, email address, or any account details</li>
          <li>Your Copilot chats, prompts, or conversation content</li>
          <li>Browsing history or activity outside the Copilot page</li>
          <li>Device identifiers, IP addresses, or location data</li>
          <li>Any analytics, usage, or telemetry data</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-it-works',
    title: 'How The Extension Works',
    content: (
      <>
        <p>
          Copilot Delete Helper operates entirely within your browser, on
          Microsoft Copilot pages and on the chat page of Microsoft 365 Copilot.
          When you use the extension, it:
        </p>
        <ul>
          <li>Injects checkboxes into the visible Copilot chat list in your browser</li>
          <li>
            Reads which conversations you have selected using local in-page
            JavaScript
          </li>
          <li>
            Simulates the same delete actions you would take manually, using
            the visible Copilot UI
          </li>
          <li>Shows progress and controls in your browser&apos;s side panel</li>
        </ul>
        <p>
          All of these actions happen locally in your browser. No data is read,
          transmitted, or processed by any external server or third-party service.
        </p>
      </>
    ),
  },
  {
    id: 'permissions',
    title: 'Permissions',
    content: (
      <>
        <p>
          The extension requests only the permissions required for it to function:
        </p>
        <ul>
          <li>
            <strong className="text-foreground">Access to Copilot sites</strong> — copilot.microsoft.com,
            copilot.com, www.copilot.com and copilot.cloud.microsoft, plus only the /chat pages on
            m365.cloud.microsoft, microsoft365.com, www.microsoft365.com and www.office.com. It never runs
            on Word, Outlook, Excel or any other Microsoft 365 app.
          </li>
          <li>
            <strong className="text-foreground">scripting</strong> — lets the extension start itself in
            Copilot tabs you already have open, so you do not need to refresh after installing or updating.
          </li>
          <li>
            <strong className="text-foreground">sidePanel</strong> — shows the controls in the browser side panel.
          </li>
          <li>
            <strong className="text-foreground">storage</strong> — saves your own settings (such as your speed
            mode) and a local counter of chats cleared, in your browser only.
          </li>
        </ul>
        <p>
          The extension does not request access to any other websites, your
          browsing history, stored passwords, or any other sensitive browser
          data.
        </p>
      </>
    ),
  },
  {
    id: 'local-storage',
    title: 'What Is Saved On Your Device',
    content: (
      <>
        <p>
          The extension keeps a few small settings in your browser&apos;s own extension storage: your chosen
          speed mode, how many chats you have cleared so far, and whether you dismissed the review reminder.
          This stays on your device and is never sent anywhere. Removing the extension deletes it.
        </p>
      </>
    ),
  },
  {
    id: 'website-pages',
    title: 'Pages The Extension Opens',
    content: (
      <>
        <p>
          After you install the extension, and after a major update, it opens a welcome or what&apos;s-new page
          on this website. The address includes only the extension version number (for example <code>?v=1.1.0</code>)
          and whether it was an install or an update. No personal information is included, and this site does
          not use cookies, analytics or tracking.
        </p>
        <p>
          The extension&apos;s share and review buttons open the Chrome Web Store or Edge Add-ons, which have
          their own privacy policies.
        </p>
      </>
    ),
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing',
    content: (
      <>
        <p>
          We do not share any data with any third party because we do not
          collect any data to begin with.
        </p>
        <p>
          There are no advertising partners, analytics vendors, data brokers, or
          any other entities that receive information from this extension.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    content: (
      <>
        <p>
          Copilot Delete Helper does not integrate with any third-party services,
          APIs, or backends. It does not use:
        </p>
        <ul>
          <li>Analytics platforms (e.g. Google Analytics, Mixpanel)</li>
          <li>Crash reporting services (e.g. Sentry, Bugsnag)</li>
          <li>Remote configuration or feature-flag services</li>
          <li>Any Microsoft or Copilot private APIs</li>
        </ul>
        <p>
          The extension only communicates with the visible Copilot web page
          running in your browser, and with its own side panel.
        </p>
        <p>
          Copilot Delete Helper is not affiliated with, endorsed by, or
          connected to Microsoft Corporation in any way.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes To This Policy',
    content: (
      <>
        <p>
          If this policy is updated, the new version will be published at this
          URL with a revised effective date. Continued use of the extension
          following any changes constitutes acceptance of the updated policy.
        </p>
        <p>
          Because the extension collects no data, any changes to this policy are
          unlikely to affect how your information is handled — there is none to
          handle.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <>
        <p>
          If you have questions about this privacy policy or the extension, email{' '}
          <a href="mailto:owen@ghostwrightweb.com" className="text-cyan underline-offset-4 hover:underline">owen@ghostwrightweb.com</a>.
        </p>
        <p>
          This extension is an independent project and is not affiliated with
          Microsoft.
        </p>
      </>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Image
              src="/icons/icon32.png"
              alt="Copilot Delete Helper icon"
              width={20}
              height={20}
              className="rounded"
            />
            <span className="text-xs text-muted-foreground">Copilot Delete Helper</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Page header */}
        <div className="mb-12 border-b border-border/60 pb-10">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--cyan)' }}
          >
            Legal
          </p>
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            <strong className="text-foreground">Product:</strong> Copilot Delete Helper
            &nbsp;&bull;&nbsp;
            <strong className="text-foreground">Effective date:</strong>{' '}
            October 21, 2026
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Copilot Delete Helper is built with privacy as a core design
            principle. This document explains exactly how the extension works
            and confirms that it collects no personal data.
          </p>
        </div>

        {/* Table of contents */}
        <nav
          className="mb-12 rounded-2xl border border-border/60 p-6"
          style={{ background: 'var(--card)' }}
          aria-label="Table of contents"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Contents
          </p>
          <ol className="space-y-2">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span
                    className="text-xs font-mono"
                    style={{ color: 'var(--cyan)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`heading-${section.id}`}>
              <h2
                id={`heading-${section.id}`}
                className="mb-5 text-xl font-bold text-foreground"
              >
                {section.title}
              </h2>
              <div
                className="space-y-4 text-sm leading-relaxed text-muted-foreground [&_ul]:space-y-2 [&_ul]:list-none [&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-2 [&_ul_li]:before:content-['—'] [&_ul_li]:before:text-border [&_ul_li]:before:flex-shrink-0 [&_strong]:font-medium"
              >
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-16 rounded-2xl border border-border/60 p-6 text-center"
          style={{ background: 'var(--card)' }}
        >
          <p className="text-sm text-muted-foreground">
            Questions?{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Open an issue on GitHub
            </a>
            .
          </p>
          <p className="mt-2 text-xs text-muted-foreground/50">
            Not affiliated with Microsoft.
          </p>
        </div>
      </main>
    </div>
  )
}
