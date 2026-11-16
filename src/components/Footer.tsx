import React from 'react';
import { 
  Home, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart, 
  ArrowUp, 
  MessageCircle,
  Share2
} from 'lucide-react';
import { KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const waFooterUrl = createWhatsAppUrl(
    KOS_INFO.whatsappNumber,
    `Halo Buk Yet, saya ingin konsultasi sewa kamar di KOS Buk Yet.`
  );

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-500 text-white flex items-center justify-center shadow-md">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  {KOS_INFO.name}
                </span>
                <p className="text-xs text-stone-400">Hunian Kost Bersih & Nyaman</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {KOS_INFO.subTagline}
            </p>

            <div className="pt-2 flex items-center gap-3 text-stone-400">
              <a
                href={`https://instagram.com/${KOS_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-stone-700 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram KOS Buk Yet"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={waFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-700/60 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Buk Yet"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white tracking-wide uppercase">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#beranda" className="hover:text-emerald-400 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-emerald-400 transition-colors">Tentang KOS Buk Yet</a>
              </li>
              <li>
                <a href="#kamar" className="hover:text-emerald-400 transition-colors">Pilihan Kamar & Tarif</a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-emerald-400 transition-colors">Fasilitas Bersama</a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-emerald-400 transition-colors">Kalkulator Simulasi Sewa</a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-emerald-400 transition-colors">Akses Lokasi & Peta</a>
              </li>
              <li>
                <a href="#aturan" className="hover:text-emerald-400 transition-colors">Tata Tertib & Norma</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">Tanya Jawab (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-sm font-extrabold text-white tracking-wide uppercase">
              Kontak & Operasional
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{KOS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp / Telp: <strong className="text-white">{KOS_INFO.whatsappDisplay}</strong></span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Jam Pelayanan Survei: <strong className="text-white">{KOS_INFO.visitingHours}</strong></span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Akses Penghuni: <strong className="text-emerald-400">{KOS_INFO.curfewInfo}</strong></span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={waFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi Buk Yet Langsung</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {KOS_INFO.name}. Hak Cipta Dilindungi.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Dikelola dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> untuk kenyamanan perantau
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
              title="Kembali ke atas"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
