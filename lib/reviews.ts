// Paste real reviews here. The "What people say" section appears on the home page
// as soon as this list has at least one entry, and stays hidden while it is empty.
// Only add reviews that are real and that you have permission to quote.

import { SITE } from './site'

export type Review = {
  quote: string
  stars?: number // 1-5, shown as stars above the quote
  name: string
  detail?: string // for example "Chrome Web Store review" or "IT admin"
  source?: { label: string; url: string }
}

const chromeReviews = { label: 'Chrome Web Store', url: SITE.chrome.reviewUrl }

export const reviews: Review[] = [
  {
    quote: 'Great tool, turned what would of been a few days of cleaning up old chats into about 15min - highly recommended!',
    stars: 5,
    name: 'Ian B.',
    detail: 'Nov 2026',
    source: chromeReviews,
  },
  {
    quote: 'This is a wonderful extension. It mass deleted almost 200 Copilot chats that I\u2019ve accumulated over many months. This is a keeper. It offers a clean and clear interface. I highly recommend it.',
    stars: 5,
    name: 'Mike S.',
    detail: 'Aug 2026',
    source: chromeReviews,
  },
  {
    quote: 'The update is a significant improvement, as the extension did not work properly before. Great work to the developers.',
    stars: 4,
    name: 'E. J.',
    detail: 'Oct 2026',
    source: chromeReviews,
  },
]
