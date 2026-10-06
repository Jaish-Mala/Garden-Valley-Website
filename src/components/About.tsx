import { Utensils, Clock, Heart } from 'lucide-react';
import { restaurant, aboutImage, aboutImageSecondary } from '@/data/restaurant';

const features = [
  { icon: Utensils, text: 'Dine-in, Takeaway & Delivery' },
  { icon: Clock, text: 'Open daily · 12:30 PM – 11:30 PM' },
  { icon: Heart, text: 'Family-friendly setting' },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={aboutImage}
                alt="Warm and inviting restaurant interior with wooden tables"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 right-0 hidden w-40 overflow-hidden rounded-2xl shadow-xl ring-4 ring-cream animate-float sm:block lg:w-44">
              <img
                src={aboutImageSecondary}
                alt="Cozy restaurant table setup"
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-5 -left-3 flex items-center gap-2 rounded-full bg-sage-600 px-4 py-2 text-cream shadow-lg">
              <span className="font-serif text-2xl font-700">4.9</span>
              <span className="text-xs font-500">★ Google Rating</span>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <span className="inline-block rounded-full bg-sage-50 px-4 py-1.5 text-sm font-600 text-sage-700 ring-1 ring-sage-200">
              About Us
            </span>
            <h2 className="mt-4 font-serif text-3xl font-600 leading-tight text-warm-900 text-balance sm:text-4xl">
              About Garden Valley
            </h2>
            <p className="mt-5 text-base leading-relaxed text-warm-700">
              [Restaurant description to be provided]
            </p>

            <div className="mt-8 space-y-3">
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-warm-100 text-warm-700">
                    <f.icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-sm font-500 text-warm-800">{f.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full bg-warm-900 px-6 py-3 text-sm font-600 text-cream shadow-md transition-all hover:bg-warm-800 hover:shadow-lg active:scale-95"
              >
                Explore the Menu
              </button>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-warm-100 px-6 py-3 text-sm font-600 text-warm-800 ring-1 ring-warm-200 transition-all hover:bg-warm-200 active:scale-95"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
