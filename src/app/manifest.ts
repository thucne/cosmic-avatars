import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cosmic Avatars — Deterministic Space SVG Icon Studio',
    short_name: 'Cosmic Avatars',
    description:
      'A cohesive library of 134 vector space SVG icons and deterministic seed avatar generator for web applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060814',
    theme_color: '#00F0FF',
    icons: [
      {
        src: '/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
