import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import { Helmet } from "react-helmet-async";

const knowledgeList = [
  "Trading",
  "Equity Trading",
  "Future & Options",
  "Commodity Trading",
  "Margin Trading",
  "Intraday Trading",
];

// Function to generate URL-safe slug
const toSlug = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, "")
    .replace(/\s+/g, "-");

function Knowledge() {
  return (
    <div className="bg-white dark:bg-[var(--bg-color1)] text-black dark:text-white">
      <Helmet>
        {/* Primary SEO */}
        <title>Trade Smarter with Expert Guidance | Master Traders</title>

        <meta
          name="title"
          content="Trade Smarter with Expert Guidance | Master Traders"
        />

        <meta
          name="description"
          content="Learn equity, futures & margin trading from Master Traders. Open a free demo account today."
        />

        <meta
          name="keywords"
          content="trading knowledge center, equity trading, futures trading, options trading, commodity trading, margin trading, intraday trading, trading education, stock market trading, Master Traders"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.mastertrader.co.in/knowledge" />

        {/* Robots */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Trade Smarter with Expert Guidance | Master Traders"
        />

        <meta
          property="og:description"
          content="Learn equity, futures & margin trading from Master Traders. Open a free demo account today."
        />

        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/knowledge"
        />

        <meta
          property="og:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Master Traders" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Trade Smarter with Expert Guidance | Master Traders"
        />

        <meta
          name="twitter:description"
          content="Learn equity, futures & margin trading from Master Traders. Open a free demo account today."
        />

        <meta
          name="twitter:image"
          content="https://www.mastertrader.co.in/MT-logo.png"
        />
      </Helmet>

      <div className="mb-14">
        <Navbar />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-10">
          Knowledge Center
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {knowledgeList.map((knowledge) => {
            const slug = toSlug(knowledge);

            return (
              <a
                key={knowledge}
                href={`/knowledge/${slug}`}
                className="block border p-6 rounded-lg shadow-md hover:shadow-xl transition bg-white dark:bg-[var(--bg-color1)] hover:bg-[var(--primary-color)] hover:text-white text-center"
              >
                <h2 className="text-xl font-semibold">{knowledge}</h2>
              </a>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Knowledge;
