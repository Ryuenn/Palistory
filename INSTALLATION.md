# Palistory - Installation & Setup Guide

Complete guide to get Palistory running locally and deploying to production.

## Prerequisites

Before you begin, ensure you have:

- **Node.js**: Version 18.17 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify: `node --version` and `npm --version`
- **Git**: Version 2.0+
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify: `git --version`
- **A code editor**: VS Code recommended
- **Terminal/Command line** access

## Quick Start (5 minutes)

### 1. Clone & Setup

```bash
# Clone the repository
git clone https://github.com/palistory/website.git
cd palistory

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Detailed Setup

### Step 1: Install Node.js

**Windows:**
1. Download LTS installer from [nodejs.org](https://nodejs.org/)
2. Run the installer
3. Accept license and click "Next"
4. Install to default location
5. Verify installation:
   ```bash
   node --version
   npm --version
   ```

**macOS (Using Homebrew):**
```bash
brew install node
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install nodejs npm
```

### Step 2: Clone Repository

```bash
# Navigate to where you want the project
cd ~/projects

# Clone the repository
git clone https://github.com/palistory/website.git
cd palistory
```

### Step 3: Install Dependencies

```bash
# Install all required packages
npm install

# Verify installation (no errors should appear)
npm list | head -20
```

Expected output:
```
palistory@0.1.0
├── react@19.0.0
├── next@15.0.0
├── framer-motion@10.16.0
├── gsap@3.12.2
├── lenis@1.1.10
├── tailwindcss@3.3.0
└── ... (more packages)
```

### Step 4: Configure Environment Variables

```bash
# Create .env.local file
cp .env.example .env.local

# Edit .env.local with your values
# On Windows:
notepad .env.local

# On macOS/Linux:
nano .env.local
```

### Step 5: Run Development Server

```bash
npm run dev
```

Output should show:
```
> palistory@0.1.0 dev
> next dev

  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

### Step 6: Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

## Available Commands

```bash
# Development server
npm run dev
# Runs on http://localhost:3000

# Production build
npm run build
# Creates optimized build in .next/

# Start production server
npm start
# Runs the built application

# Run linter
npm run lint
# Checks for code quality issues
```

## Project Structure Explained

```
palistory/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout (metadata, fonts)
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles
│
├── components/            # React components
│   ├── Navigation.tsx     # Top navigation bar
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── StoryCategories.tsx
│   │   ├── Timeline.tsx
│   │   ├── FeaturedStories.tsx
│   │   ├── Donation.tsx
│   │   └── Footer.tsx
│   └── ui/               # Reusable UI components
│       ├── StatCard.tsx
│       ├── StoryCard.tsx
│       ├── TimelineCard.tsx
│       ├── FeaturedStoryPanel.tsx
│       ├── DonationCard.tsx
│       └── ParticleBackground.tsx
│
├── lib/                  # Utility functions & hooks
│   ├── animations.ts    # GSAP animations hooks
│   ├── constants.ts     # Application constants
│   └── utils.ts         # Helper functions
│
├── public/              # Static files (robots.txt, sitemap)
│
├── tailwind.config.ts   # Tailwind CSS configuration
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── postcss.config.js    # PostCSS configuration
│
└── package.json         # Dependencies & scripts
```

## Making Your First Change

### Example: Update Hero Heading

1. Open `components/sections/Hero.tsx`
2. Find the line with "We document."
3. Change it to your custom text
4. Save (Ctrl+S)
5. Browser automatically refreshes

### Example: Change Colors

1. Open `tailwind.config.ts`
2. Find the `colors.palistory` section
3. Change hex values:
   ```typescript
   'red': '#NEW_HEX_VALUE'
   ```
4. Save and see changes immediately

## Customizing Content

### Add a New Story Category

Edit `components/sections/StoryCategories.tsx`:

```typescript
const categories = [
  // ... existing categories
  {
    id: 7,
    title: 'Your New Category',
    description: 'Description here',
    color: 'from-palistory-gold/20 to-palistory-red/10',
    icon: '🎭',
  },
]
```

### Add a Timeline Event

Edit `components/sections/Timeline.tsx`:

```typescript
const timelineEvents = [
  // ... existing events
  {
    year: '2024',
    title: 'Your Event',
    description: 'Description',
    color: 'from-palistory-gold to-palistory-white',
    details: ['Detail 1', 'Detail 2', 'Detail 3'],
  },
]
```

## Troubleshooting

### Issue: Port 3000 already in use

```bash
# Kill process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :3000
kill -9 <PID>

# Or use different port:
npm run dev -- -p 3001
```

### Issue: Module not found errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind classes not applying

```bash
# Restart dev server
# Press Ctrl+C in terminal
npm run dev
```

### Issue: Animations not working

1. Check browser console for errors (F12)
2. Verify Framer Motion and GSAP are installed: `npm list framer-motion gsap`
3. Clear browser cache (Ctrl+Shift+Delete)
4. Restart dev server

## Building for Production

### 1. Create Optimized Build

```bash
npm run build
```

Expected output:
```
> palistory@0.1.0 build
> next build

  ▲ Next.js 15.0.0
  ✓ Compiled successfully
  ✓ Linting and checking validity of types
  ✓ Collecting page data
  ✓ Generating static pages (3/3)
  ✓ Collecting build traces
  ✓ Finalizing optimization

Route (app)                          Size     First Load JS
○ / (Static)                         122 B          98.2 kB

○ (Static)  prerendered as static HTML.

Build complete.
```

### 2. Test Production Build Locally

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) again.

### 3. Optimize Before Deployment

- Remove unused dependencies: `npm prune --production`
- Check bundle size: `npm run build` shows breakdown
- Lint code: `npm run lint`
- Test responsiveness: Chrome DevTools (F12)

## Deploying to Vercel

### Option 1: Git Integration (Easiest)

1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Connect GitHub account
5. Select `palistory` repository
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production:
vercel --prod
```

### Option 3: Docker

```bash
# Build Docker image
docker build -t palistory .

# Run container
docker run -p 3000:3000 palistory
```

## Performance Optimization Checklist

- ✅ Images optimized (use Next.js Image component)
- ✅ CSS minified (Tailwind production build)
- ✅ JavaScript bundled (Next.js production build)
- ✅ Animations GPU-accelerated
- ✅ Lazy loading implemented
- ✅ Code splitting enabled

## Security Best Practices

1. **Never commit secrets**: Use `.env.local` (in .gitignore)
2. **Validate input**: Sanitize user data
3. **HTTPS only**: Enable on production
4. **Headers set**: Configured in next.config.ts
5. **Dependencies updated**: Run `npm audit` regularly

## Monitoring & Analytics

Add to `app/layout.tsx`:

```typescript
// Google Analytics example
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
      <Script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_ID');
      `}</Script>
      {children}
    </html>
  )
}
```

## Common Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "Add new section"

# Push to GitHub
git push origin feature/new-section

# Create Pull Request on GitHub

# After review, merge to main
git checkout main
git pull
git merge feature/new-section
git push
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [GSAP](https://gsap.com)
- [TypeScript](https://www.typescriptlang.org)

## Support

- **Issues?** Check [GitHub Issues](https://github.com/palistory/website/issues)
- **Questions?** Email hello@palistory.com
- **Contribution?** See CONTRIBUTING.md

---

Happy coding! 🎬✨
