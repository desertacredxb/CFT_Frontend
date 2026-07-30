import {
  Boxes,
  TrendingUp,
  TrendingDown,
  LineChart,
  BadgeCheck,
  Radar,
  LockKeyhole,
  DollarSign,
  Briefcase,
  Shield,
  ChevronDown,
  Cloud,
  Globe,
  Leaf,
} from "lucide-react";
import PageBanner from "../../../components/BannerImage";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Nav";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const faqs = [
  {
    question: "What is commodity trading?",
    answer: "What is commodity trading refers to buying and selling commodities such as gold, silver, crude oil, natural gas, and agricultural products through regulated exchanges. Traders participate in these markets to understand price movements and market trends.",
  },
  {
    question: "Is Commodity Trading India suitable for beginners?",
    answer: "Yes. Beginners can start learning Commodity Trading India by understanding market basics, commodity categories, price movements, and risk management before participating in the market.",
  },
  {
    question: "Which commodities are commonly traded in India?",
    answer: "Some commonly traded commodities include gold, silver, crude oil, natural gas, copper, zinc, aluminium, cotton, wheat, soybean, and spices.",
  },
  {
    question: "What factors affect commodity prices?",
    answer: "Commodity prices are influenced by supply and demand, weather conditions, government policies, international events, currency fluctuations, and global economic trends.",
  },
  {
    question: "Why should I learn what is commodity trading?",
    answer: "Learning what is commodity trading helps you understand how commodity markets function, how prices move, and how global events influence different commodity sector.",
  },
  {
    question: "Does Master Traders provide trading advice?",
    answer: "Master Traders focuses on educational content to help users understand Commodity Trading India and market concepts. The information is intended for learning purposes and should not be considered financial or investment advice.",
  },
];

function CommodityTrading() {
  const [active, setActive] = useState(0);

  const features = [
    {
      icon: <Boxes className="text-[var(--primary-color)] w-8 h-8" />,
      text: "55% of active traders report stronger returns within two years.",
    },
    {
      icon: <TrendingUp className="text-[var(--primary-color)] w-8 h-8" />,
      text: "The global commodity market saw $100 billion+ in profits in 2023",
    },
    {
      icon: <LineChart className="text-[var(--primary-color)] w-8 h-8" />,
      text: "Gold and crude oil have averaged 12–15% annual gains over the last five years.",
    },
    {
      icon: <BadgeCheck className="text-[var(--primary-color)] w-8 h-8" />,
      text: "30% of new traders begin with commodities to diversify faster.",
    },
    {
      icon: <Radar className="text-[var(--primary-color)] w-8 h-8" />,
      text: "Top commodity traders often achieve 2–3× higher margins than equity-only peers.",
    },
    {
      icon: <LockKeyhole className="text-[var(--primary-color)] w-8 h-8" />,
      text: "Access 5 major global markets 24/7 for nonstop trading opportunities.",
    },
  ];

  const commodities = [
    { name: "Gold", category: "precious" },
    { name: "Silver", category: "precious" },
    { name: "Crude Oil", category: "energy" },
    { name: "Natural Gas", category: "energy" },
    { name: "Copper", category: "base" },
    { name: "Zinc", category: "base" },
    { name: "Aluminium", category: "base" },
    { name: "Cotton", category: "agri" },
    { name: "Wheat", category: "agri" },
    { name: "Soybean", category: "agri" },
  ];

  const preciousMetals = ["Gold", "Silver"];
  const baseMetals = ["Copper", "Zinc", "Aluminium", "Nickel", "Lead"];
  const energyCommodities = ["Crude Oil", "Natural Gas"];
  const agriCommodities = ["Wheat", "Cotton", "Soybean", "Maize", "Spices", "Sugar"];

  const tradingProcess = [
    "Market analysis",
    "Selecting a commodity",
    "Studying price trends",
    "Planning entry and exit",
    "Managing risk",
    "Monitoring the trade",
  ];

  const whyLearn = [
    "Portfolio Diversification - Commodities offer exposure beyond traditional investment options.",
    "Global Market Exposure - Commodity prices react to international events, creating learning opportunities.",
    "Inflation Awareness - Many commodities move differently during inflationary periods.",
    "Market Opportunities - Price fluctuations create opportunities for traders who understand market trends.",
    "Flexible Trading Choices - Different commodities provide various trading possibilities depending on market conditions.",
  ];

  const factors = [
    { title: "Supply and Demand", desc: "Changes in production or consumption directly affect prices.", icon: <TrendingUp /> },
    { title: "Weather Conditions", desc: "Agricultural commodities are heavily influenced by rainfall, drought, and climate.", icon: <Cloud /> },
    { title: "International Events", desc: "Global conflicts, trade policies, and economic conditions impact commodity markets.", icon: <Globe /> },
    { title: "Currency Movements", desc: "Exchange rates often influence commodity prices.", icon: <DollarSign /> },
    { title: "Government Policies", desc: "Import duties, export regulations, and taxation can affect commodity trading.", icon: <Shield /> },
  ];

  const benefits = [
    "Better understanding of financial markets",
    "Improved market analysis skills",
    "Knowledge of global economic trends",
    "Better risk awareness",
    "Improved decision-making",
    "Practical understanding of commodity sectors",
  ];

  const risks = [
    "High market volatility",
    "Sudden price changes",
    "Economic uncertainty",
    "Global political events",
    "Weather-related disruptions",
    "Emotional decision-making",
  ];

  const whoShouldLearn = [
    "Beginners interested in financial markets",
    "Working professionals",
    "Business owners",
    "Investors",
    "Students",
    "Market enthusiasts",
    "Individuals interested in economic trends",
  ];

  const tips = [
    "Learn market basics first.",
    "Understand different commodity categories.",
    "Follow market news regularly.",
    "Study charts and price trends.",
    "Practice proper risk management.",
    "Avoid emotional trading.",
    "Continue learning consistently.",
  ];

  const whyChooseMasterTraders = [
    "Beginner-friendly explanations",
    "Market insights",
    "Commodity education",
    "Risk awareness",
    "Practical learning",
    "Updated educational content",
    "Easy-to-understand trading concepts",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Commodity Trading: Gold to Crude Oil | Master Traders</title>

        <meta
          name="description"
          content="Learn commodity trading in India from gold & silver to crude oil & agri commodities. Simple, practical guides for beginners by Master Traders."
        />

        <meta
          name="keywords"
          content="commodity trading, commodity trading India, what is commodity trading, gold commodity trading, crude oil trading India, agricultural commodity trading, base metals trading, commodity market basics, commodity trading for beginners, MCX trading"
        />

        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/knowledge/commodity-trading"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Commodity Trading: Gold to Crude Oil | Master Traders"
        />
        <meta
          property="og:description"
          content="Learn commodity trading in India from gold & silver to crude oil & agri commodities. Simple, practical guides for beginners by Master Traders."
        />
        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/knowledge/commodity-trading"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Master Trader" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />
        <meta
          property="og:image:alt"
          content="Master Trader Logo"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:site"
          content="@MasterrTraderr"
        />
        <meta
          name="twitter:creator"
          content="@MasterrTraderr"
        />
        <meta
          name="twitter:title"
          content="Commodity Trading: Gold to Crude Oil | Master Traders"
        />
        <meta
          name="twitter:description"
          content="Learn commodity trading in India from gold & silver to crude oil & agri commodities. Simple, practical guides for beginners by Master Traders."
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
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          })}
        </script>
      </Helmet>
      <div className="mb-20">
        <Navbar />
      </div>

      <PageBanner
        title="Commodity Trading India Explained: From Gold to Crude Oil"
        subtitle="Commodity markets play an important role in the global economy. From gold and silver to crude oil and agricultural products, commodities influence prices, businesses, and investments every day. Understanding Commodity Trading India can help traders make informed decisions and learn how different markets work.
At Master Traders, our goal is to provide educational content that helps beginners and experienced traders understand the commodity market simply and practically. Whether you are learning what is commodity trading or exploring different commodity segments, this guide will help you build a strong foundation.
"
      />

      {/* What is Commodity Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            What is Commodity Trading?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mx-auto">
            <p>
              Commodity trading is the buying and selling of physical goods or commodity contracts through regulated exchanges. Instead of trading company shares, traders buy and sell commodities like:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 my-6">
              {commodities.map((item, index) => (
                <div key={index} className="p-3 bg-white dark:bg-[--bg-color1] rounded-lg text-center shadow">
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
            <p>
              The main purpose of Commodity Trading India is to benefit from price movements while understanding market demand, supply, and global events.
            </p>
            <p className="font-semibold text-[var(--primary-color)]">
              If you are wondering what is commodity trading, think of it as trading valuable raw materials that people and industries use every day.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Commodity Trading India */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            Understanding Commodity Trading India
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <p>
              Commodity Trading India has grown significantly over the years. Indian traders can access commodity markets through recognized exchanges and trade various metals, energy products, and agricultural commodities.
            </p>
            <p className="font-semibold text-black dark:text-white">Learning Commodity Trading India involves understanding:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
              {["Market timing", "Price movements", "Risk management", "Economic news", "Supply and demand", "Seasonal trends", "Global market impact"].map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 dark:bg-[--bg-color1] rounded-lg text-center">
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p>
              A strong understanding of Commodity Trading India helps traders analyze market conditions before making trading decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Commodities */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Types of Commodities Available in India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Precious Metals */}
            <div className="p-6 bg-white dark:bg-[--bg-color1] rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                  <DollarSign className="text-yellow-500 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white">Precious Metals</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                These include: {preciousMetals.join(", ")}. They are often considered relatively stable during uncertain economic conditions. Gold is widely used as a hedge against inflation, while silver adds industrial demand alongside its investment appeal.
              </p>
            </div>

            {/* Base Metals */}
            <div className="p-6 bg-white dark:bg-[--bg-color1] rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-500/20 flex items-center justify-center">
                  <Boxes className="text-gray-500 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white">Base Metals</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Examples include: {baseMetals.join(", ")}. These commodities are closely linked with industrial production. Their prices often move with global manufacturing and construction activity, making them a strong indicator of economic health.
              </p>
            </div>

            {/* Energy Commodities */}
            <div className="p-6 bg-white dark:bg-[--bg-color1] rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <TrendingUp className="text-orange-500 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white">Energy Commodities</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Popular energy commodities include: {energyCommodities.join(", ")}. Their prices are affected by international demand and geopolitical developments. Supply decisions and global events often cause sharp price swings in this closely watched segment.
              </p>
            </div>

            {/* Agricultural Commodities */}
            <div className="p-6 bg-white dark:bg-[--bg-color1] rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Leaf className="text-green-500 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white">Agricultural Commodities</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                These include: {agriCommodities.join(", ")}. Agricultural commodities are influenced by weather, production, and seasonal demand. Traders often track monsoon patterns and crop reports to anticipate price movements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Does Commodity Trading Work */}
      <section className="py-10 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            How Does Commodity Trading Work?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            To understand what is commodity trading, it is important to know how the process works.
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 mb-6">The general trading process includes:</p>
            <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {tradingProcess.map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{step}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Understanding Commodity Trading India requires patience, discipline, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Block 1 */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-14">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-3xl">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Get Started
                </span>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  Improve Your Commodity Market Knowledge
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Build confidence with educational guides that explain commodity markets in simple language and help you understand price movements.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore Learning Resources
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Commodity Trading India */}
      <section className="py-10 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Why Learn Commodity Trading India?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            There are several reasons why traders choose to study Commodity Trading India, from understanding local market dynamics and regulations to spotting opportunities in agricultural and industrial commodities. This knowledge helps traders make more informed, confident decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyLearn.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow">
                <TrendingUp className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors That Influence Commodity Prices */}
      <section className="py-10 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Factors That Influence Commodity Prices
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Anyone learning what is commodity trading should understand the factors that move prices, like supply and demand, weather conditions, geopolitical events, and currency fluctuations. Grasping these drivers helps traders anticipate market movements and make more informed decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factors.map((factor, index) => (
              <div key={index} className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/20 flex items-center justify-center mb-4">
                  <div className="text-[var(--primary-color)]">{factor.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{factor.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Learning Commodity Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Benefits of Learning Commodity Trading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow">
                <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
            Studying what is commodity trading also helps traders understand how commodities affect everyday life and businesses.
          </p>
        </div>
      </section>

      {/* Risks in Commodity Trading */}
      <section className="py-10 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Risks in Commodity Trading
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Every financial market carries risk. Some common risks include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {risks.map((risk, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <TrendingDown className="text-red-500 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{risk}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300 font-medium">
            Learning proper risk management is an important part of Commodity Trading India.
          </p>
        </div>
      </section>

      {/* CTA Block 2 */}
      <section className="py-10 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-14">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-3xl">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Start Learning
                </span>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  Learn Before You Trade
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Gain practical knowledge about commodity markets through easy-to-understand educational content created for beginners and experienced traders.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Learning Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Learn Commodity Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Who Should Learn Commodity Trading?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Understanding what is commodity trading can be useful for many people. It is suitable for:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whoShouldLearn.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow">
                <Briefcase className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
            Learning Commodity Trading India does not require advanced financial knowledge. Starting with the basics helps build confidence over time.
          </p>
        </div>
      </section>

      {/* Tips for Beginners */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Tips for Beginners in Commodity Trading India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg">
                <div className="w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <span className="text-gray-700 dark:text-gray-300">{tip}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300 font-medium">
            The more you understand what is commodity trading, the better prepared you will be to interpret market movements.
          </p>
        </div>
      </section>

      {/* Why Choose Master Traders */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Why Choose Master Traders?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Master Traders is committed to providing educational information that simplifies complex trading concepts. Our educational resources focus on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {whyChooseMasterTraders.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow">
                <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
            Whether you are exploring Commodity Trading India for the first time or improving your knowledge, Master Traders provides educational resources that help you understand the market with confidence.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-[--bg-color1] py-16 transition-colors duration-300 px-4 md:px-8 lg:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <img
            src={"/prodcut.png"}
            alt="Commodity Trading Illustration"
            className="w-full max-w-md mx-auto"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
              Commodity Trading Insights
            </h2>

            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-black dark:text-gray-300"
                >
                  {feature.icon}
                  <p className="text-base">{feature.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Frequently Asked Questions
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

                <div
                  className={`grid transition-all duration-300 ${active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-14">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-3xl">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Start Today
                </span>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  Ready to Learn Commodity Trading India?
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Explore educational guides, understand market concepts, and build your knowledge with Master Traders. Start learning today with simple, practical, and informative resources.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore Commodity Trading
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
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

      <Footer />
    </div>
  );
}

export default CommodityTrading;
