import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Eye, 
  ShieldCheck, 
  Droplets, 
  GraduationCap, 
  CheckCircle2,
  BedSingle,
  Clock
} from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

interface HeroProps {
  onOpenSurvey: () => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSurvey, onExploreRooms }) => {
  return (
    <section id="beranda" className="pt-36 pb-16 sm:pt-40 sm:pb-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Text & Key Highlights */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Professional Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-white text-xs font-bold shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>{KOS_INFO.targetAudience}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                <Clock className="w-3.5 h-3.5 text-emerald-700" />
                <span>±2-3 Menit ke Universitas Adzkia</span>
              </span>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
                Hunian Tenang & Hemat untuk Mahasiswa di{' '}
                <span className="text-emerald-700">KOS Buk Yet</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-stone-700 leading-snug">
                Pilihan Kamar <strong className="text-stone-900">1 Bed & 2 Bed</strong> — Tarif Bersahabat Mulai <strong className="text-emerald-700">Rp 350.000</strong>/bulan.
              </p>
            </div>

            {/* Description */}
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
              Solusi hunian ideal bagi mahasiswa Universitas Adzkia dan perguruan tinggi sekitar Kalumbuk, Padang. Lingkungan sejuk, tenang untuk belajar tugas akhir, air bersih gratis melimpah, dan parkir motor aman berpagar.
            </p>

            {/* Quick Benefits Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto lg:mx-0 pt-1">
              <div className="p-3 rounded-xl bg-white border border-stone-200 text-left shadow-2xs">
                <GraduationCap className="w-4 h-4 text-emerald-700 mb-1" />
                <p className="text-[11px] font-bold text-stone-900">Kampus Adzkia</p>
                <p className="text-[10px] text-stone-500">±400 Meter (2 mnt)</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 text-left shadow-2xs">
                <BedSingle className="w-4 h-4 text-stone-700 mb-1" />
                <p className="text-[11px] font-bold text-stone-900">1 Bed & 2 Bed</p>
                <p className="text-[10px] text-stone-500">Mulai Rp 350rb/bln</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 text-left shadow-2xs">
                <Droplets className="w-4 h-4 text-blue-600 mb-1" />
                <p className="text-[11px] font-bold text-stone-900">Air Bersih Gratis</p>
                <p className="text-[10px] text-stone-500">Lancar & jernih</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 text-left shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-700 mb-1" />
                <p className="text-[11px] font-bold text-stone-900">Parkir Berpagar</p>
                <p className="text-[10px] text-stone-500">Aman di halaman</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onExploreRooms}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <span>Lihat Tipe Kamar & Tarif</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSurvey}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-bold text-xs sm:text-sm border border-stone-300 transition-colors"
              >
                <Eye className="w-4 h-4 text-emerald-700" />
                <span>Jadwal Survei Kamar</span>
              </button>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-stone-500 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Khusus Mahasiswa Pria
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Tanpa Biaya Makelar
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Bebas Iuran Sampah
              </span>
            </div>

          </div>

          {/* Right: Modern Professional Visual Presentation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-200 aspect-[4/3] sm:aspect-[1/1]">
                <img
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
                  alt="Kamar KOS Buk Yet Dekat Universitas Adzkia Padang"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

                {/* Top Badge on Photo */}
                <div className="absolute top-3 left-3 bg-stone-900/90 text-white px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-xs flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>±2 Menit ke Univ. Adzkia</span>
                </div>
                
                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                        {KOS_INFO.targetAudience}
                      </span>
                      <p className="text-sm font-extrabold text-stone-900">{KOS_INFO.name} ({KOS_INFO.altName})</p>
                      <p className="text-[11px] text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-stone-400" /> Kalumbuk, Kuranji, Padang
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-500 block">Sewa Mulai</span>
                      <span className="text-base font-black text-stone-900">
                        Rp 350.000<span className="text-xs font-normal text-stone-500">/bln</span>
                      </span>
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
