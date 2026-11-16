import React from 'react';
import { 
  ShieldCheck, 
  Droplets, 
  UtensilsCrossed, 
  Sun, 
  Sparkles, 
  KeyRound 
} from 'lucide-react';
import { GENERAL_FACILITIES, Facility } from '../data/kosData';

export const FacilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-600" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-orange-500" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-indigo-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="fasilitas" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Fasilitas Bersama
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Fasilitas Esensial untuk Kebutuhan Harian
          </h2>
          <p className="text-stone-600 text-sm">
            Semua fasilitas bersama dirawat dengan baik untuk menunjang kenyamanan dan kebersihan penghuni.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {GENERAL_FACILITIES.map((facility: Facility) => (
            <div
              key={facility.id}
              className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 hover:border-stone-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center">
                  {getIcon(facility.iconName)}
                </div>
                {facility.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                    {facility.badge}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-sm text-stone-900">
                {facility.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
