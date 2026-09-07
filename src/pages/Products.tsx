import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";

const productList = ["Stocks", "Commodity", "Indexes", "Forex", "Comex"];

function Products() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Trade Stocks, Forex & Commodities | Master Traders</title>

        <meta
          name="description"
          content="Trade stocks, forex, commodities & more with Master Traders. Open a free account and start trading today."
        />

        <meta
          name="keywords"
          content="trade stocks, forex trading, commodity trading, index trading, comex trading, stock market, Master Traders"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.mastertrader.co.in/products" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Trade Stocks, Forex & Commodities | Master Traders"
        />

        <meta
          property="og:description"
          content="Trade stocks, forex, commodities & more with Master Traders. Open a free account and start trading today."
        />

        <meta
          property="og:url"
          content="https://www.mastertrader.co.in/products"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Master Traders" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Trade Stocks, Forex & Commodities | Master Traders"
        />

        <meta
          name="twitter:description"
          content="Trade stocks, forex, commodities & more with Master Traders. Open a free account and start trading today."
        />
      </Helmet>

      <div className="bg-white dark:bg-[var(--bg-color1)] text-black dark:text-white">
        <div className="mb-14">
          <Navbar />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productList.map((product) => (
              <a
                key={product}
                href={`/products/${product.toLowerCase()}`}
                className="block border p-6 rounded-lg shadow-md hover:shadow-xl transition bg-white dark:bg-[var(--bg-color1)] hover:bg-[var(--primary-color)] hover:text-white text-center"
              >
                <h2 className="text-xl font-semibold">{product}</h2>
              </a>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Products;
