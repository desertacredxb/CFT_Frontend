import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Briefcase,
  Shield,
  ChevronDown,
  Check,
} from "lucide-react";
import Navbar from "../../components/Nav";
import PageBanner from "../../components/BannerImage";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

// 1. FAQ Data
const faqs = [
  {
    question: "1. What does COMEX stand for?",
    answer:
      "COMEX stands for Commodity Exchange Inc., a New York-based exchange operated by CME Group that trades futures and options on metals like gold, silver, and copper.",
  },
  {
    question: "2. Is COMEX the same as MCX?",
    answer:
      "No. COMEX is based in the USA and prices metals in USD, while MCX is based in India and prices contracts in INR. COMEX generally has higher liquidity and sets the global benchmark that MCX prices often follow.",
  },
  {
    question: "3. Can Indians trade directly on COMEX?",
    answer:
      "Direct access to COMEX requires an international broker and falls under the RBI's Liberalised Remittance Scheme (LRS). Most Indian traders instead track COMEX prices and trade the equivalent contracts on MCX, which is regulated by SEBI.",
  },
  {
    question: "4. Why does COMEX price movement affect MCX prices?",
    answer:
      "Since gold, silver, and other metals are globally traded commodities, MCX prices adjust to reflect international rates set on COMEX, along with currency movement in USD/INR. This is why MCX often gaps up or down at the start of the day based on overnight COMEX activity.",
  },
  {
    question: "5. What are COMEX trading hours in IST?",
    answer:
      "COMEX operates through the Globex electronic trading system nearly around the clock, from about 6:00 AM to 5:00 AM the next day IST, with only a short daily break. Floor trading has largely been phased out in favor of this electronic system.",
  },
  {
    question: "6. Is COMEX regulated?",
    answer:
      "Yes. COMEX is owned by CME Group and regulated by the U.S. Commodity Futures Trading Commission (CFTC), which oversees market conduct, transparency, and risk controls.",
  },
  {
    question: "7. What commodities are traded on COMEX?",
    answer:
      "COMEX primarily trades futures and options on precious and base metals, including gold, silver, copper, platinum, and palladium.",
  },
  {
    question: "8. Why do traders track COMEX even if they trade on MCX?",
    answer:
      "Because COMEX sets the global reference price for metals, tracking it helps MCX traders anticipate price gaps, spot arbitrage opportunities, and time entries around global market-moving events like U.S. Federal Reserve announcements.",
  },
];

function ComexMarketPage() {
  const [active, setActive] = useState<number>(0);


  const tradedMetals = [
    { commodity: "Gold", symbol: "GC", type: "Bullion" },
    { commodity: "Silver", symbol: "SI", type: "Bullion" },
    { commodity: "Copper", symbol: "HG", type: "Base Metal" },
    { commodity: "Platinum", symbol: "PL", type: "Precious Metal" },
    { commodity: "Palladium", symbol: "PA", type: "Precious Metal" },
  ];

  const comexVsMcx = [
    { feature: "Location", comex: "USA", mcx: "India" },
    { feature: "Currency", comex: "USD", mcx: "INR" },
    { feature: "Trading", comex: "Global metals", mcx: "Indian + Global (in INR)" },
    { feature: "Liquidity", comex: "Higher", mcx: "Moderate" },
    { feature: "Access", comex: "Global brokers", mcx: "SEBI-registered brokers" },
  ];


  const whoUses = [
    "Speculators, hedgers, and arbitrageurs",
    "Institutions: hedge funds, banks",
    "Producers: miners, jewelers",
    "Retail investors via ETFs or brokers",
  ];

  const accessWays = [
    "Indians can track COMEX prices to trade informed on MCX.",
    "Direct COMEX access requires international brokers via LRS.",
    "Useful for arbitrage and hedging strategies.",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>COMEX Market Guide: Metals Pricing Explained | Master Trader</title>
        <meta
          name="description"
          content="Learn how the COMEX market sets global metals prices and how it affects MCX trading in India."
        />
        <meta
          name="keywords"
          content="COMEX market, COMEX vs MCX, COMEX gold price, COMEX silver, CME Group, CFTC regulated, global metals pricing, COMEX trading hours, gold futures COMEX, commodity exchange"
        />
        <link rel="canonical" href="https://www.mastertrader.co.in/markets/comex" />

        {/* Open Graph */}
        <meta property="og:title" content="COMEX Market Guide: Metals Pricing Explained | Master Trader" />
        <meta
          property="og:description"
          content="Learn how the COMEX market sets global metals prices and how it affects MCX trading in India."
        />
        <meta property="og:url" content="https://www.mastertrader.co.in/markets/comex" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Master Trader" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://www.mastertrader.co.in/MT-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MasterrTraderr" />
        <meta name="twitter:title" content="COMEX Market Guide: Metals Pricing Explained | Master Trader" />
        <meta
          name="twitter:description"
          content="Learn how the COMEX market sets global metals prices and how it affects MCX trading in India."
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
        title="Track the Global Benchmark for Metals: COMEX"
        subtitle="COMEX sets the world price for gold, silver, copper, and other metals. Understand how it works and how it shapes prices you trade on MCX in India."
      />

      {/* Highlights Bar */}
      <section className="bg-white dark:bg-[--bg-color1] py-4 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center font-medium text-sm text-[var(--primary-color)]">
          Global metals pricing &bull; CFTC-regulated &bull; Gold, Silver, Copper & more
        </div>
      </section>

      {/* Main Overview Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            What is COMEX?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
             <a href="https://www.mastertrader.co.in/products/comex" className="text-blue-500 hover:underline">COMEX</a>  stands for Commodity Exchange Inc., one of the world's largest commodity futures and options exchanges, known for global metals pricing.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Based in New York, USA</li>
              <li>Operated by CME Group</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Does COMEX Trade Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-center">
            What Does COMEX Trade?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            COMEX sets global benchmark prices for major metals:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Commodity</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Symbol</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Type</th>
                </tr>
              </thead>
              <tbody>
                {tradedMetals.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold">{row.commodity}</td>
                    <td className="p-4 font-mono text-[var(--primary-color)]">{row.symbol}</td>
                    <td className="p-4">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How Does COMEX Work & Why Important */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
              How Does COMEX Work?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow-sm">
                <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Electronic market for futures contracts on metals.</span>
              </li>
              <li className="flex items-start gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow-sm">
                <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Most contracts are cash-settled without physical delivery.</span>
              </li>
              <li className="flex items-start gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow-sm">
                <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Used by speculators, hedgers, and arbitrageurs globally.</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
              Why is COMEX Important?
            </h2>
            <div className="space-y-4">
              {[
  "Establishes global benchmark prices for gold and silver",
  "Offers hedging opportunities for miners, investors, and jewelers",
  "Highly liquid and transparent pricing",
].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow-sm">
                <Check className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
              </li>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMEX Trading Hours */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            COMEX Trading Hours (IST)
          </h2>
          <div className="space-y-2 text-gray-700 dark:text-gray-300 text-center">
            <div className="p-2 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm">
              <strong>Globex Electronic:</strong> 6:00 AM to 5:00 AM (next day)
            </div>
            <div className="p-2 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm">
              <strong>Floor Trading:</strong> Mostly phased out in favor of electronic trading
            </div>
          </div>
        </div>
      </section>

      {/* COMEX vs MCX Section */}
      <section className="py-8 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            COMEX vs MCX (India)
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Feature</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">COMEX</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">MCX</th>
                </tr>
              </thead>
              <tbody>
                {comexVsMcx.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold">{row.feature}</td>
                    <td className="p-4 text-[var(--primary-color)] font-medium">{row.comex}</td>
                    <td className="p-4 font-medium">{row.mcx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-4 bg-white dark:bg-[--bg-color1] rounded-lg text-base text-gray-700 dark:text-gray-300  max-w-4xl mx-auto shadow-sm">
Since MCX prices for gold and silver largely track what happens on COMEX overnight, many traders keep an eye on both. If you already trade <a href="https://www.mastertrader.co.in/knowledge/commodity-trading" className="text-blue-500 hover:underline">Commodity</a>  contracts on MCX, understanding COMEX price action can help explain gaps you see when the Indian market opens.
          </div>
        </div>
      </section>

      {/* How Can You Access & Who Uses COMEX */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              How Can You Access COMEX?
            </h2>
            <div className="space-y-3">
              {accessWays.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm"
                >
                  <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              Who Uses COMEX?
            </h2>
            <div className="space-y-3">
              {whoUses.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow-sm"
                >
                  <Briefcase className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{user}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulation Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
            Is COMEX Regulated?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Yes. COMEX is owned by the CME Group and regulated by the U.S. CFTC (Commodity Futures Trading Commission), ensuring robust oversight and transparency.
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
            FAQs on COMEX Market
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

export default ComexMarketPage;