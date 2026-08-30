import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';
import { packages } from '../data/packages';
import { packageSeo } from '../utils/seoHelpers';
import JourneyLine from '../components/ui/JourneyLine';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

const PackageDetails = () => {
  const { slug } = useParams();
  const pkg = packages.find(p => p.slug === slug);

  if (!pkg) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center bg-[var(--royal-ivory)]">
          <h1 className="font-display text-4xl text-[var(--royal-forest)] mb-4">Journey not found</h1>
          <p className="text-[var(--royal-muted)] mb-8">The journey you are looking for does not exist or has been removed.</p>
          <Link
            to="/packages"
            className="px-6 py-3 bg-[var(--royal-forest)] text-white hover:bg-[var(--royal-forest-dark)] transition-colors duration-300"
          >
            Explore Journeys
          </Link>
        </div>
      </Layout>
    );
  }

  const seo = packageSeo(pkg);

  return (
    <Layout>
      <Seo {...seo} />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center py-20 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[var(--royal-gold)]/20 backdrop-blur-sm border border-[var(--royal-gold)]/30 text-[var(--royal-white)] px-4 py-1 mb-6 text-xs font-bold tracking-widest uppercase">
              {pkg.duration}
            </div>
            <h1 className="font-display text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {pkg.title}
            </h1>
            <p className="text-sm md:text-base text-white/80 uppercase tracking-widest mb-10 max-w-2xl mx-auto">
              {pkg.route.join(' → ')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={createWhatsAppLink(whatsappMessages.packageInquiry ? whatsappMessages.packageInquiry(pkg.title) : `Hello! I would like to request a quote for the ${pkg.title} package.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-[var(--royal-forest)] text-white hover:bg-[var(--royal-forest-dark)] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Request a Quote
              </a>
              <Link
                to="/customize-tour"
                className="w-full sm:w-auto px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-[var(--royal-ink)] transition-colors duration-300"
              >
                Customize This Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-[var(--royal-ivory)] border-b border-[var(--royal-sand)] py-3">
        <div className="container mx-auto px-4 max-w-5xl text-xs uppercase tracking-wider text-[var(--royal-muted)]">
          <Link to="/" className="hover:text-[var(--royal-gold)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/packages" className="hover:text-[var(--royal-gold)] transition-colors">Packages</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--royal-forest)] font-semibold">{pkg.title}</span>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-[var(--royal-white)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Overview */}
              <div className="mb-16">
                <h2 className="font-display text-3xl text-[var(--royal-forest)] mb-6">Journey Overview</h2>
                <p className="text-[var(--royal-muted)] leading-relaxed text-lg mb-8">
                  {pkg.summary}
                </p>
                
                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[var(--royal-ivory)] p-6 rounded-xl border border-[var(--royal-sand)]">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[var(--royal-muted)] mb-1">Duration</span>
                    <span className="font-semibold text-[var(--royal-ink)]">{pkg.duration}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[var(--royal-muted)] mb-1">Destinations</span>
                    <span className="font-semibold text-[var(--royal-ink)]">{pkg.route.length}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[var(--royal-muted)] mb-1">Style</span>
                    <span className="font-semibold text-[var(--royal-ink)]">{pkg.categories && pkg.categories[0]}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[var(--royal-muted)] mb-1">Transport</span>
                    <span className="font-semibold text-[var(--royal-ink)]">Private</span>
                  </div>
                </div>
              </div>

              {/* Itinerary Timeline */}
              <div className="mb-16">
                <h2 className="font-display text-3xl text-[var(--royal-forest)] mb-10">Itinerary</h2>
                <div className="relative pl-4 md:pl-0">
                  {/* Journey Line (Desktop only for full left alignment, mobile uses absolute line) */}
                  <div className="absolute left-8 top-2 bottom-2 w-px bg-[var(--royal-gold)]/30 hidden md:block z-0"></div>
                  
                  <div className="space-y-12">
                    {pkg.itinerary && pkg.itinerary.length > 0 ? (
                      pkg.itinerary.map((day, index) => (
                        <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-8 z-10">
                          {/* Day Circle */}
                          <div className="flex-shrink-0 relative md:w-16">
                            {/* Mobile line */}
                            <div className="absolute left-4 top-8 bottom-[-3rem] w-px bg-[var(--royal-gold)]/30 md:hidden z-0"></div>
                            
                            <div className="w-8 h-8 rounded-full border-2 border-[var(--royal-gold)] bg-[var(--royal-white)] flex items-center justify-center text-[var(--royal-gold)] font-bold text-sm z-10 relative md:mx-auto">
                              {day.day}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-grow pt-1 pb-4 md:border-b border-[var(--royal-sand)] last:border-0">
                            <h3 className="font-display text-xl text-[var(--royal-forest)] mb-3">{day.title}</h3>
                            <p className="text-[var(--royal-muted)] text-sm md:text-base leading-relaxed">
                              {day.description}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-[var(--royal-muted)]">Detailed itinerary available upon request.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Included / Not Included */}
              <div className="mb-10">
                <h2 className="font-display text-3xl text-[var(--royal-forest)] mb-8">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[var(--royal-ivory)] p-8 rounded-xl border border-[var(--royal-sand)]">
                  <div>
                    <h3 className="font-semibold text-[var(--royal-ink)] mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[var(--royal-forest)]/10 text-[var(--royal-forest)] flex items-center justify-center text-sm">✓</span>
                      Included
                    </h3>
                    <ul className="space-y-3">
                      {(pkg.included || ['Private air-conditioned vehicle', 'English speaking chauffeur guide', 'Fuel & local insurance', 'Highway tolls and parking', 'Airport pickup and drop-off']).map((item, i) => (
                        <li key={i} className="text-sm text-[var(--royal-muted)] flex items-start gap-2">
                          <span className="text-[var(--royal-forest)] mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--royal-ink)] mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-sm">✕</span>
                      Not Included
                    </h3>
                    <ul className="space-y-3">
                      {(pkg.notIncluded || ['International flights', 'Sri Lanka visa fees', 'Entrance fees to attractions', 'Meals unless specified', 'Personal expenses']).map((item, i) => (
                        <li key={i} className="text-sm text-[var(--royal-muted)] flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Sticky CTA */}
              <div className="bg-[var(--royal-ivory)] p-6 rounded-xl border border-[var(--royal-sand)] sticky top-24">
                <h3 className="font-display text-2xl text-[var(--royal-forest)] mb-4">Start Planning</h3>
                <p className="text-[var(--royal-muted)] text-sm mb-6">
                  Love this itinerary? Contact us to get a personalized quote or to customize it further.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={createWhatsAppLink(whatsappMessages.packageInquiry ? whatsappMessages.packageInquiry(pkg.title) : `Hello! I would like to request a quote for the ${pkg.title} package.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-[var(--royal-forest)] text-white hover:bg-[var(--royal-forest-dark)] transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-semibold rounded"
                  >
                    <FaWhatsapp className="text-lg" />
                    Message on WhatsApp
                  </a>
                  <Link
                    to="/customize-tour"
                    className="w-full px-6 py-3 bg-white border border-[var(--royal-forest)] text-[var(--royal-forest)] hover:bg-[var(--royal-forest)] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-semibold rounded"
                  >
                    Customize Journey
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-[var(--royal-sand)] text-center">
                  <p className="text-xs text-[var(--royal-muted)]">No upfront payment required.</p>
                </div>
              </div>

              {/* Related Journeys */}
              <div className="pt-8">
                <h3 className="font-display text-xl text-[var(--royal-forest)] mb-6">Similar Journeys</h3>
                <div className="flex flex-col gap-4">
                  {packages
                    .filter(p => p.id !== pkg.id && p.categories.some(c => pkg.categories.includes(c)))
                    .slice(0, 2)
                    .map(related => (
                      <Link key={related.id} to={`/packages/${related.slug}`} className="group flex gap-4 bg-white p-3 rounded-lg border border-[var(--royal-sand)] hover:border-[var(--royal-gold)] transition-colors duration-300">
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                          <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[10px] uppercase text-[var(--royal-gold)] font-bold mb-1">{related.duration}</span>
                          <h4 className="font-display text-lg text-[var(--royal-forest)] group-hover:text-[var(--royal-gold)] transition-colors line-clamp-2 leading-tight">{related.title}</h4>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PackageDetails;