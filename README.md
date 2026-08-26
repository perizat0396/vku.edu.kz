# Amanzholov University — official website

Homepage redesign for vku.edu.kz: a modern, trilingual (KZ / RU / EN) university
website built as a React + TypeScript single-page app.

## Stack

- **React 19 + TypeScript + Vite** — app shell and build tooling
- **Tailwind CSS v4** — design tokens (color, type, radii, shadows) live in
  `src/index.css` under `@theme`, so the whole visual system is defined in one
  place
- **react-i18next** — full KZ/RU/EN translations in `src/i18n/locales/*.json`;
  Kazakh is the default language, switchable via the header/footer language
  pills
- **Framer Motion** — scroll reveals, animated stat counters, header/menu
  transitions
- **lucide-react** — iconography

## Structure

```
src/
  components/
    ui/         Design-system primitives (Button, Container, PatternArt, ...)
    layout/     Header, Footer
    sections/   One file per homepage section (Hero, Stats, News, ...)
  data/         Structural, non-translated data (icons, hrefs, tones) paired
                positionally with the i18n arrays of the same name
  i18n/         i18next setup + locale JSON files
  hooks/        Shared hooks (count-up animation, etc.)
```

Section text lives entirely in the locale files, and structural data
(icons, links, color themes) lives in `src/data/content.ts` — keeping content
ready to swap for a CMS/API without touching component code.

### Photo placeholders

Real photography isn't available yet, so `PatternArt` (`src/components/ui/PatternArt.tsx`)
renders a themed gradient-mesh "campus pattern" tile with a line-art icon and
a small caption instead of a stock photo. Swap it for an `<img>` per-instance
once real photos are ready. The `Logo` component (`src/components/ui/Logo.tsx`)
is a similarly clear placeholder for the official crest — it's the one file
to update once the real logo asset is available.

## Development

```
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run lint     # oxlint
```
