import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'StudioDesign — Studio Desain Visual',
  description: 'Mengubah ide brand Anda menjadi karya visual kelas dunia. Layanan branding, desain UI/UX, dan strategi media sosial bereputasi tinggi.',
  keywords: ['studio desain', 'ui ux design indonesia', 'branding agency', 'desain feed instagram', 'jasa desain web nextjs'],
  openGraph: {
    title: 'StudioDesign — Studio Desain Visual',
    description: 'Mengubah ide brand Anda menjadi karya visual kelas dunia.',
    url: 'https://studiodesign.id',
    siteName: 'StudioDesign',
    images: [
      {
        url: '/images/hero_showcase.jpg',
        width: 1200,
        height: 675,
        alt: 'StudioDesign Portfolio Showcase',
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
