import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  MessageCircle, 
  Tag, 
  ShieldCheck 
} from 'lucide-react';
import { ROOM_TYPES, KOS_INFO } from '../data/kosData';
import { formatRupiah, createWhatsAppUrl } from '../utils/formatters';

export const CostCalculator: React.FC = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(ROOM_TYPES[0].id);
  const [durationMonths, setDurationMonths] = useState<number>(1);
  const [addons, setAddons] = useState<{
    magicCom: boolean;
    fanMini: boolean;
  }>({
    magicCom: false,
    fanMini: false,
  });

  const selectedRoom = ROOM_TYPES.find((r) => r.id === selectedRoomId) || ROOM_TYPES[0];

  // Duration discounts
  let discountAmount = 0;
  if (durationMonths === 6) discountAmount = 100000;
  else if (durationMonths === 12) discountAmount = 300000;

  const monthlyAddons = 
    (addons.magicCom ? 20000 : 0) +
    (addons.fanMini ? 15000 : 0);

  const baseTotal = selectedRoom.priceMonthly * durationMonths;
  const discountedRent = baseTotal - discountAmount;
  const totalAddons = monthlyAddons * durationMonths;
  const grandTotal = discountedRent + totalAddons;

  const addonsSummary = [
    addons.magicCom ? 'Magic Com Pribadi' : null,
    addons.fanMini ? 'Kipas Angin Tambahan' : null,
  ].filter(Boolean).join(', ') || 'Tanpa Tambahan Alat Elektronik';

  const proposalMessage = `Halo Bu Yet, saya mahasiswa yang mencoba kalkulator sewa di website KOS Buk Yet (dekat Univ. Adzkia Padang):
- Pilihan Unit: ${selectedRoom.name}
- Durasi Sewa: ${durationMonths} Bulan
- Tambahan Alat: ${addonsSummary}
- Estimasi Total: ${formatRupiah(grandTotal)}

Apakah kamar ini masih tersedia? Terima kasih!`;

  const waProposalUrl = createWhatsAppUrl(KOS_INFO.whatsappNumber, proposalMessage);

  return (
    <section id="kalkulator" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-rukita-700 bg-rukita-50 px-3 py-1 rounded-full border border-rukita-200">
            SIMULASI BIAYA SEWA
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Kalkulator Sewa Transparan
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Hitung estimasi pengeluaran sewa kamar sesuai dengan durasi studi Anda tanpa ada biaya tersembunyi.
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
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        selectedRoomId === room.id
                          ? 'bg-rukita-50 border-rukita-500 shadow-xs ring-2 ring-rukita-500/20'
                          : 'bg-white border-gray-200 text-gray-800 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-xs font-black truncate">{room.name}</span>
                        {selectedRoomId === room.id && <Check className="w-3.5 h-3.5 text-rukita-600 shrink-0" />}
                      </div>
                      <p className={`text-xs font-black ${selectedRoomId === room.id ? 'text-rukita-700' : 'text-gray-900'}`}>
                        {formatRupiah(room.priceMonthly)} <span className="text-[10px] font-normal opacity-80">/bln</span>
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration select */}
              <div>
                <label className="block text-xs font-black text-gray-900 uppercase tracking-wider mb-2">
                  2. Durasi Sewa
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { m: 1, label: '1 Bulan', note: 'Bulanan' },
                    { m: 6, label: '6 Bulan', note: 'Hemat 100rb' },
                    { m: 12, label: '1 Tahun', note: 'Hemat 300rb' },
                  ].map((dur) => (
                    <button
                      key={dur.m}
                      type="button"
                      onClick={() => setDurationMonths(dur.m)}
                      className={`p-2.5 rounded-xl text-center border transition-all ${
                        durationMonths === dur.m
                          ? 'bg-rukita-500 text-white border-rukita-500 shadow-xs'
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

              {/* Optional addons */}
              <div>
                <label className="block text-xs font-black text-gray-900 uppercase tracking-wider mb-2">
                  3. Peralatan Elektronik Pribadi (Opsional)
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 text-xs">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addons.magicCom}
                        onChange={(e) => setAddons({ ...addons, magicCom: e.target.checked })}
                        className="rounded text-rukita-600 focus:ring-rukita-500"
                      />
                      <span className="font-semibold text-gray-800">Membawa Magic Com Pribadi</span>
                    </div>
                    <span className="font-bold text-gray-900">+Rp 20.000/bln</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 text-xs">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addons.fanMini}
                        onChange={(e) => setAddons({ ...addons, fanMini: e.target.checked })}
                        className="rounded text-rukita-600 focus:ring-rukita-500"
                      />
                      <span className="font-semibold text-gray-800">Membawa Kipas Angin Tambahan</span>
                    </div>
                    <span className="font-bold text-gray-900">+Rp 15.000/bln</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Summary in Rukita Style */}
            <div className="lg:col-span-5 bg-[#FAF9F6] rounded-2xl p-5 border border-gray-200 space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-gray-200">
                <Calculator className="w-4 h-4 text-rukita-600" />
                <h3 className="font-black text-sm text-gray-900">Rincian Estimasi Biaya</h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Biaya Kamar ({durationMonths} Bulan):</span>
                  <span className="font-bold text-gray-900">{formatRupiah(baseTotal)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-rukita-700 font-bold bg-rukita-100/70 p-2 rounded-lg">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" /> Diskon Durasi:
                    </span>
                    <span>-{formatRupiah(discountAmount)}</span>
                  </div>
                )}

                {totalAddons > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Tambahan Elektronik:</span>
                    <span className="font-bold text-gray-900">+{formatRupiah(totalAddons)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Air Bersih & Sampah:</span>
                  <span className="font-bold text-rukita-600">GRATIS</span>
                </div>

                <div className="pt-3 border-t border-gray-200 flex justify-between items-baseline">
                  <span className="text-xs font-bold text-gray-700">Total Estimasi:</span>
                  <span className="text-2xl font-black text-gray-900">
                    {formatRupiah(grandTotal)}
                  </span>
                </div>
              </div>

              <a
                href={waProposalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rukita-500 hover:bg-rukita-600 text-white font-black text-xs shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Hasil ke WhatsApp Bu Yet</span>
              </a>

              <p className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-rukita-500" /> Tanpa komisi makelar ataupun biaya admin tambahan
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
