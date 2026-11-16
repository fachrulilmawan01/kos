import React from 'react';
import { ShieldCheck, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Tentang Hunian
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Hunian Kost Putra yang Tertib, Bersih, dan Tenang
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              KOS Buk Yet ({KOS_INFO.altName}) berlokasi di Kalumbuk, Kuranji, Kota Padang. Dikelola langsung dengan perhatian kekeluargaan untuk memastikan setiap penghuni dapat beristirahat dan belajar dengan aman, nyaman, dan tenang.
            </p>

            <div className="space-y-2 pt-2 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Lingkungan pemukiman tenang, bebas dari kebisingan jalan protokol</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Air sumur / PDAM bersih, jernih, dan tidak pernah berbau</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tarif sewa bulanan sangat bersahabat mulai dari Rp 350.000</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kamar berpenghuni putra yang tertib dan saling menghormati</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h4 className="text-xs font-bold text-stone-900">Aman & Terjaga</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">Pagar gerbang tertutup menjaga keamanan kendaraan Anda.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                <Droplets className="w-5 h-5 text-blue-600" />
                <h4 className="text-xs font-bold text-stone-900">Air Bersih Lancar</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">Kebutuhan mandi dan mencuci tercukupi setiap hari.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h4 className="text-xs font-bold text-stone-900">Bebas Jam Malam</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">Akses kunci mandiri dengan tanggung jawab penuh.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <h4 className="text-xs font-bold text-stone-900">Pengelola Ramah</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">Ibu kos siap membantu komunikasi kendala fasilitas.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
