import React, { useState } from 'react';
import { 
  Maximize2, 
  Check, 
  MessageCircle, 
  Eye, 
  Users, 
  MapPin, 
  BedSingle,
  Sparkles,
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
    <section id="kamar" className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Rukita Co-living Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rukita-50 text-rukita-700 border border-rukita-200 text-xs font-black">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Pilihan Kamar Mahasiswa Pria</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Tipe Kamar 1 Bed & 2 Bed Siap Huni
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Semua unit dilengkapi kasur nyaman, meja belajar, lemari pakaian, dan ventilasi sejuk. Berjarak ±400 meter dari kampus Universitas Adzkia Padang.
            </p>
          </div>

          {/* Rukita Filter Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-gray-100 border border-gray-200 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all ${
                selectedFilter === 'all'
                  ? 'bg-rukita-500 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Semua ({ROOM_TYPES.length})
            </button>
            <button
              onClick={() => setSelectedFilter('1-bed')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all ${
                selectedFilter === '1-bed'
                  ? 'bg-rukita-500 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              1 Bed (Mulai 350rb)
            </button>
            <button
              onClick={() => setSelectedFilter('2-bed')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all ${
                selectedFilter === '2-bed'
                  ? 'bg-rukita-500 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              2 Bed (Berdua Hemat)
            </button>
          </div>
        </div>

        {/* Room Listing Grid (Rukita Style Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredRooms.map((room) => {
            const waRoomUrl = createWhatsAppUrl(
              KOS_INFO.whatsappNumber,
              `Halo Bu Yet, saya mahasiswa yang tertarik dengan ${room.name} (${formatRupiah(room.priceMonthly)}/bulan). Apakah unit ini masih tersedia?`
            );

            return (
              <div
                key={room.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-rukita-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  <img
                    src={room.mainImage}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-60" />

                  {/* Top Badges in Rukita Style */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-black bg-gray-900 text-white shadow-xs">
                      {room.bedCount === '1-bed' ? '1 BED (SINGLE)' : '2 BED (TWIN)'}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white text-gray-900 border border-gray-200 shadow-2xs">
                      {room.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-black bg-rukita-500 text-white shadow-xs">
                    Sisa {room.availableRooms} Kamar
                  </div>

                  {/* Bottom Image Overlay Specs */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="bg-gray-900/80 px-2.5 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" /> {room.size}
                    </span>
                    <span className="bg-gray-900/80 px-2.5 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {room.capacity}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Location Tag */}
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-500 mb-1">
                      <MapPin className="w-3 h-3 text-rukita-500" />
                      <span>Kalumbuk, Kuranji • ±400m ke Universitas Adzkia</span>
                    </div>

                    <h3 className="font-black text-base sm:text-lg text-gray-900 group-hover:text-rukita-600 transition-colors">
                      {room.name}
                    </h3>
                    
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features checklist pills */}
                    <div className="mt-3.5 pt-3 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {room.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-gray-700">
                          <Check className="w-3.5 h-3.5 text-rukita-500 shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Row in Rukita Style */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                          Biaya Sewa
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-gray-900">
                            {formatRupiah(room.priceMonthly)}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">/bulan</span>
                        </div>
                      </div>
                      
                      {room.bedCount === '2-bed' && (
                        <span className="text-[10px] font-black text-rukita-800 bg-rukita-50 px-2.5 py-1 rounded-md border border-rukita-200">
                          Patungan hemat berdua
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedRoom(room)}
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-gray-600" />
                        <span>Detail Kamar</span>
                      </button>

                      <a
                        href={waRoomUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-rukita-500 hover:bg-rukita-600 text-white text-xs font-black transition-colors shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat via WA</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Room Modal */}
      <RoomModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onOpenSurvey={onOpenSurvey}
      />
    </section>
  );
};
