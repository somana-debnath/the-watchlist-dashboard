# The Watchlist — ETF Dashboard

SEG3125 Assignment 5: Bilingual Interactive Dashboard

## What it is

A small interactive dashboard comparing four Canadian-listed ETFs (VFV, XEQT, QQC, ZDJ):

- **Line chart** — normalized growth of $100 invested, over the past 12 months. Toggle
  which ETFs are shown via the watchlist checkboxes, and switch the currency between
  CAD and USD.
- **Bar chart** — management expense ratio (MER) comparison across the same four ETFs.
  Fully bilingual (English/French): axis labels, ticker names, number formatting
  (French uses a comma decimal, e.g. `0,20 %`), and the "lowest fee" callout.

Language toggle (EN/FR) is in the top-right corner. Note that per the assignment
requirement, only ONE chart (the MER bar chart) is fully translated internally; the
line chart's internal labels stay in English regardless of the selected language,
to demonstrate the "partially bilingual" requirement.

**Data note:** Prices are synthetic/illustrative (normalized index, not live market
data). MERs are approximate published figures. This is disclosed in the footer.

## Run locally

\`\`\`bash
npm install
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Deploy to Vercel

1. Push this folder to a new GitHub repo
2. Go to vercel.com -> New Project -> import the repo
3. Framework preset: Vite (auto-detected)
4. Deploy

## Tech

React + Vite, recharts for charting. No backend, no external data fetching --
all data lives in src/data.js.
