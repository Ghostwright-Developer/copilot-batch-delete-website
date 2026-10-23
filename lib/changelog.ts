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
    version: '1.2.0',
    date: 'October 22, 2026',
    title: 'Now Clearcut Chats: Copilot, ChatGPT and Claude',
    summary:
      'Version 1.2.0 is a new name and a bigger extension. The same fast, private bulk delete now works on ChatGPT and Claude as well as Microsoft Copilot.',
    groups: [
      {
        heading: 'New: ChatGPT and Claude',
        items: [
          'Bulk delete now works on ChatGPT (chatgpt.com) and Claude (claude.ai), with the same checkboxes, Stop button and verified deletes.',
          'On Claude it works on the Chats page (claude.ai/chats) and in the sidebar.',
          'ChatGPT and Claude are optional. They stay off until you press Turn on in the side panel, and your browser asks permission for just that site. You can turn a site off again from the same panel.',
          'Updating from 1.1.0 does not ask for new permissions or switch the extension off.',
        ],
      },
      {
        heading: 'A new name and icon',
        items: [
          'Copilot Chat Batch Delete Helper is now Clearcut Chats, with a new icon. Same extension, same settings.',
        ],
      },
      {
        heading: 'Loads long histories',
        items: [
          'Load more now keeps scrolling for as long as new chats keep arriving, so very long histories load completely. You can press Stop at any time.',
        ],
      },
      {
        heading: 'Fixes',
        items: [
          'Retry Failed no longer counts the same stubborn chat twice in the Failed total.',
          'Checkboxes sit above sites that make the whole chat row clickable.',
        ],
      },
    ],
  },
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
