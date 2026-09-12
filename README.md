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

The app is published to GitHub Pages from `main` via `.github/workflows/deploy.yml`. Do not use `gh-pages` to push `dist` onto `main`.

## Contact form

The contact page posts to Formspree. Override the form id with `VITE_FORMSPREE_FORM_ID` if needed.
