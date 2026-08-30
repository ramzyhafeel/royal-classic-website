import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaClock, 
  FaShieldAlt, 
  FaChevronDown,
  FaPaperPlane
} from 'react-icons/fa';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/seo/Seo';
import { siteConfig } from '../data/site';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

const CONTACT_FAQS = [
  {
    q: "How fast will I receive a quote?",
    a: "We respond promptly! Inquiries sent via WhatsApp typically receive a response within 15–30 minutes. Email inquiries receive a custom itinerary and quote within 2–4 hours."
  },
  {
    q: "Is there any obligation when submitting an inquiry?",
    a: "None at all. All itinerary consultations, custom route planning, and initial quotes are completely free and non-binding."
  },
  {
    q: "Can I adjust destinations or dates after getting a quote?",
    a: "Yes! Every single package and itinerary is 100% flexible. We will fine-tune and customize your plan until it is perfect for you."
  },
  {
    q: "What if my flight arrives late at night?",
    a: "We provide 24/7 flight-monitored airport pickups at Bandaranaike International Airport (CMB). Your private driver will be waiting at arrivals regardless of flight delays."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    whatsapp: '',
    email: '',
    arrival: '',
    departure: '',
    travellers: '2',
    service: 'Complete Private Tour',
    budget: 'Comfort (3-4 Star)',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    return `Hello Royal Classic Tours,

I would like to plan a Sri Lanka journey!

*Traveler Details:*
• Name: ${formData.name || 'Not specified'}
• Country: ${formData.country || 'Not specified'}
• WhatsApp: ${formData.whatsapp || 'Not specified'}
• Email: ${formData.email || 'Not specified'}

*Trip Preferences:*
• Dates: ${formData.arrival || 'TBD'} to ${formData.departure || 'TBD'}
• Number of Travellers: ${formData.travellers}
• Service Type: ${formData.service}
• Preferred Stay Level: ${formData.budget}

*Message / Notes:*
${formData.message || 'I would like more information and a tailored itinerary.'}`;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    window.open(createWhatsAppLink(msg), '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Submit via Netlify form or AJAX if required
    const myForm = e.target;
    const formDataObj = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formDataObj).toString(),
    }).catch((error) => console.error(error));
  };

  return (
    <Layout>
      <Seo 
        title="Contact Us & Plan Your Trip | Royal Classic Tours Sri Lanka" 
        description="Get in touch with Royal Classic Tours. Plan your private Sri Lanka tour, hire an executive chauffeur, or customize a tailor-made holiday. WhatsApp and direct booking available 24/7." 
      />

      {/* Page Hero */}
      <PageHero 
        title="Let's craft your journey." 
        subtitle="Direct support, bespoke tour planning, and prompt communication 7 days a week." 
        image="/images/hero/hero5.jpg" 
      />

      <section className="py-16 md:py-24 bg-[var(--royal-ivory)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Top Quick Contact Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            
            {/* 1. WhatsApp Direct */}
            <motion.a 
              href={createWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-[var(--royal-sand)] shadow-sm hover:shadow-md hover:border-[#25D366]/40 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                <FaWhatsapp className="w-7 h-7" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full">
                    Instant
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg text-[var(--royal-forest)]">WhatsApp Us</h3>
                <p className="text-xs text-[var(--royal-muted)] truncate">{siteConfig.contact.whatsappDisplay || '+94 XX XXX XXXX'}</p>
              </div>
            </motion.a>

            {/* 2. Direct Call */}
            <motion.a 
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border border-[var(--royal-sand)] shadow-sm hover:shadow-md hover:border-[var(--royal-forest)]/30 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--royal-forest)]/10 text-[var(--royal-forest)] flex items-center justify-center shrink-0 group-hover:bg-[var(--royal-forest)] group-hover:text-white transition-all duration-300">
                <FaPhoneAlt className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--royal-forest)] block mb-1">
                  24/7 Hotline
                </span>
                <h3 className="font-display font-semibold text-lg text-[var(--royal-forest)]">Call Directly</h3>
                <p className="text-xs text-[var(--royal-muted)] truncate">{siteConfig.contact.phoneDisplay || '+94 XX XXX XXXX'}</p>
              </div>
            </motion.a>

            {/* 3. Direct Email */}
            <motion.a 
              href={`mailto:${siteConfig.contact.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl border border-[var(--royal-sand)] shadow-sm hover:shadow-md hover:border-[var(--royal-gold)]/40 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--royal-gold)]/10 text-[var(--royal-gold)] flex items-center justify-center shrink-0 group-hover:bg-[var(--royal-gold)] group-hover:text-white transition-all duration-300">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--royal-gold)] block mb-1">
                  Concierge
                </span>
                <h3 className="font-display font-semibold text-lg text-[var(--royal-forest)]">Email Us</h3>
                <p className="text-xs text-[var(--royal-muted)] truncate">{siteConfig.contact.email}</p>
              </div>
            </motion.a>

            {/* 4. Islandwide Hub */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl border border-[var(--royal-sand)] shadow-sm flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0D2C20]/10 text-[var(--royal-forest)] flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--royal-forest)] block mb-1">
                  Island-Wide
                </span>
                <h3 className="font-display font-semibold text-lg text-[var(--royal-forest)]">Sri Lanka HQ</h3>
                <p className="text-xs text-[var(--royal-muted)] truncate">Colombo &bull; Kandy &bull; Galle</p>
              </div>
            </motion.div>

          </div>

          {/* Main 2-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Brand Overview & Guarantees */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <span className="text-[var(--royal-gold)] uppercase tracking-widest text-xs font-semibold block mb-2">
                  SEAMLESS SRI LANKA TRAVEL
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[var(--royal-forest)] font-semibold leading-tight mb-4">
                  Experience Sri Lanka on your own terms.
                </h2>
                <p className="text-[var(--royal-muted)] text-base leading-relaxed">
                  Whether you require an executive chauffeur for private airport transfers or a fully curated multi-day tour with luxury stays, our local travel experts are here to assist you.
                </p>
              </div>

              {/* Guarantees Box */}
              <div className="bg-white rounded-2xl p-7 border border-[var(--royal-sand)] shadow-sm space-y-5">
                <h4 className="font-display text-lg text-[var(--royal-forest)] font-semibold border-b border-[var(--royal-sand)] pb-3">
                  The Royal Classic Guarantee
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <FaCheckCircle className="text-[var(--royal-gold)] w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-[var(--royal-forest)]">100% Tailored Journeys</h5>
                      <p className="text-xs text-[var(--royal-muted)] mt-0.5">Flexible itineraries built around your dates, pace, and passions.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <FaShieldAlt className="text-[var(--royal-gold)] w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-[var(--royal-forest)]">Certified Chauffeur Guides</h5>
                      <p className="text-xs text-[var(--royal-muted)] mt-0.5">English-speaking, tourist-board licensed drivers with immaculate safety records.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <FaClock className="text-[var(--royal-gold)] w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-[var(--royal-forest)]">24/7 On-Trip Assistance</h5>
                      <p className="text-xs text-[var(--royal-muted)] mt-0.5">Dedicated concierge support on WhatsApp from arrival to departure.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick CTA Banner */}
              <div className="bg-gradient-to-br from-[#123B2A] to-[#0A261B] text-white p-7 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-[#C5A35A] uppercase tracking-widest text-[11px] font-semibold block mb-2">
                    PREFER INSTANT CHAT?
                  </span>
                  <h4 className="font-display text-2xl font-semibold mb-2">
                    Message Us Directly
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">
                    Skip the forms and start a friendly conversation with our trip coordinators on WhatsApp right away.
                  </p>
                  <a 
                    href={createWhatsAppLink("Hello Royal Classic Tours! I would like to plan a trip to Sri Lanka.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EAB52] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-300 group"
                  >
                    <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Chat on WhatsApp Now &rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Luxury Inquiry Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-white p-8 sm:p-10 md:p-12 rounded-3xl border border-[var(--royal-sand)] shadow-md"
            >
              <div className="mb-8 border-b border-[var(--royal-sand)] pb-6">
                <span className="text-[var(--royal-gold)] uppercase tracking-wider text-xs font-semibold block mb-1">
                  CUSTOM TOUR INQUIRY
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[var(--royal-forest)] font-semibold">
                  Plan Your Tailor-Made Trip
                </h3>
                <p className="text-sm text-[var(--royal-muted)] mt-1.5">
                  Provide your travel details below and our team will prepare a customized route and transparent quote.
                </p>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#123B2A]/5 border border-[var(--royal-gold)]/30 p-8 rounded-2xl text-center space-y-4 my-8"
                >
                  <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                    <FaCheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl text-[var(--royal-forest)] font-semibold">
                    Inquiry Received with Thanks!
                  </h4>
                  <p className="text-sm text-[var(--royal-muted)] max-w-md mx-auto">
                    Thank you, {formData.name || 'Traveler'}. One of our local travel specialists will review your itinerary and get back to you shortly.
                  </p>
                  <div className="pt-2">
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-xs uppercase tracking-wider font-semibold text-[var(--royal-gold)] hover:underline"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleFormSubmit}
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Name & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-forest)] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#FAF8F5] border border-[var(--royal-sand)] rounded-xl px-4 py-3.5 text-sm text-[var(--royal-ink)] focus:outline-none focus:border-[var(--royal-gold)] focus:ring-1 focus:ring-[var(--royal-gold)] transition-colors placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-forest)] mb-2">
                        Country of Residence <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="country" 
                        value={formData.country} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. United Kingdom, Germany, UAE"
                        className="w-full bg-[#FAF8F5] border border-[var(--royal-sand)] rounded-xl px-4 py-3.5 text-sm text-[var(--royal-ink)] focus:outline-none focus:border-[var(--royal-gold)] focus:ring-1 focus:ring-[var(--royal-gold)] transition-colors placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* WhatsApp & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-forest)] mb-2">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="whatsapp" 
                        value={formData.whatsapp} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. +44 7123 456789"
                        className="w-full bg-[#FAF8F5] border border-[var(--royal-sand)] rounded-xl px-4 py-3.5 text-sm text-[var(--royal-ink)] focus:outline-none focus:border-[var(--royal-gold)] focus:ring-1 focus:ring-[var(--royal-gold)] transition-colors placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-forest)] mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. eleanor@example.com"
                        className="w-full bg-[#FAF8F5] border border-[var(--royal-sand)] rounded-xl px-4 py-3.5 text-sm text-[var(--royal-ink)] focus:outline-none focus:border-[var(--royal-gold)] focus:ring-1 focus:ring-[var(--royal-gold)] transition-colors placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Travel Dates & Travellers */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-forest)] mb-2">
                        Arrival Date
                      </label>
                      <input 
                        type="date" 
                        name="arrival" 
                        value={formData.arrival} 
                        onChange={handleChange} 
                        className="w-full bg-[#FAF8F5] border border-[var(--royal-sand)] rounded-xl px-3.5 py-3 text-sm text-[var(--royal-ink)] focus:outline-none focus:border-[var(--royal-gold)] focus:ring-1 focus:ring-[var(--royal-gold)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-forest)] mb-2">
                        Departure Date
                      </label>
                      <input 
                        type="date" 
                        name="departure" 
                        value={formData.departure} 
                        onChange={handleChange} 
                        className="w-full bg-[#FAF8F5] border border-[var(--royal-sand)] rounded-xl px-3.5 py-3 text-sm text-[var(--royal-ink)] focus:outline-none focus:border-[var(--royal-gold)] focus:ring-1 focus:ring-[var(--royal-gold)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-forest)] mb-2">
                        Travellers
                      </label>
                      <input 
                        type="number" 
                        min="1" 
                        name="travellers" 
                        value={formData.travellers} 
                        onChange={handleChange} 
                        placeholder="2"
                        className="w-full bg-[#FAF8F5] border border-[var(--royal-sand)] rounded-xl px-4 py-3 text-sm text-[var(--royal-ink)] focus:outline-none focus:border-[var(--royal-gold)] focus:ring-1 focus:ring-[var(--royal-gold)] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service & Preferred Accommodation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-forest)] mb-2">
                        Service Type
                      </label>
                      <select 
                        name="service" 
                        value={formData.service} 
                        onChange={handleChange} 
                        className="w-full bg-[#FAF8F5] border border-[var(--royal-sand)] rounded-xl px-4 py-3.5 text-sm text-[var(--royal-ink)] focus:outline-none focus:border-[var(--royal-gold)] focus:ring-1 focus:ring-[var(--royal-gold)] transition-colors cursor-pointer"
                      >
                        <option value="Complete Private Tour">Complete Private Tour (Vehicle + Driver + Hotels)</option>
                        <option value="Transportation Only">Private Transportation &amp; Chauffeur Only</option>
                        <option value="Airport Transfer">Airport Pickup / Drop-off</option>
                        <option value="Day Tour Excursion">Day Tour Excursion</option>
                        <option value="Custom Bespoke Itinerary">Custom Bespoke Itinerary</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-forest)] mb-2">
                        Accommodation Preference
                      </label>
                      <select 
                        name="budget" 
                        value={formData.budget} 
                        onChange={handleChange} 
                        className="w-full bg-[#FAF8F5] border border-[var(--royal-sand)] rounded-xl px-4 py-3.5 text-sm text-[var(--royal-ink)] focus:outline-none focus:border-[var(--royal-gold)] focus:ring-1 focus:ring-[var(--royal-gold)] transition-colors cursor-pointer"
                      >
                        <option value="Luxury (5-Star & Boutique)">Luxury (5-Star &amp; Boutique Resorts)</option>
                        <option value="Comfort (3-4 Star)">Comfort (Handpicked 3-4 Star Hotels)</option>
                        <option value="Budget / Guesthouses">Budget / Authentic Guesthouses</option>
                        <option value="Self-Booked Hotels">Self-Booked (Transport Only)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-forest)] mb-2">
                      Tell Us About Your Vision &amp; Interests
                    </label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={4} 
                      placeholder="e.g. We love scenic train rides, wildlife safaris in Yala, exploring tea plantations, and ending with 3 relaxing days on Mirissa beach..."
                      className="w-full bg-[#FAF8F5] border border-[var(--royal-sand)] rounded-xl p-4 text-sm text-[var(--royal-ink)] focus:outline-none focus:border-[var(--royal-gold)] focus:ring-1 focus:ring-[var(--royal-gold)] transition-colors placeholder:text-gray-400 leading-relaxed"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-col sm:flex-row gap-4">
                    {/* Instant WhatsApp Submission */}
                    <button 
                      type="button" 
                      onClick={handleWhatsAppSubmit}
                      className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1EAB52] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                    >
                      <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Continue on WhatsApp</span>
                    </button>

                    {/* Email / Web Form Submission */}
                    <button 
                      type="submit" 
                      className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[var(--royal-forest)] hover:bg-[var(--royal-forest-dark)] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                    >
                      <FaPaperPlane className="w-4 h-4 text-[var(--royal-gold)] group-hover:translate-x-1 transition-transform" />
                      <span>Send Web Inquiry</span>
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-[var(--royal-muted)] pt-2">
                    🔒 Your personal details are completely private and used exclusively for your trip planning.
                  </p>
                </form>
              )}
            </motion.div>

          </div>

          {/* Quick FAQ Section on Contact Page */}
          <div className="mt-24 pt-16 border-t border-[var(--royal-sand)]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[var(--royal-gold)] uppercase tracking-widest text-xs font-semibold block mb-2">
                COMMON QUESTIONS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--royal-forest)] font-semibold">
                Quick Answers Before You Inquire
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {CONTACT_FAQS.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-[var(--royal-sand)] overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-display font-medium text-base sm:text-lg text-[var(--royal-forest)]">
                      {faq.q}
                    </span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openFaq === idx 
                        ? 'bg-[var(--royal-gold)] text-white rotate-180' 
                        : 'bg-[var(--royal-ivory)] text-[var(--royal-forest)]'
                    }`}>
                      <FaChevronDown className="w-3 h-3" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 text-sm text-[var(--royal-muted)] leading-relaxed border-t border-[var(--royal-sand)]/50 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}