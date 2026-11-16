import React, { useState, useEffect } from 'react';
import { Home, Phone, Menu, X, Calendar, MessageCircle, MapPin } from 'lucide-react';
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
    { label: 'Tipe Kamar', href: '#kamar' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Simulasi Biaya', href: '#kalkulator' },
    { label: 'Lokasi & Rute', href: '#lokasi' },
    { label: 'Tata Tertib', href: '#aturan' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
  ];

  const waQuickUrl = createWhatsAppUrl(
    KOS_INFO.whatsappNumber,
    `Halo Buk Yet, saya melihat website KOS Buk Yet dan ingin bertanya informasi ketersediaan kamar.`
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 text-white flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-stone-900 group-hover:text-brand-700 transition-colors">
                  KOS Buk Yet
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-semibold bg-brand-100 text-brand-800 rounded-full border border-brand-200">
                  Hunian Nyaman
                </span>
              </div>
              <p className="text-xs text-stone-500 hidden sm:flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-600" /> Lowokwaru, Malang
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-brand-700 hover:bg-brand-50/70 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenSurvey}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-brand-800 bg-brand-50 hover:bg-brand-100 border border-brand-200/80 rounded-xl transition-all shadow-sm active:scale-95"
            >
              <Calendar className="w-4 h-4 text-brand-600" />
              <span>Jadwal Survei</span>
            </button>

            <a
              href={waQuickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-brand-600 hover:from-emerald-700 hover:to-brand-700 rounded-xl shadow-md shadow-brand-600/20 hover:shadow-brand-600/30 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 lg:hidden focus:outline-none"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-stone-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSurvey();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-brand-800 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-xl"
            >
              <Calendar className="w-4 h-4 text-brand-600" />
              Jadwalkan Survei Lokasi
            </button>
            <a
              href={waQuickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Hubungi Buk Yet via WA
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
