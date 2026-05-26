/**
 * Global TypeScript Types for Palistory
 */

// Story & Content Types
export interface Story {
  id: number
  title: string
  subtitle: string
  excerpt: string
  content?: string
  author: string
  date?: Date
  readTime: string
  audioDuration?: string
  quote: string
  tags: string[]
  image?: string
  videoUrl?: string
}

export interface StoryCategory {
  id: number
  title: string
  description: string
  color: string
  icon: string
  stories?: Story[]
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  color: string
  details: string[]
  image?: string
  significance?: string
}

// Donation Types
export interface DonationTier {
  id: number
  title: string
  amount: string
  description: string
  benefits: string[]
  icon: string
  featured?: boolean
  stripeProductId?: string
}

export interface Donation {
  id: string
  amount: number
  currency: string
  tier?: string
  email: string
  name: string
  date: Date
  status: 'pending' | 'completed' | 'failed'
  transactionId?: string
}

// Navigation Types
export interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
  submenu?: NavItem[]
}

// User Types
export interface User {
  id: string
  email: string
  name: string
  subscribed?: boolean
  subscribedAt?: Date
  role: 'user' | 'admin'
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// Animation Types
export interface AnimationVariants {
  initial: Record<string, any>
  animate: Record<string, any>
  exit?: Record<string, any>
  transition?: Record<string, any>
}

export interface ScrollTriggerConfig {
  trigger: string
  start?: string
  end?: string
  markers?: boolean
  onEnter?: () => void
  onLeave?: () => void
}

// Component Props Types
export interface BaseComponentProps {
  className?: string
  id?: string
  style?: React.CSSProperties
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export interface CardProps extends BaseComponentProps {
  title?: string
  description?: string
  image?: string
  children?: React.ReactNode
}

// Form Types
export interface FormData {
  [key: string]: any
}

export interface FormError {
  field: string
  message: string
}

export interface FormState {
  isSubmitting: boolean
  errors: FormError[]
  values: FormData
}

// Analytics Types
export interface PageView {
  path: string
  timestamp: Date
  referrer?: string
  userAgent: string
}

export interface Event {
  name: string
  properties?: Record<string, any>
  timestamp?: Date
}

// Settings Types
export interface SiteSettings {
  siteName: string
  siteUrl: string
  siteDescription: string
  contactEmail: string
  socialLinks: Record<string, string>
  theme?: {
    primaryColor: string
    secondaryColor: string
    accentColor: string
  }
}

// Filter & Sort Types
export interface FilterOption {
  label: string
  value: string
  count?: number
}

export interface SortOption {
  label: string
  value: string
  order: 'asc' | 'desc'
}

// Search Types
export interface SearchResult<T> {
  item: T
  score: number
  snippet?: string
}

export interface SearchQuery {
  query: string
  filters?: Record<string, any>
  sort?: string
  page?: number
  limit?: number
}

// Blog/Article Types (for future CMS integration)
export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  updatedAt?: Date
  featured?: boolean
  image?: string
  tags: string[]
  category?: string
}

// Video Types
export interface Video {
  id: string
  title: string
  description: string
  url: string
  thumbnail: string
  duration: number
  uploadedAt: Date
  views: number
}

// Image Types
export interface ImageAsset {
  id: string
  url: string
  alt: string
  width: number
  height: number
  size: number
  format: string
  uploadedAt: Date
}

// Archive Types (for historical records)
export interface ArchiveRecord {
  id: string
  title: string
  description: string
  date: Date
  type: 'photo' | 'video' | 'document' | 'audio'
  content: string
  metadata: Record<string, any>
  tags: string[]
}

// Subscription Types
export interface Subscription {
  id: string
  userId: string
  email: string
  subscribedAt: Date
  unsubscribedAt?: Date
  status: 'active' | 'inactive' | 'bounced'
  frequency: 'daily' | 'weekly' | 'monthly'
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: Date
  link?: string
}

// Error Types
export interface ErrorResponse {
  code: string
  message: string
  details?: Record<string, any>
  statusCode: number
}

// Utility Types
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Async<T> = Promise<T>
export type Constructor<T> = new (...args: any[]) => T

// Generic Types
export type Record<K extends string | number | symbol, T> = {
  [P in K]: T
}

export interface Paginate<T> {
  items: T[]
  total: number
}

// Status Types
export type Status = 'idle' | 'loading' | 'success' | 'error'

export interface WithStatus {
  status: Status
  error?: string | null
}
