import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/seo/Seo';
import { motion, AnimatePresence } from 'framer-motion';
import { createWhatsAppLink } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Compass,
  Car,
  Hotel,
  Calendar,
  Users,
  MapPin
} from 'lucide-react';

const INTERESTS = [
  { id: 'Culture', label: 'Cultural Heritage', desc: 'Ancient citadels & sacred temples' },
  { id: 'Wildlife', label: 'Wildlife Safari', desc: 'Leopards, elephants & marine life' },
  { id: 'Beaches', label: 'Tropical Coast', desc: 'Golden sands & turquoise surf' },
  { id: 'Mountains', label: 'Tea & Mountains', desc: 'Misty peaks, waterfalls & trains' },
  { id: 'Ayurveda', label: 'Ayurveda & Wellness', desc: 'Holistic retreats & spa treatments' },
  { id: 'Adventure', label: 'Adventure & Hiking', desc: 'Trekking, rafting & viewpoints' },
  { id: 'Food', label: 'Culinary Journey', desc: 'Authentic spice farms & local flavors' },
  { id: 'Photography', label: 'Photography Tours', desc: 'Scenic landscapes & colonial fortresses' },
  { id: 'Honeymoon', label: 'Romantic Honeymoon', desc: 'Intimate stays & candlelight dining' },
  { id: 'Family', label: 'Family Friendly', desc: 'Engaging, relaxed itineraries for all ages' },
  { id: 'Surfing', label: 'Surfing & Oceans', desc: 'Arugam Bay, Weligama & Mirissa' },
  { id: 'Relaxation', label: 'Pure Relaxation', desc: 'Slow luxury & tranquil villas' }
];

const DESTINATIONS = [
  'Sigiriya', 'Kandy', 'Ella', 'Galle', 'Nuwara Eliya', 
  'Yala National Park', 'Mirissa', 'Bentota', 'Dambulla', 
  'Colombo', 'Negombo', 'Anuradhapura', 'Polonnaruwa', 
  'Trincomalee', 'Arugam Bay', 'Not sure — recommend for me'
];

const ACCOMMODATIONS = [
  {
    id: 'Luxury / 5 Star',
    title: 'Luxury / 5-Star & Heritage Stays',
    desc: 'Top-tier luxury resorts, colonial tea bungalows, and boutique oceanfront villas.'
  },
  {
    id: '4 Star',
    title: '4-Star Premium & Boutique',
    desc: 'Handpicked boutique hotels offering authentic charm, comfort, and scenic views.'
  },
  {
    id: 'Comfort / 3 Star',
    title: 'Comfort / 3-Star Quality',
    desc: 'Clean, reliable, and welcoming hotels in prime travel locations.'
  },
  {
    id: 'Already booked accommodation',
    title: 'Already Booked My Own Stays',
    desc: 'I only need an executive vehicle and professional private chauffeur guide.'
  }
];

const TRANSPORTS = [
  {
    id: 'Sedan',
    title: 'Executive Sedan',
    capacity: '1 - 3 Guests • 2 Large Bags',
    desc: 'Toyota Premio / Allion / Axio. Air-conditioned comfort for couples & solo travelers.'
  },
  {
    id: 'SUV',
    title: 'Premium SUV',
    capacity: '1 - 4 Guests • 3 Large Bags',
    desc: 'Elevated ride, panoramic windows, and superior handling for mountain terrains.'
  },
  {
    id: 'Private Van',
    title: 'High-Roof Tourist Van',
    capacity: '4 - 9 Guests • 6+ Bags',
    desc: 'Toyota KDH / HiAce Luxury. Reclining captain seats, dual AC, spacious legroom.'
  },
  {
    id: 'Recommend for me',
    title: 'Recommend Best Vehicle',
    capacity: 'Tailored to Party Size',
    desc: 'Let our operations team assign the most comfortable vehicle for your route.'
  }
];

const STEP_TITLES = [
  { num: 1, title: 'Dates', icon: Calendar },
  { num: 2, title: 'Travelers', icon: Users },
  { num: 3, title: 'Experiences', icon: Compass },
  { num: 4, title: 'Destinations', icon: MapPin },
  { num: 5, title: 'Stays', icon: Hotel },
  { num: 6, title: 'Fleet', icon: Car },
  { num: 7, title: 'Notes', icon: Sparkles },
  { num: 8, title: 'Summary', icon: Check }
];

const CustomizeTour = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);

  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    adults: 2,
    children: 0,
    infants: 0,
    interests: [],
    destinations: [],
    accommodation: '',
    transportation: '',
    specialRequest: ''
  });

  const nextStep = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 8));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleInterestToggle = (interestId) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((i) => i !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleDestinationToggle = (dest) => {
    setFormData((prev) => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter((d) => d !== dest)
        : [...prev.destinations, dest]
    }));
  };

  const updateCounter = (field, delta, min, max) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Math.min(Math.max(prev[field] + delta, min), max)
    }));
  };

  const getDuration = () => {
    if (!formData.arrivalDate || !formData.departureDate) return '';
    const start = new Date(formData.arrivalDate);
    const end = new Date(formData.departureDate);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? `${diff} Days / ${diff - 1} Nights` : '';
  };

  const getWhatsAppMessage = () => {
    const { arrivalDate, departureDate, adults, children, infants, interests, destinations, accommodation, transportation, specialRequest } = formData;
    
    let message = `*CUSTOM SRI LANKA JOURNEY INQUIRY*\n`;
    message += `Royal Classic Tours Sri Lanka\n\n`;
    message += `*1. Travel Dates:* ${arrivalDate || 'Not specified'} to ${departureDate || 'Not specified'} ${getDuration() ? `(${getDuration()})` : ''}\n`;
    message += `*2. Party Size:* ${adults} Adults${children > 0 ? ', ' + children + ' Children' : ''}${infants > 0 ? ', ' + infants + ' Infants' : ''}\n`;
    message += `*3. Interests:* ${interests.length > 0 ? interests.join(', ') : 'Open to recommendations'}\n`;
    message += `*4. Places to Visit:* ${destinations.length > 0 ? destinations.join(', ') : 'Curate for us'}\n`;
    message += `*5. Accommodation:* ${accommodation || 'Not specified'}\n`;
    message += `*6. Vehicle & Driver:* ${transportation || 'Recommend appropriate vehicle'}\n`;

    if (specialRequest) {
      message += `\n*7. Special Requests / Notes:*\n${specialRequest}\n`;
    }

    message += `\nPlease provide a customized private itinerary and quote. Thank you!`;

    return message;
  };

  const variants = {
    initial: (dir) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (dir) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeIn' }
    })
  };

  return (
    <Layout>
      <Seo 
        title="Customize Your Sri Lanka Journey | Royal Classic Tours" 
        description="Design your custom Sri Lanka itinerary with private chauffeur guides, boutique hotels, and flexible routes. Get a personalized WhatsApp quote within hours." 
      />

      {/* ── 1. LUXURY PAGE HERO BANNER ── */}
      <PageHero
        title="Plan Your Bespoke Sri Lanka Journey"
        subtitle="Handcrafted itineraries with private executive vehicles and English-speaking chauffeur guides. Tailored around your dates, pace, and travel style."
        eyebrow="BESPOKE ITINERARIES"
        image="/images/hero/hero3.jpg"
      />

      {/* ── 2. TRUST HIGHLIGHTS BAR ── */}
      <section className="bg-[#123B2A] border-y border-[#C5A35A]/25 py-4 text-white/90">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-[var(--royal-gold)] shrink-0" />
              <span>100% Tailor-Made Itinerary</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium">
              <Car className="w-4 h-4 text-[var(--royal-gold)] shrink-0" />
              <span>Dedicated Private Chauffeur</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium">
              <Clock className="w-4 h-4 text-[var(--royal-gold)] shrink-0" />
              <span>Quotes Within 2 to 4 Hours</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-[var(--royal-gold)] shrink-0" />
              <span>No Hidden Fees & Transparent</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE BUILDER CARD CONTAINER ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[var(--royal-ivory)] min-h-[75vh]">
        <div className="max-w-3xl mx-auto container-max">

          {/* Stepper Header */}
          <div className="mb-8 sm:mb-10 text-center">
            <span className="text-[var(--royal-gold)] font-semibold uppercase tracking-[0.2em] text-xs">
              TRIP DESIGNER
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[var(--royal-forest)] font-bold mt-1 mb-3">
              Shape Your Ideal Journey
            </h2>
            <p className="text-sm sm:text-base text-[var(--royal-muted)] max-w-xl mx-auto">
              Follow our quick 7-step guide below so our Sri Lanka travel specialists can design your customized private tour.
            </p>
          </div>

          {/* Step Progress Tracker */}
          <div className="mb-8">
            <div className="flex items-center justify-between gap-1 mb-3">
              {STEP_TITLES.slice(0, 7).map((item) => {
                const isCompleted = step > item.num;
                const isCurrent = step === item.num;
                const IconComponent = item.icon;

                return (
                  <button
                    key={item.num}
                    onClick={() => {
                      if (step > item.num) {
                        setDirection(-1);
                        setStep(item.num);
                      }
                    }}
                    className={`flex flex-col items-center gap-1.5 flex-1 transition-all group ${
                      step > item.num ? 'cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <div
                      className={`w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                        isCompleted
                          ? 'bg-[#123B2A] text-white shadow-sm'
                          : isCurrent
                          ? 'bg-[var(--royal-gold)] text-[#123B2A] ring-4 ring-[var(--royal-gold)]/20 shadow-md font-bold'
                          : 'bg-white border border-[var(--royal-sand)] text-[var(--royal-muted)]'
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4" /> : <IconComponent className="w-3.5 h-3.5" />}
                    </div>
                    <span
                      className={`hidden sm:block text-[11px] font-medium tracking-wide uppercase transition-colors ${
                        isCurrent
                          ? 'text-[var(--royal-forest)] font-bold'
                          : isCompleted
                          ? 'text-[var(--royal-ink)]'
                          : 'text-[var(--royal-muted)]/60'
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Continuous Progress Bar */}
            <div className="w-full h-1.5 bg-[var(--royal-sand)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#123B2A] via-[var(--royal-gold)] to-[var(--royal-gold)]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((step / 7) * 100, 100)}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Form Card Container */}
          <div className="bg-white rounded-2xl shadow-[var(--shadow-luxury)] border border-[var(--royal-sand)] overflow-hidden flex flex-col min-h-[460px]">
            <div className="p-6 sm:p-10 flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                
                {/* ── STEP 1: DATES ── */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold">Step 1 of 7</span>
                      <h3 className="font-display text-2xl sm:text-3xl text-[var(--royal-forest)] font-bold mt-1">
                        When are you planning to visit Sri Lanka?
                      </h3>
                      <p className="text-sm text-[var(--royal-muted)] mt-1">
                        Select tentative dates. We can adjust them anytime as your plans solidify.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-ink)]">
                          Estimated Arrival Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            value={formData.arrivalDate}
                            onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                            className="w-full border border-[var(--royal-sand)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--royal-gold)] focus:ring-2 focus:ring-[var(--royal-gold)]/20 transition-all text-[var(--royal-ink)] font-medium bg-[#FAF8F5]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--royal-ink)]">
                          Estimated Departure Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            value={formData.departureDate}
                            onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                            className="w-full border border-[var(--royal-sand)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--royal-gold)] focus:ring-2 focus:ring-[var(--royal-gold)]/20 transition-all text-[var(--royal-ink)] font-medium bg-[#FAF8F5]"
                          />
                        </div>
                      </div>
                    </div>

                    {getDuration() && (
                      <div className="p-3.5 rounded-xl bg-[#0D2C20]/5 border border-[#123B2A]/15 flex items-center justify-between">
                        <span className="text-xs font-medium text-[var(--royal-forest)]">Calculated Trip Length:</span>
                        <span className="text-sm font-bold text-[var(--royal-forest)] bg-[var(--royal-gold)]/20 px-3 py-1 rounded-full border border-[var(--royal-gold)]/30">
                          {getDuration()}
                        </span>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* ── STEP 2: TRAVELERS ── */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold">Step 2 of 7</span>
                      <h3 className="font-display text-2xl sm:text-3xl text-[var(--royal-forest)] font-bold mt-1">
                        Who will be travelling?
                      </h3>
                      <p className="text-sm text-[var(--royal-muted)] mt-1">
                        This ensures we recommend the perfect vehicle capacity and room combinations.
                      </p>
                    </div>

                    <div className="space-y-3.5 pt-2">
                      {[
                        { label: 'Adults', field: 'adults', desc: 'Age 12 and above', min: 1, max: 20 },
                        { label: 'Children', field: 'children', desc: 'Age 2 to 11 years', min: 0, max: 10 },
                        { label: 'Infants', field: 'infants', desc: 'Under 2 years (child seats available)', min: 0, max: 5 }
                      ].map(({ label, field, desc, min, max }) => (
                        <div
                          key={field}
                          className="flex items-center justify-between p-4 sm:p-5 border border-[var(--royal-sand)] rounded-xl bg-[#FAF8F5] hover:border-[var(--royal-gold)]/50 transition-all"
                        >
                          <div>
                            <p className="font-display font-bold text-lg text-[var(--royal-forest)]">{label}</p>
                            <p className="text-xs text-[var(--royal-muted)]">{desc}</p>
                          </div>
                          <div className="flex items-center gap-3.5">
                            <button
                              type="button"
                              onClick={() => updateCounter(field, -1, min, max)}
                              className="w-9 h-9 rounded-full bg-white border border-[var(--royal-sand)] text-[var(--royal-forest)] font-bold hover:bg-[var(--royal-gold)] hover:text-white hover:border-[var(--royal-gold)] transition-colors flex items-center justify-center cursor-pointer shadow-sm active:scale-95 text-lg"
                            >
                              −
                            </button>
                            <span className="w-6 text-center font-bold text-lg text-[var(--royal-ink)]">
                              {formData[field]}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateCounter(field, 1, min, max)}
                              className="w-9 h-9 rounded-full bg-[#123B2A] text-white font-bold hover:bg-[var(--royal-gold)] transition-colors flex items-center justify-center cursor-pointer shadow-sm active:scale-95 text-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 3: EXPERIENCES ── */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold">Step 3 of 7</span>
                      <h3 className="font-display text-2xl sm:text-3xl text-[var(--royal-forest)] font-bold mt-1">
                        What would you love to experience?
                      </h3>
                      <p className="text-sm text-[var(--royal-muted)] mt-1">
                        Select all that appeal to your travel party.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-h-[380px] overflow-y-auto pr-1">
                      {INTERESTS.map((interest) => {
                        const isSelected = formData.interests.includes(interest.id);
                        return (
                          <div
                            key={interest.id}
                            onClick={() => handleInterestToggle(interest.id)}
                            className={`p-3.5 rounded-xl text-left cursor-pointer transition-all duration-200 border flex items-start justify-between select-none ${
                              isSelected
                                ? 'bg-[#123B2A] text-white border-[#123B2A] shadow-md'
                                : 'bg-[#FAF8F5] border-[var(--royal-sand)] hover:border-[var(--royal-gold)] hover:bg-white'
                            }`}
                          >
                            <div className="min-w-0 pr-2">
                              <p className={`font-semibold text-sm ${isSelected ? 'text-white' : 'text-[var(--royal-forest)]'}`}>
                                {interest.label}
                              </p>
                              <p className={`text-xs mt-0.5 ${isSelected ? 'text-white/80' : 'text-[var(--royal-muted)]'}`}>
                                {interest.desc}
                              </p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected
                                ? 'bg-[var(--royal-gold)] border-[var(--royal-gold)] text-[#123B2A]'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 4: DESTINATIONS ── */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold">Step 4 of 7</span>
                      <h3 className="font-display text-2xl sm:text-3xl text-[var(--royal-forest)] font-bold mt-1">
                        Where would you like to explore?
                      </h3>
                      <p className="text-sm text-[var(--royal-muted)] mt-1">
                        Choose places you have in mind, or select "Not sure — recommend for me".
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 max-h-[380px] overflow-y-auto pr-1">
                      {DESTINATIONS.map((dest) => {
                        const isSelected = formData.destinations.includes(dest);
                        const isRecommend = dest === 'Not sure — recommend for me';
                        return (
                          <div
                            key={dest}
                            onClick={() => handleDestinationToggle(dest)}
                            className={`px-3.5 py-3 rounded-xl text-xs sm:text-sm font-medium cursor-pointer transition-all duration-200 text-center select-none flex items-center justify-center gap-1.5 border ${
                              isRecommend ? 'col-span-2 sm:col-span-3 font-semibold py-3.5' : ''
                            } ${
                              isSelected
                                ? 'bg-[#123B2A] text-white border-[#123B2A] shadow-sm'
                                : isRecommend
                                ? 'bg-[var(--royal-gold)]/10 text-[var(--royal-forest)] border-[var(--royal-gold)] hover:bg-[var(--royal-gold)]/20'
                                : 'bg-[#FAF8F5] border-[var(--royal-sand)] text-[var(--royal-ink)] hover:border-[var(--royal-gold)] hover:bg-white'
                            }`}
                          >
                            <span>{dest}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[var(--royal-gold)] shrink-0" />}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 5: ACCOMMODATION ── */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold">Step 5 of 7</span>
                      <h3 className="font-display text-2xl sm:text-3xl text-[var(--royal-forest)] font-bold mt-1">
                        Accommodation Preference
                      </h3>
                      <p className="text-sm text-[var(--royal-muted)] mt-1">
                        Let us know what tier of stays you envision.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      {ACCOMMODATIONS.map((acc) => {
                        const isSelected = formData.accommodation === acc.id;
                        return (
                          <div
                            key={acc.id}
                            onClick={() => setFormData({ ...formData, accommodation: acc.id })}
                            className={`p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-200 border flex items-center justify-between select-none ${
                              isSelected
                                ? 'bg-[#123B2A] text-white border-[#123B2A] shadow-md'
                                : 'bg-[#FAF8F5] border-[var(--royal-sand)] hover:border-[var(--royal-gold)] hover:bg-white'
                            }`}
                          >
                            <div className="pr-4">
                              <h4 className={`font-display font-bold text-base sm:text-lg ${isSelected ? 'text-white' : 'text-[var(--royal-forest)]'}`}>
                                {acc.title}
                              </h4>
                              <p className={`text-xs sm:text-sm mt-0.5 ${isSelected ? 'text-white/80' : 'text-[var(--royal-muted)]'}`}>
                                {acc.desc}
                              </p>
                            </div>
                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'bg-[var(--royal-gold)] border-[var(--royal-gold)] text-[#123B2A]'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 6: FLEET / TRANSPORTATION ── */}
                {step === 6 && (
                  <motion.div
                    key="step6"
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold">Step 6 of 7</span>
                      <h3 className="font-display text-2xl sm:text-3xl text-[var(--royal-forest)] font-bold mt-1">
                        Select Your Private Chauffeur Vehicle
                      </h3>
                      <p className="text-sm text-[var(--royal-muted)] mt-1">
                        All vehicles include comprehensive passenger insurance, full air-conditioning, fuel, tolls, and licensed English-speaking driver.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {TRANSPORTS.map((trans) => {
                        const isSelected = formData.transportation === trans.id;
                        return (
                          <div
                            key={trans.id}
                            onClick={() => setFormData({ ...formData, transportation: trans.id })}
                            className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border flex flex-col justify-between select-none ${
                              isSelected
                                ? 'bg-[#123B2A] text-white border-[#123B2A] shadow-md'
                                : 'bg-[#FAF8F5] border-[var(--royal-sand)] hover:border-[var(--royal-gold)] hover:bg-white'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className={`font-display font-bold text-base ${isSelected ? 'text-white' : 'text-[var(--royal-forest)]'}`}>
                                  {trans.title}
                                </h4>
                                <span className={`inline-block text-[11px] font-semibold mt-1 px-2 py-0.5 rounded-full ${
                                  isSelected ? 'bg-white/15 text-[var(--royal-gold)]' : 'bg-[#0D2C20]/5 text-[var(--royal-forest)]'
                                }`}>
                                  {trans.capacity}
                                </span>
                              </div>
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'bg-[var(--royal-gold)] border-[var(--royal-gold)] text-[#123B2A]'
                                  : 'border-gray-300 bg-white'
                              }`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </div>
                            <p className={`text-xs mt-2 ${isSelected ? 'text-white/80' : 'text-[var(--royal-muted)]'}`}>
                              {trans.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 7: SPECIAL REQUESTS ── */}
                {step === 7 && (
                  <motion.div
                    key="step7"
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold">Step 7 of 7</span>
                      <h3 className="font-display text-2xl sm:text-3xl text-[var(--royal-forest)] font-bold mt-1">
                        Any Special Requests or Preferences?
                      </h3>
                      <p className="text-sm text-[var(--royal-muted)] mt-1">
                        Tell us about special occasions, dietary restrictions, preferred flight timings, or favorite activities.
                      </p>
                    </div>

                    <div className="pt-2">
                      <textarea
                        value={formData.specialRequest}
                        onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                        placeholder="E.g., We are celebrating our 10th anniversary, prefer slow-paced mornings, scenic train tickets from Kandy to Ella, and vegetarian dining options."
                        className="w-full min-h-[140px] border border-[var(--royal-sand)] rounded-2xl p-4 sm:p-5 focus:outline-none focus:border-[var(--royal-gold)] focus:ring-2 focus:ring-[var(--royal-gold)]/20 transition-all resize-y text-[var(--royal-ink)] bg-[#FAF8F5] placeholder-[var(--royal-muted)]/70 text-sm leading-relaxed"
                      />
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 8: SUMMARY & DIRECT SUBMISSION ── */}
                {step === 8 && (
                  <motion.div
                    key="step8"
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[var(--royal-gold)]/20 text-[var(--royal-forest)] flex items-center justify-center mx-auto mb-2 border border-[var(--royal-gold)]/30">
                        <Sparkles className="w-6 h-6 text-[var(--royal-gold)]" />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl text-[var(--royal-forest)] font-bold">
                        Your Tailor-Made Journey Summary
                      </h3>
                      <p className="text-sm text-[var(--royal-muted)] mt-1">
                        Review your details below and send your inquiry to our team via WhatsApp for an immediate response.
                      </p>
                    </div>

                    <div className="bg-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-[var(--royal-sand)] space-y-4 text-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-[var(--royal-sand)]">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold block">Travel Dates</span>
                          <span className="font-semibold text-[var(--royal-ink)]">
                            {formData.arrivalDate || 'Not specified'} to {formData.departureDate || 'Not specified'}
                          </span>
                          {getDuration() && <span className="block text-xs text-[var(--royal-muted)] mt-0.5">{getDuration()}</span>}
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold block">Travel Party</span>
                          <span className="font-semibold text-[var(--royal-ink)]">
                            {formData.adults} Adults{formData.children > 0 ? `, ${formData.children} Children` : ''}{formData.infants > 0 ? `, ${formData.infants} Infants` : ''}
                          </span>
                        </div>
                      </div>

                      <div className="pb-3 border-b border-[var(--royal-sand)]">
                        <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold block mb-1">Interests</span>
                        <div className="flex flex-wrap gap-1.5">
                          {formData.interests.length > 0 ? (
                            formData.interests.map((int) => (
                              <span key={int} className="bg-white border border-[var(--royal-sand)] text-xs px-2.5 py-1 rounded-full text-[var(--royal-ink)]">
                                {int}
                              </span>
                            ))
                          ) : (
                            <span className="text-[var(--royal-muted)] italic">Open to expert recommendations</span>
                          )}
                        </div>
                      </div>

                      <div className="pb-3 border-b border-[var(--royal-sand)]">
                        <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold block mb-1">Places to Visit</span>
                        <div className="flex flex-wrap gap-1.5">
                          {formData.destinations.length > 0 ? (
                            formData.destinations.map((dst) => (
                              <span key={dst} className="bg-white border border-[var(--royal-sand)] text-xs px-2.5 py-1 rounded-full text-[var(--royal-ink)]">
                                {dst}
                              </span>
                            ))
                          ) : (
                            <span className="text-[var(--royal-muted)] italic">To be curated by Royal Classic Tours</span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-[var(--royal-sand)]">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold block">Accommodation</span>
                          <span className="font-semibold text-[var(--royal-ink)]">
                            {formData.accommodation || 'Not specified'}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold block">Transportation</span>
                          <span className="font-semibold text-[var(--royal-ink)]">
                            {formData.transportation || 'Recommend appropriate vehicle'}
                          </span>
                        </div>
                      </div>

                      {formData.specialRequest && (
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold block mb-1">Special Notes</span>
                          <p className="text-xs text-[var(--royal-muted)] leading-relaxed italic">
                            "{formData.specialRequest}"
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={createWhatsAppLink(getWhatsAppMessage())}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                      >
                        <FaWhatsapp className="text-xl" />
                        <span>Send to WhatsApp for Instant Quote</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setStep(1);
                          setDirection(-1);
                        }}
                        className="text-xs text-[var(--royal-muted)] hover:text-[var(--royal-forest)] underline tracking-wider uppercase py-2 cursor-pointer transition-colors"
                      >
                        Edit Details
                      </button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Step Controls Footer */}
            {step < 8 && (
              <div className="p-5 sm:px-10 sm:py-5 flex items-center justify-between border-t border-[var(--royal-sand)] bg-[#FAF8F5] shrink-0">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--royal-sand)] bg-white hover:bg-gray-50 text-[var(--royal-forest)] font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#123B2A] hover:bg-[var(--royal-forest-light)] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer ml-auto hover:-translate-y-0.5"
                >
                  <span>{step === 7 ? 'Review Journey' : 'Continue'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default CustomizeTour;
