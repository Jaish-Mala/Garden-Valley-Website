import { Phone, MessageCircle, Utensils, Navigation } from 'lucide-react';
import { restaurant } from '@/data/restaurant';

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="reveal relative overflow-hidden rounded-3xl bg-warm-900 px-6 py-14 text-center shadow-2xl sm:px-12 sm:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sage-400 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-clay-400 blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="font-serif text-3xl font-600 leading-tight text-cream text-balance sm:text-4xl">
              Visit Garden Valley
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-cream/70">
              Visit us in Badlapur West, or contact us for dine-in, takeaway and delivery.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${restaurant.phoneRaw}`}
                className="flex items-center justify-center gap-2 rounded-full bg-clay-600 px-7 py-3.5 text-sm font-600 text-cream shadow-lg transition-all hover:bg-clay-700 hover:shadow-xl active:scale-95"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${restaurant.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-sage-600 px-7 py-3.5 text-sm font-600 text-cream shadow-lg transition-all hover:bg-sage-700 hover:shadow-xl active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
              <button
                onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 rounded-full bg-cream/10 px-7 py-3.5 text-sm font-600 text-cream ring-1 ring-cream/25 backdrop-blur-sm transition-all hover:bg-cream/20 active:scale-95"
              >
                <Utensils className="h-4 w-4" />
                View Menu
              </button>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-cream/10 px-7 py-3.5 text-sm font-600 text-cream ring-1 ring-cream/25 backdrop-blur-sm transition-all hover:bg-cream/20 active:scale-95"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
