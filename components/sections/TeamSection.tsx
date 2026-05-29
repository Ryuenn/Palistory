'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const members = [
  {
    name: 'Ibrahim Awad',
    role: 'Chief Executive Officer',
    initials: 'IA',
    bio: "Founder and driving force behind Palistory's mission to reclaim and amplify Palestinian narratives.",
    gradient: 'from-palistory-red/70 via-palistory-charcoal to-palistory-black',
    featured: true,
    social: { fb: '#', ig: '#' },
    photo: null,
  },
  {
    name: 'Team Member',
    role: 'Position',
    initials: 'TM',
    bio: 'Dedicated to fostering understanding and empathy through the power of storytelling.',
    gradient: 'from-palistory-olive/60 via-palistory-charcoal to-palistory-black',
    featured: false,
    social: {},
    photo: null,
  },
  {
    name: 'Team Member',
    role: 'Position',
    initials: 'TM',
    bio: 'Committed to preserving Palestinian culture and amplifying diaspora voices globally.',
    gradient: 'from-palistory-gold/50 via-palistory-charcoal to-palistory-black',
    featured: false,
    social: {},
    photo: null,
  },
  {
    name: 'Team Member',
    role: 'Position',
    initials: 'TM',
    bio: 'Passionate about connecting communities through documentary and narrative filmmaking.',
    gradient: 'from-palistory-red/40 via-palistory-charcoal to-palistory-black',
    featured: false,
    social: {},
    photo: null,
  },
  {
    name: 'Team Member',
    role: 'Position',
    initials: 'TM',
    bio: 'Supporting the next generation of Palestinian storytellers through education and mentorship.',
    gradient: 'from-palistory-olive/50 via-palistory-charcoal to-palistory-black',
    featured: false,
    social: {},
    photo: null,
  },
]

function MemberCard({ member, index }: { member: (typeof members)[number]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
    >
      {/* Portrait */}
      <div className="relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">

        {/* Background gradient — replace with <img> when photos are available */}
        <div className={`absolute inset-0 bg-gradient-to-b ${member.gradient}`} />

        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
          }}
        />

        {/* Initials centred (shown when no photo) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-palistory-white/20 select-none">
            {member.initials}
          </span>
        </div>

        {/* CEO badge for featured member — only on hover */}
        {member.featured && (
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.22 }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-palistory-gold/80 text-xs uppercase tracking-widest">
                    CEO
                  </span>
                  <div className="px-5 py-1.5 bg-gradient-to-r from-palistory-red to-orange-600 rounded-full">
                    <span className="text-palistory-white text-sm font-bold whitespace-nowrap">{member.name}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Hover overlay with bio */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-palistory-black/75 backdrop-blur-sm flex flex-col items-center justify-center p-5 text-center gap-3"
            >
              <p className="text-palistory-beige/80 text-sm leading-relaxed">{member.bio}</p>

              {/* Social links */}
              {(member.social.fb || member.social.ig) && (
                <div className="flex gap-3 mt-1">
                  {member.social.fb && (
                    <a
                      href={member.social.fb}
                      className="w-8 h-8 rounded-full bg-palistory-white/10 hover:bg-palistory-white/20 flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={14} className="text-palistory-white" />
                    </a>
                  )}
                  {member.social.ig && (
                    <a
                      href={member.social.ig}
                      className="w-8 h-8 rounded-full bg-palistory-white/10 hover:bg-palistory-white/20 flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={14} className="text-palistory-white" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>


        {/* Hover glow ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent"
          animate={{ borderColor: hovered ? 'rgba(200,169,107,0.4)' : 'transparent' }}
          transition={{ duration: 0.25 }}
        />
      </div>

      {/* Name + role below card */}
      <div className="mt-4 text-center">
        <motion.h4
          animate={{ color: hovered ? '#C8A96B' : '#FAFAFA' }}
          transition={{ duration: 0.25 }}
          className="text-lg font-bold"
        >
          {member.name}
        </motion.h4>
        <p className="text-sm text-palistory-beige/50 mt-0.5">{member.role}</p>
      </div>
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <section className="relative py-28 sm:py-40 bg-palistory-black overflow-hidden">
      {/* Soft radial spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full bg-palistory-gold/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section heading ──────────────────────────────────── */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="block text-palistory-red text-2xl tracking-wide mb-4"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Our Team Members
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-bold text-palistory-white mb-6"
          >
            Palistory Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-palistory-beige/60 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            At the heart of Palistory lies a passionate and dedicated team driven by a shared vision: to amplify Palestinian voices and preserve their rich cultural heritage through the power of storytelling.
          </motion.p>

          <motion.div
            className="mx-auto mt-6 h-[2px] w-16 bg-gradient-to-r from-transparent via-palistory-red to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>

        {/* ── Team grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {members.map((member, i) => (
            <MemberCard key={member.name + i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
