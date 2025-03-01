import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme/theme-provider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Alymente',
  description: 'CRUD de usuários',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex flex-1 flex-col gap-4 p-8 pt-6">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
