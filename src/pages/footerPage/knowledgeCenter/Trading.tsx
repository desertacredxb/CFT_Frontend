import {
  BarChart3, // More modern than LineChart
  BadgeIndianRupee, // Financial symbol for brokerage & AMC
  Scaling, // Better icon for "Leverage"
  Banknote, // Instant settlement depiction
  // Clean icon for 24/7 timing
} from "lucide-react";
import PageBanner from "../../../components/BannerImage";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Nav";
import cfdImage from "../../../assets/Trading e.png";
import { Helmet } from "react-helmet-async";
import {
  ArrowBigRight,
  BookOpen,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import FaqSection, { FaqItem } from "../../../components/FaqSection";
import { useNavigate } from "react-router-dom";

const faqs: FaqItem[] = [
  {
    question: "What is trading and how does it work?",
    answer:
      "Trading is the process of buying and selling financial products like stocks, commodities, or currencies with the aim of making a profit from price changes. You study the market, decide whether a price will rise or fall, and then buy or sell based on that decision at the right time.",
  },
  {
    question: "Is online trading safe?",
    answer:
      "Online trading can be reasonably safe if you use a trusted and regulated platform, protect your account details, and follow proper risk management. However, no trading is completely free of risk, so it is important to only trade with money you can afford to put at risk.",
  },
  {
    question: "How do I start trading?",
    answer:
      "You can start by creating an account on a trusted platform, completing your identity verification, adding funds, and learning the basics before placing your first trade. Starting small and learning as you go is the safest approach for beginners.",
  },
  {
    question: "Is trading a good career?",
    answer:
      "Trading can be a good career for people who are willing to learn continuously, manage risk carefully, and stay patient through both good and bad periods. Like any career, it takes time, practice, and steady effort to become consistently successful.",
  },
  {
    question: "Do I need a large amount of money to start trading?",
    answer:
      "No, many platforms allow you to start with a small amount of money. It is often better to start small, learn from real experience, and gradually increase your investment as your confidence and knowledge grow.",
  },
  {
    question: "How much time does trading require every day?",
    answer:
      "This depends on your trading style. Intraday trading usually needs active attention during market hours, while long term equity trading requires much less daily time and more periodic review.",
  },
];

function Trading() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <BarChart3 className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Zero Commission",
      description:
        "Keep more of your profits with no commission on key instruments.",
    },
    {
      icon: (
        <BadgeIndianRupee className="text-[var(--primary-color)] w-8 h-8" />
      ),
      title: "No Hidden or Annual Maintenance Charges",
      description: "Transparent pricing with zero surprises.",
    },
    {
      icon: <Scaling className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Leverage Up to 500x for Maximum Market Exposure",
      description:
        "Amplify your trading power while managing risk effectively.",
    },
    {
      icon: <Banknote className="text-[var(--primary-color)] w-8 h-8" />,
      title: "Instant Account Settlement and Fund Transfers",
      description: "Experience lightning-fast processing for smooth trading.",
    },
  ];

  const onSignup = () => {
    navigate("/signup")
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Trading 101: Learn to Trade Smart | Master Traders</title>
        <meta
          name="title"
          content="Trading 101: Learn to Trade Smart | Master Traders"
        />
        <meta
          name="description"
          content="Start trading stocks, commodities & more with expert-led guidance from Master Traders. Simple lessons, real strategies, and step-by-step support for beginners."
        />
        <meta
          name="keywords"
          content="trading for beginners, online trading India, how to start trading, learn trading, stock market trading, trading platform India, types of trading, intraday trading, commodity trading, trading course"
        />

        <link
          rel="canonical"
          href="https://www.mastertrader.co.in/knowledge/trading"
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
        title="Trading Made Simple: The Reasons Millions Are Getting Started"
        subtitle="Trading has become one of the most talked-about ways to grow money, build skills, and take control of your financial future. Every day, more people search for real trading before they decide to put their money into any market. This page is written to give you a complete and honest picture of trading, so you can understand why people choose it, how it works, and how you can start your own journey with Master Traders.
We have written this content in simple language so anyone, even someone with zero background in finance, can read it and understand every part clearly. No confusing terms, no shortcuts, just clear information that helps you make better decisions.
"
      />

      


      <section className="bg-white px-6 py-24 dark:bg-[--bg-color1]">
        <div className="mx-auto max-w-5xl">
          <SectionTitle title={<>What is <span className="text-[--primary-color]">Trading?</span></>} />
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            Trading means buying and selling things like stocks, commodities,
            currencies, or other financial products to make a profit. When you
            trade, you are trying to guess whether the price of something will
            go up or down, and then you buy or sell based on that guess.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
            People trade for many different reasons. Some want to grow their
            savings faster than a bank account allows. Others enjoy the
            challenge of studying markets and making smart decisions. Whatever
            the goal, understanding the basic trading is the first step toward
            doing it the right way.
          </p>
        </div>
      </section>

      <CardSection
        title={<>Top Reasons for <span className="text-[--primary-color]">Trading?</span></>}
        intro="There are many reasons for trading, and no two traders have exactly the same motivation. Below are some of the most common reasons for trading that we hear from our community at Master Traders."
        items={reasons}
        numbered
      />
      <WideCta
        headingTag="h4"
        title="Curious Why So Many People Are Trading Today?"
        text="Learn real trading with simple, easy-to-follow guides made for beginners."
        button="Learn the Basics"
        onClick={onSignup}
      />

      <section className="bg-white px-6 py-24 dark:bg-[--bg-color1]">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={<>Different Types of <span className="text-[--primary-color]">Trading</span> You Can Try</>} />
          <p className="mx-auto mb-12 max-w-4xl text-center text-lg leading-8 text-gray-700 dark:text-gray-300">
            Understanding the different types of trading helps you choose a
            style that matches your goals, time, and comfort with risk. Below
            are the main types of trading you can explore with Master Traders.
          </p>
          <div className="grid gap-7 md:grid-cols-2">
            {tradingTypes.map(([title, href, text]) => (
              <a
                key={title}
                href={href}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-md transition hover:-translate-y-1 hover:border-[--primary-color] dark:border-[--primary-color]/20 dark:bg-[#1B1207]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[--bg-color1] dark:text-white">
                    {title}
                  </h3>
                  <ChevronRight className="text-[--primary-color] transition group-hover:translate-x-1" />
                </div>
                <p className="leading-7 text-gray-600 dark:text-gray-400">
                  {text}
                </p>
              </a>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-5xl text-lg leading-8 text-gray-700 dark:text-gray-300">
            Each of these paths offers different reasons for trading, depending
            on your goals, the time you can dedicate, and how much risk you are
            comfortable taking. You can explore each guide in detail to decide
            which style fits you best.
          </p>
        </div>
      </section>

      <CardSection
        title={<>Benefits of Trading With <span className="text-[--primary-color]"> Master Traders</span></>}
        intro="While trading can be personal, the benefits of trading with the right platform are something everyone should look for."
        items={benefits}
      />

      <section className="bg-white px-6 py-24 dark:bg-[--bg-color1]">
        <div className="mx-auto max-w-5xl text-center">
          <ShieldCheck className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-[--bg-primary-gradient] p-4 text-white" />
          <SectionTitle title="Risks You Should Understand Before You Start" />
          <div className="space-y-6 text-left text-lg leading-8 text-gray-700 dark:text-gray-300">
            <p>
              Being honest about risk is just as important as talking about
              trading. Trading is not free of risk, and no platform or guide can
              promise guaranteed profits. Prices can move against your
              expectations, and it is possible to lose money, sometimes quickly,
              especially in short-term trading styles.
            </p>
            <p>
              This is why Master Traders always encourages new traders to start
              small, use only money they can afford to risk, and take time to
              learn before increasing their trade size. Managing risk properly
              is one of the most important habits that separates long-term
              traders from those who quit early.
            </p>
            <p>
              Some simple ways to manage risk include setting a maximum loss
              limit for each trade, avoiding trades based on emotions, and never
              borrowing money to trade. These habits will not remove risk
              completely, but they help you trade more responsibly.
            </p>
          </div>
        </div>
      </section>
      <WideCta
        title="Understand the Risks Before You Begin"
        text="Learn how to trade responsibly with guides built around safety and awareness."
        button="Read Our Safety Guides"
        onClick={onSignup}
      />

      <CardSection
        title="Tools and Resources That Help New Traders"
        intro="Good tools make learning easier and decisions clearer. Here are some resources that are useful for anyone exploring trading before making their first move."
        items={resources}
      />
      <CardSection
        title="Common Mistakes Beginners Should Avoid"
        intro="Many new traders make the same early mistakes. Knowing them in advance can save time, money, and stress."
        items={mistakes}
        light
      />

      <section className="bg-gray-50 px-6 py-24 dark:bg-[#0F0903]">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={<>How to Start Trading With <span className="text-[--primary-color]"> Master Traders</span></>} />
          <p className="mb-12 -mt-2 text-center text-lg text-gray-600 dark:text-gray-400">
            Getting started is easier than most people think. Here are the basic
            steps.
          </p>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {startSteps.map(([title, text], i) => (
              <article
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-7 dark:border-[--primary-color]/20 dark:bg-[--bg-color1]"
              >
                {/* <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[--bg-primary-gradient] font-bold text-white">
                  {i + 1}
                </span> */}
                <h3 className="mb-3 text-xl font-bold text-[--bg-color1] dark:text-white">
                  {title}
                </h3>
                <p className="leading-7 text-gray-600 dark:text-gray-400">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 dark:bg-[--bg-color1]">
        <div className="mx-auto max-w-5xl">
          <SectionTitle title={<>Who Should Consider <span className="text-[--primary-color]">Trading?</span></>} />
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            Trading is not only for finance experts. Students who want to learn
            a new skill, working professionals who want a second stream of
            income, and retirees who want their savings to work harder can all
            explore trading, as long as they take time to learn and manage risk
            carefully.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
            That said, trading is not suitable for people who cannot afford to
            lose money or who are looking for guaranteed quick income.
            Understanding this difference early helps set the right expectations
            from the very beginning.
          </p>
        </div>
      </section>
      <CardSection
        title={<>Why People Trust <span className="text-[--primary-color]">Master Traders</span></>}
        intro="We understand that trust matters when it comes to your money. That is why Master Traders is built on a few simple principles."
        items={trustPoints}
      />
      <section className="relative overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-[--bg-color1]">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[--primary-color]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <img
            src={cfdImage}
            alt="CFD Illustration"
            className="mx-auto w-full max-w-md drop-shadow-2xl"
          />

          <div>
            <span className="mb-5 inline-flex rounded-full bg-[--primary-color]/15 px-4 py-2 text-sm font-semibold tracking-wide text-[--primary-color]">
              Trading Benefits
            </span>
            <h2 className="text-4xl font-bold leading-tight text-[--bg-color1] dark:text-white lg:text-5xl">
              Top Perks of Trading with{" "}
              <span className="text-[--primary-color]">Master Trader</span>
            </h2>
            <div className="my-7 h-1 w-24 rounded-full bg-[--bg-primary-gradient]" />

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[--primary-color] hover:shadow-lg dark:border-[--primary-color]/20 dark:bg-[#1B1207]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[--primary-color]/10">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[--bg-color1] dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="leading-7 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
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
      <WideCta
        headingTag="h2"
        title="Your Trading Journey Starts Here"
        text="Master Traders is here to guide you with simple, honest, and reliable information at every step of your journey."
        button="Join Master Traders Today"
        onClick={onSignup}
      />

      <Footer />
    </div>
  );
}

const reasons = [
  [
    "Chance to Grow Your Money Faster",
    "One of the biggest reasons for trading is the opportunity to grow money faster than a regular savings account. Markets move every day, and traders try to use these price changes to build extra income over time.",
  ],
  [
    "Flexibility and Freedom",
    "Trading can be done from a phone, tablet, or laptop, almost anywhere and at almost any time, depending on market hours. This flexibility is a major reason for trading among students, working professionals, and people who want more control over their schedule.",
  ],
  [
    "Learning a Valuable Life Skill",
    "Trading teaches discipline, patience, and the ability to make decisions under pressure. These are skills that help in daily life as well, which makes it one of the more overlooked benefits of trading that experienced traders often mention.",
  ],
  [
    "Access to Many Markets in One Place",
    "With a single trading account, you can explore shares, commodities, and other instruments. This wide access is another strong reason for trading that beginners appreciate, since they do not need multiple accounts to explore different markets.",
  ],
  [
    "Building Long-Term Wealth",
    "Some people trade to slowly build wealth over the years, while others prefer quicker short-term results. Either way, having a clear plan is one of the smartest trading strategies that consistently successful traders talk about.",
  ],
  [
    "Independence From a Single Income Source",
    "Many people look for trading because they want a second source of income that does not depend on a single job or business. Trading offers that possibility, though it requires learning and patience.",
  ],
  [
    "Understanding the Economy Better",
    "Trading pushes you to follow news, company results, and global events closely. Over time, this becomes one of the more educational aspects of trading, as it helps you understand how the economy actually works.",
  ],
  [
    "Testing Your Own Strategy and Judgment",
    "Some traders enjoy the challenge of building a strategy, testing it, and improving it. This intellectual challenge is one of the more personal aspects of trading that keeps many people engaged for years.",
  ],
  [
    "Low Starting Requirements",
    "Compared to many traditional businesses, trading does not require large amounts of starting capital. This accessibility is one of the practical aspects of trading that attracts younger and first-time traders.",
  ],
  [
    "Being Part of a Larger Community",
    "Trading communities share ideas, strategies, and market updates. Being part of this kind of community is a reason for trading that many people value just as much as the financial side.",
  ],
];

const tradingTypes = [
  [
    "Equity Trading",
    "/knowledge/equity-trading",
    "This involves buying and holding shares of listed companies for a period of time, from a few days to several years. Many people choose this as one of the more stable trading strategies, since it focuses on long-term growth of a business. You can read our detailed guide on Equity Trading to understand how it works in depth.",
  ],
  [
    "Future & Options",
    "/knowledge/future-options",
    "This involves derivative contracts that get their value from an underlying asset such as a stock or an index. Futures and options let traders take a position on price movement without owning the actual asset, and are often used for both trading opportunities and hedging risk. Learn more in our Futures & Options guide.",
  ],
  [
    "Commodity Trading",
    "/knowledge/commodity-trading",
    "This involves trading things like gold, silver, crude oil, natural gas, and agricultural products. Commodity prices often move differently from stock prices, which is why many traders use this segment to diversify their overall approach. Explore our Commodity Trading guide for more details.",
  ],
  [
    "Margin Trading",
    "/knowledge/margin-trading",
    "This allows a trader to use borrowed funds to increase their buying power and take larger positions than their available balance. It can increase potential profit, but it also increases risk, so it should only be used once a trader fully understands how it works. Read our Margin Trading guide before you begin.",
  ],
  [
    "Intraday Trading",
    "/knowledge/intraday-trading",
    "This means buying and selling within the same trading day, without holding any position overnight. It suits people who enjoy fast decisions and prefer to close their trades before the market ends for the day. Check our Intraday Trading guide to learn the basics.",
  ],
];

const benefits = [
  [
    "Simple and Clear Learning Material",
    "We break down every topic into plain language, so beginners are never left confused by technical terms.",
  ],
  [
    "Wide Market Access",
    "You get access to multiple markets through one account, so you can explore different opportunities without extra paperwork.",
  ],
  [
    "Focus on Safety and Awareness",
    "We always highlight risks alongside opportunities, because we believe informed traders make better decisions than excited ones.",
  ],
  [
    "Support at Every Step",
    "From your first login to your first trade, our resources are designed to guide you patiently, without pressuring you into quick decisions.",
  ],
];

const resources = [
  [
    "Price Charts",
    "Charts show how prices have moved over time and help traders spot patterns.",
  ],
  [
    "Market News",
    "Daily updates on companies, economies, and global events help traders understand what might affect prices.",
  ],
  [
    "Demo or Practice Accounts",
    "Some platforms allow you to practice trading with virtual money before using real funds, which is a safe way to learn.",
  ],
  [
    "Educational Guides",
    "Simple articles and guides, like the ones on this page, help beginners understand terms and strategies without feeling overwhelmed.",
  ],
];

const mistakes = [
  [
    "Trading Without a Plan",
    "Jumping into trades without any strategy often leads to random decisions instead of informed ones.",
  ],
  [
    "Ignoring Risk Management",
    "Skipping stop losses or risking too much money on one trade is one of the fastest ways to lose confidence and capital.",
  ],
  [
    "Letting Emotions Take Over",
    "Fear and excitement can push traders into decisions they would not normally make with a calm mind.",
  ],
  [
    "Expecting Quick Results",
    "Trading is often described using some of the excitement for trading, like fast profits, but real skill and consistency usually take time to build.",
  ],
];

const startSteps = [
  [
    "Step 1: Create Your Account",
    "Sign up on our platform and complete your basic details.",
  ],
  [
    "Step 2: Complete Verification",
    "Finish your identity check so your account stays safe and secure.",
  ],
  [
    "Step 3: Add Funds",
    "Add money to your trading account using a secure payment method.",
  ],
  [
    "Step 4: Choose Your Market",
    "Pick the market you want to trade in, such as shares or commodities.",
  ],
  [
    "Step 5: Learn Before You Trade",
    "Use our guides and tools to understand price charts and market trends before risking real money.",
  ],
  [
    "Step 6: Place Your First Trade",
    "Start small, track your results, and slowly build your confidence and knowledge over time.",
  ],
  [
    "Step 7: Review and Improve",
    "After every trade, take a moment to understand what worked and what did not, so you keep improving.",
  ],
];

const trustPoints = [
  [
    "Real Experience",
    "Our content is written by people who follow markets closely and understand how trading actually works in practice, not just in theory.",
  ],
  [
    "Clear and Honest Information",
    "We never promise guaranteed profits, because no one can honestly guarantee that in trading. Instead, we focus on facts, so you can form your own understanding of the trading that matters most to you.",
  ],
  [
    "Safety First Approach",
    "We always encourage traders to learn risk management before jumping into any market, because protecting your capital is just as important as growing it.",
  ],
  [
    "Continuous Learning Culture",
    "Markets keep changing, and so does our content. We regularly update our guides so traders always have access to relevant and accurate information.",
  ],
];


function SectionTitle({ title }: { title:React.ReactNode| string }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-[--bg-color1] dark:text-white leading-tight">
        {title}
      </h2>
    </div>
  );
}

function CardSection({
  title,
  intro,
  items,
  numbered = false,
  light = false,
}: {
  title: string | React.ReactNode;
  intro: string;
  items: string[][];
  numbered?: boolean;
  light?: boolean;
}) {
  return (
    <section
      className={`${light ? "bg-white dark:bg-[--bg-color1]" : "bg-gray-50 dark:bg-[#0F0903]"} px-6 py-24`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={title} />
        <p className="mx-auto mb-12 max-w-4xl text-center text-lg leading-8 text-gray-600 dark:text-gray-400">
          {intro}
        </p>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([itemTitle, text], i) => (
            <article
              key={itemTitle}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:border-[--primary-color] dark:border-[--primary-color]/20 dark:bg-[--bg-color1]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[--bg-primary-gradient] font-bold text-white">
                {numbered ? i + 1 : <BookOpen />}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[--bg-color1] dark:text-white">
                {itemTitle}
              </h3>
              <p className="leading-7 text-gray-600 dark:text-gray-400">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WideCta({
  title,
  text,
  button,
  onClick,
  headingTag = "h3",
}: {
  title: string;
  text: string;
  button: string;
  onClick: () => void;
  headingTag?: "h2" | "h3" | "h4";
}) {
  const Heading = headingTag;
  return (
    <section className="bg-white px-6 py-16 dark:bg-[--bg-color1]">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[--primary-color]/30 bg-[--bg-color1] p-10">
        <div className="absolute inset-0 bg-[--bg-primary-gradient] opacity-10" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <Heading className="mb-4 text-3xl font-bold text-white">
              {title}
            </Heading>
            <p className="text-lg leading-8 text-gray-300">{text}</p>
          </div>
          <button
            onClick={onClick}
            className="inline-flex items-center gap-3 rounded-xl border border-[--primary-color] bg-[--bg-primary-gradient] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            {button}
            <ArrowBigRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Trading;
