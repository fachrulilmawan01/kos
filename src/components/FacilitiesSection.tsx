import React from 'react';
import { 
  Wifi, 
  UtensilsCrossed, 
  Droplets, 
  ShieldCheck, 
  Car, 
  Shirt, 
  Sparkles, 
  Coffee 
} from 'lucide-react';
import { GENERAL_FACILITIES, Facility } from '../data/kosData';

export const FacilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-blue-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-amber-600" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-cyan-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Car':
        return <Car className="w-6 h-6 text-indigo-600" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-pink-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-teal-600" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-orange-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id="fasilitas" className="py-16 sm:py-24 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-700 bg-brand-100/80 px-3 py-1 rounded-full border border-brand-200">
            Fasilitas Bersama
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Semua yang Anda Butuhkan untuk Kenyamanan Hidup Sehari-Hari
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Tidak perlu repot membeli perlengkapan dasar. Kami sediakan fasilitas bersama yang terawat, higienis, dan gratis digunakan seluruh penghuni.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GENERAL_FACILITIES.map((facility: Facility) => (
            <div
              key={facility.id}
              className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-md hover:border-brand-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center shrink-0">
                    {getIcon(facility.iconName)}
                  </div>
                  {facility.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                      {facility.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-stone-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Termasuk Free Fasilitas</span>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Facility Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-900 to-stone-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Punya Kebutuhan Spesifik atau Alat Elektronik Tambahan?
            </h4>
            <p className="text-sm text-stone-300 max-w-2xl">
              Kami menerima penyesuaian kebutuhan penghuni, seperti slot parkir mobil tambahan, tempat penyimpanan koper, atau izin alat elektronik dengan biaya bersahabat.
            </p>
          </div>
          <a
            href="#kalkulator"
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-stone-900 font-bold text-sm hover:bg-stone-100 transition-all shadow-md active:scale-95"
          >
            Coba Simulasi Sewa
          </a>
        </div>

      </div>
    </section>
  );
};
