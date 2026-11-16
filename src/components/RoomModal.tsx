import React, { useState } from 'react';
import { 
  X, 
  Maximize2, 
  Bed, 
  Zap, 
  Check, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Info
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
    `Halo Buk Yet, saya tertarik untuk menyewa ${room.name} dengan harga ${formatRupiah(room.priceMonthly)}/bulan. Apakah kamar ini masih tersedia?`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header Bar with Close Button */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${room.tagColor}`}>
                {room.tag}
              </span>
              <span className="text-xs font-medium text-stone-500">
                {room.category.toUpperCase()}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 mt-0.5">
              {room.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Gallery Carousel */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-stone-900 shadow-md">
            <img
              src={room.gallery[activeImageIndex]}
              alt={`${room.name} foto ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Navigation buttons */}
            {room.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors backdrop-blur-xs"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors backdrop-blur-xs"
                  aria-label="Foto selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Thumbnail dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-xs">
                  {room.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        activeImageIndex === idx ? 'w-5 bg-white' : 'w-2 bg-white/50'
                      }`}
                      aria-label={`Lihat foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Room Availability Pill */}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-stone-800 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Sisa {room.availableRooms} kamar kosong
            </div>
          </div>

          {/* Pricing Highlight Box */}
          <div className="p-4 rounded-2xl bg-brand-50/60 border border-brand-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-brand-800 block">Tarif Sewa:</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  {formatRupiah(room.priceMonthly)}
                </span>
                <span className="text-stone-500 text-sm font-medium">/ bulan</span>
              </div>
              {room.priceYearly && (
                <p className="text-xs text-brand-700 mt-1 font-medium">
                  Sewa tahunan: {formatRupiah(room.priceYearly)} / tahun (Hemat {room.discountYearlyPercent}%)
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={waBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Sekarang</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenSurvey(room.name);
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 font-semibold text-sm transition-all"
              >
                <Calendar className="w-4 h-4 text-brand-600" />
                <span>Survei</span>
              </button>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-3">
              <Maximize2 className="w-5 h-5 text-stone-600 shrink-0" />
              <div>
                <p className="text-[11px] text-stone-500 font-medium">Ukuran Kamar</p>
                <p className="text-xs sm:text-sm font-bold text-stone-900">{room.size}</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-3">
              <Bed className="w-5 h-5 text-stone-600 shrink-0" />
              <div>
                <p className="text-[11px] text-stone-500 font-medium">Tipe Tempat Tidur</p>
                <p className="text-xs sm:text-sm font-bold text-stone-900">{room.bedType}</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-3 col-span-2 sm:col-span-1">
              <Zap className="w-5 h-5 text-stone-600 shrink-0" />
              <div>
                <p className="text-[11px] text-stone-500 font-medium">Listrik</p>
                <p className="text-xs sm:text-sm font-bold text-stone-900">{room.electricityType}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 mb-2">Deskripsi Kamar</h4>
            <p className="text-stone-600 text-sm leading-relaxed">{room.description}</p>
          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 mb-3">Fasilitas Dalam Kamar</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <div className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included Utilities */}
          <div className="p-3.5 rounded-xl bg-stone-100/80 border border-stone-200 text-xs text-stone-600 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-stone-800">
              <Info className="w-4 h-4 text-brand-600" />
              <span>Termasuk dalam Biaya Sewa:</span>
            </div>
            <p className="pl-5">
              {room.includedUtilities.join(' • ')}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-stone-50 px-6 py-3.5 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Transparan tanpa biaya tersembunyi
          </span>
          <button
            onClick={onClose}
            className="text-stone-600 hover:text-stone-900 font-medium"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
