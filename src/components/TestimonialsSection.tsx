import React from 'react';
import { Star, GraduationCap } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/kosData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-rukita-700 bg-rukita-50 px-3 py-1 rounded-full border border-rukita-200">
            CERITA PENGHUNI KOS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Pengalaman Tinggal Mahasiswa
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Simak ulasan rekan mahasiswa Universitas Adzkia dan perguruan tinggi sekitar yang tinggal di KOS Buk Yet.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {TESTIMONIALS.map((item: Testimonial) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-4 flex flex-col justify-between shadow-xs hover:border-rukita-300 transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-white text-gray-700 border border-gray-200">
                    {item.roomType}
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-rukita-200"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-black text-xs sm:text-sm text-gray-900">{item.name}</h4>
                    <p className="text-[11px] text-gray-500 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-rukita-500" /> {item.role}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-black text-rukita-800 bg-rukita-50 px-2.5 py-1 rounded-full border border-rukita-200">
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
