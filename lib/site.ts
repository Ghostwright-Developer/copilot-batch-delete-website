// One place for every link, name and number the site uses.
// To change a store link or the email, edit it here and nowhere else.

const CHROME_ID = 'ndhlafbieanmkgipgihhpgoelgnhmide'
const EDGE_ID = 'kjkcbijhicofiliemdhioojahfmdhnhk'
const EDGE_URL = `https://microsoftedge.microsoft.com/addons/detail/clearcut-chats-bulk-dele/${EDGE_ID}`

export const SITE = {
  name: 'Clearcut Chats',
  fullName: 'Clearcut Chats: Bulk Delete for AI Chats',
  tagline: 'Bulk delete AI chats in Copilot, ChatGPT and Claude',
  // Where this site is hosted. Set NEXT_PUBLIC_SITE_URL in Vercel if you use another address.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://clearcutchats.ghostwrightweb.com').replace(/\/$/, ''),
  email: 'owen@ghostwrightweb.com',
  version: '1.2.0',
  github: 'https://github.com/Cyberhawk-9/copilot-chat-deletion',
  chrome: {
    id: CHROME_ID,
    url: `https://chromewebstore.google.com/detail/${CHROME_ID}`,
    reviewUrl: `https://chromewebstore.google.com/detail/${CHROME_ID}/reviews`,
    shareUrl: `https://chromewebstore.google.com/detail/${CHROME_ID}?utm_source=item-share-cb`,
  },
  // Edge Add-ons listing (live). Override with NEXT_PUBLIC_EDGE_URL in Vercel if it ever changes.
  edge: {
    id: EDGE_ID,
    url: process.env.NEXT_PUBLIC_EDGE_URL ?? EDGE_URL,
    reviewUrl: process.env.NEXT_PUBLIC_EDGE_REVIEW_URL ?? process.env.NEXT_PUBLIC_EDGE_URL ?? EDGE_URL,
  },
  shareText:
    'I got tired of deleting AI chats one by one, so I use this free extension to bulk delete Copilot, ChatGPT and Claude chats.',
} as const

export const hasEdge = () => Boolean(SITE.edge.url)

export function mailto(subject = 'Clearcut Chats') {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`
}
