import React from 'react';
import { Heart, ShieldCheck, Sparkles, Coffee, UserCheck, CheckCircle } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-5 h-5 text-rose-600" />,
      title: "Suasana Hangat & Kekeluargaan",
      desc: "Buk Yet tinggal di dekat lingkungan kos dan selalu siap membantu kebutuhan penghuni seperti orang tua sendiri di tanah rantau."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-600" />,
      title: "Keamanan Terjaga 24/7",
      desc: "Lingkungan tertutup dengan gerbang one-gate system, smart lock, dan kamera CCTV yang memonitor area parkir serta lorong 24 jam."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-600" />,
      title: "Kebersihan Terawat Maksimal",
      desc: "Area bersama seperti lorong, dapur, dan area jemuran dibersihkan secara terjadwal setiap hari oleh staf kebersihan."
    },
    {
      icon: <Coffee className="w-5 h-5 text-sky-600" />,
      title: "Tenang & Kondusif",
      desc: "Menerapkan tata tertib waktu istirahat malam yang jelas sehingga sangat mendukung fokus belajar skripsi maupun bekerja."
    }
  ];

  return (
    <section id="tentang" className="py-16 sm:py-24 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-700 bg-brand-100/80 px-3 py-1 rounded-full border border-brand-200">
            Tentang Hunian Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Lebih Dari Sekadar Kos, Ini Adalah Rumah Kedua Anda
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Didirikan dengan komitmen memberikan kenyamanan terbaik bagi para perantau yang menuntut ilmu atau berkarir di Kota Malang.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/4]">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1000&q=80"
                alt="Suasana Ruang KOS Buk Yet"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-emerald-400">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Buk Yet (Pengelola Kos)</h4>
                    <p className="text-xs text-stone-300">Siap melayani & mendampingi dengan ramah</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="mt-4 p-4 rounded-2xl bg-white shadow-md border border-stone-200 text-stone-700 text-sm italic">
              "Kenyamanan dan ketenangan anak-anak kos adalah amanah utama bagi kami. Kami ingin setiap penghuni merasa aman, tenang belajar, dan betah seperti di rumah sendiri."
            </div>
          </div>

          {/* Value Propositions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">
                Mengapa Memilih Tinggal di {KOS_INFO.name}?
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                KOS Buk Yet berlokasi di area pemukiman yang asri dan aman di Lowokwaru. Berbeda dengan kos komersial pada umumnya yang kaku, kami memadukan fasilitas modern standar apartemen mini dengan kehangatan komunikasi dan pengawasan kekeluargaan yang tulus.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {values.map((v) => (
                <div key={v.title} className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:border-brand-300 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center mb-3">
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">{v.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Lingkungan aman & tidak bising kendaraan besar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dekat warung makan murah & minimarket</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Penanganan kendala fasilitas cepat & tanggap</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sirkulasi udara dan ventilasi kamar sangat baik</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
