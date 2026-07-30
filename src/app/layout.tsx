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

export const metadata: Metadata = {
  title: 'Cosmic Avatars — 64 Vector Space Icon Suite & Generator Studio',
  description: 'A cohesive collection of 64 vector 32×32 SVG avatar icons depicting outer space objects, planets, nebulae, black holes, spacecraft, UFOs, and constellations.',
  keywords: ['space avatars', 'svg icons', 'avatar generator', 'planets', 'spacecraft', 'black hole', 'react icons'],
  openGraph: {
    title: 'Cosmic Avatars — 64 Vector Space Icon Suite & Generator Studio',
    description: 'A cohesive collection of 64 vector 32×32 SVG avatar icons depicting outer space objects, planets, nebulae, black holes, spacecraft, UFOs, and constellations.',
    type: 'website',
  },
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
