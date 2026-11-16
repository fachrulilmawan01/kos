import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS, FAQ, KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const waAskUrl = createWhatsAppUrl(
    KOS_INFO.whatsappNumber,
    `Halo Bu Yet, saya mahasiswa yang ingin menanyakan hal lain seputar sewa kamar di KOS Buk Yet.`
  );

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            TANYA JAWAB (FAQ)
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Informasi penting terkait harga sewa, air bersih, aturan khusus mahasiswa, dan jarak ke Universitas Adzkia.
          </p>
        </div>

        {/* Accordions in Modern Style */}
        <div className="space-y-3">
          {FAQS.map((faq: FAQ) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-brand-400 shadow-sm' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-black text-gray-900"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1 rounded-full transition-transform ${isOpen ? 'rotate-180 bg-brand-50 text-brand-600' : 'text-gray-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modern Contact Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-gray-900">Punya pertanyaan seputar ketersediaan kamar?</h4>
              <p className="text-[11px] text-gray-500">Ibu Yet siap membalas langsung melalui pesan WhatsApp.</p>
            </div>
          </div>
          
          <a
            href={waAskUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-xs transition-colors shadow-xs shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Bu Yet via WA</span>
          </a>
        </div>

      </div>
    </section>
  );
};
