import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { KOS_INFO, LANDMARKS } from '../data/kosData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(KOS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lokasi" className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header in Modern Style */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            LOKASI STRATEGIS & KAMPUS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Sangat Dekat dengan Universitas Adzkia Padang
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Lokasi hunian berada di Kalumbuk, Kuranji. Berjarak ±400 meter (2-3 menit perjalanan) dari kampus Universitas Adzkia sehingga sangat praktis bagi mahasiswa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: Cards & Landmarks */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Primary Campus Box */}
            <div className="p-4 rounded-2xl bg-brand-900 text-white space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-brand-300 bg-brand-800/80 px-2.5 py-0.5 rounded-full border border-brand-700">
                  Kampus Utama Terdekat
                </span>
                <span className="text-xs font-black text-brand-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> ±2-3 Menit
                </span>
              </div>
              <h3 className="font-black text-base text-white">
                Universitas Adzkia Padang
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Hanya ±400 meter dari gerbang kos. Bisa ditempuh dengan jalan kaki santai atau 2 menit berkendara sepeda motor.
              </p>
            </div>

            {/* Address Box */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-black text-gray-900 text-xs sm:text-sm">
                      {KOS_INFO.altName} ({KOS_INFO.name})
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {KOS_INFO.address}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-white border border-gray-200 text-gray-500 hover:text-gray-800 transition-colors shrink-0"
                  title="Salin Alamat"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-brand-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="pt-1 flex flex-wrap gap-2">
                <a
                  href={KOS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-black transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Petunjuk Arah Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-white/80" />
                </a>
              </div>
            </div>

            {/* Other Landmarks */}
            <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-2.5">
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider">
                Akses Sekitar Kalumbuk & Kampus
              </h4>
              <div className="space-y-1.5">
                {LANDMARKS.filter(l => !l.highlight).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 text-xs text-gray-800"
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                      <span className="font-semibold text-gray-900">{item.name}</span>
                    </div>
                    <span className="font-bold text-gray-600 flex items-center gap-1 shrink-0 text-[11px]">
                      {item.duration} ({item.distance})
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Embedded Map */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-gray-300 shadow-md aspect-[4/3] bg-gray-100 relative">
              <iframe
                title="Peta Lokasi Kos Putra Bu Yett Dekat Universitas Adzkia Padang"
                src={KOS_INFO.googleMapsEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-[11px] text-gray-500 mt-2 text-center font-medium">
              📍 Titik lokasi tepat di Kalumbuk, Kuranji — selangkah dari kampus Universitas Adzkia.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
