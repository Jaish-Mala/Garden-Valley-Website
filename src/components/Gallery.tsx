import { Camera } from 'lucide-react';
import { galleryImages } from '@/data/restaurant';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-sage-50 px-4 py-1.5 text-sm font-600 text-sage-700 ring-1 ring-sage-200">
            Gallery
          </span>
          <h2 className="mt-4 font-serif text-3xl font-600 leading-tight text-warm-900 text-balance sm:text-4xl">
            Moments at Garden Valley
          </h2>
          <p className="mt-4 text-base text-warm-600">
            A glimpse of the food and atmosphere that await you. These are sample images — real photos can be swapped in anytime.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden rounded-2xl shadow-md ${img.span} ${img.aspect}`}
              style={{ transitionDelay: `${img.delay}ms` }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif text-base font-600 text-cream">{img.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 flex items-center justify-center gap-2 text-sm text-warm-500">
          <Camera className="h-4 w-4" />
          <span>Sample images — to be replaced with Garden Valley's own photographs.</span>
        </div>
      </div>
    </section>
  );
}
