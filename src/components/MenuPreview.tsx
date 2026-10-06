import { Utensils, ArrowRight, Phone } from 'lucide-react';
import { restaurant, menuPreviewImage } from '@/data/restaurant';



export default function MenuPreview() {
  return (
    <section id="menu" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-warm-50">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-sage-50 px-4 py-1.5 text-sm font-600 text-sage-700 ring-1 ring-sage-200">
            Our Menu
          </span>
          <h2 className="mt-4 font-serif text-3xl font-600 leading-tight text-warm-900 text-balance sm:text-4xl">
            A taste of what awaits you
          </h2>
          <p className="mt-4 text-base text-warm-600">
            Menu items and prices will be added after confirmation from the restaurant.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="reveal lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={menuPreviewImage}
                alt="Assorted Indian dishes with curries, naan, and biryani"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-serif text-2xl font-600 text-cream">Menu coming soon</p>
                <p className="mt-1 text-sm text-cream/80">Price range: {restaurant.priceRange}</p>
              </div>
            </div>
          </div>

          <div className="reveal lg:col-span-3" style={{ transitionDelay: '120ms' }}>
            <div className="rounded-3xl bg-cream p-6 shadow-lg ring-1 ring-warm-200/60 sm:p-8">
              <div className="flex items-center gap-3 pb-5 border-b border-warm-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-clay-50 text-clay-600">
                  <Utensils className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-600 text-warm-900">Menu Preview</h3>
                  <p className="text-sm text-warm-500">Menu details will be added after confirmation from the restaurant.</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-warm-50 p-6 ring-1 ring-warm-200/50 text-center">
                <p className="font-600 text-warm-800 text-sm">Menu coming soon</p>
                <p className="mt-2 text-sm text-warm-500">Menu items and prices will be added after confirmation from the restaurant.</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${restaurant.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-clay-600 px-6 py-3 text-sm font-600 text-cream shadow-md transition-all hover:bg-clay-700 hover:shadow-lg active:scale-95"
                >
                  View Full Menu
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`tel:${restaurant.phoneRaw}`}
                  className="flex items-center gap-2 rounded-full bg-warm-100 px-6 py-3 text-sm font-600 text-warm-800 ring-1 ring-warm-200 transition-all hover:bg-warm-200 active:scale-95"
                >
                  <Phone className="h-4 w-4" />
                  Call to Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
