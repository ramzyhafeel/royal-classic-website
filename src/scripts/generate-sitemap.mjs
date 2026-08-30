import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function xmlEscape(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function main() {
  const root = path.resolve(__dirname, "..");

  const siteMod = await import(pathToFileURL(path.join(root, "src/data/site.js")).href);
  const pkgMod = await import(pathToFileURL(path.join(root, "src/data/packages.js")).href);

  const domain = (siteMod.siteConfig?.domain || siteMod.site?.domain || "https://royalclassictours.lk").replace(/\/$/, "");

  const staticRoutes = [
    "/",
    "/packages",
    "/services",
    "/transportation",
    "/hotels",
    "/gallery",
    "/reviews",
    "/about",
    "/contact",
    "/customize-tour",
  ];

  const packageRoutes = (pkgMod.packages || []).map((p) => `/packages/${p.slug}`);

  const all = [...staticRoutes, ...packageRoutes];

  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = all
    .map((r) => {
      const loc = `${domain}${r}`;
      return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  const outPath = path.join(root, "public", "sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf8");
  console.log(`✅ sitemap.xml generated with ${all.length} URLs → ${outPath}`);
}

// Node helper
function pathToFileURL(p) {
  const u = new URL("file://");
  u.pathname = path.resolve(p).replace(/\\/g, "/");
  return u;
}

main().catch((e) => {
  console.error("❌ sitemap generation failed:", e);
  process.exit(1);
});