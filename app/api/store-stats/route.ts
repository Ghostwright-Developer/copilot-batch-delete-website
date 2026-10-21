import { NextResponse } from 'next/server'
import { getStoreStats, displayable } from '@/lib/store-stats'

// A quick way to check what the site pulled from the Chrome Web Store:
// open /api/store-stats. "raw" is what was parsed, "shown" is what the page displays.
export const revalidate = 21600

export async function GET() {
  const raw = await getStoreStats()
  return NextResponse.json({ raw, shown: displayable(raw) })
}
