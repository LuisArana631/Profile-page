# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build static export to /out
npm run lint     # Run ESLint
npm run deploy   # Build and push to gh-pages branch (GitHub Pages)
```

There are no tests configured in this project.

## Architecture

This is a **Next.js 14 static portfolio site** styled to look like a VS Code editor. It uses the App Router and exports a fully static site (`output: 'export'`) deployed to GitHub Pages at `https://luisarana631.github.io/Profile-page`.

**Key config:**
- `basePath: '/Profile-page'` in `next.config.mjs` — all asset paths and links must account for this base path
- Path alias `@/*` → `src/*` via `jsconfig.json`
- No TypeScript — plain JavaScript throughout

**Layout shell** (`src/app/layout.js` → `src/components/Layout.js`): Renders a VS Code-like UI shell: `Titlebar` (top) → `Sidebar` (left icon strip) → `Explorer` (file-tree panel) → `Tabsbar` (open tabs) → page content → `Bottombar` (status bar). Every page renders inside this shell.

**Content data** lives entirely in `src/constants/`: `experience.js`, `projects.js`, `skills.js`, `contact.js`, `routes.js`. Edit these files to update site content without touching page components.

**Styling**: CSS Modules per component (`src/styles/*.module.css`) plus `global.css` and `themes.css` for site-wide variables and theming. No CSS framework (no Tailwind, no styled-components).

**Deployment note**: If the `.nojekyll` file is ever deleted from the `gh-pages` branch, GitHub Pages will fail to serve `_next/` assets. Re-add it manually or it will be recreated on next `npm run deploy`.
