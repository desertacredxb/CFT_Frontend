import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  TrendingUp,
  Briefcase,
  Shield,
  ChevronDown,
} from "lucide-react";
import Navbar from "../../components/Nav";
import PageBanner from "../../components/BannerImage";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

// 1. FAQ Data
const faqs = [
  {
    question: "1. Can Indians legally invest in U.S. stocks?",
    answer:
      "Yes. Under the RBI's Liberalised Remittance Scheme (LRS), Indian residents can invest up to $250,000 per year in U.S. stocks and other overseas assets.",
  },
  {
    question: "2. What is the minimum amount needed to invest in U.S. stocks?",
    answer:
      "Exchanges set no fixed minimum. Most platforms like INDmoney, Vested, or Groww Global allow fractional investing, so you can start with as little as $1–10 depending on the stock price.",
  },
  {
    question: "3. What is the difference between NYSE and NASDAQ?",
    answer:
      "NYSE is the world's largest exchange by market capitalization and lists a broad mix of established companies, while NASDAQ is more tech-heavy and home to many high-growth names like Apple, Tesla, and Nvidia.",
  },
  {
    question: "4. What time does the U.S. stock market open in India?",
    answer:
      "Regular U.S. market hours run from 7:00 PM to 1:30 AM IST, with pre-market trading starting at 1:00 PM IST and post-market extending to 5:30 AM IST. These timings shift by about an hour during U.S. daylight saving time.",
  },
  {
    question: "5. Are U.S. stock market indices like the S&P 500 tradable directly?",
    answer:
      "You can't buy an index directly, but you can gain exposure through ETFs that track it (like SPY for the S&P 500) or via index futures, similar in concept to how Indexes are traded in Indian markets.",
  },
  {
    question: "6. What are the tax implications for Indians investing in U.S. stocks?",
    answer:
      "Gains are typically subject to capital gains tax in India, and the U.S. may withhold tax on dividends. It's advisable to consult a tax professional, since treaty rules and holding periods affect the exact treatment.",
  },
  {
    question: "7. Is currency risk a major concern when investing in U.S. stocks?",
    answer:
      "Yes. Since U.S. stocks are priced in USD, a weakening rupee can boost your returns when converted back to INR, while a strengthening rupee can reduce them independent of how the stock itself performs.",
  },
  {
    question: "8. Which platform is best for Indians to buy U.S. stocks?",
    answer:
      "It depends on your priorities. INDmoney and Vested are popular for ease of use and fractional shares, while Zerodha's tie-up with Vested suits those who already use Zerodha for Indian markets.",
  },
];

function UsStocksIndicesPage() {
  const [active, setActive] = useState<number>(0);


  const majorExchanges = [
    { exchange: "NYSE (New York Stock Exchange)", desc: "World's largest exchange by market cap" },
    { exchange: "NASDAQ", desc: "Tech-heavy exchange, home to many growth stocks" },
  ];

  const topIndices = [
    { index: "S&P 500", tracks: "500 largest U.S. companies", notable: "Apple, Microsoft, Amazon" },
    { index: "NASDAQ 100", tracks: "Top 100 non-financial tech & growth companies", notable: "Tesla, Meta, Nvidia" },
    { index: "Dow Jones (DJIA)", tracks: "30 large blue-chip firms", notable: "Boeing, Coca-Cola, Goldman Sachs" },
    { index: "Russell 2000", tracks: "2000 small-cap companies", notable: "Mid-small US firms" },
    { index: "VIX (Volatility Index)", tracks: "Market volatility gauge", notable: "Sentiment indicator, not stocks" },
  ];

  const popularStocks = [
    { company: "Apple", ticker: "AAPL", sector: "Tech" },
    { company: "Microsoft", ticker: "MSFT", sector: "Tech" },
    { company: "Nvidia", ticker: "NVDA", sector: "AI/Chips" },
    { company: "Amazon", ticker: "AMZN", sector: "E-commerce / Cloud" },
    { company: "Tesla", ticker: "TSLA", sector: "EV / Auto" },
    { company: "Meta (Facebook)", ticker: "META", sector: "Social Media" },
    { company: "Alphabet (Google)", ticker: "GOOG / GOOGL", sector: "Search / Ads" },
    { company: "Berkshire Hathaway", ticker: "BRK.A / BRK.B", sector: "Conglomerate" },
  ];

  const internationalPlatforms = [
    "INDmoney",
    "Vested",
    "Groww Global",
    "Stockal",
    "Webull (via LRS)",
  ];

  const indianBrokers = [
    "Zerodha (via Vested)",
    "ICICI Direct Global",
    "HDFC Securities International Investing",
  ];

  const marketTimings = [
    { session: "Pre-market", timing: "1:00 PM – 7:00 PM" },
    { session: "Market Hours", timing: "7:00 PM – 1:30 AM" },
    { session: "Post-market", timing: "1:30 AM – 5:30 AM" },
  ];

  const trendingThemes = [
    { theme: "AI Boom", tickers: "Nvidia, AMD, Palantir" },
    { theme: "EV Growth", tickers: "Tesla, Rivian, Lucid" },
    { theme: "Cloud & SaaS", tickers: "Microsoft, Snowflake, Salesforce" },
    { theme: "Green Energy", tickers: "Enphase, NextEra Energy" },
    { theme: "Biotech", tickers: "Moderna, Pfizer, CRISPR Therapeutics" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>US Stocks & Indices: How Indians Can Invest | Master Trader</title>
        <meta
          name="description"
          content="Learn how Indians can invest in US stocks and indices like the S&P 500, NASDAQ, and top companies."
        />
        <meta
          name="keywords"
          content="US stocks, US indices, S&P 500, NASDAQ, NYSE, invest in US stocks from India, LRS investment, US stock market timings, Indian brokers for US stocks, US stocks tax India"
        />
        <link rel="canonical" href="https://www.mastertrader.co.in/us-stocks-indices" />

        {/* Open Graph */}
        <meta property="og:title" content="US Stocks & Indices: How Indians Can Invest | Master Trader" />
        <meta
          property="og:description"
          content="Learn how Indians can invest in US stocks and indices like the S&P 500, NASDAQ, and top companies."
        />
        <meta property="og:url" content="https://www.mastertrader.co.in/us-stocks-indices" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Master Trader" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://www.mastertrader.co.in/MT-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MasterrTraderr" />
        <meta name="twitter:title" content="US Stocks & Indices: How Indians Can Invest | Master Trader" />
        <meta
          name="twitter:description"
          content="Learn how Indians can invest in US stocks and indices like the S&P 500, NASDAQ, and top companies."
        />
        <meta name="twitter:image" content="https://www.mastertrader.co.in/MT-logo.png" />

        {/* Schema.org FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          })}
        </script>
      </Helmet>

      <div className="mb-20">
        <Navbar />
      </div>

      <PageBanner
        title="Trade U.S. Stocks & Indices from India"
        subtitle="Get exposure to Apple, Tesla, Nvidia, and the S&P 500; access the world's largest equity markets without leaving your portfolio limited to Indian markets."
      />

      {/* Main Overview Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            What Are U.S. Stocks?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              U.S. stocks represent ownership in publicly traded companies based in the United States, listed on major exchanges and traded in U.S. dollars. When you buy a share of a company like Apple or Microsoft, you own a small piece of that business, along with a claim on its future earnings and, in many cases, dividend payouts.
            </p>
            <p>
              For Indian investors, U.S. stocks have become an increasingly popular way to diversify beyond domestic markets. Rather than being limited to companies listed on the NSE or BSE, you gain access to some of the world's largest and most influential businesses, many of which don't have a direct equivalent in India, particularly in sectors like big tech, semiconductors, and biotech.
            </p>
          </div>
        </div>
      </section>

      {/* Major U.S. Stock Exchanges Table Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Major U.S. Stock Exchanges
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Exchange</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {majorExchanges.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold text-[var(--primary-color)]">{row.exchange}</td>
                    <td className="p-4">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Are U.S. Stock Market Indices Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-center">
            What Are U.S. Stock Market Indices?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Indices track benchmark stock performance across the broader market or specific sectors, giving investors a way to gauge overall market direction without picking individual stocks.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Index</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">What It Tracks</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Notable Stocks</th>
                </tr>
              </thead>
              <tbody>
                {topIndices.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold text-[var(--primary-color)]">{row.index}</td>
                    <td className="p-4">{row.tracks}</td>
                    <td className="p-4">{row.notable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-4 bg-white dark:bg-[--bg-color1] rounded-lg text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto shadow-sm">
            Tracking an index rather than individual stocks follows the same logic used across <a href="https://www.mastertrader.co.in/products/indexes" className="text-blue-500 hover:underline">Indexes</a>  trading more broadly; you're taking a view on the overall market rather than betting on any single company.
          </div>
        </div>
      </section>

      {/* Popular U.S. Stocks Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Popular U.S. Stocks
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Company</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Ticker</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Sector</th>
                </tr>
              </thead>
              <tbody>
                {popularStocks.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold">{row.company}</td>
                    <td className="p-4 font-mono text-[var(--primary-color)]">{row.ticker}</td>
                    <td className="p-4">{row.sector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Why Invest in U.S. Stocks?
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Access global brands & tech leaders",
              "Gain exposure to USD-denominated assets",
              "Benefit from historically strong returns",
              "Diversify beyond Indian markets",
            ].map((item, index) => (
              <div
                key={index}
                className="p-2 bg-white dark:bg-[--bg-color1] rounded-xl shadow-md flex gap-4"
              >
                <TrendingUp className="text-[var(--primary-color)] w-6 h-6 mb-4" />
                <h3 className="text-base font-semibold mb-3 text-black dark:text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Can Indians Invest Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            How Can Indians Invest?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white text-center md:text-left">
                International Platforms
              </h3>
              <div className="space-y-3">
                {internationalPlatforms.map((platform, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm"
                  >
                    <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white text-center md:text-left">
                Indian Brokers (Global Tie-ups)
              </h3>
              <div className="space-y-3">
                {indianBrokers.map((broker, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm"
                  >
                    <Briefcase className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{broker}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto shadow-sm leading-relaxed">
            Under RBI LRS, Indian residents can invest up to <strong>$250,000/year</strong> overseas. Most platforms handle the remittance, KYC, and tax documentation as part of the account opening process, though it's worth comparing brokerage fees, <a href="https://www.mastertrader.co.in/products/forex" className="text-blue-500 hover:underline">forex</a>  conversion charges, and withdrawal costs across platforms, since these can eat into returns more than most people expect on smaller investment amounts.
          </div>
        </div>
      </section>

      {/* U.S. Market Timings Table Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            U.S. Market Timings (IST)
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Session</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">IST Timing</th>
                </tr>
              </thead>
              <tbody>
                {marketTimings.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold">{row.session}</td>
                    <td className="p-4 font-mono text-[var(--primary-color)]">{row.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
            * Timings shift slightly during daylight saving time.
          </p>
        </div>
      </section>

      {/* Risks to Consider Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Risks to Consider
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
            {[
              "Currency risk (INR ↔ USD)",
              "Regulatory risk (India/U.S. policies)",
              "Geopolitical volatility",
              "Higher foreign transaction/remittance costs",
            ].map((risk, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md border-l-4 border-amber-500"
              >
                <h3 className="text-base font-semibold mb-2 text-black dark:text-white">
                  {risk}
                </h3>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
Currency exposure adds a layer of risk that doesn't exist when trading domestically something worth weighing alongside standard <a href="https://www.mastertrader.co.in/knowledge/margin-trading" className="text-blue-500 hover:underline">Margin Trading</a>  risks if you're using leverage on top of an already volatile cross-border position.
          </div>
        </div>
      </section>

      {/* Bonus: Trending Investment Themes */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Trending Investment Themes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trendingThemes.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-[--bg-color1] rounded-xl shadow-md"
              >
                <TrendingUp className="text-[var(--primary-color)] w-8 h-8 mb-3" />
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {item.theme}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                  {item.tickers}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to={"/login"}
              className="mt-8 inline-block rounded-full bg-[var(--primary-color)] px-6 py-3 font-semibold text-white transition hover:bg-opacity-90"
            >
              Start Trading Now
            </Link>
          </div>
        </div>
      </section>


      {/* Community Banner */}
      <section className="py-20 px-6 bg-white dark:bg-[--bg-color1]">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[--bg-color1] px-6 py-1 rounded-full border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold text-lg shadow-md z-10">
            Community
          </div>
          <div className="border-2 border-[var(--primary-color)] rounded-2xl p-10 pt-14 text-center shadow-lg bg-white dark:bg-[--bg-color1]">
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white font-medium mb-2">
              Join the <span className="text-[var(--primary-color)] font-semibold">Master Trader</span> community!
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
              Improving financial lives through planning, trading, and earning!
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-full hover:bg-opacity-90 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 pt-8 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            FAQs on US Stocks & Indices
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-[--primary-color]/20 bg-white dark:bg-[--bg-color1] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActive(active === index ? -1 : index)}
                  className="w-full flex items-center justify-between text-left p-7"
                >
                  <h3 className="text-xl font-semibold text-black dark:text-white pr-6">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[--primary-color] transition-transform duration-300 ${active === index ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`grid transition-all duration-300 ${active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="px-7 pb-7 text-gray-600 dark:text-gray-400 leading-8 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default UsStocksIndicesPage;