import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Calendar, MessageCircle, MapPin, GraduationCap } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

interface NavbarProps {
  onOpenSurvey: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSurvey }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tipe Kamar (1 & 2 Bed)', href: '#kamar' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Simulasi Biaya', href: '#kalkulator' },
    { label: 'Lokasi & Kampus', href: '#lokasi' },
    { label: 'Aturan & FAQ', href: '#faq' },
  ];

  const waQuickUrl = createWhatsAppUrl(
    KOS_INFO.whatsappNumber,
    `Halo Bu Yet, saya mahasiswa yang tertarik dengan KOS Buk Yet dekat Universitas Adzkia. Ingin tanya ketersediaan kamar.`
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Banner: Khusus Mahasiswa Pria & Universitas Adzkia */}
      <div className="bg-stone-900 text-stone-200 text-[11px] font-medium py-1.5 px-4 text-center border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1 font-bold text-emerald-400">
            <GraduationCap className="w-3.5 h-3.5" /> Khusus Mahasiswa Pria
          </span>
          <span className="hidden sm:inline text-stone-500">•</span>
          <span className="text-stone-300">
            Hanya ±2-3 Menit ke <strong>Universitas Adzkia Padang</strong>
          </span>
          <span className="hidden md:inline text-stone-500">•</span>
          <span className="hidden md:inline text-stone-300">
            Sewa Mulai <strong>Rp 350.000/bln</strong>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs py-3'
            : 'bg-white/90 backdrop-blur-xs border-b border-stone-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#beranda" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold transition-transform group-hover:scale-105">
                <Home className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg sm:text-xl text-stone-900 tracking-tight">
                    {KOS_INFO.name}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-800 rounded border border-emerald-200">
                    Putra
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-stone-400" /> Kalumbuk • Dekat Univ. Adzkia
                </p>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={onOpenSurvey}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-stone-500" />
                <span>Jadwal Survei</span>
              </button>

              <a
                href={waQuickUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat Bu Yet</span>
              </a>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 lg:hidden"
              aria-label="Menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-5 mt-3 shadow-lg">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSurvey();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-stone-800 bg-stone-100 rounded-lg"
              >
                <Calendar className="w-3.5 h-3.5" />
                Jadwalkan Survei Lokasi
              </button>
              <a
                href={waQuickUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Hubungi Bu Yet via WA
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
