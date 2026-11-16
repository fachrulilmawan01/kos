import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Calendar, MessageCircle, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
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
    { label: 'Pilihan Kamar', href: '#kamar' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Kalkulator Sewa', href: '#kalkulator' },
    { label: 'Lokasi & Kampus', href: '#lokasi' },
    { label: 'Tata Tertib', href: '#aturan' },
    { label: 'FAQ', href: '#faq' },
  ];

  const waQuickUrl = createWhatsAppUrl(
    KOS_INFO.whatsappNumber,
    `Halo Bu Yet, saya mahasiswa yang ingin bertanya seputar sewa kamar di KOS Buk Yet dekat Universitas Adzkia.`
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Banner (Rukita Style Announcement) */}
      <div className="bg-[#0f172a] text-white text-[11px] font-medium py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-bold text-rukita-400">
              <GraduationCap className="w-3.5 h-3.5" /> Khusus Mahasiswa Pria
            </span>
            <span className="text-gray-500 hidden sm:inline">•</span>
            <span className="text-gray-300 hidden sm:inline">
              ±2-3 Menit ke <strong>Universitas Adzkia Padang</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-300">
              Sewa Mulai <strong className="text-rukita-300">Rp 350.000/bln</strong>
            </span>
            <a
              href={waQuickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-rukita-300 hover:text-white font-bold"
            >
              <span>Hubungi Bu Yet</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-xs py-3'
            : 'bg-white/95 backdrop-blur-xs border-b border-gray-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo in Rukita style */}
            <a href="#beranda" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-rukita-500 text-white flex items-center justify-center font-black shadow-xs group-hover:bg-rukita-600 transition-colors">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl text-gray-900 tracking-tight">
                    KOS <span className="text-rukita-500">Buk Yet</span>
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-extrabold bg-rukita-50 text-rukita-700 rounded-md border border-rukita-200">
                    PUTRA
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-rukita-500" /> Kalumbuk, Padang • Dekat Univ. Adzkia
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-bold text-gray-600 hover:text-rukita-600 hover:bg-rukita-50/60 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons in Rukita style */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={onOpenSurvey}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span>Jadwal Survei</span>
              </button>

              <a
                href={waQuickUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold text-white bg-rukita-500 hover:bg-rukita-600 rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat WhatsApp</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 lg:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-5 mt-3 shadow-lg">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-rukita-50 hover:text-rukita-600 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSurvey();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-gray-800 bg-gray-100 rounded-xl"
              >
                <Calendar className="w-3.5 h-3.5" />
                Jadwalkan Survei Lokasi
              </button>
              <a
                href={waQuickUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-extrabold text-white bg-rukita-500 hover:bg-rukita-600 rounded-xl shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat Bu Yet via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
