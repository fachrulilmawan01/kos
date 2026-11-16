import React from 'react';
import { ShieldCheck, Droplets, Sparkles, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Tentang KOS Buk Yet
              </span>
              <span className="text-xs font-bold text-stone-700 bg-stone-200/70 px-2.5 py-0.5 rounded-full">
                {KOS_INFO.targetAudience}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Hunian Mahasiswa Pria yang Tertib, Tenang, dan Ramah Anggaran
            </h2>
            
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              KOS Buk Yet ({KOS_INFO.altName}) berlokasi strategis di Kalumbuk, Kuranji, Kota Padang. Sangat dekat dengan kampus <strong>Universitas Adzkia</strong> sehingga mahasiswa dapat menghemat waktu dan ongkos transportasi setiap hari.
            </p>

            <div className="space-y-2 pt-2 text-xs text-stone-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Khusus Mahasiswa Pria:</strong> Komunitas sesama mahasiswa yang saling menghormati dan kondusif untuk belajar.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Dekat Universitas Adzkia:</strong> ±400 meter, bisa ditempuh 2-3 menit perjalanan atau jalan kaki santai.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Fasilitas Esensial Terpenuhi:</strong> Air bersih melimpah tanpa biaya tambahan, tempat jemuran luas, dan parkir motor aman.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Tarif Transparan:</strong> Mulai Rp 350.000/bln untuk 1 bed, atau Rp 300.000/orang untuk tipe 2 bed berdua.</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                <GraduationCap className="w-5 h-5 text-emerald-700" />
                <h4 className="text-xs font-bold text-stone-900">Khusus Mahasiswa</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">Fokus belajar tanpa gangguan aktivitas non-akademik.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                <MapPin className="w-5 h-5 text-stone-700" />
                <h4 className="text-xs font-bold text-stone-900">Dekat Kampus Adzkia</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">Jarak ±400 meter di area Kalumbuk Kuranji.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                <Droplets className="w-5 h-5 text-blue-600" />
                <h4 className="text-xs font-bold text-stone-900">Air Bersih Gratis</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">Air jernih lancar setiap hari untuk kebutuhan mahasiswa.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <h4 className="text-xs font-bold text-stone-900">Parkir Motor Aman</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">Halaman dalam tertutup gerbang berpagar aman.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
