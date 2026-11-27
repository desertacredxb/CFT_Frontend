export type Insight = {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  content: string;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
  schemaMarkup?: string[];
  status?: string;
  scheduledAt?: string;
};

const cms = import.meta.env.VITE_API_BASE_URL || "https://cft-backend.onrender.com";

export async function loadInsights(signal?: AbortSignal): Promise<Insight[]> {
  const response = await fetch(new URL("/api/blogs/viewblog", cms), { signal });
  if (!response.ok) throw new Error("The articles could not be loaded.");
  const payload = await response.json();
  const rows: Insight[] = Array.isArray(payload) ? payload : payload?.data ?? payload?.blogs;
  if (!Array.isArray(rows)) throw new Error("The articles could not be loaded.");

  return rows.filter(post => typeof post?.title === "string" && typeof post.slug === "string"
    && post.slug.trim() && ![".", ".."].includes(post.slug) && !/[/\\?#]/.test(post.slug)
    && (!post.status || post.status === "published")
    && !(post.scheduledAt && Date.parse(post.scheduledAt) > Date.now()))
    .sort((a, b) => (Date.parse(b.datePublished) || 0) - (Date.parse(a.datePublished) || 0));
}

export function articleHref(post: Insight) {
  return "/blogs/" + encodeURIComponent(post.slug);
}
