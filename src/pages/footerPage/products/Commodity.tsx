import {
  FaChartLine,
  FaPercentage,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";

import Navbar from "../../../components/Nav";
import PageBanner from "../../../components/BannerImage";
import Footer from "../../../components/Footer";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "What is a commodity trade?",
    answer:
      "A commodity trade is the buying or selling of a raw material such as gold, crude oil, silver or wheat through a trading platform. In most cases, traders buy and sell contracts linked to the commodity's price rather than taking physical delivery of the goods.",
  },
  {
    question: "Is online commodity trading safe for beginners?",
    answer:
      "Yes. When you use a trusted platform like Master Traders, start with a small amount and learn the basics first, commodity trading can be a suitable way to begin exploring financial markets.",
  },
  {
    question:
      "How much money do I need to start commodity trading?",
    answer:
      "You can begin with a modest investment on Master Traders. Many new traders start small while gaining experience and building confidence.",
  },
  {
    question: "Can I trade commodities alongside stocks?",
    answer:
      "Yes. Many traders combine commodities with stocks because the two markets often respond differently to economic conditions, helping create a more diversified portfolio.",
  },
  {
    question: "What are the main risks of commodity trading?",
    answer:
      "Commodity prices can move quickly because of weather conditions, geopolitical events, supply disruptions and economic data. Using risk management tools such as stop-loss orders is always recommended.",
  },
  {
    question:
      "Do I need experience to start online commodity trading?",
    answer:
      "No. Master Traders provides beginner-friendly educational resources and an easy-to-use platform so you can learn step by step as you gain experience.",
  },
  {
    question: "What commodities are best for beginners?",
    answer:
      "Many beginners choose gold or silver because they are among the world's most actively traded commodities and are widely covered in financial news.",
  },
  {
    question: "How is commodity trading regulated?",
    answer:
      "Commodity markets are supervised by financial regulators that establish rules for fair and transparent trading. Choosing a trusted platform that follows recognised regulatory standards helps improve security and reliability.",
  },
]

function Commodity() {
  const features = [
    {
      icon: <FaChartLine className="text-[var(--primary-color)] text-3xl" />,
      title: "Extensive Access to 30+ Commodity Markets",
      description:
        "Tap into global commodity markets all from one seamless platform.",
    },
    {
      icon: <FaDollarSign className="text-[var(--primary-color)] text-3xl" />,
      title: "Tight Spreads & Transparent Pricing",
      description:
        "Get the most out of every trade with competitive rates & zero hidden costs.",
    },
    {
      icon: <FaPercentage className="text-[var(--primary-color)] text-3xl" />,
      title: "Real-Time Data & Advanced Charting",
      description: "Trade confidently with real-time data and expert tools.",
    },
    {
      icon: <FaClock className="text-[var(--primary-color)] text-3xl" />,
      title: "Flexible, Around-the-Clock Trading",
      description:
        "Access key markets 24/7, giving you the freedom to trade anytime.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Explore Commodity Trading in India with Master Traders</title>

        <meta
          name="title"
          content="Explore Commodity Trading in India with Master Traders"
        />

        <meta
          name="description"
          content="Learn online commodity trading with Master Traders, trade gold, oil, and agri commodities with real-time data, low fees, and expert guidance."
        />

        <meta
          name="keywords"
          content="online commodity trading, commodity trading India, gold trading online, oil trading, agricultural commodities, precious metals trading, commodity trading platform, commodity vs stock trading, Master Traders"
        />

        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/products/commodity"
        />

        <meta
          property="og:title"
          content="Explore Commodity Trading in India with Master Traders"
        />

        <meta
          property="og:description"
          content="Learn online commodity trading with Master Traders, trade gold, oil, and agri commodities with real-time data, low fees, and expert guidance."
        />

        <meta
          property="og:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />

        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/products/commodity"
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Explore Commodity Trading in India with Master Traders"
        />

        <meta
          name="twitter:description"
          content="Learn online commodity trading with Master Traders, trade gold, oil, and agri commodities with real-time data, low fees, and expert guidance."
        />

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
            name: "Commodity Trading",
            url: "https://www.mastertrader.co.in/products/commodity",
            image: "https://www.mastertrader.co.in/MT-logo.png",
            description:
              "Learn online commodity trading with Master Traders, trade gold, oil, and agri commodities with real-time data, low fees, and expert guidance.",
            brand: {
              "@type": "Brand",
              name: "Master Trader",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.mastertrader.co.in/products/commodity",
              priceCurrency: "INR",
              price: "0",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <div className="mb-20">
          <Navbar />
        </div>

        <PageBanner
          title="Start Commodity Trading With Master Traders: Your Trusted Partner in Online Commodity Trading"
          subtitle="Commodity markets move the world. Every cup of coffee, every gallon of fuel, and every piece of jewelry starts as a raw material traded somewhere on a global exchange. If you have ever asked why so many investors are drawn to gold, oil, or wheat, this guide will walk you through the reasons for commodity trading in plain, simple language. Whether you are completely new to investing or you already trade stocks and want to expand into new markets, Master Traders is here to help you understand online commodity trading step by step."
        />

        {/* Section 2 */}
        <section className="relative py-24 px-6 bg-white dark:bg-[--bg-color1] overflow-hidden transition-colors duration-300">
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto space-y-24">
            {/* ================================================= */}
            {/* What is Commodity Trading */}
            {/* ================================================= */}

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Commodity Markets
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
                  What is
                  <span className="text-[--primary-color]">
                    {" "}
                    Commodity Trading?
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-8">
                  Commodity trading is the buying and selling of raw materials
                  and natural resources that are used every day around the
                  world. Unlike stocks, which represent ownership in a company,
                  commodities are physical goods with real economic value.
                </p>

                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8">
                  Most online traders don't buy or store the physical product.
                  Instead, they trade contracts based on the commodity's market
                  price, allowing them to benefit from price movements without
                  owning the commodity itself.
                </p>

                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8">
                  Commodity trading has evolved from traditional local
                  marketplaces into modern digital platforms, making global
                  markets accessible from your laptop or smartphone.
                </p>
              </div>

              {/* Right Card */}

              <div className="rounded-3xl bg-[--bg-color1] border border-[--primary-color]/30 p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

                <div className="relative">
                  <div className="text-6xl mb-8">📦</div>

                  <h3 className="text-3xl font-bold text-white mb-8">
                    Why Trade Commodities?
                  </h3>

                  <div className="space-y-5 text-gray-300">
                    <div>✔ Trade global markets</div>
                    <div>✔ Diversify your investments</div>
                    <div>✔ Access real-world assets</div>
                    <div>✔ Benefit from price movements</div>
                    <div>✔ Trade anytime from anywhere</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* Types of Commodities */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Commodity Categories
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Types of
                  <span className="text-[--primary-color]">
                    {" "}
                    Commodities Traded Online
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Every commodity market behaves differently. Understanding
                  these categories helps you identify opportunities that match
                  your trading style and risk tolerance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {[
                  {
                    icon: "🥇",
                    title: "Precious Metals",
                    text: "Gold and silver are popular safe-haven assets often used to protect wealth during uncertain economic conditions.",
                  },
                  {
                    icon: "🛢️",
                    title: "Energy Commodities",
                    text: "Crude oil and natural gas prices react to supply, geopolitical events, weather and global demand.",
                  },
                  {
                    icon: "🌾",
                    title: "Agricultural Commodities",
                    text: "Products like wheat, coffee and sugar are influenced by harvest seasons, weather and food demand.",
                  },
                  {
                    icon: "🐄",
                    title: "Livestock Commodities",
                    text: "Cattle and livestock prices are affected by feed costs, disease outbreaks and changing consumer demand.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 shadow-lg hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300"
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

              <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 p-10">
                <h3 className="text-3xl font-bold text-white mb-5">
                  Diversify Your Trading Opportunities
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Each commodity category responds to different economic and
                  global factors, giving traders the flexibility to diversify
                  their strategies instead of relying on a single market.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <div className="rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 relative">
              <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

              <div className="relative text-center px-10 py-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-6">
                  Start Trading Today
                </span>

                <h3 className="text-4xl font-bold text-white mb-6">
                  New to Trading?
                  <span className="text-[--primary-color]"> Start Simple.</span>
                </h3>

                <p className="max-w-5xl mx-auto text-lg text-gray-300 leading-8 mb-10">
                  Open a free Master Traders account and get access to live
                  commodity prices, beginner-friendly learning resources, and a
                  clean trading dashboard designed for first-time traders. No
                  hidden fees to get started.
                </p>

                <a
                  href="/signup"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] border border-[--primary-color] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Create My Free Account
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

        {/* Section 3 */}
        <section className="relative py-24 px-6 bg-gray-50 dark:bg-[#0F0903] overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto space-y-24">
            {/* ================================================= */}
            {/* How Online Commodity Trading Works */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Trading Process
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  How Does
                  <span className="text-[--primary-color]">
                    {" "}
                    Online Commodity Trading
                  </span>{" "}
                  Work?
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Getting started is straightforward. Follow these six simple
                  steps to begin trading commodities online with confidence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    icon: "📝",
                    title: "Open a Trading Account",
                    text: "Register with Master Traders and complete the identity verification process.",
                  },
                  {
                    step: "02",
                    icon: "💳",
                    title: "Fund Your Account",
                    text: "Deposit funds using your preferred payment method to start trading.",
                  },
                  {
                    step: "03",
                    icon: "📦",
                    title: "Choose a Commodity",
                    text: "Select from metals, energy, agricultural products or livestock based on your strategy.",
                  },
                  {
                    step: "04",
                    icon: "📈",
                    title: "Place Your Trade",
                    text: "Decide whether you expect prices to rise or fall, then open your trading position.",
                  },
                  {
                    step: "05",
                    icon: "📊",
                    title: "Monitor & Manage",
                    text: "Track live market prices and use stop-loss orders to help manage potential risk.",
                  },
                  {
                    step: "06",
                    icon: "🏁",
                    title: "Close Your Position",
                    text: "Exit your trade when your target is reached or market conditions change.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="relative rounded-3xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 shadow-lg hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300"
                  >
                    <div className="absolute top-6 right-6 text-6xl font-black text-[--primary-color]/10">
                      {item.step}
                    </div>

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

              <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 p-10">
                <h3 className="text-3xl font-bold text-white mb-5">
                  Trade with Greater Flexibility
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Online commodity markets operate on digital exchanges,
                  allowing many commodities to be traded for extended hours.
                  This flexibility gives traders more opportunities than markets
                  that only operate during limited trading sessions.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* Reasons for Commodity Trading */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Why Trade Commodities?
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Reasons for
                  <span className="text-[--primary-color]">
                    {" "}
                    Commodity Trading
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Commodity markets attract traders for many different reasons,
                  from diversification to opportunities created by global
                  economic events.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {[
                  {
                    icon: "🛡️",
                    title: "Protection Against Inflation",
                    text: "Commodities like gold are often viewed as a hedge when the cost of living rises.",
                  },
                  {
                    icon: "📊",
                    title: "Portfolio Diversification",
                    text: "Adding commodities can reduce reliance on a single asset class such as stocks.",
                  },
                  {
                    icon: "⚡",
                    title: "High Liquidity",
                    text: "Major commodity markets allow traders to enter and exit positions efficiently.",
                  },
                  {
                    icon: "🌍",
                    title: "Constant Global Demand",
                    text: "Energy, metals and food remain in demand regardless of economic cycles.",
                  },
                  {
                    icon: "📈",
                    title: "Profit in Rising or Falling Markets",
                    text: "Many commodity traders look for opportunities in both upward and downward price movements.",
                  },
                  {
                    icon: "📰",
                    title: "Driven by Global Events",
                    text: "Weather, politics, supply chains and world events create trading opportunities.",
                  },
                  {
                    icon: "💰",
                    title: "Lower Entry Cost",
                    text: "Many commodity markets allow traders to begin with relatively smaller capital.",
                  },
                  {
                    icon: "🚀",
                    title: "Global Market Access",
                    text: "Trade internationally recognised commodities from a single online platform.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 shadow-lg hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300"
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

              <div className="mt-14 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 p-12">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Build a More Balanced Portfolio
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Commodities provide exposure to global markets that often
                  behave differently from traditional investments like stocks
                  and bonds. This can help traders diversify their portfolios
                  while taking advantage of opportunities created by changing
                  economic conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="relative py-24 px-6 bg-white dark:bg-[--bg-color1] overflow-hidden transition-colors duration-300">
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto space-y-24">
            {/* ================================================= */}
            {/* Factors Affecting Commodity Prices */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Market Drivers
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Factors That Affect
                  <span className="text-[--primary-color]">
                    {" "}
                    Commodity Prices
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Commodity markets respond to a variety of economic and global
                  events. Understanding these influences helps traders make
                  better-informed decisions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {[
                  {
                    icon: "⚖️",
                    title: "Supply & Demand",
                    text: "Shortages or oversupply directly influence commodity prices across global markets.",
                  },
                  {
                    icon: "🌦️",
                    title: "Weather Conditions",
                    text: "Floods, droughts and storms can impact agricultural production and energy supplies.",
                  },
                  {
                    icon: "🌍",
                    title: "Global Politics",
                    text: "Trade agreements, sanctions and geopolitical conflicts often affect commodity prices.",
                  },
                  {
                    icon: "💵",
                    title: "Currency Values",
                    text: "Most commodities are priced in US dollars, so currency movements influence global pricing.",
                  },
                  {
                    icon: "🍂",
                    title: "Seasonal Patterns",
                    text: "Many agricultural commodities follow recurring seasonal production and demand cycles.",
                  },
                  {
                    icon: "📊",
                    title: "Economic Data",
                    text: "Inflation, employment and manufacturing reports can quickly shift market sentiment.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 shadow-lg hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300"
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

              <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 p-10">
                <h3 className="text-3xl font-bold text-white mb-5">
                  Understand the Market Before You Trade
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Successful commodity traders look beyond price charts.
                  Following global news, economic indicators and supply
                  conditions can help you understand why markets move and make
                  more informed trading decisions.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <div className="rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 relative">
              <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

              <div className="relative text-center px-10 py-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-6">
                  Free Consultation
                </span>

                <h3 className="text-4xl font-bold text-white mb-6">
                  Want to Trade with
                  <span className="text-[--primary-color]"> Confidence?</span>
                </h3>

                <p className="max-w-5xl mx-auto text-lg text-gray-300 leading-8 mb-10">
                  Get a free strategy session with Master Traders. Speak with
                  our team about which commodities match your financial goals
                  and risk comfort level. No pressure—just honest guidance.
                </p>

                <a
                  href="/signup"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Book My Free Session
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

            {/* ================================================= */}
            {/* Comparison */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Compare Markets
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Commodity Trading
                  <span className="text-[--primary-color]">
                    {" "}
                    vs Stock Trading
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
              </div>

              <div className="overflow-x-auto rounded-3xl border border-[--primary-color]/20 shadow-xl">
                <table className="min-w-full">
                  <thead className="bg-[--bg-color1] text-white">
                    <tr>
                      <th className="px-6 py-5 text-left">Comparison</th>
                      <th className="px-6 py-5 text-left text-[--primary-color]">
                        Commodity Trading
                      </th>
                      <th className="px-6 py-5 text-left text-[--primary-color]">
                        Stock Trading
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white dark:bg-[#1B1207]">
                    {[
                      [
                        "What You Trade",
                        "Raw materials like gold, oil and wheat",
                        "Ownership shares in a company",
                      ],
                      [
                        "Main Price Driver",
                        "Supply, demand and global events",
                        "Company earnings and business performance",
                      ],
                      [
                        "Trading Hours",
                        "Often extended global trading sessions",
                        "Limited exchange trading hours",
                      ],
                      [
                        "Ownership",
                        "Trade price-based contracts",
                        "Own a portion of a company",
                      ],
                      [
                        "Risk Factors",
                        "Supply chains, weather and politics",
                        "Business performance and industry conditions",
                      ],
                      [
                        "Best Suited For",
                        "Traders following global economic trends",
                        "Investors researching individual businesses",
                      ],
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-[--primary-color]/10"
                      >
                        <td className="px-6 py-5 font-semibold text-[--bg-color1] dark:text-white">
                          {row[0]}
                        </td>

                        <td className="px-6 py-5 text-gray-600 dark:text-gray-300">
                          {row[1]}
                        </td>

                        <td className="px-6 py-5 text-gray-600 dark:text-gray-300">
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 p-10">
                <h3 className="text-3xl font-bold text-white mb-5">
                  Why Not Use Both?
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Many experienced traders combine stocks and commodities in the
                  same portfolio. Stocks can support long-term wealth creation,
                  while commodities provide diversification and opportunities
                  driven by global economic events. Using both markets together
                  can help create a more balanced trading approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="relative py-24 px-6 bg-gray-50 dark:bg-[#0F0903] overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto space-y-24">
            {/* ================================================= */}
            {/* Common Commodity Trading Strategies */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Trading Strategies
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Common
                  <span className="text-[--primary-color]">
                    {" "}
                    Commodity Trading Strategies
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Every trader develops their own style over time. These are
                  some of the most widely used approaches in commodity trading.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {[
                  {
                    icon: "📈",
                    title: "Trend Following",
                    text: "Identify whether the market is moving higher or lower and trade in the direction of the prevailing trend.",
                  },
                  {
                    icon: "🌾",
                    title: "Seasonal Trading",
                    text: "Use recurring planting, harvest and demand cycles to identify potential trading opportunities.",
                  },
                  {
                    icon: "📰",
                    title: "News-Based Trading",
                    text: "React to major economic reports, weather updates and geopolitical developments that influence prices.",
                  },
                  {
                    icon: "⚖️",
                    title: "Spread Trading",
                    text: "Trade the price difference between related commodities to help reduce exposure to a single market.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 shadow-lg hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300"
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

              <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 p-10">
                <h3 className="text-3xl font-bold text-white mb-5">
                  Start Simple, Then Build Experience
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  You don't need to master every strategy immediately. Many
                  successful traders begin with one straightforward approach,
                  practise consistently, and refine their skills as they gain
                  confidence.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* Risks */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-semibold mb-5">
                  Risk Awareness
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Risks Involved in
                  <span className="text-[--primary-color]">
                    {" "}
                    Commodity Trading
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Every financial market involves risk. Understanding these
                  risks is an essential part of becoming a responsible trader.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="rounded-3xl bg-white dark:bg-[#1B1207] border border-red-500/20 p-10 shadow-lg">
                  <h3 className="text-3xl font-bold text-[--bg-color1] dark:text-white mb-6">
                    Things to Remember
                  </h3>

                  <div className="space-y-5">
                    {[
                      "Commodity prices can change rapidly during major global events.",
                      "Leverage can increase both profits and losses.",
                      "Markets may react unexpectedly to political or economic news.",
                      "No trading strategy guarantees profits.",
                    ].map((risk) => (
                      <div key={risk} className="flex gap-4">
                        <div className="w-3 h-3 rounded-full bg-red-500 mt-3 flex-shrink-0" />

                        <p className="text-gray-600 dark:text-gray-400 leading-7">
                          {risk}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 p-10">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Good Risk Management
                  </h3>

                  <div className="space-y-5">
                    {[
                      "Only trade money you can afford to lose.",
                      "Use stop-loss orders to help manage downside risk.",
                      "Diversify instead of investing everything in one commodity.",
                      "Practise and learn before increasing your position size.",
                    ].map((tip) => (
                      <div key={tip} className="flex gap-4">
                        <div className="w-3 h-3 rounded-full bg-[--primary-color] mt-3 flex-shrink-0" />

                        <p className="text-gray-300 leading-7">{tip}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 text-gray-400 leading-8">
                    Master Traders provides educational resources to help you
                    understand these risks before trading with real funds.
                  </p>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* Why Master Traders */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Why Choose Us
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Why Trade Commodities on
                  <span className="text-[--primary-color]">
                    {" "}
                    Master Traders
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {[
                  {
                    icon: "🖥️",
                    title: "Simple Platform",
                    text: "Clean interface designed for both beginners and experienced traders.",
                  },
                  {
                    icon: "📈",
                    title: "Live Market Data",
                    text: "Track commodity prices in real time with reliable market information.",
                  },
                  {
                    icon: "💰",
                    title: "Transparent Fees",
                    text: "Clear pricing with no hidden surprises.",
                  },
                  {
                    icon: "🔒",
                    title: "Secure Trading",
                    text: "Modern security standards help protect your account and personal data.",
                  },
                  {
                    icon: "📚",
                    title: "Learning Resources",
                    text: "Educational articles, guides and glossaries to build your knowledge.",
                  },
                  {
                    icon: "🎧",
                    title: "Responsive Support",
                    text: "Friendly support whenever you need assistance.",
                  },
                  {
                    icon: "🚀",
                    title: "Powerful Tools",
                    text: "Features that grow with you from beginner to advanced trading.",
                  },
                  {
                    icon: "⭐",
                    title: "Built by Traders",
                    text: "Designed by people who understand real-world trading challenges.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 shadow-lg hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300"
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

              <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 p-10">
                <p className="text-lg text-gray-300 leading-8">
                  Master Traders was built by people who understand both the
                  opportunities and the risks of commodity markets. Our goal is
                  to make online commodity trading simple, transparent and
                  accessible for every trader.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <div className="rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 relative">
              <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

              <div className="relative text-center px-10 py-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-6">
                  Start Today
                </span>

                <h3 className="text-4xl font-bold text-white mb-6">
                  Take the Next Step in Your
                  <span className="text-[--primary-color]">
                    {" "}
                    Trading Journey
                  </span>
                </h3>

                <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8 mb-10">
                  Join Master Traders today and get free access to live market
                  data, expert learning resources and a dedicated support team
                  committed to helping you become a more confident commodity
                  trader.
                </p>

                <a
                  href="/signup"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white border border-[--primary-color] font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Get Started for Free
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

        {/* FAQs */}
        <section className="py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}

            <div className="text-center mb-16">
              <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                Frequently Asked Questions
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                Commodity Trading
                <span className="text-[--primary-color]"> FAQs</span>
              </h2>

              <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

              <p className="text-lg text-gray-600 dark:text-gray-400">
                Find answers to the most common questions about online commodity
                trading, how it works, and how to get started with Master
                Traders.
              </p>
            </div>

            {/* FAQ */}

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-gray-200 dark:border-[--primary-color]/20 bg-white dark:bg-[#1B1207] shadow-lg overflow-hidden"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between p-7">
                    <h3 className="text-lg lg:text-xl font-semibold text-[--bg-color1] dark:text-white pr-8">
                      {faq.question}
                    </h3>

                    <div className="w-10 h-10 rounded-full bg-[--bg-primary-gradient] flex items-center justify-center text-white text-xl transition-transform duration-300 group-open:rotate-45">
                      +
                    </div>
                  </summary>

                  <div className="px-7 pb-7 border-t border-gray-200 dark:border-[--primary-color]/10">
                    <p className="pt-6 text-gray-600 dark:text-gray-400 leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-20 rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 relative">
              <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

              <div className="relative text-center px-10 py-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-6">
                  Start Trading Today
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to
                  <span className="text-[--primary-color]"> Begin?</span>
                </h2>

                <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8 mb-10">
                  Start online commodity trading with Master Traders. Join a
                  platform built on transparency, education and real support.
                  Your trading journey starts with one simple step.
                </p>

                <a
                  href="/signup"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] border border-[--primary-color] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Open My Free Account Now
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
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

        <section className="bg-white dark:bg-[--bg-color1] py-16 transition-colors duration-300 px-4 md:px-8 lg:px-32 flex-grow">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <img
              src={"/prodcut.png"}
              alt="CFD Illustration"
              className="w-full max-w-md mx-auto"
            />

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                Top Perks of Trading Commodity with <br />
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
                Improving people’s financial lives through planning, trading,
                and earning!
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

        <Footer />
      </div>
    </>
  );
}

export default Commodity;
