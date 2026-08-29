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
    question: "1. What does NSE F&O mean?",
    answer:
      "NSE F&O stands for the Futures and Options segment of the National Stock Exchange, where traders buy and sell derivative contracts based on stocks, indices, or commodities.",
  },
  {
    question: "2. Is NSE F&O trading good for beginners?",
    answer:
      "It's generally easier to grasp once you already understand Equity Trading, since derivative prices move in response to that same underlying activity.",
  },
  {
    question: "3. What is the minimum capital needed for NSE F&O?",
    answer:
      "This comes down to lot size and the margin percentage set for that specific contract, which is explained in more detail under Margin Trading.",
  },
  {
    question: "4. When do NSE F&O contracts expire?",
    answer:
      "Most NSE F&O contracts expire on the last Thursday of the month, though weekly expiries also exist for select index contracts like NIFTY and BANKNIFTY.",
  },
  {
    question: "5. Can I trade NSE F&O intraday?",
    answer:
      "Yes, a lot of F&O volume comes from traders closing positions the same day rather than holding until expiry. Entry and exit planning for this style is covered under Intraday Trading.",
  },
  {
    question: "6. Does NSE F&O cover commodities too?",
    answer:
      "NSE F&O itself is focused on equity and index derivatives. Commodities trade on a separate segment with their own contract specifications, covered under Commodity Trading.",
  },
  {
    question: "7. Who regulates NSE F&O trading?",
    answer:
      "The NSE F&O segment is regulated by SEBI (Securities and Exchange Board of India), which oversees margin norms, risk management, and market surveillance.",
  },
];

function NseFoPage() {
  const [active, setActive] = useState<number>(0);

  const contractFeatures = [
    { feature: "Underlying Assets", description: "Stocks, indices (like NIFTY, BANKNIFTY), commodities" },
    { feature: "Lot Size", description: "Fixed quantity per contract (e.g., 75 shares of Infosys)" },
    { feature: "Expiry", description: "Contracts expire on the last Thursday of the month" },
    { feature: "Margins", description: "Traders must deposit a margin to trade (not the full amount)" },
    { feature: "Settlement", description: "Cash-settled (no actual delivery of shares)" },
  ];

  const useCases = [
    {
      title: "Hedging",
      desc: "Protect against price fluctuations; for example, hedging long positions using puts.",
    },
    {
      title: "Speculation",
      desc: "Control larger positions with smaller capital through leverage.",
    },
    {
      title: "Arbitrage",
      desc: "Profit from price differences between the spot and futures markets.",
    },
  ];

  const risks = [
    { title: "High Volatility", desc: "Prices can swing rapidly, especially near expiry." },
    { title: "Leverage Risk", desc: "While profits can be large, so can losses." },
    { title: "Expiry Risk", desc: "If the trade doesn't move in your favor before expiry, the position can result in a loss." },
  ];

  const indexDerivatives = ["NIFTY 50", "BANKNIFTY", "FINNIFTY"];

  const stockDerivatives = [
    "Reliance Industries",
    "HDFC Bank",
    "Infosys",
    "TCS",
    "ICICI Bank",
  ];

  const tradersList = [
    "Retail traders",
    "Institutions (FIIs, DIIs)",
    "HNIs (High Net-worth Individuals)",
    "Corporates (for hedging purposes)",
  ];

  const platformsList = [
    "Zerodha (Kite)",
    "Upstox",
    "ICICI Direct",
    "Groww",
    "Angel One",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>What is NSE F&O? Futures & Options Trading Guide | Master Trader</title>
        <meta
          name="description"
          content="Learn what NSE F&O is, how futures & options work, margin rules, expiry, and risks in the NSE F&O market."
        />
        <meta
          name="keywords"
          content="NSE F&O, NSE F&O market, futures and options trading, NSE derivatives, F&O trading India, options trading NSE, futures trading NSE, NIFTY options, BANKNIFTY futures, F&O margin, F&O expiry, derivatives trading NSE"
        />
        <link rel="canonical" href="https://www.mastertrader.co.in/markets/nse-f-o" />

        {/* Open Graph */}
        <meta property="og:title" content="What is NSE F&O? Futures & Options Trading Guide | Master Trader" />
        <meta
          property="og:description"
          content="Learn what NSE F&O is, how futures & options work, margin rules, expiry, and risks in the NSE F&O market."
        />
        <meta property="og:url" content="https://www.mastertrader.co.in/markets/nse-f-o" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Master Trader" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://www.mastertrader.co.in/MT-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MasterrTraderr" />
        <meta name="twitter:title" content="What is NSE F&O? Futures & Options Trading Guide | Master Trader" />
        <meta
          name="twitter:description"
          content="Learn what NSE F&O is, how futures & options work, margin rules, expiry, and risks in the NSE F&O market."
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
        title="What is NSE F&O? A Complete Guide to Futures & Options Trading"
        subtitle="NSE F&O refers to the Futures and Options segment of the National Stock Exchange (NSE) in India, one of the most active derivatives markets in the world. In the NSE F&O market, contracts derive their value from underlying assets such as stocks, indices, or commodities, allowing traders to speculate, hedge, and manage risk without owning the underlying asset outright."
      />

      {/* Main Overview Section */}


      {/* Key Components Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center">
            Key Components of NSE F&O
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md border-t-4 border-[var(--primary-color)]">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                1. Futures Contracts
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                A futures contract is an agreement to buy or sell an asset at a predetermined price on a future date.
              </p>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400 mb-4">
                <strong>Example:</strong> You buy a futures contract of Reliance at ₹2,800 expiring in July. Regardless of the actual market price in July, the contract binds you to buy at ₹2,800.
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Futures in the NSE F&O segment are commonly used for speculation or hedging, whether the underlying is an individual stock, a broad market index, or a commodity like gold and crude oil.
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md border-t-4 border-[var(--primary-color)]">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                2. Options Contracts
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                An options contract gives the buyer the right but not the obligation to buy or sell an asset at a certain price on or before expiry.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Call Option:</strong> Right to buy</li>
                <li><strong>Put Option:</strong> Right to sell</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Buyers pay a premium to sellers for this right, and the payoff depends on the strike price and premium relative to where the underlying ends up. For a deeper look at how these contracts are structured, see <a href="https://www.mastertrader.co.in/knowledge/future-options" className="text-blue-500 hover:underline">Futures & Options</a> .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How NSE F&O Works Table Section */}
      <section className="py-8 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            How NSE F&O Works
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Feature</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {contractFeatures.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold text-[var(--primary-color)]">{row.feature}</td>
                    <td className="p-4">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-white dark:bg-[--bg-color1] rounded-lg text-base text-gray-700 dark:text-gray-400 max-w-4xl mx-auto shadow-sm">
            This margin requirement is what makes F&O capital-efficient compared to buying shares outright. The exact amount varies by contract and is explained further under  <a href="https://www.mastertrader.co.in/knowledge/margin-trading" className="text-blue-500 hover:underline">Margin Trading</a> .

          </div>
        </div>
      </section>

      {/* Why Do Traders Use NSE F&O Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Why Do Traders Use the NSE F&O Market?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md"
              >
                <TrendingUp className="text-[var(--primary-color)] w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-600 dark:text-gray-400">
            All three strategies build on the same price action that drives <a href="https://www.mastertrader.co.in/knowledge/equity-trading" className="text-blue-500 hover:underline">Equity Trading</a> , since F&O prices track and amplify what's happening in the spot market.
          </p>
        </div>
      </section>

      {/* Risks Involved Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Risks Involved in NSE F&O Trading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {risks.map((risk, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-[--bg-color1] rounded-xl shadow-md border-l-4 border-amber-500"
              >
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {risk.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{risk.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-base text-gray-600 dark:text-gray-400">
            Traders who square off positions the same day face a slightly different risk profile than those holding till expiry; timing and exits are covered separately under <a href="https://www.mastertrader.co.in/knowledge/intraday-trading" className="text-blue-500">Intraday Trading</a>.

          </p>
        </div>
      </section>

      {/* Popular Instruments Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Popular NSE F&O Instruments
          </h2>
          <div className=" max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white text-center">
                Index Derivatives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {indexDerivatives.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm"
                  >
                    <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white text-center">
                Stock Derivatives (Top Traded)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
                {stockDerivatives.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm"
                  >
                    <Briefcase className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-base text-gray-600 dark:text-gray-400">
            Traders looking to diversify beyond equities often apply the same hedging logic to <a href="https://www.mastertrader.co.in/products/commodity" className="text-blue-500 hover:underline">Commodity</a>  or <a href="https://www.mastertrader.co.in/products/forex" className="text-blue-500 hover:underline">Forex</a> markets, where similar futures and options structures apply.
          </p>
        </div>
      </section>

      {/* Who Can Trade & Platforms */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              Who Can Trade in the NSE F&O Segment?
            </h2>
            <div className="space-y-3">
              {tradersList.map((trader, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow-sm"
                >
                  <Briefcase className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{trader}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              Platforms for Trading NSE F&O
            </h2>
            <div className="space-y-3">
              {platformsList.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow-sm"
                >
                  <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{platform}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        <div className="max-w-7xl mx-auto ">
          <p className="mt-8 text-center text-base text-gray-600 dark:text-gray-400">
            These brokers also offer margin calculators, option chains, and strategy builders to help traders navigate the NSE F&O market more efficiently.

          </p>
        </div>
      </section>

      {/* Regulatory Oversight Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
            Regulatory Oversight
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            The NSE F&O segment is regulated by SEBI (Securities and Exchange Board of India). NSE ensures proper risk management, margin policies, and market surveillance to maintain a fair and transparent trading environment.
          </p>
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
            FAQs on NSE F&O
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

export default NseFoPage;