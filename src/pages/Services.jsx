import React from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import { services } from '../data/services';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, Car, Plane, Hotel, Sun, Compass, Camera, Landmark, Umbrella } from 'lucide-react';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

const iconMap = {
  Map,
  Car,
  Plane,
  Hotel,
  Sun,
  Compass,
  Camera,
  Landmark,
  Umbrella,
};

export default function Services() {
  const getServiceLink = (id) => {
    switch (id) {
      case 'private-tours': return '/packages';
      case 'private-transportation': return '/transportation';
      case 'airport-transfers': return '/transportation';
      case 'accommodation': return '/hotels';
      default: return '/customize-tour';
    }
  };

  return (
    <Layout>
      <PageHero 
        title="Everything you need to explore Sri Lanka." 
        subtitle="From private transportation to complete tour planning, Royal Classic Tours provides the services you need for a comfortable Sri Lanka journey." 
        image="/images/hero/hero6.jpg" 
      />

      <section className="py-14 sm:py-20 bg-[var(--royal-ivory)]">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Compass;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-[var(--border)]/70 hover:border-[var(--royal-gold)]/40"
                >
                  <Link to={getServiceLink(service.id)} className="flex flex-col h-full">
                    <div className="p-7 flex-grow flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-[var(--royal-ivory)] border border-[var(--border)] flex items-center justify-center text-[var(--royal-gold)] mb-5 group-hover:bg-[var(--royal-forest)] group-hover:text-white transition-all duration-300">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-xl text-[var(--royal-forest)] mb-2.5 group-hover:text-[var(--royal-gold)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[var(--royal-muted)] text-sm leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>
                      <div className="mt-auto pt-3 flex items-center text-xs font-semibold text-[var(--royal-forest)] group-hover:text-[var(--royal-gold)] transition-colors">
                        <span>Explore service</span>
                        <span className="ml-1.5 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </div>
                    </div>
                    {service.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden mt-auto border-t border-[var(--border)]/50">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-t border-[var(--border)]">
        <div className="container-max text-center max-w-2xl mx-auto">
          <span className="text-[var(--royal-gold)] uppercase tracking-widest text-xs font-semibold block mb-2">
            TAILOR-MADE EXPERIENCES
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--royal-forest)] mb-4">Not sure what you need?</h2>
          <p className="text-[var(--royal-muted)] mb-8 text-base sm:text-lg">
            Let our local specialists craft the perfect itinerary tailored to your dates, preferences, and pace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/customize-tour" className="btn btn-primary w-full sm:w-auto px-8 py-3.5">
              Plan My Trip
            </Link>
            <a 
              href={createWhatsAppLink(whatsappMessages.general)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold w-full sm:w-auto px-8 py-3.5"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
