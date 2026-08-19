'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'Grafis' | 'Feed' | 'F&B';
  categoryLabel: string;
  image: string;
  client: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'item-1',
      title: 'Feed SIMRS ICHA 1',
      category: 'Feed',
      categoryLabel: 'Feed',
      image: '/images/portfolio_simrs1.jpg',
      client: 'SIMRS ICHA',
    },
    {
      id: 'item-2',
      title: 'Feed SIMRS ICHA 2',
      category: 'Feed',
      categoryLabel: 'Feed',
      image: '/images/portfolio_simrs2.jpg',
      client: 'SIMRS ICHA',
    },
    {
      id: 'item-3',
      title: 'Logo Go Bananas!',
      category: 'Grafis',
      categoryLabel: 'Logo',
      image: '/images/portfolio_logogb.jpg',
      client: 'Project',
    },
    {
      id: 'item-4',
      title: 'Seblak Prasmanan Muahhh',
      category: 'F&B',
      categoryLabel: 'F&B',
      image: '/images/portfolio_seblak.jpg',
      client: 'Seblak Prasmanan Muahhh',
    },
    {
      id: 'item-5',
      title: 'Pempek Manja',
      category: 'F&B',
      categoryLabel: 'F&B',
      image: '/images/portfolio_pm1.jpg',
      client: 'AFif',
    },
    {
      id: 'item-6',
      title: 'Pempek Manja',
      category: 'F&B',
      categoryLabel: 'F&B',
      image: '/images/portfolio_pm2.jpg',
      client: 'Afif',
    },
    {
      id: 'item-7',
      title: 'Dessert',
      category: 'F&B',
      categoryLabel: 'F&B',
      image: '/images/portfolio_dessert.jpg',
      client: 'Amel',
    },
    {
      id: 'item-8',
      title: 'Martabak Mini',
      category: 'F&B',
      categoryLabel: 'F&B',
      image: '/images/portfolio_marmini.jpg',
      client: 'Amel',
    },
    {
      id: 'item-9',
      title: 'UI App',
      category: 'Grafis',
      categoryLabel: 'UI App',
      image: '/images/portfolio_uiapp.jpg',
      client: 'Afif',
    },
  ];

  const categories = ['Semua', 'Grafis', 'Feed', 'F&B'];

  const filteredItems = activeCategory === 'Semua'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portofolio" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal direction="up" distance={30} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00658D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <span>Portofolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Karya Terbaik Yang Kami Buat <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">dengan Dedikasi Penuh</span>
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${activeCategory === cat
                  ? 'bg-gradient-to-r from-[#00658D] to-[#35A7E0] text-white shadow-lg shadow-cyan-500/20 scale-105'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Cards Grid */}
        <ScrollReveal direction="scale" distance={20}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25, delay: (index % 3) * 0.05 }}
                  className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-cyan-400 transition-all duration-200 hover:-translate-y-1"
                >
                  {/* Card Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[#00658D] text-xs font-semibold shadow-sm">
                      {item.categoryLabel}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
