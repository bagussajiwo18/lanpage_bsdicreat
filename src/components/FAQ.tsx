'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal, { ScrollStagger, ScrollStaggerItem } from './ScrollReveal';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Berapa lama estimasi pengerjaan proyek desain?',
      a: 'Waktu pengerjaan bergantung pada skop proyek. Desain materi promosi tunggal (banner/flyer) umumnya memakan waktu 1–3 hari kerja, sedangkan proyek brand identity atau desain kemasan membutuhkan 5–10 hari kerja. Kami juga menyediakan paket Pengerjaan Kilat (Express Delivery) jika Anda memiliki deadline mendesak.',
    },
    {
      q: 'Bagaimana ketentuan dan batas revisi desain?',
      a: 'Setiap proyek sudah mencakup 2 hingga 3 kali sesi revisi (termasuk penyesuaian tata letak, warna, dan tipografi). Revisi dilakukan berdasarkan feedback terarah dari draf konsep yang kami kirimkan.',
    },
    {
      q: 'Bisakah satu materi desain disesuaikan untuk media sosial dan cetak sekaligus?',
      a: 'Bisa. Kami menyediakan layanan format adaptation di mana satu konsep desain utama dapat ditransformasikan ke berbagai dimensi—seperti ukuran Feed/Story Instagram sekaligus brosur A4.',
    },
    {
      q: 'Bagaimana sistem pembayaran dan skema pelunasan?',
      a: 'Sistem pembayaran standar kami menggunakan DP (Down Payment) sebesar 50% di awal proyek sebagai tanda jadi commitment, dan sisa pelunasan 50% dilakukan sebelum penyerahan seluruh file master akhir.',
    },
    {
      q: 'Apakah saya memiliki hak cipta penuh atas desain tersebut?',
      a: 'Ya. Setelah pelunasan proyek dilakukan, seluruh hak komersial dan hak cipta penuh menjadi milik Anda. Kami hanya meminta izin untuk mencantumkan hasil karya tersebut di portofolio kami (kecuali jika ada perjanjian kerahasiaan/NDA).',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up" distance={30} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00658D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan Umum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Hal Yang Sering <span className="text-gradient-cyan">Ditanyakan Klien</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Temukan jawaban cepat mengenai proses kerja, pembayaran, dan serah terima file.
          </p>
        </ScrollReveal>

        {/* Accordion List */}
        <ScrollStagger staggerChildren={0.1} className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollStaggerItem key={index} direction="up" distance={25}>
                <div
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all shadow-sm hover:shadow-md hover:border-cyan-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00658D] bg-cyan-50' : 'text-slate-400 bg-slate-100'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </div>
    </section>
  );
}
