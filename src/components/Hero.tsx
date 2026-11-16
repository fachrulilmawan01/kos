import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  BedSingle, 
  Tag, 
  GraduationCap, 
  CheckCircle2, 
  Droplets, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Eye,
  Zap,
  Wifi,
  Image as ImageIcon
} from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

interface HeroProps {
  onOpenSurvey: () => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSurvey, onExploreRooms }) => {
  const [selectedBedFilter, setSelectedBedFilter] = useState<'all' | '1-bed' | '2-bed'>('all');
  const [activeHeroImage, setActiveHeroImage] = useState<string>('/images/kos-bu-yett-kamar-maps.jpg');

  const handleFilterAndScroll = (type: 'all' | '1-bed' | '2-bed') => {
    setSelectedBedFilter(type);
    const el = document.getElementById('kamar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="pt-32 pb-16 sm:pt-36 sm:pb-20 bg-[#FAF9F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Modern Filter Widget */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badges in Modern style */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-black shadow-xs">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>HIGHLIGHT: FREE AIR, LISTRIK & WIFI</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-black shadow-xs">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{KOS_INFO.targetAudience}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-gray-800 border border-gray-200 text-xs font-bold shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-brand-500" />
                <span>±2-3 Menit ke Universitas Adzkia</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.18]">
                Kost Mahasiswa Pria Dekat{' '}
                <span className="text-brand-500">Universitas Adzkia</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                Hunian tenang, bersih, dan bebas repot untuk fokus kuliah di Kalumbuk, Padang. Pilihan <strong className="text-gray-900 font-bold">1 Kamar 1 Orang</strong> (Rp 700.000/bln) atau <strong className="text-gray-900 font-bold">1 Kamar 2 Orang</strong> (Rp 350.000/orang/bln).
              </p>
            </div>

            {/* Modern-style Signature Floating Search / Filter Box */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-md space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Location item */}
                <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                    Area & Kampus
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                    <span className="text-xs font-extrabold text-gray-900 truncate">
                      Kalumbuk (Univ. Adzkia)
                    </span>
                  </div>
                </div>

                {/* Room Type Selector */}
                <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                    Pilihan Kamar
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <BedSingle className="w-4 h-4 text-brand-500 shrink-0" />
                    <select
                      value={selectedBedFilter}
                      onChange={(e) => setSelectedBedFilter(e.target.value as any)}
                      className="bg-transparent text-xs font-extrabold text-gray-900 focus:outline-none w-full cursor-pointer"
                    >
                      <option value="all">Semua Tipe Kamar</option>
                      <option value="1-bed">1 Kamar 1 Orang (700rb)</option>
                      <option value="2-bed">1 Kamar 2 Orang (350rb/org)</option>
                    </select>
                  </div>
                </div>

                {/* Budget Indicator */}
                <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                    Biaya Sewa
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Tag className="w-4 h-4 text-brand-500 shrink-0" />
                    <span className="text-xs font-extrabold text-gray-900">
                      Mulai Rp 350.000/org
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Buttons in Modern Teal */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  onClick={() => handleFilterAndScroll(selectedBedFilter)}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <Search className="w-4 h-4" />
                  <span>Cari Kamar Tersedia</span>
                </button>

                <button
                  onClick={onOpenSurvey}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs sm:text-sm border border-gray-300 transition-colors"
                >
                  <Eye className="w-4 h-4 text-brand-500" />
                  <span>Jadwal Survei Lokasi</span>
                </button>
              </div>
            </div>

            {/* 4 Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-left">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                <Zap className="w-4 h-4 text-amber-500 shrink-0 fill-amber-500/20" />
                <span>Free Listrik</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                <Droplets className="w-4 h-4 text-blue-500 shrink-0 fill-blue-500/20" />
                <span>Free Air Bersih</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                <Wifi className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Free WiFi Cepat</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Tanpa Biaya Admin</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Real Room Photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden border border-gray-300 shadow-xl bg-gray-200 aspect-[4/3] sm:aspect-[1/1]">
                <img
                  src={activeHeroImage}
                  alt="KOS Buk Yet - Kamar Kost Mahasiswa Pria Dekat Universitas Adzkia"
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

                {/* Top Overlay Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-white shadow-xs flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    FREE AIR, LISTRIK & WIFI
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-gray-900 border border-gray-200 shadow-2xs backdrop-blur-xs">
                    400m ke Adzkia
                  </span>
                </div>

                {/* Photo Switcher Pill */}
                <div className="absolute top-14 right-3 bg-black/60 backdrop-blur-xs p-1 rounded-xl flex items-center gap-1 border border-white/20">
                  <button
                    onClick={() => setActiveHeroImage('/images/kos-bu-yett-kamar-maps.jpg')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition-colors ${
                      activeHeroImage === '/images/kos-bu-yett-kamar-maps.jpg'
                        ? 'bg-brand-500 text-white'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    Foto Kamar
                  </button>
                  <button
                    onClick={() => setActiveHeroImage('/images/kos-bu-yett-depan.jpg')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition-colors ${
                      activeHeroImage === '/images/kos-bu-yett-depan.jpg'
                        ? 'bg-brand-500 text-white'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    Tampak Depan
                  </button>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-gray-200 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-brand-600 block">
                        KHUSUS MAHASISWA PRIA
                      </span>
                      <h3 className="text-sm sm:text-base font-black text-gray-900">
                        {KOS_INFO.name} ({KOS_INFO.altName})
                      </h3>
                      <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-brand-500" /> Kalumbuk, Kuranji, Kota Padang
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-gray-500 block">Mulai dari</span>
                      <span className="text-base sm:text-lg font-black text-gray-900">
                        Rp 350.000<span className="text-xs font-normal text-gray-500">/org/bln</span>
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
