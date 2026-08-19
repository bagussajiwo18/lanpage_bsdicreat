'use client';

import ScrollReveal from './ScrollReveal';
import { Mail } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';
import Image from 'next/image';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function Footer() {
  const waLink = getWhatsAppLink("Halo BS DICREAT\nSaya ingin konsultasi mengenai kebutuhan desain saya.");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Glow Ambient Backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" distance={25}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-700">

            {/* Col 1: Brand Info */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 group-hover:scale-110 transition-transform">
                  <Image
                    src="/images/logotrn_bs.png"
                    alt="BS DICREAT Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-[#35A7E0] transition-colors">
                  BS DICREAT
                </span>
              </a>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Kami berdedikasi membangun pengalaman visual berkelas dunia yang mendatangkan hasil desain terukur.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://wa.me/628984985121"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp BS DICREAT"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:beyondspace420@gmail.com"
                  aria-label="Email BS DICREAT"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
                {/* Instagram SVG */}
                <a
                  href="https://instagram.com/bsdicreat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram BS DICREAT"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* TikTok SVG */}
                <a
                  href="https://tiktok.com/@bsdicreat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok BS DICREAT"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.69a6.34 6.34 0 0 0 10.86 4.43 6.3 6.3 0 0 0 1.92-4.43V7.82a8.38 8.38 0 0 0 5.36 1.9V6.28a4.86 4.86 0 0 1-3.55-1.49z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="md:col-span-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                Navigasi Halaman
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#layanan" className="hover:text-cyan-400 transition-colors">Layanan Desain</a></li>
                <li><a href="#portofolio" className="hover:text-cyan-400 transition-colors">Portofolio Klien</a></li>
                <li><a href="#alur-kerja" className="hover:text-cyan-400 transition-colors">Alur Kerja</a></li>
                <li><a href="#ulasan" className="hover:text-cyan-400 transition-colors">Ulasan &amp; Testimoni</a></li>
                <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Col 3: CTA Box */}
            <div className="md:col-span-4 p-6 rounded-2xl bg-white/5 border border-slate-700 flex flex-col justify-between hover:border-cyan-400/50 transition-colors duration-300">
              <div>
                <div className="text-base font-bold text-white mb-2">Siap Meluncurkan Proyek Baru?</div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Jadwalkan sesi konsultasi gratis bersama Lead Designer kami hari ini.
                </p>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00658D] to-[#35A7E0] text-white text-xs font-bold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Konsultasi Sekarang</span>
              </a>
            </div>

          </div>

          {/* Bottom Credits */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {currentYear} BS DICREAT. All rights reserved.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
