import {
  TrendingUp,
  Globe,
  Shield,
  Briefcase,
  BarChartBig,
  Target,
  Zap,
} from "lucide-react";
import PageBanner from "../../../components/BannerImage";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Nav";
import intradayImage from "../../../assets/Margin Trading.png";
import { Helmet } from "react-helmet-async";
import FaqSection from "../../../components/FaqSection";

const faqs = [
  {
    question: "Is intraday trading good for trading?",
    answer:
      "Intraday trading can be a good option for people who want quick results and are willing to actively monitor the market during the day. It is not automatically good or bad. It depends on your knowledge, discipline, and how well you manage risk.",
  },
  {
    question: "What is meant by intraday trading?",
    answer:
      "Intraday trading means buying and selling a financial instrument, such as a stock, within the same trading day. The position is closed before the market ends, so nothing is held overnight.",
  },
  {
    question: "Why do 90% of day traders lose money?",
    answer:
      "Many day traders lose money because they trade without a proper plan, skip using a stop loss, risk too much capital on a single trade, or let fear and greed guide their decisions instead of a clear strategy. Lack of experience and poor risk management are the biggest reasons for losses in intraday trading.",
  },
  {
    question: "How do I start intraday for beginners?",
    answer:
      "Beginners should start by learning the basics of intraday trading, opening a trading account, and practicing with small amounts of capital. It also helps to study chart reading, understand stop losses, and follow a simple trading plan before increasing your trade size.",
  },
  {
    question: "Is intraday trading gambling?",
    answer:
      "Intraday trading is not gambling when it is done with research, a clear strategy, and proper risk management. It becomes closer to gambling when trades are placed randomly, without analysis or a plan, purely hoping for quick profit.",
  },
  {
    question: "Can I sell first in intraday?",
    answer:
      "Yes, intraday trading allows you to sell a stock first without owning it, and then buy it back later the same day. This is known as short selling, and it lets traders try to profit when they expect prices to fall.",
  },
  {
    question: "How can I get big profit in intraday?",
    answer:
      "There is no guaranteed way to get big profit in intraday trading. Traders who aim for consistent, smaller gains while managing risk carefully tend to perform better over time than those chasing large, quick profits, since bigger targets usually come with bigger risk.",
  },
  {
    question: "How risky is intraday trading?",
    answer:
      "Intraday trading carries meaningful risk, especially when leverage is used. Prices can move quickly in either direction, and losses can happen just as fast as gains. Using a stop loss and trading with a clear plan can help manage this risk, but it cannot remove it completely.",
  },
  {
    question: "Which stock is profitable for intraday?",
    answer:
      "No fixed stock is always profitable for intraday trading. Traders generally look for stocks with high liquidity and enough daily price movement, since these are easier to enter and exit. Profitability depends on timing, strategy, and market conditions on that particular day, not on any single stock.",
  },
];

const howItWorks = [
  "You pick a stock or index you want to trade.",
  "You study the price chart to guess which direction the price may move.",
  "You buy or sell the stock using your trading account.",
  "You watch the price closely during the day.",
  "You close the trade before the market ends, either to book a profit or to limit a loss.",
];

const keyFactors = [
  {
    title: "Market Volatility",
    description:
      "Volatility means how much a price moves up and down in a short time. Higher volatility gives intraday traders more chances to profit, but it also increases risk.",
  },
  {
    title: "Liquidity",
    description:
      "Liquidity means how easily a stock can be bought or sold without changing its price too much. Highly liquid stocks are usually easier and safer to trade intraday.",
  },
  {
    title: "Trading Volume",
    description:
      "Volume shows how many shares are being traded at a given time. Higher volume usually means more traders are interested in that stock.",
  },
  {
    title: "News and Events",
    description:
      "Company results, economic data, and global news can move prices quickly. Many intraday traders keep an eye on the news calendar.",
  },
  {
    title: "Market Sentiment",
    description:
      "Overall mood of the market, whether traders are feeling positive or nervous, can also push prices in a certain direction during the day.",
  },
];

const benefits = [
  "Quick results - You do not have to wait for weeks. Trades are closed the same day.",
  "No overnight risk - Since positions are closed before the market shuts, your money is not exposed to news or events after hours.",
  "Flexibility across markets - You can apply this trading style to stocks, indices, and commodities.",
  "Learning by doing - Regular intraday trading helps you understand market behaviour faster than long-term investing alone.",
];


const tips = [
  "Always use a stop loss. Decide your exit point before you enter a trade, and stick to it.",
  "Trade with a plan. Know your entry price, target price, and stop loss before you click buy or sell.",
  "Choose liquid stocks. Stocks with high trading volume are easier to enter and exit.",
  "Do not overtrade. Taking fewer, better trades is usually more effective than taking many random ones.",
  "Start small. Use a small amount of capital while you are learning, and increase it slowly as you gain experience.",
  "Keep learning. Markets change, and continuous learning is part of long-term success as a trader.",
];

const whoShouldTrade = [
  "You can actively watch the market during trading hours.",
  "You are comfortable making quick decisions under pressure.",
  "You are willing to learn technical analysis and chart reading.",
  "You understand that losses are a normal part of trading and plan for them.",
];

function IntradayTrading() {
  const features = [
    {
      icon: <TrendingUp className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Quick Results",
      description: "Trades are closed the same day, so you do not have to wait for weeks to see results.",
    },
    {
      icon: <Shield className="text-[var(--primary-color)] w-8 h-8" />,
      title: "No Overnight Risk",
      description: "Positions are closed before the market shuts, so your money is not exposed to after-hours news.",
    },
    {
      icon: <Globe className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Flexibility Across Markets",
      description: "Apply this trading style to stocks, indices, and commodities.",
    },
    {
      icon: <BarChartBig className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Learning by Doing",
      description: "Regular intraday trading helps you understand market behaviour faster.",
    },
    {
      icon: <Target className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Fast Execution",
      description: "Quick order execution to capitalize on market opportunities.",
    },
    {
      icon: <Zap className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Real-Time Data",
      description: "Live market data to make informed trading decisions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Intraday Trading Guide | Master Trader</title>
        <meta
          name="title"
          content="Intraday Trading Guide | Master Trader"
        />
        <meta
          name="description"
          content="Learn intraday trading strategies, timing, and risk control from Master Trader. Perfect for those who want to profit from daily market movements."
        />
        <meta
          name="keywords"
          content="intraday trading, intraday trading India, what is intraday trading, day trading, intraday tips, intraday strategies, stock market trading, Master Traders intraday"
        />
        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/knowledge/intraday-trading"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/knowledge/intraday-trading"
        />
        <meta
          property="og:title"
          content="Intraday Trading Guide | Master Trader"
        />
        <meta
          property="og:description"
          content="Learn intraday trading strategies, timing, and risk control from Master Trader. Perfect for those who want to profit from daily market movements."
        />
        <meta property="og:site_name" content="Master Traders" />
        <meta property="og:locale" content="en_IN" />
        <meta
          name="og:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Intraday Trading Guide | Master Trader"
        />
        <meta
          name="twitter:description"
          content="Learn intraday trading strategies, timing, and risk control from Master Trader. Perfect for those who want to profit from daily market movements."
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
        title="Intraday Trading"
        subtitle="Intraday trading is one of the most popular ways to trade in the Indian stock market today. If you want to buy and sell shares on the same day and try to earn from small price movements, this approach gives you that chance. At Master Traders, we help you understand it in simple words, so you can trade with more confidence and less confusion.
This page explains what intraday trading is, how it works, what risks are involved, and how you can get started the right way.
"
      />

      {/* What is Intraday Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            What is Intraday Trading?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mx-auto">
            <p>
              Intraday trading means buying and selling a stock, index, or other financial instrument on the same trading day. You do not hold the position overnight. If you buy a stock in the morning, you must sell it before the market closes the same day. If you do not sell it yourself, most brokers will close the position for you automatically before the market shuts.
            </p>
            <p>
              The main goal here is simple. Traders try to earn small profits from price changes that happen during the day, instead of waiting for weeks or months like long-term investors do.
            </p>
            <p>
              This is different from regular investing in one big way. Investors buy shares and hold them for a long time, hoping the company grows in value. Intraday traders are not thinking about the company's future. They are only looking at how the price moves in the next few minutes or hours.
            </p>
          </div>
        </div>
      </section>

      {/* How Does Intraday Trading Work */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            How Does Intraday Trading Work?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            In this style of trading, everything happens within one trading session. Here is how it usually works in simple steps.
          </p>
          <div className="space-y-3 grid grid-cols-1 md:grid-cols-2">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg">
                <div className="w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-left">{step}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700 dark:text-gray-300">
            Most traders use tools like price charts, trading volume, and technical indicators to make these decisions. A good trading platform makes this process much easier by showing live prices, quick order buttons, and clear charts, all in one place.
          </p>
        </div>
      </section>

      {/* Key Factors That Affect Intraday Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Key Factors That Affect Intraday Trading
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Several things can affect how a stock moves during the day. Understanding these factors is an important part of learning this skill.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFactors.map((factor, index) => (
              <div key={index} className="p-6 bg-white dark:bg-[--bg-color1] rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)]/20 flex items-center justify-center mb-4">
                  <TrendingUp className="text-[var(--primary-color)] w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{factor.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Intraday Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Benefits of Intraday Trading
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            It offers a few clear advantages for traders who understand how it works.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg shadow">
                <TrendingUp className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block 1 */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-14">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-3xl">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Get Started
                </span>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  See These Benefits in Action
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Open a Master Traders account and experience fast execution, real-time data, and same-day results for yourself.
                </p>
              </div>

              <a
                href="/signup"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Started Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Risks of Intraday Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Risks of Intraday Trading
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Being honest about risk is important, and every trader should know this before starting. This is not a guaranteed way to make money. Prices can move against you just as easily as they can move in your favour. Using leverage can increase both your profits and your losses. Many new traders lose money because they trade without a plan, without a stop loss, or because they let emotions guide their decisions instead of logic.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">

            This is why risk management is not optional in this kind of trading. It is one of the most important skills a trader can learn.

          </p>
        </div>
      </section>

      {/* Intraday Trading Tips for Beginners */}
      <section className="py-16 pt-6 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Intraday Trading Tips for Beginners
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            If you are new to this, these simple tips can help you build good habits from day one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow">
                <div className="w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700 dark:text-gray-300">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block 2 */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-14">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-3xl">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Practice Trading
                </span>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  Practice Intraday Trading with Confidence
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Master Traders gives you the charts, data, and support you need to make informed intraday trading decisions every day.
                </p>
              </div>

              <a
                href="/signup"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore Trading Tools
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Consider Intraday Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Who Should Consider Intraday Trading?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            This style of trading is best suited for people who can give it proper time and attention. It may be a good fit for you if:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whoShouldTrade.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow">
                <Briefcase className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
            If you prefer a slower approach and cannot monitor the market throughout the day, long-term investing may suit you better than this approach.
          </p>
        </div>
      </section>

      {/* Why Choose Master Traders for Intraday Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Why Choose Master Traders for Intraday Trading
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            <p>
              Master Traders is built to support traders at every stage, from someone placing their first order to someone trading intraday every single day. Our platform offers real-time market data, fast order execution, clear charts, and educational resources that explain intraday trading in plain language.
            </p>
            <p>
              Our support team is available to help you whenever you have questions, so you never feel left on your own while trading.
            </p>
            <p>
              We believe informed traders make better decisions. That is why our content, tools, and platform are all designed to help you understand this approach before you risk your money, not after.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Block 3 */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-14">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-3xl">
                <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-5">
                  Get Started
                </span>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  Ready to Trade Smarter?
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Join Master Traders and start intraday trading with tools trusted by traders across India.
                </p>
              </div>

              <a
                href="/signup"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Create My Account
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-[--bg-color1] py-16 transition-colors duration-300 px-4 md:px-8 lg:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <img
            src={intradayImage}
            alt="Intraday Trading Illustration"
            className="w-full max-w-md mx-auto"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
              Top Perks of Intraday Trading with <br />
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

      {/* FAQs */}
      <FaqSection faqs={faqs}/>

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
                  Your Next Trade Starts Here
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  You now know how intraday trading works, what it takes, and how to manage the risk. Open your Master Traders account and put that knowledge to use with real-time tools built for active traders.
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

      <Footer />
    </div>
  );
}

export default IntradayTrading;
