'use client';

import ScrollReveal, { ScrollStagger, ScrollStaggerItem } from './ScrollReveal';
import { Search, Compass, Repeat, Rocket, CheckCircle } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Konsultasi & Pengisian Brief',
      subtitle: 'Riset & Fondasi',
      icon: Search,
      color: 'from-cyan-500 to-blue-600',
      description: 'Kami menggali kebutuhan komunikasi visual bisnis Anda, memahami target audiens, dan menganalisis karakter brand sebelum memulai eksplorasi visual.',
      deliverables: ['Brief Proyek & Scope Terstruktur', 'Moodboard & Direksi Gaya Visual', 'Riset Karakter Brand & Kompetitor'],
    },
    {
      number: '02',
      title: 'Riset & Eksplorasi Konsep',
      subtitle: 'Eksplorasi Konsep',
      icon: Compass,
      color: 'from-purple-500 to-indigo-600',
      description: 'Menerjemahkan brief ke dalam sketsa kasar dan beberapa alternatif opsi konsep awal baik untuk branding, promosi media sosial, maupun materi cetak.',
      deliverables: ['Sketsa & Draf Layout Awal', '2 Alternatif Konsep Desain', 'Eksplorasi Palet Warna & Tipografi'],
    },
    {
      number: '03',
      title: 'Feedback & Revisi',
      subtitle: 'Penyempurnaan Detail',
      icon: Repeat,
      color: 'from-amber-500 to-orange-600',
      description: 'Kolaborasi interaktif untuk meninjau draf. Kami memoles komposisi tata letak, keselarasan elemen visual, dan detail warna sesuai masukan Anda.',
      deliverables: ['Iterasi & Penyesuaian Detail Visual', 'Sesi Review & Diskusi Interaktif', 'Finalisasi Komposisi & Tata Letak'],
    },
    {
      number: '04',
      title: 'Serah Terima dan dukungan',
      subtitle: 'Serah Terima Master',
      icon: Rocket,
      color: 'from-emerald-500 to-teal-600',
      description: 'Penyerahan seluruh paket file master terorganisir yang siap digunakan untuk kebutuhan promosi digital maupun produksi cetak resolusi tinggi dan dukungan teknis lainnya.',
      deliverables: ['File HD', 'Ekspor Ready-to-Use', 'Panduan Penggunaan Aset Visual'],
    },
  ];

  return (
    <section id="alur-kerja" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Glow Line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <ScrollReveal direction="up" distance={30} className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00658D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span>Alur Kerja Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Proses Eksekusi 4 Langkah <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Tepat Waktu &amp; Tanpa Drama</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Proses kolaborasi transparan untuk hasil yang maksimal.
          </p>
        </ScrollReveal>

        {/* Workflow Timeline Grid */}
        <ScrollStagger staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <ScrollStaggerItem key={step.number} direction="up" distance={35} className="h-full">
                <div className="relative h-full rounded-3xl p-6 glass-card hover:border-cyan-400 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300">
                  <div>
                    {/* Step Top Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-black text-slate-200 group-hover:text-cyan-400 transition-colors font-mono">
                        {step.number}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#00658D]">
                        {step.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1">{step.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Hasil Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00658D] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
