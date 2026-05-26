# Palistory - Development Tips & Best Practices

## Performance Optimization

### Image Optimization
```typescript
// ✅ Good - Uses Next.js optimization
import Image from 'next/image'

export default function ImageExample() {
  return (
    <Image
      src="/hero-image.jpg"
      alt="Hero"
      width={1920}
      height={1080}
      priority
      quality={80}
    />
  )
}

// ❌ Avoid - Standard img tag
<img src="/hero-image.jpg" alt="Hero" />
```

### Animation Performance
```typescript
// ✅ Good - GPU accelerated transform
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 0.3 }}
/>

// ❌ Avoid - Non-GPU properties
<motion.div
  animate={{ left: '100px' }}
  transition={{ duration: 0.3 }}
/>
```

### Component Code Splitting
```typescript
// ✅ Good - Lazy load heavy components
import dynamic from 'next/dynamic'

const ExpensiveComponent = dynamic(() => import('./ExpensiveComponent'), {
  loading: () => <Skeleton />,
})

// Use in page
<ExpensiveComponent />
```

## Tailwind CSS Tips

### Extend Without Overriding
```typescript
// tailwind.config.ts
extend: {
  colors: {
    'palistory': {
      'red': '#C62828',
      // ...
    }
  }
}

// Use in components
className="text-palistory-red"
```

### Create Reusable Utilities
```css
/* app/globals.css */
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-palistory-red text-white rounded-lg font-semibold hover:shadow-lg transition-all;
  }

  .card-glass {
    @apply glassmorphism rounded-xl border border-palistory-gold/20 p-6;
  }
}
```

## State Management

### Using React Hooks
```typescript
// ✅ Good - Local state
'use client'

import { useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Context for Shared State
```typescript
// context/ThemeContext.tsx
'use client'

import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

## Animation Best Practices

### Scroll Animations
```typescript
import { useScroll, useTransform } from 'framer-motion'

export function AnimatedSection() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return <motion.div style={{ opacity }}>Content</motion.div>
}
```

### Stagger Animation
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function StaggeredList({ items }) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {items.map(item => (
        <motion.div key={item.id} variants={itemVariants}>
          {item.name}
        </motion.div>
      ))}
    </motion.div>
  )
}
```

## TypeScript Best Practices

### Type Components
```typescript
interface StoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  onClick?: () => void
}

export default function StoryCard({
  title,
  description,
  icon,
  onClick
}: StoryCardProps) {
  return <div>{title}</div>
}
```

### Utility Types
```typescript
// Use generic types for reusability
interface ApiResponse<T> {
  data: T
  error: string | null
  loading: boolean
}

const response: ApiResponse<Story> = {
  data: story,
  error: null,
  loading: false
}
```

## SEO Optimization

### Metadata
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Palistory - Preserve Palestinian History',
  description: 'A digital archive preserving Palestinian culture and heritage',
  keywords: ['Palestinian', 'history', 'culture', 'archive'],
  openGraph: {
    type: 'website',
    url: 'https://palistory.com',
    title: 'Palistory',
    description: 'Preserving Palestinian memory',
  }
}
```

### Semantic HTML
```typescript
// ✅ Good - Semantic structure
<article className="story">
  <header>
    <h1>Story Title</h1>
    <time dateTime="2024-01-01">January 1, 2024</time>
  </header>
  <section>Story content</section>
  <footer>By Author</footer>
</article>

// ❌ Avoid - Non-semantic divs
<div className="story">
  <div>Story Title</div>
  <div>January 1, 2024</div>
  <div>Story content</div>
</div>
```

## Accessibility Tips

### ARIA Labels
```typescript
// ✅ Good - Descriptive labels
<button aria-label="Close menu" onClick={handleClose}>
  <X size={24} />
</button>

// ❌ Avoid - No label
<button onClick={handleClose}>
  <X size={24} />
</button>
```

### Color Contrast
```typescript
// Use utility for checking contrast
// Text should have minimum 4.5:1 contrast ratio
className="text-palistory-white bg-palistory-black" // Good: ~21:1

### Focus States
```css
/* app/globals.css */
button:focus-visible {
  outline: 2px solid #C8A96B;
  outline-offset: 2px;
}
```

## Testing

### Component Testing Example
```typescript
// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import Button from '@/components/Button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click</Button>)
    screen.getByText('Click').click()
    expect(onClick).toHaveBeenCalled()
  })
})
```

## Debugging Tips

### Browser DevTools
1. **F12** - Open DevTools
2. **Elements** - Inspect HTML structure
3. **Console** - Debug JavaScript
4. **Network** - Check API calls and asset loading
5. **Performance** - Analyze runtime performance

### React DevTools
- Install React DevTools browser extension
- View component tree and props
- Highlight re-renders
- Trace component updates

### VS Code Extensions
- ESLint - Code quality
- Prettier - Code formatting
- Tailwind CSS IntelliSense - CSS completion
- Thunder Client - API testing

## Common Mistakes to Avoid

### 1. Missing 'use client'
```typescript
// ❌ Error - Using useState without 'use client'
export default function Component() {
  const [count, setCount] = useState(0) // Error!
}

// ✅ Correct
'use client'
export default function Component() {
  const [count, setCount] = useState(0)
}
```

### 2. Inline Anonymous Functions in renders
```typescript
// ❌ Bad - Creates new function on each render
<button onClick={() => console.log('clicked')}>

// ✅ Better - Define outside
const handleClick = () => console.log('clicked')
<button onClick={handleClick}>
```

### 3. Missing Keys in Lists
```typescript
// ❌ Bad - No key
{items.map(item => <div>{item.name}</div>)}

// ✅ Good - Unique key
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

### 4. Not Cleaning Up Effects
```typescript
// ❌ Bad - Memory leak
useEffect(() => {
  window.addEventListener('scroll', handleScroll)
})

// ✅ Good - Cleanup
useEffect(() => {
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

## Performance Monitoring

### Core Web Vitals
- **LCP** (Largest Contentful Paint) - < 2.5s
- **FID** (First Input Delay) - < 100ms
- **CLS** (Cumulative Layout Shift) - < 0.1

### Use Web Vitals Library
```bash
npm install web-vitals
```

```typescript
// app/layout.tsx
import { reportWebVitals } from 'next/web-vitals'

reportWebVitals(metric => {
  console.log(metric)
})
```

## Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [GSAP Docs](https://gsap.com/docs)
- [Web.dev Best Practices](https://web.dev)

---

Keep these patterns in mind for cleaner, faster, more accessible code!
