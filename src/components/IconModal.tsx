'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SpaceIcon, ICON_CATEGORIES } from '../data/iconsData';
import { FrameStyle, ThemeBg } from './ControlsBar';
import { downloadSvgFile } from '../lib/exportUtils';

export type CodeTab = 'raw-svg' | 'react-jsx' | 'data-uri' | 'html-img';

interface IconModalProps {
  icon: SpaceIcon | null;
  frameStyle: FrameStyle;
  themeBg: ThemeBg;
  onClose: () => void;
  onCopy: (text: string, message: string) => void;
}

export const IconModal: React.FC<IconModalProps> = ({
  icon,
  frameStyle,
  themeBg,
  onClose,
  onCopy
}) => {
  const [activeTab, setActiveTab] = useState<CodeTab>('raw-svg');
  const [copiedTab, setCopiedTab] = useState<CodeTab | null>(null);
  const copyTimerRef = useRef<NodeJS.Timeout | null>(null);
  const modalCardRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!icon) return;

    // Focus close button on mount
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalCardRef.current) {
        const focusableElements = modalCardRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [icon, onClose]);

  if (!icon) return null;

  const categoryName = ICON_CATEGORIES.find((c) => c.id === icon.category)?.name || icon.category;

  const generateCodeSnippet = (tab: CodeTab): string => {
    switch (tab) {
      case 'raw-svg':
        return icon.svg;

      case 'react-jsx': {
        const componentName = icon.name.replace(/[^a-zA-Z0-9]/g, '');
        return `import React from 'react';

export const Icon${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  ${icon.svg.replace('<svg ', '<svg {...props} ')}
);`;
      }

      case 'data-uri': {
        const encoded = encodeURIComponent(icon.svg)
          .replace(/'/g, '%27')
          .replace(/"/g, '%22');
        return `data:image/svg+xml;charset=utf-8,${encoded}`;
      }

      case 'html-img': {
        return `<img src="${icon.path}" alt="${icon.name}" width="32" height="32" />`;
      }

      default:
        return icon.svg;
    }
  };

  const codeSnippet = generateCodeSnippet(activeTab);

  const handleCopyCode = () => {
    onCopy(codeSnippet, `Copied ${activeTab} for "${icon.name}"!`);
    setCopiedTab(activeTab);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => {
      setCopiedTab(null);
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalCardRef}
        className="modal-card glass-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          ref={closeBtnRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close detail modal"
        >
          &times;
        </button>

        <div className="modal-body">
          {/* Left Column: Large Vector Preview */}
          <div className="modal-preview-col">
            <div className={`modal-avatar-box frame-${frameStyle} theme-${themeBg}`}>
              <div
                className="modal-svg-display"
                dangerouslySetInnerHTML={{ __html: icon.svg }}
              />
            </div>
            <div className="preview-badge-tags">
              {icon.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Code Exporter */}
          <div className="modal-info-col">
            <div className="modal-header-info">
              <span className="modal-category">{categoryName}</span>
              <h2 id="modal-title" className="modal-title">{icon.name}</h2>
              <p className="modal-path">{icon.path}</p>
              {icon.description && (
                <p className="modal-description">{icon.description}</p>
              )}
            </div>

            {/* Code Format Selector Tabs */}
            <div className="code-tabs" role="tablist" aria-label="Code format selector">
              <button
                className={`code-tab ${activeTab === 'raw-svg' ? 'active' : ''}`}
                onClick={() => setActiveTab('raw-svg')}
                role="tab"
                aria-selected={activeTab === 'raw-svg'}
              >
                Raw SVG
              </button>
              <button
                className={`code-tab ${activeTab === 'react-jsx' ? 'active' : ''}`}
                onClick={() => setActiveTab('react-jsx')}
                role="tab"
                aria-selected={activeTab === 'react-jsx'}
              >
                React Component
              </button>
              <button
                className={`code-tab ${activeTab === 'data-uri' ? 'active' : ''}`}
                onClick={() => setActiveTab('data-uri')}
                role="tab"
                aria-selected={activeTab === 'data-uri'}
              >
                Data URI
              </button>
              <button
                className={`code-tab ${activeTab === 'html-img' ? 'active' : ''}`}
                onClick={() => setActiveTab('html-img')}
                role="tab"
                aria-selected={activeTab === 'html-img'}
              >
                HTML &lt;img&gt;
              </button>
            </div>

            {/* Code Viewer Box */}
            <div className="code-box">
              <textarea value={codeSnippet} readOnly aria-label="Generated code snippet" />
            </div>

            {/* Action Buttons */}
            <div className="modal-actions">
              <button
                onClick={handleCopyCode}
                className={`btn btn-primary btn-lg ${copiedTab === activeTab ? 'btn-success' : ''}`}
              >
                {copiedTab === activeTab ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied Code!
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    Copy Code
                  </>
                )}
              </button>
              <button
                onClick={() => downloadSvgFile(icon.id, icon.svg)}
                className="btn btn-outline btn-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download SVG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
