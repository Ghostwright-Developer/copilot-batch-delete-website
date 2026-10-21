import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/landing/footer'
import { SITE } from '@/lib/site'

// Shared frame for every sub page: slim header on top, the normal footer below.
export default function PageShell({
  children,
  width = 'max-w-3xl',
}: {
  children: React.ReactNode
  width?: string
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/icons/icon48.png" alt="" width={28} height={28} className="rounded-lg" />
            <span className="text-sm font-semibold text-foreground">{SITE.name}</span>
          </Link>
          <nav aria-label="Main" className="ml-auto flex items-center gap-5 text-sm text-muted-foreground">
            <Link href="/support" className="transition-colors hover:text-foreground">
              Support
            </Link>
            <Link href="/changelog" className="hidden transition-colors hover:text-foreground sm:inline">
              Changelog
            </Link>
            <Link href="/privacy" className="hidden transition-colors hover:text-foreground sm:inline">
              Privacy
            </Link>
            <a
              href="/go/install"
              className="rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-medium text-cyan transition-colors hover:bg-cyan/10"
            >
              Get the extension
            </a>
          </nav>
        </div>
      </header>
      <main className={`mx-auto ${width} px-6 py-14`}>{children}</main>
      <Footer />
    </div>
  )
}
