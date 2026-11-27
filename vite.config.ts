import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { publicPageMetadata, publicSite } from "./src/data/publicPageMetadata";

function escapeHtml(text: string) {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "public-page-html",
      enforce: "post",
      generateBundle(_, bundle) {
        const shell = bundle["index.html"];
        if (!shell || shell.type !== "asset" || typeof shell.source !== "string") {
          this.error("Missing built index.html");
        }
        for (const [page, { title, description }] of Object.entries(publicPageMetadata)) {
          const tags = [
            `<title>${escapeHtml(title)}</title>`,
            `<meta data-rh="true" name="description" content="${escapeHtml(description)}" />`,
            `<link data-rh="true" rel="canonical" href="${publicSite}/${page}" />`,
          ].join("\n  ");
          this.emitFile({
            type: "asset",
            fileName: `page-html/${page || "home"}.html`,
            source: shell.source.replace(/<title>[^<]*<\/title>/, tags),
          });
        }
      },
    },
  ],
});
