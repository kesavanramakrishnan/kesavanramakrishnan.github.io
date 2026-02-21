# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Kesavan Ramakrishnan, deployed as a GitHub Pages site. Single-page React app with sections: Hero, About, Experience, Projects, and Contact.

## Commands

- **Dev server:** `npm run dev` (Vite with HMR)
- **Build:** `npm run build` (runs `tsc -b && vite build`, outputs to `dist/`)
- **Lint:** `npm run lint` (ESLint with TypeScript + React rules)
- **Preview production build:** `npm run preview`

## Tech Stack

- React 19 + TypeScript, bundled with Vite 7
- Tailwind CSS v4 (imported via `@import "tailwindcss"` in `src/index.css`, configured through both `tailwind.config.js` and `postcss.config.js` with `@tailwindcss/postcss`)
- Inter font loaded via Google Fonts in `index.html`

## Architecture

Single-page app with no routing. `App.tsx` composes all section components in order: Header, Hero, About, Experience, Projects, Contact, Footer. Navigation uses anchor links (`#about`, `#experience`, etc.).

Content data (experiences, projects) is defined as arrays directly within their respective component files (`Experience.tsx`, `Projects.tsx`) — there is no separate data layer.

## Design System

Custom color palette defined in `tailwind.config.js`:
- `primary`: #0D1B2A (dark navy, main background)
- `secondary`: #1B263B (slightly lighter, alternating section background)
- `accent`: #415A77 (links and highlights)
- `light`: #E0E1DD (text color, used with opacity modifiers like `text-light/80`)

## Static Assets

- Profile image: `src/assets/Profile_pic.JPG` (imported via custom type declaration in `src/images.d.ts`)
- PDFs for the MRI project (poster + paper) are in `public/` and linked directly from the Projects component
