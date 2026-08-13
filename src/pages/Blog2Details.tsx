import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
// import { Share2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const baseURL = import.meta.env.VITE_API_BASE_URL;

interface BlogType {
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  content: string;
  slug: string;
  schemaMarkup?: string[]; // support array of JSON-LD strings
}

const Blog2Details = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogType[]>([]);
  const [error, setError] = useState("");
  // const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/blogs/viewblog`);
        const blogList: BlogType[] = res.data;
        console.log(blogList);
        const found = blogList.find((b) => b.slug === slug);

        if (!found) {
          setError("Blog not found");
        } else {
          setBlog(found);

          // Get 4 related blogs excluding current
          const related = blogList
            .filter((b) => b.slug !== slug)
            .sort(() => 0.5 - Math.random()) // shuffle
            .slice(0, 4); // take 4

          setRelatedBlogs(related);
        }
      } catch (err) {
        setError("Blog not found");
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  // const handleShare = async () => {
  //   const url = window.location.href;

  //   if (typeof navigator.share === "function") {
  //     try {
  //       await navigator.share({
  //         title: blog?.title,
  //         text: "Check out this blog from Master Trader!",
  //         url,
  //       });
  //     } catch (error) {
  //       console.error("Sharing failed:", error);
  //     }
  //   } else {
  //     try {
  //       await navigator.clipboard.writeText(url);
  //       setCopied(true);
  //       setTimeout(() => setCopied(false), 2000);
  //     } catch (error) {
  //       console.error("Copy failed:", error);
  //     }
  //   }
  // };

  if (error)
    return <div className="pt-40 text-center text-red-600">{error}</div>;
  if (!blog)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="w-12 h-12 border-4 border-white border-t-[var(--primary-color)] rounded-full animate-spin"></div>
        <p className="text-white mt-4">Loading....</p>
      </div>
    );
  return (
    <div className="bg-white text-black dark:bg-[var(--bg-color1)] dark:text-white">
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.excerpt} />
        <link
          rel="canonical"
          href={`https://www.mastertrader.co.in/blogs/${blog.slug}`}
        />
      </Helmet>
      {/* ✅ Schema Markup */}
      {Array.isArray(blog.schemaMarkup) &&
        blog.schemaMarkup.map((markup, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: markup }}
          />
        ))}

      <Navbar />
      <div className="p-8 max-w-7xl mx-auto pt-28">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          By {blog.author} - {new Date(blog.datePublished).toLocaleDateString()}
        </p>

        <img
          src={blog.coverImage}
          className="mb-4 w-full rounded"
          alt={blog.title}
        />

        <div
          className="blog-prose prose prose-lg dark:prose-invert max-w-none mb-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <style>{`
  /* ===================================================
     1. THEME VARIABLES (Default: Light Mode)
     =================================================== */
  :root {
    --prose-text: #1e293b;
    --prose-heading: #0f172a;
    --prose-link: #4f46e5;
    --prose-quote-border: #6366f1;
    --prose-quote-text: #475569;
    --prose-code-bg: #f1f5f9;
    --prose-code-text: #0f172a;
    --prose-border: #e2e8f0;
    --prose-table-th-bg: #f8fafc;
    --prose-placeholder: #94a3b8;
  }

  /* Dark Theme Trigger via class on <body>, <html>, or wrapper */
  .dark, [data-theme="dark"] {
    --prose-text: #e2e8f0;
    --prose-heading: #f8fafc;
    --prose-link: #818cf8;
    --prose-quote-border: #818cf8;
    --prose-quote-text: #cbd5e1;
    --prose-code-bg: #1e293b;
    --prose-code-text: #f1f5f9;
    --prose-border: #334155;
    --prose-table-th-bg: #0f172a;
    --prose-placeholder: #64748b;
  }

  /* Optional: Automatic system dark mode preference */
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --prose-text: #e2e8f0;
      --prose-heading: #f8fafc;
      --prose-link: #818cf8;
      --prose-quote-border: #818cf8;
      --prose-quote-text: #cbd5e1;
      --prose-code-bg: #1e293b;
      --prose-code-text: #f1f5f9;
      --prose-border: #334155;
      --prose-table-th-bg: #0f172a;
      --prose-placeholder: #64748b;
    }
  }

  /* ===================================================
     2. PROSE STYLES
     =================================================== */
  .blog-prose { font-size: 0.95rem; line-height: 1.75; color: var(--prose-text); }
  .blog-prose h1 { font-size: 1.75rem; font-weight: 700; margin: 1em 0 0.5em; color: var(--prose-heading); }
  .blog-prose h2 { font-size: 1.4rem; font-weight: 700; margin: 1em 0 0.5em; color: var(--prose-heading); }
  .blog-prose h3 { font-size: 1.15rem; font-weight: 600; margin: 1em 0 0.4em; color: var(--prose-heading); }
  .blog-prose h4 { font-size: 1rem; font-weight: 600; margin: 1em 0 0.4em; color: var(--prose-heading); }
  .blog-prose p { margin: 0.6em 0; }
  .blog-prose ul { list-style: disc; padding-left: 1.4em; margin: 0.6em 0; }
  .blog-prose ol { list-style: decimal; padding-left: 1.4em; margin: 0.6em 0; }
  .blog-prose blockquote { border-left: 3px solid var(--prose-quote-border); padding-left: 1em; color: var(--prose-quote-text); font-style: italic; margin: 0.8em 0; }
  
  /* Code blocks maintain dark styling across both modes for consistency */
  .blog-prose pre { background: #0f172a; color: #6ee7b7; padding: 0.9em 1em; border-radius: 0.5em; overflow-x: auto; font-size: 0.85em; margin: 0.8em 0; }
  
  /* Inline code snippet */
  .blog-prose code { background: var(--prose-code-bg); color: var(--prose-code-text); padding: 0.15em 0.4em; border-radius: 0.3em; font-size: 0.85em; }
  .blog-prose pre code { background: none; padding: 0; color: inherit; }
  
  .blog-prose a { color: var(--prose-link); text-decoration: underline; }
  .blog-prose img { border-radius: 0.6em; max-width: 100%; margin: 0.8em 0; }
  .blog-prose hr { border: none; border-top: 1px solid var(--prose-border); margin: 1.5em 0; }
  .blog-prose table { border-collapse: collapse; width: 100%; margin: 0.8em 0; font-size: 0.9em; }
  .blog-prose th, .blog-prose td { border: 1px solid var(--prose-border); padding: 0.5em 0.7em; }
  .blog-prose th { background: var(--prose-table-th-bg); font-weight: 600; color: var(--prose-heading); }
  
  .blog-prose p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    color: var(--prose-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  /* ===================================================
     3. PASTED CONTENT DARK MODE OVERRIDES
     =================================================== */
  /* Ensures pasted black/dark text and white highlight boxes remain readable in Dark Mode */
  .dark .blog-prose [style*="color: rgb(0, 0, 0)"],
  .dark .blog-prose [style*="color:#000000"],
  .dark .blog-prose [style*="color: #000000"],
  .dark .blog-prose [style*="color: black"],
  .dark .blog-prose [style*="color: rgb(30, 41, 59)"],
  [data-theme="dark"] .blog-prose [style*="color: rgb(0, 0, 0)"],
  [data-theme="dark"] .blog-prose [style*="color:#000000"],
  [data-theme="dark"] .blog-prose [style*="color: #000000"],
  [data-theme="dark"] .blog-prose [style*="color: black"] {
    color: var(--prose-text) !important;
  }

  .dark .blog-prose [style*="background-color: rgb(255, 255, 255)"],
  .dark .blog-prose [style*="background-color: #ffffff"],
  .dark .blog-prose [style*="background-color: white"],
  [data-theme="dark"] .blog-prose [style*="background-color: rgb(255, 255, 255)"],
  [data-theme="dark"] .blog-prose [style*="background-color: #ffffff"] {
    background-color: transparent !important;
  }
`}</style>
        {/* <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 rounded"
        >
          <Share2 size={18} />
          {typeof navigator.share === "function" ? "Share" : "Copy Link"}
        </button>
        {copied && (
          <p className="mt-2 text-green-500">Link copied to clipboard!</p>
        )} */}
      </div>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="max-w-7xl mx-auto px-8 pb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Related Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedBlogs.map((related) => (
              <a
                key={related.slug}
                href={`/blogs/${related.slug}${location.search}`}
                className="block bg-white dark:bg-black rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={related.coverImage}
                  alt={related.title}
                  className="w-full h-[180px] object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold mb-1">
                    {related.title}
                  </h3>
                  <p className="text-xs text-gray-500 italic">
                    By {related.author}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog2Details;
