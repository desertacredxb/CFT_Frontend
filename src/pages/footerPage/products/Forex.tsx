import { LuGlobe, LuLayoutDashboard, LuHeadphones } from "react-icons/lu";
import PageBanner from "../../../components/BannerImage";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Nav";
import FaqSection, { FaqItem } from "../../../components/FaqSection";
import cfdImage from "../../../assets/forex.png";
import { ArrowBigRight, LucideBarChart2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const faqs: FaqItem[] = [
  {
    question: "Is trading forex a good idea?",
    answer: "Forex trading can be a good idea if you are willing to learn properly before you start. It offers flexible hours, access to global markets, and the chance to build a long-term skill. Like any form of trading, it comes with risk, so proper education and a clear strategy make a big difference in whether it works well for you."
  },
  {
    question: "Can I start forex with 1000 rupees?",
    answer: "Yes, many brokers allow you to start forex trading with a small amount like 1000 rupees. However, starting small should be paired with strong learning first. Use a small starting amount to practice and understand the market before increasing your investment."
  },
  {
    question: "Is forex trading legal in India?",
    answer: "Forex trading is legal in India when done through SEBI-regulated brokers and authorized currency pairs involving the Indian Rupee. Trading through unregulated foreign platforms is not permitted under Indian law. Always check that your broker and trading method follow RBI and SEBI guidelines."
  },
  {
    question: "Is forex trading profitable?",
    answer: "Forex trading can be profitable, but it is not guaranteed. Profitability depends on your knowledge, discipline, risk management, and experience. Traders who treat it as a skill to be learned over time, rather than a shortcut to quick money, tend to have better long-term results."
  }
];
function Forex() {
  const navigator = useNavigate();

  const features = [
    {
      icon: <LuGlobe className="text-[var(--primary-color)] text-3xl" />,
      title: "Access 24+ Global Currency Pairs",
      description:
        "Trade popular majors, minors, and exotic pairs all from a single platform.",
    },
    {
      icon: (
        <LucideBarChart2 className="text-[var(--primary-color)] text-3xl" />
      ),
      title: "Competitive Spreads & Low Costs",
      description:
        "Benefit from tight spreads and minimal fees to boost your returns.",
    },
    {
      icon: <LuHeadphones className="text-[var(--primary-color)] text-3xl" />,
      title: "Dedicated Expert Support",
      description:
        "Get professional assistance whenever you need it, we’re here to help.",
    },
    {
      icon: (
        <LuLayoutDashboard className="text-[var(--primary-color)] text-3xl" />
      ),
      title: "Leverage Up to 500x",
      description: "Boost trading power while managing risk smartly.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Learn Forex Trading & Start Earning | Master Traders</title>

        <meta
          name="title"
          content="Learn Forex Trading & Start Earning | Master Traders"
        />

        <meta
          name="description"
          content="Master forex trading with expert mentors, live strategies & risk-free demo practice. Join thousands of Indian traders building real skills. Start free today!"
        />

        <meta
          name="keywords"
          content="forex trading India, learn forex trading, forex trading course online, best forex trading platform India, forex trading for beginners, start forex trading, forex trading training, forex demo account free, forex trading mentorship, earn from forex trading"
        />

        <meta name="author" content="Master Traders" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/products/forex"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/products/forex"
        />
        <meta
          property="og:title"
          content="Learn Forex Trading & Start Earning | Master Traders"
        />
        <meta
          property="og:description"
          content="Master forex trading with expert mentors, live strategies & risk-free demo practice. Join thousands of Indian traders building real skills. Start free today!"
        />
        <meta
          property="og:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />
        <meta property="og:site_name" content="Master Traders" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Learn Forex Trading & Start Earning | Master Traders"
        />
        <meta
          name="twitter:description"
          content="Master forex trading with expert mentors, live strategies & risk-free demo practice. Join thousands of Indian traders building real skills. Start free today!"
        />
        <meta
          name="twitter:image"
          content={"https://www.mastertrader.co.in/MT-logo.png"}
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
            name: "Forex Trading",
            url: "https://www.mastertrader.co.in/products/forex",
            image: "https://www.mastertrader.co.in/MT-logo.png",
            description:
              "Master forex trading with expert mentors, live strategies & risk-free demo practice. Join thousands of Indian traders building real skills. Start free today!",
            brand: {
              "@type": "Brand",
              name: "Master Trader",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.mastertrader.co.in/products/forex",
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
        title=" Forex Trading: Start Your Journey to Financial Freedom with Master Traders"
        subtitle={<>Money moves the world every single day, and the forex market is where that movement happens. If you have ever wondered why so many people are turning to currency trading, you are in the right place. In this guide, we will walk you through real forex trading, how it works, and why Master Traders is the platform trusted by traders across India to learn, practice, and grow in this market. <br /> We keep things simple here. No confusing jargon, no complicated charts thrown at you without explanation. Just honest, easy-to-understand information so you can decide if forex trading is right for you.</>}
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
              What is {" "}
              <span className="text-[--primary-color]">Forex Trading?</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mb-8" />

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-8">
              Forex trading simply means buying one currency while selling another. For example, you might trade the Indian Rupee against the US Dollar. When the value of one currency changes compared to the other, traders can earn a profit from that difference.


            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-8">
              The forex market is the largest financial market in the world. Banks, businesses, governments, and individual traders all take part in it every day. Because it is so large and active, there are many genuine reasons for forex trading that attract new traders every year.
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
              <span className="text-[--primary-color]">Forex Trading</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Here are the main reasons for forex trading that make it different from other forms of investing.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "The Market Never Sleeps",
                desc: "The forex market operates 24 hours a day, five days a week, allowing you to trade before work, after work, or late at night. You can fit trading around your schedule instead of adjusting your life to market hours.",
              },
              {
                title: "Start With a Small Investment",
                desc: "Forex trading does not require a large amount of capital to get started. Beginners can start with a small investment, gain experience, and grow their trading skills over time with proper guidance.",
              },
              {
                title: "High Liquidity",
                desc: "With trillions of dollars traded every day, the forex market offers exceptional liquidity. This allows traders to enter and exit positions quickly with minimal delays and competitive pricing.",
              },
              {
                title: "Profit in Rising & Falling Markets",
                desc: "Forex trading provides opportunities in both bullish and bearish market conditions. Whether a currency pair is rising or falling, the right strategy can help you take advantage of market movements.",
              },
              {
                title: "A Skill You Can Build for Life",
                desc: "Successful forex trading is based on learning market analysis, risk management, and trading discipline. These skills improve with experience and can provide long-term value throughout your trading journey.",
              },
              {
                title: "Trade Global Markets From Anywhere",
                desc: "Forex trading gives you direct access to the world's largest financial market from your phone or laptop. You can participate in global currency movements without leaving your home.",
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

                  <h4 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                    Ready to See These Reasons in Action Line
                  </h4>

                  <p className="text-lg text-gray-300 leading-8">
                    Join Master Traders today and get access to expert-guided {" "}
                    <span className="text-[--primary-color] font-semibold">
                      forex training
                    </span>{" "}
                    designed for real Indian traders.
                  </p>
                </div>

                <button
                  onClick={() => navigator("/signup")}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[--bg-primary-gradient] border-[--primary-color] border text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Start Learning Forex Now <ArrowBigRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Things You Should Know Before You Start */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#0F0903] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold tracking-wide mb-5">
              Important Information
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
              Things You Should Know{" "}
              <span className="text-[--primary-color]">Before You Start</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-8 mb-6">
                Being honest with you is part of how we build trust. Forex trading carries real risk along with real opportunity. Prices can move quickly, and losses are possible just like profits. This is why proper education, a clear strategy, and disciplined risk management matter so much before you put in real money.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
                At Master Traders, we focus heavily on teaching risk management first, because a trader who protects their capital lasts far longer than one who chases quick profits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Consider Forex Trading */}
      <section className="py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold tracking-wide mb-5">
              Who Can Trade
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
              Who Should Consider{" "}
              <span className="text-[--primary-color]">Forex Trading</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-8 mb-8 text-center">
              Forex trading is not only for finance professionals. It is open to:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Students who want to learn a new financial skill alongside their studies",
                "Working professionals looking for an additional source of income",
                "Business owners who want to understand currency movement for their business",
                "Homemakers and retirees who want to manage their own money confidently",
                "Anyone curious about the financial markets and ready to learn patiently"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-50 dark:bg-[--bg-color1] p-6 rounded-xl border border-gray-200 dark:border-[--primary-color]/20"
                >
                  <div className="w-8 h-8 rounded-full bg-[--bg-primary-gradient] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-8 mt-8 text-center">
              If you fall into any of these groups, the forex trading we shared above likely applies directly to your situation.
            </p>
          </div>
        </div>
      </section>


      {/* Forex Trading Compared to Other Markets */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-[#0F0903] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold tracking-wide mb-5">
              Compare Markets
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
              Forex Trading Compared{" "}
              <span className="text-[--primary-color]">to Other Markets</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-8 mb-6">
                If you are already familiar with stock market investing, forex trading will feel different in a few key ways. The forex market is open almost round the clock, while the stock market runs only during fixed hours. Forex also requires less starting capital compared to many stock trades, and price movements are driven mainly by global economic events rather than individual company performance. This makes forex trading a good option for people who want more flexibility and a market that reacts quickly to world events.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Master Traders */}
      <section className="py-24 pt-12 px-6 bg-gray-50 dark:bg-[#0F0903] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold tracking-wide mb-5">
              Why Master Traders
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
              Why Choose Master Traders{" "}
              <span className="text-[--primary-color]">for Forex Trading</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-8 mb-6">
                There are many platforms offering forex education, so why do traders across India choose Master Traders again and again. It comes down to real experience over textbook theory, honest teaching instead of guaranteed profit promises, and content that is built step by step so beginners are never left confused. You also get a community of mentors and fellow learners who are there to answer your questions and keep you updated as the market moves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Forex Trading with Master Traders */}
      <section className="py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold tracking-wide mb-5">
              Getting Started
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
              How to Start Forex Trading{" "}
              <span className="text-[--primary-color]">with Master Traders</span>
            </h2>

            <div className="w-24 h-1 bg-[--bg-primary-gradient] rounded-full mx-auto my-6" />

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Getting started is simpler than most beginners expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "Step 1",
                title: "Learn the Basics",
                desc: "Begin with our beginner-friendly lessons that explain currency pairs, market hours, and how prices move, all in plain language."
              },
              {
                step: "Step 2",
                title: "Practice on a Demo Account",
                desc: "Before risking real money, practice your strategy on a demo account. This helps you get comfortable with the platform and test your decisions without any financial risk."
              },
              {
                step: "Step 3",
                title: "Build a Simple Strategy",
                desc: "With guidance from our mentors, put together a basic trading plan that includes your entry points, exit points, and how much you are willing to risk on each trade."
              },
              {
                step: "Step 4",
                title: "Start Trading With Real Capital",
                desc: "Once you feel confident, start trading with a small amount of real capital. Grow gradually as your experience and confidence increase."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-[--bg-color1] rounded-2xl p-8 border border-gray-200 dark:border-[--primary-color]/20 hover:border-[--primary-color] transition-all duration-300"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-4">
                  {item.step}
                </span>

                <h3 className="text-2xl font-bold text-[--bg-color1] dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
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
              Top Perks of Forex Trading with <br />
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

      {/* Frequently Asked Questions */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before you start trading forex with Master Traders."
        faqs={faqs}
      />

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-white dark:bg-[--bg-color1] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[--bg-color1] border border-[--primary-color]/30 p-10 lg:p-16">
            <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />

            <div className="relative flex flex-col items-center text-center">
              <span className="inline-flex px-4 py-2 rounded-full bg-[--primary-color]/15 text-[--primary-color] text-sm font-semibold mb-6">
                Start Today
              </span>

              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Your Forex Trading Journey Starts Here
              </h2>

              <p className="text-lg text-gray-300 leading-8 mb-10 max-w-2xl">
                Get step-by-step guidance, expert insights, and a community that grows with you at Master Traders.
              </p>

              <button
                onClick={() => navigator("/signup")}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[--bg-primary-gradient] border-[--primary-color] border text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg text-lg"
              >
                Get Started With Master Traders <ArrowBigRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Forex;
