import { siteConfig } from "../data/site";

export function buildCanonical(path) {
  const base = (siteConfig.domain || "").replace(/\/$/, "");
  return base ? `${base}${path}` : path;
}

export function packageSeo(pkg) {
  if (!pkg) return {};

  const title = `${pkg.title} — ${pkg.duration} Private Tour | Royal Classic Tours`;
  const description =
    pkg.summary ||
    `A customizable ${pkg.duration.toLowerCase()} private Sri Lanka journey with Royal Classic Tours.`;
  const canonical = buildCanonical(`/packages/${pkg.slug}`);

  return {
    title,
    description,
    canonical,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: pkg.title,
        description,
        url: canonical,
        touristType: ["International Travellers", "Couples", "Families"],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: buildCanonical("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Packages",
            item: buildCanonical("/packages"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pkg.title,
            item: canonical,
          },
        ],
      },
    ],
  };
}

// Alias for backward compatibility
export const createPackageSeo = packageSeo;