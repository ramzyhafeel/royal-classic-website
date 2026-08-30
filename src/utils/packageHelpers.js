import { siteConfig } from "../data/site";

/**
 * Get the display price for a package.
 * Returns "Request a Quote" since Royal Classic Tours doesn't show fixed prices.
 */
export function getPackagePrice(pkg) {
  return pkg.price || "Request a Quote";
}

/**
 * Get the full route display string.
 */
export function getRouteDisplay(pkg) {
  if (!pkg.route || !pkg.route.length) return "";
  return pkg.route.join(" → ");
}

/**
 * Get category label string.
 */
export function getCategoryLabel(pkg) {
  if (!pkg.categories || !pkg.categories.length) return pkg.duration || "";
  return [pkg.duration, ...pkg.categories].filter(Boolean).join(" • ");
}