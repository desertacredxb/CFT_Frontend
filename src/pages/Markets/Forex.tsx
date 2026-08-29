import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  TrendingUp,
  TrendingDown,
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
    question: "1. Is Forex trading legal in India?",
    answer:
      "Yes, but only in a restricted form. SEBI and RBI permit trading in INR currency pairs, USD/INR, EUR/INR, GBP/INR, and JPY/INR, through SEBI-registered brokers. Trading non-INR pairs through foreign brokers is not legal for Indian residents.",
  },
  {
    question: "2. What is the minimum capital needed to start Forex trading?",
    answer:
      "This varies by broker and lot size, but Forex generally requires lower starting capital than many other markets because of the leverage involved, similar in concept to how Margin Trading allows traders to control larger positions with a smaller deposit.",
  },
  {
    question: "3. What is a pip in Forex trading?",
    answer:
      "A pip is the smallest standardized price movement in a currency pair, typically the fourth decimal place (0.0001) for most pairs, and is used to measure gains or losses on a trade.",
  },
  {
    question: "4. Why is Forex considered riskier than other markets?",
    answer:
      "Forex often involves high leverage, meaning small price movements can result in outsized gains or losses relative to the capital deployed. Combined with 24-hour trading and macroeconomic sensitivity, this makes risk management especially important.",
  },
  {
    question: "5. Can I trade Forex 24 hours a day?",
    answer:
      "Yes, the Forex market operates 24 hours a day, five days a week, since it moves across major financial hubs, including London, New York, Tokyo, and Sydney, as different time zones open and close.",
  },
  {
    question: "6. What's the difference between Forex trading and Forex trading with foreign brokers?",
    answer:
      "Trading INR currency pairs through SEBI-registered Indian brokers is fully legal and regulated. Trading through foreign/offshore brokers offering non-INR pairs falls outside RBI's regulatory framework and carries legal and financial risk for Indian residents.",
  },
  {
    question: "7. What tools do Forex traders commonly use?",
    answer:
      "Most traders rely on platforms like MetaTrader 4/5 for charting and order execution, TradingView for technical analysis, and economic calendars to track events like interest rate decisions that can move currency prices sharply.",
  },
  {
    question: "8. Is Forex trading suitable for beginners?",
    answer:
      "It can be, but the combination of leverage and volatility means beginners should start with a demo account, trade small position sizes, and build a solid understanding of risk management before committing real capital.",
  },
];

function ForexTradingPage() {
  const [active, setActive] = useState<number>(0);


  const keyTerms = [
    { term: "Pip", meaning: "Smallest price move (0.0001 usually)" },
    { term: "Lot", meaning: "Standard trade size (100,000 units)" },
    { term: "Spread", meaning: "Difference between ask and bid" },
    { term: "Leverage", meaning: "Use of borrowed money" },
    { term: "Margin", meaning: "Collateral to open trade" },
    { term: "Broker", meaning: "Platform giving market access" },
  ];

  const majorPairs = [
    { pair: "EUR/USD", nickname: "Fiber", currencies: "Euro / U.S. Dollar" },
    { pair: "USD/JPY", nickname: "Ninja", currencies: "U.S. Dollar / Japanese Yen" },
    { pair: "GBP/USD", nickname: "Cable", currencies: "British Pound / U.S. Dollar" },
    { pair: "USD/CHF", nickname: "Swissy", currencies: "U.S. Dollar / Swiss Franc" },
    { pair: "AUD/USD", nickname: "Aussie", currencies: "Australian Dollar / U.S. Dollar" },
    { pair: "USD/INR", nickname: "-", currencies: "U.S. Dollar / Indian Rupee" },
  ];


  const globalBrokers = [
    "IC Markets",
    "OANDA",
    "Pepperstone",
    "XM",
    "Exness",
  ];

  const whoTrades = [
    "Retail Traders",
    "Banks and Financial Institutions",
    "Exporters and Importers",
    "Central Banks",
    "Hedge Funds",
  ];

  const traderTools = [
    "MetaTrader 4/5 (MT4/MT5)",
    "TradingView",
    "Economic Calendars",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Forex Market Guide: Trading, Risks & Legality in India | Master Trader</title>
        <meta
          name="description"
          content="Learn how the Forex market works, major currency pairs, risks, and legal trading rules for India."
        />
        <meta
          name="keywords"
          content="Forex market, Forex trading India, currency pairs, EUR/USD, USD/INR, Forex trading legal India, SEBI Forex brokers, leverage Forex, Forex risks, MetaTrader"
        />
        <link rel="canonical" href="https://www.mastertrader.co.in/forex-market" />

        {/* Open Graph */}
        <meta property="og:title" content="Forex Market Guide: Trading, Risks & Legality in India | Master Trader" />
        <meta
          property="og:description"
          content="Learn how the Forex market works, major currency pairs, risks, and legal trading rules for India."
        />
        <meta property="og:url" content="https://www.mastertrader.co.in/forex-market" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Master Trader" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://www.mastertrader.co.in/MT-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MasterrTraderr" />
        <meta name="twitter:title" content="Forex Market Guide: Trading, Risks & Legality in India | Master Trader" />
        <meta
          name="twitter:description"
          content="Learn how the Forex market works, major currency pairs, risks, and legal trading rules for India."
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
        title="Trade the World's Largest Financial Market"
        subtitle="Access the Forex market with over $7 trillion in daily volume. Trade major currency pairs 24 hours a day, five days a week, through SEBI-regulated platforms."
      />

      {/* Highlights Bar */}
      <section className="bg-white dark:bg-[--bg-color1] py-4 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center font-medium text-sm text-[var(--primary-color)]">
          24/5 global market &bull; Major currency pairs &bull; SEBI-regulated access
        </div>
      </section>

      {/* Main Overview Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            What is Forex?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Forex (Foreign Exchange) is the world's largest financial market where currencies are traded 24/5 globally. With daily volume over $7 trillion (2024), it operates via major financial hubs like London, New York, Tokyo, and Sydney.
            </p>
          </div>
        </div>
      </section>

      {/* How Does Forex Work & Terms Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-center">
            How Does Forex Work?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            You trade currency pairs by buying one currency while selling another. For example, buying EUR/USD means buying Euros and selling Dollars.
          </p>
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-center">
            Key Forex Terms
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Term</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {keyTerms.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold text-[var(--primary-color)]">{row.term}</td>
                    <td className="p-4">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Margin in the <a href="https://www.mastertrader.co.in/products/forex" className="text-blue-500 hover:underline">Forex</a>  market works on the same underlying principle as <a href="https://www.mastertrader.co.in/knowledge/margin-trading" className="text-blue-500 hover:underline">Margin Trading</a> in equities and commodities. You put down a fraction of the trade value as collateral, which is what allows leverage to work in the first place.
          </div>
        </div>
      </section>

      {/* Major Currency Pairs Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Major Currency Pairs
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Pair</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Nickname</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Currencies</th>
                </tr>
              </thead>
              <tbody>
                {majorPairs.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold text-[var(--primary-color)]">{row.pair}</td>
                    <td className="p-4 font-mono">{row.nickname}</td>
                    <td className="p-4">{row.currencies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Trade Forex Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Why Trade Forex?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Highly liquid and accessible market",
              "24-hour trading across global time zones",
              "Leverage for bigger positions",
              "Low starting capital required",
              "Suited for technical analysis",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md flex gap-4"
              >
                <TrendingUp className="text-[var(--primary-color)] w-6 h-6 " />
                <h3 className="text-base font-semibold mb-3 text-black dark:text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forex Risks Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Forex Risks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {[
              "High volatility",
              "Leverage magnifies losses",
              "Unregulated brokers may manipulate",
              "Emotion-driven trading issues",
            ].map((risk, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-[--bg-color1] rounded-xl shadow-md border-l-4 border-red-500"
              >
                <h3 className="text-base font-semibold text-black dark:text-white">
                  {risk}
                </h3>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white dark:bg-[--bg-color1] rounded-lg text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto shadow-sm">
            The same volatility and leverage concerns apply broadly across derivatives. Traders coming from <a href="https://www.mastertrader.co.in/knowledge/future-options" className="text-blue-500 hover:underline">Futures & Options</a>  will recognize how quickly leveraged positions can move against you if risk isn't managed upfront.
          </div>
        </div>
      </section>

      {/* Forex in India & Where to Trade */}
      <section className="py-10 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-center">
            Forex in India
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-2 max-w-3xl mx-auto">
            SEBI & RBI regulate Forex trading. Only INR pairs are legal: <strong>USD/INR, EUR/INR, GBP/INR, JPY/INR</strong> via SEBI-registered brokers.
          </p>

          <div className="max-w-2xl mx-auto flex justify-center">
            {[
              "Zerodha",
              "Angel One",
              "ICICI Direct",
              "HDFC Securities",
            ].map((broker, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm"
              >
                <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{broker}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"> Non-INR pairs via foreign brokers are not legal for Indians.</p>
        </div>
      </section>
      <section className="py-10 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-center">
          Where to Trade
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto pt-4">
          <div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white text-center md:text-left">
              Indian Brokers (Legal INR Pairs)
            </h3>
            <div className="space-y-3">
              {[
                "Zerodha",
                "Upstox",
                "Sharekhan",
              ].map((broker, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm"
                >
                  <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{broker}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white text-center md:text-left">
              Global Brokers (Not Legal in India)
            </h3>
            <div className="space-y-3">
              {globalBrokers.map((broker, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm"
                >
                  <TrendingDown className="text-red-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{broker}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Trades & Tools Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl text-center font-bold mb-6 text-black dark:text-white">
              Who Trades in Forex?
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-3">
              {whoTrades.map((participant, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow"
                >
                  <Briefcase className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{participant}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-center font-bold mb-6 mt-10 text-black dark:text-white">
              Tools for Forex Traders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {traderTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow"
                >
                  <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              to={"/signup"}
              className="mt-8 inline-block rounded-full bg-[var(--primary-color)] px-6 py-3 font-semibold text-white transition hover:bg-opacity-90"
            >
              Start Trading Now
            </Link>
          </div>
        </div>
      </section>

      {/* Primary CTA Block */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-14">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-3xl">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Start Trading Now
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  Final Thoughts
                </h3>
                <p className="text-lg text-gray-300 leading-8">
                  Forex is powerful but risky. Start small, use demo accounts, study the markets, and always manage risk.
                </p>
              </div>
              <a
                href="/signup"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Trading Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
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
            FAQs on Forex Market
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

export default ForexTradingPage;