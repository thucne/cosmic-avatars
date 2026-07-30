'use client';

import React from 'react';
import { ICON_CATEGORIES } from '../data/iconsData';

export type FrameStyle = 'circle' | 'squircle' | 'hexagon' | 'raw';
export type ThemeBg = 'void' | 'cyan' | 'purple' | 'magenta' | 'gold' | 'emerald';
export type IconSize = '16' | '20' | '28' | '32' | '64' | '96' | '128';

interface ControlsBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  frameStyle: FrameStyle;
  onFrameChange: (f: FrameStyle) => void;
  iconSize: IconSize;
  onSizeChange: (s: IconSize) => void;
  themeBg: ThemeBg;
  onThemeChange: (t: ThemeBg) => void;
  currentCategory: string;
  onCategoryChange: (c: string) => void;
  onExportZip: () => void;
  onCopySprite: () => void;
}

export const ControlsBar: React.FC<ControlsBarProps> = ({
  searchQuery,
  onSearchChange,
  frameStyle,
  onFrameChange,
  iconSize,
  onSizeChange,
  themeBg,
  onThemeChange,
  currentCategory,
  onCategoryChange,
  onExportZip,
  onCopySprite
}) => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = React.useState(false);
  const mobileSearchInputRef = React.useRef<HTMLInputElement>(null);
  const desktopSearchInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput = target && (['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable);

      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      const isSlash = e.key === '/' && !isInput;

      if (isCmdK || isSlash) {
        e.preventDefault();
        const isMobile = window.innerWidth <= 768;
        const targetInput = isMobile
          ? (mobileSearchInputRef.current || desktopSearchInputRef.current)
          : (desktopSearchInputRef.current || mobileSearchInputRef.current);

        if (targetInput) {
          targetInput.focus();
          targetInput.select();
        }
        return;
      }

      if (e.key === 'Escape') {
        const activeEl = document.activeElement;
        if (
          activeEl === desktopSearchInputRef.current ||
          activeEl === mobileSearchInputRef.current
        ) {
          onSearchChange('');
          (activeEl as HTMLElement).blur();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSearchChange]);

  const activeFilterCount = [
    frameStyle !== 'circle',
    iconSize !== '32',
    themeBg !== 'void',
    currentCategory !== 'all',
    searchQuery.trim() !== ''
  ].filter(Boolean).length;

  const renderFrameControl = () => (
    <div className="control-group">
      <label className="control-label">Avatar Frame:</label>
      <div className="segmented-control" role="radiogroup" aria-label="Avatar Frame Shape">
        <button
          className={`segment-btn ${frameStyle === 'circle' ? 'active' : ''}`}
          onClick={() => onFrameChange('circle')}
          title="Circular Avatar"
          role="radio"
          aria-checked={frameStyle === 'circle'}
          aria-label="Frame circle"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg> Circle
        </button>
        <button
          className={`segment-btn ${frameStyle === 'squircle' ? 'active' : ''}`}
          onClick={() => onFrameChange('squircle')}
          title="Squircle Rounded Avatar"
          role="radio"
          aria-checked={frameStyle === 'squircle'}
          aria-label="Frame squircle"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="6"/></svg> Squircle
        </button>
        <button
          className={`segment-btn ${frameStyle === 'hexagon' ? 'active' : ''}`}
          onClick={() => onFrameChange('hexagon')}
          title="Hexagon Cyber Avatar"
          role="radio"
          aria-checked={frameStyle === 'hexagon'}
          aria-label="Frame hexagon"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 21,7 21,17 12,22 3,17 3,7"/></svg> Hexagon
        </button>
        <button
          className={`segment-btn ${frameStyle === 'raw' ? 'active' : ''}`}
          onClick={() => onFrameChange('raw')}
          title="Raw Vector Art (No Badge)"
          role="radio"
          aria-checked={frameStyle === 'raw'}
          aria-label="Frame raw"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18"/></svg> Raw SVG
        </button>
      </div>
    </div>
  );

  const renderSizeControl = () => (
    <div className="control-group">
      <label className="control-label">Preview Size:</label>
      <div className="segmented-control" role="radiogroup" aria-label="Preview Size">
        {(['16', '20', '28', '32', '64', '96', '128'] as IconSize[]).map((sz) => (
          <button
            key={sz}
            className={`segment-btn ${iconSize === sz ? 'active' : ''}`}
            onClick={() => onSizeChange(sz)}
            role="radio"
            aria-checked={iconSize === sz}
          >
            {sz}px
          </button>
        ))}
      </div>
    </div>
  );

  const renderThemeControl = () => (
    <div className="control-group">
      <label className="control-label">Background Theme:</label>
      <div className="theme-picker" role="radiogroup" aria-label="Background Theme">
        <button
          className={`theme-dot ${themeBg === 'void' ? 'active' : ''}`}
          onClick={() => onThemeChange('void')}
          title="Dark Cosmic Void"
          role="radio"
          aria-checked={themeBg === 'void'}
          aria-label="Theme void"
          style={{ background: 'radial-gradient(circle, #1a1d36, #0b0d1b)' }}
        />
        <button
          className={`theme-dot ${themeBg === 'cyan' ? 'active' : ''}`}
          onClick={() => onThemeChange('cyan')}
          title="Quantum Cyan Glow"
          role="radio"
          aria-checked={themeBg === 'cyan'}
          aria-label="Theme cyan"
          style={{ background: 'radial-gradient(circle, #082f49, #0284c7)' }}
        />
        <button
          className={`theme-dot ${themeBg === 'purple' ? 'active' : ''}`}
          onClick={() => onThemeChange('purple')}
          title="Nebula Purple Glow"
          role="radio"
          aria-checked={themeBg === 'purple'}
          aria-label="Theme purple"
          style={{ background: 'radial-gradient(circle, #3b0764, #7e22ce)' }}
        />
        <button
          className={`theme-dot ${themeBg === 'magenta' ? 'active' : ''}`}
          onClick={() => onThemeChange('magenta')}
          title="Plasma Pink Glow"
          role="radio"
          aria-checked={themeBg === 'magenta'}
          aria-label="Theme magenta"
          style={{ background: 'radial-gradient(circle, #831843, #db2777)' }}
        />
        <button
          className={`theme-dot ${themeBg === 'gold' ? 'active' : ''}`}
          onClick={() => onThemeChange('gold')}
          title="Supernova Gold"
          role="radio"
          aria-checked={themeBg === 'gold'}
          aria-label="Theme gold"
          style={{ background: 'radial-gradient(circle, #451a03, #d97706)' }}
        />
        <button
          className={`theme-dot ${themeBg === 'emerald' ? 'active' : ''}`}
          onClick={() => onThemeChange('emerald')}
          title="Aurora Emerald"
          role="radio"
          aria-checked={themeBg === 'emerald'}
          aria-label="Theme emerald"
          style={{ background: 'radial-gradient(circle, #064e3b, #059669)' }}
        />
      </div>
    </div>
  );

  const renderCategoryNav = () => (
    <nav className="category-nav">
      <div className="category-tabs" role="tablist" aria-label="Icon Categories">
        {ICON_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`category-tab ${currentCategory === cat.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
            role="tab"
            aria-selected={currentCategory === cat.id}
          >
            <span className="tab-icon">{cat.icon}</span>
            <span className="tab-name">{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="bulk-actions">
        <button onClick={onExportZip} className="btn btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download SVGs (.zip)
        </button>
        <button onClick={onCopySprite} className="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copy SVG Sprite Sheet
        </button>
      </div>
    </nav>
  );

  return (
    <div className="sticky-controls-wrapper">
      {/* Mobile Quick-Search Header (< 768px) */}
      <div className="mobile-controls-header glass-panel">
        <div className="search-box">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={mobileSearchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search celestial icons..."
            autoComplete="off"
            aria-label="Search celestial icons by name or tag"
          />
          {!searchQuery && (
            <kbd className="search-hotkey">⌘K</kbd>
          )}
          {searchQuery && (
            <button className="search-clear" onClick={() => onSearchChange('')} aria-label="Clear search">
              &times;
            </button>
          )}
        </div>
        <button
          className={`btn btn-outline filter-toggle-btn ${isMobileDrawerOpen ? 'active' : ''}`}
          onClick={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
          aria-label="Filters and Customizer"
          aria-expanded={isMobileDrawerOpen}
          aria-controls="mobile-filter-drawer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
          </svg>
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="filter-count-badge">{activeFilterCount}</span>
          )}
        </button>
      </div>

      {/* Desktop Controls Panel (>= 769px inline) */}
      <div className="desktop-controls-panel">
        <section className="controls-bar glass-panel">
          {/* Search Input */}
          <div className="search-box">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              ref={desktopSearchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search Sun, Mars, Black Hole, Rocket, UFO..."
              autoComplete="off"
              aria-label="Search celestial icons by name or tag"
            />
            {!searchQuery && (
              <kbd className="search-hotkey">⌘K</kbd>
            )}
            {searchQuery && (
              <button className="search-clear" onClick={() => onSearchChange('')} aria-label="Clear search">
                &times;
              </button>
            )}
          </div>
          {renderFrameControl()}
          {renderSizeControl()}
          {renderThemeControl()}
        </section>
        {renderCategoryNav()}
      </div>

      {/* Mobile Bottom Sheet Filter Drawer & Backdrop Overlay (< 768px) */}
      {isMobileDrawerOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => setIsMobileDrawerOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        id="mobile-filter-drawer"
        className={`mobile-filter-drawer ${isMobileDrawerOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Filters and Customizer"
        aria-modal="true"
        aria-hidden={!isMobileDrawerOpen}
      >
        <div className="drawer-drag-handle" />
        <div className="drawer-header">
          <h3>Filters & Customizer</h3>
          <button
            className="drawer-close-btn"
            onClick={() => setIsMobileDrawerOpen(false)}
            aria-label="Close filters"
          >
            &times;
          </button>
        </div>
        <div className="drawer-content">
          {renderFrameControl()}
          {renderSizeControl()}
          {renderThemeControl()}
          {renderCategoryNav()}
        </div>
        <div className="drawer-footer">
          <button
            className="btn btn-primary drawer-done-btn"
            onClick={() => setIsMobileDrawerOpen(false)}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

