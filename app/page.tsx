'use client'

import PageShell from '@/components/ui/PageShell'
import Hero from '@/components/sections/Hero'
import MissionSection from '@/components/sections/MissionSection'
import GetInvolved from '@/components/sections/GetInvolved'
import StoryTellers from '@/components/sections/StoryTellers'
import FAQSection from '@/components/sections/FAQSection'
import TeamSection from '@/components/sections/TeamSection'
import PreserveCTA from '@/components/home/PreserveCTA'

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <div id="about">
        <MissionSection />
      </div>
      <div id="getinvolved">
        <GetInvolved />
      </div>
      <div id="storytellers">
        <StoryTellers />
      </div>
      <FAQSection />
      <div id="team">
        <TeamSection />
      </div>
      <PreserveCTA />
    </PageShell>
  )
}
