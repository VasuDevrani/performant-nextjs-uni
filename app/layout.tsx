import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ViewportLayout } from 'next/dist/lib/metadata/types/extra-types';
import Link from 'next/link';

const CartButton = dynamic(() => import('@/components/cart-button'), {
  loading: () => (
    <Button variant="outline" size="icon" disabled>
      <div className="w-5 h-5 animate-pulse bg-muted rounded" />
    </Button>
  ),
});

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Modern E-commerce | Shop the Latest Products',
    template: '%s | Modern E-commerce',
  },
  description: 'Discover and shop the latest products with our modern e-commerce platform.',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Modern E-commerce',
  },
};

export const viewport: ViewportLayout = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-50">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Store
            </Link>
            <Suspense fallback={null}>
              <CartButton />
            </Suspense>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}