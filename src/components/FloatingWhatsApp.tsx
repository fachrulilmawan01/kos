import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickQuestions = [
    'Apakah masih ada kamar 1 Bed (Rp 350rb) kosong?',
    'Apakah masih ada kamar 2 Bed untuk berdua?',
    'Bisa survei lokasi hari ini?',
    'Minta petunjuk rute jalan ke kos'
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
        <div className="mb-2 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden animate-in slide-in-from-bottom-2 duration-150">
          
          <div className="bg-stone-900 text-white p-3.5 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-xs text-white">Buk Yet (Pengelola Kos)</h4>
              <p className="text-[10px] text-emerald-400">Online • Kalumbuk, Padang</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-stone-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 bg-stone-50 space-y-2.5">
            <p className="text-xs text-stone-700 bg-white p-2.5 rounded-lg border border-stone-200">
              Halo! Ada yang bisa Bu Yet bantu mengenai ketersediaan kamar 1 bed atau 2 bed? 😊
            </p>

            <div className="space-y-1">
              <p className="text-[10px] font-bold text-stone-500 uppercase">Pertanyaan Cepat:</p>
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(`Halo Bu Yet, ${q}`)}
                  className="w-full text-left text-xs bg-white hover:bg-stone-100 p-2 rounded-lg border border-stone-200 text-stone-700 transition-colors"
                >
                  💬 {q}
                </button>
              ))}
            </div>
          </div>

          <div className="p-2.5 bg-white border-t border-stone-200 flex items-center gap-1.5">
            <input
              type="text"
              placeholder="Tulis pesan..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customMsg.trim()) {
                  handleSend(customMsg.trim());
                }
              }}
              className="flex-1 px-2.5 py-1.5 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-stone-400"
            />
            <button
              onClick={() => {
                if (customMsg.trim()) handleSend(customMsg.trim());
              }}
              className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-colors text-xs font-bold"
        aria-label="Chat WhatsApp Buk Yet"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Tanya Bu Yet</span>
      </button>
    </div>
  );
};
