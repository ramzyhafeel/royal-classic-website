import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { createWhatsAppLink } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import JourneyLine from '../components/ui/JourneyLine';

const INTERESTS = [
  'Culture', 'Wildlife', 'Beaches', 'Mountains', 'Ayurveda', 
  'Adventure', 'Food', 'Photography', 'Surfing', 'Hiking', 
  'Relaxation', 'Honeymoon'
];

const DESTINATIONS = [
  'Colombo', 'Negombo', 'Sigiriya', 'Dambulla', 'Kandy', 
  'Nuwara Eliya', 'Ella', 'Yala', 'Galle', 'Mirissa', 
  'Bentota', 'Trincomalee', 'Anuradhapura', 'Polonnaruwa', 'Arugam Bay',
  'Not sure — recommend for me'
];

const ACCOMMODATIONS = [
  'Budget', 'Comfort / 3 Star', '4 Star', 'Luxury / 5 Star', 'Already booked accommodation'
];

const TRANSPORTS = [
  'Sedan', 'SUV', 'Private Van', 'Group Van', 'Recommend for me'
];

const CustomizeTour = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    adults: 1,
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
    setStep(s => Math.min(s + 1, 8));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(s => Math.max(s - 1, 1));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleDestinationToggle = (dest) => {
    setFormData(prev => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter(d => d !== dest)
        : [...prev.destinations, dest]
    }));
  };

  const updateCounter = (field, delta, min, max) => {
    setFormData(prev => ({
      ...prev,
      [field]: Math.min(Math.max(prev[field] + delta, min), max)
    }));
  };

  const getDuration = () => {
    if (!formData.arrivalDate || !formData.departureDate) return '';
    const start = new Date(formData.arrivalDate);
    const end = new Date(formData.departureDate);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? `${diff} Days` : '';
  };

  const getWhatsAppMessage = () => {
    const { arrivalDate, departureDate, adults, children, infants, interests, destinations, accommodation, transportation, specialRequest } = formData;
    
    let message = `Hello Royal Classic Tours,

I would like help planning a private Sri Lanka journey.

Travel Dates:
${arrivalDate || 'Not specified'} – ${departureDate || 'Not specified'}

Guests:
${adults} Adults${children > 0 ? ', ' + children + ' Children' : ''}${infants > 0 ? ', ' + infants + ' Infants' : ''}

Interests:
${interests.length > 0 ? interests.join(', ') : 'None selected'}

Destinations:
${destinations.length > 0 ? destinations.join(', ') : 'None selected'}

Accommodation:
${accommodation || 'Not specified'}

Transportation:
${transportation || 'Not specified'}
`;

    if (specialRequest) {
      message += `\nAdditional Notes:\n${specialRequest}\n`;
    }

    message += `\nPlease send me a suggested itinerary and quotation.\n\nThank you.`;

    return message;
  };

  const variants = {
    initial: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' }
    })
  };

  return (
    <Layout>
      <section className="py-16 sm:py-24 max-w-2xl mx-auto container-max min-h-[70vh]">
        <div className="text-center mb-8">
          <h1 className="font-display text-2xl sm:text-3xl text-royal-forest font-bold mb-2">Customize Your Sri Lanka Journey</h1>
          <div className="flex items-center justify-center gap-4">
            <JourneyLine className="w-16 hidden sm:block" />
            <p className="text-royal-muted text-sm uppercase tracking-wider">Step {step < 8 ? step : 7} of 7</p>
            <JourneyLine className="w-16 hidden sm:block" />
          </div>
        </div>

        {step < 8 && (
          <div className="w-full h-1 bg-royal-sand rounded-full overflow-hidden mb-8 sm:mb-12">
            <motion.div 
              className="h-full bg-royal-gold"
              initial={{ width: 0 }}
              animate={{ width: `${(step / 7) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-royal-sand flex flex-col min-h-[400px]">
          <div className="p-6 sm:p-10 flex-grow overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  <h2 className="font-display text-xl sm:text-2xl text-royal-forest mb-2">When are you visiting?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-royal-ink mb-2">Arrival Date</label>
                      <input 
                        type="date" 
                        value={formData.arrivalDate}
                        onChange={(e) => setFormData({...formData, arrivalDate: e.target.value})}
                        className="w-full border border-royal-sand rounded-lg px-4 py-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors text-royal-ink bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-royal-ink mb-2">Departure Date</label>
                      <input 
                        type="date" 
                        value={formData.departureDate}
                        onChange={(e) => setFormData({...formData, departureDate: e.target.value})}
                        className="w-full border border-royal-sand rounded-lg px-4 py-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors text-royal-ink bg-white"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  <h2 className="font-display text-xl sm:text-2xl text-royal-forest mb-2">Who's travelling?</h2>
                  <div className="space-y-4">
                    {[
                      { label: 'Adults', field: 'adults', desc: 'Ages 12 or above', min: 1, max: 20 },
                      { label: 'Children', field: 'children', desc: 'Ages 2-11', min: 0, max: 10 },
                      { label: 'Infants', field: 'infants', desc: 'Under 2', min: 0, max: 5 }
                    ].map(({ label, field, desc, min, max }) => (
                      <div key={field} className="flex items-center justify-between p-4 border border-royal-sand rounded-xl bg-white">
                        <div>
                          <p className="font-medium text-royal-ink">{label}</p>
                          <p className="text-sm text-royal-muted">{desc}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => updateCounter(field, -1, min, max)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-royal-sand text-royal-forest hover:bg-royal-gold hover:text-white transition-colors cursor-pointer"
                          >
                            -
                          </button>
                          <span className="w-4 text-center font-medium text-royal-ink">{formData[field]}</span>
                          <button 
                            onClick={() => updateCounter(field, 1, min, max)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-royal-sand text-royal-forest hover:bg-royal-gold hover:text-white transition-colors cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  <h2 className="font-display text-xl sm:text-2xl text-royal-forest mb-2">What would you love to experience?</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {INTERESTS.map(interest => {
                      const isSelected = formData.interests.includes(interest);
                      return (
                        <div 
                          key={interest}
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-4 py-3 rounded-[var(--radius)] text-sm font-medium cursor-pointer transition-all text-center select-none ${
                            isSelected 
                              ? 'bg-[#123B2A] text-white' 
                              : 'bg-white border border-[rgba(18,59,42,0.1)] text-[#17211B] hover:border-royal-gold'
                          }`}
                        >
                          {interest}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  <h2 className="font-display text-xl sm:text-2xl text-royal-forest mb-2">Where would you like to go?</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {DESTINATIONS.map(dest => {
                      const isSelected = formData.destinations.includes(dest);
                      const isRecommend = dest === 'Not sure — recommend for me';
                      return (
                        <div 
                          key={dest}
                          onClick={() => handleDestinationToggle(dest)}
                          className={`px-4 py-3 rounded-[var(--radius)] text-sm font-medium cursor-pointer transition-all text-center flex items-center justify-center select-none ${
                            isSelected 
                              ? 'bg-[#123B2A] text-white' 
                              : 'bg-white border text-[#17211B] hover:border-royal-gold ' + (isRecommend ? 'border-royal-gold italic col-span-2 sm:col-span-3 md:col-span-4' : 'border-[rgba(18,59,42,0.1)]')
                          }`}
                        >
                          {dest}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  key="step5"
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  <h2 className="font-display text-xl sm:text-2xl text-royal-forest mb-2">Accommodation preference</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ACCOMMODATIONS.map(acc => {
                      const isSelected = formData.accommodation === acc;
                      return (
                        <div 
                          key={acc}
                          onClick={() => setFormData({...formData, accommodation: acc})}
                          className={`px-4 py-4 rounded-[var(--radius)] text-sm font-medium cursor-pointer transition-all flex items-center justify-between select-none ${
                            isSelected 
                              ? 'bg-[#123B2A] text-white' 
                              : 'bg-white border border-[rgba(18,59,42,0.1)] text-[#17211B] hover:border-royal-gold'
                          }`}
                        >
                          <span>{acc}</span>
                          {isSelected && <Check className="w-5 h-5 text-royal-gold" />}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 6 && (
                <motion.div
                  key="step6"
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  <h2 className="font-display text-xl sm:text-2xl text-royal-forest mb-2">Transportation</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {TRANSPORTS.map(trans => {
                      const isSelected = formData.transportation === trans;
                      return (
                        <div 
                          key={trans}
                          onClick={() => setFormData({...formData, transportation: trans})}
                          className={`px-4 py-4 rounded-[var(--radius)] text-sm font-medium cursor-pointer transition-all flex items-center justify-between select-none ${
                            isSelected 
                              ? 'bg-[#123B2A] text-white' 
                              : 'bg-white border border-[rgba(18,59,42,0.1)] text-[#17211B] hover:border-royal-gold'
                          }`}
                        >
                          <span>{trans}</span>
                          {isSelected && <Check className="w-5 h-5 text-royal-gold" />}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 7 && (
                <motion.div
                  key="step7"
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  <h2 className="font-display text-xl sm:text-2xl text-royal-forest mb-2">Anything else we should know?</h2>
                  <div>
                    <textarea
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({...formData, specialRequest: e.target.value})}
                      placeholder="We're travelling for our honeymoon and would love wildlife, beaches and a scenic train journey."
                      className="w-full min-h-[120px] border border-royal-sand rounded-xl p-4 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors resize-y text-royal-ink bg-white placeholder-royal-muted"
                    />
                  </div>
                </motion.div>
              )}

              {step === 8 && (
                <motion.div
                  key="step8"
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  <h2 className="font-display text-xl sm:text-2xl text-royal-forest text-center mb-4">Review Your Plan</h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-royal-ivory p-4 rounded-xl border border-royal-sand">
                        <p className="text-xs text-royal-gold uppercase tracking-wider mb-1">Travel Dates</p>
                        <p className="text-royal-ink font-medium">
                          {formData.arrivalDate ? formData.arrivalDate : 'Not specified'} 
                          {formData.departureDate ? ` to ${formData.departureDate}` : ''}
                        </p>
                        {getDuration() && <p className="text-sm text-royal-muted mt-1">{getDuration()}</p>}
                      </div>
                      <div className="bg-royal-ivory p-4 rounded-xl border border-royal-sand">
                        <p className="text-xs text-royal-gold uppercase tracking-wider mb-1">Guests</p>
                        <p className="text-royal-ink font-medium">
                          {formData.adults} Adults
                          {formData.children > 0 && `, ${formData.children} Children`}
                          {formData.infants > 0 && `, ${formData.infants} Infants`}
                        </p>
                      </div>
                    </div>

                    <div className="bg-royal-ivory p-4 rounded-xl border border-royal-sand">
                      <p className="text-xs text-royal-gold uppercase tracking-wider mb-1">Interests</p>
                      <p className="text-royal-ink font-medium">
                        {formData.interests.length > 0 ? formData.interests.join(', ') : 'None selected'}
                      </p>
                    </div>

                    <div className="bg-royal-ivory p-4 rounded-xl border border-royal-sand">
                      <p className="text-xs text-royal-gold uppercase tracking-wider mb-1">Destinations</p>
                      <p className="text-royal-ink font-medium">
                        {formData.destinations.length > 0 ? formData.destinations.join(', ') : 'None selected'}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-royal-ivory p-4 rounded-xl border border-royal-sand">
                        <p className="text-xs text-royal-gold uppercase tracking-wider mb-1">Accommodation</p>
                        <p className="text-royal-ink font-medium">
                          {formData.accommodation || 'Not specified'}
                        </p>
                      </div>
                      <div className="bg-royal-ivory p-4 rounded-xl border border-royal-sand">
                        <p className="text-xs text-royal-gold uppercase tracking-wider mb-1">Transportation</p>
                        <p className="text-royal-ink font-medium">
                          {formData.transportation || 'Not specified'}
                        </p>
                      </div>
                    </div>

                    {formData.specialRequest && (
                      <div className="bg-royal-ivory p-4 rounded-xl border border-royal-sand">
                        <p className="text-xs text-royal-gold uppercase tracking-wider mb-1">Additional Notes</p>
                        <p className="text-royal-ink font-medium whitespace-pre-wrap">
                          {formData.specialRequest}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col gap-4 items-center">
                    <a 
                      href={createWhatsAppLink(getWhatsAppMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto text-base sm:text-lg py-3 px-8"
                    >
                      <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                      Send My Journey to WhatsApp
                    </a>
                    <button 
                      onClick={() => {
                        setStep(1);
                        setDirection(-1);
                        setFormData({
                          arrivalDate: '', departureDate: '', adults: 1, children: 0, infants: 0,
                          interests: [], destinations: [], accommodation: '', transportation: '', specialRequest: ''
                        });
                      }}
                      className="text-royal-muted hover:text-royal-ink underline text-sm transition-colors cursor-pointer"
                    >
                      Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {step < 8 && (
            <div className="p-6 sm:px-10 sm:py-6 flex items-center justify-between border-t border-royal-sand bg-royal-ivory/30 shrink-0">
              {step > 1 ? (
                <button 
                  onClick={prevStep}
                  className="btn-secondary flex items-center gap-2 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              ) : <div></div>}
              
              <button 
                onClick={nextStep}
                className="btn-primary flex items-center gap-2 ml-auto cursor-pointer"
              >
                {step === 7 ? 'Review Plan' : 'Next'}
                {step !== 7 && <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CustomizeTour;
