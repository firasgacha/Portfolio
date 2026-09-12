# Firas Gacha — Portfolio

Personal site for [Firas Gacha](https://firasgacha.github.io/Portfolio/), built with React, Vite, Tailwind CSS, and daisyUI. English and French are supported.

## Requirements

- Node.js 24 (`nvm use` reads `.nvmrc`)

## Scripts

```bash
npm install
npm run dev      # http://localhost:8007/Portfolio/
npm run build
npm run preview
npm test
npm run lint
```

The production site is the Vite **build** (`dist`), not the source on `main`.

After pushing to `main`, GitHub Actions publishes `dist` to the `gh-pages` branch. Then set Pages to that branch:

1. Open [Pages settings](https://github.com/firasgacha/Portfolio/settings/pages)
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `/(root)` → Save

Alternatively set **Source** to **GitHub Actions**. Do not point Pages at `main`; that serves `/src/main.tsx` and the app 404s.

## Contact form

The contact page posts to Formspree. Override the form id with `VITE_FORMSPREE_FORM_ID` if needed.
