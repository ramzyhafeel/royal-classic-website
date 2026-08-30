import { siteConfig } from './site.js';

const ogImage = (siteConfig.domain || "https://royalclassictours.lk") + "/og-image.jpg";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteConfig.name,
  url: siteConfig.domain,
  logo: ogImage,
  description: siteConfig.description,
  areaServed: {
    "@type": "Country",
    name: "Sri Lanka",
  },
};

export const seo = {
  default: {
    title: "Royal Classic Tours | Private Sri Lanka Tours & Driver Transportation",
    description:
      "Explore Sri Lanka with Royal Classic Tours. Private tours, professional drivers, airport transfers, car and van transportation, accommodation options and tailor-made Sri Lanka journeys.",
    canonical: siteConfig.domain + "/",
    ogImage,
    jsonLd,
  },

  routes: {
    "/": {
      title: "Royal Classic Tours | Private Sri Lanka Tours & Driver Transportation",
      description:
        "Explore Sri Lanka with Royal Classic Tours. Private tours, professional drivers, airport transfers, car and van transportation, accommodation options and tailor-made Sri Lanka journeys.",
      canonical: siteConfig.domain + "/",
    },
    "/packages": {
      title: "Sri Lanka Private Tour Packages | Royal Classic Tours",
      description:
        "Explore our curated Sri Lanka private tour packages. From cultural triangles to complete island expeditions, find the perfect itinerary for your holiday.",
      canonical: siteConfig.domain + "/packages",
    },
    "/services": {
      title: "Private Sri Lanka Travel Services | Royal Classic Tours",
      description:
        "Comprehensive travel services in Sri Lanka including private driver hire, customized itineraries, airport transfers, and hotel bookings.",
      canonical: siteConfig.domain + "/services",
    },
    "/transportation": {
      title: "Sri Lanka Private Driver & Vehicle Hire | Royal Classic Tours",
      description:
        "Hire a professional driver and comfortable vehicle for your Sri Lanka trip. Reliable, safe, and flexible private transportation services.",
      canonical: siteConfig.domain + "/transportation",
    },
    "/hotels": {
      title: "Sri Lanka Accommodation for Private Tours | Royal Classic Tours",
      description:
        "Discover curated hotel recommendations across Sri Lanka, from luxury boutique resorts to comfortable stays, perfect for your private tour.",
      canonical: siteConfig.domain + "/hotels",
    },
    "/gallery": {
      title: "Sri Lanka Travel Gallery | Royal Classic Tours",
      description:
        "View our gallery featuring Sri Lanka's stunning destinations, wildlife, beaches, and the premium vehicles used for our private tours.",
      canonical: siteConfig.domain + "/gallery",
    },
    "/reviews": {
      title: "Guest Reviews | Royal Classic Tours Sri Lanka",
      description:
        "Read testimonials from travelers who have explored Sri Lanka with Royal Classic Tours through our private transportation and custom holiday packages.",
      canonical: siteConfig.domain + "/reviews",
    },
    "/about": {
      title: "About Royal Classic Tours | Private Sri Lanka Travel",
      description:
        "Learn about Royal Classic Tours. We are dedicated to providing exceptional private travel experiences and driver services across Sri Lanka.",
      canonical: siteConfig.domain + "/about",
    },
    "/contact": {
      title: "Contact Royal Classic Tours | Plan Your Sri Lanka Journey",
      description:
        "Get in touch with Royal Classic Tours via WhatsApp or email to start planning your custom Sri Lanka holiday or to book a private driver.",
      canonical: siteConfig.domain + "/contact",
    },
    "/customize-tour": {
      title: "Customize Your Sri Lanka Journey | Royal Classic Tours",
      description:
        "Design your dream Sri Lanka holiday. Work with our experts to customize your itinerary, transport, and experiences perfectly tailored to you.",
      canonical: siteConfig.domain + "/customize-tour",
    },
  },
};