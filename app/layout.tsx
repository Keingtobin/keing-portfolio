import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import Nav from './ui/nav'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Keingtobin',
  description: 'Portfolio of Keingtobin — projects, writing, and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full text-zinc-900 dark:text-zinc-50">
        {/* Fixed background — stays in place while content scrolls */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <Image
            src="/background.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Soft overlay to keep text readable */}
          <div className="absolute inset-0 bg-white/40 dark:bg-zinc-950/50" />
        </div>

        <Nav />
        <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>
      </body>
    </html>
  )
}
