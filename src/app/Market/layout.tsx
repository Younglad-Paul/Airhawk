import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header/Page';
import MobileNav from './MobileNav/MobileNav'
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airhawk | Dashboard',
  description: 'Connect, trade, and swap cryptocurrencies seamlessly with Airhawk Market Place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className={inter.className}>
        <Header />
        <MobileNav />
          {children}
          </body>
    </html>
  );
}