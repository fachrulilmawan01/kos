import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/kosData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Ulasan Penghuni
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Pengalaman Tinggal di KOS Buk Yet
          </h2>
          <p className="text-stone-600 text-sm">
            Pendapat langsung dari rekan mahasiswa dan pekerja yang telah menyewa kamar di sini.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {TESTIMONIALS.map((item: Testimonial) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                    {item.roomType}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-9 h-9 rounded-full object-cover border border-stone-200"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-stone-900">{item.name}</h4>
                    <p className="text-[11px] text-stone-500">{item.role}</p>
                  </div>
                </div>

                <span className="text-[10px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
