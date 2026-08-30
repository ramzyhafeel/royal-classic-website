import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import JourneyLine from '../ui/JourneyLine';
import { createWhatsAppLink, whatsappMessages } from '../../utils/whatsapp';

const JourneyChoice = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--royal-ink)] mb-4"
          >
            How would you like to travel?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[var(--royal-muted)] max-w-3xl mx-auto text-base sm:text-lg"
          >
            Already planned your Sri Lanka holiday? Hire a private vehicle and driver. Need everything arranged? Let Royal Classic Tours plan the complete journey.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* LEFT SIDE - TRANSPORT ONLY */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#EEE7DA] p-10 lg:p-16 flex flex-col justify-center min-h-[500px]"
          >
            <div className="max-w-xl mx-auto lg:ml-auto lg:mr-8 w-full">
              <span className="text-[#C5A35A] uppercase tracking-widest text-xs font-semibold block mb-4">
                TRANSPORT ONLY
              </span>
              
              <div className="mb-6 w-10">
                <JourneyLine orientation="horizontal" length="40px" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[var(--royal-ink)] mb-6 leading-tight">
                <span className="block">Private Vehicle.</span>
                <span className="block italic font-light">Professional Driver.</span>
              </h3>

              <p className="text-[var(--royal-muted)] mb-8">
                Already booked your hotels and planned your itinerary? Leave the driving to us. Travel across Sri Lanka privately in a comfortable car or van with a professional driver.
              </p>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-[var(--royal-ink)] mb-10">
                {['Airport transfers', 'Private cars', 'Private vans', 'Multi-day transport', 'Hotel transfers', 'Custom routes'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-[#C5A35A] text-[10px]">&bull;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <Link to="/transportation" className="btn-primary">
                  Explore Transportation
                </Link>
                <a 
                  href={createWhatsAppLink(whatsappMessages.transportation)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[var(--royal-ink)] hover:text-[#C5A35A] transition-colors"
                >
                  Request Transport Quote &rarr;
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - COMPLETE PRIVATE HOLIDAY */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#123B2A] p-10 lg:p-16 flex flex-col justify-center min-h-[500px] text-white"
          >
            <div className="max-w-xl mx-auto lg:mr-auto lg:ml-8 w-full">
              <span className="text-[#C5A35A] uppercase tracking-widest text-xs font-semibold block mb-4">
                COMPLETE PRIVATE HOLIDAY
              </span>
              
              <div className="mb-6 w-10">
                <JourneyLine orientation="horizontal" length="40px" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white mb-6 leading-tight">
                <span className="block">Your entire Sri Lanka journey.</span>
                <span className="block italic font-light">Designed around you.</span>
              </h3>

              <p className="text-white/80 mb-8">
                Share your travel dates and interests. Royal Classic Tours can help arrange your route, private vehicle, driver, accommodation and experiences from arrival to departure.
              </p>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-white/90 mb-10">
                {['Customized itinerary', 'Private transportation', 'Airport transfers', 'Hotel options', 'Attractions', 'Tailor-made experiences'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-[#C5A35A] text-[10px]">&bull;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <Link to="/packages" className="btn-hero-primary px-6 py-3">
                  Explore Tour Packages
                </Link>
                <Link 
                  to="/customize-tour" 
                  className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
                >
                  Customize My Journey &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneyChoice;
