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
            Lokasi Strategis
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Alamat & Akses Lokasi Kos
          </h2>
          <p className="text-stone-600 text-sm">
            Terletak di Kalumbuk, Kuranji, Kota Padang dengan akses dekat ke jalur By Pass dan berbagai kampus perguruan tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Address & Nearby landmarks */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Address Box */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-extrabold text-stone-900 text-sm sm:text-base">
                      {KOS_INFO.altName} ({KOS_INFO.name})
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {KOS_INFO.address}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-white border border-stone-200 text-stone-500 hover:text-stone-800 transition-colors shrink-0"
                  title="Salin Alamat"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={KOS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Buka Petunjuk Arah di Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Landmarks */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                Akses Terdekat
              </h4>
              <div className="space-y-2">
                {LANDMARKS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 text-xs text-stone-800"
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="font-bold text-stone-600 flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3 text-emerald-600" /> {item.duration} ({item.distance})
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Embedded Map */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-xs aspect-[4/3] bg-stone-100 relative">
              <iframe
                title="Peta Lokasi Kos Putra Bu Yett Padang"
                src={KOS_INFO.googleMapsEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-[11px] text-stone-500 mt-2 text-center">
              *Klik "Buka Petunjuk Arah" untuk langsung membuka navigasi GPS di aplikasi Google Maps HP Anda.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
