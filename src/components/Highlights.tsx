import { Star, Utensils, MapPin } from 'lucide-react';
import { highlights } from '@/data/restaurant';

const iconMap: Record<string, typeof Star> = {
  star: Star,
  utensils: Utensils,
  mapPin: MapPin,
};

export default function Highlights() {
  return (
    <section className="relative -mt-20 z-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {highlights.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Star;
            return (
              <div
                key={item.label}
                className="reveal group flex items-center gap-4 rounded-2xl bg-cream p-5 shadow-[0_8px_32px_-12px_rgba(74,58,40,0.18)] ring-1 ring-warm-200/60 transition-all hover:shadow-[0_12px_40px_-12px_rgba(74,58,40,0.22)] hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sage-50 text-sage-600 ring-1 ring-sage-200 transition-colors group-hover:bg-sage-100">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-serif text-lg font-600 text-warm-900">{item.label}</p>
                  <p className="text-sm text-warm-600">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
