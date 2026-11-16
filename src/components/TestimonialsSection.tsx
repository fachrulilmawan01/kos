import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/kosData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-700 bg-brand-100/80 px-3 py-1 rounded-full border border-brand-200">
            Kata Mereka yang Tinggal di Sini
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Pengalaman Nyata Penghuni KOS Buk Yet
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Dengar langsung cerita mahasiswa dan pekerja yang telah merasakan kenyamanan, ketenangan, dan kehangatan tinggal bersama kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item: Testimonial) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Stars and Room Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700">
                    {item.roomType}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic relative">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-200"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-extrabold text-stone-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-stone-500">{item.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle className="w-3 h-3" /> {item.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
