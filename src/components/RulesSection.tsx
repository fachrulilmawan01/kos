import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { RULES } from '../data/kosData';

export const RulesSection: React.FC = () => {
  return (
    <section id="aturan" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-rukita-700 bg-rukita-50 px-3 py-1 rounded-full border border-rukita-200">
            TATA TERTIB HUNIAN
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Norma & Kenyamanan Bersama
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Aturan diterapkan demi menjamin ketenangan waktu belajar, kenyamanan sesama rekan mahasiswa, serta keamanan lingkungan kos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {RULES.map((rule) => (
            <div
              key={rule.id}
              className="p-5 rounded-2xl bg-white border border-gray-200 space-y-2 shadow-xs hover:border-rukita-300 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-rukita-50 text-rukita-700 font-black text-xs flex items-center justify-center shrink-0 border border-rukita-200">
                  {rule.id}
                </span>
                <h3 className="font-black text-xs sm:text-sm text-gray-900">
                  {rule.title}
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed pl-8">
                {rule.description}
              </p>
            </div>
          ))}

          <div className="p-5 rounded-2xl bg-gray-900 text-white space-y-2 shadow-xs">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-rukita-400 shrink-0" />
              <h3 className="font-black text-xs sm:text-sm text-white">
                Ketenangan Orang Tua
              </h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed pl-7">
              Orang tua dapat tenang karena lingkungan kos khusus mahasiswa pria ini terjaga, tertib, dan bebas dari pergaulan bebas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
