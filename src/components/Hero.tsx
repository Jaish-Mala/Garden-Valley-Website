import { Star, Utensils, MapPin, ArrowDown, MessageCircle } from 'lucide-react';
import { restaurant, heroImage } from '@/data/restaurant';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Family enjoying a traditional Indian meal together"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/70 to-warm-900/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/95 via-warm-900/10 to-warm-900/20" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-1.5 backdrop-blur-md ring-1 ring-cream/25 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-sage-400 animate-pulse" />
            <span className="text-sm font-500 text-cream">Open now · {restaurant.hours}</span>
          </div>

          <h1 className="font-serif text-4xl font-600 leading-[1.1] text-cream text-balance drop-shadow-md animate-fade-in-up sm:text-5xl lg:text-6xl">
            {restaurant.tagline}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/90 drop-shadow-sm animate-fade-in-up sm:text-lg" style={{ animationDelay: '0.1s' }}>
            {restaurant.subheading}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center gap-2 rounded-full bg-clay-600 px-7 py-3.5 text-sm font-600 text-cream shadow-lg transition-all hover:bg-clay-700 hover:shadow-xl active:scale-95"
            >
              View Menu
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <a
              href={`https://wa.me/${restaurant.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-cream/15 px-7 py-3.5 text-sm font-600 text-cream ring-1 ring-cream/30 backdrop-blur-md transition-all hover:bg-cream/25 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2.5 rounded-xl bg-cream/15 px-4 py-2.5 backdrop-blur-md ring-1 ring-cream/25">
              <Star className="h-5 w-5 fill-sage-300 text-sage-300" />
              <span className="text-sm font-600 text-cream">4.9★ Rated</span>
              <span className="text-xs text-cream/70">· 38 Google reviews</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-cream/15 px-4 py-2.5 backdrop-blur-md ring-1 ring-cream/25">
              <Utensils className="h-5 w-5 text-sage-300" />
              <span className="text-sm font-600 text-cream">Dine-in · Takeaway · Delivery</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-cream/15 px-4 py-2.5 backdrop-blur-md ring-1 ring-cream/25">
              <MapPin className="h-5 w-5 text-sage-300" />
              <span className="text-sm font-600 text-cream">Badlapur West</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 backdrop-blur-md ring-1 ring-cream/25">
          <ArrowDown className="h-4 w-4 text-cream/80" />
        </div>
      </div>
    </section>
  );
}
