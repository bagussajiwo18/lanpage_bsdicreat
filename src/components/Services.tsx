'use client';

import ScrollReveal, { ScrollStagger, ScrollStaggerItem } from './ScrollReveal';
import { Palette, Layout, Megaphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'branding',
      title: 'Desain Digital & Media Sosial',
      badge: 'Digital',
      badgeColor: 'border-cyan-300 text-[#00658D] bg-cyan-50',
      icon: Palette,
      iconColor: 'from-[#00658D] to-[#35A7E0]',
      description: 'Tingkatkan kehadiran digital brand Anda dengan visual yang menarik, konsisten, dan responsif. Kami merancang materi promosi digital yang berfokus pada estetika sekaligus efektivitas konversi untuk menarik perhatian audiens target di berbagai platform.',
    },
    {
      id: 'uiux',
      title: 'Desain Grafis',
      badge: 'Graphic',
      badgeColor: 'border-purple-300 text-purple-700 bg-purple-50',
      icon: Layout,
      iconColor: 'from-[#712AE2] to-indigo-500',
      description: 'Solusi desain visual menyeluruh untuk mengomunikasikan pesan bisnis Anda secara jelas dan memikat. Kami merancang berbagai materi pemasaran digital maupun cetak dengan komposisi tata letak yang proporsional, fungsional, dan estetis demi memperkuat kesan profesional di mata target audiens.',
    },
    {
      id: 'marketing',
      title: 'Desain Branding & Bisnis',
      badge: 'Branding',
      badgeColor: 'border-amber-300 text-amber-700 bg-amber-50',
      icon: Megaphone,
      iconColor: 'from-amber-500 to-orange-600',
      description: 'Membangun identitas visual yang unik, profesional, dan berkesan untuk bisnis Anda dari nol maupun rebranding. Kami menciptakan sistem visual komprehensif yang tidak hanya terlihat estetis, tetapi juga memperkuat posisi brand Anda.',
    },
  ];

  return (
    <section id="layanan" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up" distance={30} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00658D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span>Layanan Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Solusi Desain Untuk Mengangkat <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Brand Anda ke Level Selanjutnya</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Pilih layanan yang sesuai dengan tahapan bisnis Anda.
          </p>
        </ScrollReveal>

        {/* Services Cards Grid */}
        <ScrollStagger staggerChildren={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <ScrollStaggerItem key={service.id} direction="up" distance={35} className="h-full">
                <div className="relative h-full rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 glass-card hover:border-cyan-400 group hover:-translate-y-1">
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.iconColor} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-[#00658D] transition-colors">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </div>
    </section>
  );
}
