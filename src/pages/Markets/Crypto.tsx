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
    question: "1. Is crypto trading legal in India?",
    answer:
      "Yes, cryptocurrency is not banned in India, though it isn't recognized as legal tender. You can buy, sell, and hold crypto, but profits are taxed separately from regular income.",
  },
  {
    question: "2. How is crypto taxed in India?",
    answer:
      "Profits from crypto are taxed at a flat 30% plus surcharge, and a 1% TDS is deducted on transactions above a certain threshold, regardless of whether you made a profit or loss.",
  },
  {
    question: "3. What's the difference between crypto trading and investing?",
    answer:
      "Investing usually means holding a coin long-term, expecting it to appreciate, while trading involves acting on short-term price swings, closer to how Intraday Trading works in stock markets, just on a far more volatile asset.",
  },
  {
    question: "4. Which is the best cryptocurrency to start with?",
    answer:
      "Bitcoin and Ethereum are generally considered the most established and liquid options for beginners, given their longer track record and wider adoption compared to smaller altcoins.",
  },
  {
    question: "5. Can I lose more money than I invest in crypto?",
    answer:
      "On spot crypto trading (just buying and holding), no, you can only lose what you put in. Losses can exceed your capital only if you use leverage or margin, which amplifies both gains and losses.",
  },
  {
    question: "6. Is crypto trading riskier than stock market trading?",
    answer:
      "Generally yes. Crypto markets are less regulated and far more volatile than equities, so the risk management principles that apply to regular Trading matter even more here.",
  },
  {
    question: "7. Do I need a Demat account to trade crypto?",
    answer:
      "No. Crypto is traded through dedicated exchanges like CoinDCX, WazirX, or Binance using a crypto wallet, not through a traditional Demat and trading account used for stocks or F&O.",
  },
];

function CryptoTradingPage() {
  const [active, setActive] = useState<number>(0);




  const popularCoins = [
    { coin: "Bitcoin", symbol: "BTC", useCase: "Digital gold / store of value" },
    { coin: "Ethereum", symbol: "ETH", useCase: "Smart contracts, DeFi, NFTs" },
    { coin: "Tether", symbol: "USDT", useCase: "Stablecoin pegged to USD" },
    { coin: "BNB", symbol: "BNB", useCase: "Utility token for Binance exchange" },
    { coin: "Solana", symbol: "SOL", useCase: "Fast and scalable smart contracts" },
  ];

  const howItWorksTerms = [
    { term: "Blockchain", meaning: "Digital ledger storing data across multiple computers" },
    { term: "Wallet", meaning: "A digital tool to store and send crypto" },
    { term: "Mining", meaning: "Validating transactions (Proof of Work)" },
    { term: "Staking", meaning: "Earning rewards by locking tokens (Proof of Stake)" },
    { term: "Smart Contracts", meaning: "Programs that run automatically when conditions are met" },
  ];

  const IndianExchanges = [
    "CoinDCX",
    "WazirX",
    "ZebPay",
    "CoinSwitch Kuber",
    "Binance (Global)",
  ];

  const realWorldUseCases = [
    "Online Payments (e.g., Bitcoin)",
    "NFTs (Digital Art & Ownership)",
    "DeFi (Decentralized Finance)",
    "International Remittances",
    "Gaming (Play-to-Earn)",
  ];


  const whoCanBenefit = [
    "Investors: Looking for high-risk, high-reward options",
    "Developers: Building blockchain-based apps (Web3)",
    "Traders: Short-term profit through price movement",
    "Businesses:  Accepting crypto as payment or fundraising via ICOs",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Crypto Trading Guide: Coins, Risks & Tax in India | Master Trader</title>
        <meta
          name="description"
          content="Learn how crypto trading works, popular coins, key risks, and India's 30% tax rule."
        />
        <meta
          name="keywords"
          content="crypto trading, cryptocurrency India, Bitcoin trading, Ethereum trading, crypto tax India, buy crypto India, crypto trading risks, DeFi, blockchain trading, crypto exchanges India"
        />
        <link rel="canonical" href="https://www.mastertrader.co.in/markets/crypto" />

        {/* Open Graph */}
        <meta property="og:title" content="Crypto Trading Guide: Coins, Risks & Tax in India | Master Trader" />
        <meta
          property="og:description"
          content="Learn how crypto trading works, popular coins, key risks, and India's 30% tax rule."
        />
        <meta property="og:url" content="https://www.mastertrader.co.in/markets/crypto" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Master Trader" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://www.mastertrader.co.in/MT-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MasterrTraderr" />
        <meta name="twitter:title" content="Crypto Trading Guide: Coins, Risks & Tax in India | Master Trader" />
        <meta
          name="twitter:description"
          content="Learn how crypto trading works, popular coins, key risks, and India's 30% tax rule."
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
        title="Understand Crypto Trading Before You Invest"
        subtitle="From Bitcoin to DeFi, learn how cryptocurrency works, where to trade it in India, and what risks and tax rules apply before you put money in."
      />

      {/* Highlights Bar */}
      {/* <section className="bg-white dark:bg-[--bg-color1] py-4 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center font-medium text-sm text-[var(--primary-color)]">
          Blockchain basics &bull; Top coins &bull; India tax rules &bull; Risk breakdown
        </div>
      </section> */}

      {/* Main Overview Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            What is Cryptocurrency?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Cryptocurrency is a digital or virtual currency that uses cryptography for security. Unlike traditional currencies (like INR or USD), it's decentralized and not issued by any government or central bank.
            </p>
          </div>
          <div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 flex justify-center gap-4 mt-6">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Blockchain-based</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Peer-to-peer transactions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Global and borderless</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How Does It Work Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-center">
            How Does It Work?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Cryptocurrencies operate on blockchain technology, a distributed ledger that ensures secure and transparent transactions.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Term</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {howItWorksTerms.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold text-[var(--primary-color)]">{item.term}</td>
                    <td className="p-4">{item.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Popular Cryptocurrencies Table Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Popular Cryptocurrencies
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md max-w-4xl mx-auto">
            <table className="w-full text-left text-gray-700 dark:text-gray-300 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Coin</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Symbol</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {popularCoins.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                    <td className="p-4 font-semibold">{row.coin}</td>
                    <td className="p-4 font-mono text-[var(--primary-color)]">{row.symbol}</td>
                    <td className="p-4">{row.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Do People Use Crypto Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Why Do People Use Crypto?
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "No Banks or Intermediaries",
              "Global Accessibility",
              "Fast, Low-Fee Transfers",
              "Investment & Speculation",
              "Privacy & Transparency",
            ].map((title, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md flex gap-2"
              >
                <TrendingUp className="text-[var(--primary-color)] w-6 h-6 mb-4" />

                <h3 className="text-base font-semibold text-black dark:text-white">
                  {title}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg text-base text-gray-600 dark:text-gray-400">
            <p>
              The speculative side of crypto trading isn't too different in spirit from how traders approach <a href="https://www.mastertrader.co.in/knowledge/trading" className="text-blue-500 hover:underline">Trading</a> in traditional markets; the goal is still to read price movement and manage risk, just on a very different asset class.

            </p>
          </div>
        </div>
      </section>

      {/* Where to Buy & Real-World Use Cases */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              Where to Buy Crypto in India?
            </h2>
            <div className="space-y-3">
              {IndianExchanges.map((ex, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow"
                >
                  <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{ex}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              Real-World Use Cases
            </h2>
            <div className="space-y-3">
              {realWorldUseCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow"
                >
                  <TrendingUp className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risks & Regulations Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Risks & Regulations
          </h2>
          <div className="max-w-4xl mx-auto mb-10 overflow-x-auto">
            <table className="w-full text-center border-collapse border border-gray-300 dark:border-gray-700 bg-white dark:bg-[--bg-color1]">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                  <th className="p-3 border-r border-gray-300 dark:border-gray-700 font-bold text-gray-900 dark:text-white w-1/3">
                    Risk
                  </th>
                  <th className="p-3 font-bold text-gray-900 dark:text-white w-2/3">
                    Explanation
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { title: "Volatility", desc: "Prices fluctuate wildly" },
                  { title: "Scams", desc: "Ponzi schemes and fake tokens exist" },
                  { title: "Security", desc: "Exchanges can be hacked" },
                  { title: "Legal Uncertainty", desc: "Governments are still developing crypto laws" },
                ].map((risk, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="p-3 border-r border-gray-300 dark:border-gray-700 font-medium text-gray-800 dark:text-gray-200">
                      {risk.title}
                    </td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">
                      {risk.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-8 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 max-w-4xl mx-auto">

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>In India:</strong> Crypto is not banned, but not legal tender. Profits are taxed at 30% + surcharge. 1% TDS is deducted per transaction (above a threshold).
            </p>
            <p className=" text-gray-500 dark:text-gray-400 mt-4">
              This kind of volatility is often sharper and less predictable than what traders typically see in <a href="https://www.mastertrader.co.in/knowledge/intraday-trading" className="text-blue-500 hover:underline">Intraday Trading</a> on regulated exchanges, so position sizing and risk limits matter even more here.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Use Crypto Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Who Should Use Crypto Trading?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {whoCanBenefit.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow"
              >
                <Briefcase className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item}</span>
              </div>
            ))}
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


      {/* Perks / Features Grid Section */}
      <section className="bg-white dark:bg-[--bg-color1] py-16 px-4 md:px-8 lg:px-32">
        <div className="max-w-7xl mx-auto items-center gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
              Conclusion
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="max-w-4xl mx-auto text-center">
                Crypto trading is a revolutionary financial technology, but it comes with both massive potential and high risk. Educate yourself, start small, and always use secure platforms and wallets.
              </p>
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
            FAQs on Crypto Trading
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

export default CryptoTradingPage;