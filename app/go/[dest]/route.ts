import { NextRequest, NextResponse } from 'next/server'
import { SITE, hasEdge } from '@/lib/site'

// Short, permanent links you can use anywhere (social posts, emails, QR codes, the extension):
//   /go/install  /go/review  /go/share  /go/chrome  /go/edge
// They send people to the right store, so you can change store URLs here without
// touching anything that already links to them.

export function GET(req: NextRequest, { params }: { params: Promise<{ dest: string }> }) {
  return params.then(({ dest }) => {
    const ua = req.headers.get('user-agent') ?? ''
    const onEdge = /\bEdg\//.test(ua)
    const home = new URL('/', SITE.url)

    let target: string | null = null
    switch (dest) {
      case 'install':
        target = onEdge && hasEdge() ? SITE.edge.url : SITE.chrome.url
        break
      case 'review':
        target = onEdge && hasEdge() ? SITE.edge.reviewUrl : SITE.chrome.reviewUrl
        break
      case 'share':
        target = SITE.chrome.shareUrl
        break
      case 'chrome':
        target = SITE.chrome.url
        break
      case 'edge':
        target = hasEdge() ? SITE.edge.url : null
        break
    }

    const res = NextResponse.redirect(target ?? home, 302)
    res.headers.set('cache-control', 'private, max-age=0, must-revalidate')
    return res
  })
}
