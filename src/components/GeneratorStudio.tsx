'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  generateDeterministicSpaceAvatar,
  INITIAL_SAMPLE_USER_SEEDS,
  GeneratedAvatar
} from '../lib/avatarGenerator';

interface GeneratorStudioProps {
  onCopy: (text: string, message: string) => void;
}

export const GeneratorStudio: React.FC<GeneratorStudioProps> = ({ onCopy }) => {
  const [seedInput, setSeedInput] = useState<string>('john_doe_99');
  const [sampleSeeds, setSampleSeeds] = useState<string[]>(INITIAL_SAMPLE_USER_SEEDS);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const copyTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopyAvatar = () => {
    if (currentAvatar) {
      onCopy(currentAvatar.svg, `Copied generated avatar SVG for "${seedInput.trim() || 'user'}"!`);
      setIsCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => {
        setIsCopied(false);
      }, 1800);
    }
  };

  const currentAvatar = useMemo(() => {
    return generateDeterministicSpaceAvatar(seedInput);
  }, [seedInput]);

  const handleRandomizeSeeds = () => {
    const randomAdjectives = ["cosmic", "solar", "orbital", "quantum", "stellar", "hyper", "neon", "astro"];
    const randomNouns = ["voyager", "pilot", "rover", "galaxy", "nebula", "hunter", "cyborg", "beacon"];
    
    const newSeeds = Array.from({ length: 8 }, () => {
      const adj = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
      const noun = randomNouns[Math.floor(Math.random() * randomNouns.length)];
      const num = Math.floor(Math.random() * 999);
      return `${adj}_${noun}_${num}`;
    });

    setSampleSeeds(newSeeds);
    setSeedInput(newSeeds[0]);
    onCopy('', 'Generated new random user seeds!');
  };

  return (
    <section className="generator-studio glass-panel">
      <div className="studio-header">
        <div className="studio-title-box">
          <span className="studio-badge">🚀 Deterministic User Generator</span>
          <h2>Generate Unique Avatars for Thousands of Users</h2>
          <p>Enter any Username, User ID, or Email to generate a 100% unique, reproducible space avatar.</p>
        </div>

        <div className="studio-actions">
          <button onClick={handleRandomizeSeeds} className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
            </svg>
            Shuffle Random Users
          </button>
        </div>
      </div>

      {/* Live Input Generator Box */}
      <div className="generator-input-row">
        <div className="input-with-avatar">
          <div
            className="live-avatar-box"
            dangerouslySetInnerHTML={{ __html: currentAvatar?.svg || '' }}
          />
          <input
            type="text"
            value={seedInput}
            onChange={(e) => setSeedInput(e.target.value)}
            placeholder="Type username e.g. alex@space.io, user_12345..."
            aria-label="Username or User ID seed for avatar generation"
          />
        </div>
        <div className="generated-meta-info">
          <div className="meta-pill">
            Hash: #{currentAvatar ? currentAvatar.hashHex.slice(0, 8) : ''}
          </div>
          <div className="meta-pill">
            Trait: {currentAvatar?.iconName} • {currentAvatar?.paletteName}
          </div>
          <button
            onClick={handleCopyAvatar}
            className={`btn btn-primary btn-sm ${isCopied ? 'btn-success' : ''}`}
          >
            {isCopied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Copied SVG!
              </>
            ) : (
              'Copy User Avatar SVG'
            )}
          </button>
        </div>
      </div>

      {/* Sample Users Avatar Strip */}
      <div className="sample-users-strip">
        {sampleSeeds.map((seed) => {
          const sampleGen = generateDeterministicSpaceAvatar(seed);
          return (
            <div
              key={seed}
              className={`user-card-item ${seedInput === seed ? 'active' : ''}`}
              onClick={() => setSeedInput(seed)}
              title={`Click to test "${seed}"`}
            >
              <div
                className="user-avatar-frame"
                dangerouslySetInnerHTML={{ __html: sampleGen.svg }}
              />
              <div className="user-name-label">{seed}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
