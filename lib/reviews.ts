// Paste real reviews here. The "What people say" section appears on the home page
// as soon as this list has at least one entry, and stays hidden while it is empty.
// Only add reviews that are real and that you have permission to quote.

export type Review = {
  quote: string
  name: string
  detail?: string // for example "Chrome Web Store review" or "IT admin"
  source?: { label: string; url: string }
}

export const reviews: Review[] = [
  // {
  //   quote: 'Paste the review text here.',
  //   name: 'Reviewer name',
  //   detail: 'Chrome Web Store review',
  //   source: { label: 'Read it on the Chrome Web Store', url: 'https://chromewebstore.google.com/detail/ndhlafbieanmkgipgihhpgoelgnhmide/reviews' },
  // },
]
