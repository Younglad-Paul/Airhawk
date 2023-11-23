import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ActiveSectionProvider from "@/context/activeSection";
import Container from './ul/Container';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airhawk Market Place',
  description: 'Connect, trade, and swap cryptocurrencies seamlessly with Airhawk Market Place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/Logo.jpg" />
      </head>
      <Container>
          <ActiveSectionProvider>{children}</ActiveSectionProvider>
      </Container>
    </html>
  )
}
