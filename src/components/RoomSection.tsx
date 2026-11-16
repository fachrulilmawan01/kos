import React, { useState } from 'react';
import { 
  Maximize2, 
  Check, 
  MessageCircle, 
  Eye, 
  Users,
  GraduationCap
} from 'lucide-react';
import { ROOM_TYPES, RoomType, KOS_INFO } from '../data/kosData';
import { formatRupiah, createWhatsAppUrl } from '../utils/formatters';
import { RoomModal } from './RoomModal';

interface RoomSectionProps {
  onOpenSurvey: (roomName?: string) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ onOpenSurvey }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | '1-bed' | '2-bed'>('all');
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);

  const filteredRooms = selectedFilter === 'all'
    ? ROOM_TYPES
    : ROOM_TYPES.filter((r) => r.bedCount === selectedFilter);

  return (
    <section id="kamar" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Kamar Mahasiswa Pria</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Pilihan Kamar 1 Bed & 2 Bed
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            Kamar dirancang fungsional untuk mahasiswa: tersedia meja belajar, kasur empuk, stopkontak mandiri, serta pilihan kamar mandi dalam atau luar. Tarif bersahabat mulai Rp 350.000/bulan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              selectedFilter === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Semua Pilihan ({ROOM_TYPES.length})
          </button>
          <button
            onClick={() => setSelectedFilter('1-bed')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              selectedFilter === '1-bed'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Tipe 1 Bed (Mulai Rp 350.000)
          </button>
          <button
            onClick={() => setSelectedFilter('2-bed')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              selectedFilter === '2-bed'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Tipe 2 Bed (Kapasitas 2 Mahasiswa)
          </button>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredRooms.map((room) => {
            const waRoomUrl = createWhatsAppUrl(
              KOS_INFO.whatsappNumber,
              `Halo Bu Yet, saya mahasiswa yang tertarik dengan ${room.name} (${formatRupiah(room.priceMonthly)}/bulan). Apakah kamar masih ada yang kosong?`
            );

            return (
              <div
                key={room.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] bg-stone-100 overflow-hidden">
                  <img
                    src={room.mainImage}
                    alt={room.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-stone-900 text-white shadow-xs">
                      {room.bedCount === '1-bed' ? '1 Bed (Single)' : '2 Bed (Twin)'}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white text-stone-800 border border-stone-200 shadow-2xs">
                      {room.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Sisa {room.availableRooms} Kamar
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                    <span className="bg-stone-900/80 px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" /> {room.size}
                    </span>
                    <span className="bg-stone-900/80 px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                      <Users className="w-3 h-3" /> {room.capacity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-stone-900">
                      {room.name}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-stone-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[11px] text-stone-500 font-medium block">Tarif Mahasiswa:</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-stone-900">
                            {formatRupiah(room.priceMonthly)}
                          </span>
                          <span className="text-xs text-stone-500 font-normal">/bulan</span>
                        </div>
                      </div>
                      
                      {room.bedCount === '2-bed' && (
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                          Patungan berdua hemat
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedRoom(room)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-stone-600" />
                        <span>Detail & Foto</span>
                      </button>

                      <a
                        href={waRoomUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-2xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Tanya WA</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Detail */}
      <RoomModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onOpenSurvey={onOpenSurvey}
      />
    </section>
  );
};
