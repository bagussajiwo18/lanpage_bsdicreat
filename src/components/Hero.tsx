'use client';

import ScrollReveal, { ScrollStagger, ScrollStaggerItem } from './ScrollReveal';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Hero() {
  const waLink = getWhatsAppLink("Halo BS DICREAT\nSaya ingin konsultasi mengenai kebutuhan desain saya.");

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

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow">
      {/* Background Decorative Lighting — static, no animation loop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <ScrollStagger staggerChildren={0.1} className="w-full flex flex-col gap-6 text-center items-center justify-center">

            {/* Top Pill Badge */}
            <ScrollStaggerItem direction="down" distance={15}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00658D] text-xs font-semibold self-center shadow-sm">
                <span>BS Digital Creative</span>
              </div>
            </ScrollStaggerItem>

            {/* Main Headline */}
            <ScrollStaggerItem direction="up" distance={20}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Visualize <span className="text-gradient-cyan">Your Ideas</span>
              </h1>
            </ScrollStaggerItem>

            {/* Subheading */}
            <ScrollStaggerItem direction="up" distance={18}>
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                Dari sebuah ide menjadi visual yang punya karakter, dan tujuan. Temukan solusi desain kreatif untuk kebutuhanmu bersama BS DICREAT.
              </p>
            </ScrollStaggerItem>

            {/* Action Buttons */}
            <ScrollStaggerItem direction="fade" distance={15}>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#00658D] via-[#35A7E0] to-[#712AE2] text-white font-bold text-base hover:shadow-xl hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  <WhatsAppIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  <span>Konsultasi via WhatsApp</span>
                </a>

                <a
                  href="#portofolio"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-semibold text-base transition-all flex items-center justify-center gap-2 hover:border-cyan-400"
                >
                  <span>Lihat Portofolio</span>
                </a>
              </div>
            </ScrollStaggerItem>

            {/* Trust Badges Bar */}
            <ScrollStaggerItem direction="up" distance={15}>
              <div className="pt-6 mt-4 border-t border-slate-200 grid grid-cols-3 gap-4 text-center w-full max-w-3xl">
                <div className="p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100+</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">Proyek Selesai</div>
                </div>
                <div className="p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan">90%</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">Klien Puas</div>
                </div>
                <div className="p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">5x</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">Rata-rata Kenaikan Conversion</div>
                </div>
              </div>
            </ScrollStaggerItem>

          </ScrollStagger>
        </div>
      </div>
    </section>
  );
}
