import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink, 
  GraduationCap, 
  ShoppingBag, 
  Utensils, 
  HeartPulse, 
  Train 
} from 'lucide-react';
import { KOS_INFO, LANDMARKS } from '../data/kosData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(KOS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLandmarkIcon = (category: string) => {
    switch (category) {
      case 'Kampus':
        return <GraduationCap className="w-4 h-4 text-blue-600" />;
      case 'Belanja':
        return <ShoppingBag className="w-4 h-4 text-emerald-600" />;
      case 'Kuliner':
        return <Utensils className="w-4 h-4 text-amber-600" />;
      case 'Kesehatan':
        return <HeartPulse className="w-4 h-4 text-rose-600" />;
      case 'Transportasi':
        return <Train className="w-4 h-4 text-indigo-600" />;
      default:
        return <MapPin className="w-4 h-4 text-brand-600" />;
    }
  };

  return (
    <section id="lokasi" className="py-16 sm:py-24 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-700 bg-brand-100/80 px-3 py-1 rounded-full border border-brand-200">
            Akses & Lokasi Strategis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Kawasan Tenang dengan Akses Super Dekat ke Kampus & Pusat Kota
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Berada di lingkar emas Lowokwaru, memudahkan mobilitas harian Anda tanpa terjebak macet berjam-jam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Navigation & Landmarks (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-stone-900">
                      Alamat Lengkap KOS Buk Yet
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                      {KOS_INFO.address}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-stone-100 border border-stone-200 shrink-0 transition-colors"
                  title="Salin Alamat"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={KOS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Petunjuk Arah (Google Maps)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="inline-flex items-center px-3 py-2 rounded-xl bg-stone-100 text-stone-700 text-xs font-semibold">
                  Akses Mobil Papasan & Jalan Beraspal Mulus
                </span>
              </div>
            </div>

            {/* Landmarks List */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm">
              <h4 className="font-extrabold text-sm sm:text-base text-stone-900 mb-4">
                Jarak Tempuh ke Destinasi Populer
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LANDMARKS.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-2xl bg-stone-50 border border-stone-200/70 flex items-center justify-between gap-3 hover:border-brand-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0">
                        {getLandmarkIcon(item.category)}
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-bold text-stone-800 truncate">{item.name}</p>
                        <p className="text-[11px] text-stone-500">{item.distance}</p>
                      </div>
                    </div>

                    <span className="shrink-0 px-2.5 py-1 rounded-lg bg-emerald-100/80 text-emerald-800 text-[11px] font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-stone-200 relative aspect-square lg:aspect-[4/5]">
              <iframe
                title="Peta Lokasi KOS Buk Yet Malang"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15805.578644598006!2d112.6074900!3d-7.9478200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827e8a9f6003%3A0x889c4b7ecb8f4192!2sUniversitas%20Brawijaya!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen={false}
              />
              
              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-stone-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-stone-900">Area Kos: Lowokwaru, Malang</p>
                  <p className="text-[11px] text-stone-500">Lingkungan aman & ramah mahasiswa</p>
                </div>
                <a
                  href={KOS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800"
                >
                  Buka App
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
