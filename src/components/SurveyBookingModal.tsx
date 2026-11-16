import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Briefcase, 
  MessageSquare, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { ROOM_TYPES, KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

interface SurveyBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoomName?: string;
}

export const SurveyBookingModal: React.FC<SurveyBookingModalProps> = ({
  isOpen,
  onClose,
  defaultRoomName,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('Mahasiswa');
  const [selectedRoom, setSelectedRoom] = useState(defaultRoomName || ROOM_TYPES[0].name);
  const [surveyDate, setSurveyDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Sore (15.00 - 17.30 WIB)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultRoomName) {
      setSelectedRoom(defaultRoomName);
    }
  }, [defaultRoomName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Halo Buk Yet, saya ingin menjadwalkan survei ke KOS Buk Yet:
- *Nama*: ${name}
- *No. WA*: ${phone}
- *Status*: ${occupation}
- *Tipe Kamar yang Diminati*: ${selectedRoom}
- *Rencana Tanggal Survei*: ${surveyDate || 'Menyesuaikan Buk Yet'}
- *Waktu Kunjungan*: ${timeSlot}
${notes ? `- *Catatan Khusus*: ${notes}` : ''}

Mohon konfirmasi ketersediaan jadwalnya ya Bu, terima kasih banyak!`;

    const waUrl = createWhatsAppUrl(KOS_INFO.whatsappNumber, formattedMessage);
    
    // Open WhatsApp
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
                Jadwal Survei Lokasi Kamar
              </h3>
              <p className="text-xs text-stone-500">KOS Buk Yet • Lowokwaru, Malang</p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="Tutup formulir survei"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-stone-900">
                Pesan WhatsApp Berhasil Dibuka!
              </h4>
              <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                Silakan tekan tombol <strong>Kirim (Send)</strong> di aplikasi WhatsApp Anda untuk meneruskan detail jadwal survei langsung ke Buk Yet.
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-sm transition-all"
              >
                Selesai & Tutup
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Muhammad Ilham"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                  />
                </div>
              </div>

              {/* Status / Occupation */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Status Penghuni
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <select
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                  >
                    <option value="Mahasiswa (UB / UM / POLINEMA / Lainnya)">Mahasiswa</option>
                    <option value="Karyawan / Pekerja Profesional">Karyawan / Pekerja Profesional</option>
                    <option value="Pasangan Suami Istri Sah">Pasangan Suami Istri Sah</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              {/* Room Choice */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Tipe Kamar yang Ingin Dilihat
                </label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white font-medium"
                >
                  {ROOM_TYPES.map((r) => (
                    <option key={r.id} value={r.name}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Survey Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Rencana Tanggal Survei
                  </label>
                  <input
                    type="date"
                    value={surveyDate}
                    onChange={(e) => setSurveyDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Preferensi Jam
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                  >
                    <option value="Pagi (09.00 - 11.30 WIB)">Pagi (09.00 - 11.30 WIB)</option>
                    <option value="Siang (13.00 - 15.00 WIB)">Siang (13.00 - 15.00 WIB)</option>
                    <option value="Sore (15.30 - 17.30 WIB)">Sore (15.30 - 17.30 WIB)</option>
                    <option value="Malam (19.00 - 21.00 WIB)">Malam (19.00 - 21.00 WIB)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Catatan / Pertanyaan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Misal: Bawa kendaraan mobil, ingin sewa mulai bulan depan, dsb."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Jadwal via WhatsApp ke Buk Yet</span>
              </button>

              <p className="text-[11px] text-center text-stone-400">
                Data Anda aman dan diteruskan secara privat langsung ke nomor WhatsApp pengelola.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
