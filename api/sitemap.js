const SITE_URL = "https://www.mastertrader.co.in";
const PUBLIC_PAGES = [
  "/", "/about", "/features", "/contact", "/products", "/products/cfd-instrument",
  "/products/stocks", "/products/commodity", "/products/indexes", "/products/forex",
  "/products/comex", "/markets", "/markets/mcx", "/markets/crypto",
  "/markets/us-stocks-indices", "/markets/forex", "/markets/comex", "/markets/nse-f-o",
  "/market-ai", "/knowledge", "/knowledge/trading", "/knowledge/equity-trading",
  "/knowledge/future-options", "/knowledge/commodity-trading", "/knowledge/margin-trading",
  "/knowledge/intraday-trading", "/blogs", "/privacy-policy", "/terms-conditions", "/disclaimer",
];

function xmlText(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function sitemapEntry(path, modified) {
  const date = modified ? new Date(modified) : null;
  const lastmod = date && Number.isFinite(date.getTime())
    ? `<lastmod>${date.toISOString().slice(0, 10)}</lastmod>` : "";
  return `  <url><loc>${xmlText(SITE_URL + path)}</loc>${lastmod}</url>`;
}

export default async function sitemapHandler(_request, response) {
  try {
    // Use the same public CMS as Insights. The website's /api proxy serves the trading portal.
    const cms = process.env.VITE_API_BASE_URL || "https://cft-backend.onrender.com";
    const result = await fetch(new URL("/api/blogs/viewblog", cms), {
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(12000),
    });
    if (!result.ok) throw new Error(`Public blog feed returned HTTP ${result.status}`);
    const payload = await result.json();
    const blogs = Array.isArray(payload) ? payload : payload?.data ?? payload?.blogs;
    if (!Array.isArray(blogs)) throw new Error("Unexpected public blog feed format");

    const entries = new Map(PUBLIC_PAGES.map((path) => [path, sitemapEntry(path)]));
    for (const blog of blogs) {
      const slug = typeof blog?.slug === "string" ? blog.slug.trim() : "";
      if (!slug || slug === "." || slug === ".." || /[/\\?#]/.test(slug)) continue;
      if (blog.status && blog.status !== "published") continue;
      if (blog.scheduledAt && Date.parse(blog.scheduledAt) > Date.now()) continue;
      const path = `/blogs/${encodeURIComponent(slug)}`;
      entries.set(path, sitemapEntry(path, blog.lastUpdated || blog.updatedAt || blog.datePublished));
    }

    response.setHeader("Content-Type", "application/xml; charset=utf-8");
    response.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400, stale-if-error=86400");
    return response.status(200).send([
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...entries.values(), "</urlset>", "",
    ].join("\n"));
  } catch {
    // A temporary CMS failure must not advertise an incomplete list as a successful sitemap.
    response.setHeader("Cache-Control", "no-store");
    response.setHeader("Retry-After", "300");
    return response.status(503).send("Sitemap temporarily unavailable");
  }
}
