import React from 'react';

export const SeoStructuredData: React.FC = () => {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Cosmic Avatars',
    alternateName: [
      'Cosmic Space Icons',
      'Cosmic Avatar Generator',
      'Space SVG Icon Studio',
    ],
    url: 'https://cosmic-avatars.a302.link',
    description:
      'A cohesive library of 84 pixel-perfect vector space SVG icons and a deterministic user avatar generator built for web apps, user dashboards, and gaming platforms.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'thucde.dev',
      url: 'https://thucde.dev',
    },
    creator: {
      '@type': 'Person',
      name: 'thucde.dev',
      url: 'https://thucde.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'thucde.dev',
      url: 'https://thucde.dev',
    },
    featureList: [
      '84 Pixel-perfect 32x32 vector space SVG icons',
      'Deterministic seed hashing via FNV-1a algorithm with 3,528 core artwork signatures (64,000+ styled variations)',
      'Client-side zero server load rendering',
      'Multi-format code exporter (Raw SVG, React JSX, Base64 Data URI, HTML img)',
      'Bulk export options (ZIP archive and SVG Sprite Sheet)',
      'Customizable frames (Circle, Squircle, Hexagon) and ambient color glows',
    ],
    browserRequirements: 'Requires JavaScript and HTML5 canvas/SVG support.',
    softwareVersion: '0.1.0',
    license: 'https://opensource.org/licenses/MIT',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Cosmic Avatars?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cosmic Avatars is an open-source space SVG icon library and deterministic user avatar generator. It includes 84 vector space icons and instantly creates reproducible, visually unique cosmic avatars for any seed string (username, email, or user ID) with zero server load.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does deterministic avatar generation work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cosmic Avatars uses a high-speed FNV-1a non-cryptographic hash function to convert input seeds into a 32-bit integer. This hash predictably selects the base celestial icon, color palette, and orbital accents to generate 3,528 core artwork signatures (and 64,000+ styled variations with frame and theme controls) without requiring backend processing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use Cosmic Avatars in commercial React or Next.js projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Cosmic Avatars is released under the open-source MIT License. You can freely use, copy, modify, and distribute the vector SVG icons, sprite sheets, and React JSX snippets in both commercial and personal projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Cosmic Avatars compare to Gravatar or GitHub Identicons?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike generic 5x5 grid Identicons or external Gravatar requests that rely on third-party servers, Cosmic Avatars produces sleek sci-fi space vector avatars completely on the client side. It offers custom frames (Circle, Squircle, Hexagon) and zero latency with complete privacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What code export formats are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cosmic Avatars supports single-click exports as Raw inline SVG XML, ready-to-use React TypeScript JSX components, Base64 Data URIs, standard HTML <img> tags, single-file SVG Sprite Sheets, and bulk ZIP archives.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
