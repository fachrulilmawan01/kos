import React from 'react';
import { 
  ShieldCheck, 
  Wifi, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Eye, 
  Star 
} from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

interface HeroProps {
  onOpenSurvey: () => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSurvey, onExploreRooms }) => {
  return (
    <section id="beranda" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-100/60 to-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-800 tracking-wide">
                Tersedia Kamar Siap Huni Bulan Ini
              </span>
              <span className="text-emerald-300">|</span>
              <span className="text-xs font-medium text-stone-600 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.9 Rating
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Hunian Kost Nyaman & Aman di{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-brand-700">
                KOS Buk Yet
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Pilihan tempat tinggal ideal bagi mahasiswa & pekerja di kawasan strategis Lowokwaru, Malang. Fasilitas kamar lengkap dengan AC, WiFi kencang 150 Mbps, dapur bersama, dan suasana kekeluargaan yang asri.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-stone-200/70 shadow-xs">
                <Wifi className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-xs font-medium text-stone-800">Free WiFi 150 Mbps</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-stone-200/70 shadow-xs">
                <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-xs font-medium text-stone-800">Akses Bebas 24 Jam</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-stone-200/70 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-xs font-medium text-stone-800">CCTV & One Gate</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-stone-200/70 shadow-xs">
                <Sparkles className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-xs font-medium text-stone-800">Dapur & Dispenser</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreRooms}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-brand-700 hover:from-emerald-700 hover:to-brand-800 rounded-xl shadow-lg shadow-emerald-700/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Lihat Pilihan Kamar</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSurvey}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl shadow-xs transition-all hover:border-stone-400"
              >
                <Eye className="w-4 h-4 text-brand-600" />
                <span>Jadwalkan Survei Lokasi</span>
              </button>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Tanpa Biaya Makelar
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Air & WiFi Gratis
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Pengelola Responsif
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card with Soft Shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200 aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85"
                  alt="Kamar Tidur Nyaman KOS Buk Yet"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Bottom Photo Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-stone-300 font-medium">Tipe Paling Laris</p>
                      <h4 className="text-sm sm:text-base font-bold text-white">Superior AC Modern</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-stone-300 block">Mulai dari</span>
                      <span className="text-sm sm:text-base font-bold text-emerald-400">Rp 1,45 Juta<span className="text-xs font-normal text-stone-300">/bln</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Location Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-stone-100 flex items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">Lokasi Super Dekat</p>
                  <p className="text-xs sm:text-sm font-bold text-stone-900">4 Menit ke Kampus UB</p>
                </div>
              </div>

              {/* Floating Badge 2: Homelike Feeling */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white rounded-2xl p-3.5 shadow-xl border border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">Sentuhan Ibu Kos</p>
                  <p className="text-xs sm:text-sm font-bold text-stone-900">Serasa di Rumah Sendiri</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
