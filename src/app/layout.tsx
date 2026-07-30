import type { Metadata } from 'next';
import { Inter, Outfit, Fira_Code } from 'next/font/google';
import './globals.css';

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

const APP_URL = 'https://cosmic-avatars.thucde.dev';
const TITLE = 'Cosmic Avatars — 64 Vector Space SVG Icons & Avatar Generator';
const DESCRIPTION =
  'A cohesive library of 64 pixel-perfect vector space SVG icons (planets, nebulae, black holes, spacecraft, UFOs) with a deterministic user avatar generator. Copy as Raw SVG, React JSX, Data URI, or HTML. Zero server load.';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'space svg icons',
    'avatar generator',
    'deterministic avatar',
    'svg icon library',
    'planet icons',
    'spacecraft icons',
    'nebula svg',
    'black hole icon',
    'react svg icons',
    'user avatar',
    'cosmic icons',
    'space design system',
    'open source icons',
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
        alt: 'Cosmic Avatars — 64 Vector Space SVG Icons & Avatar Generator',
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
    icon: '/favicon.ico',
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
      <body>{children}</body>
    </html>
  );
}
