import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  Briefcase, 
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

    const formattedMessage = `Halo Bu Yet, saya ingin survei ke KOS Buk Yet (Padang):
- Nama: ${name}
- No. HP/WA: ${phone}
- Status: ${occupation}
- Tipe Kamar: ${selectedRoom}
- Rencana Tanggal: ${surveyDate || 'Menyesuaikan Bu Yet'}
- Jam: ${timeSlot}
${notes ? `- Catatan: ${notes}` : ''}

Apakah waktunya bisa Bu? Terima kasih!`;

    const waUrl = createWhatsAppUrl(KOS_INFO.whatsappNumber, formattedMessage);
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-700" />
            <div>
              <h3 className="font-extrabold text-stone-900 text-sm sm:text-base">
                Jadwal Survei Kamar
              </h3>
              <p className="text-[11px] text-stone-500">{KOS_INFO.name} • Kalumbuk, Padang</p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-extrabold text-stone-900">
                Pesan WhatsApp Telah Dibuat
              </h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                Silakan tekan tombol <strong>Kirim</strong> pada aplikasi WhatsApp Anda untuk meneruskan detail survei langsung ke Bu Yet.
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="mt-3 px-5 py-2 rounded-lg bg-stone-900 text-white font-bold text-xs"
              >
                Tutup
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Nama Lengkap *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-stone-400">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Anda"
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:border-stone-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Nomor WhatsApp *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-stone-400">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 0812xxxxxxxx"
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:border-stone-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Status
                  </label>
                  <select
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-stone-300 bg-white"
                  >
                    <option value="Mahasiswa">Mahasiswa</option>
                    <option value="Karyawan / Pekerja">Karyawan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Pilihan Kamar
                  </label>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-stone-300 bg-white"
                  >
                    {ROOM_TYPES.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Tanggal Survei
                  </label>
                  <input
                    type="date"
                    value={surveyDate}
                    onChange={(e) => setSurveyDate(e.target.value)}
                    className="w-full px-2 py-1.5 text-xs rounded-lg border border-stone-300 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Jam Kunjungan
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-stone-300 bg-white"
                  >
                    <option value="Pagi (09.00 - 11.30 WIB)">Pagi</option>
                    <option value="Siang (13.00 - 15.00 WIB)">Siang</option>
                    <option value="Sore (15.30 - 17.30 WIB)">Sore</option>
                    <option value="Malam (19.00 - 21.00 WIB)">Malam</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Misal: Ingin lihat yang 2 bed berdua teman..."
                  className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-stone-300 bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-2xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Jadwal via WhatsApp ke Bu Yet</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
