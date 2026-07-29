import {
  LayoutGrid, // For Diverse Stock Selection
  Activity, // For Real-time Market Insights
  MonitorSmartphone, // For User-friendly Interface
  Globe2, // For Global Market Research
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
  Briefcase,
  Shield,
} from "lucide-react";
import PageBanner from "../../../components/BannerImage";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Nav";
import cfdImage from "../../../assets/03-1.webp";
import { Helmet } from "react-helmet-async";
import FaqSection from "../../../components/FaqSection";

function EquityTrading() {
  const features = [
    {
      icon: <LayoutGrid className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Access 500+ Stocks",
      description:
        "Choose from a diverse selection of stocks across global markets.",
    },
    {
      icon: <Activity className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Real-Time Market Data Updated Every Second",
      description:
        "Gain confidence with live quotes, instant news, and expert analysis.",
    },
    {
      icon: (
        <MonitorSmartphone className="text-[var(--primary-color)] w-8 h-8" />
      ),
      title: "User-Friendly Platform Trusted by 50,000+ Traders",
      description: "Trade with ease, whether you're a beginner or expert.",
    },
    {
      icon: <Globe2 className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Global Research from 50+ Financial Experts",
      description:
        "Stay ahead with insights and trends provided by top analysts worldwide.",
    },
  ];

  const faqItems = [
    {
      question: "What is meant by equity trading?",
      answer: "Trading on equity means buying and selling shares of a company on a stock exchange to earn profit from changes in the share price. When you trade equity, you become a partial owner of the company whose shares you hold.",
    },
    {
      question: "Is equity trading risky?",
      answer: "Yes, equity trading carries risk because share prices can go up or down based on market conditions, company performance, and economic factors. However, with proper research, patience, and guidance, these risks can be managed. This is one of the main reasons for equity trading education being so important before you begin.",
    },
    {
      question: "Is equity trading profitable?",
      answer: "Trading on equity can be profitable over time, especially when investors do proper research and stay invested for the long term. Profits are never guaranteed, since markets involve risk, but many investors have grown their wealth through consistent and informed trading on equity.",
    },
    {
      question: "How do I start equity trading?",
      answer: "To start trading on equity, you need to open a trading and demat account, complete your KYC process, add funds, and begin researching companies before placing your first trade. Master Traders makes this process simple with step-by-step guidance for beginners.",
    },
    {
      question: "What is the minimum amount needed to start equity trading?",
      answer: "There is no fixed minimum amount for trading on equity, since you can buy shares based on their current market price. Many beginners start with a small amount and increase their investment gradually as they gain confidence and experience.",
    },
    {
      question: "What is the difference between intraday trading and delivery trading?",
      answer: "Intraday trading means buying and selling shares on the same day, while delivery trading means holding shares in your demat account for a longer period. Both fall under trading on equity, but they involve different levels of risk and strategy.",
    },
    {
      question: "Do I need a broker to start equity trading?",
      answer: "Yes, you need a registered broker or a trading platform like Master Traders to buy and sell shares on the stock exchange. A good broker also provides research, tools, and guidance to help you trade more confidently.",
    },
    {
      question: "What documents are required to open a trading account?",
      answer: "You generally need your PAN card, Aadhaar card, a bank account, and a passport-size photograph to open a trading and demat account. Master Traders guides you through the entire documentation process without any confusion.",
    },
    {
      question: "How much time does equity trading take daily?",
      answer: "The time required depends on your trading style. Long-term investors may only need to check the market occasionally, while active traders following intraday strategies may need to track the market throughout trading hours.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Equity Trading: Grow Your Wealth | Master Traders</title>

        <meta
          name="description"
          content="Learn equity trading with Master Traders, buy shares, build wealth & earn dividends with expert guidance. Simple, honest lessons for every Indian investor."
        />

        <meta
          name="keywords"
          content="equity trading, trading on equity, equity trading India, how to start equity trading, stock trading for beginners, equity shares trading, buy shares online India, equity trading course, demat account, equity vs mutual funds"
        />

        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/knowledge/equity-trading"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Equity Trading: Grow Your Wealth | Master Traders"
        />
        <meta
          property="og:description"
          content="Learn equity trading with Master Traders, buy shares, build wealth & earn dividends with expert guidance. Simple, honest lessons for every Indian investor."
        />
        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/knowledge/equity-trading"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map(({ question, answer }) => ({
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
        title="Grow Your Wealth With Equity Trading - The Master Traders' Way"
        subtitle="Equity trading is one of the most popular ways to grow wealth in today's financial markets. If you are searching for genuine reasons for trading on equity, you are already on the right path toward building a stronger financial future. At Master Traders, we help everyday people understand the stock market in plain, simple language, so anyone, even someone with zero trading background, can start with confidence.
In this guide, we will walk you through what equity trading really means, why it matters, and how trading on equity can help you build long-term wealth. We will also cover the real factors for trading on equity that make it one of the smartest financial decisions you can make in 2026.
"
      />

      {/* What is Equity Trading Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            What is Equity Trading?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Equity trading simply means buying and selling shares of a company on the stock exchange. When you buy a share, you own a small part of that company. If the company grows and performs well, the value of your share usually goes up. If you sell that share at a higher price than you bought it, you make a profit.
            </p>
            <p>
              In simple words, trading on equity is a way to become a part owner of a business without needing millions of rupees. You just need a small amount of money, a trading account, and the right knowledge to get started.
            </p>
            <p className="font-semibold text-[var(--primary-color)]">
              This is one of the biggest reasons for trading on equity. It gives ordinary people the chance to grow their money the same way big investors do.
            </p>
          </div>
        </div>
      </section>

      {/* Top Reasons for Equity Trading */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Top Reasons for Equity Trading Everyone Should Know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md">
              <TrendingUp className="text-[var(--primary-color)] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Ownership in Growing Companies
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                When you buy shares, you actually own a piece of that company. As the company grows, your investment can grow with it. This is one of the strongest aspects of trading on equity, because you are not just saving money; you are becoming a part of a business story.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md">
              <DollarSign className="text-[var(--primary-color)] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Higher Return Potential Compared to Traditional Savings
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bank savings and fixed deposits give slow and limited returns. Trading on equity, on the other hand, has historically offered higher returns over the long term. This is a major reason why more people are choosing trading on equity instead of letting their money sit idle.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md">
              <Activity className="text-[var(--primary-color)] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Liquidity and Easy Access to Your Money
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unlike property or gold, shares can be bought and sold within seconds during market hours. This easy access to your funds is another one of the practical benefits of equity trading that attracts new investors every single day.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md">
              <TrendingUp className="text-[var(--primary-color)] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Power of Compounding Over Time
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                When you stay invested and reinvest your profits, your money grows faster over the years. This compounding effect is one of the most underrated aspects of trading on equity, especially for people planning for retirement or long-term goals.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md">
              <PieChart className="text-[var(--primary-color)] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Diversification Across Sectors
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Equity markets allow you to invest across different industries, such as technology, banking, healthcare, and energy. This spreads your risk and is one of the smart strategies for trading on equity that experienced investors always mention.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-[--bg-color1] rounded-xl shadow-md">
              <DollarSign className="text-[var(--primary-color)] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Dividend Income Along with Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Many companies share their profits with shareholders in the form of dividends. This means you can earn regular income along with the growth in share price, which is another strong reason people choose trading on equity as part of their financial plan.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
              Beating Inflation Over the Long Run
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              The value of money reduces every year due to inflation. Equity trading has historically helped investors beat inflation better than most other investment options, making it one of the most important reasons for trading on equity in today's economy.
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
                  Ready to Start Your Trading on Equity Journey?
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Open your trading account with{" "}
                  <span className="text-[--primary-color] font-semibold">
                    Master Traders
                  </span>{" "}
                  today and get expert guidance at every step.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Open Free Demat Account
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Trading on Equity */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            Understanding Trading on Equity
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Trading on equity is a strategy where a company or an investor uses borrowed money along with their own funds to increase potential returns. In simple terms, it means using a small amount of your own capital and a larger amount of borrowed capital to try to earn bigger profits.
            </p>
            <p>
              While this can increase your gains, it can also increase your losses, so it should only be used once you understand the market well. Master Traders offers free learning resources and expert support to help you understand trading on equity safely before you try it in real markets.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Equity Trading Compared to Other Investment Options
          </h2>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-6">
            One of the clearest reasons for trading on equity is how it compares to other common ways of growing your money. Here is a simple side-by-side look.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-[--bg-color1] rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
              <thead>
                <tr className="bg-[var(--primary-color)] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Investment Option</th>
                  <th className="px-6 py-4 text-left font-semibold">Return Potential</th>
                  <th className="px-6 py-4 text-left font-semibold">Risk Level</th>
                  <th className="px-6 py-4 text-left font-semibold">Ease of Access</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-black dark:text-white">Equity Shares</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">High over the long term</td>
                  <td className="px-6 py-4 text-red-500">High</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Very easy, tradable daily</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-black dark:text-white">Mutual Funds</td>
                  <td className="px-6 py-4 text-yellow-600 font-semibold">Moderate to high</td>
                  <td className="px-6 py-4 text-yellow-600">Moderate</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Easy</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-black dark:text-white">Fixed Deposits</td>
                  <td className="px-6 py-4 text-gray-500">Low</td>
                  <td className="px-6 py-4 text-green-600">Very low</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Moderate, funds are locked in</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-black dark:text-white">Gold</td>
                  <td className="px-6 py-4 text-yellow-600 font-semibold">Moderate</td>
                  <td className="px-6 py-4 text-yellow-600">Moderate</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Easy</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-black dark:text-white">Real Estate</td>
                  <td className="px-6 py-4 text-yellow-600 font-semibold">Moderate to high</td>
                  <td className="px-6 py-4 text-yellow-600">Moderate</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Difficult, takes time to sell</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
            As the table shows, equity trading generally offers higher growth potential than traditional options like fixed deposits, though it comes with more short-term ups and downs. This trade-off is exactly why financial experts often recommend keeping some part of your savings in trading on equity, especially for long-term goals.
          </p>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-16 pt-10 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Key Terms Every Equity Trader Should Know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Bid Price, the highest price a buyer is willing to pay for a share.",
              "Ask Price, the lowest price a seller is willing to accept.",
              "Market Order, an order that buys or sells a share immediately at the current price.",
              "Limit Order, an order that only executes at a price you choose.",
              "Stop Loss, a safety tool that automatically sells your share if the price falls to a level you set, helping to limit losses.",
              "Market Capitalisation, the total value of a company, calculated by multiplying the share price by the total number of shares.",
              "Dividend, a portion of company profit that is shared with shareholders.",
            ].map((term, index) => (
              <div
                key={index}
                className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <p className="text-gray-700 dark:text-gray-300">{term}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
            Knowing these basic terms makes it much easier to follow market updates and understand why they matter to your trading decisions.
          </p>
        </div>
      </section>

      {/* Taxation */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            Taxation on Equity Trading
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
            <p>
              Profits from equity trading are taxed based on how long you hold your shares.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Long-term Capital Gain:</strong> If you sell shares after holding them for more than twelve months, the profit is called a long-term capital gain.
              </li>
              <li>
                <strong>Short-term Capital Gain:</strong> If you sell shares within twelve months, the profit is called a short-term capital gain, which is usually taxed at a higher rate.
              </li>
              <li>
                <strong>Intraday Trading:</strong> If you trade intraday, your profit is treated as regular business income and taxed as per your income slab.
              </li>
            </ul>
            <p className="mt-4">
              Tax rules can change from time to time, so it is always a good idea to confirm the latest rates with a qualified chartered accountant before filing your returns.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Master Traders */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white text-center">
            Why Choose Master Traders for Equity Trading?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
              <Briefcase className="text-[var(--primary-color)] w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Real Market Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team includes traders with years of hands-on experience in the Indian and global stock markets. We do not just teach theory; we share what actually works in real trading conditions.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
              <Shield className="text-[var(--primary-color)] w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Simple and Transparent Guidance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We break down complex trading terms into simple language so that even a complete beginner can understand the reasons for equity trading without feeling confused or overwhelmed.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
              <TrendingUp className="text-[var(--primary-color)] w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Trusted by Thousands of Traders
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our platform is built on trust, accuracy, and honest reporting. We do not make false promises of guaranteed profits, because we believe in educating our users with facts, not hype.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
              <Activity className="text-[var(--primary-color)] w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Strong Research and Analysis Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our research desk studies the market daily so that our traders get reliable insights before making any trading decision.
              </p>
            </div>
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
                  Stay Informed
                </span>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  Get Expert Equity Trading Insights Every Day
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Join Master Traders and receive daily market updates, research reports, and trading tips from our expert team.
                </p>
              </div>

              <a
                href="/signup"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Started Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Keep in Mind */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-white dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            Things to Keep in Mind Before You Start Equity Trading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <TrendingDown className="text-[var(--primary-color)] w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">Markets go up and down, so losses are possible along with profits.</p>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="text-[var(--primary-color)] w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">Never invest money that you cannot afford to lose.</p>
            </div>
            <div className="flex items-start gap-3">
              <Activity className="text-[var(--primary-color)] w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">Always research a company before buying its shares.</p>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="text-[var(--primary-color)] w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">Avoid emotional decisions during market ups and downs.</p>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign className="text-[var(--primary-color)] w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">Start small and increase your investment as you gain experience.</p>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-700 dark:text-gray-300 font-medium">
            Understanding both the benefits and the risks is what makes you a smart trader, not just a hopeful one.
          </p>
        </div>
      </section>

      {/* How Master Traders Helps */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50 dark:bg-[--bg-color1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            How Master Traders Helps You Trade Smarter
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
            <p>
              At Master Traders, our goal is simple. We want to help you understand the real reasons for equity trading and guide you with honest, easy-to-understand information. From beginner-friendly tutorials to expert market analysis, we support you at every stage of your trading journey.
            </p>
            <p>
              Whether you are just learning what a share is, or you already understand trading on equity and want advanced strategies, our platform is designed to grow with you.
            </p>
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
              Top Perks of Equity Trading with <br />
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

      {/* FAQ Section */}
      <FaqSection faqs={faqItems} title="Frequently Asked Questions" />


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
                  Your Equity Trading Journey Starts Here
                </h3>

                <p className="text-lg text-gray-300 leading-8">
                  Get started with Master Traders and learn, trade, and grow with expert support by your side.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Started Today
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

export default EquityTrading;
