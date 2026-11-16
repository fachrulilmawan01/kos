import React from 'react';
import { 
  ShieldCheck, 
  Droplets, 
  UtensilsCrossed, 
  Sun, 
  Sparkles, 
  CheckCircle2,
  Zap,
  Wifi
} from 'lucide-react';
import { GENERAL_FACILITIES, Facility } from '../data/kosData';

export const FacilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-emerald-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-brand-500" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-600" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-orange-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-500" />;
    }
  };

  return (
    <section id="fasilitas" className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            FASILITAS BERSAMA
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Fasilitas Lengkap untuk Kebutuhan Harian
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Semua fasilitas dirawat secara berkala untuk menunjang kenyamanan, kebersihan, dan kemudahan belajar anak kos.
          </p>
        </div>

        {/* Grid of facilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {GENERAL_FACILITIES.map((facility: Facility) => (
            <div
              key={facility.id}
              className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center">
                  {getIcon(facility.iconName)}
                </div>
                {facility.badge && (
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                    facility.badge === 'FREE'
                      ? 'bg-amber-100 text-amber-800 border-amber-300 font-extrabold'
                      : 'bg-gray-100 text-gray-700 border-gray-200'
                  }`}>
                    {facility.badge}
                  </span>
                )}
              </div>

              <h3 className="font-black text-sm text-gray-900">
                {facility.title}
              </h3>
              
              <p className="text-xs text-gray-600 leading-relaxed">
                {facility.description}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-brand-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Termasuk dalam Biaya Sewa</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
