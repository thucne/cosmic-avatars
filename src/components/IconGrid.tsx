'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SpaceIcon } from '../data/iconsData';
import { FrameStyle, ThemeBg, IconSize } from './ControlsBar';

interface IconCardProps {
  icon: SpaceIcon;
  onSelectIcon: (icon: SpaceIcon) => void;
  onCopySvg?: (svg: string, name: string) => void;
  copiedIconId: string | null;
  handleQuickCopy: (e: React.MouseEvent, icon: SpaceIcon) => void;
}

const IconCard = React.memo(({ icon, onSelectIcon, onCopySvg, copiedIconId, handleQuickCopy }: IconCardProps) => {
  const isCopied = copiedIconId === icon.id;
  return (
    <div
      className="icon-card glass-card"
      onClick={() => onSelectIcon(icon)}
    >
      <div className="avatar-frame">
        <div
          className="svg-wrapper"
          dangerouslySetInnerHTML={{ __html: icon.svg }}
        />
      </div>
      <div className="icon-info">
        <span className="icon-name">{icon.name}</span>
      </div>
      <button
        className={`quick-copy-btn ${isCopied ? 'btn-success' : ''}`}
        title={isCopied ? "Copied!" : "Copy Raw SVG Code"}
        aria-label={`Quick copy ${icon.name} SVG code`}
        onClick={(e) => handleQuickCopy(e, icon)}
      >
        {isCopied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        )}
      </button>
    </div>
  );
});

IconCard.displayName = 'IconCard';

interface IconGridProps {
  icons: SpaceIcon[];
  frameStyle: FrameStyle;
  iconSize: IconSize;
  themeBg: ThemeBg;
  onSelectIcon: (icon: SpaceIcon) => void;
  onCopySvg: (svg: string, name: string) => void;
  onResetFilter: () => void;
}

export const IconGrid: React.FC<IconGridProps> = ({
  icons,
  frameStyle,
  iconSize,
  themeBg,
  onSelectIcon,
  onCopySvg,
  onResetFilter
}) => {
  const [copiedIconId, setCopiedIconId] = useState<string | null>(null);
  const copyTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleQuickCopy = useCallback((e: React.MouseEvent, icon: SpaceIcon) => {
    e.stopPropagation();
    onCopySvg(icon.svg, `Copied ${icon.name} SVG to clipboard!`);
    setCopiedIconId(icon.id);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => {
      setCopiedIconId(null);
    }, 1800);
  }, [onCopySvg]);

  if (icons.length === 0) {
    return (
      <main className="grid-container">
        <div className="empty-state">
          <div className="empty-icon">🛸</div>
          <h3>No matching celestial objects found</h3>
          <p>Try searching for "Sun", "Mars", "Galaxy", "Rover", "Comet", or "UFO".</p>
          <button onClick={onResetFilter} className="btn btn-outline">
            Reset Filter
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="grid-container">
      <div className={`icon-grid frame-${frameStyle} size-${iconSize} theme-${themeBg}`}>
        {icons.map((icon) => (
          <IconCard
            key={icon.id}
            icon={icon}
            onSelectIcon={onSelectIcon}
            onCopySvg={onCopySvg}
            copiedIconId={copiedIconId}
            handleQuickCopy={handleQuickCopy}
          />
        ))}
      </div>
    </main>
  );
};

