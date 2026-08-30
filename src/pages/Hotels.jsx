import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/seo/Seo';
import { hotels, hotelCategories } from '../data/hotels';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

const Hotels = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredHotels = activeCategory === 'All' 
    ? hotels 
    : hotels.filter(hotel => hotel.category === activeCategory);

  return (
    <Layout>
      <Seo 
        title="Curated Accommodation | Royal Classic Tours" 
        description="Tell us how you like to travel and suitable accommodation options can be included in your personalized Sri Lanka journey." 
      />
      
      <PageHero
        title="Sleep somewhere unforgettable."
        subtitle="Tell us how you like to travel and suitable accommodation options can be included in your personalized Sri Lanka journey."
        image="/images/hotels/hotels.jpg"
      />

      {/* Filters */}
      <section className="py-8 bg-[var(--royal-ivory)] border-b border-[var(--royal-sand)]">
        <div className="container mx-auto px-4 max-w-7xl flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => setActiveCategory('All')}
              className={`text-sm md:text-base pb-1 transition-colors duration-300 ${
                activeCategory === 'All'
                  ? 'text-[var(--royal-gold)] border-b-2 border-[var(--royal-gold)] font-semibold'
                  : 'text-[var(--royal-muted)] hover:text-[var(--royal-forest)]'
              }`}
            >
              All Types
            </button>
            {hotelCategories && hotelCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm md:text-base pb-1 transition-colors duration-300 ${
                  activeCategory === category
                    ? 'text-[var(--royal-gold)] border-b-2 border-[var(--royal-gold)] font-semibold'
                    : 'text-[var(--royal-muted)] hover:text-[var(--royal-forest)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Grid */}
      <section className="py-16 md:py-24 bg-[var(--royal-white)]">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-[var(--royal-muted)] text-lg">
              Below is a selection of properties we frequently recommend. Whether you prefer boutique luxury, eco-lodges, or comfortable coastal resorts, we will match the perfect accommodation to your preferences and budget when designing your holiday.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels && filteredHotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-[var(--royal-white)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--royal-sand)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--royal-white)]/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--royal-gold)] rounded-sm">
                    {hotel.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-2xl text-[var(--royal-forest)] mb-1">{hotel.name}</h3>
                  <p className="text-sm text-[var(--royal-muted)] mb-4 pb-4 border-b border-[var(--royal-sand)] flex items-center gap-1">
                    <svg className="w-4 h-4 text-[var(--royal-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {hotel.destination}
                  </p>
                  
                  <div className="mb-6 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {hotel.facilities && hotel.facilities.slice(0, 4).map((facility, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-[var(--royal-ivory)] text-[var(--royal-muted)] border border-[var(--royal-sand)] rounded-sm">
                          {facility}
                        </span>
                      ))}
                      {hotel.facilities && hotel.facilities.length > 4 && (
                        <span className="text-xs px-2 py-1 bg-[var(--royal-ivory)] text-[var(--royal-muted)] border border-[var(--royal-sand)] rounded-sm">
                          +{hotel.facilities.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {hotel.demo && (
                    <div className="mb-4 text-xs italic text-[var(--royal-muted)]">
                      *Sample accommodation property
                    </div>
                  )}

                  <div className="flex flex-col gap-3 mt-auto">
                    <a
                      href={createWhatsAppLink(`Hello! I'm interested in including ${hotel.name} (${hotel.destination}) in my holiday itinerary.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 bg-[var(--royal-forest)] text-white hover:bg-[var(--royal-forest-dark)] transition-colors duration-300 flex items-center justify-center gap-2 rounded text-sm font-semibold"
                    >
                      <FaWhatsapp className="text-base" />
                      Include in My Journey
                    </a>
                    <a
                      href={createWhatsAppLink(`Hi! Could you provide more details about staying at ${hotel.name}?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 text-[var(--royal-forest)] hover:text-[var(--royal-gold)] transition-colors duration-300 flex items-center justify-center text-sm font-medium"
                    >
                      Ask About This Stay
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hotels;
