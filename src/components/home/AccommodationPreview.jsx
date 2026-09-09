import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';

const accommodations = [
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Premium resorts and boutique properties.',
    image: '/images/hotels/luxury-resort-sri-lanka.jpg',
  },
  {
    id: 'comfort',
    name: 'Comfort',
    description: 'Quality hotels with modern facilities.',
    image: '/images/hotels/comfort-hotel-sri-lanka.jpg',
  },
  {
    id: 'budget',
    name: 'Budget',
    description: 'Clean, comfortable guesthouses and homestays.',
    image: '/images/hotels/budget-guesthouse-sri-lanka.jpg',
  }
];

export default function AccommodationPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section className="py-14 sm:py-20 bg-[#FAF7F0] border-b border-[var(--royal-sand)]">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-[#C5A35A] uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">
            CURATED STAYS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-royal-forest mb-3">
            Stay your way.
          </h2>
          <p className="text-royal-muted text-sm sm:text-base max-w-2xl mx-auto">
            From relaxed colonial guesthouses to 5-star luxury ocean villas, accommodation can be tailored to your preferred style and budget.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {accommodations.map((acc) => (
            <motion.div 
              key={acc.id} 
              variants={itemVariants} 
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[var(--royal-sand)] shadow-sm hover:shadow-md hover:border-[var(--royal-gold)]/40 transition-all duration-300"
            >
              <Link to="/hotels" className="block relative aspect-[4/3] overflow-hidden">
                <img
                  src={acc.image}
                  alt={acc.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Link>
              
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="font-display font-bold text-xl text-royal-forest mb-2 group-hover:text-[var(--royal-gold)] transition-colors">
                  {acc.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-royal-muted mb-5 leading-relaxed">
                  {acc.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-[var(--royal-sand)]">
                  <Link 
                    to="/hotels"
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-royal-forest hover:text-royal-gold transition-colors duration-300 tracking-wider uppercase"
                  >
                    <span>Explore Stays</span>
                    <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
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
          <Link to="/hotels" className="btn-secondary">
            Explore All Accommodation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
