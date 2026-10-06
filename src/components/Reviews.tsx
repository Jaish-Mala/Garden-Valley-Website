import { Star, ExternalLink } from 'lucide-react';
import { restaurant } from '@/data/restaurant';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-warm-50">
      <div className="mx-auto max-w-5xl">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-sage-50 px-4 py-1.5 text-sm font-600 text-sage-700 ring-1 ring-sage-200">
            Reviews
          </span>
          <h2 className="mt-4 font-serif text-3xl font-600 leading-tight text-warm-900 text-balance sm:text-4xl">
            Our Google Rating
          </h2>
        </div>

        <div className="reveal mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center rounded-3xl bg-cream p-8 text-center shadow-md ring-1 ring-warm-200/60">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 fill-sage-400 text-sage-400" />
                ))}
              </div>
              <p className="mt-4 font-serif text-5xl font-700 text-warm-900">{restaurant.rating}</p>
              <p className="mt-2 text-sm font-500 text-warm-600">Rating on Google</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-3xl bg-cream p-8 text-center shadow-md ring-1 ring-warm-200/60">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-50 text-sage-600 ring-1 ring-sage-200">
                <span className="font-serif text-2xl font-700">{restaurant.reviewCount}</span>
              </div>
              <p className="mt-4 font-serif text-2xl font-600 text-warm-900">Google Reviews</p>
              <p className="mt-2 text-sm font-500 text-warm-600">Based on 38 Google reviews</p>
            </div>
          </div>

          <div className="reveal mt-8 rounded-2xl border border-dashed border-warm-300 bg-warm-50 px-6 py-5 text-center">
            <p className="text-sm text-warm-500">
              Real customer reviews can be added here.
            </p>
          </div>

          <div className="reveal mt-8 text-center">
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-warm-900 px-6 py-3 text-sm font-600 text-cream shadow-md transition-all hover:bg-warm-800 hover:shadow-lg active:scale-95"
            >
              Read All Reviews on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
