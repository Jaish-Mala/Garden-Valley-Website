import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { restaurant } from '@/data/restaurant';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(74,58,40,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2.5 group"
            aria-label="Go to top"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-600 text-cream shadow-md transition-transform group-hover:scale-105">
              <span className="font-serif text-lg font-700 text-cream">G</span>
            </div>
            <div className="hidden text-left leading-tight sm:block">
              <p className={`font-serif text-base font-600 transition-colors ${scrolled ? 'text-warm-900' : 'text-cream'}`}>
                Garden Valley
              </p>
              <p className={`text-[11px] font-500 tracking-wide transition-colors ${scrolled ? 'text-warm-600' : 'text-cream/70'}`}>
                Family Restaurant
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`rounded-lg px-4 py-2 text-sm font-500 transition-all ${
                  scrolled
                    ? 'text-warm-800 hover:bg-warm-100 hover:text-warm-900'
                    : 'text-cream/90 hover:bg-cream/10 hover:text-cream'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${restaurant.phoneRaw}`}
              className="flex items-center gap-2 rounded-full bg-clay-600 px-5 py-2.5 text-sm font-600 text-cream shadow-md transition-all hover:bg-clay-700 hover:shadow-lg active:scale-95"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
              scrolled ? 'text-warm-800 hover:bg-warm-100' : 'text-cream hover:bg-cream/10'
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          open ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl bg-cream p-4 shadow-xl border border-warm-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="rounded-lg px-4 py-3 text-left text-sm font-500 text-warm-800 transition-colors hover:bg-warm-100"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${restaurant.phoneRaw}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-clay-600 px-4 py-3 text-sm font-600 text-cream"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
