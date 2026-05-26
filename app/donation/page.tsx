'use client'

import PageShell from '@/components/ui/PageShell'
import PageHero from '@/components/ui/PageHero'
import Donation from '@/components/sections/Donation'

export default function DonationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Your Support"
        lines={['Preserve today.']}
        accentLine="Inspire tomorrow."
        description="Every contribution helps us document a story, digitise an archive, or record a voice before it's lost."
        image="/images/donation-hero.svg"
      />
      <Donation />
    </PageShell>
  )
}
