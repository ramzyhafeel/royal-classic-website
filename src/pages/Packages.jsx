import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/seo/Seo';
import { packages } from '../data/packages';
import { packageSeo } from '../utils/seoHelpers';

const Packages = () => {
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const durations = ['All', '4 Days', '5 Days', '6 Days', '7 Days', '8 Days', '9 Days'];
  const categories = ['All', 'Culture', 'Wildlife', 'Beach', 'Hill Country', 'Wellness', 'Adventure', 'Family', 'Honeymoon'];

  const filteredPackages = packages.filter(pkg => {
    const matchesDuration = selectedDuration === 'All' || pkg.duration === selectedDuration;
    const matchesCategory = selectedCategory === 'All' || pkg.categories.includes(selectedCategory);
    return matchesDuration && matchesCategory;
  });

  return (
    <Layout>
      <Seo title="Find your Sri Lanka journey." description="Choose by duration or travel style, then personalize the journey around you." />
      <PageHero
        title="Find your Sri Lanka journey."
        subtitle="Choose by duration or travel style, then personalize the journey around you."
        image="/images/hero/hero4.jpg"
      />

      {/* Filters */}
      <section className="py-6 sm:py-8 bg-[var(--royal-ivory)] border-b border-[var(--royal-sand)] sticky top-[76px] lg:top-28 z-30 backdrop-blur-md bg-opacity-95">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-[var(--royal-gold)] text-xs font-bold uppercase tracking-wider min-w-[70px]">Duration:</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {durations.map(duration => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`text-xs px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      selectedDuration === duration
                        ? 'bg-[#123B2A] text-white font-semibold shadow-sm ring-2 ring-[var(--royal-gold)]/40'
                        : 'bg-white border border-[var(--royal-sand)] text-[var(--royal-muted)] hover:border-[var(--royal-gold)] hover:text-[var(--royal-forest)]'
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-[var(--royal-gold)] text-xs font-bold uppercase tracking-wider min-w-[70px]">Style:</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-xs px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-[#123B2A] text-white font-semibold shadow-sm ring-2 ring-[var(--royal-gold)]/40'
                        : 'bg-white border border-[var(--royal-sand)] text-[var(--royal-muted)] hover:border-[var(--royal-gold)] hover:text-[var(--royal-forest)]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex flex-col bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--royal-gold)]/40 transition-all duration-300 border border-[var(--royal-sand)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#123B2A]/90 backdrop-blur-md text-[var(--royal-gold)] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-[var(--royal-gold)]/30">
                      {pkg.duration}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <div className="mb-2 text-[11px] uppercase tracking-wider text-[var(--royal-muted)] font-semibold">
                      {pkg.categories.slice(0, 2).join(' • ')}
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--royal-forest)] mb-2 group-hover:text-[var(--royal-gold)] transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--royal-muted)] mb-3 pb-3 border-b border-[var(--royal-sand)] line-clamp-1">
                      {pkg.route.join(' → ')}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--royal-muted)] line-clamp-2 mb-5 flex-grow leading-relaxed">
                      {pkg.summary}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-[var(--royal-sand)]">
                      <Link
                        to={`/packages/${pkg.slug}`}
                        className="text-xs sm:text-sm font-bold text-[var(--royal-forest)] hover:text-[var(--royal-gold)] transition-colors duration-300 flex items-center gap-1 uppercase tracking-wider group/link"
                      >
                        <span>Explore Journey</span>
                        <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                      <Link
                        to="/customize-tour"
                        className="text-xs font-semibold text-[var(--royal-gold)] hover:underline"
                      >
                        Customize
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-display text-2xl text-[var(--royal-forest)] mb-4">No journeys found</h3>
              <p className="text-[var(--royal-muted)] mb-8">Try adjusting your filters to see more results.</p>
              <button
                onClick={() => {
                  setSelectedDuration('All');
                  setSelectedCategory('All');
                }}
                className="px-6 py-2 border border-[var(--royal-forest)] text-[var(--royal-forest)] hover:bg-[var(--royal-forest)] hover:text-white transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Packages;