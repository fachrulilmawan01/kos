import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickQuestions = [
    'Apakah masih ada kamar AC kosong?',
    'Boleh minta share location kos?',
    'Mau tanya tarif sewa tahunan',
    'Bisa survei lokasi hari ini?'
  ];

  const handleSend = (text: string) => {
    const url = createWhatsAppUrl(KOS_INFO.whatsappNumber, text);
    window.open(url, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popup Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-brand-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center font-bold text-white text-sm">
                  BY
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-700"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">Buk Yet (Pengelola Kos)</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online • Siap Membantu
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-stone-50/70 space-y-3">
            <div className="bg-white p-3 rounded-2xl shadow-xs border border-stone-200 text-xs text-stone-700 leading-relaxed">
              Halo! Ada yang bisa Buk Yet bantu seputar ketersediaan kamar atau survei lokasi di KOS Buk Yet? 😊
            </div>

            <div className="space-y-1.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Pilih Pertanyaan Cepat:</p>
              <div className="flex flex-col gap-1.5">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(`Halo Buk Yet, ${q}`)}
                    className="text-left text-xs bg-white hover:bg-brand-50 hover:text-brand-800 hover:border-brand-300 p-2 rounded-xl border border-stone-200 text-stone-700 font-medium transition-colors"
                  >
                    💬 {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ketik pesan Anda..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customMsg.trim()) {
                  handleSend(customMsg.trim());
                }
              }}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-brand-500 bg-stone-50"
            />
            <button
              onClick={() => {
                if (customMsg.trim()) handleSend(customMsg.trim());
              }}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              title="Kirim ke WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-brand-600 hover:from-emerald-700 hover:to-brand-700 text-white shadow-xl shadow-emerald-700/30 hover:shadow-emerald-700/40 transition-all transform hover:scale-105 active:scale-95"
        aria-label="Chat WhatsApp Buk Yet"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          {isOpen ? 'Tutup Chat' : 'Tanya Buk Yet'}
        </span>
      </button>
    </div>
  );
};
