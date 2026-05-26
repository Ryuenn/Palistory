import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Palistory - Preserving Palestinian History & Culture',
  description: 'Palistory documents the history, culture, and daily life of Palestinians to ensure these stories live for generations. A digital archive preserving Palestinian memory and identity.',
  keywords: ['Palestinian', 'history', 'culture', 'storytelling', 'archive', 'preservation'],
  openGraph: {
    title: 'Palistory - Preserving Palestinian History & Culture',
    description: 'A cinematic digital platform dedicated to preserving Palestinian history, culture, and human stories.',
    type: 'website',
    url: 'https://palistory.com',
    siteName: 'Palistory',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B0B0B" />
        <link rel="icon" href="/images/palistory-logo.png" />
        <link rel="apple-touch-icon" href="/images/palistory-logo.png" />
      </head>
      <body className="bg-palistory-black text-palistory-white">
        {children}
      </body>
    </html>
  )
}
