export interface IconCategory {
  id: string;
  name: string;
  icon: string;
}

export interface SpaceIcon {
  id: string;
  name: string;
  category: 'solar-system' | 'deep-sky' | 'technology' | 'mysteries';
  path: string;
  tags: string[];
  description?: string;
  svg: string;
}

export const ICON_CATEGORIES: IconCategory[] = [
  { id: 'all', name: 'All Space Icons', icon: '✨' },
  { id: 'solar-system', name: 'Solar System & Stars', icon: '🪐' },
  { id: 'deep-sky', name: 'Deep Sky & Galaxies', icon: '🌌' },
  { id: 'technology', name: 'Spacecraft & Tech', icon: '🚀' },
  { id: 'mysteries', name: 'UFOs & Constellations', icon: '🛸' }
];

export const SPACE_ICONS: SpaceIcon[] = [
  // Solar System & Stars (16)
  {
    id: 'sun',
    name: 'The Sun',
    category: 'solar-system',
    path: '/svgs/solar-system/sun.svg',
    tags: ['sun', 'star', 'solar', 'flare', 'corona', 'gold', 'hot', 'core'],
    description: `The beating heart of our solar system, a G-type main-sequence star converting 600 million tonnes of hydrogen into helium every second. Its corona blazes at 1 million °C — somehow hotter than the surface below.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="sun-core" cx="16" cy="16" r="10" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFF5C0"/><stop offset="40%" stop-color="#FFD000"/><stop offset="85%" stop-color="#FF7700"/><stop offset="100%" stop-color="#E63900"/></radialGradient><filter id="sun-glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter></defs><path d="M16 2v3M16 27v3M2 16h3M27 16h3M6.1 6.1l2.1 2.1M23.8 23.8l2.1 2.1M6.1 25.9l2.1-2.1M23.8 8.2l2.1-2.1" stroke="#FF9E00" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/><path d="M16 4.5l1.5 2.5h-3zM16 27.5l1.5-2.5h-3zM4.5 16l2.5 1.5v-3zM27.5 16l-2.5 1.5v-3z" fill="#FFB700"/><circle cx="16" cy="16" r="9.5" fill="url(#sun-core)" filter="url(#sun-glow)"/><path d="M11 12c1.5-1 3.5-1 5 0s2 2.5 1 4" stroke="#FFF5C0" stroke-width="1" stroke-linecap="round" opacity="0.6"/><circle cx="20.5" cy="19.5" r="1.2" fill="#FF4500" opacity="0.7"/></svg>`
  },
  {
    id: 'red-giant',
    name: 'Red Giant Star',
    category: 'solar-system',
    path: '/svgs/solar-system/red-giant.svg',
    tags: ['red giant', 'star', 'sun', 'flare', 'stellar', 'red', 'dying star'],
    description: `A sun in its twilight years, swollen to hundreds of times its original size as its core runs out of hydrogen. In 5 billion years, our own Sun will engulf Earth as it becomes one.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="red-giant-core" cx="16" cy="16" r="13" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FEF08A"/><stop offset="35%" stop-color="#F97316"/><stop offset="75%" stop-color="#DC2626"/><stop offset="100%" stop-color="#7F1D1D"/></radialGradient></defs><circle cx="16" cy="16" r="14" fill="#EF4444" opacity="0.2"/><circle cx="16" cy="16" r="12" fill="url(#red-giant-core)"/><path d="M10 12c2-1 4 0 5 2s-1 4-3 4-3-1-3-3" stroke="#FDE047" stroke-width="0.8" opacity="0.6"/><path d="M18 10c2 0 3.5 1.5 3 3s-2.5 2-4 1" stroke="#FDE047" stroke-width="0.8" opacity="0.5"/><path d="M13 20c2 1 4.5.5 5-1s.5-3-1.5-3" stroke="#FEF2F2" stroke-width="0.8" opacity="0.6"/></svg>`
  },
  {
    id: 'blue-supergiant',
    name: 'Blue Supergiant',
    category: 'solar-system',
    path: '/svgs/solar-system/blue-supergiant.svg',
    tags: ['blue supergiant', 'rigel', 'hot star', 'cyan', 'rays', 'bright star'],
    description: `Among the hottest, brightest, and most massive stars in the cosmos — burning 10,000 times brighter than the Sun. They live fast and die spectacular, often triggering supernovae.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="blue-giant-core" cx="16" cy="16" r="11" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="35%" stop-color="#38BDF8"/><stop offset="75%" stop-color="#2563EB"/><stop offset="100%" stop-color="#1E1B4B"/></radialGradient></defs><circle cx="16" cy="16" r="14.5" stroke="#00F0FF" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.6"/><circle cx="16" cy="16" r="11" fill="url(#blue-giant-core)"/><path d="M16 2v3M16 27v3M2 16h3M27 16h3M6.1 6.1l2.1 2.1M23.8 23.8l2.1 2.1" stroke="#67E8F9" stroke-width="1.2" stroke-linecap="round"/><circle cx="16" cy="16" r="4" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'white-dwarf',
    name: 'White Dwarf Star',
    category: 'solar-system',
    path: '/svgs/solar-system/white-dwarf.svg',
    tags: ['white dwarf', 'star', 'dense core', 'cyan', 'ultraviolet', 'remnant'],
    description: `The dense, crystalline core left behind after a Sun-like star sheds its outer layers. No larger than Earth but containing the mass of the Sun, it slowly fades into a cold black dwarf over trillions of years.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="wd-core" cx="16" cy="16" r="7" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="40%" stop-color="#E0F2FE"/><stop offset="85%" stop-color="#38BDF8"/><stop offset="100%" stop-color="#1E3A8A"/></radialGradient></defs><circle cx="16" cy="16" r="14" fill="#38BDF8" opacity="0.15"/><circle cx="16" cy="16" r="10" stroke="#7DD3FC" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.6"/><circle cx="16" cy="16" r="7" fill="url(#wd-core)"/><circle cx="16" cy="16" r="3" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'magnetar',
    name: 'Magnetar Neutron Star',
    category: 'solar-system',
    path: '/svgs/solar-system/magnetar.svg',
    tags: ['magnetar', 'magnetic field', 'neutron star', 'flux', 'pulsar', 'energy'],
    description: `The most powerful magnets in the known universe — neutron stars with magnetic fields a trillion times stronger than Earth’s. A magnetar passing within 200,000 km could strip your credit cards from here.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M16 4C8 4 6 11 6 16C6 21 8 28 16 28" stroke="#EC4899" stroke-width="1.2" stroke-dasharray="2 1.5"/><path d="M16 4C24 4 26 11 26 16C26 21 24 28 16 28" stroke="#EC4899" stroke-width="1.2" stroke-dasharray="2 1.5"/><path d="M16 8C11 8 10 12 10 16C10 20 11 24 16 24" stroke="#00F0FF" stroke-width="1"/><path d="M16 8C21 8 22 12 22 16C22 20 21 24 16 24" stroke="#00F0FF" stroke-width="1"/><circle cx="16" cy="16" r="4" fill="#FFFFFF"/><circle cx="16" cy="16" r="4" stroke="#FDE047" stroke-width="1"/></svg>`
  },
  {
    id: 'solar-eclipse',
    name: 'Total Solar Eclipse',
    category: 'solar-system',
    path: '/svgs/solar-system/solar-eclipse.svg',
    tags: ['eclipse', 'solar eclipse', 'corona', 'diamond ring', 'moon shadow', 'sun'],
    description: `A cosmic coincidence: the Moon is 400 times smaller than the Sun but also 400 times closer, making them appear the same size in our sky. For a few breathtaking minutes, day turns to twilight.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="corona-glow" cx="16" cy="16" r="15" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="40%" stop-color="#FDE047"/><stop offset="70%" stop-color="#F97316"/><stop offset="100%" stop-color="#000000" stop-opacity="0"/></radialGradient></defs><circle cx="16" cy="16" r="14" fill="url(#corona-glow)"/><path d="M16 2v4M16 26v4M2 16h4M26 16h4M6.1 6.1l2.8 2.8M23.1 23.1l2.8 2.8" stroke="#FDE047" stroke-width="1.2" stroke-linecap="round" opacity="0.8"/><circle cx="16" cy="16" r="10" fill="#030712"/><circle cx="16" cy="16" r="10.2" stroke="#FFFFFF" stroke-width="0.8" opacity="0.7"/><circle cx="23" cy="9" r="2" fill="#FFFFFF"/><path d="M23 4v10M18 9h10" stroke="#FFFFFF" stroke-width="0.8"/></svg>`
  },
  {
    id: 'mercury',
    name: 'Mercury',
    category: 'solar-system',
    path: '/svgs/solar-system/mercury.svg',
    tags: ['mercury', 'planet', 'rocky', 'crater', 'gray', 'inner'],
    description: `The smallest planet and the fastest orbiter, completing a year in just 88 Earth days. Despite being closest to the Sun, it’s not the hottest — Venus claims that title thanks to its runaway greenhouse effect.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="mercury-grad" cx="12" cy="11" r="13" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#E2E8F0"/><stop offset="55%" stop-color="#94A3B8"/><stop offset="85%" stop-color="#475569"/><stop offset="100%" stop-color="#1E293B"/></radialGradient></defs><circle cx="16" cy="16" r="11" fill="url(#mercury-grad)"/><circle cx="12" cy="11" r="2.2" fill="#334155" opacity="0.5"/><circle cx="12" cy="11" r="2.2" stroke="#CBD5E1" stroke-width="0.5" opacity="0.4"/><circle cx="19" cy="15" r="3" fill="#334155" opacity="0.5"/><circle cx="19" cy="15" r="3" stroke="#CBD5E1" stroke-width="0.5" opacity="0.4"/><circle cx="14" cy="21" r="1.8" fill="#334155" opacity="0.4"/><circle cx="21" cy="9" r="1.2" fill="#334155" opacity="0.4"/><path d="M7 11a11 11 0 0 1 14-4" stroke="#F1F5F9" stroke-width="1" stroke-linecap="round" opacity="0.5"/></svg>`
  },
  {
    id: 'venus',
    name: 'Venus',
    category: 'solar-system',
    path: '/svgs/solar-system/venus.svg',
    tags: ['venus', 'planet', 'clouds', 'amber', 'yellow', 'atmosphere'],
    description: `A hellish twin of Earth shrouded in thick clouds of sulfuric acid, with surface temperatures hot enough to melt lead. Ironically the brightest object in our night sky after the Moon.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="venus-grad" x1="5" y1="5" x2="27" y2="27" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FEF08A"/><stop offset="40%" stop-color="#F59E0B"/><stop offset="80%" stop-color="#D97706"/><stop offset="100%" stop-color="#78350F"/></linearGradient></defs><circle cx="16" cy="16" r="11.5" fill="url(#venus-grad)"/><path d="M5.5 13c3-2.5 8-3 13-1s7 3.5 8 2.5" stroke="#FEF3C7" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/><path d="M4.8 17c4-1.5 9-1 13 1s6 2.5 9 1" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round" opacity="0.35"/><path d="M7.5 21c3.5-1 7.5-.5 11 1s5 1 7.5-.5" stroke="#B45309" stroke-width="1.2" stroke-linecap="round" opacity="0.4"/><circle cx="16" cy="16" r="11.5" stroke="#FEF08A" stroke-width="1" opacity="0.3"/></svg>`
  },
  {
    id: 'earth-moon',
    name: 'Earth & Moon',
    category: 'solar-system',
    path: '/svgs/solar-system/earth-moon.svg',
    tags: ['earth', 'moon', 'home', 'blue marble', 'ocean', 'orbit', 'globe'],
    description: `Our pale blue home and its faithful grey companion, locked in a gravitational dance for 4.5 billion years. The Moon stabilises Earth’s axial tilt, making stable seasons — and life — possible.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="earth-ocean" cx="12" cy="12" r="12" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#38BDF8"/><stop offset="50%" stop-color="#0284C7"/><stop offset="90%" stop-color="#0369A1"/><stop offset="100%" stop-color="#0C4A6E"/></radialGradient><radialGradient id="moon-grad" cx="24" cy="7" r="3" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#F8FAFC"/><stop offset="100%" stop-color="#94A3B8"/></radialGradient></defs><path d="M 6 22 A 15 8 0 0 0 27 10" stroke="#38BDF8" stroke-width="0.8" stroke-dasharray="1.5 1.5" opacity="0.4"/><circle cx="14" cy="17" r="10" fill="url(#earth-ocean)"/><path d="M8 15c1-2 3-3.5 5-3 1.5.5 2 2 3.5 2.5s2.5-1 3.5-.5c1 .5.5 2.5-.5 3.5-1 1-2.5.5-3.5 2-1 1.5 0 3-1.5 3-1.5 0-2.5-1.5-3.5-1.5S7.5 18 8 15z" fill="#10B981" opacity="0.9"/><path d="M16 23c1-.5 2 0 2.5 1s.5 2-1 2.5-2-.5-2-1.5.5-1.5 0.5-2z" fill="#059669" opacity="0.85"/><circle cx="14" cy="17" r="10" stroke="#7DD3FC" stroke-width="0.8" opacity="0.5"/><circle cx="25" cy="8" r="2.8" fill="url(#moon-grad)"/><circle cx="24.2" cy="7.5" r="0.7" fill="#64748B" opacity="0.4"/></svg>`
  },
  {
    id: 'lunar-phase-crescent',
    name: 'Crescent Moon',
    category: 'solar-system',
    path: '/svgs/solar-system/lunar-phase-crescent.svg',
    tags: ['crescent moon', 'moon', 'earthshine', 'crater', 'lunar phase', 'night'],
    description: `The ancient timekeeper of human civilisations — the Moon’s phases shaped calendars, tides, and myths across every culture on Earth. The crescent represents new beginnings in countless traditions.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="11" fill="#0F172A" stroke="#334155" stroke-width="0.8"/><path d="M16 5C22.075 5 27 9.925 27 16C27 22.075 22.075 27 16 27C19 24 21 20 21 16C21 12 19 8 16 5Z" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="0.8"/><circle cx="21" cy="12" r="1" fill="#CBD5E1"/><circle cx="23" cy="18" r="1.2" fill="#CBD5E1"/></svg>`
  },
  {
    id: 'mars',
    name: 'Mars',
    category: 'solar-system',
    path: '/svgs/solar-system/mars.svg',
    tags: ['mars', 'red planet', 'rust', 'ice cap', 'volcano', 'olympus mons'],
    description: `The Red Planet, named for the Roman god of war, harbours the solar system’s tallest volcano — Olympus Mons, rising 22 km above its rust-coloured plains. Mars may once have had liquid oceans.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="mars-grad" cx="12" cy="11" r="13" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#F87171"/><stop offset="50%" stop-color="#EF4444"/><stop offset="85%" stop-color="#B91C1C"/><stop offset="100%" stop-color="#7F1D1D"/></radialGradient></defs><circle cx="16" cy="16" r="11" fill="url(#mars-grad)"/><path d="M12.5 5.5c2-.5 5-.5 7 0 1 .3.5 1.5-1 1.8-2 .4-4 .4-5 0-1-.3-1.5-1.5-1-1.8z" fill="#F8FAFC" opacity="0.9"/><path d="M8 16c2-1 4.5 0 6.5-1s4-3.5 7-2c-1 2.5-3 4-5.5 3.5S11 18.5 8 16z" fill="#991B1B" opacity="0.7"/><path d="M10 22c3 1 6-.5 9 .5" stroke="#7F1D1D" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/><circle cx="13" cy="13" r="1.5" fill="#7F1D1D"/><circle cx="13" cy="13" r="0.6" fill="#FEF2F2" opacity="0.8"/></svg>`
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    category: 'solar-system',
    path: '/svgs/solar-system/jupiter.svg',
    tags: ['jupiter', 'gas giant', 'great red spot', 'storm', 'bands', 'rings'],
    description: `A colossal gas giant so massive it contains more than twice the material of all other planets combined. Its Great Red Spot is a storm that has raged continuously for at least 350 years.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="jup-grad" cx="14" cy="12" r="12" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FDE68A"/><stop offset="45%" stop-color="#F59E0B"/><stop offset="80%" stop-color="#B45309"/><stop offset="100%" stop-color="#78350F"/></radialGradient></defs><ellipse cx="16" cy="16" rx="14.5" ry="3.5" stroke="#FBBF24" stroke-width="0.8" opacity="0.35" transform="rotate(-10 16 16)"/><circle cx="16" cy="16" r="10.5" fill="url(#jup-grad)"/><path d="M5.8 12c3.5-1 11-1 19.5 0" stroke="#78350F" stroke-width="1.5" opacity="0.6"/><path d="M5.5 15c4.5-.8 12-.8 20 0" stroke="#FEF3C7" stroke-width="1.2" opacity="0.5"/><path d="M5.8 18c3-1 10-1 19.5 0" stroke="#92400E" stroke-width="1.5" opacity="0.6"/><ellipse cx="20" cy="19.5" rx="2.5" ry="1.7" fill="#DC2626" stroke="#991B1B" stroke-width="0.5"/><ellipse cx="20" cy="19.5" rx="1.2" ry="0.8" fill="#FCA5A5" opacity="0.7"/></svg>`
  },
  {
    id: 'saturn',
    name: 'Saturn',
    category: 'solar-system',
    path: '/svgs/solar-system/saturn.svg',
    tags: ['saturn', 'rings', 'cassini', 'gas giant', 'gold', 'tilted'],
    description: `The jewel of the solar system, ringed by billions of ice and rock fragments spanning 282,000 km. Saturn is the least dense planet — it would float in water, if you had an ocean large enough.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="sat-body" cx="14" cy="13" r="9" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FEF08A"/><stop offset="60%" stop-color="#EAB308"/><stop offset="100%" stop-color="#854D0E"/></radialGradient><linearGradient id="ring-grad" x1="2" y1="20" x2="30" y2="12" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FEF08A" stop-opacity="0.9"/><stop offset="35%" stop-color="#CA8A04" stop-opacity="0.95"/><stop offset="50%" stop-color="#451A03" stop-opacity="0.4"/><stop offset="70%" stop-color="#EAB308" stop-opacity="0.9"/><stop offset="100%" stop-color="#FEF08A" stop-opacity="0.8"/></linearGradient></defs><path d="M3.5 18C2.5 13.5 11 11 21.5 12.5C25.5 13 28.5 14 29 15.5" stroke="url(#ring-grad)" stroke-width="3" stroke-linecap="round"/><circle cx="16" cy="16" r="7.5" fill="url(#sat-body)"/><path d="M9 14.5c2.5-.5 8.5-.5 13.5 0" stroke="#713F12" stroke-width="0.8" opacity="0.4"/><path d="M8.8 17.5c3-.5 9-.5 14 0" stroke="#FEF9C3" stroke-width="0.8" opacity="0.5"/><path d="M28.5 14C29.5 18.5 21 21 10.5 19.5C6.5 19 3.5 18 3 16.5" stroke="url(#ring-grad)" stroke-width="3" stroke-linecap="round"/><ellipse cx="16" cy="16" rx="13" ry="4" stroke="#FDE047" stroke-width="0.6" fill="none" opacity="0.6" transform="rotate(-15 16 16)"/></svg>`
  },
  {
    id: 'uranus-neptune',
    name: 'Uranus & Neptune',
    category: 'solar-system',
    path: '/svgs/solar-system/uranus-neptune.svg',
    tags: ['uranus', 'neptune', 'ice giant', 'azure', 'cyan', 'methane', 'vertical ring'],
    description: `The ice giants of the outer solar system, wrapped in mantles of water, methane, and ammonia ice. Uranus famously rotates on its side, rolling around the Sun like a bowling ball.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="ice-giant" cx="12" cy="11" r="11" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#A5F3FC"/><stop offset="45%" stop-color="#06B6D4"/><stop offset="85%" stop-color="#0891B2"/><stop offset="100%" stop-color="#164E63"/></radialGradient></defs><ellipse cx="16" cy="16" rx="3.5" ry="13.5" stroke="#E0F2FE" stroke-width="1.2" opacity="0.6" fill="none" transform="rotate(15 16 16)"/><circle cx="16" cy="16" r="8.5" fill="url(#ice-giant)"/><path d="M8 14c3 1 10 2 15 0" stroke="#CFFAFE" stroke-width="0.8" opacity="0.5"/><path d="M8.5 18c2.5-1 9.5-1 14.5 0" stroke="#0E7490" stroke-width="0.8" opacity="0.6"/><ellipse cx="19" cy="14" rx="1.5" ry="1" fill="#155E75" opacity="0.8"/><circle cx="16" cy="16" r="8.5" stroke="#67E8F9" stroke-width="0.8" opacity="0.4"/></svg>`
  },
  {
    id: 'asteroid-ceres',
    name: 'Asteroid Ceres',
    category: 'solar-system',
    path: '/svgs/solar-system/asteroid-ceres.svg',
    tags: ['ceres', 'asteroid belt', 'dwarf planet', 'bright spot', 'crater'],
    description: `The largest object in the asteroid belt and a dwarf planet in its own right, Ceres hides a subsurface ocean of briny water. NASA’s Dawn spacecraft revealed mysterious bright spots inside its Occator Crater.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="ceres-body" cx="12" cy="11" r="13" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#CBD5E1"/><stop offset="60%" stop-color="#64748B"/><stop offset="100%" stop-color="#1E293B"/></radialGradient></defs><circle cx="16" cy="16" r="11" fill="url(#ceres-body)"/><circle cx="13" cy="12" r="1.8" fill="#F8FAFC"/><circle cx="13" cy="12" r="0.8" fill="#00F0FF"/><circle cx="21" cy="17" r="2" fill="#334155" opacity="0.6"/><circle cx="11" cy="21" r="1.5" fill="#334155" opacity="0.6"/></svg>`
  },
  {
    id: 'dwarf-planet-pluto',
    name: 'Pluto & Charon',
    category: 'solar-system',
    path: '/svgs/solar-system/dwarf-planet-pluto.svg',
    tags: ['pluto', 'charon', 'dwarf planet', 'kuiper', 'heart', 'tombaugh'],
    description: `Once the ninth planet, Pluto is a frozen world at the solar system’s edge. Its famous Tombaugh Regio — a heart-shaped plain of nitrogen ice — was discovered by New Horizons in 2015, charming the world.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="pluto-grad" cx="13" cy="12" r="12" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FED7AA"/><stop offset="50%" stop-color="#C2410C"/><stop offset="85%" stop-color="#7C2D12"/><stop offset="100%" stop-color="#361309"/></radialGradient></defs><circle cx="15" cy="17" r="10" fill="url(#pluto-grad)"/><path d="M13 14c-1.5-1.5-3.5-1-4.2.5s.2 3.5 2.2 5.5c1.5 1.5 3 2.5 4 3 1-.5 2.5-1.5 4-3 2-2 2.9-4 2.2-5.5s-2.7-2-4.2-.5c-.8.8-1.4 1.5-2 2-.6-.5-1.2-1.2-2-2z" fill="#FEE2E2" opacity="0.85"/><circle cx="26" cy="7" r="2.8" fill="#94A3B8" stroke="#475569" stroke-width="0.6"/></svg>`
  },
  {
    id: 'dyson-sphere',
    name: 'Dyson Swarm Sphere',
    category: 'solar-system',
    path: '/svgs/solar-system/dyson-sphere.svg',
    tags: ['dyson sphere', 'dyson swarm', 'star harness', 'mega structure', 'solar panels', 'kardashev'],
    description: `A hypothetical megastructure that would encase an entire star to harvest its total energy output. No confirmed example exists, but some stars behave strangely enough to make astronomers wonder.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="dyson-star" cx="16" cy="16" r="6" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="50%" stop-color="#FDE047"/><stop offset="100%" stop-color="#F97316"/></radialGradient></defs><ellipse cx="16" cy="16" rx="14" ry="5" stroke="#38BDF8" stroke-width="0.8" fill="none" transform="rotate(30 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5" stroke="#00F0FF" stroke-width="0.8" fill="none" transform="rotate(-30 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5" stroke="#EC4899" stroke-width="0.8" fill="none" transform="rotate(90 16 16)"/><rect x="3" y="14" width="2" height="4" rx="0.5" fill="#38BDF8" transform="rotate(30 4 16)"/><rect x="27" y="14" width="2" height="4" rx="0.5" fill="#38BDF8" transform="rotate(30 28 16)"/><rect x="15" y="2" width="2" height="4" rx="0.5" fill="#00F0FF" transform="rotate(-30 16 4)"/><rect x="15" y="26" width="2" height="4" rx="0.5" fill="#00F0FF" transform="rotate(-30 16 28)"/><circle cx="16" cy="16" r="5" fill="url(#dyson-star)"/></svg>`
  },
  {
    id: 'hypergiant-uyscuti',
    name: 'Hypergiant UY Scuti',
    category: 'solar-system',
    path: '/svgs/solar-system/hypergiant-uyscuti.svg',
    tags: ['hypergiant', 'uy scuti', 'massive star', 'colossal', 'red star', 'supergiant'],
    description: `UY Scuti was once considered the largest known star — so vast that if placed at the Sun’s position, its surface would extend beyond Jupiter’s orbit. These rare behemoths burn briefly and brilliantly before collapsing.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="uy-core" cx="16" cy="16" r="14" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FEF08A"/><stop offset="30%" stop-color="#F97316"/><stop offset="70%" stop-color="#DC2626"/><stop offset="100%" stop-color="#450A0A"/></radialGradient></defs><circle cx="16" cy="16" r="15" fill="url(#uy-core)"/><circle cx="16" cy="16" r="15" stroke="#EF4444" stroke-width="0.8" stroke-dasharray="2 2"/><path d="M7 11c3-2 7-2 10 0s4 4 2 7-6 4-9 2" stroke="#FDE047" stroke-width="0.8" opacity="0.6"/><path d="M14 20c3 1 7 0 9-2" stroke="#FEF2F2" stroke-width="0.8" opacity="0.5"/><circle cx="27" cy="27" r="1" fill="#FFFFFF" opacity="0.8"/></svg>`
  },
  {
    id: 'binary-star-system',
    name: 'Binary Star System',
    category: 'solar-system',
    path: '/svgs/solar-system/binary-star-system.svg',
    tags: ['binary star', 'twin stars', 'barycenter', 'stellar orbit', 'gravitational lock'],
    description: `More than half of all stars in the Milky Way have a companion, locked in a gravitational waltz around a shared centre of mass. Binary systems can exchange mass, trigger nova explosions, and eventually merge.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="star-a" cx="10" cy="16" r="6" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="60%" stop-color="#38BDF8"/><stop offset="100%" stop-color="#1E3A8A"/></radialGradient><radialGradient id="star-b" cx="22" cy="16" r="4.5" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="60%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#78350F"/></radialGradient></defs><ellipse cx="16" cy="16" rx="13" ry="6" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2" fill="none" transform="rotate(-15 16 16)"/><circle cx="10" cy="16" r="6.5" fill="url(#star-a)"/><circle cx="22" cy="16" r="4.5" fill="url(#star-b)"/><line x1="10" y1="16" x2="22" y2="16" stroke="#FFFFFF" stroke-width="0.6" stroke-dasharray="1 1" opacity="0.5"/><circle cx="16" cy="16" r="1" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'solar-prominence',
    name: 'Solar Prominence Arc',
    category: 'solar-system',
    path: '/svgs/solar-system/solar-prominence.svg',
    tags: ['prominence', 'solar flare', 'coronal loop', 'plasma loop', 'magnetic field', 'sun'],
    description: `Colossal arcs of superheated plasma erupting from the Sun’s chromosphere, guided by magnetic field lines. A single solar prominence can span hundreds of thousands of kilometres — large enough to swallow Earth many times over.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="prom-sun" cx="16" cy="28" r="14" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFF5C0"/><stop offset="50%" stop-color="#F97316"/><stop offset="100%" stop-color="#991B1B"/></radialGradient></defs><path d="M2 30A14 14 0 0 1 30 30" fill="url(#prom-sun)"/><path d="M8 24C8 10 24 10 24 24" stroke="#FDE047" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M8 24C8 10 24 10 24 24" stroke="#EF4444" stroke-width="1.2" stroke-linecap="round" fill="none"/><path d="M12 24C12 14 20 14 20 24" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.75"/></svg>`
  },
  {
    id: 'planet-eris',
    name: 'Dwarf Planet Eris',
    category: 'solar-system',
    path: '/svgs/solar-system/planet-eris.svg',
    tags: ['eris', 'dysnomia', 'dwarf planet', 'kuiper belt', 'icy planet', 'scattered disc'],
    description: `The most massive dwarf planet known, Eris lives in the scattered disc far beyond Pluto. Its discovery in 2005 sparked the debate that ultimately reclassified Pluto, reshaping our definition of the solar system.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="eris-grad" cx="12" cy="11" r="12" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#F8FAFC"/><stop offset="50%" stop-color="#CBD5E1"/><stop offset="85%" stop-color="#64748B"/><stop offset="100%" stop-color="#1E293B"/></radialGradient></defs><path d="M4 22A16 8 0 0 0 28 10" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="1.5 1.5" opacity="0.4"/><circle cx="15" cy="16" r="10" fill="url(#eris-grad)"/><circle cx="12" cy="12" r="2" fill="#E2E8F0" opacity="0.6"/><circle cx="18" cy="19" r="2.5" fill="#94A3B8" opacity="0.5"/><circle cx="26" cy="8" r="2" fill="#E2E8F0" stroke="#64748B" stroke-width="0.5"/></svg>`
  },

  // Deep Sky & Cosmic Phenomena (16)
  {
    id: 'spiral-galaxy',
    name: 'Spiral Galaxy',
    category: 'deep-sky',
    path: '/svgs/deep-sky/spiral-galaxy.svg',
    tags: ['galaxy', 'milky way', 'andromeda', 'spiral', 'stars', 'deep space'],
    description: `Cosmic pinwheels of billions of stars, gas, and dust, shaped by gravity and rotation over billions of years. Our own Milky Way is a barred spiral galaxy — we live roughly two-thirds of the way out from its centre.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="gal-core" cx="16" cy="16" r="6" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="40%" stop-color="#FDE047"/><stop offset="80%" stop-color="#EC4899"/><stop offset="100%" stop-color="#3B82F6" stop-opacity="0"/></radialGradient><linearGradient id="arm-cyan" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#00F0FF"/><stop offset="50%" stop-color="#A855F7"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><path d="M16 16C12 11 6 12 4 15C2 18 3 22 7 24C11 26 17 25 21 21C25 17 27 11 25 7C23 3 17 2 12 5" stroke="url(#arm-cyan)" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/><path d="M16 16C20 21 26 20 28 17C30 14 29 10 25 8C21 6 15 7 11 11C7 15 5 21 7 25C9 29 15 30 20 27" stroke="url(#arm-cyan)" stroke-width="1.8" stroke-linecap="round" opacity="0.65"/><circle cx="16" cy="16" r="7" fill="url(#gal-core)"/><circle cx="16" cy="16" r="2" fill="#FFFFFF"/><circle cx="6" cy="7" r="0.8" fill="#F0F9FF"/><circle cx="26" cy="24" r="0.7" fill="#F0F9FF"/></svg>`
  },
  {
    id: 'elliptical-galaxy',
    name: 'Elliptical Galaxy',
    category: 'deep-sky',
    path: '/svgs/deep-sky/elliptical-galaxy.svg',
    tags: ['elliptical galaxy', 'galaxy', 'cluster', 'golden', 'stars', 'halo'],
    description: `Ancient, football-shaped galaxies containing trillions of old red and yellow stars but little gas for new star formation. They are often the result of galactic mergers — the aftermath of cosmic collisions.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="ell-gal-core" cx="16" cy="16" r="12" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="35%" stop-color="#FDE047"/><stop offset="70%" stop-color="#CA8A04"/><stop offset="100%" stop-color="#1E1B4B" stop-opacity="0"/></radialGradient></defs><ellipse cx="16" cy="16" rx="14" ry="8" fill="url(#ell-gal-core)" transform="rotate(-25 16 16)" opacity="0.8"/><ellipse cx="16" cy="16" rx="10" ry="5.5" stroke="#FEF08A" stroke-width="0.8" fill="none" opacity="0.6" transform="rotate(-25 16 16)"/><circle cx="16" cy="16" r="3.5" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'sombrero-galaxy',
    name: 'Sombrero Galaxy M104',
    category: 'deep-sky',
    path: '/svgs/deep-sky/sombrero-galaxy.svg',
    tags: ['sombrero galaxy', 'm104', 'dust lane', 'galaxy', 'bulge', 'halo'],
    description: `Messier 104 floats 28 million light-years away, its brilliant central bulge and dark dust lane giving it the unmistakable silhouette of a hat. It may host the most massive black hole within our local supercluster.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="sombrero-core" cx="16" cy="14" r="8" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="40%" stop-color="#FDE047"/><stop offset="100%" stop-color="#78350F" stop-opacity="0"/></radialGradient></defs><ellipse cx="16" cy="15" rx="8" ry="7" fill="url(#sombrero-core)"/><ellipse cx="16" cy="17" rx="14" ry="4" fill="#FEF08A" opacity="0.6"/><ellipse cx="16" cy="18" rx="14" ry="2" fill="#1E293B" stroke="#0F172A" stroke-width="0.8"/><circle cx="16" cy="15" r="2.5" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'black-hole',
    name: 'Black Hole',
    category: 'deep-sky',
    path: '/svgs/deep-sky/black-hole.svg',
    tags: ['black hole', 'event horizon', 'accretion disk', 'singularity', 'gravity', 'jet'],
    description: `A region of spacetime where gravity is so extreme that nothing — not even light — can escape. At the centre lies a singularity of infinite density, surrounded by an event horizon that marks the point of no return.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="disk-grad" x1="2" y1="16" x2="30" y2="16" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FF3366"/><stop offset="25%" stop-color="#FF9900"/><stop offset="50%" stop-color="#FFFF66"/><stop offset="75%" stop-color="#00F0FF"/><stop offset="100%" stop-color="#9933FF"/></linearGradient></defs><path d="M16 2v7M16 23v7" stroke="#00F0FF" stroke-width="1.5" stroke-linecap="round"/><path d="M16 4v4M16 24v4" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round"/><ellipse cx="16" cy="16" rx="13" ry="5.2" stroke="url(#disk-grad)" stroke-width="2.5" fill="none" opacity="0.75"/><circle cx="16" cy="16" r="6" fill="#030712"/><circle cx="16" cy="16" r="6" stroke="#FFA500" stroke-width="1.2"/><circle cx="16" cy="16" r="4.8" stroke="#FFFFFF" stroke-width="0.8" opacity="0.8"/><path d="M3 16C3 20.2 8.8 21.2 16 21.2C23.2 21.2 29 20.2 29 16" stroke="url(#disk-grad)" stroke-width="2.6"/></svg>`
  },
  {
    id: 'dark-matter-halo',
    name: 'Dark Matter Halo',
    category: 'deep-sky',
    path: '/svgs/deep-sky/dark-matter-halo.svg',
    tags: ['dark matter', 'lensing', 'gravity', 'halo', 'quantum', 'invisible'],
    description: `An invisible scaffold of unknown particles that makes up 27% of the universe’s mass-energy content. Galaxies are embedded inside dark matter halos — without them, they would fly apart and stars could never form.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M4 16C4 9 9 4 16 4" stroke="#00F0FF" stroke-width="1.8" stroke-linecap="round"/><path d="M28 16C28 23 23 28 16 28" stroke="#00F0FF" stroke-width="1.8" stroke-linecap="round"/><path d="M28 16C28 9 23 4 16 4" stroke="#A855F7" stroke-width="1.2" stroke-dasharray="2 2" stroke-linecap="round"/><path d="M4 16C4 23 9 28 16 28" stroke="#A855F7" stroke-width="1.2" stroke-dasharray="2 2" stroke-linecap="round"/><circle cx="16" cy="16" r="7" stroke="#EC4899" stroke-width="0.8" stroke-dasharray="1.5 1.5"/><circle cx="16" cy="16" r="2.5" fill="#00F0FF"/></svg>`
  },
  {
    id: 'quasar',
    name: 'Quasar Core',
    category: 'deep-sky',
    path: '/svgs/deep-sky/quasar.svg',
    tags: ['quasar', 'agn', 'luminous', 'jet', 'supermassive', 'active core'],
    description: `The brightest persistent objects in the universe — supermassive black holes actively devouring material and blasting energy across billions of light-years. The most luminous quasars outshine entire galaxies of 100 billion stars.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="quasar-beam" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#EC4899"/><stop offset="35%" stop-color="#38BDF8"/><stop offset="50%" stop-color="#FFFFFF"/><stop offset="65%" stop-color="#38BDF8"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><polygon points="16,16 11,2 21,2" fill="url(#quasar-beam)"/><polygon points="16,16 11,30 21,30" fill="url(#quasar-beam)"/><ellipse cx="16" cy="16" rx="13" ry="4" fill="#FDE047" stroke="#F59E0B" stroke-width="0.8" transform="rotate(-15 16 16)"/><circle cx="16" cy="16" r="4" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'emission-nebula',
    name: 'Emission Nebula',
    category: 'deep-sky',
    path: '/svgs/deep-sky/emission-nebula.svg',
    tags: ['nebula', 'cosmic dust', 'pink', 'purple', 'star nursery', 'gas cloud'],
    description: `Vast stellar nurseries where newborn stars flood surrounding gas clouds with ultraviolet light, causing them to glow in vivid reds and blues. These are the birthplaces of solar systems, including our own.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="neb-1" cx="12" cy="14" r="10" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#EC4899" stop-opacity="0.9"/><stop offset="60%" stop-color="#8B5CF6" stop-opacity="0.6"/><stop offset="100%" stop-color="#1E1B4B" stop-opacity="0"/></radialGradient><radialGradient id="neb-2" cx="20" cy="18" r="10" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#06B6D4" stop-opacity="0.85"/><stop offset="60%" stop-color="#3B82F6" stop-opacity="0.5"/><stop offset="100%" stop-color="#0F172A" stop-opacity="0"/></radialGradient></defs><path d="M7 16c-3-4 1-9 6-9 4 0 7 2 9 6 3-1 7 1 7 5 0 4-3 7-7 7-3 2-8 1-10-2-3 1-6-3-5-7z" fill="url(#neb-1)"/><path d="M12 20c-3-2-2-7 2-8 3 0 6 2 8 4 3-1 6 2 5 6 0 3-3 5-6 5-2 2-7 0-9-7z" fill="url(#neb-2)"/><circle cx="12" cy="14" r="1.5" fill="#FFFFFF"/><path d="M12 11v6M9 14h6" stroke="#FFFFFF" stroke-width="0.6" opacity="0.8"/><circle cx="20" cy="18" r="1.2" fill="#E0F2FE"/><circle cx="16" cy="10" r="0.9" fill="#FDE68A"/><circle cx="23" cy="12" r="0.8" fill="#F472B6"/><circle cx="9" cy="22" r="0.7" fill="#67E8F9"/></svg>`
  },
  {
    id: 'crab-nebula',
    name: 'Crab Supernova Remnant',
    category: 'deep-sky',
    path: '/svgs/deep-sky/crab-nebula.svg',
    tags: ['crab nebula', 'm1', 'supernova remnant', 'filaments', 'pulsar', 'shockwave'],
    description: `The expanding wreckage of a supernova explosion witnessed by Chinese astronomers in 1054 AD. At its core spins the Crab Pulsar — a neutron star rotating 30 times per second, powering the entire nebula.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="crab-core" cx="16" cy="16" r="10" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#38BDF8"/><stop offset="45%" stop-color="#EF4444" stop-opacity="0.8"/><stop offset="100%" stop-color="#0F172A" stop-opacity="0"/></radialGradient></defs><path d="M12 7c-4 2-8 7-6 12 2 5 8 8 13 6 5-2 9-8 7-13-2-5-9-7-14-5z" fill="url(#crab-core)"/><path d="M16 6v4M16 22v4M6 16h4M22 16h4M9 9l3 3M20 20l3 3M9 23l3-3M20 12l3-3" stroke="#F87171" stroke-width="0.8" opacity="0.7"/><circle cx="16" cy="16" r="1.8" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'planetary-nebula',
    name: 'Planetary Nebula',
    category: 'deep-sky',
    path: '/svgs/deep-sky/planetary-nebula.svg',
    tags: ['planetary nebula', 'ring nebula', 'white dwarf', 'shell', 'bipolar'],
    description: `The beautiful final breath of a Sun-like star — shells of glowing gas expelled as the star dies, lit from within by the white dwarf it left behind. Each one is unique, sculpted by magnetic fields and stellar winds.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="ring-neb" cx="16" cy="16" r="13" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#00F0FF" stop-opacity="0.9"/><stop offset="50%" stop-color="#10B981" stop-opacity="0.6"/><stop offset="85%" stop-color="#F43F5E" stop-opacity="0.8"/><stop offset="100%" stop-color="#0F172A" stop-opacity="0"/></radialGradient></defs><ellipse cx="16" cy="16" rx="13" ry="9" fill="url(#ring-neb)" transform="rotate(20 16 16)"/><ellipse cx="16" cy="16" rx="10" ry="6" stroke="#A7F3D0" stroke-width="1" fill="none" transform="rotate(20 16 16)"/><circle cx="16" cy="16" r="1.8" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'supernova',
    name: 'Supernova Burst',
    category: 'deep-sky',
    path: '/svgs/deep-sky/supernova.svg',
    tags: ['supernova', 'star burst', 'explosion', 'shockwave', 'radiant', 'rays'],
    description: `One of the most energetic events in the universe — a massive star’s catastrophic collapse releases more energy in seconds than our Sun will emit in its entire 10-billion-year lifetime. Supernovae forge the heavy elements that make planets and life.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="nova-core" cx="16" cy="16" r="6" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="30%" stop-color="#FDE047"/><stop offset="70%" stop-color="#EF4444"/><stop offset="100%" stop-color="#7C3AED" stop-opacity="0"/></radialGradient></defs><circle cx="16" cy="16" r="13" stroke="#A855F7" stroke-width="1" stroke-dasharray="2 2" opacity="0.6"/><circle cx="16" cy="16" r="10" stroke="#38BDF8" stroke-width="1.2" opacity="0.7"/><path d="M16 3L16 29M3 16L29 16M6.8 6.8L25.2 25.2M6.8 25.2L25.2 6.8" stroke="#FDE047" stroke-width="1.5" stroke-linecap="round"/><path d="M16 7L16 25M7 16L25 16" stroke="#FFFFFF" stroke-width="0.8"/><circle cx="16" cy="16" r="7" fill="url(#nova-core)"/><polygon points="16,10 18,14 22,16 18,18 16,22 14,18 10,16 14,14" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'pulsar-neutron',
    name: 'Pulsar Neutron Star',
    category: 'deep-sky',
    path: '/svgs/deep-sky/pulsar-neutron.svg',
    tags: ['pulsar', 'neutron star', 'magnetic', 'beam', 'energy', 'cyan', 'rotation'],
    description: `A rapidly rotating neutron star emitting focused beams of electromagnetic radiation like a cosmic lighthouse. Pulsars are so precise they were briefly mistaken for alien signals when first discovered in 1967.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="beam-grad" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#00F0FF"/><stop offset="35%" stop-color="#3B82F6"/><stop offset="50%" stop-color="#FFFFFF"/><stop offset="65%" stop-color="#3B82F6"/><stop offset="100%" stop-color="#00F0FF"/></linearGradient></defs><polygon points="16,16 12,2 20,2" fill="url(#beam-grad)" opacity="0.8"/><polygon points="16,16 12,30 20,30" fill="url(#beam-grad)" opacity="0.8"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#A855F7" stroke-width="1" fill="none" opacity="0.6" transform="rotate(30 16 16)"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#EC4899" stroke-width="1" fill="none" opacity="0.6" transform="rotate(-30 16 16)"/><circle cx="16" cy="16" r="4.5" fill="#38BDF8"/><circle cx="16" cy="16" r="3" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'wormhole',
    name: 'Wormhole Spacetime',
    category: 'deep-sky',
    path: '/svgs/deep-sky/wormhole.svg',
    tags: ['wormhole', 'portal', 'spacetime', 'einstein rosen', 'vortex', 'funnel'],
    description: `A theoretical tunnel through spacetime connecting two distant regions of the universe — or even different universes. Predicted by Einstein’s field equations, no wormhole has ever been observed, but the mathematics says they could exist.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="wh-core" cx="16" cy="16" r="12" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#030712"/><stop offset="40%" stop-color="#1E1B4B"/><stop offset="75%" stop-color="#8B5CF6"/><stop offset="100%" stop-color="#00F0FF"/></radialGradient></defs><ellipse cx="16" cy="16" rx="13" ry="8" stroke="#00F0FF" stroke-width="1" opacity="0.4"/><ellipse cx="16" cy="16" rx="10" ry="6" stroke="#A855F7" stroke-width="1.2" opacity="0.6"/><ellipse cx="16" cy="16" rx="7" ry="4" stroke="#EC4899" stroke-width="1.5" opacity="0.8"/><ellipse cx="16" cy="16" rx="4" ry="2.2" stroke="#FFFFFF" stroke-width="1.8"/><path d="M3 16C7 16 12 16 16 16M29 16C25 16 20 16 16 16M16 8C16 11 16 13 16 16M16 24C16 21 16 19 16 16" stroke="#A855F7" stroke-width="0.8" opacity="0.5"/><circle cx="16" cy="16" r="2" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'cosmic-string',
    name: 'Cosmic String Filament',
    category: 'deep-sky',
    path: '/svgs/deep-sky/cosmic-string.svg',
    tags: ['cosmic string', 'topological defect', 'spacetime', 'cyan', 'laser line'],
    description: `Hypothetical one-dimensional topological defects from the early universe, thinner than a proton but potentially stretching across the cosmos. A cosmic string would be so dense that a centimetre of one would weigh billions of tonnes.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="string-line" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#00F0FF"/><stop offset="50%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><circle cx="16" cy="16" r="13" stroke="#8B5CF6" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.5"/><circle cx="16" cy="16" r="8" stroke="#38BDF8" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.6"/><line x1="2" y1="30" x2="30" y2="2" stroke="url(#string-line)" stroke-width="2"/><circle cx="16" cy="16" r="2.5" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'gravitational-wave',
    name: 'Gravitational Waves',
    category: 'deep-sky',
    path: '/svgs/deep-sky/gravitational-wave.svg',
    tags: ['gravitational wave', 'ligo', 'spacetime ripple', 'binary merger', 'black hole'],
    description: `Ripples in the fabric of spacetime caused by accelerating massive objects such as colliding black holes or neutron stars. First directly detected in 2015 by LIGO, they travel at the speed of light and stretch space by less than a proton’s width.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="13" cy="16" r="2.5" fill="#0F172A" stroke="#00F0FF" stroke-width="1"/><circle cx="19" cy="16" r="2" fill="#0F172A" stroke="#EC4899" stroke-width="1"/><circle cx="16" cy="16" r="6" stroke="#38BDF8" stroke-width="1" opacity="0.8"/><circle cx="16" cy="16" r="9" stroke="#A855F7" stroke-width="1" opacity="0.6"/><circle cx="16" cy="16" r="12" stroke="#EC4899" stroke-width="1" opacity="0.4"/><circle cx="16" cy="16" r="14.5" stroke="#38BDF8" stroke-width="0.8" stroke-dasharray="1.5 1.5" opacity="0.3"/></svg>`
  },
  {
    id: 'ring-galaxy',
    name: 'Cosmic Ring Galaxy',
    category: 'deep-sky',
    path: '/svgs/deep-sky/ring-galaxy.svg',
    tags: ['ring galaxy', 'hoag object', 'star ring', 'nucleus', 'cosmic'],
    description: `Formed when a smaller galaxy plunges through the centre of a larger one, triggering a shockwave of star formation that expands outward in a ring. Hoag’s Object is the most famous — a perfect ring around a yellow core.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="ring-gal-core" cx="16" cy="16" r="4" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="60%" stop-color="#FDE047"/><stop offset="100%" stop-color="#CA8A04"/></radialGradient><linearGradient id="outer-ring" x1="4" y1="8" x2="28" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#38BDF8"/><stop offset="50%" stop-color="#8B5CF6"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><ellipse cx="16" cy="16" rx="12" ry="7" stroke="url(#outer-ring)" stroke-width="2.8" fill="none" transform="rotate(-15 16 16)"/><ellipse cx="16" cy="16" rx="12" ry="7" stroke="#FFFFFF" stroke-width="0.8" fill="none" opacity="0.6" transform="rotate(-15 16 16)"/><circle cx="16" cy="16" r="3.5" fill="url(#ring-gal-core)"/><circle cx="5" cy="13" r="1" fill="#E0F2FE"/><circle cx="27" cy="19" r="1.2" fill="#F472B6"/><circle cx="12" cy="22" r="0.9" fill="#A7F3D0"/></svg>`
  },
  {
    id: 'cosmic-dust-pillars',
    name: 'Pillars of Creation',
    category: 'deep-sky',
    path: '/svgs/deep-sky/cosmic-dust-pillars.svg',
    tags: ['pillars of creation', 'eagle nebula', 'hubble', 'jwst', 'dust pillars', 'star formation'],
    description: `The Pillars of Creation in the Eagle Nebula are towering columns of cool hydrogen gas and dust, eroded by stellar winds from nearby hot young stars. These iconic structures were captured by Hubble in 1995 and again by JWST in 2022.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="pillar-grad" x1="0" y1="32" x2="0" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0F172A"/><stop offset="40%" stop-color="#78350F"/><stop offset="75%" stop-color="#D97706"/><stop offset="100%" stop-color="#FDE047"/></linearGradient></defs><path d="M2 2c5 2 12-1 18 3 5 4 8 1 10 3v22H2V2z" fill="#312E81" opacity="0.4"/><path d="M6 30V16c0-2 1.5-3.5 3-3s2.5 2 2.5 4v1c1-1.5 2.5-2 4-1s2 3 2 5v8" fill="url(#pillar-grad)"/><path d="M17.5 30V12c0-2 1.5-3.5 3-3s2.5 2 2.5 4v17" fill="url(#pillar-grad)"/><path d="M23 30V19c0-1.5 1-2.5 2-2s2 1.5 2 3v10" fill="url(#pillar-grad)"/><circle cx="9" cy="12" r="1" fill="#FFFFFF"/><circle cx="20.5" cy="8.5" r="1.2" fill="#FDE047"/><circle cx="25" cy="16.5" r="0.9" fill="#67E8F9"/></svg>`
  },
  {
    id: 'jwst-deep-field',
    name: 'JWST Deep Field Cluster',
    category: 'deep-sky',
    path: '/svgs/deep-sky/jwst-deep-field.svg',
    tags: ['jwst', 'deep field', 'gravitational lens', 'infrared', 'smacs 0723', 'gold stars'],
    description: `The James Webb Space Telescope’s first deep field image unveiled thousands of galaxies in a patch of sky the size of a grain of sand held at arm’s length. Some of the light captured began its journey over 13 billion years ago.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M16 2L18.5 13.5L30 16L18.5 18.5L16 30L13.5 18.5L2 16L13.5 13.5Z" fill="#F59E0B" opacity="0.85"/><path d="M16 6L17.5 14.5L26 16L17.5 17.5L16 26L14.5 17.5L6 16L14.5 14.5Z" fill="#FEF08A"/><path d="M6 22C12 18 20 18 26 22" stroke="#EC4899" stroke-width="1.2" fill="none" opacity="0.7"/><path d="M8 8C14 12 18 12 24 8" stroke="#38BDF8" stroke-width="1" fill="none" opacity="0.7"/><circle cx="7" cy="7" r="1.5" fill="#38BDF8"/><circle cx="25" cy="25" r="1.5" fill="#EC4899"/></svg>`
  },
  {
    id: 'gamma-ray-burst',
    name: 'Gamma-Ray Burst (GRB)',
    category: 'deep-sky',
    path: '/svgs/deep-sky/gamma-ray-burst.svg',
    tags: ['grb', 'gamma ray burst', 'hypernova', 'beams', 'relativistic', 'extreme energy'],
    description: `The most energetic explosions in the universe, releasing more energy in seconds than the Sun will emit over its entire lifetime. Thought to be caused by collapsing massive stars or merging neutron stars, they are visible across the observable universe.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><polygon points="16,16 2,4 6,16 2,28" fill="#EC4899" opacity="0.8"/><polygon points="16,16 30,4 26,16 30,28" fill="#EC4899" opacity="0.8"/><polygon points="16,16 4,7 8,16 4,25" fill="#00F0FF"/><polygon points="16,16 28,7 24,16 28,25" fill="#00F0FF"/><line x1="0" y1="16" x2="32" y2="16" stroke="#FFFFFF" stroke-width="2"/><circle cx="16" cy="16" r="4.5" fill="#FFFFFF"/><circle cx="16" cy="16" r="6" stroke="#FDE047" stroke-width="1"/></svg>`
  },
  {
    id: 'relativistic-jet',
    name: 'Relativistic Black Hole Jet',
    category: 'deep-sky',
    path: '/svgs/deep-sky/relativistic-jet.svg',
    tags: ['relativistic jet', 'accretion disk', 'quasar', 'black hole jet', 'bipolar jet'],
    description: `Twin beams of plasma shot from the poles of a black hole at nearly the speed of light, stretching for thousands of light-years. The mechanism that focuses and accelerates these jets remains one of astrophysics’ greatest mysteries.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><line x1="16" y1="2" x2="16" y2="30" stroke="#00F0FF" stroke-width="2.5" stroke-linecap="round"/><line x1="16" y1="2" x2="16" y2="30" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round"/><ellipse cx="16" cy="16" rx="13" ry="5" fill="#F59E0B" opacity="0.8" transform="rotate(-20 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#FEF08A" stroke-width="1" fill="none" transform="rotate(-20 16 16)"/><circle cx="16" cy="16" r="4" fill="#030712"/><circle cx="16" cy="16" r="4" stroke="#FFFFFF" stroke-width="0.8"/></svg>`
  },
  {
    id: 'einstein-ring',
    name: 'Einstein Gravitational Ring',
    category: 'deep-sky',
    path: '/svgs/deep-sky/einstein-ring.svg',
    tags: ['einstein ring', 'gravitational lensing', 'general relativity', 'spacetime curve', 'galaxy cluster'],
    description: `When a massive galaxy perfectly aligns with a background light source, its gravity bends the light into a complete ring around itself. Einstein predicted this effect in 1936; it is now used to map dark matter and measure cosmic distances.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="lens-core" cx="16" cy="16" r="4" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#F59E0B"/></radialGradient></defs><circle cx="16" cy="16" r="11" stroke="#00F0FF" stroke-width="2" fill="none" opacity="0.85"/><circle cx="16" cy="16" r="11" stroke="#FFFFFF" stroke-width="0.8" stroke-dasharray="4 2" fill="none"/><circle cx="16" cy="16" r="4.5" fill="url(#lens-core)"/><circle cx="5" cy="16" r="1.5" fill="#EC4899"/><circle cx="27" cy="16" r="1.5" fill="#EC4899"/></svg>`
  },
  {
    id: 'tarantula-nebula',
    name: 'Tarantula Starburst Nebula',
    category: 'deep-sky',
    path: '/svgs/deep-sky/tarantula-nebula.svg',
    tags: ['tarantula nebula', '30 doradus', 'lmc', 'starburst', 'magenta nebula', 'cluster'],
    description: `The most active star-forming region in the Local Group, located in the Large Magellanic Cloud. If it were as close as the Orion Nebula, it would cast visible shadows on Earth at night — and fill several degrees of sky.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M16 4C10 6 4 12 6 18C8 24 14 28 20 26C26 24 28 16 24 10C20 4 18 4 16 4Z" fill="#A855F7" opacity="0.4"/><path d="M12 8C8 12 8 20 14 24C20 28 26 20 22 14C18 8 14 6 12 8Z" fill="#EC4899" opacity="0.5"/><path d="M16 10L17.5 14.5L22 16L17.5 17.5L16 22L14.5 17.5L10 16L14.5 14.5Z" fill="#FFFFFF"/><circle cx="8" cy="10" r="1.2" fill="#00F0FF"/><circle cx="24" cy="22" r="1.2" fill="#FDE047"/><circle cx="24" cy="9" r="1" fill="#00F0FF"/></svg>`
  },
  {
    id: 'oort-cloud',
    name: 'Oort Cloud Comet Halo',
    category: 'deep-sky',
    path: '/svgs/deep-sky/oort-cloud.svg',
    tags: ['oort cloud', 'comet halo', 'interstellar boundary', 'solar system edge', 'particles'],
    description: `A vast, spherical shell of icy bodies surrounding the solar system at distances up to 100,000 AU from the Sun. Never directly observed, it is the source of long-period comets occasionally flung inward by gravitational nudges from passing stars.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="14" stroke="#38BDF8" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.6"/><circle cx="16" cy="16" r="9" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="1.5 2" opacity="0.4"/><circle cx="16" cy="16" r="3" fill="#FDE047"/><circle cx="4" cy="12" r="1" fill="#FFFFFF"/><circle cx="27" cy="19" r="1" fill="#FFFFFF"/><circle cx="12" cy="3" r="1" fill="#38BDF8"/><circle cx="20" cy="28" r="1" fill="#38BDF8"/><circle cx="25" cy="8" r="0.8" fill="#FFFFFF"/><circle cx="7" cy="24" r="0.8" fill="#FFFFFF"/></svg>`
  },

  // Spacecraft & Technology (16)
  {
    id: 'space-shuttle-rocket',
    name: 'Space Shuttle Rocket',
    category: 'technology',
    path: '/svgs/technology/space-shuttle-rocket.svg',
    tags: ['rocket', 'shuttle', 'launch', 'fire', 'exhaust', 'spacecraft', 'apollo', 'artemis'],
    description: `Humanity’s primary chariot to orbit — chemical rockets convert propellant into controlled explosions generating enough thrust to escape Earth’s gravity. Every rocket ever launched carries the accumulated dreams of generations who looked up and wondered.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="rocket-hull" x1="16" y1="3" x2="16" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="60%" stop-color="#E2E8F0"/><stop offset="100%" stop-color="#94A3B8"/></linearGradient><linearGradient id="rocket-fire" x1="16" y1="21" x2="16" y2="31" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="30%" stop-color="#FDE047"/><stop offset="70%" stop-color="#F97316"/><stop offset="100%" stop-color="#EF4444" stop-opacity="0"/></linearGradient></defs><polygon points="16,21 11,31 16,28 21,31" fill="url(#rocket-fire)"/><path d="M12 17L7 22V24L12 21Z" fill="#3B82F6"/><path d="M20 17L25 22V24L20 21Z" fill="#1D4ED8"/><path d="M16 3C13 8 12 14 12 21H20C20 14 19 8 16 3Z" fill="url(#rocket-hull)"/><circle cx="16" cy="12" r="2.2" fill="#0284C7"/><circle cx="16" cy="12" r="2.2" stroke="#38BDF8" stroke-width="0.8"/><circle cx="15.3" cy="11.3" r="0.7" fill="#FFFFFF"/><path d="M16 3C15 5.5 14.5 7 14.5 8H17.5C17.5 7 17 5.5 16 3Z" fill="#EF4444"/></svg>`
  },
  {
    id: 'deep-space-probe',
    name: 'Voyager Deep Space Probe',
    category: 'technology',
    path: '/svgs/technology/deep-space-probe.svg',
    tags: ['voyager', 'deep space probe', 'radio dish', 'spacecraft', 'interstellar probe', 'antenna'],
    description: `Voyager 1 became the first human-made object to enter interstellar space in 2012, carrying a golden record of Earth’s sounds and images. It now drifts over 23 billion km from home, still phoning back data.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="dish-grad" x1="5" y1="8" x2="27" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#F8FAFC"/><stop offset="70%" stop-color="#CBD5E1"/><stop offset="100%" stop-color="#64748B"/></linearGradient></defs><ellipse cx="16" cy="12" rx="11" ry="5" fill="url(#dish-grad)" stroke="#475569" stroke-width="0.8"/><ellipse cx="16" cy="12" rx="6" ry="2.5" fill="none" stroke="#94A3B8" stroke-width="0.6"/><line x1="16" y1="12" x2="16" y2="5" stroke="#38BDF8" stroke-width="1.2"/><circle cx="16" cy="4.5" r="1" fill="#F59E0B"/><polygon points="12,17 20,17 21,22 11,22" fill="#F59E0B" stroke="#B45309" stroke-width="0.8"/><line x1="11" y1="19" x2="3" y2="24" stroke="#64748B" stroke-width="1.2"/><rect x="2" y="23" width="3" height="3" rx="0.5" fill="#EF4444"/><line x1="21" y1="19" x2="29" y2="25" stroke="#94A3B8" stroke-width="0.8"/><circle cx="29" cy="25" r="1" fill="#38BDF8"/></svg>`
  },
  {
    id: 'solar-sail-probe',
    name: 'Solar Sail Craft',
    category: 'technology',
    path: '/svgs/technology/solar-sail-probe.svg',
    tags: ['solar sail', 'photon propulsion', 'diamond sail', 'interstellar', 'foil'],
    description: `A spacecraft that harnesses the gentle pressure of sunlight itself for propulsion — no fuel required. Though the force is tiny, in the vacuum of space a solar sail can accelerate continuously to astonishing speeds over time.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="sail-foil" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FEF08A"/><stop offset="50%" stop-color="#38BDF8"/><stop offset="100%" stop-color="#E2E8F0"/></linearGradient></defs><polygon points="16,3 29,16 16,29 3,16" fill="url(#sail-foil)" stroke="#38BDF8" stroke-width="0.8" opacity="0.85"/><line x1="16" y1="3" x2="16" y2="29" stroke="#475569" stroke-width="1"/><line x1="3" y1="16" x2="29" y2="16" stroke="#475569" stroke-width="1"/><rect x="14" y="14" width="4" height="4" rx="0.5" fill="#F59E0B" stroke="#B45309" stroke-width="0.8"/><circle cx="16" cy="16" r="1" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'deep-space-array',
    name: 'Radio Telescope Array',
    category: 'technology',
    path: '/svgs/technology/deep-space-array.svg',
    tags: ['radio telescope', 'vla', 'dish', 'array', 'astronomy', 'seti', 'antenna'],
    description: `Radio telescopes listen to the universe in wavelengths invisible to the human eye, revealing pulsars, quasars, and the faint echo of the Big Bang. Arrays like the VLA link dishes across continents to achieve resolutions sharper than any optical telescope.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><polygon points="12,27 20,27 22,30 10,30" fill="#64748B"/><line x1="16" y1="27" x2="16" y2="17" stroke="#94A3B8" stroke-width="2"/><path d="M4 11C8 19 24 19 28 11" fill="#E2E8F0" stroke="#475569" stroke-width="1.2"/><ellipse cx="16" cy="11" rx="12" ry="4" fill="#F8FAFC" stroke="#475569" stroke-width="0.8"/><line x1="16" y1="11" x2="16" y2="4" stroke="#38BDF8" stroke-width="1"/><circle cx="16" cy="4" r="1.2" fill="#F59E0B"/></svg>`
  },
  {
    id: 'space-tether-capsule',
    name: 'Re-entry Capsule',
    category: 'technology',
    path: '/svgs/technology/space-tether-capsule.svg',
    tags: ['capsule', 're-entry', 'parachute', 'heatshield', 'apollo', 'orion'],
    description: `The fiery return home — a re-entry capsule plunges through the atmosphere at 28,000 km/h, its heat shield ablating to protect the crew inside. Parachutes bloom in the final moments, lowering astronauts gently to Earth or ocean.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M6 10C6 4 26 4 26 10Z" fill="#F97316" stroke="#FFFFFF" stroke-width="0.8"/><path d="M11 4C11 8 13 10 13 10M19 4C19 8 19 10 19 10" stroke="#FFFFFF" stroke-width="0.8"/><line x1="6" y1="10" x2="14" y2="19" stroke="#94A3B8" stroke-width="0.7"/><line x1="26" y1="10" x2="18" y2="19" stroke="#94A3B8" stroke-width="0.7"/><polygon points="14,19 18,19 21,26 11,26" fill="#E2E8F0" stroke="#475569" stroke-width="0.9"/><path d="M10 26C14 28 18 28 22 26" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"/><circle cx="16" cy="22" r="1.2" fill="#0284C7"/></svg>`
  },
  {
    id: 'orbital-satellite',
    name: 'Orbital Satellite',
    category: 'technology',
    path: '/svgs/technology/orbital-satellite.svg',
    tags: ['satellite', 'solar panel', 'orbit', 'telecom', 'cubesat', 'payload'],
    description: `Thousands of satellites orbit Earth, forming the invisible infrastructure of modern civilisation — enabling GPS navigation, weather forecasts, global communications, and Earth observation from above the atmosphere.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="solar-panel" x1="0" y1="0" x2="10" y2="10" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1E3A8A"/><stop offset="50%" stop-color="#2563EB"/><stop offset="100%" stop-color="#3B82F6"/></linearGradient></defs><rect x="2" y="11" width="9" height="10" rx="1" fill="url(#solar-panel)" stroke="#60A5FA" stroke-width="0.8"/><line x1="2" y1="16" x2="11" y2="16" stroke="#93C5FD" stroke-width="0.6"/><line x1="6.5" y1="11" x2="6.5" y2="21" stroke="#93C5FD" stroke-width="0.6"/><rect x="21" y="11" width="9" height="10" rx="1" fill="url(#solar-panel)" stroke="#60A5FA" stroke-width="0.8"/><line x1="21" y1="16" x2="30" y2="16" stroke="#93C5FD" stroke-width="0.6"/><line x1="25.5" y1="11" x2="25.5" y2="21" stroke="#93C5FD" stroke-width="0.6"/><rect x="12" y="12" width="8" height="8" rx="1" fill="#F59E0B" stroke="#D97706" stroke-width="0.8"/><circle cx="16" cy="16" r="2" fill="#00F0FF"/><path d="M16 12V6M13 6C13 4 19 4 19 6Z" stroke="#E2E8F0" stroke-width="1.2" fill="none"/><circle cx="16" cy="4" r="1" fill="#EF4444"/></svg>`
  },
  {
    id: 'space-station',
    name: 'ISS Space Station',
    category: 'technology',
    path: '/svgs/technology/space-station.svg',
    tags: ['space station', 'iss', 'orbital lab', 'truss', 'solar grid', 'hab'],
    description: `The International Space Station has been continuously crewed since 2000, hosting over 270 people from 20 countries. A miracle of engineering orbiting 400 km overhead at 28,000 km/h, completing 16 sunrises every day.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><line x1="3" y1="16" x2="29" y2="16" stroke="#94A3B8" stroke-width="1.5"/><rect x="3" y="5" width="5" height="9" rx="0.5" fill="#1E40AF" stroke="#60A5FA" stroke-width="0.7"/><rect x="3" y="18" width="5" height="9" rx="0.5" fill="#1E40AF" stroke="#60A5FA" stroke-width="0.7"/><rect x="24" y="5" width="5" height="9" rx="0.5" fill="#1E40AF" stroke="#60A5FA" stroke-width="0.7"/><rect x="24" y="18" width="5" height="9" rx="0.5" fill="#1E40AF" stroke="#60A5FA" stroke-width="0.7"/><rect x="13" y="11" width="6" height="10" rx="1.5" fill="#E2E8F0" stroke="#475569" stroke-width="0.8"/><rect x="10" y="14" width="12" height="4" rx="1" fill="#F8FAFC" stroke="#475569" stroke-width="0.8"/><circle cx="16" cy="16" r="1.2" fill="#0284C7"/><circle cx="16" cy="16" r="1.2" stroke="#38BDF8" stroke-width="0.4"/></svg>`
  },
  {
    id: 'deep-space-habitat',
    name: 'Artificial Gravity Station',
    category: 'technology',
    path: '/svgs/technology/deep-space-habitat.svg',
    tags: ['torus station', 'habitat', 'artificial gravity', 'space station', 'spindle'],
    description: `For long-duration missions to Mars or beyond, a rotating torus station could generate artificial gravity through centripetal force. This concept remains one of humanity’s best ideas for keeping crews healthy in deep space.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="12" stroke="#E2E8F0" stroke-width="3" fill="none"/><circle cx="16" cy="16" r="12" stroke="#38BDF8" stroke-width="0.8" stroke-dasharray="2 2" fill="none"/><line x1="16" y1="4" x2="16" y2="28" stroke="#94A3B8" stroke-width="1.2"/><line x1="4" y1="16" x2="28" y2="16" stroke="#94A3B8" stroke-width="1.2"/><circle cx="16" cy="16" r="3.5" fill="#F59E0B" stroke="#475569" stroke-width="0.8"/><circle cx="16" cy="16" r="1.5" fill="#00F0FF"/></svg>`
  },
  {
    id: 'space-elevator',
    name: 'Space Elevator Climber',
    category: 'technology',
    path: '/svgs/technology/space-elevator.svg',
    tags: ['space elevator', 'nanotube tether', 'geostationary', 'climber', 'futuristic'],
    description: `A theoretical tether stretching from Earth’s equator to geostationary orbit, allowing cargo to be climbed into space without rockets. The concept awaits only a material strong enough — carbon nanotubes are the leading candidate.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M2 28C8 26 24 26 30 28" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="2" x2="16" y2="27" stroke="#00F0FF" stroke-width="1.2" stroke-dasharray="2 1"/><rect x="13" y="14" width="6" height="8" rx="1.5" fill="#E2E8F0" stroke="#475569" stroke-width="0.8"/><rect x="14" y="16" width="4" height="2" rx="0.5" fill="#0284C7"/><circle cx="16" cy="20" r="0.8" fill="#F59E0B"/><polygon points="12,2 20,2 18,5 14,5" fill="#F59E0B"/></svg>`
  },
  {
    id: 'orbiting-space-telescope',
    name: 'Hubble Telescope',
    category: 'technology',
    path: '/svgs/technology/orbiting-space-telescope.svg',
    tags: ['hubble', 'space telescope', 'orbit', 'observatory', 'aperture', 'mirror'],
    description: `The Hubble Space Telescope transformed our view of the cosmos after its 1990 launch, revealing the age of the universe, the existence of dark energy, and breathtaking views of galaxies billions of light-years away.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><rect x="11" y="7" width="10" height="18" rx="1.5" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/><rect x="12" y="5" width="8" height="2" rx="0.5" fill="#F8FAFC" stroke="#475569" stroke-width="0.8"/><path d="M12 5L7 2" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round"/><rect x="2" y="13" width="8" height="6" rx="0.5" fill="#1E40AF" stroke="#60A5FA" stroke-width="0.7"/><line x1="10" y1="16" x2="11" y2="16" stroke="#94A3B8" stroke-width="1.2"/><rect x="22" y="13" width="8" height="6" rx="0.5" fill="#1E40AF" stroke="#60A5FA" stroke-width="0.7"/><line x1="21" y1="16" x2="22" y2="16" stroke="#94A3B8" stroke-width="1.2"/></svg>`
  },
  {
    id: 'mars-rover',
    name: 'Mars Curiosity Rover',
    category: 'technology',
    path: '/svgs/technology/mars-rover.svg',
    tags: ['rover', 'mars', 'curiosity', 'perseverance', 'robot', 'mast', 'wheels'],
    description: `NASA’s Curiosity and Perseverance rovers crawl across Mars analysing rocks, drilling samples, and searching for signs of ancient microbial life. Each wheel track is humanity’s footprint on another world.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><rect x="8" y="15" width="16" height="7" rx="1.5" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/><rect x="10" y="13" width="12" height="3" rx="0.5" fill="#F59E0B"/><line x1="20" y1="13" x2="20" y2="5" stroke="#64748B" stroke-width="1.2"/><rect x="18" y="4" width="5" height="3" rx="0.8" fill="#00F0FF" stroke="#00F0FF" stroke-width="0.8"/><circle cx="19.5" cy="5.5" r="0.8" fill="#00F0FF"/><path d="M8 18L4 20L5 23" stroke="#475569" stroke-width="1.2" stroke-linecap="round" fill="none"/><circle cx="5" cy="23" r="1" fill="#F59E0B"/><circle cx="7" cy="25" r="2.2" fill="#1E293B" stroke="#94A3B8" stroke-width="0.8"/><circle cx="16" cy="25" r="2.2" fill="#1E293B" stroke="#94A3B8" stroke-width="0.8"/><circle cx="25" cy="25" r="2.2" fill="#1E293B" stroke="#94A3B8" stroke-width="0.8"/><path d="M7 25h9h9" stroke="#64748B" stroke-width="1" opacity="0.6"/></svg>`
  },
  {
    id: 'lunar-rover',
    name: 'Lunar Rover Buggy',
    category: 'technology',
    path: '/svgs/technology/lunar-rover.svg',
    tags: ['lunar rover', 'apollo buggy', 'moon vehicle', 'mesh wheels', 'antenna'],
    description: `The Apollo Lunar Roving Vehicle allowed astronauts to explore far beyond their landing sites, travelling up to 35 km across the Moon’s surface. All three are still parked on the lunar surface, perfectly preserved in the airless cold.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M6 21H26V17H10L6 21Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/><line x1="12" y1="17" x2="12" y2="10" stroke="#64748B" stroke-width="1"/><rect x="10" y="8" width="4" height="2" fill="#F59E0B"/><line x1="22" y1="17" x2="25" y2="7" stroke="#64748B" stroke-width="1.2"/><ellipse cx="26" cy="6" rx="2" ry="1" fill="#F8FAFC" stroke="#475569" stroke-width="0.6"/><circle cx="9" cy="24" r="2.5" fill="#1E293B" stroke="#38BDF8" stroke-width="0.8"/><circle cx="23" cy="24" r="2.5" fill="#1E293B" stroke="#38BDF8" stroke-width="0.8"/><circle cx="9" cy="24" r="0.8" fill="#FFFFFF"/><circle cx="23" cy="24" r="0.8" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'mars-ingenuity-drone',
    name: 'Ingenuity Mars Drone',
    category: 'technology',
    path: '/svgs/technology/mars-ingenuity-drone.svg',
    tags: ['ingenuity', 'mars drone', 'helicopter', 'rotors', 'flight', 'perseverance'],
    description: `Ingenuity became the first powered aircraft to fly on another planet in April 2021 — the Wright Brothers moment of Mars. Designed for five flights, it completed over 70 before its final landing.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><rect x="14" y="2" width="4" height="2" rx="0.5" fill="#F59E0B" stroke="#B45309" stroke-width="0.6"/><line x1="4" y1="6" x2="28" y2="6" stroke="#E2E8F0" stroke-width="1.5" stroke-linecap="round"/><line x1="4" y1="10" x2="28" y2="10" stroke="#E2E8F0" stroke-width="1.5" stroke-linecap="round"/><rect x="13" y="12" width="6" height="8" rx="1" fill="#FEF08A" stroke="#B45309" stroke-width="0.8"/><line x1="13" y1="20" x2="5" y2="28" stroke="#64748B" stroke-width="1.2"/><line x1="19" y1="20" x2="27" y2="28" stroke="#64748B" stroke-width="1.2"/><circle cx="5" cy="28" r="1" fill="#475569"/><circle cx="27" cy="28" r="1" fill="#475569"/></svg>`
  },
  {
    id: 'space-suit-backpack',
    name: 'Astronaut PLSS Backpack',
    category: 'technology',
    path: '/svgs/technology/space-suit-backpack.svg',
    tags: ['plss', 'backpack', 'eva', 'life support', 'oxygen tank', 'thruster'],
    description: `The Portable Life Support System is an astronaut’s personal spacecraft — a backpack providing oxygen, removing CO2, regulating temperature, and enabling communication during spacewalks lasting up to 8 hours.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><rect x="7" y="4" width="18" height="24" rx="4" fill="#F1F5F9" stroke="#475569" stroke-width="1.2"/><rect x="10" y="7" width="5" height="12" rx="2.5" fill="#E2E8F0" stroke="#0284C7" stroke-width="0.8"/><rect x="17" y="7" width="5" height="12" rx="2.5" fill="#E2E8F0" stroke="#0284C7" stroke-width="0.8"/><rect x="10" y="21" width="12" height="4" rx="1" fill="#334155"/><circle cx="13" cy="23" r="1" fill="#22C55E"/><circle cx="16" cy="23" r="1" fill="#FEF08A"/><circle cx="19" cy="23" r="1" fill="#EF4444"/></svg>`
  },
  {
    id: 'space-docking-port',
    name: 'Orbital Docking Mechanism',
    category: 'technology',
    path: '/svgs/technology/space-docking-port.svg',
    tags: ['docking port', 'hatch', 'airlock', 'spacecraft', 'androgynous', 'lunar gateway'],
    description: `The precision interface that allows two spacecraft travelling at 28,000 km/h to gently find and lock together in orbit. Docking ports have enabled the construction of space stations and the rescue of other spacecraft.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="13" fill="#334155" stroke="#94A3B8" stroke-width="1.2"/><circle cx="16" cy="16" r="9" fill="#0F172A" stroke="#00F0FF" stroke-width="1"/><path d="M16 3v4M16 25v4M3 16h4M25 16h4" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="16" r="4" fill="#0284C7" stroke="#38BDF8" stroke-width="0.8"/><circle cx="16" cy="16" r="1.5" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'space-laser-comm',
    name: 'Laser Space Communication',
    category: 'technology',
    path: '/svgs/technology/space-laser-comm.svg',
    tags: ['laser comm', 'optical link', 'deep space network', 'laser beam', 'data link'],
    description: `Laser communication systems can transmit data from deep space at gigabit speeds — thousands of times faster than traditional radio links. NASA’s demonstrations heralded a new era of deep space bandwidth.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="laser-beam" x1="4" y1="28" x2="28" y2="4" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#22C55E"/><stop offset="50%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#22C55E"/></linearGradient></defs><rect x="3" y="21" width="8" height="8" rx="1.5" fill="#1E293B" stroke="#22C55E" stroke-width="0.8"/><circle cx="7" cy="25" r="2" fill="#22C55E"/><rect x="21" y="3" width="8" height="8" rx="1.5" fill="#1E293B" stroke="#22C55E" stroke-width="0.8"/><circle cx="25" cy="7" r="2" fill="#22C55E"/><line x1="7" y1="25" x2="25" y2="7" stroke="url(#laser-beam)" stroke-width="2"/><circle cx="16" cy="16" r="3" fill="#22C55E" opacity="0.5"/></svg>`
  },
  {
    id: 'jwst-mirror',
    name: 'JWST Gold Mirror Array',
    category: 'technology',
    path: '/svgs/technology/jwst-mirror.svg',
    tags: ['jwst', 'gold mirror', 'hexagonal', 'beryllium', 'webb telescope', 'optics'],
    description: `The JWST’s 6.5-metre primary mirror is composed of 18 gold-coated beryllium hexagons, tuned to nanometre precision. It observes in infrared, peering through cosmic dust to see the universe’s first galaxies forming just after the Big Bang.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><polygon points="16,3 22,6.5 22,13.5 16,17 10,13.5 10,6.5" fill="#F59E0B" stroke="#FEF08A" stroke-width="0.8"/><polygon points="23,7 29,10.5 29,17.5 23,21 17,17.5 17,10.5" fill="#F59E0B" stroke="#FEF08A" stroke-width="0.8"/><polygon points="9,7 15,10.5 15,17.5 9,21 3,17.5 3,10.5" fill="#F59E0B" stroke="#FEF08A" stroke-width="0.8"/><polygon points="16,18 22,21.5 22,28.5 16,32 10,28.5 10,21.5" fill="#D97706" stroke="#FEF08A" stroke-width="0.8"/><circle cx="16" cy="10" r="1.5" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'habitat-ring',
    name: 'Centrifugal Habitat Station',
    category: 'technology',
    path: '/svgs/technology/habitat-ring.svg',
    tags: ['habitat ring', 'artificial gravity', 'torus station', 'stanford torus', 'space colony'],
    description: `Inspired by the Stanford Torus concept from 1975, a spinning ring habitat could house tens of thousands of people in space indefinitely. Rotation at just the right speed would simulate Earth gravity and allow normal human physiology.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="13" stroke="#CBD5E1" stroke-width="2.5" fill="none"/><circle cx="16" cy="16" r="13" stroke="#00F0FF" stroke-width="0.8" fill="none"/><circle cx="16" cy="16" r="4" fill="#1E293B" stroke="#38BDF8" stroke-width="1"/><line x1="16" y1="3" x2="16" y2="12" stroke="#64748B" stroke-width="1.2"/><line x1="16" y1="20" x2="16" y2="29" stroke="#64748B" stroke-width="1.2"/><line x1="3" y1="16" x2="12" y2="16" stroke="#64748B" stroke-width="1.2"/><line x1="20" y1="16" x2="29" y2="16" stroke="#64748B" stroke-width="1.2"/><circle cx="16" cy="16" r="1.5" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'mars-base-habitat',
    name: 'Mars Geodesic Bio-Dome',
    category: 'technology',
    path: '/svgs/technology/mars-base-habitat.svg',
    tags: ['mars base', 'bio dome', 'geodesic dome', 'colony', 'red planet', 'outpost'],
    description: `A pressurised geodesic dome on Mars would protect colonists from radiation, micrometeorites, and the planet’s thin CO2 atmosphere. Transparent panels could allow sunlight in for growing food while maintaining Earth-like pressure inside.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M2 26C8 24 24 24 30 26" stroke="#C2410C" stroke-width="1.5"/><path d="M6 24C6 14 11 8 16 8C21 8 26 14 26 24Z" fill="#0EA5E9" fill-opacity="0.3" stroke="#38BDF8" stroke-width="1.2"/><line x1="16" y1="8" x2="16" y2="24" stroke="#7DD3FC" stroke-width="0.8"/><line x1="6" y1="24" x2="26" y2="24" stroke="#7DD3FC" stroke-width="0.8"/><path d="M10 14L22 14" stroke="#7DD3FC" stroke-width="0.8"/><path d="M8 19L24 19" stroke="#7DD3FC" stroke-width="0.8"/><rect x="14" y="20" width="4" height="4" fill="#0284C7" stroke="#FFFFFF" stroke-width="0.6"/></svg>`
  },
  {
    id: 'plasma-rocket',
    name: 'Nuclear Plasma Thruster',
    category: 'technology',
    path: '/svgs/technology/plasma-rocket.svg',
    tags: ['plasma thruster', 'ion drive', 'vasimr', 'nuclear rocket', 'cyan plume', 'propulsion'],
    description: `VASIMR and other plasma drives heat propellant to millions of degrees and expel it electromagnetically, achieving far greater efficiency than chemical rockets. A plasma thruster could cut a Mars transit from 9 months to under 40 days.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><polygon points="16,2 21,12 20,20 12,20 11,12" fill="#475569" stroke="#CBD5E1" stroke-width="1"/><polygon points="12,20 20,20 23,24 9,24" fill="#1E293B" stroke="#94A3B8" stroke-width="0.8"/><polygon points="14,24 18,24 21,32 11,32" fill="#00F0FF" opacity="0.85"/><polygon points="15,24 17,24 19,32 13,32" fill="#FFFFFF"/><circle cx="16" cy="11" r="2.5" fill="#38BDF8" stroke="#FFFFFF" stroke-width="0.6"/></svg>`
  },

  // UFOs & Constellations (16)
  {
    id: 'classic-ufo',
    name: 'Classic Flying Saucer',
    category: 'mysteries',
    path: '/svgs/mysteries/classic-ufo.svg',
    tags: ['ufo', 'flying saucer', 'tractor beam', 'alien craft', 'dome', 'retro'],
    description: `The archetypal flying saucer — disc-shaped, luminous, leaving no exhaust trail. Thousands of UAP sightings have been reported by military pilots and civilians worldwide, most with no satisfying conventional explanation.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="ufo-dome" x1="16" y1="5" x2="16" y2="15" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#67E8F9"/><stop offset="60%" stop-color="#06B6D4" stop-opacity="0.8"/><stop offset="100%" stop-color="#0891B2" stop-opacity="0.5"/></linearGradient><linearGradient id="beam-light" x1="16" y1="18" x2="16" y2="31" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#22C55E" stop-opacity="0.8"/><stop offset="100%" stop-color="#15803D" stop-opacity="0"/></linearGradient></defs><polygon points="12,18 20,18 27,31 5,31" fill="url(#beam-light)"/><path d="M11 15C11 10 13 6 16 6C19 6 21 10 21 15Z" fill="url(#ufo-dome)" stroke="#A5F3FC" stroke-width="0.8"/><ellipse cx="16" cy="11" rx="2" ry="2" fill="#22C55E" opacity="0.9"/><ellipse cx="16" cy="16" rx="13" ry="3.5" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/><path d="M3 16C3 18.5 8.8 20.5 16 20.5C23.2 20.5 29 18.5 29 16" fill="#64748B"/><circle cx="8" cy="18" r="1" fill="#FEF08A"/><circle cx="13" cy="19.2" r="1" fill="#22C55E"/><circle cx="19" cy="19.2" r="1" fill="#22C55E"/><circle cx="24" cy="18" r="1" fill="#FEF08A"/></svg>`
  },
  {
    id: 'oumuamua-interstellar',
    name: "'Oumuamua Interstellar Object",
    category: 'mysteries',
    path: '/svgs/mysteries/oumuamua-interstellar.svg',
    tags: ['oumuamua', 'interstellar visitor', 'cigar asteroid', 'scout', 'anomalous', 'tumbling'],
    description: `In 2017, ‘Oumuamua became the first confirmed interstellar object to visit our solar system — tumbling, cigar-shaped, and accelerating in ways that defied simple solar pressure. Its true nature remains one of astronomy’s greatest unsolved puzzles.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="cigar-grad" x1="4" y1="28" x2="28" y2="4" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#78350F"/><stop offset="50%" stop-color="#B45309"/><stop offset="100%" stop-color="#451A03"/></linearGradient></defs><rect x="4" y="13" width="24" height="6" rx="3" fill="url(#cigar-grad)" stroke="#F59E0B" stroke-width="0.8" transform="rotate(-35 16 16)"/><circle cx="11" cy="19" r="1" fill="#FEF08A"/><circle cx="21" cy="13" r="1.2" fill="#FEF08A"/><line x1="2" y1="28" x2="8" y2="24" stroke="#00F0FF" stroke-width="0.8" stroke-dasharray="1 1.5"/></svg>`
  },
  {
    id: 'space-tardigrade',
    name: 'Cosmic Water Bear (Tardigrade)',
    category: 'mysteries',
    path: '/svgs/mysteries/space-tardigrade.svg',
    tags: ['tardigrade', 'water bear', 'extremophile', 'cosmic voyager', 'resilient', 'vacuum survivor'],
    description: `Tardigrades can survive the vacuum of space, extreme radiation, and temperatures from near absolute zero to 150°C. These microscopic water bears have been returned alive from open-space exposure experiments aboard the ISS.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><rect x="7" y="10" width="18" height="12" rx="6" fill="#10B981" stroke="#34D399" stroke-width="1.2"/><circle cx="8" cy="16" r="3" fill="#059669" stroke="#6EE7B7" stroke-width="0.8"/><circle cx="7" cy="16" r="1" fill="#FFFFFF"/><path d="M11 22v4M15 22v4M19 22v4M23 22v4" stroke="#34D399" stroke-width="1.2" stroke-linecap="round"/><path d="M11 10V6M15 10V6M19 10V6" stroke="#34D399" stroke-width="1" stroke-linecap="round"/><circle cx="26" cy="16" r="1.5" fill="#FDE047"/></svg>`
  },
  {
    id: 'kardashev-type3',
    name: 'Kardashev Type III Grid',
    category: 'mysteries',
    path: '/svgs/mysteries/kardashev-type3.svg',
    tags: ['kardashev type 3', 'galactic grid', 'super civilization', 'energy constellation', 'dyson galaxy'],
    description: `A Type III civilisation on the Kardashev scale would harness the entire energy output of its home galaxy. Such a civilisation would be virtually indistinguishable from a natural phenomenon — and perhaps some anomalous galaxies already are.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><ellipse cx="16" cy="16" rx="13" ry="8" stroke="#00F0FF" stroke-width="0.8" stroke-dasharray="2 2" fill="none" transform="rotate(-15 16 16)"/><polygon points="16,4 26,12 22,24 10,24 6,12" stroke="#EC4899" stroke-width="0.8" fill="none"/><circle cx="16" cy="4" r="1.8" fill="#FDE047"/><circle cx="26" cy="12" r="1.8" fill="#FDE047"/><circle cx="22" cy="24" r="1.8" fill="#FDE047"/><circle cx="10" cy="24" r="1.8" fill="#FDE047"/><circle cx="6" cy="12" r="1.8" fill="#FDE047"/><circle cx="16" cy="16" r="3" fill="#FFFFFF" stroke="#00F0FF" stroke-width="1"/></svg>`
  },
  {
    id: 'quantum-foam',
    name: 'Quantum Vacuum Fluctuation',
    category: 'mysteries',
    path: '/svgs/mysteries/quantum-foam.svg',
    tags: ['quantum foam', 'vacuum fluctuation', 'virtual particle', 'quantum spacetime', 'pair creation'],
    description: `At the Planck scale — 10^-35 metres — spacetime itself is thought to bubble and froth with virtual particles popping in and out of existence. This quantum foam is the most fundamental texture of reality yet imagined.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="11" cy="16" r="6" stroke="#00F0FF" stroke-width="1.2" fill="none"/><circle cx="21" cy="16" r="6" stroke="#EC4899" stroke-width="1.2" fill="none"/><path d="M11 16h10" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="1 1"/><circle cx="11" cy="16" r="2" fill="#00F0FF"/><circle cx="21" cy="16" r="2" fill="#EC4899"/><text x="10" y="18" fill="#000" font-size="3" font-weight="bold" text-anchor="middle">-</text><text x="21" y="18" fill="#FFF" font-size="3" font-weight="bold" text-anchor="middle">+</text></svg>`
  },
  {
    id: 'multiverse-bubble',
    name: 'Multiverse Inflation Bubbles',
    category: 'mysteries',
    path: '/svgs/mysteries/multiverse-bubble.svg',
    tags: ['multiverse', 'eternal inflation', 'bubble universe', 'parallel cosmos', 'string theory'],
    description: `Eternal inflation theory suggests our universe is just one bubble in an infinite foam of bubble universes, each with potentially different physical constants. We can never observe another bubble — they are forever beyond our horizon.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="bub1" cx="12" cy="12" r="8" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#E0F2FE"/><stop offset="60%" stop-color="#0284C7"/><stop offset="100%" stop-color="#0F172A"/></radialGradient><radialGradient id="bub2" cx="22" cy="20" r="6" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FCE7F3"/><stop offset="60%" stop-color="#EC4899"/><stop offset="100%" stop-color="#4C0519"/></radialGradient></defs><circle cx="12" cy="12" r="9" fill="url(#bub1)" stroke="#7DD3FC" stroke-width="1"/><circle cx="22" cy="20" r="7" fill="url(#bub2)" stroke="#F472B6" stroke-width="1"/><circle cx="22" cy="8" r="4" fill="#10B981" opacity="0.7" stroke="#6EE7B7" stroke-width="0.8"/><circle cx="7" cy="24" r="3.5" fill="#F59E0B" opacity="0.7" stroke="#FDE047" stroke-width="0.8"/></svg>`
  },
  {
    id: 'orion-constellation',
    name: 'Orion Constellation',
    category: 'mysteries',
    path: '/svgs/mysteries/orion-constellation.svg',
    tags: ['orion', 'constellation', 'hunter', 'stars', 'bellatrix', 'betelgeuse', 'rigel'],
    description: `Orion the Hunter has guided navigators and inspired myths for tens of thousands of years. His belt stars — Alnitak, Alnilam, and Mintaka — are only aligned as seen from Earth; in reality they are hundreds of light-years apart.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="10" cy="7" r="1.4" fill="#FEF08A"/><circle cx="22" cy="6" r="1.8" fill="#F87171"/><circle cx="7" cy="14" r="1.2" fill="#BAE6FD"/><circle cx="25" cy="13" r="1.2" fill="#BAE6FD"/><circle cx="12" cy="17" r="1.4" fill="#FDE047"/><circle cx="16" cy="17" r="1.4" fill="#FDE047"/><circle cx="20" cy="17" r="1.4" fill="#FDE047"/><circle cx="8" cy="24" r="1.8" fill="#93C5FD"/><circle cx="24" cy="25" r="1.4" fill="#BAE6FD"/><line x1="10" y1="7" x2="22" y2="6" stroke="#475569" stroke-width="0.5" opacity="0.6"/><line x1="10" y1="7" x2="7" y2="14" stroke="#475569" stroke-width="0.5" opacity="0.6"/><line x1="22" y1="6" x2="25" y2="13" stroke="#475569" stroke-width="0.5" opacity="0.6"/><line x1="7" y1="14" x2="12" y2="17" stroke="#475569" stroke-width="0.5" opacity="0.6"/><line x1="25" y1="13" x2="20" y2="17" stroke="#475569" stroke-width="0.5" opacity="0.6"/><line x1="12" y1="17" x2="8" y2="24" stroke="#475569" stroke-width="0.5" opacity="0.6"/><line x1="20" y1="17" x2="24" y2="25" stroke="#475569" stroke-width="0.5" opacity="0.6"/><circle cx="16" cy="22" r="0.8" fill="#A5F3FC" opacity="0.8"/></svg>`
  },
  {
    id: 'alien-radio-signal',
    name: 'Alien Radio Signal (WOW!)',
    category: 'mysteries',
    path: '/svgs/mysteries/alien-radio-signal.svg',
    tags: ['wow signal', 'seti', 'alien transmission', 'radio wave', 'extraterrestrial', 'contact'],
    description: `On 15 August 1977, the Big Ear radio telescope recorded a 72-second signal so striking that astronomer Jerry Ehman circled it and wrote Wow! in the margin. It has never been detected again, and its origin remains unknown.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M2 16 Q5 10 8 16 Q11 22 14 16 Q17 10 20 16 Q23 22 26 16 Q29 10 30 16" stroke="#22C55E" stroke-width="1.5" fill="none"/><path d="M2 16 Q5 12 8 16 Q11 20 14 16 Q17 12 20 16 Q23 20 26 16 Q29 12 30 16" stroke="#00F0FF" stroke-width="0.6" fill="none" opacity="0.5"/><circle cx="16" cy="16" r="3" fill="none" stroke="#22C55E" stroke-width="1" stroke-dasharray="1 1"/><circle cx="16" cy="16" r="1.2" fill="#22C55E"/><line x1="16" y1="4" x2="16" y2="7" stroke="#22C55E" stroke-width="1.2"/><line x1="16" y1="25" x2="16" y2="28" stroke="#22C55E" stroke-width="1.2"/></svg>`
  },
  {
    id: 'dark-energy-expansion',
    name: 'Dark Energy Universe Expansion',
    category: 'mysteries',
    path: '/svgs/mysteries/dark-energy-expansion.svg',
    tags: ['dark energy', 'universe expansion', 'accelerating cosmos', 'lambda', 'cosmological constant'],
    description: `In 1998, astronomers discovered the universe’s expansion is not slowing down — it is accelerating, driven by a mysterious force called dark energy that comprises 68% of all energy in existence. Nobody knows what it is.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="5" fill="none" stroke="#7C3AED" stroke-width="1"/><circle cx="16" cy="16" r="9" fill="none" stroke="#7C3AED" stroke-width="0.6" opacity="0.6"/><circle cx="16" cy="16" r="13" fill="none" stroke="#7C3AED" stroke-width="0.4" opacity="0.3"/><line x1="16" y1="3" x2="16" y2="7" stroke="#A78BFA" stroke-width="1.2"/><line x1="16" y1="25" x2="16" y2="29" stroke="#A78BFA" stroke-width="1.2"/><line x1="3" y1="16" x2="7" y2="16" stroke="#A78BFA" stroke-width="1.2"/><line x1="25" y1="16" x2="29" y2="16" stroke="#A78BFA" stroke-width="1.2"/><line x1="6" y1="6" x2="9" y2="9" stroke="#A78BFA" stroke-width="1"/><line x1="26" y1="6" x2="23" y2="9" stroke="#A78BFA" stroke-width="1"/><line x1="6" y1="26" x2="9" y2="23" stroke="#A78BFA" stroke-width="1"/><line x1="26" y1="26" x2="23" y2="23" stroke="#A78BFA" stroke-width="1"/><circle cx="16" cy="16" r="2" fill="#7C3AED"/></svg>`
  },
  {
    id: 'fermi-paradox',
    name: 'Fermi Paradox — The Great Silence',
    category: 'mysteries',
    path: '/svgs/mysteries/fermi-paradox.svg',
    tags: ['fermi paradox', 'great silence', 'lone signal', 'where is everybody', 'drake equation', 'seti'],
    description: `The universe is vast and ancient, yet we detect no signs of alien civilisations. Enrico Fermi’s famous question — Where is everybody? — remains unanswered. The silence of the cosmos is either deeply reassuring or profoundly terrifying.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="13" fill="none" stroke="#1E293B" stroke-width="0.5"/><circle cx="6" cy="8" r="0.8" fill="#FDE047" opacity="0.5"/><circle cx="25" cy="5" r="0.6" fill="#BAE6FD" opacity="0.4"/><circle cx="28" cy="20" r="0.7" fill="#FDE047" opacity="0.3"/><circle cx="4" cy="24" r="0.6" fill="#F9A8D4" opacity="0.4"/><circle cx="22" cy="28" r="0.5" fill="#BAE6FD" opacity="0.3"/><circle cx="16" cy="16" r="2.5" fill="#22C55E" stroke="#86EFAC" stroke-width="0.8"/><path d="M16 13.5V10" stroke="#22C55E" stroke-width="0.8" stroke-dasharray="1 1"/><path d="M18.5 14.5L22 11" stroke="#22C55E" stroke-width="0.8" stroke-dasharray="1 1"/><path d="M13.5 14.5L10 11" stroke="#22C55E" stroke-width="0.8" stroke-dasharray="1 1"/></svg>`
  },
  {
    id: 'cosmic-web',
    name: 'Large-Scale Cosmic Web',
    category: 'mysteries',
    path: '/svgs/mysteries/cosmic-web.svg',
    tags: ['cosmic web', 'large scale structure', 'filaments', 'voids', 'galaxy clusters', 'dark matter'],
    description: `The largest known structure in the universe is a web of galaxy filaments and vast empty voids stretching across hundreds of millions of light-years. The cosmic web resembles, eerily, the neural network of a human brain.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="4" cy="4" r="1.5" fill="#A78BFA"/><circle cx="16" cy="3" r="1.2" fill="#818CF8"/><circle cx="28" cy="6" r="1.5" fill="#A78BFA"/><circle cx="3" cy="16" r="1.2" fill="#818CF8"/><circle cx="16" cy="16" r="2" fill="#E879F9"/><circle cx="29" cy="17" r="1.2" fill="#818CF8"/><circle cx="6" cy="27" r="1.5" fill="#A78BFA"/><circle cx="18" cy="28" r="1.2" fill="#818CF8"/><circle cx="27" cy="26" r="1.5" fill="#A78BFA"/><circle cx="10" cy="11" r="0.8" fill="#C4B5FD" opacity="0.7"/><circle cx="24" cy="10" r="0.8" fill="#C4B5FD" opacity="0.7"/><circle cx="8" cy="22" r="0.8" fill="#C4B5FD" opacity="0.7"/><circle cx="23" cy="23" r="0.8" fill="#C4B5FD" opacity="0.7"/><line x1="4" y1="4" x2="10" y2="11" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/><line x1="16" y1="3" x2="10" y2="11" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/><line x1="16" y1="3" x2="24" y2="10" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/><line x1="28" y1="6" x2="24" y2="10" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/><line x1="3" y1="16" x2="10" y2="11" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/><line x1="3" y1="16" x2="8" y2="22" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/><line x1="29" y1="17" x2="24" y2="10" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/><line x1="29" y1="17" x2="23" y2="23" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/><line x1="10" y1="11" x2="16" y2="16" stroke="#A855F7" stroke-width="0.6" opacity="0.8"/><line x1="24" y1="10" x2="16" y2="16" stroke="#A855F7" stroke-width="0.6" opacity="0.8"/><line x1="8" y1="22" x2="16" y2="16" stroke="#A855F7" stroke-width="0.6" opacity="0.8"/><line x1="23" y1="23" x2="16" y2="16" stroke="#A855F7" stroke-width="0.6" opacity="0.8"/><line x1="8" y1="22" x2="6" y2="27" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/><line x1="23" y1="23" x2="27" y2="26" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/><line x1="23" y1="23" x2="18" y2="28" stroke="#7C3AED" stroke-width="0.5" opacity="0.6"/></svg>`
  },
  {
    id: 'hawking-radiation',
    name: 'Hawking Radiation Evaporation',
    category: 'mysteries',
    path: '/svgs/mysteries/hawking-radiation.svg',
    tags: ['hawking radiation', 'black hole evaporation', 'virtual particles', 'information paradox', 'stephen hawking'],
    description: `Stephen Hawking predicted in 1974 that black holes slowly evaporate by emitting thermal radiation caused by quantum effects near the event horizon. This means even the most massive black holes will eventually vanish — given enough trillions of years.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="bh-core" cx="16" cy="16" r="6" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#000000"/><stop offset="80%" stop-color="#0F172A"/><stop offset="100%" stop-color="#7C3AED"/></radialGradient></defs><circle cx="16" cy="16" r="7" fill="url(#bh-core)" stroke="#7C3AED" stroke-width="0.8"/><circle cx="16" cy="16" r="10" fill="none" stroke="#7C3AED" stroke-width="0.4" opacity="0.4"/><circle cx="7" cy="11" r="1" fill="#F472B6" opacity="0.9"/><circle cx="6" cy="13" r="0.7" fill="#00F0FF" opacity="0.7"/><circle cx="26" cy="19" r="1" fill="#00F0FF" opacity="0.9"/><circle cx="27" cy="17" r="0.7" fill="#F472B6" opacity="0.7"/><circle cx="12" cy="4" r="1" fill="#FDE047" opacity="0.8"/><circle cx="21" cy="28" r="1" fill="#FDE047" opacity="0.8"/><line x1="8" y1="11" x2="10" y2="13" stroke="#F472B6" stroke-width="0.6"/><line x1="25" y1="19" x2="23" y2="17" stroke="#00F0FF" stroke-width="0.6"/><line x1="13" y1="5" x2="14" y2="8" stroke="#FDE047" stroke-width="0.6"/><line x1="20" y1="27" x2="19" y2="24" stroke="#FDE047" stroke-width="0.6"/></svg>`
  },
  {
    id: 'time-dilation',
    name: 'Relativistic Time Dilation',
    category: 'mysteries',
    path: '/svgs/mysteries/time-dilation.svg',
    tags: ['time dilation', 'relativity', 'einstein', 'spacetime', 'twin paradox', 'gravitational time'],
    description: `Einstein’s relativity proved that time is not constant — it flows slower in stronger gravity and at higher speeds. An astronaut returning from a fast spaceship trip would find Earth had aged more than they had. The universe is stranger than intuition allows.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="11" fill="none" stroke="#38BDF8" stroke-width="1"/><circle cx="16" cy="16" r="1.2" fill="#38BDF8"/><line x1="16" y1="16" x2="16" y2="6" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/><line x1="16" y1="16" x2="22" y2="20" stroke="#38BDF8" stroke-width="1" stroke-linecap="round"/><path d="M16 5 Q24 8 27 16 Q24 24 16 27" stroke="#EC4899" stroke-width="1" fill="none" stroke-dasharray="2 1.5"/><path d="M16 5 Q8 8 5 16 Q8 24 16 27" stroke="#22C55E" stroke-width="1" fill="none" stroke-dasharray="2 1.5"/><circle cx="16" cy="5" r="1" fill="#FDE047"/><circle cx="27" cy="16" r="1" fill="#EC4899"/><circle cx="5" cy="16" r="1" fill="#22C55E"/></svg>`
  },
  {
    id: 'rogue-planet',
    name: 'Rogue Free-Floating Planet',
    category: 'mysteries',
    path: '/svgs/mysteries/rogue-planet.svg',
    tags: ['rogue planet', 'free floating', 'nomad planet', 'ejected', 'dark planet', 'orphan world'],
    description: `Ejected from their star systems by gravitational chaos, rogue planets wander the galaxy in eternal darkness with no sun to warm them. There may be more rogue planets than stars in the Milky Way — entire worlds drifting alone in the void.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="rogue-grad" cx="14" cy="13" r="10" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#374151"/><stop offset="60%" stop-color="#1F2937"/><stop offset="100%" stop-color="#111827"/></radialGradient></defs><circle cx="16" cy="16" r="10" fill="url(#rogue-grad)" stroke="#4B5563" stroke-width="0.8"/><ellipse cx="16" cy="16" rx="10" ry="3.5" fill="none" stroke="#6B7280" stroke-width="0.7" transform="rotate(-25 16 16)" opacity="0.6"/><circle cx="12" cy="13" r="2" fill="#374151" stroke="#4B5563" stroke-width="0.5"/><circle cx="20" cy="18" r="1.5" fill="#2D3748" stroke="#4B5563" stroke-width="0.5"/><circle cx="3" cy="6" r="0.6" fill="#F1F5F9" opacity="0.5"/><circle cx="28" cy="4" r="0.5" fill="#F1F5F9" opacity="0.4"/><circle cx="5" cy="26" r="0.5" fill="#F1F5F9" opacity="0.3"/><circle cx="29" cy="25" r="0.6" fill="#F1F5F9" opacity="0.4"/></svg>`
  },
  {
    id: 'zodiac-wheel',
    name: 'Celestial Zodiac Wheel',
    category: 'mysteries',
    path: '/svgs/mysteries/zodiac-wheel.svg',
    tags: ['zodiac', 'celestial wheel', 'astrology', 'ecliptic', 'signs', 'constellation ring'],
    description: `The twelve constellations of the zodiac mark the apparent path of the Sun through the sky over a year, used by ancient civilisations for calendar-keeping, navigation, and storytelling. The sky was humanity’s first clock.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="13" fill="none" stroke="#F59E0B" stroke-width="0.6"/><circle cx="16" cy="16" r="9" fill="none" stroke="#F59E0B" stroke-width="0.4" stroke-dasharray="1.5 1.5"/><circle cx="16" cy="16" r="3" fill="none" stroke="#FDE047" stroke-width="0.8"/><circle cx="16" cy="3" r="1.2" fill="#FDE047"/><circle cx="22.5" cy="5" r="1" fill="#F472B6"/><circle cx="29" cy="16" r="1.2" fill="#FDE047"/><circle cx="22.5" cy="27" r="1" fill="#F472B6"/><circle cx="16" cy="29" r="1.2" fill="#FDE047"/><circle cx="9.5" cy="27" r="1" fill="#F472B6"/><circle cx="3" cy="16" r="1.2" fill="#FDE047"/><circle cx="9.5" cy="5" r="1" fill="#F472B6"/><line x1="16" y1="3" x2="16" y2="13" stroke="#F59E0B" stroke-width="0.4" opacity="0.5"/><line x1="29" y1="16" x2="19" y2="16" stroke="#F59E0B" stroke-width="0.4" opacity="0.5"/><line x1="16" y1="29" x2="16" y2="19" stroke="#F59E0B" stroke-width="0.4" opacity="0.5"/><line x1="3" y1="16" x2="13" y2="16" stroke="#F59E0B" stroke-width="0.4" opacity="0.5"/><circle cx="16" cy="16" r="1.5" fill="#FDE047"/></svg>`
  },
  {
    id: 'boyajians-star',
    name: "Boyajian's Alien Megastructure Star",
    category: 'mysteries',
    path: '/svgs/mysteries/boyajians-star.svg',
    tags: ['boyajians star', 'alien megastructure', 'kic 8462852', 'tabby star', 'dyson swarm', 'unexplained dimming'],
    description: `KIC 8462852, nicknamed Tabby’s Star, dims in irregular, dramatic ways that no natural explanation fully accounts for. Alien megastructures, dust clouds, and comet swarms have all been proposed — it remains the most mysterious star in our sky.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="tabby-star" cx="16" cy="16" r="6" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFBEB"/><stop offset="50%" stop-color="#FDE047"/><stop offset="100%" stop-color="#F59E0B"/></radialGradient></defs><circle cx="16" cy="16" r="6" fill="url(#tabby-star)"/><path d="M10 10 L8 6 L12 9 Z" fill="#1E293B" opacity="0.8"/><path d="M22 8 L26 7 L24 11 Z" fill="#1E293B" opacity="0.7"/><path d="M24 22 L28 24 L25 20 Z" fill="#1E293B" opacity="0.6"/><path d="M9 21 L5 24 L8 20 Z" fill="#1E293B" opacity="0.8"/><path d="M14 7 L15 3 L17 7 Z" fill="#1E293B" opacity="0.5"/><rect x="12" y="22" width="3" height="6" rx="0.5" fill="#475569" opacity="0.7"/><rect x="17" y="23" width="2.5" height="5" rx="0.5" fill="#475569" opacity="0.6"/></svg>`
  },
  {
    id: 'cmb-radiation',
    name: 'Cosmic Microwave Background',
    category: 'mysteries',
    path: '/svgs/mysteries/cmb-radiation.svg',
    tags: ['cmb', 'cosmic microwave background', 'big bang echo', 'planck map', 'anisotropy', 'relic radiation'],
    description: `The Cosmic Microwave Background is the afterglow of the Big Bang — ancient light from 380,000 years after the universe’s birth, now stretched into microwaves by 13.8 billion years of expansion. It is the oldest light we can ever observe.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><ellipse cx="16" cy="16" rx="14" ry="9" fill="#1E293B" stroke="#334155" stroke-width="0.6"/><ellipse cx="10" cy="13" rx="4" ry="2.5" fill="#EF4444" opacity="0.5"/><ellipse cx="22" cy="18" rx="3.5" ry="2" fill="#3B82F6" opacity="0.5"/><ellipse cx="16" cy="16" rx="3" ry="2" fill="#F59E0B" opacity="0.6"/><ellipse cx="7" cy="18" rx="2.5" ry="1.5" fill="#3B82F6" opacity="0.4"/><ellipse cx="25" cy="12" rx="2" ry="1.5" fill="#EF4444" opacity="0.4"/><ellipse cx="19" cy="13" rx="2" ry="1.2" fill="#FDE047" opacity="0.4"/><ellipse cx="12" cy="18" rx="2" ry="1.2" fill="#EC4899" opacity="0.3"/><ellipse cx="16" cy="16" rx="14" ry="9" fill="none" stroke="#475569" stroke-width="0.8"/></svg>`
  },
  {
    id: 'panspermia',
    name: 'Panspermia — Seeds of Life',
    category: 'mysteries',
    path: '/svgs/mysteries/panspermia.svg',
    tags: ['panspermia', 'seeds of life', 'comet life', 'amino acid', 'interstellar biology', 'cosmic origin'],
    description: `The theory that life’s ingredients — or even living microbes — can hitchhike between planets aboard comets and asteroids, seeding the cosmos with biology. If panspermia is real, all life in the universe may share a common ancestor.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="comet-pan" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#7DD3FC"/></linearGradient></defs><ellipse cx="10" cy="10" rx="5" ry="3" fill="url(#comet-pan)" stroke="#BAE6FD" stroke-width="0.8" transform="rotate(-45 10 10)"/><path d="M13 13 Q20 16 28 12" stroke="#BAE6FD" stroke-width="0.7" fill="none" opacity="0.7"/><path d="M13 13 Q21 18 29 16" stroke="#7DD3FC" stroke-width="0.5" fill="none" opacity="0.5"/><circle cx="21" cy="22" r="3" fill="#10B981" stroke="#34D399" stroke-width="0.8"/><circle cx="21" cy="22" r="1.5" fill="#065F46" stroke="#10B981" stroke-width="0.5"/><circle cx="27" cy="18" r="1.5" fill="#10B981" stroke="#34D399" stroke-width="0.6" opacity="0.7"/><circle cx="25" cy="26" r="1.2" fill="#059669" stroke="#34D399" stroke-width="0.5" opacity="0.6"/><circle cx="8" cy="8" r="1" fill="#FFFFFF" opacity="0.8"/></svg>`
  },
  {
    id: 'spacetime-warp',
    name: 'Spacetime Curvature Warp',
    category: 'mysteries',
    path: '/svgs/mysteries/spacetime-warp.svg',
    tags: ['spacetime warp', 'gravity well', 'curvature', 'general relativity', 'mass warping', 'einstein'],
    description: `Einstein showed that mass warps the fabric of spacetime, and objects follow the curves this creates — what we call gravity. GPS satellites must correct for relativistic time dilation every day or they would drift by kilometres.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M2 8 Q16 8 30 8" stroke="#334155" stroke-width="0.5" fill="none"/><path d="M2 12 Q8 12 16 20 Q24 28 30 28" stroke="#38BDF8" stroke-width="0.6" fill="none" opacity="0.7"/><path d="M2 10 Q9 10 16 17 Q23 24 30 24" stroke="#38BDF8" stroke-width="0.7" fill="none" opacity="0.8"/><path d="M2 8 Q10 8 16 14 Q22 20 30 20" stroke="#7DD3FC" stroke-width="0.5" fill="none"/><path d="M2 6 Q12 6 16 11 Q20 16 30 16" stroke="#38BDF8" stroke-width="0.5" fill="none" opacity="0.6"/><path d="M8 2 Q8 10 16 16" stroke="#334155" stroke-width="0.5" fill="none"/><path d="M14 2 Q14 8 16 14" stroke="#334155" stroke-width="0.5" fill="none"/><path d="M20 2 Q20 6 18 12" stroke="#334155" stroke-width="0.5" fill="none"/><path d="M26 2 Q26 5 22 10" stroke="#334155" stroke-width="0.5" fill="none"/><circle cx="16" cy="16" r="4" fill="#0F172A" stroke="#7C3AED" stroke-width="1.2"/><circle cx="16" cy="16" r="2" fill="#7C3AED" opacity="0.8"/></svg>`
  },
  {
    id: 'ufo-abduction',
    name: 'UFO Abduction Beam',
    category: 'mysteries',
    path: '/svgs/mysteries/ufo-abduction.svg',
    tags: ['ufo abduction', 'tractor beam', 'alien abduction', 'levitation', 'close encounter'],
    description: `Alien abduction accounts share eerily consistent details across unconnected witnesses worldwide — a beam of light, medical examination, a sense of missing time. Whether psychological phenomenon or something stranger, these experiences shape our cultural mythology of contact.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="abduct-beam" x1="16" y1="12" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#22C55E" stop-opacity="0.9"/><stop offset="100%" stop-color="#22C55E" stop-opacity="0"/></linearGradient></defs><ellipse cx="16" cy="10" rx="11" ry="3.5" fill="#64748B" stroke="#94A3B8" stroke-width="0.8"/><path d="M12 7C12 3.5 13.5 2 16 2C18.5 2 20 3.5 20 7Z" fill="#475569" stroke="#94A3B8" stroke-width="0.7"/><circle cx="10" cy="10.5" r="0.9" fill="#22C55E"/><circle cx="14" cy="12" r="0.9" fill="#FDE047"/><circle cx="18" cy="12" r="0.9" fill="#22C55E"/><circle cx="22" cy="10.5" r="0.9" fill="#FDE047"/><polygon points="10,13 22,13 26,30 6,30" fill="url(#abduct-beam)"/><ellipse cx="16" cy="26" rx="3" ry="1.5" fill="#1E293B" stroke="#22C55E" stroke-width="0.6"/><circle cx="16" cy="24" r="2" fill="#4B5563" stroke="#6B7280" stroke-width="0.5"/></svg>`
  },
  {
    id: 'great-attractor',
    name: 'The Great Attractor',
    category: 'mysteries',
    path: '/svgs/mysteries/great-attractor.svg',
    tags: ['great attractor', 'gravity anomaly', 'laniakea', 'norma cluster', 'hidden mass', 'cosmic flow'],
    description: `Hundreds of thousands of galaxies, including our own Milky Way, are being drawn toward an immense mass concentration 250 million light-years away. We cannot see it directly — it lies obscured by our own galaxy’s dust and stars.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="attractor" cx="16" cy="16" r="12" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#F59E0B" stop-opacity="0.9"/><stop offset="30%" stop-color="#7C3AED" stop-opacity="0.4"/><stop offset="100%" stop-color="#0F172A" stop-opacity="0"/></radialGradient></defs><circle cx="16" cy="16" r="12" fill="url(#attractor)"/><circle cx="16" cy="16" r="3" fill="#FDE047" stroke="#F59E0B" stroke-width="1"/><path d="M4 4 Q10 10 14 14" stroke="#A78BFA" stroke-width="0.7" fill="none"/><path d="M28 4 Q22 10 18 14" stroke="#A78BFA" stroke-width="0.7" fill="none"/><path d="M4 28 Q10 22 14 18" stroke="#A78BFA" stroke-width="0.7" fill="none"/><path d="M28 28 Q22 22 18 18" stroke="#A78BFA" stroke-width="0.7" fill="none"/><path d="M16 3 Q16 9 16 13" stroke="#C4B5FD" stroke-width="0.7" fill="none"/><path d="M16 19 Q16 23 16 29" stroke="#C4B5FD" stroke-width="0.7" fill="none"/><path d="M3 16 Q9 16 13 16" stroke="#C4B5FD" stroke-width="0.7" fill="none"/><path d="M19 16 Q23 16 29 16" stroke="#C4B5FD" stroke-width="0.7" fill="none"/><circle cx="5" cy="5" r="1.2" fill="#818CF8"/><circle cx="27" cy="5" r="1.2" fill="#818CF8"/><circle cx="5" cy="27" r="1.2" fill="#818CF8"/><circle cx="27" cy="27" r="1.2" fill="#818CF8"/></svg>`
  },
  {
    id: 'triangle-ufo',
    name: 'Black Triangle UFO (TR-3B)',
    category: 'mysteries',
    path: '/svgs/mysteries/triangle-ufo.svg',
    tags: ["tr-3b","triangle ufo","stealth","alien tech","orb lights","antigravity"],
    description: `Unidentified black triangular craft featuring corner lights and a glowing central core have been reported across the globe since the late 20th century. Believed by many to be either secretive aerospace projects or exotic antigravity craft.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><polygon points="16,4 29,27 3,27" fill="#0F172A" stroke="#334155" stroke-width="1.2"/><polygon points="16,8 26,25 6,25" fill="#1E293B"/><circle cx="16" cy="18" r="3.5" fill="#00F0FF" stroke="#FFFFFF" stroke-width="0.8"/><circle cx="16" cy="7" r="1.5" fill="#FDE047"/><circle cx="6" cy="24" r="1.5" fill="#FDE047"/><circle cx="26" cy="24" r="1.5" fill="#FDE047"/></svg>`
  },
  {
    id: 'alien-mothership',
    name: 'Alien Mothership',
    category: 'mysteries',
    path: '/svgs/mysteries/alien-mothership.svg',
    tags: ["alien","mothership","crystal core","bio ship","green","extra terrestrial"],
    description: `The legendary flagship of alien fleets, depicted in sci-fi lore as enormous self-sustaining arks or bio-mechanical superstructures capable of carrying entire extraterrestrial civilizations across interstellar voids.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="bio-ship" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#10B981"/><stop offset="50%" stop-color="#059669"/><stop offset="100%" stop-color="#064E3B"/></linearGradient></defs><polygon points="16,3 29,17 25,27 16,23 7,27 3,17" fill="url(#bio-ship)" stroke="#34D399" stroke-width="1"/><polygon points="16,10 20,16 16,21 12,16" fill="#F43F5E" stroke="#FDA4AF" stroke-width="0.8"/><polygon points="16,12 18,16 16,19 14,16" fill="#FFFFFF"/><line x1="16" y1="3" x2="16" y2="10" stroke="#A7F3D0" stroke-width="1"/><line x1="3" y1="17" x2="12" y2="16" stroke="#A7F3D0" stroke-width="0.8"/><line x1="29" y1="17" x2="20" y2="16" stroke="#A7F3D0" stroke-width="0.8"/><circle cx="7" cy="24" r="1.2" fill="#00F0FF"/><circle cx="25" cy="24" r="1.2" fill="#00F0FF"/></svg>`
  },
  {
    id: 'crop-circle-pattern',
    name: 'Sacred Geometry Crop Circle',
    category: 'mysteries',
    path: '/svgs/mysteries/crop-circle-pattern.svg',
    tags: ["crop circle","sacred geometry","fractal","alien sign","amber","symbol"],
    description: `Intricate, mathematically precise patterns flattened overnight into agricultural fields. While many are human artwork, the astounding geometric complexity and altered soil magnetism continue to intrigue mystery enthusiasts.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="16" r="13" stroke="#F59E0B" stroke-width="1.2"/><circle cx="16" cy="16" r="8" stroke="#FDE047" stroke-width="1"/><circle cx="16" cy="16" r="4" fill="#F59E0B"/><circle cx="16" cy="3" r="1.8" fill="#F59E0B"/><circle cx="16" cy="29" r="1.8" fill="#F59E0B"/><circle cx="3" cy="16" r="1.8" fill="#F59E0B"/><circle cx="29" cy="16" r="1.8" fill="#F59E0B"/><polygon points="16,8 23,20 9,20" stroke="#FEF08A" stroke-width="0.8" fill="none"/><polygon points="16,24 23,12 9,12" stroke="#FEF08A" stroke-width="0.8" fill="none"/></svg>`
  },
  {
    id: 'big-dipper',
    name: 'Big Dipper (Ursa Major)',
    category: 'mysteries',
    path: '/svgs/mysteries/big-dipper.svg',
    tags: ["big dipper","ursa major","constellation","stars","plow","sky map"],
    description: `One of the most recognizable star patterns in the northern night sky. Part of the constellation Ursa Major (the Great Bear), its pointer stars Dubhe and Merak have guided navigators toward Polaris for millennia.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><polyline points="4,7 8,11 13,13 17,16 18,22 27,24 26,17 17,16" stroke="#38BDF8" stroke-width="0.9" stroke-dasharray="1.5 1.5" opacity="0.6"/><circle cx="4" cy="7" r="1.8" fill="#F0F9FF"/><circle cx="8" cy="11" r="1.5" fill="#F0F9FF"/><circle cx="13" cy="13" r="1.5" fill="#F0F9FF"/><circle cx="17" cy="16" r="1.8" fill="#FDE047"/><circle cx="18" cy="22" r="1.6" fill="#F0F9FF"/><circle cx="27" cy="24" r="2" fill="#FDE047"/><circle cx="26" cy="17" r="1.8" fill="#F0F9FF"/><circle cx="23" cy="7" r="0.6" fill="#94A3B8" opacity="0.5"/><circle cx="8" cy="25" r="0.6" fill="#94A3B8" opacity="0.5"/><circle cx="29" cy="12" r="0.7" fill="#94A3B8" opacity="0.5"/></svg>`
  },
  {
    id: 'cassiopeia-constellation',
    name: 'Cassiopeia (The W)',
    category: 'mysteries',
    path: '/svgs/mysteries/cassiopeia-constellation.svg',
    tags: ["cassiopeia","w constellation","queen","sky map","stars"],
    description: `A prominent W-shaped constellation of five bright stars in the northern sky, named after the vain queen of Greek mythology. Circumpolar in northern latitudes, it spins continuously around the North Star.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><polyline points="4,10 9,21 16,14 23,23 28,11" stroke="#FDE047" stroke-width="1" stroke-dasharray="2 1.5"/><circle cx="4" cy="10" r="1.8" fill="#FFFFFF"/><circle cx="9" cy="21" r="1.8" fill="#FDE047"/><circle cx="16" cy="14" r="2.2" fill="#38BDF8"/><circle cx="23" cy="23" r="1.8" fill="#FFFFFF"/><circle cx="28" cy="11" r="2" fill="#EC4899"/></svg>`
  },
  {
    id: 'scorpius-constellation',
    name: 'Scorpius & Antares',
    category: 'mysteries',
    path: '/svgs/scorpius-constellation.svg',
    tags: ["scorpius","antares","scorpion","red supergiant","constellation"],
    description: `A striking southern constellation dominated by the fiery red supergiant Antares — the 'Rival of Mars'. Scorpius curves through the bright central dust lanes of our Milky Way galaxy.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M6 7L12 12L15 17L14 23L17 27L22 28L25 25L24 21" stroke="#F472B6" stroke-width="0.8" stroke-dasharray="1.5 1.5"/><line x1="6" y1="7" x2="4" y2="4" stroke="#F472B6" stroke-width="0.8"/><line x1="6" y1="7" x2="8" y2="3" stroke="#F472B6" stroke-width="0.8"/><circle cx="12" cy="12" r="2.5" fill="#EF4444"/><circle cx="12" cy="12" r="1" fill="#FFFFFF"/><circle cx="6" cy="7" r="1.5" fill="#F0F9FF"/><circle cx="15" cy="17" r="1.5" fill="#F0F9FF"/><circle cx="17" cy="27" r="1.5" fill="#F0F9FF"/><circle cx="22" cy="28" r="1.5" fill="#F0F9FF"/><circle cx="25" cy="25" r="1.5" fill="#FDE047"/><circle cx="24" cy="21" r="1.8" fill="#38BDF8"/></svg>`
  },
  {
    id: 'shooting-star-comet',
    name: 'Halley Comet',
    category: 'mysteries',
    path: '/svgs/mysteries/shooting-star-comet.svg',
    tags: ["comet","shooting star","halley","meteor","fireball","plasma tail"],
    description: `Perhaps the most famous periodic comet in history, returning to Earth's skies every 75-76 years. Its icy nucleus sheds glowing ion and dust tails millions of kilometres long as it rounds the Sun.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="comet-tail-ion" x1="26" y1="6" x2="4" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#00F0FF"/><stop offset="40%" stop-color="#3B82F6"/><stop offset="100%" stop-color="#1E1B4B" stop-opacity="0"/></linearGradient><linearGradient id="comet-tail-dust" x1="26" y1="6" x2="8" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FEF08A"/><stop offset="50%" stop-color="#F59E0B" stop-opacity="0.8"/><stop offset="100%" stop-color="#78350F" stop-opacity="0"/></linearGradient></defs><polygon points="26,6 22,9 3,21 16,14" fill="url(#comet-tail-dust)"/><polygon points="26,6 23,4 2,26 8,28" fill="url(#comet-tail-ion)"/><circle cx="25" cy="7" r="4.5" fill="#00F0FF" opacity="0.4"/><circle cx="25" cy="7" r="3" fill="#38BDF8"/><circle cx="25" cy="7" r="1.8" fill="#FFFFFF"/><path d="M25 2v10M20 7h10" stroke="#FFFFFF" stroke-width="0.8" opacity="0.8"/></svg>`
  },
  {
    id: 'meteor-shower',
    name: 'Perseid Meteor Shower',
    category: 'mysteries',
    path: '/svgs/mysteries/meteor-shower.svg',
    tags: ["meteor shower","perseids","falling stars","fireballs","atmosphere"],
    description: `An annual celestial light show created when Earth plows through debris left by Comet Swift-Tuttle. Dozens of swift fireballs streak across the summer night sky every August.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><line x1="28" y1="4" x2="16" y2="16" stroke="#00F0FF" stroke-width="1.8" stroke-linecap="round"/><circle cx="16" cy="16" r="1" fill="#FFFFFF"/><line x1="22" y1="12" x2="8" y2="26" stroke="#FDE047" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="26" r="1" fill="#FFFFFF"/><line x1="18" y1="2" x2="6" y2="14" stroke="#EC4899" stroke-width="1.2" stroke-linecap="round"/><circle cx="6" cy="14" r="0.8" fill="#FFFFFF"/><line x1="30" y1="16" x2="18" y2="28" stroke="#38BDF8" stroke-width="1.2" stroke-linecap="round"/><circle cx="18" cy="28" r="0.8" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'asteroid-belt',
    name: 'Asteroid Belt Cluster',
    category: 'mysteries',
    path: '/svgs/mysteries/asteroid-belt.svg',
    tags: ["asteroid","meteorite","space rock","kuiper","orbit","debris"],
    description: `A vast ring of rocky and metallic planetesimals orbiting between Mars and Jupiter. Containing millions of asteroids, it represents primeval leftover building blocks from the birth of our solar system.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><linearGradient id="rock-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#94A3B8"/><stop offset="60%" stop-color="#475569"/><stop offset="100%" stop-color="#1E293B"/></linearGradient></defs><ellipse cx="16" cy="16" rx="14" ry="7" stroke="#64748B" stroke-width="0.8" stroke-dasharray="2 2" fill="none" transform="rotate(-20 16 16)" opacity="0.4"/><polygon points="12,10 18,8 22,12 20,18 14,19 9,15" fill="url(#rock-grad)" stroke="#CBD5E1" stroke-width="0.8"/><circle cx="14" cy="12" r="1.2" fill="#334155"/><circle cx="18" cy="15" r="1" fill="#334155"/><polygon points="4,18 7,16 9,19 7,22 4,21" fill="url(#rock-grad)" stroke="#94A3B8" stroke-width="0.6"/><polygon points="24,19 27,17 29,20 27,22 25,21" fill="url(#rock-grad)" stroke="#94A3B8" stroke-width="0.6"/><circle cx="22" cy="7" r="1.2" fill="#CBD5E1"/><circle cx="8" cy="8" r="0.9" fill="#94A3B8"/><circle cx="15" cy="25" r="1" fill="#94A3B8"/></svg>`
  },
  {
    id: 'alien-entity',
    name: 'Cosmic Alien Avatar',
    category: 'mysteries',
    path: '/svgs/mysteries/alien-entity.svg',
    tags: ["alien","extraterrestrial","et","grey alien","green","glowing eyes","avatar"],
    description: `The iconic classic 'Grey' extraterrestrial archetype with large black almond eyes and a bulbous cranium, popularized by decades of close encounter reports, pop culture, and speculative lore.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="alien-skin" x1="16" y1="8" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#A7F3D0"/><stop offset="50%" stop-color="#10B981"/><stop offset="100%" stop-color="#064E3B"/></radialGradient><radialGradient id="alien-eye" x1="12" y1="14" x2="12" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#38BDF8"/><stop offset="60%" stop-color="#0F172A"/><stop offset="100%" stop-color="#000000"/></radialGradient></defs><path d="M16 4C9 4 4 9 4 17C4 22 10 27 16 27C22 27 28 22 28 17C28 9 23 4 16 4Z" fill="url(#alien-skin)" stroke="#34D399" stroke-width="1.2"/><ellipse cx="11" cy="16" rx="4" ry="2.5" fill="url(#alien-eye)" stroke="#00F0FF" stroke-width="0.8" transform="rotate(-20 11 16)"/><ellipse cx="21" cy="16" rx="4" ry="2.5" fill="url(#alien-eye)" stroke="#00F0FF" stroke-width="0.8" transform="rotate(20 21 16)"/><circle cx="10" cy="15" r="1" fill="#FFFFFF"/><circle cx="22" cy="15" r="1" fill="#FFFFFF"/><circle cx="14.5" cy="21.5" r="0.4" fill="#064E3B"/><circle cx="17.5" cy="21.5" r="0.4" fill="#064E3B"/><path d="M14 23.5C15 24 17 24 18 23.5" stroke="#065F46" stroke-width="0.8" stroke-linecap="round"/></svg>`
  },
  {
    id: 'monolith-alien',
    name: '2001 Alien Monolith',
    category: 'mysteries',
    path: '/svgs/mysteries/monolith-alien.svg',
    tags: ["monolith","2001","kubrick","black slab","cosmic mystery","alignment"],
    description: `Inspired by Arthur C. Clarke and Stanley Kubrick's 2001: A Space Odyssey — a mysterious, featureless black slab left by an advanced cosmic intelligence to spark evolutionary leaps in sentinel species.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle cx="16" cy="6" r="3" fill="#F59E0B" stroke="#D97706" stroke-width="0.6"/><path d="M2 28C6 24 26 24 30 28" stroke="#64748B" stroke-width="1.2"/><rect x="13" y="8" width="6" height="18" rx="0.5" fill="#030712" stroke="#475569" stroke-width="0.8"/><line x1="13" y1="8" x2="13" y2="26" stroke="#00F0FF" stroke-width="0.8" opacity="0.8"/><circle cx="16" cy="17" r="0.8" fill="#FFFFFF" opacity="0.6"/></svg>`
  },
  {
    id: 'quantum-portal',
    name: 'Quantum Star Gate',
    category: 'mysteries',
    path: '/svgs/mysteries/quantum-portal.svg',
    tags: ["stargate","quantum portal","teleport","hexagonal","runes","portal","cyan"],
    description: `A hypothetical Einstein-Rosen bridge or star gate mechanism utilizing exotic matter to stabilize a traversable wormhole, allowing instantaneous transit across galaxies.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="portal-vortex" cx="16" cy="16" r="12" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="30%" stop-color="#00F0FF"/><stop offset="70%" stop-color="#A855F7"/><stop offset="100%" stop-color="#0F172A"/></radialGradient></defs><polygon points="16,2 28,9 28,23 16,30 4,23 4,9" fill="#1E1B4B" stroke="#00F0FF" stroke-width="1.5"/><circle cx="16" cy="16" r="10" fill="url(#portal-vortex)"/><polygon points="16,7 23,11 23,21 16,25 9,21 9,11" stroke="#FFFFFF" stroke-width="0.8" fill="none" opacity="0.7"/><circle cx="16" cy="2" r="1.5" fill="#00F0FF"/><circle cx="28" cy="9" r="1.5" fill="#A855F7"/><circle cx="28" cy="23" r="1.5" fill="#EC4899"/><circle cx="16" cy="30" r="1.5" fill="#00F0FF"/><circle cx="4" cy="23" r="1.5" fill="#A855F7"/><circle cx="4" cy="9" r="1.5" fill="#EC4899"/></svg>`
  },
  {
    id: 'alien-signal-wow',
    name: 'Wow! Signal Waveform',
    category: 'mysteries',
    path: '/svgs/mysteries/alien-signal-wow.svg',
    tags: ["wow signal","radio astronomy","seti","alien signal","waveform","frequency"],
    description: `A strong 72-second narrow-band radio signal detected by Ohio State University's Big Ear telescope in 1977 from the Sagittarius constellation, bearing all expected hallmarks of an extraterrestrial transmission.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><path d="M2 16H8L10 4L13 28L16 2L19 29L22 10L24 16H30" stroke="#00F0FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="2" y1="16" x2="30" y2="16" stroke="#334155" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="16" cy="2" r="1.5" fill="#EC4899"/><circle cx="19" cy="29" r="1.5" fill="#FDE047"/></svg>`
  },
  {
    id: 'space-time-singularity',
    name: 'Cosmic Eye Singularity',
    category: 'mysteries',
    path: '/svgs/mysteries/space-time-singularity.svg',
    tags: ["cosmic eye","god eye","helix nebula","singularity","eye","universe"],
    description: `A poetic moniker for gravitational singularities and cosmic structures like the Helix Nebula ('Eye of God'), where extreme curvature of spacetime bends light into cosmic iris formations.`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><defs><radialGradient id="eye-iris" cx="16" cy="16" r="6" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="40%" stop-color="#00F0FF"/><stop offset="75%" stop-color="#A855F7"/><stop offset="100%" stop-color="#0F172A"/></radialGradient></defs><path d="M2 16C6 8 26 8 30 16C26 24 6 24 2 16Z" fill="#1E1B4B" stroke="#38BDF8" stroke-width="1.2"/><circle cx="16" cy="16" r="7" fill="url(#eye-iris)"/><circle cx="16" cy="16" r="3" fill="#030712"/><circle cx="14.8" cy="14.8" r="1" fill="#FFFFFF"/></svg>`
  }
];
