// src/data/site.js — Royal Classic Tours centralized configuration
export const siteConfig = {
  name: "Royal Classic Tours",
  shortName: "Royal Classic",
  tagline: "Discover Sri Lanka. Travel Your Way.",

  description:
    "Private Sri Lanka tours, professional drivers, airport transfers and tailor-made holidays.",

  domain: "https://royalclassictours.lk",

  // Replace with actual contact details before launch
  whatsappNumber: "947XXXXXXXX",
  phone: "+94 XX XXX XXXX",
  email: "hello@royalclassictours.lk",

  location: "Sri Lanka",

  contact: {
    whatsapp: "947XXXXXXXX",
    whatsappDisplay: "+94 XX XXX XXXX",
    phone: "+94 XX XXX XXXX",
    phoneDisplay: "+94 XX XXX XXXX",
    email: "hello@royalclassictours.lk",
    location: "Sri Lanka",
  },

  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
  },
};

// Backward-compatible alias (used by some existing components during migration)
export const site = siteConfig;