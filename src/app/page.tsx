import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Workflow from '@/components/Workflow';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#35A7E0] selection:text-white relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Portfolio Showcase Section */}
      <Portfolio />

      {/* Workflow Section */}
      <Workflow />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
