import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { packages } from '../../data/packages';

export default function FeaturedJourneys() {
  const featuredPackages = packages.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[var(--royal-sand)]">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-[#C5A35A] uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">
            FEATURED ITINERARIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-royal-forest mb-3">
            Journeys worth taking slowly.
          </h2>
          <p className="text-royal-muted text-sm sm:text-base max-w-2xl mx-auto">
            Begin with a carefully designed Sri Lanka itinerary and personalize it with your private chauffeur.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {featuredPackages.map((pkg) => (
            <motion.div 
              key={pkg.id || pkg.slug} 
              variants={itemVariants} 
              className="group flex flex-col bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[var(--royal-sand)] shadow-sm hover:shadow-md hover:border-[var(--royal-gold)]/40 transition-all duration-300"
            >
              <Link to={`/packages/${pkg.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#123B2A]/90 backdrop-blur-md text-[var(--royal-gold)] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-[var(--royal-gold)]/30">
                  {pkg.duration}
                </div>
              </Link>
              
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="text-[11px] text-[var(--royal-muted)] uppercase tracking-wider font-semibold mb-2">
                  {pkg.categories ? pkg.categories.slice(0, 2).join(' • ') : 'PRIVATE TOUR'}
                </div>
                
                <h3 className="font-display font-bold text-xl sm:text-2xl text-royal-forest mb-2.5 group-hover:text-[var(--royal-gold)] transition-colors">
                  {pkg.title}
                </h3>
                
                <div className="text-xs sm:text-sm text-royal-muted mb-5 line-clamp-2 leading-relaxed">
                  {pkg.route ? pkg.route.join(' → ') : ''}
                </div>
                
                <div className="mt-auto pt-4 border-t border-[var(--royal-sand)] flex items-center justify-between">
                  <Link 
                    to={`/packages/${pkg.slug}`}
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-royal-forest group-hover:text-[var(--royal-gold)] transition-colors duration-300 tracking-wider uppercase"
                  >
                    <span>View Itinerary</span>
                    <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    to="/customize-tour"
                    className="text-xs text-[var(--royal-gold)] hover:underline font-semibold"
                  >
                    Customize
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-10 sm:mt-14 text-center"
        >
          <Link to="/packages" className="btn-secondary">
            View All Journeys
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
