import {
  ArrowBigRight,
  Globe2,
  Star,
  Timer,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import PageBanner from "../../../components/BannerImage";
import FaqSection, { FaqItem } from "../../../components/FaqSection";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Nav";
import { LucideBarChart2, LucideLineChart } from "lucide-react";
import { LuGlobe, LuHeadphones, LuLayoutDashboard } from "react-icons/lu";
import cfdImage from "../../../assets/forex.png";


const faqs: FaqItem[] = [
  {
    question: "What is COMEX trading?",
    answer:
      "COMEX trading means buying and selling futures contracts for metals like gold, silver, and copper on the Commodity Exchange, which is part of the New York Mercantile Exchange. Traders take positions based on where they expect prices to move, without needing to hold the physical metal.",
  },
  {
    question: "Can I trade in COMEX from India?",
    answer:
      "Yes, comex trading in India is possible through brokers who provide access to global commodity markets. You can trade COMEX contracts from your own trading account without needing to be physically present in the United States.",
  },
  {
    question: "Can I buy gold on COMEX?",
    answer:
      "On COMEX, you mainly trade gold futures contracts rather than buying physical gold directly. These contracts let you take a position on the future price of gold, and most traders use them to speculate on price movement rather than to receive physical delivery.",
  },
  {
    question: "How do I trade on COMEX?",
    answer:
      "To trade on COMEX, you need a broker that offers access to the exchange, along with a trading account and basic knowledge of how futures contracts work. Once your account is set up, you can place trades on gold, silver, copper, and other listed metals based on your market outlook.",
  },
];

const comparisonRows = [
  [
    "Meaning",
    "Broader term covering all raw materials, including metals, energy, and agricultural goods",
    "Specific to trading on the COMEX exchange, part of the New York Mercantile Exchange",
  ],
  [
    "Scope",
    "Wide, includes crude oil, natural gas, cotton, spices, and more",
    "Narrow, focused mainly on metals like gold, silver, and copper",
  ],
  [
    "Exchange",
    "Usually traded through domestic exchanges such as MCX in India",
    "Traded on COMEX, a global exchange based in the United States",
  ],
  [
    "Price Basis",
    "Often reflects local supply and demand",
    "Reflects global metal prices and international market movement",
  ],
  [
    "Common Use in India",
    "Used for trading a wide range of local commodity contracts",
    "Used mainly to track and trade global gold, silver, and copper prices",
  ],
];

const steps = [
  [
    "Step 1: Understand the Basics",
    "Learn how COMEX contracts work, what moves metal prices, and how global sessions affect trading hours.",
  ],
  [
    "Step 2: Choose the Right Broker",
    "Work with a broker that gives you clear access to COMEX prices along with transparent charges, so you know exactly what you are paying for every trade.",
  ],
  [
    "Step 3: Practice Before You Commit Capital",
    "Use a demo account or start with small positions while you get comfortable reading price movements and managing your risk.",
  ],
  [
    "Step 4: Trade with a Plan",
    "Set your entry point, exit point, and risk limit before you place a trade, and stick to that plan rather than reacting emotionally to short-term price swings.",
  ],
];

function Comex() {
  const navigate = useNavigate();
  const goToSignup = () => navigate("/signup");

  const features = [
    {
      icon: <LuGlobe className="text-[var(--primary-color)] text-3xl" />,
      title: "Direct Access to Global Metal Markets",
      description:
        "Trade gold, silver, and other precious metals listed on COMEX in real time.",
    },
    {
      icon: (
        <LucideBarChart2 className="text-[var(--primary-color)] text-3xl" />
      ),
      title: "Transparent Pricing",
      description: "Get the benefit of globally recognized benchmark rates.",
    },
    {
      icon: (
        <LucideLineChart className="text-[var(--primary-color)] text-3xl" />
      ),
      title: "Hedge Against Inflation",
      description:
        "Metals like gold serve as a reliable store of value during market volatility.",
    },
    {
      icon: (
        <LuLayoutDashboard className="text-[var(--primary-color)] text-3xl" />
      ),
      title: "High Liquidity & Tight Spreads",
      description:
        "Execute large-volume trades easily with minimal price difference.",
    },
    {
      icon: <LuHeadphones className="text-[var(--primary-color)] text-3xl" />,
      title: "Expert Support",
      description:
        "Get help from professionals who understand metal markets inside and out.",
    },
  ];


  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[--bg-color1]">
      <Helmet>
        <title>COMEX Trading India | Gold & Silver | Master Traders</title>
        <meta
          name="title"
          content="COMEX Trading India | Gold & Silver | Master Traders"
        />
        <meta
          name="description"
          content="Trade gold, silver & copper on COMEX with expert guidance from Master Traders. Learn global metal trading strategies, practice on demo & start with confidence."
        />
        <meta
          name="keywords"
          content="COMEX trading, COMEX trading India, trade gold on COMEX, COMEX gold silver trading, how to trade COMEX from India, COMEX futures trading, commodity trading platform India, COMEX vs MCX, gold trading online India, learn COMEX trading"
        />
        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/products/comex"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/products/comex"
        />
        <meta
          property="og:title"
          content="COMEX Trading India | Gold & Silver | Master Traders"
        />
        <meta
          property="og:description"
          content="Trade gold, silver & copper on COMEX with expert guidance from Master Traders. Learn global metal trading strategies, practice on demo & start with confidence."
        />
        <meta property="og:site_name" content="Master Traders" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="COMEX Trading India | Gold & Silver | Master Traders"
        />
        <meta
          name="twitter:description"
          content="Trade gold, silver & copper on COMEX with expert guidance from Master Traders. Learn global metal trading strategies, practice on demo & start with confidence."
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
        title="COMEX Trading: Trade Gold, Silver and Metals with Master Traders"
        subtitle="Gold has always held a special place in Indian households, and now you can trade it the same way global investors do. COMEX trading opens the door to one of the world's most active commodity exchanges, letting you take positions on gold, silver, copper, and other metals from wherever you are. At Master Traders, we help you understand comex trading in India from the ground up, so you can approach the market with confidence instead of guesswork."
      />

      <section className="relative overflow-hidden bg-white px-6 py-24 dark:bg-[--bg-color1]">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[--primary-color]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-5 inline-flex rounded-full bg-[--primary-color]/15 px-4 py-2 text-sm font-semibold text-[--primary-color]">
              Learn COMEX Trading
            </span>
            <h2 className="mb-6 text-4xl font-bold text-[--bg-color1] dark:text-white lg:text-5xl">
              What is <span className="text-[--primary-color]">COMEX</span>
            </h2>
            <div className="mb-8 h-1 w-24 rounded-full bg-[--bg-primary-gradient]" />
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
              COMEX stands for Commodity Exchange, and it is part of the New
              York Mercantile Exchange, one of the largest commodity trading
              platforms in the world. It is the place where traders buy and sell
              contracts for metals such as gold, silver, and copper. When people
              talk about comex trading, they usually mean taking a position on
              the future price of these metals rather than physically holding
              the metal itself.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              Because COMEX prices are watched closely across the globe, they
              often influence local gold and silver rates in India too. This
              connection is one of the reasons comex trading in India has grown
              so popular among traders who want early insight into where prices
              might be headed.
            </p>
          </div>
          <div className="rounded-3xl border border-[--primary-color]/30 bg-[--bg-color1] p-10 shadow-2xl">
            <Globe2 className="mb-6 h-16 w-16 rounded-2xl bg-[--bg-primary-gradient] p-4 text-white" />
            <h2 className="mb-5 text-3xl font-bold text-white">
              How COMEX Trading Works
            </h2>
            <p className="leading-7 text-gray-300">
              When you take part in COMEX trading, you are buying or selling a
              futures contract tied to the price of a metal. If the price moves
              in the direction you expected, you can close your position for a
              profit. If it moves against you, you may face a loss. Contracts
              are traded in standard sizes, and prices are updated continuously
              as the market reacts to global demand, currency movements, and
              economic news.
            </p>
            <p className="mt-5 leading-7 text-gray-300">
              Most traders in India access COMEX trading in India through
              brokers who provide a trading terminal connected to global
              commodity prices. This means you do not need to be in New York or
              hold any physical metal to take part. Everything happens through
              your trading account, with prices reflecting the live COMEX
              market.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 dark:bg-[#0F0903]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-[--bg-color1] dark:text-white lg:text-5xl">
              Why Traders Choose{" "}
              <span className="text-[--primary-color]">COMEX</span>
            </h2>
            <div className="mx-auto my-6 h-1 w-24 rounded-full bg-[--bg-primary-gradient]" />
          </div>
          <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-[--primary-color]/20 dark:bg-[--bg-color1] md:p-12">
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
              COMEX trading attracts traders for a few clear reasons. Gold and
              silver are seen as reliable assets that tend to hold value even
              when other markets are uncertain, which makes price movements on
              COMEX worth tracking closely. The market also runs for extended
              hours each day, giving traders more flexibility to plan their
              entries and exits around global sessions rather than a single
              local market window. Because COMEX prices are tied to global
              supply, demand, and currency shifts, there is a steady stream of
              price movement to work with, which many traders find more engaging
              than markets that stay flat for long stretches.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              For Indian traders specifically, COMEX trading in India offers a
              way to track and act on global metal prices without waiting for
              the domestic market to reflect those changes the next day.
            </p>
          </div>
          <Cta
            title="Start Tracking the Global Metals Market"
            text="Get access to live COMEX insights and beginner-friendly lessons with Master Traders."
            button="Explore COMEX Trading"
            onClick={goToSignup}
          />
        </div>
      </section>

      <section className="bg-white px-6 py-24 dark:bg-[--bg-color1]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-[--bg-color1] dark:text-white lg:text-5xl">
              COMEX Trading vs{" "}
              <span className="text-[--primary-color]">Commodity Trading</span>
            </h2>
            <div className="mx-auto my-6 h-1 w-24 rounded-full bg-[--bg-primary-gradient]" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              People often use these terms interchangeably, but there is a clear
              difference between the two.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg dark:border-[--primary-color]/20">
            <table className="w-full min-w-[800px] text-left">
              <thead className="bg-[--bg-color1] text-white">
                <tr>
                  <th className="p-5">Point of Difference</th>
                  <th className="p-5">Commodity Trading</th>
                  <th className="p-5">COMEX Trading</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-[#1B1207]"
                  >
                    {row.map((cell, index) => (
                      <td
                        key={cell}
                        className={`p-5 leading-7 text-gray-700 dark:text-gray-300 ${index === 0 ? "font-semibold text-[--primary-color]" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-10 max-w-5xl text-lg leading-8 text-gray-700 dark:text-gray-300">
            In simple terms, commodity trading is the umbrella, and comex
            trading is one specific path within it, focused on global metal
            prices. Many traders who are active in COMEX trading in India also
            trade on domestic commodity exchanges, using COMEX prices as an
            early signal for where local metal rates might move next.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24 dark:bg-[#0F0903]">
        <div className="relative mx-auto max-w-7xl gap-12 lg:items-center">
          <div>
            <span className="mb-5 inline-flex rounded-full bg-[--primary-color]/15 px-4 py-2 text-sm font-semibold text-[--primary-color]">
              COMEX Trading
            </span>
            <h2 className="mb-4 text-4xl font-bold text-[--bg-color1] dark:text-white lg:text-5xl">
              What You Can Trade on <span className="text-[--primary-color]">COMEX</span>
            </h2>
            <div className="mb-8 h-1 rounded-full bg-[--bg-primary-gradient]" />
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-5xl">
              COMEX offers contracts across several major metals. Gold and silver are the most actively traded, drawing attention from traders across the world, including a large number who focus specifically on COMEX trading in India. Beyond precious metals, copper is also heavily traded on COMEX and is closely watched as an indicator of industrial demand and broader economic activity. Some traders diversify further into other listed metals depending on their strategy and market outlook.

            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 dark:bg-[--bg-color1]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-[--bg-color1] dark:text-white lg:text-5xl">
              Getting Started with{" "}
              <span className="text-[--primary-color]">COMEX Trading</span>
            </h2>
            <div className="mx-auto my-6 h-1 w-24 rounded-full bg-[--bg-primary-gradient]" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Starting COMEX trading does not need to be complicated if you
              follow a clear path.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {steps.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1 hover:border-[--primary-color] dark:border-[--primary-color]/20 dark:bg-[#1B1207]"
              >
                {/* <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[--bg-primary-gradient] font-bold text-white">
                  {index + 1}
                </span> */}
                <h3 className="mb-4 text-2xl font-bold text-[--bg-color1] dark:text-white">
                  {title}
                </h3>
                <p className="leading-7 text-gray-600 dark:text-gray-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <Cta
            title="Learn COMEX Trading the Right Way"
            text="Master Traders offers structured lessons built by people with real market experience, made simple for every beginner."
            button="Start Learning Today"
            onClick={goToSignup}
          />
        </div>
      </section>

      
      <section className="bg-gray-50 px-6 py-24 dark:bg-[#0F0903]">
         <div className="mx-auto max-w-5xl text-center mb-20">
          <Star className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-[--bg-primary-gradient] p-4 text-white" />
          <h2 className="text-4xl font-bold text-[--bg-color1] dark:text-white lg:text-5xl">
            The {" "}
            <span className="text-[--primary-color]">Master Traders </span>Approach
          </h2>
          <div className="mx-auto my-6 h-1 w-24 rounded-full bg-[--bg-primary-gradient]" />
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            We built our COMEX trading resources around one idea: that clear explanations beat complicated jargon every time. Our team has real experience following global metal markets, and we translate that into lessons that make sense even if you have never traded before. Every module is honest about both opportunity and risk, so you always know what you are working with.
          </p>
        </div>
        <div className="mx-auto max-w-5xl text-center">
          <Timer className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-[--bg-primary-gradient] p-4 text-white" />
          <h2 className="text-4xl font-bold text-[--bg-color1] dark:text-white lg:text-5xl">
            Risks You Should{" "}
            <span className="text-[--primary-color]">Know</span>
          </h2>
          <div className="mx-auto my-6 h-1 w-24 rounded-full bg-[--bg-primary-gradient]" />
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            Metal prices can move quickly based on global events, currency
            changes, and shifts in demand. Comex trading carries real risk along
            with real opportunity, and losses are possible just like gains. This
            is why we place so much focus on teaching risk management early,
            since protecting your capital is what allows you to keep trading and
            learning over time.
          </p>
          <Cta
            title="Trade Metals with Confidence"
            text="Join Master Traders and learn how to approach comex trading in India with a clear strategy and proper risk control."
            button="Join Master Traders"
            onClick={goToSignup}
          />
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
              Top Perks of Trading COMEX with <br />
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

      <FaqSection faqs={faqs} title="Frequently Asked Questions" />

      <section className="bg-white px-6 py-24 dark:bg-[--bg-color1]">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[--primary-color]/30 bg-[--bg-color1] p-10 text-center lg:p-16">
          <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />
          <div className="relative">
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-5xl">
              Ready to Explore COMEX Trading
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-300">
              Get expert guidance, simple lessons, and ongoing support built for
              Indian traders at Master Traders.
            </p>
            <ActionButton label="Get Started Now" onClick={goToSignup} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ActionButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-3 rounded-xl border border-[--primary-color] bg-[--bg-primary-gradient] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
    >
      {label}
      <ArrowBigRight />
    </button>
  );
}

function Cta({
  title,
  text,
  button,
  onClick,
}: {
  title: string;
  text: string;
  button: string;
  onClick: () => void;
}) {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-3xl border border-[--primary-color]/30 bg-[--bg-color1] p-9 md:p-12">
      <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />
      <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <h3 className="mb-4 text-3xl font-bold text-white">{title}</h3>
          <p className="text-lg leading-8 text-gray-300">{text}</p>
        </div>
        <ActionButton label={button} onClick={onClick} />
      </div>
    </div>
  );
}

export default Comex;
