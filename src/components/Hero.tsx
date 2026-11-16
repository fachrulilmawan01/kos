import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Eye, 
  ShieldCheck, 
  Droplets, 
  Sparkles, 
  CheckCircle2,
  BedSingle
} from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

interface HeroProps {
  onOpenSurvey: () => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSurvey, onExploreRooms }) => {
  return (
    <section id="beranda" className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Text & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clean Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{KOS_INFO.typeBadge} • Kalumbuk, Kuranji, Kota Padang</span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.2]">
                Hunian Tenang & Nyaman di{' '}
                <span className="text-emerald-700">KOS Buk Yet</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-stone-700">
                Pilihan Kamar <span className="font-bold text-stone-900">1 Bed & 2 Bed</span> — Harga Mulai <span className="font-extrabold text-emerald-700">Rp 350.000</span>/bulan.
              </p>
            </div>

            {/* Description */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Tempat tinggal ideal bagi mahasiswa dan pekerja di Padang. Lingkungan asri, bebas bising kendaraan, air bersih lancar melimpah, dan akses pagar fleksibel yang aman.
            </p>

            {/* Clean Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-1">
              <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-2xs text-left">
                <BedSingle className="w-4 h-4 text-emerald-600 mb-1" />
                <p className="text-xs font-bold text-stone-900">1 Bed / 2 Bed</p>
                <p className="text-[11px] text-stone-500">Mulai Rp 350rb/bln</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-2xs text-left">
                <Droplets className="w-4 h-4 text-blue-600 mb-1" />
                <p className="text-xs font-bold text-stone-900">Free Air Bersih</p>
                <p className="text-[11px] text-stone-500">Jernih & gratis</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-2xs text-left col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mb-1" />
                <p className="text-xs font-bold text-stone-900">Parkir Motor Aman</p>
                <p className="text-[11px] text-stone-500">Halaman berpagar</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onExploreRooms}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-xs transition-colors"
              >
                <span>Lihat Tipe Kamar & Tarif</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSurvey}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-bold text-sm border border-stone-300 transition-colors"
              >
                <Eye className="w-4 h-4 text-emerald-700" />
                <span>Jadwal Survei Lokasi</span>
              </button>
            </div>

            {/* Micro guarantees */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-stone-500 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Tanpa Biaya Makelar
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Bebas Iuran Sampah
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Dekat Jalur By Pass
              </span>
            </div>

          </div>

          {/* Right: Clean Image Presentation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-200 aspect-[4/3] sm:aspect-[1/1]">
                <img
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
                  alt="Kamar KOS Buk Yet Padang"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Hunian Siap Huni</span>
                      <p className="text-sm font-extrabold text-stone-900">KOS Buk Yet (Putra)</p>
                      <p className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-stone-400" /> Kalumbuk, Padang
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-stone-500 block">Tarif Mulai</span>
                      <span className="text-base font-extrabold text-stone-900">Rp 350.000<span className="text-xs font-normal text-stone-500">/bln</span></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
