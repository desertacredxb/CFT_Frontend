import { readFile } from "node:fs/promises";

const BLOG_ENDPOINT = "/api/blogs/viewblog";
const SITE_URL = "https://www.mastertrader.co.in";

const escapeXml = (value) =>
  String(value).replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character]);

const toDate = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10);
};

const getOrigin = (request) => {
  const protocol = request.headers["x-forwarded-proto"] || "https";
  const host = request.headers["x-forwarded-host"] || request.headers.host;
  if (!host) throw new Error("Request host is unavailable");
  return `${protocol}://${host}`;
};

export default async function sitemapHandler(request, response) {
  try {
    const staticXml = await readFile(
      new URL("../public/sitemap.xml", import.meta.url),
      "utf8",
    );

    // Entries can be added directly to public/sitemap.xml. Existing blog-detail
    // entries are replaced with fresh values from the API on every refresh.
    const staticEntries = (staticXml.match(/<url>\s*[\s\S]*?<\/url>/g) || [])
      .filter((entry) => {
        const location = entry.match(/<loc>\s*([^<]+)\s*<\/loc>/)?.[1]?.trim();
        if (!location) return false;
        try {
          return !new URL(location).pathname.startsWith("/blogs/");
        } catch {
          return true;
        }
      });

    const blogResponse = await fetch(new URL(BLOG_ENDPOINT, getOrigin(request)), {
      headers: { accept: "application/json" },
    });
    if (!blogResponse.ok) {
      throw new Error(`Blog endpoint returned HTTP ${blogResponse.status}`);
    }

    const payload = await blogResponse.json();
    const blogs = Array.isArray(payload) ? payload : payload.data || payload.blogs;
    if (!Array.isArray(blogs)) throw new TypeError("Blog endpoint must return an array");

    const uniqueBlogs = [...new Map(
      blogs
        .filter((blog) => typeof blog?.slug === "string" && blog.slug.trim())
        .map((blog) => [blog.slug.trim(), blog]),
    ).values()];

    const blogEntries = uniqueBlogs.map((blog) => {
      const lastmod = toDate(blog.lastUpdated || blog.datePublished);
      return [
        "  <url>",
        `    <loc>${escapeXml(`${SITE_URL}/blogs/${encodeURIComponent(blog.slug.trim())}`)}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
        "    <changefreq>weekly</changefreq>",
        "    <priority>0.7</priority>",
        "  </url>",
      ].filter(Boolean).join("\n");
    });

    const sitemap = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...staticEntries,
      ...blogEntries,
      "</urlset>",
      "",
    ].join("\n");

    response.setHeader("Content-Type", "application/xml; charset=utf-8");
    response.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );
    return response.status(200).send(sitemap);
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    return response.status(500).send("Sitemap generation failed");
  }
}
