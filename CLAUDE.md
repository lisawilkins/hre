# Home Run Electric (HRE) — Website

Marketing and lead-generation site for **Home Run Electric**, a licensed electrical contractor in Western Washington.

## Business Context

- Licensed, bonded, insured electrical contractor serving Western Washington
- Logo motif: home plate + lightning bolt
- Site purpose: generate leads for residential and commercial electrical services
- Key CTA: book a job via the contact form (Cloudflare Turnstile-protected)

## Tech Stack

- **Framework:** React 19 + Vite 8 (JSX, no TypeScript)
- **Routing:** React Router v7, client-side SPA
- **Spam protection:** Cloudflare Turnstile via `@marsidev/react-turnstile`
- **Styling:** Inline styles throughout — no CSS framework. Theme values come from `src/data/themes.js`
- **Deployment:** Netlify, auto-deploy from `master` on `github.com/lisawilkins/hre`
- **SPA routing:** `public/_redirects` + `netlify.toml`

## Project Conventions

- All styling is inline — do not introduce CSS modules, Tailwind, or styled-components
- Theme tokens (colors, fonts, spacing) live in `src/data/themes.js` and are passed as a `theme` prop
- Page content and copy lives in `src/data/content.js`
- Shared UI primitives are in `src/components/ui/` — reuse before creating new ones
- One file per route in `src/pages/`

## Environment Variables

| Variable | Purpose |
|---|---|
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key. Use `1x00000000000000000000AA` for local dev (always passes). |

## Git Workflow

- Single branch: `master`
- Push to GitHub triggers Netlify auto-deploy
- `.claude/settings.local.json` is gitignored (local Claude Code permissions)
