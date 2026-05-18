# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume site for Arran Godefroy, hosted on GitHub Pages. Pure static site — no build tool, no framework, no package manager. Changes pushed to `main` deploy automatically via GitHub Pages.

## Local Development

No build step. Serve the files with any static file server:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

## Architecture

Single [index.html](index.html) with a fixed top navbar and scrollable sections. Navigation highlights active section via `IntersectionObserver` (no Bootstrap ScrollSpy).

**Sections (in order):** Hero → À propos → Expériences → Formation → Compétences → Projets → Intérêts → Diplômes & Certifications → Footer

**Key files:**
- [index.html](index.html) — entire page content; all sections live here
- [css/styles.css](css/styles.css) — all styles; dark navy + purple theme with CSS custom properties in `:root`
- [js/scripts.js](js/scripts.js) — navbar scroll effect, mobile toggle, active nav link tracking, scroll-reveal animations
- [assets/CV_alternance.pdf](assets/CV_alternance.pdf) — downloadable CV linked from the navbar

**Design system:**
- Background: `#0A0E27` (dark navy), alternating sections use `#0D1231`
- Accent: `#A855F7` (purple), gradient to `#7C3AED`
- Cards: `#131837` background, `border-radius: 0.75rem`, `.reveal` class for scroll-in animation
- Colored tags (`.tag-purple`, `.tag-blue`, `.tag-green`, etc.) used for skills and project tech stacks
- Font: Inter (Google Fonts CDN)
- Icons: Font Awesome 6.3.0 (CDN)

**Scroll-reveal:** Elements with `.card`, `.info-item`, `.interest-item`, `.award-item` get `.reveal` added by JS, then `.visible` on viewport entry.
