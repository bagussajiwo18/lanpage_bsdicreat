'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';
import Image from 'next/image';

export default function Navbar() {
  const waLink = getWhatsAppLink("Halo BS DICREAT\nSaya ingin konsultasi mengenai kebutuhan desain saya.");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Alur Kerja', href: '#alur-kerja' },
    { label: 'Ulasan', href: '#ulasan' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/85 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-lg shadow-slate-200/40'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Menggunakan Image Next.js */}
            <div className="relative w-10 h-10 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logotrn_bs.png" // Path ke file gambar Anda di folder public
                alt="BS DICREAT Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
                BS DICREAT
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase font-semibold">
                Digital Creative
              </span>
            </div>
          </a>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#00658D] transition-colors rounded-full hover:bg-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00658D] via-[#35A7E0] to-[#712AE2] text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Konsultasi Gratis</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 text-slate-700 hover:text-[#00658D] font-medium text-base hover:bg-slate-100 transition-all"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full flex items-center justify-center py-3.5 rounded-xl bg-gradient-to-r from-[#00658D] to-[#35A7E0] text-white font-bold text-base shadow-lg shadow-cyan-500/20"
              >
                <span>Konsultasi via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
