import type { Metadata } from 'next';
import { Inter, Outfit, Fira_Code } from 'next/font/google';
import './globals.css';
import { SeoStructuredData } from '../components/SeoStructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

const APP_URL = 'https://cosmic-avatars.a302.link';
const TITLE = 'Cosmic Avatars — Deterministic Space SVG Icon Studio & Avatar Generator';
const DESCRIPTION =
  'A cohesive open-source library of 84 pixel-perfect vector space SVG icons (planets, nebulae, black holes, spacecraft, UFOs) with a deterministic seed avatar generator for React, Next.js, and modern web apps. Zero server load.';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: TITLE,
    template: '%s | Cosmic Avatars',
  },
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'cosmic avatars',
    'space svg icons',
    'avatar generator',
    'deterministic avatar generator',
    'fnv-1a hash avatar generator',
    'space avatar generator',
    'react svg icons',
    'identicon generator',
    'gravatar space alternative',
    'open source space icons',
    'planet icons svg',
    'spacecraft vector icon',
    'black hole svg',
    'nebula icon library',
    'svg sprite generator',
    'space design system',
    'thucde.dev',
  ],
  authors: [{ name: 'thucde.dev', url: 'https://thucde.dev' }],
  creator: 'thucde.dev',
  publisher: 'thucde.dev',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: APP_URL,
    siteName: 'Cosmic Avatars',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosmic Avatars — Deterministic Space SVG Icon Studio & Avatar Generator',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@thucdedev',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon-32.png',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${firaCode.variable}`}>
      <head>
        <SeoStructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
