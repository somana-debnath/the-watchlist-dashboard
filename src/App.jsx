import { useMemo, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, ResponsiveContainer, Cell, LabelList,
} from "recharts";
import { ETFS, MONTHS_EN, MONTHS_FR, PRICE_TREND, PRICE_TREND_USD, MER, HOLDINGS, T, formatPercent, formatDollar } from "./data";
import "./App.css";

function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [tab, setTab] = useState("dashboard");
  const [visible, setVisible] = useState(
    Object.fromEntries(ETFS.map((e) => [e.ticker, true]))
  );
  const [currency, setCurrency] = useState("CAD");
  const [merView, setMerView] = useState("percent");

  const t = T[lang];
  const months = lang === "fr" ? MONTHS_FR : MONTHS_EN;

  const chartData = useMemo(() => {
    const source = currency === "USD" ? PRICE_TREND_USD : PRICE_TREND;
    return source.map((row) => {
      const out = { m: months[row.m] };
      ETFS.forEach((e) => {
        const key = currency === "USD" ? e.usTicker : e.ticker;
        out[key] = row[key];
      });
      return out;
    });
  }, [currency, months]);

  const merData = useMemo(() => {
    const rows = ETFS.map((e) => ({
      ticker: e.ticker,
      value: merView === "dollar" ? +(MER[e.ticker] * 100).toFixed(2) : MER[e.ticker],
      color: e.color,
    }));
    return rows.sort((a, b) => b.value - a.value);
  }, [merView]);

  const lowestFeeTicker = useMemo(() => {
    return ETFS.reduce((min, e) => (MER[e.ticker] < MER[min.ticker] ? e : min), ETFS[0]).ticker;
  }, []);

  const toggleTicker = (ticker) => {
    setVisible((prev) => ({ ...prev, [ticker]: !prev[ticker] }));
  };

  const formatMer = (v) => (merView === "dollar" ? formatDollar(v, lang) : formatPercent(v, lang));

  return (
    <div className={`app theme-${theme}`}>
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">◈</span>
          <h1>{t.title}</h1>
        </div>
        <div className="header-controls">
          <div className="lang-toggle" role="group" aria-label={t.themeLabel}>
            <button
              className={theme === "dark" ? "lang-btn active" : "lang-btn"}
              onClick={() => setTheme("dark")}
              aria-pressed={theme === "dark"}
            >
              {t.themeDark}
            </button>
            <button
              className={theme === "light" ? "lang-btn active" : "lang-btn"}
              onClick={() => setTheme("light")}
              aria-pressed={theme === "light"}
            >
              {t.themeLight}
            </button>
          </div>
          <div className="lang-toggle" role="group" aria-label={t.langLabel}>
            <button
              className={lang === "en" ? "lang-btn active" : "lang-btn"}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              className={lang === "fr" ? "lang-btn active" : "lang-btn"}
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
            >
              FR
            </button>
          </div>
        </div>
      </header>

      <div className="tabs" role="tablist">
        <button
          role="tab"
          className={tab === "dashboard" ? "tab active" : "tab"}
          aria-selected={tab === "dashboard"}
          onClick={() => setTab("dashboard")}
        >
          {t.tabDashboard}
        </button>
        <button
          role="tab"
          className={tab === "learn" ? "tab active" : "tab"}
          aria-selected={tab === "learn"}
          onClick={() => setTab("learn")}
        >
          {t.tabLearn}
        </button>
      </div>

      {tab === "dashboard" ? (
        <>
          <p className="intro">{t.intro}</p>

          <div className="layout">
            <aside className="watchlist" aria-label={t.watchlistLabel}>
              <h2 className="panel-label">{t.watchlistLabel}</h2>
              <ul>
                {ETFS.map((e) => (
                  <li key={e.ticker}>
                    <label className="watch-row">
                      <input
                        type="checkbox"
                        checked={visible[e.ticker]}
                        onChange={() => toggleTicker(e.ticker)}
                      />
                      <span className="dot" style={{ background: e.color }} />
                      <span className="ticker-mono">{currency === "USD" ? e.usTicker : e.ticker}</span>
                      <span className="etf-name">{lang === "fr" ? e.nameFr : e.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </aside>

            <main className="charts">
              <section className="chart-card">
                <div className="chart-head">
                  <div>
                    <h2>{t.chart1Title}</h2>
                    <p className="chart-sub">{t.chart1Sub}</p>
                  </div>
                  <div className="control">
                    <span className="control-label">{t.currencyLabel}</span>
                    <div className="segmented">
                      <button
                        className={currency === "CAD" ? "seg active" : "seg"}
                        onClick={() => setCurrency("CAD")}
                      >
                        CAD
                      </button>
                      <button
                        className={currency === "USD" ? "seg active" : "seg"}
                        onClick={() => setCurrency("USD")}
                      >
                        USD
                      </button>
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={chartData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="var(--hairline)" strokeDasharray="3 5" vertical={false} />
                    <XAxis dataKey="m" stroke="var(--text-muted)" tick={{ fontSize: 12, fontFamily: "IBM Plex Mono" }} />
                    <YAxis
                      stroke="var(--text-muted)"
                      tick={{ fontSize: 12, fontFamily: "IBM Plex Mono" }}
                      domain={["auto", "auto"]}
                      label={{
                        value: T.en.axisGrowth,
                        angle: -90,
                        position: "insideLeft",
                        fill: "var(--text-muted)",
                        fontSize: 12,
                      }}
                    />
                    <Tooltip
                      contentStyle={{ background: "var(--panel)", border: "1px solid var(--hairline)", fontFamily: "IBM Plex Mono", fontSize: 12 }}
                      labelStyle={{ color: "var(--text)" }}
                    />
                    <Legend wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 12 }} />
                    {ETFS.map((e) =>
                      visible[e.ticker] ? (
                        <Line
                          key={e.ticker}
                          type="monotone"
                          dataKey={currency === "USD" ? e.usTicker : e.ticker}
                          stroke={e.color}
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 4 }}
                        />
                      ) : null
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </section>

              <section className="chart-card">
                <div className="chart-head">
                  <div>
                    <h2>{t.chart2Title}</h2>
                    <p className="chart-sub">{t.chart2Sub}</p>
                  </div>
                  <div className="control">
                    <span className="control-label">{t.viewLabel}</span>
                    <div className="segmented">
                      <button
                        className={merView === "percent" ? "seg active" : "seg"}
                        onClick={() => setMerView("percent")}
                      >
                        {t.viewPercent}
                      </button>
                      <button
                        className={merView === "dollar" ? "seg active" : "seg"}
                        onClick={() => setMerView("dollar")}
                      >
                        {t.viewDollar}
                      </button>
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={210}>
                  <BarChart data={merData} layout="vertical" margin={{ top: 10, right: 40, left: 10, bottom: 20 }}>
                    <CartesianGrid stroke="var(--hairline)" strokeDasharray="3 5" horizontal={false} />
                    <XAxis
                      type="number"
                      stroke="var(--text-muted)"
                      tick={{ fontSize: 12, fontFamily: "IBM Plex Mono" }}
                      tickFormatter={(v) => formatMer(v)}
                      label={{ value: merView === "dollar" ? t.axisMerDollar : t.axisMer, position: "insideBottom", offset: -4, fill: "var(--text-muted)", fontSize: 12 }}
                    />
                    <YAxis
                      type="category"
                      dataKey="ticker"
                      stroke="var(--text-muted)"
                      width={64}
                      tick={{ fontSize: 12, fontFamily: "IBM Plex Mono" }}
                    />
                    <Tooltip
                      contentStyle={{ background: "var(--panel)", border: "1px solid var(--hairline)", fontFamily: "IBM Plex Mono", fontSize: 12 }}
                      formatter={(value) => formatMer(value)}
                      labelStyle={{ color: "var(--text)" }}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {merData.map((row) => (
                        <Cell key={row.ticker} fill={row.color} />
                      ))}
                      <LabelList
                        dataKey="value"
                        position="right"
                        formatter={(v) => formatMer(v)}
                        style={{ fill: "var(--text)", fontFamily: "IBM Plex Mono", fontSize: 12 }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p className="callout">
                  <span className="callout-dot" aria-hidden="true" />
                  {t.lowestFee}: <strong>{lowestFeeTicker}</strong> ({formatPercent(MER[lowestFeeTicker], lang)})
                </p>
              </section>
            </main>
          </div>
        </>
      ) : (
        <div className="learn">
          <p className="intro">{t.learnIntro}</p>
          <div className="learn-grid">
            {ETFS.map((e) => {
              const h = HOLDINGS[e.ticker];
              const maxPct = Math.max(...h.holdings.map((x) => x.pct));
              return (
                <div className="learn-card" key={e.ticker} style={{ borderTopColor: e.color }}>
                  <div className="learn-card-head">
                    <span className="dot" style={{ background: e.color }} />
                    <span className="ticker-mono learn-ticker">{e.ticker}</span>
                    <span className="etf-name-full">{lang === "fr" ? e.nameFr : e.name}</span>
                  </div>
                  <p className="learn-index">
                    <span className="learn-label">{t.indexLabel}: </span>
                    {lang === "fr" && h.indexFr ? h.indexFr : h.index}
                  </p>
                  <p className="learn-about">{lang === "fr" ? h.aboutFr : h.about}</p>
                  <p className="learn-label">{t.holdingsLabel}</p>
                  <ul className="holdings-list">
                    {h.holdings.map((holding) => (
                      <li key={holding.name} className="holdings-row">
                        <span className="holdings-name">{holding.name}</span>
                        <span className="holdings-bar-track">
                          <span
                            className="holdings-bar-fill"
                            style={{ width: `${(holding.pct / maxPct) * 100}%`, background: e.color }}
                          />
                        </span>
                        <span className="holdings-pct">{formatPercent(holding.pct, lang)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <footer className="footer">
        <span>{t.footer}</span>
        <span className="footer-note">{t.footerNote}</span>
      </footer>
    </div>
  );
}

export default App;
