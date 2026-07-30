import {
  ArrowBigRight,
  Scale,
  TrendingUp,
  Wallet,
  Clock,
  Globe,
  ShieldCheck,
} from "lucide-react";
import PageBanner from "../../../components/BannerImage";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Nav";
import cfdImage from "../../../assets/Margin Trading.png";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import FaqSection from "../../../components/FaqSection";

const faqs = [
  {
    question: "What is margin trading?",
    answer:
      "It means borrowing funds from your broker to take a larger position in the market than your own money would allow. You put down a portion of the trade value as margin, and the broker funds the rest. This is the simplest margin trading meaning you need to remember.",
  },
  {
    question: "Is margin trading high risk?",
    answer:
      "Yes, it carries higher risk than normal trading. Because both profits and losses are calculated on the full position size, a small adverse price move can lead to a loss much larger than what you would face in a regular cash trade.",
  },
  {
    question: "Is margin trading good for beginners?",
    answer:
      "It is generally not recommended for complete beginners. A trader is better off first building a solid understanding of how the market moves, how to place a stop loss, and how to manage risk before using borrowed funds to trade.",
  },
  {
    question: "Is margin trading illegal?",
    answer:
      "No, it is completely legal in India, and understanding the margin trading meaning helps clear up this common doubt. It is regulated by SEBI, and brokers offer margin facilities such as the Margin Trading Facility, or MTF, within clear rules set by the exchanges and the regulator.",
  },
  {
    question: "How much money do I need for margin?",
    answer:
      "The amount required depends on the instrument, the broker, and the current margin requirement set by the exchange. Some instruments may need a smaller deposit, while others, especially more volatile ones, require a larger margin. Always check the live margin requirement before placing a trade.",
  },
  {
    question: "Is margin trading free?",
    answer:
      "No, it is not free. When you borrow funds from your broker, you usually pay interest on the borrowed amount for as long as you hold the position. There may also be other charges depending on the broker and the product.",
  },
  {
    question: "What is the golden rule of margin trading?",
    answer:
      "The golden rule is to protect your capital before chasing profit. This means using a stop loss on every trade, never risking too much of your account on a single position, and never adding funds to a losing trade just to avoid accepting a loss.",
  },
  {
    question: "What are the disadvantages of margin trading?",
    answer:
      "The main disadvantages include the risk of losses larger than your original deposit, interest costs on borrowed funds, the pressure of margin calls, and the temptation to overtrade because of the extra buying power available. These disadvantages are exactly why risk management is so important.",
  },
];

const comparisonRows = [
  [
    "Capital needed",
    "A fraction of the total trade value",
    "Full trade value",
  ],
  [
    "Profit potential",
    "Higher, based on full position size",
    "Based only on your own investment",
  ],
  [
    "Loss potential",
    "Higher, can exceed a normal trade",
    "Limited to your invested amount",
  ],
  [
    "Extra cost",
    "Interest on the borrowed amount",
    "None beyond standard brokerage",
  ],
  [
    "Best suited for",
    "Experienced, active traders",
    "Beginners and long-term investors",
  ],
];

const goldenRules = [
  {
    title: "Never risk more than a small percentage",
    description:
      "Many experienced traders follow a one to two percent rule. Never risk more than a small percentage of your capital on one trade.",
    icon: "⚡",
  },
  {
    title: "Always use a stop loss",
    description:
      "This single habit protects you from small mistakes turning into large losses.",
    icon: "🛡️",
  },
  {
    title: "Match your leverage to volatility",
    description:
      "Highly volatile instruments deserve smaller position sizes.",
    icon: "📊",
  },
  {
    title: "Keep a buffer above required margin",
    description:
      "Do not run your account right at the edge of a margin call.",
    icon: "💰",
  },
  {
    title: "Avoid adding to a losing position",
    description:
      "This is one of the fastest ways to turn a small loss into a large one.",
    icon: "🚫",
  },
  {
    title: "Track your trades",
    description:
      "A simple trading journal helps you learn from both your wins and your mistakes.",
    icon: "📝",
  },
];

function MarginTrading() {
  const navigator = useNavigate();

  const features = [
    {
      icon: <Scale className="text-[var(--primary-color)] w-8 h-8" />,
      title: "More Buying Power",
      description: "Take positions larger than your available cash with leveraged trading.",
    },
    {
      icon: <TrendingUp className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Higher Potential Returns",
      description: "When used carefully, margin can improve the percentage return on your own capital.",
    },
    {
      icon: <Wallet className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Better Use of Capital",
      description: "You are not locking up your full trading amount in a single position.",
    },
    {
      icon: <Clock className="text-[var(--primary-color)] w-8 h-8" />,
      title: "More Trading Opportunities",
      description: "With extra buying power, you can act on short term price movements you would otherwise miss.",
    },
    {
      icon: <Globe className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Flexibility Across Markets",
      description: "It is available on stocks, commodities, and index products.",
    },
    {
      icon: <ShieldCheck className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Risk Management Tools",
      description: "Built-in tools to help you manage risk while trading on margin.",
    },
  ];

  const title = "Margin Trading: Borrow, Trade, Grow | Master Traders";
  const desc = "Understand what margin trading really means, how it works, the risks, and the golden rules to trade responsibly. Clear, honest guidance from Master Traders."
  const keywords = "margin trading, margin trading India, what is margin trading, margin trading meaning, margin trading vs cash trading, MTF margin trading, SEBI margin trading rules, Master Traders margin"

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Margin Trading: Borrow, Trade, Grow | Master Traders</title>
        <meta
          name="title"
          content={title}
        />
        <meta
          name="description"
          content={desc}
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/knowledge/margin-trading"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/knowledge/margin-trading"
        />
        <meta
          property="og:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={desc}
        />
        <meta property="og:site_name" content="Master Traders" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={title}
        />
        <meta
          name="twitter:description"
          content={desc}
        />
        <meta name="twitter:site" content="@MasterrTraderr" />
        <meta
          name="twitter:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />
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
        title="Margin Trading Explained: What It Really Means for Traders"
        subtitle="Margin trading is one of the most talked-about ways to trade in the stock market, but most beginners never get a clear, simple explanation of what it actually means. At Master Traders, we believe every trader deserves to understand a product before using it. This page breaks down the margin trading meaning in plain language, with no confusing jargon, so you can decide if it fits your trading style."
      />

      {/* Section 2: What is Margin Trading */}
      <section className="relative py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto ">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold tracking-wide mb-6">
              Understanding Margin Trading
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight mb-6">
              What Is{" "}
              <span className="text-[--primary-color]">Margin Trading?</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mb-8" />

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-8">
              The margin trading meaning starts with one idea: borrowing money from your broker to buy more shares or contracts than your own cash would normally allow. Instead of using only your own funds, you put down a small part of the total trade value, called the margin, and the broker funds the rest.
            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-8">
              Suppose you have ten thousand rupees, but you want to buy shares worth one lakh rupees. Without it, you simply cannot make this trade. With margin trading, your ten thousand rupees acts as a deposit, and the broker allows you to control the full one lakh rupee position. If the price goes up, your profit is calculated on the full position, not just your own ten thousand rupees.
            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-8 font-semibold">
              This is the core margin trading meaning that every new trader should know before going further. It is not free money. It is borrowed buying power, and it comes with rules, costs, and risks attached.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How Does Margin Trading Work */}
      <section className="relative py-24 px-6 bg-gray-50 dark:bg-[#0F0903] overflow-hidden transition-colors duration-300">
        <div className="absolute -top-32 right-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 left-0 w-[350px] h-[350px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold tracking-wide mb-5">
              The Process
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
              How Does{" "}
              <span className="text-[--primary-color]">Margin Trading</span> Work?
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Understanding the margin trading meaning is only the first step. Here is how the process actually works on a trading platform like Master Traders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "You deposit funds",
                description: "You add money or approved securities into your trading account. This becomes your collateral.",
              },
              {
                step: "02",
                title: "The broker sets your margin limit",
                description: "Based on your deposit and the instrument you want to trade, the broker calculates how much buying power you are allowed. This is your leverage.",
              },
              {
                step: "03",
                title: "You open a position",
                description: "You can now buy a larger quantity of shares, commodities, or contracts than your own money would normally allow.",
              },
              {
                step: "04",
                title: "Profit and loss are calculated on the full position",
                description: "If the market moves in your favor, your gains are based on the total trade value. If the market moves against you, your losses are based on the total trade value too.",
              },
              {
                step: "05",
                title: "Margin calls protect the system",
                description: "If your account balance falls below the required level, the broker asks you to add more funds. This is called a margin call. If you do not respond, the broker may close your position to limit further loss.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 dark:border-[--primary-color]/20 bg-white dark:bg-[--bg-color1] p-8 hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="w-14 h-14 rounded-xl bg-[--bg-primary-gradient] flex items-center justify-center text-white font-bold text-xl mb-6">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold text-[--bg-color1] dark:text-white mb-4 group-hover:text-[--primary-color] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Advantages of Trading on Margin */}
      <section className="relative py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
              Benefits
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
              Advantages of{" "}
              <span className="text-[--primary-color]">Trading on Margin</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Once the margin trading meaning is clear, the advantages become easy to see.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "More Buying Power",
                description: "You can take positions larger than your available cash.",
              },
              {
                icon: <Wallet className="w-8 h-8" />,
                title: "Better Use of Capital",
                description: "You are not locking up your full trading amount in a single position.",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "More Trading Opportunities",
                description: "With extra buying power, you can act on short term price movements you would otherwise miss.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Flexibility Across Markets",
                description: "It is available on stocks, commodities, and index products.",
              },
              {
                icon: <Scale className="w-8 h-8" />,
                title: "Higher Potential Returns",
                description: "When used carefully, margin can improve the percentage return on your own capital.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 hover:border-[--primary-color] hover:-translate-y-2 transition-all duration-300 shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-[--bg-primary-gradient] flex items-center justify-center text-white mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[--bg-color1] dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <div className="relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-14">
              <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                <div className="max-w-3xl">
                  <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                    Real-Time Margin Tracking
                  </span>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                    Want Real-Time Margin Tracking You Can Trust?
                  </h3>

                  <p className="text-lg text-gray-300 leading-8">
                    Master Traders gives you live margin usage, alerts before a margin call, and simple tools to manage risk while trading.
                  </p>
                </div>

                <Link
                  to={'/signup'}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] border-[--primary-color] border text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
                >
                  Explore Margin Trading Tools <ArrowBigRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Risks You Should Know */}
      <section className="relative py-24 px-6 bg-gray-50 dark:bg-[#0F0903] overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-semibold mb-5">
              Important Information
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
              Risks You{" "}
              <span className="text-[--primary-color]">Should Know</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-8">
              Knowing the margin trading meaning is one thing, but respecting its risk is just as important. It is powerful, but it works both ways. Just as gains are magnified, losses are magnified too. If a trade moves against you, your loss can be far larger than what a normal cash trade would produce. In some situations, you could lose more than your original deposit if proper stop loss and risk limits are not in place.

              </p>
            <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-8">

This is why it is not something to jump into without preparation. Every trader who uses margin should understand position sizing, stop loss orders, and how much of their capital is at risk on any single trade.

            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Who Should Trade on Margin */}
      <section className="relative py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
              Target Audience
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
              Who Should{" "}
              <span className="text-[--primary-color]">Trade on Margin?</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
          </div>

          <div className=" gap-8 max-w-5xl mx-auto">
            <div className="rounded-3xl border border-[--primary-color]/30 bg-[--bg-color1] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Best Suited For
                </h3>

                <ul className="space-y-5 text-gray-300 leading-7">
                  <li className="flex items-start gap-3">
                    <span className="text-[--primary-color] font-bold">✓</span>
                    <span>Traders who already understand how the stock market works</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[--primary-color] font-bold">✓</span>
                    <span>Active or intraday traders who monitor their positions closely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[--primary-color] font-bold">✓</span>
                    <span>Traders who use stop loss orders on every single trade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[--primary-color] font-bold">✓</span>
                    <span>People who have a clear trading plan and do not trade based on emotion</span>
                  </li>
                </ul>

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-8">
                  It is usually not the right starting point for someone who has never placed a trade before. If you are new to the market, it is worth learning the basics of cash trading first, then moving to small amounts of margin once you are confident.

                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 7: Margin Trading vs Normal Trading */}
      <section className="relative py-24 px-6 bg-gray-50 dark:bg-[#0F0903] overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
              Comparison
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
              Margin Trading{" "}
              <span className="text-[--primary-color]">vs Normal Trading</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

            <p className="text-lg text-gray-600 dark:text-gray-400">
              With the margin trading meaning covered, here is a side-by-side look at how it compares with regular cash trading.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg dark:border-[--primary-color]/20">
            <table className="w-full min-w-[800px] text-left">
              <thead className="bg-[--bg-color1] text-white">
                <tr>
                  <th className="p-5">Point of Difference</th>
                  <th className="p-5">Margin Trading</th>
                  <th className="p-5">Normal Trading</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-[#1B1207]"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`p-5 leading-7 text-gray-700 dark:text-gray-300 ${cellIndex === 0 ? "font-semibold text-[--primary-color]" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 8: Golden Rules */}
      <section className="relative py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
              Essential Guidelines
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
              Golden Rules to Follow Before{" "}
              <span className="text-[--primary-color]">You Start</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goldenRules.map((rule, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 hover:border-[--primary-color] hover:-translate-y-2 transition-all duration-300 shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-[--bg-primary-gradient] flex items-center justify-center text-2xl mb-6">
                  {rule.icon}
                </div>

                <h3 className="text-xl font-bold text-[--bg-color1] dark:text-white mb-3">
                  {rule.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/30 overflow-hidden">
            <div className="bg-[--bg-primary-gradient] h-2" />

            <div className="p-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Most Important Rule
              </h3>

              <p className="text-gray-300 leading-8 text-lg">
                If there is one golden rule of margin trading to remember above all others, it is this: <span className="text-[--primary-color] font-semibold">protect your capital first, and let the profits follow.</span> It rewards discipline far more than it rewards excitement.
              </p>
            </div>
          </div>

          <div className="mt-12 relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-16">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

            <div className="relative flex flex-col items-center text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Trade Margin Positions the Smart Way
              </h3>

              <p className="max-w-3xl text-lg text-gray-300 leading-8 mb-10">
                Join Master Traders and get access to transparent margin rates, built-in risk tools, and a support team that actually explains things.
              </p>

              <button
                onClick={() => navigator("/signup")}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Create Your Free Account
                <ArrowBigRight />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Section 10: Features */}
      <section className="bg-white dark:bg-[--bg-color1] py-16 transition-colors duration-300 px-4 md:px-8 lg:px-32 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <img
            src={cfdImage}
            alt="CFD Illustration"
            className="w-full max-w-md mx-auto"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
              Top Perks of Margin Trading with <br />
              <span className="text-[var(--primary-color)]">
                Master Trader
              </span>{" "}
            </h2>

            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-black dark:text-gray-300"
                >
                  {feature.icon}
                  <div>
                    <p className="text-base font-semibold">{feature.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 11: Community */}
      <section className="py-20 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[--bg-color1] px-6 py-1 rounded-full border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold text-lg shadow-md z-10">
            Community
          </div>

          <div className="border-2 border-[var(--primary-color)] rounded-2xl p-10 pt-14 text-center shadow-lg bg-white dark:bg-[--bg-color1]">
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white font-medium mb-2">
              Join the{" "}
              <span className="text-[var(--primary-color)] font-semibold">
                Master Trader
              </span>{" "}
              community to avail the benefits!
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
              Improving people's financial lives through planning, trading, and
              earning!
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

      {/* Section 12: FAQs */}
      <FaqSection faqs={faqs}/>

      {/* Section 13: Final CTA */}
      <section className="relative py-24 px-6 bg-gray-50 dark:bg-[#0F0903] overflow-hidden">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-[--primary-color]/25 bg-[--bg-color1] relative">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

            <div className="relative px-10 py-16 text-center">
              <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-6">
                Join Master Traders
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Understand  
{" "}
                <span className="text-[--primary-color]">
                  Margin Trading
                </span>{" "}
                Before You Trade It
              </h2>

              <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8 mb-10">
                Master Traders is here to help you trade with knowledge, not guesswork. Open your account and start with tools built for real risk management. 
              </p>

              <Link
                to={"/signup"}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get Started with Master Traders
                <ArrowBigRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MarginTrading;
