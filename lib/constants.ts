export const SITE_NAME = 'Palistory'
export const SITE_DESCRIPTION = 'Documenting. Preserving. Remembering.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://palistory.com'

// Color Palette
export const COLORS = {
  primary: '#0B0B0B',     // Deep black
  secondary: '#E8DDCF',   // Sand beige
  accent: '#C62828',      // Palestinian red
  accent2: '#4B5D3A',     // Olive green
  accent3: '#C8A96B',     // Warm gold
  text: '#FAFAFA',        // Soft white
  darkGray: '#1A1A1A',
  charcoal: '#2A2A2A',
}

// Animation Timings
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 1.5,
}

// Breakpoints
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
  ultraWide: 1536,
}

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Stories', href: '#stories' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Topics', href: '#topics' },
  { label: 'Media', href: '#media' },
  { label: 'About', href: '#about' },
]

// Social Links
export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com/palistory' },
  { name: 'Twitter', url: 'https://twitter.com/palistory' },
  { name: 'Instagram', url: 'https://instagram.com/palistory' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/palistory' },
]

// Contact Information
export const CONTACT_INFO = {
  email: 'hello@palistory.com',
  phone: '+1 (555) 123-4567',
  address: 'Global - With offices worldwide',
}

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: ANIMATION_DURATION.normal },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: ANIMATION_DURATION.normal },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: ANIMATION_DURATION.normal },
  },
  slideLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: ANIMATION_DURATION.normal },
  },
  slideRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: ANIMATION_DURATION.normal },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: ANIMATION_DURATION.normal },
  },
}

// Story Categories
export const STORY_CATEGORIES = [
  {
    id: 1,
    title: 'Life Before 1948',
    description: 'Stories from the pre-displacement era',
    color: 'from-palistory-red/20 to-palistory-gold/10',
    icon: '🏘️',
  },
  {
    id: 2,
    title: 'Traditional Crafts',
    description: 'Preserving ancestral skills and heritage',
    color: 'from-palistory-olive/20 to-palistory-gold/10',
    icon: '🎨',
  },
  {
    id: 3,
    title: 'Stories Passed Down',
    description: 'Intergenerational narratives',
    color: 'from-palistory-gold/20 to-palistory-beige/10',
    icon: '📖',
  },
  {
    id: 4,
    title: 'Everyday Life',
    description: 'Daily resilience and community',
    color: 'from-palistory-red/20 to-palistory-olive/10',
    icon: '👥',
  },
  {
    id: 5,
    title: 'Resistance & Survival',
    description: 'Stories of struggle and hope',
    color: 'from-palistory-olive/20 to-palistory-red/10',
    icon: '🕊️',
  },
  {
    id: 6,
    title: 'Food & Culture',
    description: 'Culinary traditions and identity',
    color: 'from-palistory-gold/20 to-palistory-red/10',
    icon: '🍽️',
  },
]

// Featured Stories (example data)
export const FEATURED_STORIES = [
  {
    id: 1,
    title: 'The Refugee Kitchen',
    subtitle: 'Preserving Culinary Heritage',
    excerpt: 'How Palestinian families have kept their culinary traditions alive across generations and borders.',
    quote: '"Food is memory, and memory is resistance."',
    author: 'Um Fatima',
    readTime: '8 min read',
    audioDuration: '12 min',
    tags: ['Culture', 'Food', 'Heritage'],
  },
  {
    id: 2,
    title: 'Voices of Return',
    subtitle: 'Stories of Displacement and Hope',
    excerpt: 'Personal narratives from those who fled and those who remained, bridging the geographical divide.',
    quote: '"Home is not just a place, it\'s the people we remember together."',
    author: 'Ahmed Ibrahim',
    readTime: '12 min read',
    audioDuration: '15 min',
    tags: ['History', 'Memory', 'Community'],
  },
  {
    id: 3,
    title: 'Artisans of Tomorrow',
    subtitle: 'Youth Reclaiming Traditional Crafts',
    excerpt: 'Meet the young Palestinians reviving ancient handicrafts and transforming them for the modern world.',
    quote: '"Our hands carry the history of our people."',
    author: 'Layla Mansour',
    readTime: '10 min read',
    audioDuration: '13 min',
    tags: ['Youth', 'Crafts', 'Innovation'],
  },
]

// Donation Tiers
export const DONATION_TIERS = [
  {
    id: 1,
    title: 'Friend',
    amount: '$5',
    description: 'Support our digital archive',
    benefits: [
      'Access to exclusive content',
      'Monthly newsletter',
      'Recognition in supporters list',
    ],
    icon: '🤝',
  },
  {
    id: 2,
    title: 'Preserver',
    amount: '$25',
    description: 'Help preserve stories',
    benefits: [
      'All Friend benefits',
      'Quarterly impact reports',
      'Exclusive webinar access',
      'Special badge on platform',
    ],
    icon: '📚',
    featured: true,
  },
  {
    id: 3,
    title: 'Custodian',
    amount: '$100',
    description: 'Become a legacy builder',
    benefits: [
      'All Preserver benefits',
      'Annual gala invitation',
      'Personalized thank you video',
      'Legacy recognition',
      'Direct impact reports',
    ],
    icon: '👑',
  },
]
