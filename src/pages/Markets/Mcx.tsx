import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  TrendingUp,
  TrendingDown,
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
    question: "1. What is the full form of MCX?",
    answer:
      "MCX stands for Multi Commodity Exchange of India Ltd., a SEBI-regulated exchange dedicated to commodity derivatives.",
  },
  {
    question: "2. What commodities can I trade on MCX?",
    answer:
      "MCX covers bullion (gold, silver), base metals (copper, zinc, aluminum), energy (crude oil, natural gas), and agri commodities (cotton, crude palm oil, mentha oil).",
  },
  {
    question: "3. Do I need a Demat account for MCX Trading?",
    answer:
      "Not always. A commodity trading account is enough for futures trading, but a Demat account may be required if you're dealing in options or opt for physical delivery.",
  },
  {
    question: "4. What is the minimum capital needed to start MCX Trading?",
    answer:
      "This depends on the lot size and margin requirement for the specific commodity contract, similar to how Margin Trading works in equity derivatives; higher-volatility commodities usually carry higher margins.",
  },
  {
    question: "5. What are MCX trading hours?",
    answer:
      "MCX runs two sessions on weekdays: a day session from 9:00 AM to 5:00 PM for agri commodities, and an evening session from 5:00 PM to 11:30/11:55 PM for non-agri commodities.",
  },
  {
    question: "6. Can I trade MCX intraday?",
    answer:
      "Yes, many traders square off commodity positions within the same session rather than holding till expiry. The approach is similar to Intraday Trading in equities, just applied to commodities.",
  },
  {
    question: "7. Is MCX trading safe for beginners?",
    answer:
      "MCX is well-regulated by SEBI with margin enforcement and clearinghouse-backed settlement, but commodity prices can be highly volatile due to global demand, currency swings, and geopolitical events, so beginners should start small and understand contract specifications first.",
  },
  {
    question: "8. What's the difference between MCX and NSE?",
    answer:
      "NSE deals primarily in equities and equity derivatives, while MCX is dedicated exclusively to commodity futures and options like gold, silver, and crude oil.",
  },
];

function McxTradingPage() {
  const [active, setActive] = useState<number>(0);


  const keyFeatures = [
    "Bullion: Gold, Silver",
    "Base Metals: Copper, Zinc, Aluminum",
    "Energy: Crude Oil, Natural Gas",
    "Agri Commodities: Cotton, Crude Palm Oil, Mentha Oil",
  ];


  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>MCX Trading: Commodity Futures & Options Guide | Master Trader</title>
        <meta
          name="description"
          content="Learn what MCX Trading is, how commodity futures & options work, and how to start trading gold, silver & crude oil."
        />
        <meta
          name="keywords"
          content="MCX Trading, MCX full form, Multi Commodity Exchange, commodity trading India, MCX gold trading, MCX silver, crude oil trading, commodity futures, commodity options, MCX trading account, MCX trading hours"
        />
        <link rel="canonical" href="https://www.mastertrader.co.in/mcx-trading" />

        {/* Open Graph */}
        <meta property="og:title" content="MCX Trading: Commodity Futures & Options Guide | Master Trader" />
        <meta
          property="og:description"
          content="Learn what MCX Trading is, how commodity futures & options work, and how to start trading gold, silver & crude oil."
        />
        <meta property="og:url" content="https://www.mastertrader.co.in/mcx-trading" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Master Trader" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://www.mastertrader.co.in/MT-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MasterrTraderr" />
        <meta name="twitter:title" content="MCX Trading: Commodity Futures & Options Guide | Master Trader" />
        <meta
          name="twitter:description"
          content="Learn what MCX Trading is, how commodity futures & options work, and how to start trading gold, silver & crude oil."
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
        title="Trade Commodities with Confidence on MCX"
        subtitle="Access gold, silver, crude oil, natural gas, and agri-commodities through India's leading commodity derivatives exchange regulated by SEBI and built for speculation, hedging, and portfolio diversification."
      />

      {/* Main Overview Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            What is MCX Trading?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              The full form of MCX is <strong>Multi Commodity Exchange</strong>. Similar to NSE and BSE, it enables trading in derivative contracts but focuses solely on commodities rather than equities. MCX, or Multi Commodity Exchange of India Ltd., is India's leading platform for trading commodity derivatives. Established in 2003 and regulated by SEBI, MCX allows traders to buy and sell futures and options contracts for commodities like gold, silver, crude oil, natural gas, and various agricultural products.
            </p>
            <h3 className="text-xl font-bold text-black dark:text-white mt-4">
              What is MCX in the Stock Market?
            </h3>
            <p>
              In the context of India's financial markets, MCX is a dedicated platform for commodity derivatives. Traders don't deal with the physical asset; instead, they trade contracts whose value fluctuates with the commodity's price. The underlying logic isn't too different from <a href="https://www.mastertrader.co.in/knowledge/equity-trading" className="text-blue-500 hover:underline">Equity Trading</a>, where understanding contract structure and timing matters just as much as picking the right commodity or stock.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features / Commodities Traded Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Commodities Traded on MCX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow"
              >
                <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Instruments Traded on MCX
          </h2>
          <div className=" gap-8">
            <div
              className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md"
            >
              <div className="flex gap-4 justify-center">
                <TrendingUp className="text-[var(--primary-color)] w-6 h-6" />
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  Futures Contracts

                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-center">
                Standardized contracts for buying or selling commodities at a predetermined price on a future date.

              </p>
            </div>
            <div
              className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md"
            >
              <div className="flex gap-4 justify-center">
                <TrendingUp className="text-[var(--primary-color)] w-6 h-6" />
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  Options Contracts

                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Grants the right (but not obligation) to buy or sell a futures contract at a set price before expiry. Available for commodities like Gold, Silver, and Crude Oil. The mechanics here mirror equity derivatives fairly closely; if you've traded <a href="https://www.mastertrader.co.in/knowledge/future-options" className="text-blue-500 hover:underline">futures & Options</a>  on stocks or indices before, the strike-and-premium logic will already feel familiar.

              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-center">
            MCX Trading Account
          </h2>

          <p className="max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-400 text-center">
            To start MCX Trading, you need a commodity trading account activated
            for futures and options. A Demat account may be required for delivery
            or options trading.
          </p>
          <div className="text-gray-600 dark:text-gray-400 text-center">
            <p>
              <strong>Non-Agri Commodity Account – </strong> for metals and energy.
            </p>
            <p> <strong>Agri Commodity Account – </strong> necessary for agricultural contracts under SEBI rules.
            </p>
          </div>

        </div>
      </section>

      {/* Factors Affecting Prices */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Factors Affecting Commodity Prices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Global demand and supply",
              "Currency fluctuations, especially USD-INR",
              "Geopolitical events",
              "Weather, impacting agriculture",
              "Inventory data and global reports",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow"
              >
                <TrendingDown className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Advantages of Commodity Trading
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            {[
              "Portfolio diversification beyond equities and bonds",
              "Hedging against input cost or inflation risks",
              "Transparent & real-time pricing",
              "Margin leverage to amplify returns (and risks)",
            ].map((item, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md flex gap-4"
              >
                <TrendingUp className="text-[var(--primary-color)] w-6 h-6 mb-4" />

                <p className="text-gray-600 dark:text-gray-400">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg text-base text-gray-600 dark:text-gray-400">
            Since leverage is what makes commodity trading capital-efficient, it's worth understanding how <a href="https://www.mastertrader.co.in/knowledge/margin-trading" className="text-blue-500 hover:underline">Margin Trading</a>  works before sizing your first position. The same principle that magnifies gains can just as easily magnify losses.          </div>
        </div>
      </section>



      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-black dark:text-white text-center">
            How to Trade on MCX?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Traders who prefer squaring off within the same session often approach MCX similar to Intraday Trading in equities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {[
              "Open a commodity trading account after KYC",
              "Link a bank account and add funds",
              "Analyze commodity price trends",
              "Place futures or options orders",
              "Monitor positions during trading sessions",
              "Square off or roll over positions as needed",
            ].map((step, index) => (
              <div
                key={index}
                className="relative p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-lg flex gap-4"
              >
                {/* <div className="absolute top-4 right-4 text-5xl font-black text-[var(--primary-color)]/15">
                  {index + 1}
                </div> */}

                <div className="w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>

                <p className="text-gray-600 dark:text-gray-400">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Traders who prefer squaring off within the same session rather than carrying positions overnight often approach MCX the same way they would <a href="https://www.mastertrader.co.in/knowledge/intraday-trading" className="text-blue-500 hover:underline">Intraday Trading</a>  in equities; the discipline around entries and exits carries over well.

          </p>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Investing in Commodities in India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {["Regulation by SEBI", "Investment opportunities in key commodities", "Strategic use for speculation, hedging, or inflation protection"].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow"
              >
                <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Regulation Disclaimer Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800">
            <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">
              Is MCX Safe & Regulated?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Yes, MCX operates under strict SEBI guidelines and maintains comprehensive security infrastructure including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Margin enforcement</li>
              <li>Real-time surveillance</li>
              <li>Clearinghouse-backed settlement</li>
              <li>Investor grievance systems</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed my-3">
              This gives it a robust structure comparable to other regulated exchanges.

            </p>
          </div>
        </div>
      </section>


      {/* Trading Hours Table Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            MCX Trading Hours
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Session Type</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Time (IST)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-4">Day Session (Agri Commodities)</td>
                  <td className="p-4 font-mono">9:00 AM – 5:00 PM (Mon–Fri)</td>
                </tr>
                <tr>
                  <td className="p-4">Evening Session (Non-Agri)</td>
                  <td className="p-4 font-mono">5:00 PM – 11:30 PM / 11:55 PM (Mon–Fri)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      <section className="bg-white dark:bg-[--bg-color1] py-16 px-4 md:px-8 lg:px-32">
        <div className="max-w-7xl mx-auto items-center gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
              Conclusion
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="max-w-4xl mx-auto text-center">
Understanding MCX Trading equips you to diversify your portfolio, hedge risks, or engage in speculation on commodity price trends. With proper market knowledge, time management, and strategy, MCX can become an effective addition to your investment toolkit, especially for those comfortable with intraday and short-term trading volatility. For a broader foundation on how derivative markets work across asset classes, Knowing <a href="https://www.mastertrader.co.in/knowledge/commodity-trading" className="text-blue-500 hover:underline"> Commodity Trading</a> is a good next step.
              </p>
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
            FAQs on MCX Trading
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

export default McxTradingPage;