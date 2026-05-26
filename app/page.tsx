'use client'

import PageShell from '@/components/ui/PageShell'
import Hero from '@/components/sections/Hero'
import StoriesPreview from '@/components/home/StoriesPreview'
import HistoryPreview from '@/components/home/HistoryPreview'
import PreserveCTA from '@/components/home/PreserveCTA'

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <StoriesPreview />
      <HistoryPreview />
      <PreserveCTA />
    </PageShell>
  )
}
