'use client';

import React, { useState, useMemo } from 'react';
import { SPACE_ICONS, SpaceIcon } from '../data/iconsData';
import { StarfieldBackground } from '../components/StarfieldBackground';
import { Header } from '../components/Header';
import { GeneratorStudio } from '../components/GeneratorStudio';
import {
  ControlsBar,
  FrameStyle,
  ThemeBg,
  IconSize
} from '../components/ControlsBar';
import { IconGrid } from '../components/IconGrid';
import { IconModal } from '../components/IconModal';
import { ToastContainer, ToastMessage } from '../components/ToastContainer';
import { downloadAllSvgsZip, generateSpriteSheet } from '../lib/exportUtils';
import { SeoShowcase } from '../components/SeoShowcase';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [frameStyle, setFrameStyle] = useState<FrameStyle>('raw');
  const [iconSize, setIconSize] = useState<IconSize>('128');
  const [themeBg, setThemeBg] = useState<ThemeBg>('void');
  const [selectedIcon, setSelectedIcon] = useState<SpaceIcon | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (text: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, text }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  };

  const handleCopyText = (text: string, message: string) => {
    if (text) {
      navigator.clipboard.writeText(text);
    }
    addToast(message);
  };

  const filteredIcons = useMemo(() => {
    return SPACE_ICONS.filter((icon) => {
      const matchesCategory =
        currentCategory === 'all' || icon.category === currentCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchesName = icon.name.toLowerCase().includes(q);
      const matchesTags = icon.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesName || matchesTags;
    });
  }, [searchQuery, currentCategory]);

  const handleExportZip = async () => {
    try {
      await downloadAllSvgsZip(filteredIcons);
      addToast(`Downloading ${filteredIcons.length} SVGs in ZIP archive...`);
    } catch (err) {
      addToast('Failed to create ZIP file. Please try again.');
    }
  };

  const handleCopySprite = () => {
    const spriteContent = generateSpriteSheet(filteredIcons);
    handleCopyText(
      spriteContent,
      `Copied SVG Sprite Sheet (${filteredIcons.length} icons) to clipboard!`
    );
  };

  return (
    <>
      <StarfieldBackground />

      <div id="app">
        <Header />

        <GeneratorStudio
          onCopy={(text, msg) => handleCopyText(text, msg)}
        />

        <ControlsBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          frameStyle={frameStyle}
          onFrameChange={setFrameStyle}
          iconSize={iconSize}
          onSizeChange={setIconSize}
          themeBg={themeBg}
          onThemeChange={setThemeBg}
          currentCategory={currentCategory}
          onCategoryChange={setCurrentCategory}
          onExportZip={handleExportZip}
          onCopySprite={handleCopySprite}
        />

        <IconGrid
          icons={filteredIcons}
          frameStyle={frameStyle}
          iconSize={iconSize}
          themeBg={themeBg}
          onSelectIcon={(icon) => setSelectedIcon(icon)}
          onCopySvg={(svg, name) => handleCopyText(svg, name)}
          onResetFilter={() => {
            setSearchQuery('');
            setCurrentCategory('all');
          }}
        />

        <SeoShowcase />

        <footer className="site-footer">
          <div className="footer-content">
            <p>Crafted with precision • 84 Vector Space Icons • 32×32 viewBox</p>
            <div className="footer-meta">
              <span>Clean Geometric Paths</span> • <span>Gradient Defs</span> • <span>Pixel-Grid Aligned</span> • <span>Scalable 16px – 128px+</span>
            </div>
          </div>
          <div className="footer-signature">
            <span className="footer-made-by">By</span>
            <a
              href="https://thucde.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-brand-link"
              aria-label="Visit thucde.dev"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/thucdedev-banner.png"
                alt="thucde.dev"
                className="footer-brand-logo"
              />
            </a>
          </div>
        </footer>
      </div>

      <IconModal
        icon={selectedIcon}
        frameStyle={frameStyle}
        themeBg={themeBg}
        onClose={() => setSelectedIcon(null)}
        onCopy={(text, msg) => handleCopyText(text, msg)}
      />

      <ToastContainer toasts={toasts} />
    </>
  );
}
