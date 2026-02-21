# patriciomolina.com

[![Deploy](https://github.com/pmolina/patriciomolina.com/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/pmolina/patriciomolina.com/actions)
[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-646cff?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Hosted on GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-222?logo=github&logoColor=white)](https://pages.github.com)

Personal website for [patriciomolina.com](https://patriciomolina.com) — a fast, minimal, dark-themed single-page site built with Vite and Tailwind CSS v4.

---

## Stack

| Tool | Purpose |
|---|---|
| [Vite 6](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling via `@tailwindcss/vite` plugin |
| [Inter](https://fonts.google.com/specimen/Inter) | Typography (Google Fonts) |
| [GitHub Pages](https://pages.github.com) | Hosting |
| [gh-pages](https://github.com/tschaub/gh-pages) | Deployment to `gh-pages` branch |

## Project structure

```
.
├── index.html          # Entry point
├── src/
│   └── style.css       # Tailwind import
├── public/
│   └── photo.jpg       # Profile photo
├── vite.config.js      # Vite + Tailwind plugin config
├── package.json
└── CNAME               # patriciomolina.com
```

## Development

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## Deployment

The site deploys to the `gh-pages` branch via the [gh-pages](https://github.com/tschaub/gh-pages) package:

```bash
npm run build && npx gh-pages -d dist
```

GitHub Pages is configured to serve from the `gh-pages` branch. The `CNAME` file maps the custom domain `patriciomolina.com`.
