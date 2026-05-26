'use client'

import PageShell from '@/components/ui/PageShell'
import PageHero from '@/components/ui/PageHero'
import StoryCategories from '@/components/sections/StoryCategories'
import FeaturedStories from '@/components/sections/FeaturedStories'

export default function StoriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Stories from Palestine"
        lines={['Real stories.', 'Real people.']}
        accentLine="Real memory."
        description="Voices, families, and everyday lives — documented and preserved so they live on for generations."
        image="/images/stories-hero.svg"
      />
      <StoryCategories />
      <FeaturedStories />
    </PageShell>
  )
}
