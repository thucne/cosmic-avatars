# 🚀 Cosmic Avatars & Space SVG Icon Studio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16_App_Router-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vector_Icons-64_SVGs-00F0FF?style=for-the-badge" alt="64 Vector Icons" />
  <img src="https://img.shields.io/badge/Deterministic-FNV--1a-A855F7?style=for-the-badge" alt="FNV-1a Hashing" />
  <img src="https://img.shields.io/badge/License-MIT-green.style=for-the-badge" alt="MIT License" />
</p>

---

## 🌌 Overview

**Cosmic Avatars** is a cohesive, open-source library of **64 pixel-perfect vector space SVG icons** and a **Deterministic User Avatar Generator**. Built for modern web applications, user dashboards, gaming platforms, and developer tools, it enables instant client-side generation of millions of unique, reproducible space avatars from any seed string (username, email, or user ID).

---

## ✨ Features

- 🪐 **64 Hand-Crafted 32×32 Vector Icons**: Organized into 4 celestial categories:
  - **Solar System & Stars** (Sun, Mercury, Venus, Earth & Moon, Mars, Jupiter, Saturn, Black Holes, White Dwarfs, Pulsars)
  - **Deep Sky & Galaxies** (Spiral Galaxy, Elliptical Galaxy, Sombrero Galaxy, Quasar Core, Emission Nebula, Wormhole)
  - **Spacecraft & Tech** (Space Shuttle, Voyager Probe, Solar Sail, ISS Station, Space Elevator, Mars Rover)
  - **UFOs & Constellations** (Classic Saucer, TR-3B, Alien Mothership, Big Dipper, Orion, Monolith, Stargate)
- 🎲 **Deterministic Avatar Generator**: Uses an FNV-1a non-cryptographic hashing algorithm to map user seeds to 29.4M+ unique composite avatar combinations (Base Icon + Cosmic Palette + Orbit Accents) with zero server load.
- 🎨 **Cosmic Frame & Theme Customizer**:
  - **Frame Shapes**: Circle, Squircle, Hexagon, and Raw SVG.
  - **Theme Glows**: Dark Void, Quantum Cyan, Nebula Purple, Plasma Pink, Supernova Gold, Aurora Emerald.
  - **Size Scaling**: 16px, 20px, 28px, 32px, 64px, 96px, 128px.
- ⚡ **Multi-Format Code Exporter**:
  - **Raw SVG**: Clean, inline XML markup.
  - **React Component**: Ready-to-use TypeScript JSX snippet.
  - **Data URI**: Base64 encoded string for CSS background images.
  - **HTML `<img>`**: Ready `<img src="...">` markup.
  - **Bulk Exports**: Download all icons as a `.zip` archive or copy an SVG Sprite Sheet.
- 📱 **Mobile-First & Touch Ergonomics**: Slide-up filter bottom sheet drawer for mobile viewports, touch-friendly horizontal scroll control strips, and fluid grid card layouts down to 320px screens.
- ⌨️ **Keyboard Accessibility & ARIA**: Global `Cmd+K` / `/` search shortcut, modal focus traps, and WCAG 2.1 AA compliant ARIA roles and state semantics.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (Custom Properties, Glassmorphism, CSS Grid & Flexbox)
- **Fonts**: `Outfit`, `Inter`, `Fira Code` (via `next/font/google`)
- **Utilities**: `JSZip` for client-side bulk archiving

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/thucne/cosmic-avatars.git
cd cosmic-avatars
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Build & Typecheck

```bash
# Run TypeScript type check
npx tsc --noEmit

# Build production bundle
npm run build
```

---

## 📁 Project Architecture

```
cosmic-avatars/
├── public/
│   └── svgs/              # Raw SVG vector assets
├── src/
│   ├── app/
│   │   ├── globals.css    # Cosmic glassmorphism & responsive CSS design system
│   │   ├── layout.tsx     # Root layout with fonts & OpenGraph metadata
│   │   └── page.tsx       # Main Studio application page
│   ├── components/
│   │   ├── ControlsBar.tsx        # Search, frame shape, theme & filter drawer
│   │   ├── GeneratorStudio.tsx    # Live deterministic seed hashing card
│   │   ├── Header.tsx             # Hero title & stats banner
│   │   ├── IconGrid.tsx           # Memoized fluid grid view of vector icons
│   │   ├── IconModal.tsx          # Multi-format code export detail modal
│   │   ├── StarfieldBackground.tsx # Multi-layer animated starfield background
│   │   └── ToastContainer.tsx     # Feedback notifications manager
│   ├── data/
│   │   └── iconsData.ts   # Typed dataset for 64 space vector icons
│   └── lib/
│       ├── avatarGenerator.ts # FNV-1a hash engine & composite SVG generator
│       └── exportUtils.ts     # Single SVG, JSZip, and sprite sheet helpers
└── plans/                 # Architecture & execution plans
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
