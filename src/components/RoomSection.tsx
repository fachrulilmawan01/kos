import React, { useState } from 'react';
import { 
  Maximize2, 
  Check, 
  MessageCircle, 
  Eye, 
  Users, 
  MapPin, 
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
        
        {/* Section Header (Modern Co-living Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200 text-xs font-black">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Pilihan Kamar Mahasiswa Pria</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Pilihan Tipe Kamar & Tarif Sewa
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Tersedia opsi <strong>1 Kamar 1 Orang</strong> untuk privasi penuh atau <strong>1 Kamar 2 Orang</strong> yang sangat hemat patungan berdua. Berjarak ±400 meter dari kampus Universitas Adzkia Padang.
            </p>
          </div>

          {/* Modern Filter Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-gray-100 border border-gray-200 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all ${
                selectedFilter === 'all'
                  ? 'bg-brand-500 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Semua Pilihan ({ROOM_TYPES.length})
            </button>
            <button
              onClick={() => setSelectedFilter('1-bed')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all ${
                selectedFilter === '1-bed'
                  ? 'bg-brand-500 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              1 Kamar 1 Orang (700rb)
            </button>
            <button
              onClick={() => setSelectedFilter('2-bed')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all ${
                selectedFilter === '2-bed'
                  ? 'bg-brand-500 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              1 Kamar 2 Orang (350rb/org)
            </button>
          </div>
        </div>

        {/* Room Listing Grid (Modern Style Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredRooms.map((room) => {
            const displayPriceText = room.pricePerPerson 
              ? `${formatRupiah(room.pricePerPerson)}`
              : `${formatRupiah(room.priceMonthly)}`;

            const priceSubtext = room.pricePerPerson
              ? "/orang/bulan (total Rp 700.000/kamar)"
              : "/bulan";

            const waRoomUrl = createWhatsAppUrl(
              KOS_INFO.whatsappNumber,
              `Halo Bu Yet, saya mahasiswa yang tertarik dengan ${room.name} (${displayPriceText}${priceSubtext}). Apakah unit ini masih tersedia?`
            );

            return (
              <div
                key={room.id}
                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
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

                  {/* Top Badges in Modern Style */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                    <span className="px-3 py-1 rounded-lg text-[10px] font-black bg-gray-900 text-white shadow-xs">
                      {room.bedCount === '1-bed' ? '1 KAMAR 1 ORANG' : '1 KAMAR 2 ORANG'}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white text-gray-900 border border-gray-200 shadow-2xs">
                      {room.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-black bg-brand-500 text-white shadow-xs">
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
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Location Tag */}
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-500 mb-1">
                      <MapPin className="w-3 h-3 text-brand-500" />
                      <span>Kalumbuk, Kuranji • ±400m ke Universitas Adzkia</span>
                    </div>

                    <h3 className="font-black text-lg text-gray-900 group-hover:text-brand-600 transition-colors">
                      {room.name}
                    </h3>
                    
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features checklist pills */}
                    <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
                      {room.features.slice(0, 5).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <Check className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                          Biaya Sewa
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-gray-900">
                            {displayPriceText}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">{priceSubtext}</span>
                        </div>
                      </div>
                      
                      {room.pricePerPerson && (
                        <span className="text-[10px] font-black text-brand-800 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200">
                          Rp 350.000 / orang
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
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-black transition-colors shadow-xs"
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
