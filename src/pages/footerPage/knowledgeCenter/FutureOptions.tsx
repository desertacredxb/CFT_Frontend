import {
  Layers3,
  ShieldHalf,
  Headset,
  TrendingUp,
  TrendingDown,
  Briefcase,
  Shield,
  ChevronDown,
} from "lucide-react";
import PageBanner from "../../../components/BannerImage";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Nav";
import cfdImage from "../../../assets/option & fu.png";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const faqs = [
  {
    question: "What is futures and option trading?",
    answer: "Futures & Options Trading is a financial market segment where traders buy or sell contracts based on the future price of an underlying asset. Futures create an obligation to buy or sell, while options provide the right, but not the obligation, to do so.",
  },
  {
    question: "What are the 4 types of futures?",
    answer: "The four commonly traded types of futures include:\n\n• Stock Futures\n• Index Futures\n• Commodity Futures\n• Currency Futures\n\nEach category allows traders to participate in different financial markets through standardized contracts.",
  },
  {
    question: "What are the 4 types of options trading?",
    answer: "The four commonly used options trading approaches are:\n• Call Option Buying\n• Put Option Buying\n• Call Option Selling\n• Put Option Selling\n\nEach strategy has different risk and reward characteristics depending on market expectations.",
  },
  {
    question: "What is the difference between options and futures trading?",
    answer: "The main difference is that futures contracts create an obligation for both buyer and seller to complete the transaction on the expiry date. Options contracts give the buyer the right, but not the obligation, to buy or sell the asset. This makes trading futures options suitable for different trading objectives and risk preferences.",
  },
];

function FutureOptions() {
  const [active, setActive] = useState(0);

  const features = [
    {
      icon: <Layers3 className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Trade 100+ Futures & Options Contracts",
      description:
        "Access a wide range of equity, index, and commodity derivatives.",
    },
    {
      icon: <ShieldHalf className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Built-In Risk Management Tools",
      description:
        "Use stop-loss, hedging, and strategy builders to protect your positions.",
    },
    {
      icon: <TrendingUp className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Up to 500x Leverage on Select Contracts",
      description:
        "Amplify your exposure with smart leverage on select instruments.",
    },
    {
      icon: <Headset className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Expert Derivatives Support",
      description:
        "Get personalized help from specialists who understand complex trades.",
    },
  ];

  const whyChooseItems = [
    {
      title: "Trade in Rising and Falling Markets",
      desc: "Unlike traditional investing, Futures & Options Trading allows traders to take positions whether prices are expected to move up or down.",
    },
    {
      title: "Better Risk Management",
      desc: "One of the biggest advantages of trading futures options is the ability to reduce portfolio risk by using hedging strategies.",
    },
    {
      title: "Higher Market Exposure",
      desc: "With margin trading, Futures & Options Trading enables traders to control larger positions using comparatively lower capital.",
    },
    {
      title: "Portfolio Diversification",
      desc: "Trading futures options can include stocks, commodities, currencies, and indices, helping traders spread their investment across different market segments.",
    },
    {
      title: "Flexible Trading Strategies",
      desc: "From basic directional trades to advanced strategies, Futures & Options Trading offers multiple ways to participate according to your trading goals.",
    },
  ];

  const keyFeatures = [
    "Access to multiple market segments",
    "Standardized exchange-traded contracts",
    "Margin-based trading",
    "Daily market settlement",
    "Transparent pricing",
    "Defined expiry dates",
    "Suitable for hedging and speculation",
    "Educational support for beginners",
    "Real market insights",
    "Risk management guidance",
  ];

  const steps = [
    {
      step: "01",
      title: "Select the Market",
      text: "Choose whether you want to trade stocks, indices, commodities, or currencies.",
    },
    {
      step: "02",
      title: "Study Market Trends",
      text: "Analyze price movements using technical analysis, market news, and economic events.",
    },
    {
      step: "03",
      title: "Choose Futures or Options",
      text: "Select the contract that best matches your trading strategy and risk level.",
    },
    {
      step: "04",
      title: "Place Your Trade",
      text: "Enter your position according to your market analysis.",
    },
    {
      step: "05",
      title: "Monitor Performance",
      text: "Track your open positions and make decisions based on changing market conditions.",
    },
    {
      step: "06",
      title: "Exit Before or At Expiry",
      text: "Close your position or allow the contract to expire based on your strategy.",
    },
  ];

  const benefits = [
    "Opportunity to trade different financial instruments",
    "Better flexibility compared to traditional investing",
    "Ability to hedge investment risk",
    "Efficient use of trading capital",
    "Potential to benefit in different market conditions",
    "High liquidity in popular contracts",
    "Transparent exchange-regulated trading",
    "Multiple trading strategies available",
    "Better portfolio management",
    "Continuous learning opportunities",
  ];

  const whoCanBenefit = [
    "Beginners learning financial markets",
    "Active traders",
    "Experienced investors",
    "Portfolio managers",
    "Commodity traders",
    "Currency traders",
    "Stock market participants",
    "Businesses managing price risk",
  ];

  const thingsToKnow = [
    "Understand how contracts work.",
    "Learn about margin requirements.",
    "Know the expiry date of contracts.",
    "Always use risk management techniques.",
    "Never trade without proper research.",
    "Stay updated with market news.",
    "Practice before investing significant capital.",
    "Trade according to your financial goals.",
  ];

  const whyLearnWithUs = [
    "Simple educational resources",
    "Easy explanations for beginners",
    "Regular market insights",
    "Practical trading knowledge",
    "Focus on risk management",
    "Updated financial information",
    "Learning-based approach",
    "Reliable educational content",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Futures &amp; Options Trading | Master Traders</title>

        <meta
          name="description"
          content="Learn Futures &amp; Options Trading with Master Traders, hedge risk, trade rising or falling markets &amp; build strategy with expert-led, easy-to-follow guidance."
        />

        <meta
          name="keywords"
          content="futures and options trading, F&O trading, trading futures options, futures trading India, options trading India, how does futures options trading work, futures vs options, hedging with options, F&O trading for beginners, derivatives trading"
        />

        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/knowledge/futures-options-trading"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Futures &amp; Options Trading | Master Traders"
        />
        <meta
          property="og:description"
          content="Learn Futures &amp; Options Trading with Master Traders, hedge risk, trade rising or falling markets &amp; build strategy with expert-led, easy-to-follow guidance."
        />
        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/knowledge/futures-options-trading"
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
          content="Futures &amp; Options Trading | Master Traders"
        />
        <meta
          name="twitter:description"
          content="Learn Futures &amp; Options Trading with Master Traders, hedge risk, trade rising or falling markets &amp; build strategy with expert-led, easy-to-follow guidance."
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
        title="Futures & Options Trading Explained: Trade Smarter, Not Harder"
        subtitle="Trade smarter with Futures & Options Trading and learn how to manage market opportunities with confidence. Whether you are just starting or already understand the basics of the financial market, Futures & Options Trading gives you flexible ways to participate in price movements across stocks, indices, commodities, and currencies.
                  At Master Traders, we explain Futures & Options Trading in simple language with educational resources, market insights, and practical knowledge that helps traders understand the market before making decisions. If you are looking to understand trading futures options without complicated financial terms, you are in the right place.
                  "
      />

      {/* What is Futures & Options Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            What is Futures & Options Trading?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Futures & Options Trading is a segment of the financial market where traders use contracts instead of directly buying or selling an asset. These contracts allow participants to trade based on the expected future price of stocks, indices, commodities, or currencies.
            </p>
            <p>
              In Futures & Options Trading, a futures contract creates an obligation to buy or sell an asset on a future date at a fixed price. An options contract provides the right, but not the obligation, to buy or sell an asset before or on the expiry date.
            </p>
            <p>
              Many investors choose trading futures options to manage market risk, diversify trading strategies, or benefit from market movements in both rising and falling conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Futures & Options Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Why Choose Futures & Options Trading?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            There are many reasons why traders prefer Futures & Options Trading as part of their market strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseItems.map((item, index) => (
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
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Key Features of Futures & Options Trading
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Master Traders helps you understand every important aspect of Futures & Options Trading before entering the market. From market basics to risk management and strategy, we simplify complex concepts so you can trade with clarity and confidence. Learn first, trade smart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow"
              >
                <Shield className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Does Trading Futures Options Work */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            How Does Trading Futures Options Work?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-12">
            Understanding how trading futures and options works becomes easier when broken into simple steps. By learning the basics first, like contracts, margins, and market movements, before diving into strategies, you build a solid foundation that makes complex trading concepts much easier to grasp. Step by step, futures and options trading becomes less intimidating and more manageable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-lg"
              >
                <div className="absolute top-4 right-4 text-5xl font-black text-[var(--primary-color)]/15">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)] text-white flex items-center justify-center font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Benefits of Futures & Options Trading
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Choosing Futures & Options Trading provides several advantages when used with proper market knowledge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white dark:bg-[--bg-color1] rounded-lg shadow"
              >
                <TrendingUp className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Who Can Benefit from Futures & Options Trading?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Futures & Options Trading is suitable for different types of market participants from hedgers looking to manage risk, to speculators aiming to profit from price movements, to institutions seeking portfolio diversification. Whatever your goals or experience level, there's a way to use futures and options that fits your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {whoCanBenefit.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[--bg-color1] rounded-lg"
              >
                <Briefcase className="text-[var(--primary-color)] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-700 dark:text-gray-300">
            If you are interested in trading futures options, learning the basics before placing trades can help improve your decision-making.
          </p>
        </div>
      </section>

      {/* Things to Know */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Things to Know Before Trading Futures Options
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Before starting trading futures options, keep these important points in mind.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {thingsToKnow.map((item, index) => (
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
                  Learn Futures & Options Trading with Confidence
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Gain practical knowledge, understand market movements, and build a stronger trading foundation with Master Traders.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn with Master Traders */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white text-center">
            Why Learn Futures & Options Trading with Master Traders?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-8">
            At Master Traders, our goal is to simplify Futures & Options Trading for every learner. We focus on providing easy-to-understand educational content, market analysis, trading concepts, and practical insights.
          </p>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Why traders trust us:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {whyLearnWithUs.map((item, index) => (
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
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
              Risk Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Futures & Options Trading involves financial risk and may not be suitable for every investor. Market prices can change rapidly, and losses may exceed the initial investment in certain situations. Always understand the risks, conduct your own research, and consult a qualified financial advisor before making trading decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-[--bg-color1] py-16 transition-colors duration-300 px-4 md:px-8 lg:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <img
            src={cfdImage}
            alt="Futures & Options Illustration"
            className="w-full max-w-md mx-auto"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
              Top Perks of F&O Trading with <br />
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
      <section className="py-16 pt-8 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
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

      {/* CTA Block 2 */}
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
                  Ready to Learn Smarter Trading?
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Build your knowledge of Futures & Options Trading with clear guidance, practical insights, and educational resources from Master Traders.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Begin Learning Today
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

export default FutureOptions;
