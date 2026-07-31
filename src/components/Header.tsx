import React from 'react';
import { SPACE_ICONS } from '../data/iconsData';

export const Header: React.FC = () => {
  const iconCount = SPACE_ICONS.length;
  const signatureCount = (iconCount * 42).toLocaleString();

  return (
    <header className="hero-header">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse-dot"></span> {iconCount} Vector Space Icons (32×32 Grid)
        </div>
        <h1 className="hero-title">Cosmic Avatars</h1>
        <p className="hero-subtitle">
          A cohesive library of {iconCount} vector space SVG avatars for planets, nebulae, galaxies, black holes, rockets, UFOs, and celestial phenomena.
        </p>

        {/* Stats Bar */}
        <div className="stats-row">
          <div className="stat-pill">
            <strong id="stat-total">{iconCount}</strong> Base Icons
          </div>
          <div className="stat-pill">
            <strong>{signatureCount}</strong> Core Seed Signatures (64,000+ Styles)
          </div>
          <div className="stat-pill">
            <strong>Deterministic</strong> Hashing (User ID / Email)
          </div>
          <div className="stat-pill">
            <strong>Zero Server Load</strong>
          </div>
        </div>
      </div>
    </header>
  );
};
