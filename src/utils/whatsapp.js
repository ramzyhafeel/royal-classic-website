// src/utils/whatsapp.js — Centralized WhatsApp link generator
import { siteConfig } from "../data/site";

/**
 * Generate a WhatsApp deep link with a pre-filled message.
 * @param {string} message — The message to prefill in the chat
 * @returns {string} — Full https://wa.me/ URL
 */
export const createWhatsAppLink = (message = "") => {
  const number = String(siteConfig.whatsappNumber).replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

// Pre-built message templates
export const whatsappMessages = {
  general:
    "Hello Royal Classic Tours,\n\nI'm interested in learning more about your services.\n\nPlease send me more information.",

  transportation:
    "Hello Royal Classic Tours,\n\nI'm interested in hiring a private vehicle with a professional driver in Sri Lanka.\n\nPlease send me more information.",

  package: (packageName) =>
    `Hello Royal Classic Tours,\n\nI'm interested in the ${packageName}.\n\nPlease send me more information and a quotation.`,

  vehicle: (vehicleType) =>
    `Hello Royal Classic Tours,\n\nI'm interested in a ${vehicleType} with driver for my Sri Lanka trip.`,

  airportTransfer:
    "Hello Royal Classic Tours,\n\nI would like to arrange a private airport transfer in Sri Lanka.",

  hotel:
    "Hello Royal Classic Tours,\n\nI'd like information about accommodation options for my Sri Lanka journey.",

  customTour: (details) =>
    `Hello Royal Classic Tours,\n\nI would like help planning a private Sri Lanka journey.\n\n${details}\n\nPlease send me a suggested itinerary and quotation.\n\nThank you.`,
};
