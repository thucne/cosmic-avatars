'use client';

import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="hero-header">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse-dot"></span> 64 Vector Space Icons (32×32 Grid)
        </div>
        <h1 className="hero-title">Cosmic Avatars</h1>
        <p className="hero-subtitle">
          A cohesive library of 64 vector space SVG avatars for planets, nebulae, galaxies, black holes, rockets, UFOs, and celestial phenomena.
        </p>

        {/* Stats Bar */}
        <div className="stats-row">
          <div className="stat-pill">
            <strong id="stat-total">64</strong> Base Icons
          </div>
          <div className="stat-pill">
            <strong>29.4 Million+</strong> Unique User Combinations
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
