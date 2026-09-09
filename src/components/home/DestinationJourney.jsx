import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Sparkles, ArrowRight } from 'lucide-react';

const destinationsData = [
  {
    id: 'kandy',
    number: '01',
    name: 'Kandy',
    famousPlace: 'Sri Dalada Maligawa',
    famousPlaceSubtitle: 'Temple of the Sacred Tooth Relic',
    category: 'Culture & Heritage',
    filter: 'culture',
    highlight: 'Sacred golden-roofed Buddhist sanctuary by serene Kandy Lake, enshrining the revered Tooth Relic of Lord Buddha.',
    image: '/images/destinations/famous/kandy-dalada-maligawa.jpg',
    badge: 'UNESCO World Heritage'
  },
  {
    id: 'sigiriya',
    number: '02',
    name: 'Sigiriya',
    famousPlace: 'Sigiriya Rock Fortress',
    famousPlaceSubtitle: 'The 5th-Century Lion Rock Citadel',
    category: 'Culture & Heritage',
    filter: 'culture',
    highlight: 'Awe-inspiring ancient palace fortress rising 200m above jungle canopies with historic frescoes and water gardens.',
    image: '/images/destinations/famous/sigiriya-rock-fortress.jpg',
    badge: '8th Wonder of the World'
  },
  {
    id: 'ella',
    number: '03',
    name: 'Ella',
    famousPlace: 'Nine Arch Bridge',
    famousPlaceSubtitle: 'Demodara Mountain Railway Viaduct',
    category: 'Hill Country',
    filter: 'hills',
    highlight: 'Colonial stone arch viaduct nestled amidst emerald tea plantations, famous for the iconic blue mountain train.',
    image: '/images/destinations/famous/ella-nine-arch-bridge.jpg',
    badge: 'Iconic Scenic Landmark'
  },
  {
    id: 'galle',
    number: '04',
    name: 'Galle',
    famousPlace: 'Galle Dutch Fort & Lighthouse',
    famousPlaceSubtitle: 'UNESCO Living Ocean Ramparts',
    category: 'Coast & Beaches',
    filter: 'coast',
    highlight: '17th-century oceanfront stone fortress filled with cobblestone lanes, artisan cafes, and the historic white lighthouse.',
    image: '/images/destinations/famous/galle-fort-lighthouse.jpg',
    badge: 'Colonial Oceanfront Gem'
  },
  {
    id: 'nuwara-eliya',
    number: '05',
    name: 'Nuwara Eliya',
    famousPlace: 'Pedro Tea Estate & Gregory Lake',
    famousPlaceSubtitle: 'Heart of Ceylon Tea Country',
    category: 'Hill Country',
    filter: 'hills',
    highlight: 'Misty mountain valleys known as "Little England", blanketed with emerald tea bushes, waterfalls, and colonial manors.',
    image: '/images/destinations/famous/nuwara-eliya-tea.jpg',
    badge: 'Ceylon Tea Highlands'
  },
  {
    id: 'yala',
    number: '06',
    name: 'Yala',
    famousPlace: 'Yala National Park Safari',
    famousPlaceSubtitle: 'World-Famous Leopard Kingdom',
    category: 'Wildlife & Safari',
    filter: 'wildlife',
    highlight: 'Highest leopard density on Earth, wild elephant herds, sloth bears, and crocodiles across dramatic coastal savanna.',
    image: '/images/destinations/famous/yala-leopard-safari.jpg',
    badge: 'Premier Wildlife Safari'
  },
  {
    id: 'mirissa',
    number: '07',
    name: 'Mirissa',
    famousPlace: 'Coconut Tree Hill',
    famousPlaceSubtitle: 'Ocean Headland & Blue Whale Watching',
    category: 'Coast & Beaches',
    filter: 'coast',
    highlight: 'Picturesque palm-covered red promontory overlooking turquoise waves, world capital for blue whale ocean safaris.',
    image: '/images/destinations/famous/mirissa-coconut-tree-hill.jpg',
    badge: 'Tropical Coastline'
  },
  {
    id: 'dambulla',
    number: '08',
    name: 'Dambulla',
    famousPlace: 'Dambulla Royal Cave Temple',
    famousPlaceSubtitle: 'Golden Caverns & 150+ Ancient Buddhas',
    category: 'Culture & Heritage',
    filter: 'culture',
    highlight: 'Towering golden Buddha and five sacred cliff caverns sheltering centuries of painted rock murals and statues.',
    image: '/images/destinations/famous/dambulla-cave-temple.jpg',
    badge: 'Sacred Cave Sanctuary'
  },
  {
    id: 'colombo',
    number: '09',
    name: 'Colombo',
    famousPlace: 'Colombo Lotus Tower & Gangaramaya',
    famousPlaceSubtitle: 'Commercial Capital & Vibrant Skyline',
    category: 'Culture & Heritage',
    filter: 'culture',
    highlight: 'South Asia tallest tower glowing above Beira Lake, paired with lakeside Buddhist temples and colonial avenues.',
    image: '/images/destinations/famous/colombo-lotus-tower.jpg',
    badge: 'Skyline & Heritage'
  },
  {
    id: 'anuradhapura',
    number: '10',
    name: 'Anuradhapura',
    famousPlace: 'Ruwanwelisaya Stupa & Sri Maha Bodhi',
    famousPlaceSubtitle: 'First Ancient Capital of Sri Lanka',
    category: 'Culture & Heritage',
    filter: 'culture',
    highlight: 'Magnificent gleaming white dome stupa surrounded by elephant carvings and the oldest recorded living human-planted tree.',
    image: '/images/destinations/famous/anuradhapura-ruwanwelisaya.jpg',
    badge: 'Ancient Sacred Realm'
  },
  {
    id: 'polonnaruwa',
    number: '11',
    name: 'Polonnaruwa',
    famousPlace: 'Gal Vihara Rock Statues',
    famousPlaceSubtitle: 'Medieval UNESCO Royal Capital',
    category: 'Culture & Heritage',
    filter: 'culture',
    highlight: 'Masterpiece monolithic Buddha statues carved with supreme grace from a single sheer granite rock face.',
    image: '/images/destinations/famous/polonnaruwa-gal-vihara.jpg',
    badge: 'Ancient Granite Wonders'
  },
  {
    id: 'bentota',
    number: '12',
    name: 'Bentota',
    famousPlace: 'Madu River Safari & Bentota Sands',
    famousPlaceSubtitle: 'Mangrove Lagoons & Golden Shorelines',
    category: 'Coast & Beaches',
    filter: 'coast',
    highlight: 'Serene mangrove river boat expeditions, cinnamon island visits, turtle hatcheries, and idyllic calm golden sands.',
    image: '/images/destinations/famous/bentota-madu-river.jpg',
    badge: 'Mangroves & Watersports'
  },
  {
    id: 'trincomalee',
    number: '13',
    name: 'Trincomalee',
    famousPlace: 'Koneswaram Temple (Swami Rock)',
    famousPlaceSubtitle: 'Sacred Clifftop Hindu Shrine',
    category: 'Coast & Beaches',
    filter: 'coast',
    highlight: 'Clifftop Kovil shrine dramatically perched atop Swami Rock overlooking one of the deepest natural harbors on Earth.',
    image: '/images/destinations/famous/trincomalee-koneswaram.jpg',
    badge: 'Eastern Harbor & Kovil'
  },
  {
    id: 'negombo',
    number: '14',
    name: 'Negombo',
    famousPlace: 'Hamilton Dutch Canal & Lagoon',
    famousPlaceSubtitle: 'Historic Fishing Town & Canals',
    category: 'Coast & Beaches',
    filter: 'coast',
    highlight: 'Historic 17th-century colonial canal network, vibrant coastal seafood markets, and traditional catamaran fleets.',
    image: '/images/destinations/famous/negombo-dutch-canal.jpg',
    badge: 'Colonial Maritime'
  },
  {
    id: 'arugam-bay',
    number: '15',
    name: 'Arugam Bay',
    famousPlace: 'Elephant Rock & Main Surf Point',
    famousPlaceSubtitle: 'World-Class Point Breaks & Coastal Dunes',
    category: 'Coast & Beaches',
    filter: 'coast',
    highlight: 'Global surfing haven offering consistent right-hand waves, tranquil lagoons, and roaming wild elephants at sunset.',
    image: '/images/destinations/famous/arugam-bay-beach.jpg',
    badge: 'World Surf Haven'
  }
];

const filterTabs = [
  { id: 'all', label: 'All Places', count: 15 },
  { id: 'culture', label: 'Culture & Heritage', count: 6 },
  { id: 'hills', label: 'Hill Country', count: 2 },
  { id: 'wildlife', label: 'Wildlife & Safari', count: 1 },
  { id: 'coast', label: 'Coast & Beaches', count: 6 },
];

export default function DestinationJourney() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredDestinations = activeTab === 'all'
    ? destinationsData
    : destinationsData.filter((item) => item.filter === activeTab);

  return (
    <section className="py-14 sm:py-20 bg-[var(--royal-ivory)] relative overflow-hidden">
      {/* Decorative background subtle watermark */}
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-[var(--royal-gold)]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-[var(--royal-forest)]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[var(--royal-gold)]" />
              <span className="text-[var(--royal-gold)] font-semibold tracking-widest text-xs uppercase">
                DISCOVER THE ISLAND
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--royal-forest)] leading-tight">
              One island.<br />
              <span className="italic text-[var(--royal-forest-dark)]">A thousand stories.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--royal-charcoal)] leading-relaxed font-light">
              Every region of Sri Lanka holds its own legendary landmark. From the sacred golden sanctuary of Kandy's 
              <strong className="text-[var(--royal-forest)] font-medium"> Sri Dalada Maligawa</strong> and the ancient heights of 
              <strong className="text-[var(--royal-forest)] font-medium"> Sigiriya</strong>, to misty tea estates and sun-drenched coastal forts.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 sm:gap-2.5 items-center"
          >
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[var(--royal-forest)] text-[var(--royal-ivory)] shadow-md shadow-[var(--royal-forest)]/20'
                      : 'bg-white/80 text-[var(--royal-forest)] border border-[var(--royal-muted)]/20 hover:border-[var(--royal-gold)] hover:bg-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-[var(--royal-gold)] text-white' : 'bg-[var(--royal-ivory)] text-[var(--royal-forest)]'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Destination Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) => (
              <motion.div
                layout
                key={dest.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[var(--royal-muted)]/15 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[var(--royal-forest)]">
                  <img
                    src={dest.image}
                    alt={`${dest.name} - ${dest.famousPlace}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-display text-xs font-semibold tracking-wider text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      #{dest.number}
                    </span>
                    <span className="text-[11px] font-medium text-[var(--royal-gold)] bg-[#0D2C20]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[var(--royal-gold)]/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {dest.badge}
                    </span>
                  </div>

                  {/* Bottom Image Overlay: Destination & Landmark Name */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-center gap-1.5 text-[var(--royal-gold)] text-xs font-semibold tracking-wider uppercase mb-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{dest.name}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/80 font-normal">{dest.category}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-white font-medium drop-shadow-md leading-tight group-hover:text-[var(--royal-gold)] transition-colors duration-300">
                      {dest.famousPlace}
                    </h3>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-xs font-medium text-[var(--royal-forest)]/70 uppercase tracking-wider block mb-1.5">
                      {dest.famousPlaceSubtitle}
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--royal-charcoal)]/85 leading-relaxed font-light line-clamp-3">
                      {dest.highlight}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 mt-4 border-t border-[var(--royal-muted)]/15 flex items-center justify-between">
                    <Link
                      to="/customize-tour"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--royal-forest)] group-hover:text-[var(--royal-gold)] transition-colors duration-300"
                    >
                      <span>Add to Custom Trip</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                      to="/packages"
                      className="text-[11px] text-[var(--royal-muted)] hover:text-[var(--royal-forest)] transition-colors"
                    >
                      View Packages
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Section Footer / Conversion CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-[var(--royal-muted)]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-display text-xl sm:text-2xl text-[var(--royal-forest)]">
              Wish to visit these iconic places on your private itinerary?
            </h3>
            <p className="text-sm text-[var(--royal-charcoal)] font-light mt-1">
              Every Royal Classic journey is 100% bespoke with private air-conditioned transport and dedicated chauffeur.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link to="/customize-tour" className="btn-primary inline-flex items-center gap-2 text-sm">
              <span>Customize Your Tour</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/packages" className="btn-secondary inline-flex text-sm">
              Explore Our Journeys
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
