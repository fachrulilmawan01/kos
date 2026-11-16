import React, { useState } from 'react';
import { 
  Maximize2, 
  Bed, 
  Check, 
  MessageCircle, 
  Eye, 
  Calendar, 
  Sparkles 
} from 'lucide-react';
import { ROOM_TYPES, RoomType, KOS_INFO } from '../data/kosData';
import { formatRupiah, createWhatsAppUrl } from '../utils/formatters';
import { RoomModal } from './RoomModal';

interface RoomSectionProps {
  onOpenSurvey: (roomName?: string) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ onOpenSurvey }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ac' | 'non-ac' | 'vip'>('all');
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);

  const filteredRooms = selectedCategory === 'all'
    ? ROOM_TYPES
    : ROOM_TYPES.filter((r) => r.category === selectedCategory);

  return (
    <section id="kamar" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-700 bg-brand-100/80 px-3 py-1 rounded-full border border-brand-200">
            Pilihan Tipe Kamar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Temukan Kamar Sesuai Kebutuhan & Budget Anda
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Semua kamar dirancang dengan sirkulasi udara baik, pencahayaan alami, perabot lengkap, dan privasi tinggi.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
            }`}
          >
            Semua Tipe ({ROOM_TYPES.length})
          </button>
          <button
            onClick={() => setSelectedCategory('ac')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'ac'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
            }`}
          >
            Tipe AC
          </button>
          <button
            onClick={() => setSelectedCategory('non-ac')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'non-ac'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
            }`}
          >
            Tipe Hemat Non-AC
          </button>
          <button
            onClick={() => setSelectedCategory('vip')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'vip'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
            }`}
          >
            Tipe VIP & Suite
          </button>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => {
            const waRoomUrl = createWhatsAppUrl(
              KOS_INFO.whatsappNumber,
              `Halo Buk Yet, saya mau menanyakan kamar tipe ${room.name} (${formatRupiah(room.priceMonthly)}/bulan). Apakah masih tersedia?`
            );

            return (
              <div
                key={room.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Room Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={room.mainImage}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Top Badge: Tag */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-xs ${room.tagColor}`}>
                      {room.tag}
                    </span>
                  </div>

                  {/* Top Right: Availability Pill */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-bold text-stone-800 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Sisa {room.availableRooms} Kamar
                  </div>

                  {/* Bottom Image Overlay: Specs */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                      <Maximize2 className="w-3.5 h-3.5" /> {room.size}
                    </span>
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                      <Bed className="w-3.5 h-3.5" /> {room.bedType.split('(')[0]}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-stone-900 group-hover:text-brand-700 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 line-clamp-2 mt-1 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features Snippet */}
                    <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5">
                      {room.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-4 border-t border-stone-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[11px] text-stone-400 font-medium block">Biaya sewa:</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl sm:text-2xl font-black text-stone-900">
                            {formatRupiah(room.priceMonthly)}
                          </span>
                          <span className="text-xs text-stone-500 font-medium">/bln</span>
                        </div>
                      </div>

                      {room.discountYearlyPercent > 0 && (
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                          Hemat {room.discountYearlyPercent}% tahunan
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedRoom(room)}
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-bold transition-all"
                      >
                        <Eye className="w-4 h-4 text-stone-600" />
                        <span>Detail & Foto</span>
                      </button>

                      <a
                        href={waRoomUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Pesan WA</span>
                      </a>
                    </div>

                    <button
                      onClick={() => onOpenSurvey(room.name)}
                      className="w-full py-1.5 text-center text-xs font-semibold text-stone-500 hover:text-brand-700 transition-colors flex items-center justify-center gap-1"
                    >
                      <Calendar className="w-3.5 h-3.5" /> Jadwalkan survei lihat kamar ini
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Room Detail Modal */}
      <RoomModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onOpenSurvey={onOpenSurvey}
      />
    </section>
  );
};
