// Newest first. The what's-new page shows the first entry, the changelog page shows all of them.
// Keep this in step with the extension's Docs/CHANGELOG.md.

export type Release = {
  version: string
  date: string
  title: string
  summary: string
  groups: { heading: string; items: string[] }[]
}

export const releases: Release[] = [
  {
    version: '1.1.0',
    date: 'October 21, 2026',
    title: 'Always ready, and a panel that stays open',
    summary:
      'Version 1.1.0 works the moment you install it, runs on Microsoft 365 Copilot Chat too, and swaps the popup for a side panel that stays open.',
    groups: [
      {
        heading: 'Always ready',
        items: [
          'Works right after install or update. You no longer need to refresh Copilot first.',
          'Works on Microsoft Copilot and on the chat page of Microsoft 365 Copilot.',
          'Keeps up when Copilot moves between pages without reloading.',
        ],
      },
      {
        heading: 'A side panel that stays open',
        items: [
          'The popup is now a side panel. It stays open until you close it, even when you click elsewhere or switch tabs.',
          'Live progress, a Stop button that works at any moment, and delete confirmation inside the panel.',
          'Your speed mode is remembered.',
        ],
      },
      {
        heading: 'More reliable deleting',
        items: [
          'Load More now scrolls down and loads your full history.',
          'A chat only counts as deleted once it has really left the list. Anything Copilot refuses to delete is flagged so you can retry it.',
          'New chats get checkboxes automatically as Copilot loads them.',
        ],
      },
      {
        heading: 'Fewer permissions',
        items: [
          'No more "read your browsing history" warning. The extension runs only on Copilot pages.',
        ],
      },
    ],
  },
  {
    version: '1.0.0',
    date: 'May 8, 2026',
    title: 'First release',
    summary: 'Checkboxes beside your Copilot chats, and a fast way to delete the ones you select.',
    groups: [
      {
        heading: 'What it did',
        items: [
          'Checkboxes beside loaded chats, with shift-click ranges.',
          'Fast, Balanced and Safe deletion modes, automatic retries, Retry Failed and Stop.',
          'A live progress overlay and a Load More helper.',
        ],
      },
    ],
  },
]

export const latest = releases[0]
