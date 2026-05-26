'use client'

import PageShell from '@/components/ui/PageShell'
import PageHero from '@/components/ui/PageHero'
import Timeline from '@/components/sections/Timeline'

export default function TimelinePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our History"
        lines={['A history that', "didn't end"]}
        accentLine="in 1948."
        description="From the Canaanites to the present day — explore the key moments that shaped Palestine and its people."
        image="/images/timeline-hero.svg"
      />
      <Timeline />
    </PageShell>
  )
}
