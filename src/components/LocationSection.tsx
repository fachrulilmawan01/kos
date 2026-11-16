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
    <section id="lokasi" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Akses & Lokasi Kampus
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Sangat Dekat dengan Universitas Adzkia Padang
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Hanya butuh 2-3 menit perjalanan menuju kampus Universitas Adzkia di Kalumbuk, Kuranji. Mahasiswa dapat menghemat waktu dan tenaga tanpa khawatir macet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Address & Nearby landmarks */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Primary Campus Highlight Card */}
            <div className="p-4 rounded-xl bg-stone-900 text-white space-y-2 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  Kampus Utama Terdekat
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> ±2-3 Menit
                </span>
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                Universitas Adzkia Padang
              </h3>
              <p className="text-xs text-stone-300">
                Jarak hanya ±400 meter dari gerbang kos. Bisa jalan kaki santai atau 2 menit dengan sepeda motor.
              </p>
            </div>

            {/* Address Box */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
                      {KOS_INFO.altName} ({KOS_INFO.name})
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {KOS_INFO.address}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-white border border-stone-200 text-stone-500 hover:text-stone-800 transition-colors shrink-0"
                  title="Salin Alamat"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="pt-1 flex flex-wrap gap-2">
                <a
                  href={KOS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Buka Petunjuk Arah Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Other Landmarks */}
            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2.5">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                Jarak Tempuh ke Titik Penting Lainnya
              </h4>
              <div className="space-y-1.5">
                {LANDMARKS.filter(l => !l.highlight).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-lg bg-stone-50 text-xs text-stone-800"
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="font-semibold text-stone-600 flex items-center gap-1 shrink-0 text-[11px]">
                      {item.duration} ({item.distance})
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Map Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-xs aspect-[4/3] bg-stone-100 relative">
              <iframe
                title="Peta Lokasi Kos Putra Bu Yett Dekat Universitas Adzkia Padang"
                src={KOS_INFO.googleMapsEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-[11px] text-stone-500 mt-2 text-center">
              📍 Titik lokasi tepat di Kalumbuk, Kuranji — sangat mudah dijangkau dari kampus Universitas Adzkia.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
