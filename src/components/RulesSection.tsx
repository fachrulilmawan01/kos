import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { RULES } from '../data/kosData';

export const RulesSection: React.FC = () => {
  return (
    <section id="aturan" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Kenyamanan Bersama
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Tata Tertib & Norma Hunian
          </h2>
          <p className="text-stone-600 text-sm">
            Diterapkan demi memastikan ketertiban, keamanan kendaraan dan barang berharga, serta ketenangan waktu istirahat malam.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {RULES.map((rule) => (
            <div
              key={rule.id}
              className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                  {rule.id}
                </span>
                <h3 className="font-bold text-xs sm:text-sm text-stone-900">
                  {rule.title}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pl-7">
                {rule.description}
              </p>
            </div>
          ))}

          <div className="p-4 rounded-xl bg-stone-900 text-white space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <h3 className="font-bold text-xs sm:text-sm text-white">
                Kepercayaan Keluarga
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed pl-7">
              Orang tua dapat tenang karena kos putra ini mengedepankan etika sopan santun dan lingkungan positif.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
