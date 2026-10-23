import { SITE } from './site'

export type StoreStats = {
  users: number | null
  usersLabel: string | null
  rating: number | null
  ratingCount: number | null
  version: string | null
}

const EMPTY: StoreStats = { users: null, usersLabel: null, rating: null, ratingCount: null, version: null }

function toNumber(raw: string): number | null {
  const m = raw.trim().replace(/,/g, '').match(/^(\d+(?:\.\d+)?)([kKmM]?)\+?$/)
  if (!m) return null
  const n = parseFloat(m[1])
  const mult = m[2].toLowerCase() === 'k' ? 1_000 : m[2].toLowerCase() === 'm' ? 1_000_000 : 1
  return Math.round(n * mult)
}

// Pulls what it can out of the public Chrome Web Store page. Every field is optional,
// and anything that doesn't look right is dropped, so a layout change on Google's side
// just hides the numbers instead of breaking the page.
export function parseListing(html: string): StoreStats {
  const out: StoreStats = { ...EMPTY }

  // 1) Structured data, if the page includes it
  for (const block of html.match(/<script[^>]*application\/ld\+json[^>]*>[\s\S]*?<\/script>/gi) ?? []) {
    try {
      const json = JSON.parse(block.replace(/<\/?script[^>]*>/gi, ''))
      const items = Array.isArray(json) ? json : [json]
      for (const item of items) {
        const agg = item?.aggregateRating
        if (agg) {
          const r = Number(agg.ratingValue)
          const c = Number(agg.ratingCount ?? agg.reviewCount)
          if (r >= 1 && r <= 5) out.rating = r
          if (Number.isFinite(c) && c > 0) out.ratingCount = c
        }
        const uic = item?.interactionStatistic?.userInteractionCount ?? item?.userInteractionCount
        if (uic != null && Number.isFinite(Number(uic))) out.users = Number(uic)
        if (typeof item?.softwareVersion === 'string') out.version = item.softwareVersion
      }
    } catch {
      /* not JSON we understand */
    }
  }

  // 2) Visible text
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')

  if (out.users == null) {
    const m = text.match(/(\d[\d,.]*\s?[kKmM]?\+?)\s+users?\b/)
    if (m) out.users = toNumber(m[1].replace(/\s/g, ''))
  }
  if (out.rating == null) {
    const m = text.match(/\b([1-5](?:\.\d)?)\s*(?:out of 5|stars?)?\s*\(?\s*(\d[\d,.]*\s?[kK]?)\s+ratings?\)?/i)
    if (m) {
      out.rating = parseFloat(m[1])
      out.ratingCount = toNumber(m[2].replace(/\s/g, ''))
    }
  }
  if (out.version == null) {
    const m = text.match(/Version\s+(\d+\.\d+\.\d+)/i)
    if (m) out.version = m[1]
  }

  if (out.users != null) {
    out.usersLabel =
      out.users >= 1_000_000
        ? `${(out.users / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
        : out.users >= 10_000
          ? `${Math.round(out.users / 1000)}K`
          : out.users >= 1_000
            ? `${(out.users / 1000).toFixed(1).replace(/\.0$/, '')}K`
            : String(out.users)
  }
  return out
}

// Cached for six hours by Next.js. Returns empty stats on any failure.
export async function getStoreStats(): Promise<StoreStats> {
  try {
    const res = await fetch(SITE.chrome.url, {
      next: { revalidate: 21600 },
      headers: {
        'user-agent': `Mozilla/5.0 (compatible; ClearcutChatsSite/${SITE.version}; +${SITE.url})`,
        'accept-language': 'en-US,en;q=0.9',
      },
      signal: AbortSignal.timeout(7000),
    })
    if (!res.ok) return EMPTY
    return parseListing(await res.text())
  } catch {
    return EMPTY
  }
}

// What the page is willing to show: real numbers only, and only once they say something.
export function displayable(s: StoreStats) {
  return {
    users: s.users != null && s.users >= 100 ? s.usersLabel : null,
    rating: s.rating != null && s.ratingCount != null && s.ratingCount >= 5 ? s.rating.toFixed(1) : null,
    ratingCount: s.ratingCount,
  }
}
