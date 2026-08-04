import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Fuse from "fuse.js";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

// const baseURL = "https://cft-backend.onrender.com";
const baseURL = import.meta.env.VITE_API_BASE_URL;

console.log(baseURL);

type BlogPost = {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  slug: string;
  tags: string[];
};

const Blog2 = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const postsPerPage = 9;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageFromURL = parseInt(params.get("page") || "1");
    setCurrentPage(pageFromURL);
    fetchBlogPosts();
  }, [location.search]);

  // const fetchBlogPosts = async () => {
  //   try {
  //     const response = await axios.get(`${baseURL}/api/blogs/viewblog`);
  //     setBlogPosts(response.data);
  //     setLoading(false);
  //   } catch (err) {
  //     setError("Failed to fetch blog posts");
  //     setLoading(false);
  //   }
  // };

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/blogs/viewblog`);
      // console.log("API Response:", response.data);

      // ✅ SAFETY: always ensure array
      const posts = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];

      setBlogPosts(posts);
      setLoading(false);
    } catch (err) {
      // console.error("Error fetching blog posts:", err);
      setError("Failed to fetch blog posts");
      setLoading(false);
    }
  };

  console.log(blogPosts);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`?page=${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePostClick = (slug: string) => {
    navigate(`/blogs/${slug}`);
  };

  // Fuzzy search using Fuse.js
  // const fuse = new Fuse(blogPosts, {
  //   keys: ["title", "excerpt"],
  //   threshold: 0.4,
  // });

  const fuse = new Fuse(blogPosts ?? [], {
    keys: ["title", "excerpt"],
    threshold: 0.4,
  });

  const searchResults = searchTerm
    ? fuse.search(searchTerm).map((res) => res.item)
    : blogPosts;

  const filteredPosts = searchResults.filter((post) => {
    const matchesDate = selectedDate
      ? post.datePublished?.startsWith(selectedDate)
      : true;
    return matchesDate;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
    <div className="min-h-screen bg-white dark:bg-[var(--bg-color1)] text-black dark:text-white transition-colors">
      <Helmet>
        <title>Stock Market Blogs | Master Trader</title>
        <meta
          name="description"
          content="Read expert-written blogs from Master Trader - trading tips, intraday strategies, market updates, and everything you need to master the markets."
        />
        <link rel="canonical" href="https://www.mastertrader.co.in/blogs" />
      </Helmet>

      <Navbar />

      <main className="py-16 px-4 sm:px-6 lg:px-8 mt-12">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Latest{" "}
            <span className="text-[var(--primary-color)] italic">
              Blog Updates
            </span>
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-gray-500 dark:text-gray-300">
            Stay informed with the latest updates in trading, markets, and the
            economy.
          </p>
        </div>

        {/* Search & Filter Inputs */}
        <div className="max-w-4xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search by title or content"
            value={searchTerm}
            disabled={loading || Boolean(error)}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-[65%] p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white disabled:opacity-50"
          />

          <input
            type="date"
            value={selectedDate}
            disabled={loading || Boolean(error)}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full md:w-[30%] p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white disabled:opacity-50"
          />
        </div>

        {/* Dynamic Content: Loading vs Error vs Grid */}
        {loading ? (
          <BlogGridSkeleton />
        ) : error ? (
          <BlogErrorState error={error} onRetry={fetchBlogPosts} />
        ) : (
          <>
            {/* Blog Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {currentPosts.length === 0 ? (
                <div className="text-center py-12 col-span-full">
                  <p className="text-lg text-gray-500 dark:text-gray-300">
                    No blogs match your search or filter.
                  </p>
                </div>
              ) : (
                currentPosts.map((post) => (
                  <a
                    key={post._id}
                    href={`/blogs/${post.slug}`}
                    className="cursor-pointer relative rounded-lg p-[1.5px] hover:shadow-[0_0_15px_var(--primary-color)] transition-shadow duration-300"
                    style={{
                      background:
                        "linear-gradient(to bottom, #111, var(--primary-color))",
                    }}
                    onClick={() => handlePostClick?.(post.slug)}
                  >
                    <div className="bg-white dark:bg-black rounded-lg h-[450px] flex flex-col overflow-hidden text-left">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-[240px] object-cover rounded-t-lg"
                      />
                      <div className="p-6 flex flex-col flex-grow justify-between">
                        <div>
                          <h3 className="text-base font-semibold text-black dark:text-white leading-snug mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                          By {post.author} •{" "}
                          {new Date(post.datePublished).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-10 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(
                    (page) =>
                      page <= 2 ||
                      page > totalPages - 2 ||
                      Math.abs(currentPage - page) <= 1
                  )
                  .reduce((acc, page, i, arr) => {
                    if (
                      i > 0 &&
                      typeof arr[i - 1] === "number" &&
                      (page as number) - (arr[i - 1] as number) > 1
                    ) {
                      acc.push("...");
                    }
                    acc.push(page);
                    return acc;
                  }, [] as (number | string)[])
                  .map((item, idx) =>
                    item === "..." ? (
                      <span
                        key={`ellipsis-${idx}`}
                        className="px-2 py-2 text-gray-500"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={item}
                        onClick={() => handlePageChange(item as number)}
                        className={`px-4 py-2 rounded font-medium transition ${
                          currentPage === item
                            ? "bg-[var(--primary-color)] text-white"
                            : "bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}
              </div>
            )}
          </>
        )}

        {/* Support CTA */}
        <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white dark:bg-[var(--bg-color1)] rounded-xl py-8 px-6 shadow-lg border border-gray-100 dark:border-gray-800">
            <h3 className="text-3xl font-bold mb-4">Let’s Connect Today</h3>
            <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Want a walkthrough? Need help? Or just curious? We’re just a click
              or call away—reach out now and experience the difference of Close
              Friends Traders.
            </p>
            <a
              href="tel:+918368284948"
              className="inline-block px-8 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-full hover:shadow-[0_0_15px_var(--primary-color)] transition duration-300"
            >
              Talk to Support
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  )
};


// --- Skeleton Component for Seamless Loading UX ---
function BlogGridSkeleton() {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-pulse">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="rounded-lg bg-gray-200 dark:bg-gray-800 h-[450px] flex flex-col overflow-hidden"
        >
          <div className="w-full h-[240px] bg-gray-300 dark:bg-gray-700" />
          <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />
            </div>
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Friendly Error State Component ---
function BlogErrorState({ error, onRetry }: { error: string; onRetry?: () => void }) {
  return (
    <div className="mt-12 max-w-xl mx-auto text-center p-8 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
      <div className="w-12 h-12 mx-auto mb-4 text-red-500 dark:text-red-400">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
        Unable to load blog posts
      </h3>
      <p className="text-sm text-red-600 dark:text-red-300 mb-6">
        {typeof error === "string" ? error : "An unexpected error occurred."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition duration-200 text-sm"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default Blog2;
