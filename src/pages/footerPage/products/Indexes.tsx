import {
  LineChart,
  Globe,
  ShieldCheck,
  Timer,
  ArrowBigRight,
  ChevronDown,
} from "lucide-react";
import PageBanner from "../../../components/BannerImage";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Nav";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const faqs = [
  {
    question: "What is an index in trading?",
    answer:
      "An index in trading is a group of companies combined and represented as a single number. Instead of tracking one company, you track how the entire group is performing.",
  },
  {
    question: "What are the top 5 indices?",
    answer:
      "The top five indices followed by traders around the world are the S&P 500, Dow Jones Industrial Average, Nasdaq 100, FTSE 100, and Nifty 50.",
  },
  {
    question: "Is it better to trade indices or stocks?",
    answer:
      "There is no single correct answer. Indices trading generally offers steadier price movements because risk is spread across multiple companies, while stock trading can provide larger returns but also higher company-specific risk. Many traders combine both approaches.",
  },
  {
    question: "What are the top 3 market indices?",
    answer:
      "The three most widely followed market indices are the S&P 500, Dow Jones Industrial Average, and Nasdaq 100. Together they provide a broad picture of the U.S. stock market.",
  },
  {
    question: "Can beginners trade indices?",
    answer:
      "Yes. Indices trading is considered one of the easiest ways for beginners to enter the financial markets because it focuses on overall market performance instead of individual companies.",
  },
  {
    question: "How much money do I need to start indices trading?",
    answer:
      "The amount depends on the platform and the market you choose. Master Traders allows you to begin with a relatively small amount, making it easier to learn before increasing your investment.",
  },
  {
    question: "Are indices only for stock markets?",
    answer:
      "No. There are indices for stocks, bonds, commodities, and currencies. However, stock market indices such as the S&P 500 and Nifty 50 are the most commonly traded.",
  },
  {
    question: "What is the difference between an index and an index fund?",
    answer:
      "An index is a benchmark that measures the performance of a group of companies. An index fund is an investment product that aims to replicate the performance of that benchmark.",
  },
  {
    question: "What causes an index to rise or fall sharply?",
    answer:
      "Major economic news, interest rate decisions, inflation data, company earnings, political developments, and global events can all cause significant movements in an index.",
  },
  {
    question:
      "Is indices trading good for long-term investment or only short-term trading?",
    answer:
      "Indices can be suitable for both. Short-term traders use them to capture daily market movements, while long-term investors use them to gain diversified exposure over months or years.",
  },
];

function Indexes() {
  const navigator = useNavigate();
  const [active, setActive] = useState(0);
  const features = [
    {
      icon: <Globe className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Direct Access to 20+ Global Markets",
      description:
        "Invest in major indices from multiple countries on a single platform.",
    },
    {
      icon: <ShieldCheck className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Diversify with Ease",
      description:
        "Spread risk and access broader markets without picking stocks.",
    },
    {
      icon: <Timer className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Real-Time Market Data",
      description: "Stay ahead with live updates and fast execution.",
    },
    {
      icon: <LineChart className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Effortless Portfolio Diversification",
      description:
        "Gain broad market exposure to manage risk and seize trends.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Online Indices Trading in India | Master Traders</title>

        <meta
          name="title"
          content="Online Indices Trading in India | Master Traders"
        />

        <meta
          name="description"
          content="Learn indices trading with Master Traders; trade S&P 500, Nifty 50, and more with beginner guides, demo accounts, and expert tips."
        />

        <meta
          name="keywords"
          content="indices trading, index trading online, stock index trading, S&P 500 trading, Nifty 50 trading, indices vs stocks, index trading for beginners, Master Traders"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/products/indexes"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/products/indexes"
        />
        <meta
          property="og:title"
          content="Online Indices Trading in India | Master Traders"
        />
        <meta
          property="og:description"
          content="Learn indices trading with Master Traders; trade S&P 500, Nifty 50, and more with beginner guides, demo accounts, and expert tips."
        />
        <meta property="og:site_name" content="Master Traders" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Online Indices Trading in India | Master Traders"
        />
        <meta
          name="twitter:description"
          content="Learn indices trading with Master Traders; trade S&P 500, Nifty 50, and more with beginner guides, demo accounts, and expert tips."
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
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Index Trading",
            url: "https://www.mastertrader.co.in/products/indexes",
            description:
              "Learn indices trading with Master Traders; trade S&P 500, Nifty 50, and more with beginner guides, demo accounts, and expert tips.",
            brand: {
              "@type": "Brand",
              name: "Master Trader",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.mastertrader.co.in/products/indexes",
              priceCurrency: "INR",
              price: "0",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>
      <div className="mb-20">
        <Navbar />
      </div>

      <PageBanner
        title="Best Platform for Indexes Trading | Master Trader"
        subtitle="If you are new to the markets or you have been trading for years, you have probably heard people talk about indices trading. It is one of the simplest ways to get exposed to a whole market instead of picking single stocks one by one. In this guide, Master Traders breaks down the real reasons for indexes trading, how it works, and why so many traders around the world now prefer it over buying individual shares. We keep things simple here. No confusing jargon, no complicated charts full of terms you have never heard before. Just plain, honest information so you can understand indices trading the same way you would understand a simple everyday task."
      />

      {/* section 2 */}
      <section className="relative py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold tracking-wide mb-6">
              Learn Indices Trading
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight mb-6">
              What Is{" "}
              <span className="text-[--primary-color]">Indices Trading?</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mb-8" />

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-8">
              Before we talk about the reasons for indices trading, let's
              understand what it actually means. An index is simply a collection
              of companies grouped into one value. Instead of purchasing shares
              of many different companies individually, an index combines them
              into a single market benchmark that reflects their collective
              performance.
            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-8">
              When you trade an index, you're not investing in one company—you
              are trading on the overall performance of an industry, market, or
              economy. This broader exposure is one of the biggest reasons
              traders prefer indices, as it reduces the impact of individual
              company volatility while focusing on the bigger market trend.
            </p>
          </div>

          {/* CTA Card */}
          <div className="relative">
            <div className="rounded-3xl bg-[--bg-color1] p-10 border border-[--primary-color]/30 shadow-2xl overflow-hidden">
              {/* Decorative Gradient */}
              <div className="absolute inset-0 opacity-10 bg-[--bg-primary-gradient]" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[--bg-primary-gradient] mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Start Your Trading Journey?
                </h3>

                <p className="text-gray-300 leading-7 mb-8">
                  Open a free account with{" "}
                  <span className="text-[--primary-color] font-semibold">
                    Master Traders
                  </span>{" "}
                  and get access to live indices trading tools built for
                  beginners and professionals alike.
                </p>

                <button
                  onClick={() => navigator("/signup")}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] border-[--primary-color] border text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Open Free Account <ArrowBigRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="relative py-24 px-6 bg-gray-50 dark:bg-[#0F0903] overflow-hidden transition-colors duration-300">
        {/* Background Glow */}
        <div className="absolute -top-32 right-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 left-0 w-[350px] h-[350px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold tracking-wide mb-5">
              Why Choose Indices Trading
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
              Top Reasons for{" "}
              <span className="text-[--primary-color]">Indexes Trading</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Let us go through the main reasons why indices trading has become
              one of the most popular choices for both beginner and experienced
              traders.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Simple to Understand",
                desc: "You do not need to study one company's balance sheet, management team, or quarterly reports. Instead, you focus on the overall direction of the market, making indices trading easy for beginners.",
              },
              {
                title: "Lower Risk Than Single Stocks",
                desc: "An index contains multiple companies, so your risk is naturally spread across them. Poor performance from one company can often be balanced by stronger performance from others.",
              },
              {
                title: "Less Time Needed for Research",
                desc: "Rather than tracking dozens of individual stocks, you only need to follow major market trends and economic news, making it ideal for busy traders.",
              },
              {
                title: "High Liquidity",
                desc: "Major indices are traded by millions of investors every day, allowing you to enter and exit trades quickly with minimal delays.",
              },
              {
                title: "Works in Rising & Falling Markets",
                desc: "With the right strategy, you can take advantage of both bullish and bearish market conditions, giving you greater trading flexibility.",
              },
              {
                title: "Available Almost Around the Clock",
                desc: "Global indices trade across multiple international markets, giving you more opportunities to trade during different time zones.",
              },
              {
                title: "Great for Learning the Market",
                desc: "Indices trading is an excellent starting point for new traders, helping them understand market movements before moving into advanced trading strategies.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 dark:border-[--primary-color]/20 bg-white dark:bg-[--bg-color1] p-8 hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="w-14 h-14 rounded-xl bg-[--bg-primary-gradient] flex items-center justify-center text-white font-bold text-xl mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-[--bg-color1] dark:text-white mb-4 group-hover:text-[--primary-color] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div className="mt-24">
            <div className="relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-14">
              <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                <div className="max-w-3xl">
                  <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                    Free Trading Education
                  </span>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                    Learn Before You Trade
                  </h3>

                  <p className="text-lg text-gray-300 leading-8">
                    Get free beginner-friendly guides, live market updates, and
                    expert tips from the{" "}
                    <span className="text-[--primary-color] font-semibold">
                      Master Traders
                    </span>{" "}
                    team.
                  </p>
                </div>

                <button
                  onClick={() => navigator("/signup")}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] border-[--primary-color] border text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Explore Learning Resources <ArrowBigRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="relative py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto space-y-24">
          {/* ===================== */}
          {/* Indices vs Stock */}
          {/* ===================== */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                Trading Comparison
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                Indices Trading{" "}
                <span className="text-[--primary-color]">vs Stock Trading</span>
              </h2>

              <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

              <p className="text-lg text-gray-600 dark:text-gray-400">
                A common question traders ask is whether it is better to trade
                indices or individual stocks. Here's a simple comparison.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Stock Trading */}
              <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1B1207] p-10 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center text-2xl font-bold mb-6">
                  📈
                </div>

                <h3 className="text-3xl font-bold text-[--bg-color1] dark:text-white mb-6">
                  Stock Trading
                </h3>

                <ul className="space-y-5 text-gray-600 dark:text-gray-400 leading-7">
                  <li>
                    • You buy shares of a <strong>single company</strong>.
                  </li>

                  <li>
                    • Your profit or loss depends entirely on how that company
                    performs.
                  </li>

                  <li>• Positive company news can push prices up quickly.</li>

                  <li>• Negative news can cause sharp price drops.</li>

                  <li>
                    • Higher potential reward but also higher company-specific
                    risk.
                  </li>
                </ul>
              </div>

              {/* Indices Trading */}
              <div className="rounded-3xl border border-[--primary-color]/30 bg-[--bg-color1] p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[--bg-primary-gradient] text-white flex items-center justify-center text-2xl font-bold mb-6">
                    📊
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-6">
                    Indices Trading
                  </h3>

                  <ul className="space-y-5 text-gray-300 leading-7">
                    <li>
                      • Trade a{" "}
                      <strong className="text-[--primary-color]">
                        basket of companies
                      </strong>{" "}
                      instead of one stock.
                    </li>

                    <li>
                      • Performance depends on the overall market or sector.
                    </li>

                    <li>• Generally smoother price movements.</li>

                    <li>• Lower exposure to one company's performance.</li>

                    <li>
                      • Ideal for traders seeking broader market exposure.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-10 rounded-2xl bg-[--primary-color]/10 border border-[--primary-color]/20 p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-8 text-center">
                Neither option is right or wrong. Stock trading can deliver
                larger gains from a single successful company, while indices
                trading offers steadier market exposure with reduced
                company-specific risk. Many experienced traders use both
                approaches to build a balanced portfolio.
              </p>
            </div>
          </div>

          {/* ===================== */}
          {/* Trading Strategies */}
          {/* ===================== */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                Beginner Strategies
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                Simple{" "}
                <span className="text-[--primary-color]">
                  Indices Trading Strategies
                </span>{" "}
                to Know
              </h2>

              <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

              <p className="text-lg text-gray-600 dark:text-gray-400">
                Once you understand the benefits of indices trading, learning a
                few common strategies can help you trade with greater
                confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Trend Following",
                  icon: "📈",
                  text: "Watch the overall market direction and trade in the same direction. Buy during established uptrends and look for selling opportunities during downtrends.",
                },
                {
                  title: "Breakout Trading",
                  icon: "🚀",
                  text: "Look for an index breaking above or below important support and resistance levels, often signalling the start of a stronger price move.",
                },
                {
                  title: "News Based Trading",
                  icon: "📰",
                  text: "Trade around important economic events, interest rate announcements, inflation reports, and major company earnings that influence market sentiment.",
                },
                {
                  title: "Practice With a Demo Account",
                  icon: "🎯",
                  text: "Before investing real money, test your strategy using a demo account. Master Traders provides virtual funds so you can gain experience and confidence without financial risk.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 hover:border-[--primary-color] hover:-translate-y-2 transition-all duration-300 shadow-lg"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[--bg-primary-gradient] flex items-center justify-center text-3xl mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[--bg-color1] dark:text-white mb-4 group-hover:text-[--primary-color] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-7">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="relative py-24 px-6 bg-gray-50 dark:bg-[#0F0903] transition-colors duration-300 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto space-y-24">
          {/* ================================================= */}
          {/* Risks of Indices Trading */}
          {/* ================================================= */}

          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-semibold mb-5">
                Trade Responsibly
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                Risks of{" "}
                <span className="text-[--primary-color]">Indices Trading</span>{" "}
                You Should Know
              </h2>

              <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

              <p className="text-lg text-gray-600 dark:text-gray-400">
                Being fully informed is part of responsible trading. While
                indices trading offers many advantages, every investment carries
                risk and the value of your investment can rise or fall.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Market Volatility",
                  text: "Major economic announcements and global events can cause rapid price movements, creating both opportunities and risks.",
                },
                {
                  icon: "📈",
                  title: "Leverage Increases Risk",
                  text: "Leverage can magnify potential profits, but it can also increase losses if the market moves against your position.",
                },
                {
                  icon: "📊",
                  title: "Past Performance",
                  text: "Historical performance should never be considered a guarantee of future market results.",
                },
                {
                  icon: "🛡️",
                  title: "Risk Management",
                  text: "Only trade with money you can afford to risk and always consider using stop-loss orders and sensible position sizing.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white dark:bg-[--bg-color1] border border-gray-200 dark:border-[--primary-color]/20 p-8 hover:border-[--primary-color] hover:-translate-y-2 transition-all duration-300 shadow-lg"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[--bg-primary-gradient] flex items-center justify-center text-3xl mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[--bg-color1] dark:text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-7">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Information Banner */}
            <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/30 overflow-hidden">
              <div className="bg-[--bg-primary-gradient] h-2" />

              <div className="p-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Learn First, Trade Smarter
                </h3>

                <p className="text-gray-300 leading-8 text-lg">
                  At{" "}
                  <span className="text-[--primary-color] font-semibold">
                    Master Traders
                  </span>
                  , we believe informed traders make better decisions. That's
                  why we encourage every trader to learn the fundamentals,
                  practice using a demo account, and develop a trading plan
                  before committing larger amounts of capital.
                </p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* How to Start */}
          {/* ================================================= */}

          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                Start Today
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                How to Start{" "}
                <span className="text-[--primary-color]">Indices Trading</span>{" "}
                with Master Traders
              </h2>

              <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

              <p className="text-lg text-gray-600 dark:text-gray-400">
                Getting started is simple. Follow these four easy steps and
                begin your trading journey with confidence.
              </p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Create Your Account",
                  text: "Sign up with Master Traders in just a few minutes and access your trading dashboard.",
                },
                {
                  step: "02",
                  title: "Verify Your Identity",
                  text: "Complete the verification process to keep your account secure and compliant.",
                },
                {
                  step: "03",
                  title: "Learn Before Trading",
                  text: "Explore our free educational resources and understand the basics before placing your first trade.",
                },
                {
                  step: "04",
                  title: "Start Small & Grow",
                  text: "Begin with a manageable amount, gain experience, and build confidence over time.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-3xl bg-white dark:bg-[--bg-color1] border border-gray-200 dark:border-[--primary-color]/20 p-8 shadow-lg hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300"
                >
                  <div className="absolute top-6 right-6 text-5xl font-black text-[--primary-color]/15">
                    {item.step}
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-[--bg-primary-gradient] text-white flex items-center justify-center font-bold mb-6">
                    {item.step}
                  </div>

                  <h3 className="text-2xl font-bold text-[--bg-color1] dark:text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-7">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Section */}
            <div className="mt-16 rounded-3xl border border-[--primary-color]/25 bg-gradient-to-r from-[#140E05] to-[#1D1408] p-12 overflow-hidden relative">
              <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

              <div className="relative max-w-4xl">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-6">
                  Why Choose Master Traders
                </span>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Built by Traders. Designed for Traders.
                </h3>

                <p className="text-lg text-gray-300 leading-8 mb-8">
                  Our team brings years of hands-on experience in the trading
                  industry. We built Master Traders with one goal in mind—making
                  trading more accessible through simple tools, transparent
                  information, and a user-friendly experience.
                </p>

                <p className="text-lg text-gray-300 leading-8">
                  We continuously update our educational content, platform
                  features, and trading resources to reflect real market
                  conditions, helping our clients make informed decisions with
                  confidence.
                </p>

                <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
                  Open Your Free Account
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[--bg-color1] py-16 transition-colors duration-300 px-4 md:px-8 lg:px-32 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <img
            src={"/prodcut.png"}
            alt="CFD Illustration"
            className="w-full max-w-md mx-auto"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
              Top Perks of Trading Stocks with <br />
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

      <section className="py-20 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300">
        <div className="relative max-w-5xl mx-auto">
          {/* Floating Label */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[--bg-color1] px-6 py-1 rounded-full border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold text-lg shadow-md z-10">
            Community
          </div>

          {/* Bordered Box */}
          <div className="border-2 border-[var(--primary-color)] rounded-2xl p-10 pt-14 text-center shadow-lg bg-white dark:bg-[--bg-color1]">
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white font-medium mb-2">
              Join the{" "}
              <span className="text-[var(--primary-color)] font-semibold">
                Master Trader
              </span>{" "}
              community to avail the benefits!
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
              Improving people’s financial lives through planning, trading, and
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

      {/* FAQs */}
      <section className="relative py-24 px-6 bg-white dark:bg-[--bg-color1] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
              FAQ
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
              Frequently{" "}
              <span className="text-[--primary-color]">Asked Questions</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know before you start trading indices with
              Master Traders.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-[--primary-color]/20 bg-white dark:bg-[#1B1207] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActive(active === index ? -1 : index)}
                  className="w-full flex items-center justify-between text-left p-7"
                >
                  <h3 className="text-xl font-semibold text-[--bg-color1] dark:text-white pr-6">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-6 h-6 text-[--primary-color] transition-transform duration-300 ${active === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-7 text-gray-600 dark:text-gray-400 leading-8">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 rounded-3xl overflow-hidden border border-[--primary-color]/25 bg-[--bg-color1] relative">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

            <div className="relative px-10 py-16 text-center">
              <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-6">
                Join Master Traders
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Start Your{" "}
                <span className="text-[--primary-color]">
                  Indices Trading Journey
                </span>{" "}
                Today
              </h2>

              <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8 mb-10">
                Join thousands of traders who trust Master Traders for simple,
                reliable, and transparent trading tools designed for every level
                of experience.
              </p>

              <a
                href="/signup"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Create Your Free Account
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Indexes;
