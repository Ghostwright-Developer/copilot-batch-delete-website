'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const base = [
  ['Pin it', 'Click the puzzle-piece icon in your browser toolbar, then the pin beside the extension.'],
  null,
  ['Click the extension', 'A side panel opens and stays open until you close it. Press Load More for older chats, then Add Checkboxes.'],
  ['Select and delete', 'Tick chats, or Shift-click a range, then Delete Selected and confirm. Leave the chat tab alone while it runs.'],
] as const

const multi = ['Open a chat site', 'Go to Microsoft Copilot, ChatGPT or Claude and sign in as usual. Copilot works straight away. For ChatGPT or Claude, press Turn on in the panel and allow that one site. No refresh needed.']
const copilotOnly = ['Open Copilot', 'Go to Microsoft Copilot and sign in as usual. It works straight away, no refresh needed.']

function Steps() {
  const v = useSearchParams().get('v') ?? ''
  // 1.0.x and 1.1.x are Copilot-only; 1.2.0 and later add ChatGPT and Claude.
  const old = /^1\.[01]\./.test(v)
  const steps = base.map((s) => s ?? (old ? copilotOnly : multi))
  return (
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
  )
}

export default function WelcomeSteps() {
  return (
    <Suspense fallback={null}>
      <Steps />
    </Suspense>
  )
}
