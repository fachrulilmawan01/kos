import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, FAQ, KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const waAskUrl = createWhatsAppUrl(
    KOS_INFO.whatsappNumber,
    `Halo Bu Yet, saya mau menanyakan perihal kos yang belum tercantum di FAQ website.`
  );

  return (
    <section id="faq" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Pertanyaan Umum
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Tanya Jawab Seputar Kos
          </h2>
          <p className="text-stone-600 text-sm">
            Informasi penting terkait harga, pembayaran, dan aturan sewa di KOS Buk Yet.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-2.5">
          {FAQS.map((faq: FAQ) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-stone-900"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <h4 className="text-xs font-bold text-stone-900">Masih ada pertanyaan yang ingin ditanyakan?</h4>
            <p className="text-[11px] text-stone-500">Ibu Yet siap menjawab langsung via pesan WhatsApp.</p>
          </div>
          <a
            href={waAskUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat Bu Yet</span>
          </a>
        </div>

      </div>
    </section>
  );
};
