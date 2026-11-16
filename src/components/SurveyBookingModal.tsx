import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  GraduationCap, 
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
  const [university, setUniversity] = useState('Universitas Adzkia Padang');
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

    const formattedMessage = `Halo Bu Yet, saya mahasiswa ingin survei kamar KOS Buk Yet (dekat Univ. Adzkia Padang):
- Nama: ${name}
- No. HP/WA: ${phone}
- Kampus: ${university}
- Tipe Kamar: ${selectedRoom}
- Rencana Tanggal Survei: ${surveyDate || 'Menyesuaikan Bu Yet'}
- Jam Kunjungan: ${timeSlot}
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
        className="relative bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-gray-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-rukita-50 text-rukita-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-gray-900 text-sm sm:text-base">
                Jadwal Survei Kamar
              </h3>
              <p className="text-[11px] text-gray-500 font-medium">{KOS_INFO.name} • Kalumbuk, Dekat Univ. Adzkia</p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-rukita-50 text-rukita-600 flex items-center justify-center mx-auto border border-rukita-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base font-black text-gray-900">
                Pesan WhatsApp Berhasil Dibuat
              </h4>
              <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                Silakan tekan tombol <strong>Kirim</strong> di aplikasi WhatsApp Anda untuk meneruskan jadwal survei langsung ke Bu Yet.
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="mt-3 px-6 py-2.5 rounded-xl bg-gray-900 text-white font-black text-xs shadow-xs"
              >
                Selesai & Tutup
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div>
                <label className="block text-xs font-black text-gray-800 mb-1">
                  Nama Mahasiswa *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Lengkap Anda"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-rukita-500 bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-800 mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 0812xxxxxxxx"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-rukita-500 bg-gray-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-black text-gray-800 mb-1">
                    Asal Kampus
                  </label>
                  <select
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50"
                  >
                    <option value="Universitas Adzkia Padang">Univ. Adzkia</option>
                    <option value="Universitas Baiturrahmah">Univ. Baiturrahmah</option>
                    <option value="UIN Imam Bonjol">UIN Imam Bonjol</option>
                    <option value="UNP / UNAND">UNP / UNAND</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-800 mb-1">
                    Pilihan Unit Kamar
                  </label>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50 font-medium"
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
                  <label className="block text-xs font-black text-gray-800 mb-1">
                    Tanggal Survei
                  </label>
                  <input
                    type="date"
                    value={surveyDate}
                    onChange={(e) => setSurveyDate(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-800 mb-1">
                    Pilihan Jam
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50"
                  >
                    <option value="Pagi (09.00 - 11.30 WIB)">Pagi</option>
                    <option value="Siang (13.00 - 15.00 WIB)">Siang</option>
                    <option value="Sore (15.30 - 17.30 WIB)">Sore</option>
                    <option value="Malam (19.00 - 21.00 WIB)">Malam</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-800 mb-1">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Misal: Ingin cek kamar 2 Bed berdua teman seangkatan..."
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rukita-500 hover:bg-rukita-600 text-white font-black text-xs transition-colors shadow-xs"
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
