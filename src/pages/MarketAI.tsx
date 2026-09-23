import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import "./MarketAI.css";

type NewsItem = { title: string; url: string; source: string; publishedAt: string };
const sources = [
  { name: "SEBI", description: "Regulatory releases and notices", url: "https://www.sebi.gov.in/media-and-notifications.html" },
  { name: "NSE", description: "Corporate announcements and market reports", url: "https://www.nseindia.com/companies-listing/corporate-filings-announcements" },
  { name: "MCX", description: "Commodity contracts and exchange notices", url: "https://www.mcxindia.com/market-data" },
  { name: "RBI", description: "Policy and monetary releases", url: "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx" },
  { name: "Moneycontrol", description: "Indian market reporting on the original site", url: "https://www.moneycontrol.com/news/business/markets/" },
];
const explainers = [
  { question: "What is stop loss?", answer: "A stop loss is a predefined exit level intended to limit a trade's loss. Execution can differ from the chosen level in a fast market." },
  { question: "What is option expiry?", answer: "An option has an exchange-defined expiry date. Check the exact contract and exchange calendar before trading; holiday schedules can change expiry dates." },
  { question: "What is 52-week high?", answer: "It is the highest price recorded for an instrument over the previous 52 weeks. It describes past prices and does not predict future returns." },
  { question: "Where can I see market rates?", answer: "Use the official NSE and MCX market pages or your trading platform for current quotes. This page does not provide a live rate feed." },
];
export default function MarketAI() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [newsStatus, setNewsStatus] = useState("Checking official feed");
  const [expiry, setExpiry] = useState("");
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    let active = true;
    const refresh = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/market-ai/public-news`);
        if (!response.ok) throw new Error("Feed unavailable");
        const data = await response.json();
        if (active) {
          const items = Array.isArray(data.items) ? data.items.filter((item: NewsItem) => item.title && item.url && item.publishedAt).slice(0, 8) : [];
          setNews(items);
          setNewsStatus(items.length ? "Official SEBI updates" : "Official feed unavailable");
        }
      } catch { if (active) { setNews([]); setNewsStatus("Official feed unavailable"); } }
    };
    refresh();
    const timer = window.setInterval(refresh, 300000);
    return () => { active = false; window.clearInterval(timer); };
  }, []);
  const schedule = useMemo(() => {
    if (!expiry) return [];
    const date = new Date(`${expiry}T12:00:00+05:30`);
    if (Number.isNaN(date.getTime())) return [];
    return [5, 4, 3, 2, 1, 0].map(days => {
      const day = new Date(date.getTime() - days * 86400000);
      return `${new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", day: "numeric", month: "short", year: "numeric" }).format(day)} · ${days ? `${days} day${days > 1 ? "s" : ""} before` : "Expiry day"}`;
    });
  }, [expiry]);
  return <div className="mai-page"><Navbar /><main className="mai-container">
    <div className="mai-hero"><div><span className="mai-kicker">MASTER TRADER · MARKET INTELLIGENCE</span><h1>Understand the market.<br /><em>Move with clarity.</em></h1><p>Explore official market movers, news and simple explainers for NSE, options and MCX.</p><div className="mai-actions"><a href="#movers" className="mai-button">Explore market movers ↗</a><a href="#learn" className="mai-outline">Learn the basics</a></div></div><div className="mai-hero-panel"><span className="mai-kicker">MARKET DESK</span><strong>Indian market guide</strong><p>NSE regular cash session<br />9:15 AM – 3:30 PM IST, trading days</p><p>Exchange holidays and special sessions can change these hours. Check each MCX contract's current session.</p><a href="https://www.nseindia.com/market-data/market-timings" target="_blank" rel="noopener noreferrer">Check NSE hours ↗</a></div></div>
    <div className="mai-ticker"><span>MARKET PULSE</span><div>Official updates · Original source links &nbsp; ✦ &nbsp; Market education · NSE, options and MCX &nbsp; ✦ &nbsp; No live prices or trade calls</div></div>
    <section className="mai-section" id="movers"><div className="mai-heading"><div><span className="mai-kicker">MARKET MOVERS</span><h2>Top gainers &amp; losers</h2></div><span className="mai-badge">Check current NSE rankings ↗</span></div><p>Explore what moved today, then check the exchange's timestamp and the reason behind a move. A place on this list is not a Buy or Sell signal.</p><div className="mai-movers"><article><span className="mai-kicker">01 · PRICE UP</span><h3>Top gainers</h3><p>Stocks with the largest positive percentage change for the selected NSE market group. Compare the change with trading volume and company announcements.</p><a href="https://www.nseindia.com/market-data/top-gainers-losers" target="_blank" rel="noopener noreferrer">View today's gainers on NSE ↗</a></article><article><span className="mai-kicker">02 · PRICE DOWN</span><h3>Top losers</h3><p>Stocks with the largest negative percentage change. Check whether results, corporate news or market conditions explain the move.</p><a href="https://www.nseindia.com/market-data/top-gainers-losers" target="_blank" rel="noopener noreferrer">View today's losers on NSE ↗</a></article><article><span className="mai-kicker">03 · LONGER VIEW</span><h3>52-week high &amp; low</h3><p>See which stocks reached new one-year extremes. A 52-week level describes price history; it does not predict the next move.</p><a href="https://www.nseindia.com/market-data/52-week-low-equity-market" target="_blank" rel="noopener noreferrer">View 52-week list on NSE ↗</a></article></div><small>Stock rankings and prices open on NSE's own website. Master Trader does not republish a live quote feed here.</small></section>
    <section className="mai-section" id="news"><div className="mai-heading"><div><span className="mai-kicker">THE NEWSROOM</span><h2>Indian market updates</h2></div><span className="mai-badge">{newsStatus}</span></div><p>Read the original release for complete details. The publication time is shown on each update; this is an official SEBI feed, not a live trading signal.</p><div className="mai-news">{news.length ? news.map((item, i) => <a key={`${item.url}-${i}`} href={item.url} target="_blank" rel="noopener noreferrer"><span>{item.source} ↗</span><h3>{item.title}</h3><small>Published {new Date(item.publishedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</small></a>) : sources.slice(0, 3).map(source => <a key={source.name} href={source.url} target="_blank" rel="noopener noreferrer"><span>{source.name} ↗</span><h3>{source.description}</h3><small>Visit original source</small></a>)}</div></section>
    <div className="mai-two"><section className="mai-section"><span className="mai-kicker">SOURCE DESK</span><h2>Check the source</h2><p>Rates, contract details and headlines can change quickly. Follow the original publisher for current information.</p><div className="mai-source-list">{sources.map(source => <a href={source.url} key={source.name} target="_blank" rel="noopener noreferrer"><strong>{source.name}</strong><span>{source.description} ↗</span></a>)}</div></section><section className="mai-section" id="learn"><span className="mai-kicker">MARKET EXPLAINERS</span><h2>Ask a simple question</h2><div className="mai-tabs">{explainers.map((item, i) => <button type="button" aria-pressed={selected === i} key={item.question} onClick={() => setSelected(i)}>{item.question}</button>)}</div><div className="mai-chat"><strong>{explainers[selected].question}</strong><p>{explainers[selected].answer}</p></div><small>Educational information only. This is not a personalized AI adviser.</small></section></div>
    <section className="mai-section mai-expiry"><div><span className="mai-kicker">EXPIRY DATE PLANNER</span><h2>Preview a 5-day countdown</h2><p>Enter a contract's expiry date to preview reminder dates. Confirm the actual expiry and holidays on the exchange website.</p><label htmlFor="mai-expiry-date">Example contract expiry date</label><input id="mai-expiry-date" type="date" value={expiry} onChange={e => setExpiry(e.target.value)} /><small>Planner only. No notification is sent or subscription created.</small></div><div className="mai-schedule"><strong>Countdown preview</strong>{schedule.length ? schedule.map(day => <span key={day}>{day}</span>) : <p>Select a date to see the countdown.</p>}</div></section>
    <p className="mai-disclaimer">Market information and education only. Master Trader does not publish live quotes or stock-specific Buy, Sell, Stop Loss or Target recommendations on this page. Verify dates and market information with the original exchange or publisher.</p>
  </main><Footer /></div>;
}
