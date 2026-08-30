import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';

const categories = [
  { id: 1, name: 'Culture', description: 'Ancient kingdoms, temples and living traditions.', image: '/images/services/custom-tour.jpg' },
  { id: 2, name: 'Wildlife', description: 'Elephants, leopards, national parks and safari landscapes.', image: '/images/services/wildlife.jpg' },
  { id: 3, name: 'Beaches', description: 'Golden coastlines, surfing and coastal escapes.', image: '/images/services/beach.jpg' },
  { id: 4, name: 'Tea Country', description: 'Cool mountains, plantations and scenic train journeys.', image: '/images/destination/dest-nuwara-eliya.jpg' },
  { id: 5, name: 'Ayurveda', description: 'Traditional wellness, healing and relaxation.', image: '/images/packages/wellness.jpg' },
  { id: 6, name: 'Adventure', description: 'Hiking, water sports and outdoor experiences.', image: '/images/destination/dest-ella.jpg' },
  { id: 7, name: 'Food', description: 'Spice gardens, local cuisine and cooking experiences.', image: '/images/hero/hero5.jpg' },
  { id: 8, name: 'Romance', description: 'Honeymoon escapes and romantic getaways.', image: '/images/packages/honeymoon.jpg' },
  { id: 9, name: 'Family', description: 'Kid-friendly adventures across the island.', image: '/images/packages/family.jpg' },
  { id: 10, name: 'Photography', description: 'Stunning landscapes and cultural moments.', image: '/images/hero/hero3.jpg' }
];

export default function ExperienceExplorer() {
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
    <section className="section-padding bg-royal-ivory">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <div className="text-royal-gold text-sm font-semibold tracking-widest uppercase mb-4">
            EXPLORE BY INTEREST
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-royal-forest">
            What brings you to Sri Lanka?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-5 gap-4 pb-4 md:pb-0 hide-scrollbar"
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={itemVariants} className="snap-start shrink-0 min-w-[200px] md:min-w-0 w-3/4 md:w-full">
              <Link 
                to="/packages"
                className="group block relative aspect-[3/4] md:aspect-[4/5] rounded-[var(--radius)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 z-20 flex flex-col justify-end h-full">
                  <h3 className="font-display text-lg sm:text-xl text-white font-semibold mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
