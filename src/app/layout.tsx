import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Montserrat, Playfair_Display } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  title: 'Richard James Kitchens | Bespoke Luxury Kitchens | Surrey & London',
  description: 'Richard James Kitchens specializes in designing and crafting bespoke, handmade luxury kitchens, combining traditional craftsmanship with innovative design for homes in Surrey, London and beyond.',
  keywords: 'bespoke kitchens, luxury kitchens, handmade kitchens, kitchen design Surrey, custom kitchens London, kitchen installers, kitchen renovation',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-google-analytics-opt-out="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body 
        className={`${montserrat.variable} ${playfair.variable} antialiased text-gray-900 bg-neutral-50`}
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
