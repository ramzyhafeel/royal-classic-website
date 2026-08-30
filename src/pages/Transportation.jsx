import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPlaneArrival, FaMapMarkedAlt, FaCalendarDay, FaRoute, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import JourneyLine from '../components/ui/JourneyLine';
import Seo from '../components/seo/Seo';
import { vehicles } from '../data/vehicles';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

// Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[var(--royal-sand)] py-4">
      <button
        className="w-full flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="font-display text-lg text-[var(--royal-forest)] group-hover:text-[var(--royal-gold)] transition-colors">{question}</span>
        <span className="text-[var(--royal-gold)] ml-4">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-[var(--royal-muted)] text-sm md:text-base leading-relaxed pr-8">
          {answer}
        </div>
      )}
    </div>
  );
};

const Transportation = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    {
      icon: <FaPlaneArrival className="text-3xl text-[var(--royal-gold)] mb-4" />,
      title: "Airport Transfers",
      desc: "Reliable pickup and drop-off from Bandaranaike International Airport directly to your accommodation."
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl text-[var(--royal-gold)] mb-4" />,
      title: "Point-to-Point",
      desc: "Comfortable travel between any two destinations in Sri Lanka, taking the most scenic routes."
    },
    {
      icon: <FaCalendarDay className="text-3xl text-[var(--royal-gold)] mb-4" />,
      title: "Day Excursions",
      desc: "Full or half-day vehicle and driver hire for sightseeing, shopping, or exploring nearby attractions."
    },
    {
      icon: <FaRoute className="text-3xl text-[var(--royal-gold)] mb-4" />,
      title: "Multi-Day Hire",
      desc: "Your dedicated driver and vehicle for the entire duration of your holiday, offering total flexibility."
    }
  ];

  const faqs = [
    {
      q: "Are fuel and highway tolls included?",
      a: "Yes, when you hire our vehicles with a driver, all fuel costs, highway tolls, and parking fees are typically included in the quoted price unless explicitly stated otherwise."
    },
    {
      q: "Does the driver speak English?",
      a: "Absolutely. All our chauffeur guides are fluent in English, deeply knowledgeable about Sri Lankan culture and history, and highly experienced in navigating local roads."
    },
    {
      q: "Is driver accommodation provided by us?",
      a: "In most cases, hotels provide separate accommodation for tourist drivers. If a hotel does not provide this facility, a nominal daily allowance is added to cover the driver's accommodation and meals. We will clarify this during the booking process."
    },
    {
      q: "Can I drive the vehicle myself?",
      a: "For safety, insurance, and quality assurance reasons, we exclusively offer chauffeur-driven vehicles. Navigating Sri Lankan traffic and unfamiliar roads can be challenging, so we provide an expert driver to ensure your journey is stress-free."
    }
  ];

  return (
    <Layout>
      <Seo 
        title="Private Transportation in Sri Lanka | Royal Classic Tours" 
        description="Hire a private vehicle and English-speaking chauffeur guide for your Sri Lanka holiday. Airport transfers, day trips, and multi-day tours." 
      />
      
      <PageHero
        title="Sri Lanka, with your own private driver."
        subtitle="Already planned your holiday? Let us take care of every kilometre."
        image="/images/transport/scenic-drive-sri-lanka.jpg"
      />

      {/* Section 1 - Airport Transfers */}
      <section className="py-20 md:py-32 bg-[var(--royal-white)]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-[var(--royal-forest)] mb-6">Your journey begins at arrivals.</h2>
            <p className="text-[var(--royal-muted)] text-lg mb-16 max-w-2xl mx-auto">
              Private transportation can be arranged from Bandaranaike International Airport to your first destination, ensuring a smooth transition from flight to holiday.
            </p>
          </motion.div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[var(--royal-gold)]/30 -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              {[
                { step: "01", title: "Flight Details", desc: "Share your arrival information." },
                { step: "02", title: "Confirmation", desc: "Receive instant booking confirmation." },
                { step: "03", title: "Meet & Greet", desc: "Your driver waits at the arrivals hall." },
                { step: "04", title: "Travel", desc: "Relax in air-conditioned comfort." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--royal-ivory)] border border-[var(--royal-gold)] text-[var(--royal-gold)] flex items-center justify-center font-display text-xl mb-4 z-10 shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[var(--royal-ink)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--royal-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <a
              href={createWhatsAppLink("Hello! I would like to arrange an airport transfer.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[var(--royal-forest)] text-white hover:bg-[var(--royal-forest-dark)] transition-colors duration-300 rounded"
            >
              <FaWhatsapp className="text-xl" />
              Arrange Airport Pickup
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 - Services Grid */}
      <section className="py-20 bg-[var(--royal-ivory)] border-y border-[var(--royal-sand)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-[var(--royal-forest)] mb-4">Flexible Travel Solutions</h2>
            <p className="text-[var(--royal-muted)] max-w-2xl mx-auto">From quick transfers to comprehensive multi-day hires, our transportation services adapt to your itinerary.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--royal-white)] p-8 rounded-xl border border-[var(--royal-sand)] text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="font-display text-xl text-[var(--royal-forest)] mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--royal-muted)]">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Vehicle Options */}
      <section className="py-20 md:py-32 bg-[var(--royal-white)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-[var(--royal-forest)] mb-4">Choose your vehicle.</h2>
            <p className="text-[var(--royal-muted)] max-w-2xl mx-auto">Our modern, air-conditioned fleet is maintained to the highest safety and comfort standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="flex flex-col bg-[var(--royal-ivory)] rounded-xl overflow-hidden border border-[var(--royal-sand)]">
                <div className="aspect-[16/9] bg-white relative overflow-hidden flex items-center justify-center p-4">
                  <img src={vehicle.image} alt={vehicle.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-2xl text-[var(--royal-forest)]">{vehicle.name}</h3>
                    <div className="text-right text-sm text-[var(--royal-muted)]">
                      <div><span className="font-semibold text-[var(--royal-ink)]">{vehicle.passengers}</span> Passengers</div>
                      <div><span className="font-semibold text-[var(--royal-ink)]">{vehicle.luggage}</span> Luggage</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold mb-2">Features</h4>
                    <ul className="flex flex-wrap gap-x-4 gap-y-2">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="text-sm text-[var(--royal-muted)] flex items-center gap-1">
                          <span className="text-[var(--royal-forest)] text-xs">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-wider text-[var(--royal-gold)] font-semibold mb-2">Ideal For</h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.suitableFor.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-[var(--royal-sand)]/50 text-[var(--royal-muted)] text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-[var(--royal-sand)]">
                    <a
                      href={createWhatsAppLink(whatsappMessages.vehicleInquiry ? whatsappMessages.vehicleInquiry(vehicle.name) : `Hello! I'm interested in booking the ${vehicle.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 border border-[var(--royal-forest)] text-[var(--royal-forest)] hover:bg-[var(--royal-forest)] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 rounded"
                    >
                      <FaWhatsapp className="text-lg" />
                      Request This Vehicle
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - FAQ */}
      <section className="py-20 bg-[var(--royal-ivory)] border-t border-[var(--royal-sand)]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-[var(--royal-forest)] mb-4">Transportation FAQs</h2>
          </div>
          
          <div className="bg-[var(--royal-white)] p-6 md:p-8 rounded-xl border border-[var(--royal-sand)]">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transportation;
