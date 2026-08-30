import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import { siteConfig } from '../data/site';
import { createWhatsAppLink } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    whatsapp: '',
    email: '',
    arrival: '',
    departure: '',
    travellers: '',
    service: 'Complete Private Tour',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    return `*New Inquiry via Website*
Name: ${formData.name}
Country: ${formData.country}
Email: ${formData.email}
Dates: ${formData.arrival} to ${formData.departure}
Travellers: ${formData.travellers}
Interested in: ${formData.service}
Message: ${formData.message}`;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    window.open(createWhatsAppLink(msg), '_blank');
  };

  return (
    <Layout>
      <PageHero 
        title="Let's plan your Sri Lanka journey." 
        image="/images/hero/hero5.jpg" 
      />

      <section className="section-padding bg-royal-ivory">
        <div className="container-custom">
          
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <motion.a 
              href={createWhatsAppLink("Hi, I'd like to plan a trip to Sri Lanka.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-[var(--radius)] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-royal-ivory flex items-center justify-center text-royal-gold mb-4 group-hover:bg-royal-gold group-hover:text-white transition-colors">
                <FaWhatsapp size={24} />
              </div>
              <h3 className="font-display text-lg text-royal-forest mb-1">WhatsApp</h3>
              <p className="text-royal-muted text-sm">{siteConfig.contact.whatsappDisplay || siteConfig.contact.whatsapp}</p>
            </motion.a>

            <motion.a 
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="bg-white p-6 rounded-[var(--radius)] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-royal-ivory flex items-center justify-center text-royal-gold mb-4 group-hover:bg-royal-forest group-hover:text-white transition-colors">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg text-royal-forest mb-1">Phone</h3>
              <p className="text-royal-muted text-sm">{siteConfig.contact.phoneDisplay || siteConfig.contact.phone}</p>
            </motion.a>

            <motion.a 
              href={`mailto:${siteConfig.contact.email}`}
              className="bg-white p-6 rounded-[var(--radius)] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-royal-ivory flex items-center justify-center text-royal-gold mb-4 group-hover:bg-royal-forest group-hover:text-white transition-colors">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg text-royal-forest mb-1">Email</h3>
              <p className="text-royal-muted text-sm">{siteConfig.contact.email}</p>
            </motion.a>
          </div>

          {/* Form */}
          <motion.div 
            className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-[var(--radius)] shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display text-2xl text-royal-forest mb-6 border-b border-royal-sand pb-4">Send us a message</h2>
            <form className="space-y-6" name="contact" method="POST" data-netlify="true" action="/success">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-royal-ink mb-1">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-royal-sand rounded-[var(--radius)] p-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-royal-ink mb-1">Country</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} required className="w-full bg-white border border-royal-sand rounded-[var(--radius)] p-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-royal-ink mb-1">WhatsApp Number</label>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required className="w-full bg-white border border-royal-sand rounded-[var(--radius)] p-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-royal-ink mb-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-royal-sand rounded-[var(--radius)] p-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-royal-ink mb-1">Arrival Date</label>
                  <input type="date" name="arrival" value={formData.arrival} onChange={handleChange} className="w-full bg-white border border-royal-sand rounded-[var(--radius)] p-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-royal-ink mb-1">Departure Date</label>
                  <input type="date" name="departure" value={formData.departure} onChange={handleChange} className="w-full bg-white border border-royal-sand rounded-[var(--radius)] p-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-royal-ink mb-1">Travellers</label>
                  <input type="number" min="1" name="travellers" value={formData.travellers} onChange={handleChange} className="w-full bg-white border border-royal-sand rounded-[var(--radius)] p-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-royal-ink mb-1">What do you need?</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-white border border-royal-sand rounded-[var(--radius)] p-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors">
                  <option value="Transportation Only">Transportation Only</option>
                  <option value="Complete Private Tour">Complete Private Tour</option>
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Hotel + Tour">Hotel + Tour</option>
                  <option value="Custom Journey">Custom Journey</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-royal-ink mb-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-white border border-royal-sand rounded-[var(--radius)] p-3 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-colors placeholder-gray-400" placeholder="Tell us a bit about your travel plans..."></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  type="button" 
                  onClick={handleWhatsAppSubmit}
                  className="btn-gold flex-1 flex justify-center items-center gap-2"
                >
                  <FaWhatsapp size={18} />
                  Continue on WhatsApp
                </button>
                <button 
                  type="submit" 
                  className="btn-secondary flex-1 justify-center"
                >
                  Or submit via form
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}