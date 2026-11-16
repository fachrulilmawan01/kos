import React from 'react';
import { 
  Home, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowUp, 
  MessageCircle,
  ExternalLink 
} from 'lucide-react';
import { KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const waFooterUrl = createWhatsAppUrl(
    KOS_INFO.whatsappNumber,
    `Halo Bu Yet, saya ingin menanyakan ketersediaan kamar di KOS Buk Yet (Padang).`
  );

  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-stone-800">
          
          {/* Col 1 */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-stone-900 flex items-center justify-center font-bold">
                <Home className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="font-extrabold text-lg text-white">
                {KOS_INFO.name} ({KOS_INFO.typeBadge})
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {KOS_INFO.subTagline}
            </p>
            <div className="pt-1">
              <a
                href={KOS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Lihat di Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Tipe Kamar
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>1 Bed Standar (Mulai Rp 350.000/bln)</li>
              <li>1 Bed KM Dalam (Rp 450.000/bln)</li>
              <li>2 Bed Standar - Berdua (Rp 600.000/bln)</li>
              <li>2 Bed KM Dalam - Berdua (Rp 700.000/bln)</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Alamat & Kontak
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{KOS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {KOS_INFO.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Jam Survei: {KOS_INFO.visitingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={waFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Hubungi Buk Yet</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {KOS_INFO.name} ({KOS_INFO.altName}). Hak Cipta Dilindungi.</p>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
            title="Ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
