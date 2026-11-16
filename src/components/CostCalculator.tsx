import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  HelpCircle, 
  MessageCircle, 
  Sparkles, 
  Tag, 
  ShieldCheck 
} from 'lucide-react';
import { ROOM_TYPES, KOS_INFO } from '../data/kosData';
import { formatRupiah, createWhatsAppUrl } from '../utils/formatters';

export const CostCalculator: React.FC = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(ROOM_TYPES[1].id);
  const [durationMonths, setDurationMonths] = useState<number>(6); // 1, 3, 6, 12
  const [addons, setAddons] = useState<{
    carParking: boolean;
    miniFridge: boolean;
    electronicCooker: boolean;
    laundryPartner: boolean;
  }>({
    carParking: false,
    miniFridge: false,
    electronicCooker: false,
    laundryPartner: false,
  });

  const selectedRoom = ROOM_TYPES.find((r) => r.id === selectedRoomId) || ROOM_TYPES[0];

  // Duration discounts
  let discountPercent = 0;
  if (durationMonths === 3) discountPercent = 3;
  else if (durationMonths === 6) discountPercent = 5;
  else if (durationMonths === 12) discountPercent = selectedRoom.discountYearlyPercent || 8;

  // Addons monthly cost
  const addonCosts = {
    carParking: 150000,
    miniFridge: 50000,
    electronicCooker: 30000,
    laundryPartner: 140000, // kuota 20kg per bulan mitra kos
  };

  const monthlyAddons = 
    (addons.carParking ? addonCosts.carParking : 0) +
    (addons.miniFridge ? addonCosts.miniFridge : 0) +
    (addons.electronicCooker ? addonCosts.electronicCooker : 0) +
    (addons.laundryPartner ? addonCosts.laundryPartner : 0);

  const baseTotal = selectedRoom.priceMonthly * durationMonths;
  const discountAmount = Math.round((baseTotal * discountPercent) / 100);
  const discountedRent = baseTotal - discountAmount;
  const totalAddons = monthlyAddons * durationMonths;
  const refundableDeposit = 300000;
  const grandTotal = discountedRent + totalAddons + refundableDeposit;

  // Formatted WhatsApp booking proposal
  const addonsSummary = [
    addons.carParking ? 'Parkir Mobil' : null,
    addons.miniFridge ? 'Kulkas Mini Pribadi' : null,
    addons.electronicCooker ? 'Elektronik Masak Pribadi' : null,
    addons.laundryPartner ? 'Paket Laundry Mitra Kos' : null,
  ].filter(Boolean).join(', ') || 'Tanpa Tambahan';

  const proposalMessage = `Halo Buk Yet, saya mencoba simulasi sewa di website KOS Buk Yet:
- Kamar: ${selectedRoom.name}
- Durasi: ${durationMonths} Bulan
- Tambahan: ${addonsSummary}
- Estimasi Total: ${formatRupiah(grandTotal)} (sudah termasuk deposit refundable Rp 300rb)

Apakah untuk rencana masuk ini kamar masih tersedia? Terima kasih!`;

  const waProposalUrl = createWhatsAppUrl(KOS_INFO.whatsappNumber, proposalMessage);

  return (
    <section id="kalkulator" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-700 bg-brand-100/80 px-3 py-1 rounded-full border border-brand-200">
            Kalkulator & Estimasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Simulasi Biaya Sewa Transparan
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Hitung perkiraan biaya sewa kamar sesuai durasi tinggal dan layanan tambahan yang Anda inginkan tanpa khawatir biaya tersembunyi.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="max-w-5xl mx-auto bg-stone-50/80 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Select Room */}
              <div>
                <label className="block text-sm font-bold text-stone-900 mb-2">
                  1. Pilih Tipe Kamar:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ROOM_TYPES.map((room) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        selectedRoomId === room.id
                          ? 'bg-brand-50 border-brand-500 shadow-xs ring-2 ring-brand-500/20'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-stone-900">{room.name}</span>
                        {selectedRoomId === room.id && (
                          <div className="w-4 h-4 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs font-extrabold text-brand-700">
                        {formatRupiah(room.priceMonthly)} <span className="text-[11px] font-normal text-stone-500">/bln</span>
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Duration Tabs */}
              <div>
                <label className="block text-sm font-bold text-stone-900 mb-2">
                  2. Durasi Sewa:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { months: 1, label: '1 Bulan', note: 'Standar' },
                    { months: 3, label: '3 Bulan', note: 'Diskon 3%' },
                    { months: 6, label: '6 Bulan', note: 'Diskon 5%' },
                    { months: 12, label: '1 Tahun', note: `Diskon ${selectedRoom.discountYearlyPercent}%` },
                  ].map((dur) => (
                    <button
                      key={dur.months}
                      type="button"
                      onClick={() => setDurationMonths(dur.months)}
                      className={`p-3 rounded-2xl text-center border transition-all ${
                        durationMonths === dur.months
                          ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <span className="block text-xs sm:text-sm font-bold">{dur.label}</span>
                      <span className={`block text-[10px] mt-0.5 font-medium ${
                        durationMonths === dur.months ? 'text-brand-300' : 'text-stone-400'
                      }`}>
                        {dur.note}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Optional Add-ons */}
              <div>
                <label className="block text-sm font-bold text-stone-900 mb-2">
                  3. Layanan / Fasilitas Tambahan (Opsional):
                </label>
                <div className="space-y-2">
                  
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-white border border-stone-200 cursor-pointer hover:bg-stone-50/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.carParking}
                        onChange={(e) => setAddons({ ...addons, carParking: e.target.checked })}
                        className="w-4 h-4 text-brand-600 rounded border-stone-300 focus:ring-brand-500"
                      />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-stone-800">Slot Parkir Mobil Berkanopi</p>
                        <p className="text-[11px] text-stone-500">Kapasitas terbatas & aman berpagar</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-stone-900">+Rp 150.000/bln</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-white border border-stone-200 cursor-pointer hover:bg-stone-50/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.miniFridge}
                        onChange={(e) => setAddons({ ...addons, miniFridge: e.target.checked })}
                        className="w-4 h-4 text-brand-600 rounded border-stone-300 focus:ring-brand-500"
                      />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-stone-800">Bawa Kulkas Mini Pribadi</p>
                        <p className="text-[11px] text-stone-500">Izin tambahan watt elektronik kamar</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-stone-900">+Rp 50.000/bln</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-white border border-stone-200 cursor-pointer hover:bg-stone-50/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.electronicCooker}
                        onChange={(e) => setAddons({ ...addons, electronicCooker: e.target.checked })}
                        className="w-4 h-4 text-brand-600 rounded border-stone-300 focus:ring-brand-500"
                      />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-stone-800">Bawa Rice Cooker / Air Fryer Pribadi</p>
                        <p className="text-[11px] text-stone-500">Untuk pemakaian mandiri di kamar</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-stone-900">+Rp 30.000/bln</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-white border border-stone-200 cursor-pointer hover:bg-stone-50/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.laundryPartner}
                        onChange={(e) => setAddons({ ...addons, laundryPartner: e.target.checked })}
                        className="w-4 h-4 text-brand-600 rounded border-stone-300 focus:ring-brand-500"
                      />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-stone-800">Paket Laundry Bersih Rapi (20 kg/bln)</p>
                        <p className="text-[11px] text-stone-500">Cuci, setrika wangi & diantar ke rak kamar</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-stone-900">+Rp 140.000/bln</span>
                  </label>

                </div>
              </div>

            </div>

            {/* Right Summary Card (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-stone-200/90 shadow-lg space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                <Calculator className="w-5 h-5 text-brand-600" />
                <h3 className="font-extrabold text-stone-900 text-base">Rincian Estimasi Biaya</h3>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 text-xs sm:text-sm">
                
                <div className="flex justify-between items-center text-stone-600">
                  <span>Sewa Kamar ({durationMonths} Bulan):</span>
                  <span className="font-semibold text-stone-800">{formatRupiah(baseTotal)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between items-center text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    <span className="flex items-center gap-1 font-medium">
                      <Tag className="w-3.5 h-3.5" /> Diskon Durasi ({discountPercent}%):
                    </span>
                    <span className="font-bold">-{formatRupiah(discountAmount)}</span>
                  </div>
                )}

                {totalAddons > 0 && (
                  <div className="flex justify-between items-center text-stone-600">
                    <span>Layanan Tambahan ({durationMonths} Bulan):</span>
                    <span className="font-semibold text-stone-800">+{formatRupiah(totalAddons)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-stone-600 pt-1">
                  <span className="flex items-center gap-1">
                    Deposit Jaminan Kunci:
                    <span className="text-[10px] text-stone-400 font-normal">(Refundable)</span>
                  </span>
                  <span className="font-semibold text-stone-800">+{formatRupiah(refundableDeposit)}</span>
                </div>

                <div className="pt-3 border-t-2 border-dashed border-stone-200 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs text-stone-500 font-medium block">Total Pembayaran Pertama:</span>
                    <span className="text-2xl sm:text-3xl font-black text-stone-900">
                      {formatRupiah(grandTotal)}
                    </span>
                  </div>
                </div>

              </div>

              {/* Info Note */}
              <div className="p-3 rounded-xl bg-stone-50 text-[11px] text-stone-500 space-y-1">
                <p className="flex items-center gap-1 font-semibold text-stone-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Jaminan Uang Kembali:
                </p>
                <p>
                  Deposit Rp 300.000 akan dikembalikan penuh (100%) saat Anda selesai masa kontrak sewa tanpa kerusakan fasilitas.
                </p>
              </div>

              {/* Action Button: WhatsApp Proposal */}
              <a
                href={waProposalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Hasil Simulasi ke Buk Yet</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
