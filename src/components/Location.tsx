import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react';
import { restaurant } from '@/data/restaurant';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Location() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-sage-50 px-4 py-1.5 text-sm font-600 text-sage-700 ring-1 ring-sage-200">
            Visit Us
          </span>
          <h2 className="mt-4 font-serif text-3xl font-600 leading-tight text-warm-900 text-balance sm:text-4xl">
            Find us in Badlapur West
          </h2>
          <p className="mt-4 text-base text-warm-600">
            Shop 01, Solse Market, opposite the ST Stand, Badlapur West.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="reveal space-y-4">
            <div className="rounded-2xl bg-cream p-6 shadow-md ring-1 ring-warm-200/60">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-clay-50 text-clay-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-600 text-warm-900">Our Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-warm-600">
                    {restaurant.address.line1}
                    <br />
                    {restaurant.address.line2}
                    <br />
                    {restaurant.address.line3}
                  </p>
                  <a
                    href={restaurant.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-sage-600 px-4 py-2 text-xs font-600 text-cream transition-all hover:bg-sage-700 active:scale-95"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-cream p-6 shadow-md ring-1 ring-warm-200/60">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-50 text-sage-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-600 text-warm-900">Opening Hours</h3>
                  <p className="mt-1 text-sm text-warm-500">{restaurant.hoursEveryDay}</p>
                  <div className="mt-3 space-y-1.5">
                    {days.map((day) => (
                      <div key={day} className="flex items-center justify-between text-sm">
                        <span className="text-warm-600">{day}</span>
                        <span className="font-500 text-warm-800">{restaurant.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-cream p-6 shadow-md ring-1 ring-warm-200/60">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-100 text-warm-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-600 text-warm-900">Contact</h3>
                  <p className="mt-1 text-sm text-warm-600">{restaurant.phone}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={`tel:${restaurant.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-clay-600 px-4 py-2 text-xs font-600 text-cream transition-all hover:bg-clay-700 active:scale-95"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/${restaurant.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-sage-600 px-4 py-2 text-xs font-600 text-cream transition-all hover:bg-sage-700 active:scale-95"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-warm-50 p-8 text-center shadow-md ring-1 ring-warm-200/60 sm:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sage-100 text-sage-600 ring-1 ring-sage-200">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-600 text-warm-900">Find us in Badlapur West</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-warm-600">
                {restaurant.address.line1}
                <br />
                {restaurant.address.line2}
                <br />
                {restaurant.address.line3}
              </p>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay-600 px-6 py-3 text-sm font-600 text-cream shadow-md transition-all hover:bg-clay-700 hover:shadow-lg active:scale-95"
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
