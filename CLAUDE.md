# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal website for patriciomolina.com, hosted on GitHub Pages. It uses Vite as the build tool with Tailwind CSS v4.

## Structure

- `index.html` — main entry point (Vite entry)
- `src/style.css` — Tailwind CSS import
- `vite.config.js` — Vite config with Tailwind plugin
- `package.json` — dependencies and scripts
- `CNAME` — GitHub Pages custom domain configuration (`patriciomolina.com`)
- `dist/` — production build output (gitignored)

## Stack

- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` plugin
- Google Analytics via gtag (`G-EJ2NMZ6XC8`)
- No JavaScript framework

## Commands

```bash
npm install       # install dependencies
npm run dev       # start local dev server (localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Deployment

Currently: build manually with `npm run build`, then deploy `dist/` via GitHub Pages (configure Pages to serve from `dist/` or use a GitHub Actions workflow). The `CNAME` file maps the custom domain.

## Design

- Dark background (`#0a0a0a`), off-white text, indigo accent (`#818cf8`)
- Font: Inter (Google Fonts) with system-ui fallback
- Single-page layout: Hero → About → Footer
- Social links: X (@patomolina) and LinkedIn
