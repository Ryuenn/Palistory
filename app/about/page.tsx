'use client'

import PageShell from '@/components/ui/PageShell'
import PageHero from '@/components/ui/PageHero'
import MissionSection from '@/components/sections/MissionSection'

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Mission"
        lines={['We document.', 'We preserve.']}
        accentLine="We remember."
        description="Palistory is a community-led archive working to make Palestinian history visible, accessible, and enduring."
        image="/images/about-hero.svg"
      />
      <MissionSection />
    </PageShell>
  )
}
