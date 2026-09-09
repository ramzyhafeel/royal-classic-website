import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

export default function NotFound() {
  return (
    <Layout solidNavbar={true}>
      <section className="min-h-[75vh] pt-28 sm:pt-36 pb-20 flex items-center justify-center bg-[var(--royal-ivory)] relative overflow-hidden">
        {/* Optional subtle background pattern or destination image can go here */}
        <div className="absolute inset-0 opacity-5 bg-[url('/images/hero/hero3.jpg')] bg-cover bg-center mix-blend-luminosity"></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="font-display text-8xl md:text-9xl text-royal-gold opacity-20">404</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-royal-forest mb-4">
            Looks like this road goes somewhere else.
          </h1>
          <p className="text-royal-muted text-lg mb-10 max-w-md mx-auto">
            Let's get you back to your Sri Lanka journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link to="/" className="btn-primary w-full sm:w-auto">
              Home
            </Link>
            <Link to="/packages" className="btn-secondary w-full sm:w-auto">
              Explore Packages
            </Link>
            <a 
              href={createWhatsAppLink(whatsappMessages.general)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
