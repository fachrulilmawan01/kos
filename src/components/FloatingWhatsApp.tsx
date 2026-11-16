import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickQuestions = [
    'Apakah kamar 1 Bed (Rp 350rb) masih ada yang kosong?',
    'Apakah kamar 2 Bed untuk berdua teman masih tersedia?',
    'Bisa jadwalkan survei lokasi kamar hari ini?',
    'Berapa menit jarak ke kampus Universitas Adzkia?'
  ];

  const handleSend = (text: string) => {
    const url = createWhatsAppUrl(KOS_INFO.whatsappNumber, text);
    window.open(url, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-2 w-72 sm:w-80 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-2 duration-150">
          
          {/* Header in Rukita Teal */}
          <div className="bg-rukita-500 text-white p-3.5 flex items-center justify-between">
            <div>
              <h4 className="font-black text-xs text-white">Bu Yet (Pengelola Kos)</h4>
              <p className="text-[10px] text-rukita-100 font-medium">Online • Kalumbuk, Dekat Univ. Adzkia</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3.5 bg-gray-50 space-y-2.5">
            <p className="text-xs text-gray-700 bg-white p-3 rounded-xl border border-gray-200 leading-relaxed font-medium">
              Halo! Ada yang bisa Bu Yet bantu mengenai ketersediaan kamar mahasiswa 1 Bed atau 2 Bed? 😊
            </p>

            <div className="space-y-1">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Pertanyaan Cepat:</p>
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(`Halo Bu Yet, ${q}`)}
                  className="w-full text-left text-xs bg-white hover:bg-rukita-50 hover:text-rukita-700 hover:border-rukita-300 p-2 rounded-xl border border-gray-200 text-gray-700 transition-colors font-medium"
                >
                  💬 {q}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-white border-t border-gray-200 flex items-center gap-1.5">
            <input
              type="text"
              placeholder="Tulis pesan ke Bu Yet..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customMsg.trim()) {
                  handleSend(customMsg.trim());
                }
              }}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-rukita-500 bg-gray-50"
            />
            <button
              onClick={() => {
                if (customMsg.trim()) handleSend(customMsg.trim());
              }}
              className="p-2 rounded-xl bg-rukita-500 hover:bg-rukita-600 text-white transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Button in Rukita Teal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-rukita-500 hover:bg-rukita-600 text-white shadow-xl shadow-rukita-600/30 transition-all text-xs font-black"
        aria-label="Chat WhatsApp Buk Yet"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Tanya Bu Yet</span>
      </button>
    </div>
  );
};
