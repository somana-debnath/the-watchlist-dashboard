// Illustrative data for demo purposes. MERs are approximate published figures;
// price series are synthetic (normalized to a base of 100) and do not reflect
// live market prices.

export const ETFS = [
  { ticker: "VFV", usTicker: "VOO", name: "Vanguard S&P 500 Index ETF", nameFr: "FNB Indiciel Vanguard S&P 500", color: "#7FA88C" },
  { ticker: "XEQT", usTicker: "VT", name: "iShares Core Equity ETF Portfolio", nameFr: "Portefeuille FNB d'actions essentiel iShares", color: "#C9A227" },
  { ticker: "QQC", usTicker: "QQQ", name: "Invesco NASDAQ 100 Index ETF", nameFr: "FNB Indiciel Invesco NASDAQ 100", color: "#B2683D" },
  { ticker: "ZDJ", usTicker: "DIA", name: "BMO Dow Jones Industrial Average Hedged ETF", nameFr: "FNB BMO Dow Jones Industrial Average couvert", color: "#6E8FAF" },
];

export const MONTHS_EN = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
export const MONTHS_FR = ["août", "sept.", "oct.", "nov.", "déc.", "janv.", "févr.", "mars", "avr.", "mai", "juin", "juil."];

// Normalized growth index, base = 100, 12 monthly points
export const PRICE_TREND = [
  { m: 0, VFV: 100, XEQT: 100, QQC: 100, ZDJ: 100 },
  { m: 1, VFV: 102.1, XEQT: 101.4, QQC: 104.3, ZDJ: 100.8 },
  { m: 2, VFV: 99.4, XEQT: 99.8, QQC: 97.6, ZDJ: 100.2 },
  { m: 3, VFV: 103.6, XEQT: 102.5, QQC: 106.9, ZDJ: 101.9 },
  { m: 4, VFV: 106.2, XEQT: 104.7, QQC: 110.8, ZDJ: 102.6 },
  { m: 5, VFV: 104.8, XEQT: 103.9, QQC: 107.5, ZDJ: 103.4 },
  { m: 6, VFV: 108.9, XEQT: 106.8, QQC: 113.7, ZDJ: 104.8 },
  { m: 7, VFV: 111.3, XEQT: 108.5, QQC: 117.4, ZDJ: 105.1 },
  { m: 8, VFV: 109.7, XEQT: 107.6, QQC: 114.6, ZDJ: 105.9 },
  { m: 9, VFV: 113.8, XEQT: 110.2, QQC: 119.9, ZDJ: 107.2 },
  { m: 10, VFV: 116.4, XEQT: 112.6, QQC: 123.5, ZDJ: 108.4 },
  { m: 11, VFV: 118.2, XEQT: 114.1, QQC: 121.8, ZDJ: 109.6 },
];

// US-listed equivalents (VOO/S&P500, VT/global total world, QQQ/Nasdaq100, DIA/Dow Jones).
// Illustrative — tracks a similar but not identical pattern to the CAD-listed sibling.
export const PRICE_TREND_USD = [
  { m: 0, VOO: 100, VT: 100, QQQ: 100, DIA: 100 },
  { m: 1, VOO: 102.4, VT: 101.7, QQQ: 104.6, DIA: 100.9 },
  { m: 2, VOO: 99.1, VT: 99.5, QQQ: 97.9, DIA: 100.3 },
  { m: 3, VOO: 104.0, VT: 103.0, QQQ: 107.3, DIA: 102.0 },
  { m: 4, VOO: 106.8, VT: 105.5, QQQ: 111.4, DIA: 102.9 },
  { m: 5, VOO: 105.0, VT: 104.3, QQQ: 107.9, DIA: 103.6 },
  { m: 6, VOO: 109.5, VT: 107.9, QQQ: 114.3, DIA: 105.1 },
  { m: 7, VOO: 112.0, VT: 110.0, QQQ: 118.1, DIA: 105.6 },
  { m: 8, VOO: 110.1, VT: 108.7, QQQ: 115.0, DIA: 106.5 },
  { m: 9, VOO: 114.5, VT: 112.0, QQQ: 120.6, DIA: 107.9 },
  { m: 10, VOO: 117.2, VT: 114.8, QQQ: 124.3, DIA: 109.2 },
  { m: 11, VOO: 119.0, VT: 116.5, QQQ: 122.5, DIA: 110.5 },
];

// MER as a percentage
export const MER = {
  VFV: 0.09,
  XEQT: 0.20,
  QQC: 0.20,
  ZDJ: 0.25,
};

export const T = {
  en: {
    title: "The Watchlist",
    intro: "Track four ETFs' growth and fees, side by side.",
    langLabel: "Language",
    themeLabel: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    tabDashboard: "Dashboard",
    tabLearn: "Learn about the ETFs",
    chart1Title: "Growth of $100",
    chart1Sub: "Normalized price trend, past 12 months",
    currencyLabel: "Currency",
    chart2Title: "Management Expense Ratio",
    chart2Sub: "Annual fee, as a percentage of assets",
    lowestFee: "Lowest fee",
    viewLabel: "View",
    viewPercent: "% of assets",
    viewDollar: "$ per $10,000",
    watchlistLabel: "Watchlist",
    footer: "Designed by Somana Debnath, 2026",
    footerNote: "Illustrative data",
    axisMer: "MER (%)",
    axisMerDollar: "Annual fee ($)",
    axisGrowth: "Indexed value",
    indexLabel: "Index tracked",
    holdingsLabel: "Top holdings",
    learnIntro: "What each ETF actually holds, and the index it follows.",
  },
  fr: {
    title: "The Watchlist",
    intro: "Suivez la croissance et les frais de quatre FNB, côte à côte.",
    langLabel: "Langue",
    themeLabel: "Thème",
    themeLight: "Clair",
    themeDark: "Sombre",
    tabDashboard: "Tableau de bord",
    tabLearn: "En savoir plus sur les FNB",
    chart1Title: "Croissance de 100 $",
    chart1Sub: "Tendance des prix indexée, 12 derniers mois",
    currencyLabel: "Devise",
    chart2Title: "Ratio des frais de gestion",
    chart2Sub: "Frais annuels, en pourcentage de l'actif",
    lowestFee: "Frais les plus bas",
    viewLabel: "Affichage",
    viewPercent: "% de l'actif",
    viewDollar: "$ par 10 000 $",
    watchlistLabel: "Liste de suivi",
    footer: "Conçu par Somana Debnath, 2026",
    footerNote: "Données illustratives",
    axisMer: "RFG (%)",
    axisMerDollar: "Frais annuels ($)",
    axisGrowth: "Valeur indexée",
    indexLabel: "Indice suivi",
    holdingsLabel: "Principaux titres",
    learnIntro: "Ce que détient réellement chaque FNB, et l'indice qu'il suit.",
  },
};

export function formatPercent(value, lang) {
  const fixed = value.toFixed(2);
  return lang === "fr" ? fixed.replace(".", ",") + " %" : fixed + "%";
}

export function formatDollar(value, lang) {
  const fixed = value.toFixed(2);
  return lang === "fr" ? fixed.replace(".", ",") + " $" : "$" + fixed;
}

// Approximate, illustrative holdings — not live data.
export const HOLDINGS = {
  VFV: {
    index: "S&P 500 Index",
    about: "Tracks the 500 largest US companies, weighted by market value. Heavily concentrated in technology.",
    aboutFr: "Suit les 500 plus grandes sociétés américaines, pondérées par valeur boursière. Fortement concentré dans la technologie.",
    holdings: [
      { name: "Apple", pct: 7.1 },
      { name: "Microsoft", pct: 6.5 },
      { name: "Nvidia", pct: 6.0 },
      { name: "Amazon", pct: 3.8 },
      { name: "Meta Platforms", pct: 2.5 },
      { name: "Alphabet (Class A)", pct: 2.0 },
      { name: "Alphabet (Class C)", pct: 1.8 },
      { name: "Broadcom", pct: 1.7 },
      { name: "Berkshire Hathaway", pct: 1.6 },
      { name: "Tesla", pct: 1.5 },
    ],
  },
  XEQT: {
    index: "Global all-equity allocation (no single index)",
    indexFr: "Répartition mondiale en actions (aucun indice unique)",
    about: "A fund of funds — it holds other iShares ETFs rather than individual stocks, spreading exposure across US, Canadian, international, and emerging markets.",
    aboutFr: "Un fonds de fonds — il détient d'autres FNB iShares plutôt que des actions individuelles, répartissant l'exposition entre les marchés américain, canadien, international et émergents.",
    holdings: [
      { name: "iShares Core S&P 500", pct: 45.0 },
      { name: "iShares Core MSCI EAFE IMI", pct: 25.0 },
      { name: "iShares Core S&P/TSX Capped Composite", pct: 24.0 },
      { name: "iShares Core MSCI Emerging Markets IMI", pct: 6.0 },
    ],
  },
  QQC: {
    index: "NASDAQ-100 Index",
    indexFr: "Indice NASDAQ-100",
    about: "Tracks the 100 largest non-financial companies on the NASDAQ. Even more tech-concentrated than the S&P 500.",
    aboutFr: "Suit les 100 plus grandes sociétés non financières du NASDAQ. Encore plus concentré dans la technologie que le S&P 500.",
    holdings: [
      { name: "Apple", pct: 9.0 },
      { name: "Microsoft", pct: 8.5 },
      { name: "Nvidia", pct: 8.0 },
      { name: "Amazon", pct: 5.5 },
      { name: "Broadcom", pct: 4.5 },
      { name: "Meta Platforms", pct: 4.0 },
      { name: "Alphabet (Class A)", pct: 2.8 },
      { name: "Alphabet (Class C)", pct: 2.6 },
      { name: "Tesla", pct: 2.5 },
      { name: "Costco", pct: 2.0 },
    ],
  },
  ZDJ: {
    index: "Dow Jones Industrial Average (CAD-hedged)",
    indexFr: "Dow Jones Industrial Average (couvert en CAD)",
    about: "Tracks 30 large US industrial and blue-chip companies. Price-weighted, so higher-priced stocks matter more than larger companies.",
    aboutFr: "Suit 30 grandes sociétés industrielles et de premier ordre américaines. Pondéré par le prix, donc les actions à prix plus élevé comptent davantage que les grandes entreprises.",
    holdings: [
      { name: "Goldman Sachs", pct: 9.0 },
      { name: "UnitedHealth Group", pct: 7.0 },
      { name: "Microsoft", pct: 6.5 },
      { name: "Caterpillar", pct: 5.0 },
      { name: "Home Depot", pct: 5.0 },
      { name: "Visa", pct: 4.8 },
      { name: "Sherwin-Williams", pct: 4.5 },
      { name: "American Express", pct: 4.3 },
      { name: "McDonald's", pct: 4.0 },
      { name: "Amgen", pct: 3.8 },
    ],
  },
};
