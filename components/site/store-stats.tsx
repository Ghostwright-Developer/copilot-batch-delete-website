import { getStoreStats, displayable } from '@/lib/store-stats'

// "149 users · 5.0 rating", pulled from the Chrome Web Store listing and cached for six hours.
// Renders nothing until the numbers are big enough to mean something.
export default async function StoreStatsPill() {
  const shown = displayable(await getStoreStats())
  if (!shown.users && !shown.rating) return null
  return (
    <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
      {shown.users && (
        <span>
          <strong className="font-semibold text-foreground">{shown.users}</strong> people use it
        </span>
      )}
      {shown.rating && (
        <span>
          <strong className="font-semibold text-foreground">{shown.rating}</strong> average rating on the Chrome Web Store
        </span>
      )}
    </p>
  )
}
