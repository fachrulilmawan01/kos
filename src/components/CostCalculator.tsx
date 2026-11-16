import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  MessageCircle, 
  Tag, 
  ShieldCheck,
  Zap,
  Droplets,
  Wifi
} from 'lucide-react';
import { ROOM_TYPES, KOS_INFO } from '../data/kosData';
import { formatRupiah, createWhatsAppUrl } from '../utils/formatters';

export const CostCalculator: React.FC = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(ROOM_TYPES[0].id);
  const [durationMonths, setDurationMonths] = useState<number>(1);
  const [occupancyMode, setOccupancyMode] = useState<'per-kamar' | 'per-orang'>('per-orang');

  const selectedRoom = ROOM_TYPES.find((r) => r.id === selectedRoomId) || ROOM_TYPES[0];

  // Duration discounts
  let discountAmount = 0;
  if (durationMonths === 6) discountAmount = 100000;
  else if (durationMonths === 12) discountAmount = 300000;

  // If user selected 2-bed and chooses "per-orang" mode, calculate Rp 350.000/mo
  const baseMonthlyPrice = (selectedRoom.bedCount === '2-bed' && occupancyMode === 'per-orang')
    ? (selectedRoom.pricePerPerson || 350000)
    : selectedRoom.priceMonthly;

  const baseTotal = baseMonthlyPrice * durationMonths;
  const grandTotal = Math.max(0, baseTotal - (occupancyMode === 'per-orang' && selectedRoom.bedCount === '2-bed' ? discountAmount / 2 : discountAmount));

  const proposalMessage = `Halo Bu Yet, saya mahasiswa ingin bertanya estimasi sewa KOS Buk Yet (dekat Univ. Adzkia Padang):
- Pilihan Unit: ${selectedRoom.name} ${selectedRoom.bedCount === '2-bed' ? `(${occupancyMode === 'per-orang' ? 'Hitungan Per Orang Rp 350rb' : 'Hitungan 1 Kamar Rp 700rb'})` : ''}
- Durasi Sewa: ${durationMonths} Bulan
- Fasilitas: Free Air, Listrik & WiFi (All-in Termasuk)
- Estimasi Biaya: ${formatRupiah(grandTotal)}

Apakah unit kamar masih ada yang kosong? Terima kasih!`;

  const waProposalUrl = createWhatsAppUrl(KOS_INFO.whatsappNumber, proposalMessage);

  return (
    <section id="kalkulator" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            SIMULASI BIAYA SEWA
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Kalkulator Sewa Transparan
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Hitung perkiraan biaya sewa kamar untuk 1 orang (Rp 700.000) atau 2 orang (Rp 350.000/orang) sesuai durasi studi Anda.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Inputs */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Room select */}
              <div>
                <label className="block text-xs font-black text-gray-900 uppercase tracking-wider mb-2">
                  1. Pilih Tipe Kamar
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ROOM_TYPES.map((room) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all ${
                        selectedRoomId === room.id
                          ? 'bg-brand-50 border-brand-500 shadow-xs ring-2 ring-brand-500/20'
                          : 'bg-white border-gray-200 text-gray-800 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-black">{room.name}</span>
                        {selectedRoomId === room.id && <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" />}
                      </div>
                      <p className={`text-xs font-black ${selectedRoomId === room.id ? 'text-brand-700' : 'text-gray-900'}`}>
                        {room.bedCount === '1-bed' ? 'Rp 700.000' : 'Rp 350.000'} <span className="text-[10px] font-normal opacity-80">{room.bedCount === '1-bed' ? '/bulan' : '/orang/bln'}</span>
                      </p>
                    </button>
                  ))}
                </div>

                {/* Occupancy mode toggle for 2-bed */}
                {selectedRoom.bedCount === '2-bed' && (
                  <div className="mt-3 p-2.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between text-xs">
                    <span className="font-bold text-gray-700">Hitungan Biaya:</span>
                    <div className="inline-flex p-0.5 rounded-lg bg-gray-200">
                      <button
                        type="button"
                        onClick={() => setOccupancyMode('per-orang')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-black transition-colors ${
                          occupancyMode === 'per-orang' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600'
                        }`}
                      >
                        Per Orang (Rp 350rb)
                      </button>
                      <button
                        type="button"
                        onClick={() => setOccupancyMode('per-kamar')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-black transition-colors ${
                          occupancyMode === 'per-kamar' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600'
                        }`}
                      >
                        Total 1 Kamar (Rp 700rb)
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Duration select */}
              <div>
                <label className="block text-xs font-black text-gray-900 uppercase tracking-wider mb-2">
                  2. Durasi Sewa
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { m: 1, label: '1 Bulan', note: 'Bulanan' },
                    { m: 6, label: '6 Bulan', note: 'Potongan Khusus' },
                    { m: 12, label: '1 Tahun', note: 'Potongan Spesial' },
                  ].map((dur) => (
                    <button
                      key={dur.m}
                      type="button"
                      onClick={() => setDurationMonths(dur.m)}
                      className={`p-2.5 rounded-xl text-center border transition-all ${
                        durationMonths === dur.m
                          ? 'bg-brand-500 text-white border-brand-500 shadow-xs'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="block text-xs font-black">{dur.label}</span>
                      <span className={`block text-[10px] ${durationMonths === dur.m ? 'text-white/80' : 'text-gray-400'}`}>
                        {dur.note}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Free Included Utilities Showcase */}
              <div>
                <label className="block text-xs font-black text-gray-900 uppercase tracking-wider mb-2">
                  3. Fasilitas Sudah Termasuk (All-in Free)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/90 text-left">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Droplets className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="text-xs font-black text-gray-900">Free Air</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md inline-block">
                      100% GRATIS
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/90 text-left">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Zap className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                      <span className="text-xs font-black text-gray-900">Free Listrik</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md inline-block">
                      100% GRATIS
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/90 text-left">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Wifi className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs font-black text-gray-900">Free WiFi</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md inline-block">
                      100% GRATIS
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Summary in Modern Style */}
            <div className="lg:col-span-5 bg-[#FAF9F6] rounded-2xl p-5 border border-gray-200 space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-gray-200">
                <Calculator className="w-4 h-4 text-brand-600" />
                <h3 className="font-black text-sm text-gray-900">Rincian Estimasi Biaya</h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Biaya Sewa ({durationMonths} Bulan):</span>
                  <span className="font-bold text-gray-900">{formatRupiah(baseTotal)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-brand-700 font-bold bg-brand-100/70 p-2 rounded-lg">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" /> Potongan Durasi:
                    </span>
                    <span>-{formatRupiah(selectedRoom.bedCount === '2-bed' && occupancyMode === 'per-orang' ? discountAmount / 2 : discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Air, Listrik & WiFi:</span>
                  <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Rp 0 (GRATIS)
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Iuran Kebersihan Sampah:</span>
                  <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Rp 0 (GRATIS)
                  </span>
                </div>

                <div className="pt-3 border-t border-gray-200 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs font-bold text-gray-700 block">Total Estimasi:</span>
                    <span className="text-[10px] text-gray-500">
                      {selectedRoom.bedCount === '2-bed' && occupancyMode === 'per-orang' ? '(Tarif Per Orang)' : '(Tarif Per Kamar)'}
                    </span>
                  </div>
                  <span className="text-2xl font-black text-gray-900">
                    {formatRupiah(grandTotal)}
                  </span>
                </div>
              </div>

              <a
                href={waProposalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-xs shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Hasil ke WhatsApp Bu Yet</span>
              </a>

              <p className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-500" /> Tanpa komisi makelar ataupun biaya admin tambahan
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
