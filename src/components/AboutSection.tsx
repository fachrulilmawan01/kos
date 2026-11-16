import React from 'react';
import { ShieldCheck, Droplets, Sparkles, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-rukita-700 bg-rukita-50 px-3 py-1 rounded-full border border-rukita-200">
                KENYAMANAN MAHASISWA
              </span>
              <span className="text-xs font-bold text-gray-700 bg-gray-200/80 px-2.5 py-0.5 rounded-full">
                {KOS_INFO.targetAudience}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-snug">
              Hunian Tenang, Bersih, dan Selangkah ke Kampus Adzkia
            </h2>
            
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              KOS Buk Yet ({KOS_INFO.altName}) berlokasi strategis di Kalumbuk, Kuranji, Kota Padang. Dikelola dengan standar hunian nyaman agar mahasiswa dapat beristirahat maksimal dan fokus menyelesaikan perkuliahan dengan tenang.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-gray-800">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rukita-500 shrink-0 mt-0.5" />
                <span><strong>Khusus Mahasiswa Pria:</strong> Lingkungan tertib, saling menghargai jam belajar, dan bebas dari gangguan non-akademik.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rukita-500 shrink-0 mt-0.5" />
                <span><strong>Hanya ±400m ke Universitas Adzkia:</strong> Hemat waktu perjalanan kuliah dan praktikum, cukup 2 menit dengan motor atau jalan kaki.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rukita-500 shrink-0 mt-0.5" />
                <span><strong>Fasilitas Esensial Terpenuhi:</strong> Air bersih melimpah tanpa biaya tambahan, tempat jemuran luas, dan parkir motor aman.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rukita-500 shrink-0 mt-0.5" />
                <span><strong>Tarif Transparan & Bersahabat:</strong> 1 kamar 1 orang Rp 700.000/bln, atau 1 kamar 2 orang Rp 350.000/orang/bln (total Rp 700.000/kamar).</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards (Rukita Feature Box) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3.5">
              
              <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-1.5 shadow-xs hover:border-rukita-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-rukita-50 flex items-center justify-center text-rukita-600 mb-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-black text-gray-900">Khusus Mahasiswa</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">Fokus belajar tanpa kebisingan lingkungan luar.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-1.5 shadow-xs hover:border-rukita-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-rukita-50 flex items-center justify-center text-rukita-600 mb-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-black text-gray-900">Dekat Univ. Adzkia</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">Jarak ±400 meter di area Kalumbuk Kuranji.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-1.5 shadow-xs hover:border-rukita-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-1">
                  <Droplets className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-black text-gray-900">Air Bersih Gratis</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">Air jernih lancar setiap hari untuk kebutuhan mahasiswa.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-1.5 shadow-xs hover:border-rukita-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-rukita-50 flex items-center justify-center text-rukita-600 mb-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-black text-gray-900">Parkir Motor Aman</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">Halaman dalam tertutup gerbang berpagar aman.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
