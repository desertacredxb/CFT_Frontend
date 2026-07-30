import { LuLayoutDashboard, LuHeadphones } from "react-icons/lu";
import PageBanner from "../../../components/BannerImage";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Nav";
import cfdImage from "../../../assets/stocks.png";
import { ArrowBigRight, LucideBarChart2, LucideLineChart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function Stocks() {
  const navigate = useNavigate();
  const features = [
    {
      icon: (
        <LucideBarChart2 className="text-[var(--primary-color)] text-3xl" />
      ),
      title: "Trade 500+ NSE Stocks with Zero Commission",
      description:
        "Access India’s top-listed companies with no hidden charges.",
    },
    {
      icon: (
        <LucideLineChart className="text-[var(--primary-color)] text-3xl" />
      ),
      title: "Real-Time Market Moves, Right When They Happen",
      description: "Instant, actionable insights with live, accurate data.",
    },
    {
      icon: (
        <LuLayoutDashboard className="text-[var(--primary-color)] text-3xl" />
      ),
      title: "Fast, Clean, and Built for All Devices",
      description:
        "Trade anytime, anywhere with a platform designed for speed.",
    },
    {
      icon: <LuHeadphones className="text-[var(--primary-color)] text-3xl" />,
      title: "Backed by Experts, Driven by You",
      description:
        "From first trade to daily moves, real human support is here for you.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Stock Trading in India | Learn & Invest with Master Traders
        </title>

        <meta
          name="title"
          content="Stock Trading in India | Learn & Invest with Master Traders"
        />

        <meta
          name="description"
          content="Learn online stock trading in India with Master Traders, stock types, market analysis, charges, taxation, and global investing made simple."
        />

        <meta
          name="keywords"
          content="online stock trading, stock trading India, how to buy stocks online, Demat account, NSE BSE trading, stock market for beginners, invest in US stocks from India, stock market taxation India, types of stocks, Master Traders"
        />

        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/products/stocks"
        />

        <meta
          property="og:title"
          content="Stock Trading in India | Learn & Invest with Master Traders"
        />

        <meta
          property="og:description"
          content="Learn online stock trading in India with Master Traders, stock types, market analysis, charges, taxation, and global investing made simple."
        />

        <meta
          property="og:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />

        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/products/stocks"
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Stock Trading in India | Learn & Invest with Master Traders"
        />

        <meta
          name="twitter:description"
          content="Learn online stock trading in India with Master Traders, stock types, market analysis, charges, taxation, and global investing made simple."
        />

        <meta
          name="twitter:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <div className="mb-20">
          <Navbar />
        </div>

        <PageBanner
          title="Make Online Stock Trading Easy with Master Traders"
          subtitle="Master Traders is built for people who want to understand the stock market before they put their money into it. Whether you are placing your first order or you have been investing for years, this page walks you through the reasons for stock trading, how the market works, and how you can start online stock trading with confidence. We believe good trading starts with good information. That is why every section on this page is written in plain language, checked against how the Indian stock market actually works, and free of confusing jargon."
        />

        {/* Section 2 */}
        <section className="relative py-24 px-6 bg-white dark:bg-[--bg-color1] overflow-hidden transition-colors duration-300">
          {/* Gold Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            {/* ================= Header ================= */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Stock Market Basics
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
                  What Are{" "}
                  <span className="text-[--primary-color]">Stocks?</span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-8">
                  A stock represents a small piece of ownership in a company.
                  When you buy a stock, you participate in that company's future
                  growth and profitability. As the business grows, the value of
                  your investment may increase, while poor performance can
                  reduce its value.
                </p>

                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8">
                  Understanding the different categories of stocks helps you
                  choose investments that match your financial goals,
                  experience, and risk tolerance.
                </p>
              </div>

              {/* Highlight Card */}
              <div className="rounded-3xl bg-[--bg-color1] border border-[--primary-color]/30 p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[--bg-primary-gradient] flex items-center justify-center text-white text-3xl mb-6">
                    📈
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-5">
                    Why Do People Buy Stocks?
                  </h3>

                  <p className="text-gray-300 leading-8">
                    Stocks have long been one of the most popular investment
                    options for building wealth. They offer the opportunity for
                    capital growth, dividend income, and ownership in some of
                    the world's most successful businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= Market Cap ================= */}

            <div className="mb-20">
              <h3 className="text-3xl font-bold text-[--bg-color1] dark:text-white mb-10">
                By{" "}
                <span className="text-[--primary-color]">
                  Market Capitalisation
                </span>
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Large-Cap Stocks",
                    icon: "🏢",
                    desc: "Large, established companies known for stability and long-term performance. Popular among new investors.",
                  },
                  {
                    title: "Mid-Cap Stocks",
                    icon: "📊",
                    desc: "Growing companies offering a balance between stability and growth potential with moderate risk.",
                  },
                  {
                    title: "Small-Cap Stocks",
                    icon: "🚀",
                    desc: "Emerging companies with higher growth potential but greater market volatility.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 hover:border-[--primary-color] hover:-translate-y-2 transition-all duration-300 shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[--bg-primary-gradient] flex items-center justify-center text-2xl mb-6">
                      {item.icon}
                    </div>

                    <h4 className="text-2xl font-bold text-[--bg-color1] dark:text-white mb-4">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 leading-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= Investment Style ================= */}

            <div className="mb-20">
              <h3 className="text-3xl font-bold text-[--bg-color1] dark:text-white mb-10">
                By{" "}
                <span className="text-[--primary-color]">Investment Style</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Growth Stocks",
                    icon: "📈",
                    desc: "Companies expected to grow faster than the market by reinvesting profits into future expansion.",
                  },
                  {
                    title: "Value Stocks",
                    icon: "💎",
                    desc: "Businesses considered undervalued compared to their actual worth and long-term potential.",
                  },
                  {
                    title: "Dividend Stocks",
                    icon: "💰",
                    desc: "Companies that regularly distribute a portion of their profits to shareholders as dividends.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-8 hover:border-[--primary-color] hover:-translate-y-2 transition-all duration-300 shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[--bg-primary-gradient] flex items-center justify-center text-2xl mb-6">
                      {item.icon}
                    </div>

                    <h4 className="text-2xl font-bold text-[--bg-color1] dark:text-white mb-4">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 leading-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= Geography ================= */}

            <div>
              <h3 className="text-3xl font-bold text-[--bg-color1] dark:text-white mb-10">
                By <span className="text-[--primary-color]">Geography</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-3xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-10 shadow-lg">
                  <div className="text-5xl mb-6">🇮🇳</div>

                  <h4 className="text-2xl font-bold text-[--bg-color1] dark:text-white mb-4">
                    Domestic Stocks
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 leading-8">
                    Shares listed on Indian stock exchanges such as the NSE and
                    BSE, providing opportunities to invest in leading Indian
                    companies.
                  </p>
                </div>

                <div className="rounded-3xl bg-[--bg-color1] border border-[--primary-color]/30 p-10 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

                  <div className="relative">
                    <div className="text-5xl mb-6">🌍</div>

                    <h4 className="text-2xl font-bold text-white mb-4">
                      International Stocks
                    </h4>

                    <p className="text-gray-300 leading-8">
                      Companies listed on overseas exchanges, giving traders
                      exposure to some of the world's largest global brands and
                      international markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CTA ================= */}

            <div className="mt-24 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 overflow-hidden relative">
              <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

              <div className="relative p-12 lg:flex items-center justify-between gap-10">
                <div className="max-w-3xl">
                  <h4 className="text-3xl font-bold text-white mb-5">
                    Start Your Trading Journey Today
                  </h4>

                  <p className="text-lg text-gray-300 leading-8">
                    Open a free account with
                    <span className="text-[--primary-color] font-semibold">
                      {" "}
                      Master Traders
                    </span>{" "}
                    and get access to research tools, live market data, and
                    expert guidance designed for both beginners and experienced
                    traders.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/signup")}
                  className="mt-8 lg:mt-0 px-8 py-4 flex gap-1 items-center rounded-xl bg-[--bg-primary-gradient] text-white font-semibold border border-[--primary-color] hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-xl"
                >
                  Open Free Account <ArrowBigRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="relative py-24 px-6 bg-gray-50 dark:bg-[#0F0903] overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl" />

          <div className="relative max-w-7xl mx-auto space-y-24">
            {/* ================================================= */}
            {/* Different Types of Stocks */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Stock Categories
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Understanding Different
                  <span className="text-[--primary-color]">
                    {" "}
                    Types of Stocks
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Beyond market capitalisation and investment style, stocks are
                  also grouped by the rights and benefits they provide to
                  shareholders.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {[
                  {
                    icon: "🗳️",
                    title: "Equity Shares",
                    text: "The most common type of stock. Shareholders receive voting rights and benefit from the company's long-term growth.",
                  },
                  {
                    icon: "💰",
                    title: "Preference Shares",
                    text: "Offer fixed dividends and receive priority over equity shareholders, but usually don't include voting rights.",
                  },
                  {
                    icon: "🏆",
                    title: "Blue Chip Stocks",
                    text: "Large, financially strong companies with a long history of stable growth and reliable performance.",
                  },
                  {
                    icon: "🚀",
                    title: "Penny Stocks",
                    text: "Low-priced shares of smaller businesses with higher growth potential but significantly greater risk.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[--bg-color1] border border-gray-200 dark:border-[--primary-color]/20 p-8 shadow-lg hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300"
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
                  Choosing the right type of stock is just as important as
                  choosing the right company. Understanding these categories
                  helps you build a portfolio that matches your financial goals
                  and risk tolerance.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* Global Stocks */}
            {/* ================================================= */}

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Global Investing
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Trading Global
                  <span className="text-[--primary-color]">
                    {" "}
                    Stocks From India
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-8">
                  Indian investors no longer have to limit themselves to
                  companies listed on the NSE or BSE. Through the RBI's
                  Liberalised Remittance Scheme (LRS), you can invest in leading
                  international companies and diversify your portfolio beyond
                  the Indian market.
                </p>

                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8">
                  Master Traders guides you through every step—from opening the
                  right account to understanding currency conversion,
                  international investing, and foreign taxation.
                </p>
              </div>

              <div className="rounded-3xl bg-[--bg-color1] border border-[--primary-color]/30 p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

                <div className="relative">
                  <div className="text-6xl mb-8">🌍</div>

                  <h3 className="text-3xl font-bold text-white mb-8">
                    Global Opportunities
                  </h3>

                  <div className="space-y-5 text-gray-300">
                    <div>✔ Invest beyond India</div>
                    <div>✔ Diversify your portfolio</div>
                    <div>✔ Access leading US companies</div>
                    <div>✔ Learn currency conversion</div>
                    <div>✔ Understand global investing basics</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}

            <div className="rounded-3xl bg-[--bg-color1] border border-[--primary-color]/30 overflow-hidden">
              <div className="bg-[--bg-primary-gradient] h-2" />

              <div className="p-12 text-center">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Explore Global Markets With Confidence
                </h3>

                <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8 mb-10">
                  Learn how to research and trade international stocks safely,
                  with guidance built specifically for Indian investors.
                </p>

                <a
                  href="/signup"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] border border-[--primary-color] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Learn About Global Trading
                </a>
              </div>
            </div>

            {/* ================================================= */}
            {/* Analyse Stocks */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Smart Investing
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  How to Analyse
                  <span className="text-[--primary-color]">
                    {" "}
                    a Stock Before Buying
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Buying a stock without research is like buying a house without
                  seeing it. Follow these six simple steps before investing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {[
                  [
                    "01",
                    "🏢",
                    "Understand the Business",
                    "Learn what the company does, how it earns revenue, and whether its business model is sustainable.",
                  ],
                  [
                    "02",
                    "📊",
                    "Review Financial Health",
                    "Check revenue, profits, debt, and other financial indicators to understand the company's stability.",
                  ],
                  [
                    "03",
                    "⚖️",
                    "Compare Competitors",
                    "Compare the company with others in the same industry to evaluate its competitive position.",
                  ],
                  [
                    "04",
                    "📈",
                    "Study Price History",
                    "Review historical price trends and observe how the stock reacts to earnings and market news.",
                  ],
                  [
                    "05",
                    "📰",
                    "Read Recent News",
                    "Stay informed about management changes, earnings reports, and industry developments.",
                  ],
                  [
                    "06",
                    "💎",
                    "Check Valuation",
                    "Use metrics like the Price-to-Earnings (P/E) ratio to determine whether the stock is fairly valued.",
                  ],
                ].map(([step, icon, title, text]) => (
                  <div
                    key={step}
                    className="relative rounded-3xl bg-white dark:bg-[--bg-color1] border border-gray-200 dark:border-[--primary-color]/20 p-8 shadow-lg hover:-translate-y-2 hover:border-[--primary-color] transition-all"
                  >
                    <div className="absolute top-6 right-6 text-6xl font-black text-[--primary-color]/10">
                      {step}
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-[--bg-primary-gradient] flex items-center justify-center text-3xl mb-6">
                      {icon}
                    </div>

                    <h3 className="text-2xl font-bold text-[--bg-color1] dark:text-white mb-4">
                      {title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-7">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-16 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 p-12">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Research Before You Invest
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Successful traders rarely buy stocks based on rumours or
                  emotions. They research first, understand the business, and
                  make informed decisions. Consistent analysis is one of the
                  biggest differences between disciplined investors and
                  impulsive traders.
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
            {/* How Stock Prices Change */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Market Fundamentals
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  How
                  <span className="text-[--primary-color]">
                    {" "}
                    Stock Prices
                  </span>{" "}
                  Change
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Stock prices constantly change because of supply and demand.
                  When more people want to buy than sell, prices usually rise.
                  When more people sell than buy, prices generally fall.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
                {[
                  {
                    icon: "📈",
                    title: "Company Performance",
                    text: "Higher profits and strong business growth often increase investor confidence and share prices.",
                  },
                  {
                    icon: "🏦",
                    title: "Economic Conditions",
                    text: "Interest rates, inflation and economic growth influence overall market direction.",
                  },
                  {
                    icon: "😊",
                    title: "Market Sentiment",
                    text: "Investor emotions such as optimism or fear can move prices even without major news.",
                  },
                  {
                    icon: "🌍",
                    title: "Global Events",
                    text: "Political events, wars, natural disasters and global markets affect stock prices worldwide.",
                  },
                  {
                    icon: "🚀",
                    title: "Industry Trends",
                    text: "Changes affecting one company often influence the entire industry or sector.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-7 shadow-lg hover:border-[--primary-color] hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[--bg-primary-gradient] flex items-center justify-center text-2xl mb-5">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-[--bg-color1] dark:text-white mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-7">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/30 p-10">
                <h3 className="text-2xl font-bold text-white mb-5">
                  Think Beyond Daily Price Movements
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Understanding these forces helps you focus on long-term value
                  rather than reacting to every short-term price movement.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* Trading Hours */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Trading Schedule
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Stock Market
                  <span className="text-[--primary-color]"> Trading Hours</span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {[
                  {
                    time: "9:00 – 9:15 AM",
                    title: "Pre-Market",
                    text: "Orders are collected and matched to determine the opening market price.",
                  },
                  {
                    time: "9:15 – 3:30 PM",
                    title: "Regular Session",
                    text: "Official trading hours for NSE and BSE from Monday to Friday.",
                  },
                  {
                    time: "3:40 – 4:00 PM",
                    title: "Post-Market",
                    text: "Limited trading continues after the regular market closes.",
                  },
                  {
                    time: "Weekends & Holidays",
                    title: "Market Closed",
                    text: "Indian exchanges remain closed on Saturdays, Sundays and exchange holidays.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-[--bg-color1] border border-[--primary-color]/20 p-8"
                  >
                    <div className="text-[--primary-color] text-lg font-bold mb-3">
                      {item.time}
                    </div>

                    <h3 className="text-2xl text-white font-bold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 leading-7">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-[--primary-color]/10 border border-[--primary-color]/20 p-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
                  If you're trading international markets, remember that
                  exchanges in countries like the United States operate in
                  different time zones, so trading sessions usually begin later
                  in the Indian evening.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* Essential Concepts */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Trading Basics
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Essential Concepts
                  <span className="text-[--primary-color]">
                    {" "}
                    Every Trader Should Know
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {[
                  ["📁", "Demat Account", "Stores your shares electronically."],
                  ["💹", "Trading Account", "Used to buy and sell stocks."],
                  [
                    "💰",
                    "Bid & Ask Price",
                    "Highest buying price and lowest selling price.",
                  ],
                  ["📊", "Volume", "Number of shares traded during a period."],
                  [
                    "📈",
                    "Volatility",
                    "Measures how much a stock's price changes.",
                  ],
                  [
                    "🛡️",
                    "Diversification",
                    "Spread investments to reduce risk.",
                  ],
                  ["⛔", "Stop-Loss", "Automatically limits potential losses."],
                  [
                    "🎁",
                    "Dividend",
                    "Part of company profits paid to shareholders.",
                  ],
                ].map(([icon, title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-white dark:bg-[#1B1207] border border-gray-200 dark:border-[--primary-color]/20 p-7 hover:border-[--primary-color] hover:-translate-y-2 transition-all duration-300 shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[--bg-primary-gradient] flex items-center justify-center text-2xl mb-5">
                      {icon}
                    </div>

                    <h3 className="text-xl font-bold text-[--bg-color1] dark:text-white mb-4">
                      {title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-7">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/25 p-10">
                <h3 className="text-2xl font-bold text-white mb-5">
                  Build Your Trading Knowledge
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Learning these core concepts makes stock trading much easier
                  to understand. The stronger your foundation, the more
                  confident your investment decisions become over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="relative py-24 px-6 bg-gray-50 dark:bg-[#0F0903] overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[--primary-color]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto space-y-24">
            {/* ================================================= */}
            {/* Stock Trading Charges & Taxation */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Costs & Taxes
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Stock Trading Charges
                  <span className="text-[--primary-color]">
                    {" "}
                    & Taxation in India
                  </span>
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Understanding trading costs and taxes helps you estimate your
                  overall returns and avoid surprises while investing.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                {/* Charges */}

                <div className="rounded-3xl bg-white dark:bg-[--bg-color1] border border-gray-200 dark:border-[--primary-color]/20 p-10 shadow-lg">
                  <h3 className="text-3xl font-bold text-[--bg-color1] dark:text-white mb-8">
                    Common Charges
                  </h3>

                  <div className="space-y-6">
                    {[
                      [
                        "💼",
                        "Brokerage Fees",
                        "Charged by your broker for executing buy and sell orders.",
                      ],
                      [
                        "🏛️",
                        "STT",
                        "Securities Transaction Tax charged on eligible share transactions.",
                      ],
                      [
                        "📊",
                        "Exchange Charges",
                        "Fees collected by NSE or BSE for using the trading platform.",
                      ],
                      [
                        "🧾",
                        "GST",
                        "Applied on brokerage and certain service charges.",
                      ],
                      [
                        "📄",
                        "Stamp Duty",
                        "Government levy applicable on the purchase of securities.",
                      ],
                      [
                        "📁",
                        "Depository Charges",
                        "Charges for maintaining and operating your Demat account.",
                      ],
                    ].map(([icon, title, text]) => (
                      <div key={title} className="flex gap-5">
                        <div className="w-12 h-12 rounded-xl bg-[--bg-primary-gradient] flex items-center justify-center text-xl flex-shrink-0">
                          {icon}
                        </div>

                        <div>
                          <h4 className="font-bold text-xl text-[--bg-color1] dark:text-white">
                            {title}
                          </h4>

                          <p className="text-gray-600 dark:text-gray-400 mt-2 leading-7">
                            {text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Taxation */}

                <div className="rounded-3xl bg-[--bg-color1] border border-[--primary-color]/30 p-10 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

                  <div className="relative">
                    <h3 className="text-3xl font-bold text-white mb-8">
                      Taxation on Stock Profits
                    </h3>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-[--primary-color] font-bold text-xl mb-2">
                          Short-Term Capital Gains (STCG)
                        </h4>

                        <p className="text-gray-300 leading-7">
                          Profits from stocks sold within one year are generally
                          taxed according to the prevailing short-term capital
                          gains rules.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[--primary-color] font-bold text-xl mb-2">
                          Long-Term Capital Gains (LTCG)
                        </h4>

                        <p className="text-gray-300 leading-7">
                          Stocks held for more than one year are taxed under
                          long-term capital gains provisions, including any
                          applicable exemption limits.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[--primary-color] font-bold text-xl mb-2">
                          Dividend Income
                        </h4>

                        <p className="text-gray-300 leading-7">
                          Dividend income is generally added to your taxable
                          income and taxed according to your applicable income
                          tax slab.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}

              <div className="mt-10 rounded-2xl border border-[--primary-color]/20 bg-[--primary-color]/10 p-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
                  Tax rules may change with every Union Budget or regulatory
                  update. Always verify the latest tax provisions before filing
                  returns. Master Traders regularly updates educational content
                  to reflect current regulations.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* Why Choose Master Traders */}
            {/* ================================================= */}

            <div>
              <div className="text-center max-w-5xl mx-auto mb-16">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Why Master Traders
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                  Why Choose
                  <span className="text-[--primary-color]">
                    {" "}
                    Master Traders
                  </span>{" "}
                  for Stock Trading?
                </h2>

                <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
                {[
                  {
                    icon: "🎯",
                    title: "Real Market Experience",
                    text: "Our educational content and tools are created by professionals with practical market experience.",
                  },
                  {
                    icon: "🤝",
                    title: "Transparent Guidance",
                    text: "We explain opportunities and risks honestly without promising guaranteed returns.",
                  },
                  {
                    icon: "📚",
                    title: "Simple Learning",
                    text: "From beginner concepts to advanced strategies, everything is explained in a practical way.",
                  },
                  {
                    icon: "📊",
                    title: "Reliable Information",
                    text: "Prices, trading hours and market rules are based on recognised exchange and regulatory sources.",
                  },
                  {
                    icon: "💬",
                    title: "Support at Every Stage",
                    text: "Whether you're opening your first account or improving your strategy, we're here to help.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white dark:bg-[--bg-color1] border border-gray-200 dark:border-[--primary-color]/20 p-8 shadow-lg hover:-translate-y-2 hover:border-[--primary-color] transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[--bg-primary-gradient] flex items-center justify-center text-2xl mb-6">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-[--bg-color1] dark:text-white mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-7">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-3xl bg-[--bg-color1] border border-[--primary-color]/30 p-12">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Trade With Confidence
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  At Master Traders, we believe informed decisions lead to
                  better trading outcomes. Our goal is to provide clear
                  education, practical tools, and transparent guidance so you
                  can navigate the stock market with greater confidence.
                </p>
              </div>
            </div>

            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <div className="rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 relative">
              <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

              <div className="relative px-10 py-16 text-center">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-6">
                  Start Today
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Trade Smarter With
                  <span className="text-[--primary-color]">
                    {" "}
                    Master Traders
                  </span>
                </h2>

                <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8 mb-10">
                  Join thousands of traders using our educational resources,
                  market insights, and research tools to make more informed
                  decisions in the stock market.
                </p>

                <a
                  href="/signup"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] border border-[--primary-color] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Get Started Now
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

        <section className="bg-white dark:bg-[--bg-color1] py-16 transition-colors duration-300 px-4 md:px-8 lg:px-32 flex-grow">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <img
              src={cfdImage}
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

        {/* FAQs */}
        <section className="py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}

            <div className="text-center mb-16">
              <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                Frequently Asked Questions
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white">
                Stock Trading
                <span className="text-[--primary-color]"> FAQs</span>
              </h2>

              <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

              <p className="text-lg text-gray-600 dark:text-gray-400">
                Find answers to some of the most common questions about online
                stock trading, investing, and getting started with Master
                Traders.
              </p>
            </div>

            {/* FAQ */}

            <div className="space-y-5">
              {[
                {
                  question: "How can I buy stocks online in India?",
                  answer:
                    "Open a Demat account and a trading account with a registered broker. Once your accounts are verified and funded, you can search for a stock and place your buy order through the trading platform.",
                },
                {
                  question: "How much money do I need to start buying stocks?",
                  answer:
                    "There is no fixed minimum amount. You can begin with the price of a single share and gradually increase your investment over time.",
                },
                {
                  question: "Which stocks should I buy as a beginner?",
                  answer:
                    "Many beginners prefer large-cap companies because they are generally more stable. Always research a company before investing rather than relying on market tips.",
                },
                {
                  question: "Can I buy US stocks from India on Master Traders?",
                  answer:
                    "Yes. Through the Reserve Bank of India's Liberalised Remittance Scheme (LRS), Indian residents can invest in US stocks. Master Traders provides educational guidance to help you understand the process.",
                },
                {
                  question: "What is the difference between equity and stocks?",
                  answer:
                    "Equity represents ownership in a company, while stocks are the individual shares that represent that ownership. In everyday investing, both terms are often used interchangeably.",
                },
                {
                  question: "How do stock prices change?",
                  answer:
                    "Stock prices move because of supply and demand, company performance, economic conditions, investor sentiment, industry developments, and global news.",
                },
                {
                  question: "What are dividends?",
                  answer:
                    "Dividends are a portion of a company's profits distributed to shareholders, usually on a quarterly or annual basis.",
                },
                {
                  question: "Are stocks safe to invest in?",
                  answer:
                    "Stocks carry investment risk because prices can rise or fall. Diversifying your investments and maintaining a long-term perspective can help manage risk.",
                },
                {
                  question: "What is a Demat account?",
                  answer:
                    "A Demat account securely stores your shares and securities electronically, similar to how a bank account stores your money.",
                },
                {
                  question: "What is the difference between NSE and BSE?",
                  answer:
                    "The National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) are India's two major stock exchanges. Both are regulated by SEBI and allow trading in many of the same listed companies.",
                },
                {
                  question: "Can I sell a stock the same day I buy it?",
                  answer:
                    "Yes. This is known as intraday trading, where shares are bought and sold during the same trading session.",
                },
                {
                  question: "What is a stop-loss in stock trading?",
                  answer:
                    "A stop-loss is an order that automatically sells a stock once it reaches a price you set, helping limit potential losses.",
                },
                {
                  question: "How are stock profits taxed in India?",
                  answer:
                    "Profits are generally taxed as capital gains. Short-term and long-term investments are taxed under different rules, so it's important to check the latest tax regulations.",
                },
              ].map((faq, index) => (
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
                  Ready to Begin
                  <span className="text-[--primary-color]">
                    {" "}
                    Online Stock Trading?
                  </span>
                </h2>

                <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8 mb-10">
                  Master Traders gives you the tools, knowledge, and support you
                  need to trade with confidence—from your very first order to
                  your long-term investing journey.
                </p>

                <a
                  href="/signup"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] border border-[--primary-color] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Create Your Account
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

        <Footer />
      </div>
    </>
  );
}

export default Stocks;
