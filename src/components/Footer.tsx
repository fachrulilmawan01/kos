import React from 'react';
import {
  Home,
  MapPin,
  Phone,
  Clock,
  ArrowUp,
  MessageCircle,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const waFooterUrl = createWhatsAppUrl(
    KOS_INFO.whatsappNumber,
    `Halo Bu Yet, saya mahasiswa yang ingin konsultasi sewa kamar di KOS Buk Yet dekat Universitas Adzkia.`
  );

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-14 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-800">

          {/* Brand Info in Rukita Style */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rukita-500 text-white flex items-center justify-center font-black shadow-xs">
                <Home className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                KOS <span className="text-rukita-400">Buk Yet</span>
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rukita-950 text-rukita-400 border border-rukita-800 text-xs font-black">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{KOS_INFO.targetAudience} • Dekat Univ. Adzkia</span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Hunian kost mahasiswa pria di Kalumbuk, Kuranji, Kota Padang. Lingkungan kondusif untuk belajar, air bersih melimpah, dan tarif sewa bersahabat mulai Rp 350.000/bulan.
            </p>

            <div className="pt-1">
              <a
                href={KOS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-rukita-400 hover:text-rukita-300 font-bold transition-colors"
              >
                <span>Buka Titik di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Room Categories */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              Tipe Kamar Mahasiswa
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#kamar" className="hover:text-rukita-300 transition-colors">
                  1 Kamar 1 Orang (Rp 700.000/bln)
                </a>
              </li>
              <li>
                <a href="#kamar" className="hover:text-rukita-300 transition-colors">
                  1 Kamar 2 Orang (Rp 350.000/org/bln)
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Details */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              Kontak & Alamat Kos
            </h4>

            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rukita-400 shrink-0 mt-0.5" />
                <span>{KOS_INFO.address} (±400m ke Univ. Adzkia)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rukita-400 shrink-0" />
                <span>WhatsApp: <strong className="text-white">{KOS_INFO.whatsappDisplay}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rukita-400 shrink-0" />
                <span>Waktu Survei: {KOS_INFO.visitingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={waFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rukita-500 hover:bg-rukita-600 text-white text-xs font-black shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat Bu Yet via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits in Rukita Style */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {KOS_INFO.name} ({KOS_INFO.altName}) </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
