import Nav from '@/components/landing/nav'
import Hero from '@/components/landing/hero'
import ScreenshotShowcase from '@/components/landing/screenshot-showcase'
import Features from '@/components/landing/features'
import PrivacySection from '@/components/landing/privacy-section'
import HowItWorks from '@/components/landing/how-it-works'
import ImportantNotes from '@/components/landing/important-notes'
import FinalCTA from '@/components/landing/final-cta'
import Footer from '@/components/landing/footer'
import StoreButtons from '@/components/site/store-buttons'
import StoreStatsPill from '@/components/site/store-stats'
import Reviews from '@/components/site/reviews'
import ShareCard from '@/components/site/share-card'
import Faq, { faqs } from '@/components/site/faq'

// The store numbers in the hero are refreshed from the Chrome Web Store every six hours.
export const revalidate = 21600

export default function Home() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.text },
    })),
  }
  return (
    <>
      <Nav />
      <main>
        <Hero actions={<StoreButtons source="hero" />} stats={<StoreStatsPill />} />
        <ScreenshotShowcase />
        <Features />
        <PrivacySection />
        <HowItWorks />
        <Reviews />
        <ImportantNotes />
        <section id="faq" className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan">FAQ</p>
              <h2 className="text-balance text-4xl font-bold text-foreground">Questions people ask</h2>
            </div>
            <Faq />
          </div>
        </section>
        <section className="px-6 pb-8">
          <div className="mx-auto max-w-3xl">
            <ShareCard />
          </div>
        </section>
        <FinalCTA actions={<StoreButtons source="footer-cta" />} />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  )
}
