import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'BS DICREAT - Jasa Desain Grafis Kreatif',
  description: 'BS DICREAT adalah jasa desain grafis profesional untuk visual branding, media sosial, dan media promosi. Solusi kreatif dan elegan untuk membuat bisnis Anda tampil beda dan tepercaya.',
  keywords: ['bs dicreat', 'jasa desain', 'jasa desain grafis', 'jasa desain grafis cilegon', 'jasa desain digital'],
  openGraph: {
    title: 'BS DICREAT - Jasa Desain Grafis Kreatif & Berkualitas',
    description: 'BS DICREAT adalah jasa desain grafis profesional untuk visual branding, media sosial, dan media promosi. Solusi kreatif dan elegan untuk membuat bisnis Anda tampil beda dan tepercaya.',
    url: 'https://bsdicreat.vercel.app',
    siteName: 'BS DICREAT',
    images: [
      {
        url: '/images/letter_bsdicreat.png',
        width: 1200,
        height: 675,
        alt: 'BS DICREAT Lettermark',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable}`}>
      <body className="bg-white text-slate-900 antialiased selection:bg-[#35A7E0] selection:text-white">
        {children}
      </body>
    </html>
  );
}
