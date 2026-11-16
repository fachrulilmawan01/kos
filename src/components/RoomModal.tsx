import React, { useState } from 'react';
import { 
  X, 
  Maximize2, 
  Bed, 
  Check, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Info,
  Users
} from 'lucide-react';
import { RoomType, KOS_INFO } from '../data/kosData';
import { formatRupiah, createWhatsAppUrl } from '../utils/formatters';

interface RoomModalProps {
  room: RoomType | null;
  onClose: () => void;
  onOpenSurvey: (roomName?: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose, onOpenSurvey }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % room.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + room.gallery.length) % room.gallery.length);
  };

  const waBookingUrl = createWhatsAppUrl(
    KOS_INFO.whatsappNumber,
    `Halo Bu Yet, saya tertarik untuk menyewa ${room.name} (${formatRupiah(room.priceMonthly)}/bulan). Apakah kamar ini masih tersedia?`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-900 text-white">
                {room.bedCount === '1-bed' ? '1 Bed (Single)' : '2 Bed (Twin)'}
              </span>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {room.tag}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-stone-900 mt-1">
              {room.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 space-y-5">
          
          {/* Gallery Carousel */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-stone-900">
            <img
              src={room.gallery[activeImageIndex]}
              alt={`${room.name} foto ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {room.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label="Foto selanjutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40">
                  {room.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeImageIndex === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                      }`}
                      aria-label={`Foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded text-[11px] font-bold text-stone-800">
              Sisa {room.availableRooms} Kamar
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-medium text-stone-500 block">Tarif Sewa:</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-stone-900">
                  {formatRupiah(room.priceMonthly)}
                </span>
                <span className="text-stone-500 text-xs">/ bulan</span>
              </div>
              {room.priceYearly && (
                <p className="text-[11px] text-emerald-800 mt-0.5 font-medium">
                  Sewa tahunan: {formatRupiah(room.priceYearly)} / tahun
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={waBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Pesan via WA</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenSurvey(room.name);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 font-semibold text-xs transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-stone-600" />
                <span>Survei</span>
              </button>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-left">
              <Maximize2 className="w-4 h-4 text-stone-500 mb-1" />
              <p className="text-[10px] text-stone-500">Ukuran</p>
              <p className="text-xs font-bold text-stone-900">{room.size}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-left">
              <Bed className="w-4 h-4 text-stone-500 mb-1" />
              <p className="text-[10px] text-stone-500">Kasur</p>
              <p className="text-xs font-bold text-stone-900 truncate">{room.bedType}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-left">
              <Users className="w-4 h-4 text-stone-500 mb-1" />
              <p className="text-[10px] text-stone-500">Kapasitas</p>
              <p className="text-xs font-bold text-stone-900">{room.capacity}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1">Deskripsi</h4>
            <p className="text-stone-600 text-xs leading-relaxed">{room.description}</p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">Fasilitas Dalam Kamar</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {room.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Utilities */}
          <div className="p-3 rounded-lg bg-stone-100/70 border border-stone-200 text-xs text-stone-600 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-stone-800">
              <Info className="w-3.5 h-3.5 text-stone-600" />
              <span>Sudah Termasuk:</span>
            </div>
            <p>{room.includedUtilities.join(' • ')}</p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-5 py-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Tarif jujur tanpa biaya tersembunyi
          </span>
          <button
            onClick={onClose}
            className="text-stone-600 hover:text-stone-900 font-semibold text-xs"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
