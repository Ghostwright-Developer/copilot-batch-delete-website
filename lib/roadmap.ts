// The public roadmap. Edit this list to add, move or reword an item.
// Free / Pro labels are plans, not promises: they can change after people vote.

export type RoadmapStatus = 'now' | 'next' | 'considering' | 'later'
export type RoadmapItem = {
  title: string
  note: string
  status: RoadmapStatus
  tier: 'free' | 'pro'
}

export const statusLabels: Record<RoadmapStatus, { title: string; blurb: string }> = {
  now: { title: 'Available now', blurb: 'In the extension today.' },
  next: { title: 'Up next', blurb: 'The things I plan to build first.' },
  considering: { title: 'Considering', blurb: 'Interesting, and waiting to see how many of you want them.' },
  later: { title: 'Later', blurb: 'On the list, not close yet.' },
}

export const roadmap: RoadmapItem[] = [
  { status: 'now', tier: 'free', title: 'Bulk delete on Copilot, ChatGPT and Claude', note: 'Tick chats or Shift-click a range, then delete. Verified deletes, a Stop button, and no data leaves your browser.' },
  { status: 'now', tier: 'free', title: 'Load your whole history', note: 'Scrolls the list for you so very long histories load completely.' },

  { status: 'next', tier: 'free', title: 'Panel in more languages', note: 'Portuguese (Brazil) first, then German, Spanish, French, Dutch and Italian.' },
  { status: 'next', tier: 'free', title: 'Protected chats', note: 'Pin chats you never want deleted, so a big cleanup can never touch them.' },
  { status: 'next', tier: 'free', title: 'Dry run', note: 'See exactly which chats a run would delete before anything is removed.' },
  { status: 'next', tier: 'free', title: 'Google Gemini (personal accounts)', note: 'Workspace accounts cannot delete chats, so this would cover personal Google accounts.' },

  { status: 'considering', tier: 'pro', title: 'Smart filters', note: 'Select by age ("older than 30 days"), by words in the title, or by site.' },
  { status: 'considering', tier: 'pro', title: 'Export before you delete', note: 'Save a copy of your chats to a file, then clear them.' },
  { status: 'considering', tier: 'free', title: 'Chrome AI Mode', note: 'Clearing the chat history that stacks up there too.' },
  { status: 'considering', tier: 'free', title: 'More AI sites', note: 'Perplexity, Grok, DeepSeek, Le Chat and others. Tell me which ones you use.' },

  { status: 'later', tier: 'pro', title: 'Scheduled clean-ups', note: 'A weekly or monthly sweep of old chats, with a summary of what was removed.' },
  { status: 'later', tier: 'pro', title: 'Saved cleanup rules', note: 'Keep a set of filters and run them with one click.' },
]
