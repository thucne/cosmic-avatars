import { SPACE_ICONS, SpaceIcon } from '../data/iconsData';

export interface GeneratorPalette {
  name: string;
  bg: string;
  border: string;
  ring: string;
}

export interface GeneratedAvatar {
  seed: string;
  hashHex: string;
  iconName: string;
  paletteName: string;
  svg: string;
}

export function fnv1aHash(str: string): number {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return hash >>> 0;
}

export const GENERATOR_PALETTES: GeneratorPalette[] = [
  { name: 'Quantum Cyan', bg: 'rgba(0, 240, 255, 0.15)', border: '#00F0FF', ring: '#38BDF8' },
  { name: 'Nebula Purple', bg: 'rgba(168, 85, 247, 0.18)', border: '#A855F7', ring: '#EC4899' },
  { name: 'Plasma Pink', bg: 'rgba(236, 72, 153, 0.18)', border: '#EC4899', ring: '#FDE047' },
  { name: 'Aurora Emerald', bg: 'rgba(16, 185, 129, 0.18)', border: '#10B981', ring: '#6EE7B7' },
  { name: 'Supernova Gold', bg: 'rgba(245, 158, 11, 0.18)', border: '#F59E0B', ring: '#FEF08A' },
  { name: 'Starlight Silver', bg: 'rgba(226, 232, 240, 0.15)', border: '#E2E8F0', ring: '#94A3B8' },
  { name: 'Electric Indigo', bg: 'rgba(99, 102, 241, 0.18)', border: '#6366F1', ring: '#C7D2FE' }
];

export const GENERATOR_ACCENTS: string[] = [
  '<ellipse cx="16" cy="16" rx="14" ry="5" stroke="#00F0FF" stroke-width="0.8" fill="none" opacity="0.6" transform="rotate(-20 16 16)"/>',
  '<circle cx="26" cy="7" r="2.2" fill="#FDE047"/><line x1="26" y1="2" x2="26" y2="12" stroke="#FFFFFF" stroke-width="0.6" opacity="0.7"/><line x1="21" y1="7" x2="31" y2="7" stroke="#FFFFFF" stroke-width="0.6" opacity="0.7"/>',
  '<circle cx="6" cy="9" r="1.5" fill="#38BDF8"/><circle cx="25" cy="24" r="1.5" fill="#EC4899"/>',
  '<path d="M4 11C4 7 7 4 11 4" stroke="#A855F7" stroke-width="1.2" stroke-linecap="round"/><path d="M28 21C28 25 25 28 21 28" stroke="#A855F7" stroke-width="1.2" stroke-linecap="round"/>',
  '<circle cx="16" cy="16" r="14.5" stroke="#FFFFFF" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.4"/>',
  ''
];

export function generateDeterministicSpaceAvatar(seedString: string): GeneratedAvatar {
  const seed = seedString.trim() || 'user_default';
  const hash = fnv1aHash(seed);
  
  const iconIndex = hash % SPACE_ICONS.length;
  const paletteIndex = (hash >>> 5) % GENERATOR_PALETTES.length;
  const accentIndex = (hash >>> 9) % GENERATOR_ACCENTS.length;

  const baseIcon = SPACE_ICONS[iconIndex];
  const palette = GENERATOR_PALETTES[paletteIndex];
  const accentSvg = GENERATOR_ACCENTS[accentIndex];

  const innerSvgContent = baseIcon.svg
    .replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">', '')
    .replace('</svg>', '');

  const compositeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
    <rect x="1" y="1" width="30" height="30" rx="15" fill="${palette.bg}" stroke="${palette.border}" stroke-width="1.2"/>
    ${accentSvg}
    ${innerSvgContent}
  </svg>`;

  return {
    seed: seedString,
    hashHex: `0x${(hash >>> 0).toString(16).padStart(8, '0')}`,
    iconName: baseIcon.name,
    paletteName: palette.name,
    svg: compositeSvg
  };
}

export const INITIAL_SAMPLE_USER_SEEDS = [
  "alex_space", "sarah_nova", "commander_zod", "lunar_explorer",
  "astro_bot", "quantum_physicist", "alien_hunter", "starlight_99"
];
