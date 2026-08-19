'use client';

import ScrollReveal, { ScrollStagger, ScrollStaggerItem } from './ScrollReveal';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Afif',
      role: 'Pribadi',
      company: 'UMKM Pempek',
      rating: 5,
      quote: 'Hasil desain sangat profesional dan sesuai dengan identitas brand kami. Proses kerja juga sangat transparan dan tepat waktu.',
    },
    {
      name: 'Rifki',
      role: 'Pribadi',
      company: ' UMKM Seblak Prasmanan',
      rating: 5,
      quote: 'Desain banner-nya bikin warung seblak saya makin mencolok dan menggugah selera. Hasilnya, jualan makin laris dan warung ramai pembeli.',
    },
    {
      name: 'Amel',
      role: 'Pribadi',
      company: '-',
      rating: 5,
      quote: 'Hasil desainnya pas, nggak berlebihan tapi tetap menarik. Produk dessert saya kelihatan lebih bersih di medsos dan pembeli jadi lebih yakin pas mau order.',
    },
  ];

  return (
    <section id="ulasan" className="py-24 bg-white relative overflow-hidden">
      {/* Backdrop Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up" distance={30} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00658D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span>Kepuasan Klien Prioritas Utama</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Apa Kata <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Para Partner Kami?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Dengar langsung pengalaman pemilik usaha yang telah mempercayakan desain visual mereka kepada kami.
          </p>
        </ScrollReveal>

        {/* Reviews Cards Grid */}
        <ScrollStagger staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <ScrollStaggerItem key={rev.name} direction="up" distance={35} className="h-full">
              <div className="relative h-full rounded-3xl p-8 bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2">
                <div>
                  {/* Top Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-200 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-slate-700 text-sm leading-relaxed italic mb-8">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                {/* Client Profile */}
                <div className="pt-6 border-t border-slate-200 flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 text-base">
                      <span>{rev.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#00658D]" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {rev.role} • <span className="text-[#00658D]">{rev.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
}
