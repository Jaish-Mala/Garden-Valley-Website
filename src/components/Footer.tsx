import { Phone, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';
import { restaurant } from '@/data/restaurant';

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-cream/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-600 text-cream">
                <span className="font-serif text-lg font-700">G</span>
              </div>
              <div className="leading-tight">
                <p className="font-serif text-base font-600 text-cream">Garden Valley</p>
                <p className="text-[11px] tracking-wide text-cream/50">Family Restaurant</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {restaurant.address.line1}, {restaurant.address.line3}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-600 text-cream">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${restaurant.phoneRaw}`} className="flex items-center gap-2.5 transition-colors hover:text-cream">
                  <Phone className="h-4 w-4 text-sage-400" />
                  {restaurant.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${restaurant.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-cream"
                >
                  <MessageCircle className="h-4 w-4 text-sage-400" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-600 text-cream">Location</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-400" />
                <span className="leading-relaxed">
                  {restaurant.address.line1}, {restaurant.address.line2}, {restaurant.address.line3}
                </span>
              </li>
              <li>
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-cream"
                >
                  <Navigation className="h-4 w-4 text-sage-400" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-600 text-cream">Hours</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-sage-400" />
                <span>{restaurant.hours}</span>
              </li>
              <li className="text-cream/50">{restaurant.hoursEveryDay}</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {restaurant.services.map((s) => (
                <span key={s} className="rounded-full bg-cream/10 px-3 py-1 text-xs font-500 text-cream/70 ring-1 ring-cream/15">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 sm:flex-row">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
