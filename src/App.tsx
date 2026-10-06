import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import About from '@/components/About';
import MenuPreview from '@/components/MenuPreview';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Location from '@/components/Location';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <MenuPreview />
        <Gallery />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
