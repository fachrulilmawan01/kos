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
  Users,
  MapPin
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
    `Halo Bu Yet, saya mahasiswa yang tertarik menyewa ${room.name} (${formatRupiah(room.priceMonthly)}/bulan). Apakah kamar masih tersedia?`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-[#FAF9F6]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-brand-500 text-white">
                {room.bedCount === '1-bed' ? '1 BED (SINGLE)' : '2 BED (TWIN)'}
              </span>
              <span className="text-xs font-bold text-brand-800 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                {room.tag}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-gray-900 mt-1">
              {room.name}
            </h3>
            <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5 font-medium">
              <MapPin className="w-3 h-3 text-brand-500" /> Kalumbuk • ±400m ke Universitas Adzkia Padang
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Gallery Carousel */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-900 shadow-md">
            <img
              src={room.gallery[activeImageIndex]}
              alt={`${room.name} foto ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {room.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label="Foto selanjutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40">
                  {room.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeImageIndex === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                      }`}
                      aria-label={`Foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black text-gray-900 shadow-xs">
              Sisa {room.availableRooms} Kamar
            </div>
          </div>

          {/* Pricing Highlight Box in Modern Style */}
          <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold text-brand-900 block uppercase tracking-wider">
                Tarif Mahasiswa
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl sm:text-3xl font-black text-gray-900">
                  {formatRupiah(room.priceMonthly)}
                </span>
                <span className="text-gray-500 text-xs font-medium">/ bulan</span>
              </div>
              {room.priceYearly && (
                <p className="text-xs text-brand-700 mt-1 font-semibold">
                  Sewa tahunan: {formatRupiah(room.priceYearly)} / tahun
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={waBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-extrabold text-xs shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Unit via WA</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenSurvey(room.name);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold text-xs transition-colors"
              >
                <Calendar className="w-4 h-4 text-gray-600" />
                <span>Survei</span>
              </button>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-left">
              <Maximize2 className="w-4 h-4 text-brand-500 mb-1" />
              <p className="text-[10px] text-gray-500 font-bold uppercase">Ukuran</p>
              <p className="text-xs sm:text-sm font-black text-gray-900">{room.size}</p>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-left">
              <Bed className="w-4 h-4 text-brand-500 mb-1" />
              <p className="text-[10px] text-gray-500 font-bold uppercase">Tempat Tidur</p>
              <p className="text-xs sm:text-sm font-black text-gray-900 truncate">{room.bedType}</p>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-left">
              <Users className="w-4 h-4 text-brand-500 mb-1" />
              <p className="text-[10px] text-gray-500 font-bold uppercase">Kapasitas</p>
              <p className="text-xs sm:text-sm font-black text-gray-900">{room.capacity}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-1.5">Deskripsi Unit</h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{room.description}</p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-2.5">Fasilitas Dalam Kamar</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {room.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                  <Check className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Utilities */}
          <div className="p-3.5 rounded-xl bg-gray-100/80 border border-gray-200 text-xs text-gray-600 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-gray-900">
              <Info className="w-4 h-4 text-brand-500" />
              <span>Termasuk Dalam Biaya Sewa:</span>
            </div>
            <p className="pl-5">{room.includedUtilities.join(' • ')}</p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F6] px-6 py-3.5 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-brand-500" /> Transparan, tanpa biaya makelar
          </span>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-gray-900 font-bold text-xs"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
