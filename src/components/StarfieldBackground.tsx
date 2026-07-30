'use client';

import React from 'react';

export const StarfieldBackground: React.FC = () => {
  return (
    <div className="space-background" aria-hidden="true">
      <div className="stars-layer layer-1" />
      <div className="stars-layer layer-2" />
      <div className="nebula-glow glow-cyan" />
      <div className="nebula-glow glow-purple" />
    </div>
  );
};
