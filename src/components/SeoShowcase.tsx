'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What is Cosmic Avatars and how is it different from other avatar makers?',
    answer:
      'Cosmic Avatars is a specialized developer tool and open-source library featuring 84 vector space SVG icons and a client-side deterministic seed avatar generator. Unlike standard portrait avatar builders or random avatar tools, Cosmic Avatars converts string seeds (like usernames or emails) into reproducible, sci-fi vector space icons with zero server latency.',
  },
  {
    question: 'How does the FNV-1a deterministic hash generator work?',
    answer:
      'When you pass any string (e.g. "alex@space.io") into the avatar engine, it executes a 32-bit Fowler–Noll–Vo (FNV-1a) hashing algorithm. The resulting hash bitmask deterministically selects the base celestial icon, color palette, orbit geometry, and glow frame. The exact same seed always produces the exact same avatar across all devices.',
  },
  {
    question: 'Can I use Cosmic Avatars in commercial React or Next.js applications?',
    answer:
      'Yes, 100%! Cosmic Avatars is open-source under the MIT License. You can use the SVG assets, React components, and generator code in commercial SaaS products, open-source projects, gaming platforms, or developer dashboards.',
  },
  {
    question: 'How does Cosmic Avatars compare to Gravatar or GitHub Identicons?',
    answer:
      'Traditional Identicons generate blocky 5x5 pixel grids, while Gravatar requires external HTTP requests to centralized servers. Cosmic Avatars renders crisp 32x32 vector space graphics directly on the client side, offering higher visual fidelity, customized frame styles (Circle, Squircle, Hexagon), and absolute data privacy with zero external calls.',
  },
  {
    question: 'What code export formats are available for developers and designers?',
    answer:
      'You can export individual avatars or icons in four instant formats: Raw inline SVG XML, ready-to-use React TypeScript JSX components, Base64 Data URIs (for CSS background images), and standard HTML <img> tags. Furthermore, you can download all 84 icons as a ZIP archive or copy a single SVG Sprite Sheet.',
  },
];

export const SeoShowcase: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="seo-showcase-section" aria-label="About Cosmic Avatars and Technical Features">
      <div className="seo-container">
        {/* Main Content Showcase */}
        <header className="seo-header">
          <span className="seo-badge">Open Source Developer Studio</span>
          <h2 className="seo-title">
            The Deterministic Space Avatar & SVG Vector Icon Engine
          </h2>
          <p className="seo-lead">
            Built for modern web applications, user dashboards, sci-fi gaming communities, and developer tools. 
            Cosmic Avatars combines pixel-perfect celestial iconography with high-speed client-side seed hashing.
          </p>
        </header>

        {/* Feature Grid */}
        <div className="seo-grid">
          <article className="seo-card">
            <div className="seo-card-icon">⚡</div>
            <h3>Deterministic FNV-1a Hashing</h3>
            <p>
              Generate <strong>3,528 core seed signatures</strong> (64,000+ styled variations) from user IDs, emails, or wallet addresses. 
              Zero server load, zero database storage, and instant rendering.
            </p>
          </article>

          <article className="seo-card">
            <div className="seo-card-icon">🪐</div>
            <h3>84 Hand-Crafted Vector Icons</h3>
            <p>
              Pixel-grid aligned 32×32 SVG icons across 4 categories: <em>Solar System & Stars</em>, 
              <em>Deep Sky & Galaxies</em>, <em>Spacecraft & Tech</em>, and <em>UFOs & Constellations</em>.
            </p>
          </article>

          <article className="seo-card">
            <div className="seo-card-icon">🛠️</div>
            <h3>Developer-First Exports</h3>
            <p>
              Copy inline <strong>Raw SVG</strong>, <strong>React TypeScript JSX</strong>, Base64 Data URIs, 
              or export the complete library as an <strong>SVG Sprite Sheet</strong> or <strong>.ZIP Archive</strong>.
            </p>
          </article>
        </div>

        {/* Technical Comparison Matrix */}
        <div className="seo-comparison-box">
          <h3 className="seo-subhead">Why Choose Cosmic Avatars over Identicons & Gravatar?</h3>
          <div className="table-responsive">
            <table className="seo-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Cosmic Avatars</th>
                  <th>GitHub Identicons</th>
                  <th>Gravatar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Design Aesthetics</strong></td>
                  <td><span className="highlight-tag">Sci-Fi Vector Space Icons</span></td>
                  <td>Blocky 5×5 Matrix</td>
                  <td>Generic Photos / Monsters</td>
                </tr>
                <tr>
                  <td><strong>Rendering Mode</strong></td>
                  <td>Client-Side Zero Server Load</td>
                  <td>Client-Side Canvas / SVG</td>
                  <td>External HTTP API Calls</td>
                </tr>
                <tr>
                  <td><strong>Combinations</strong></td>
                  <td>3,528 Base (64,000+ Styles)</td>
                  <td>~1 Million combinations</td>
                  <td>Depends on User Upload</td>
                </tr>
                <tr>
                  <td><strong>Frame Customization</strong></td>
                  <td>Circle, Squircle, Hexagon & Glows</td>
                  <td>Square Grid Only</td>
                  <td>Fixed Rectangular</td>
                </tr>
                <tr>
                  <td><strong>Code Exports</strong></td>
                  <td>Raw SVG, React JSX, Sprite, Zip</td>
                  <td>Raw SVG / PNG</td>
                  <td>Image URL Only</td>
                </tr>
                <tr>
                  <td><strong>License</strong></td>
                  <td>MIT Open Source</td>
                  <td>Open Source</td>
                  <td>Proprietary Service</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="seo-faq-wrapper">
          <h3 className="seo-subhead">Frequently Asked Questions</h3>
          <div className="faq-accordion">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-btn-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="faq-answer-content"
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
