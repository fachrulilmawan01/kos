import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, FAQ, KOS_INFO } from '../data/kosData';
import { createWhatsAppUrl } from '../utils/formatters';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  const waAskUrl = createWhatsAppUrl(
    KOS_INFO.whatsappNumber,
    `Halo Buk Yet, saya ada pertanyaan yang belum tercantum di FAQ website. Boleh minta informasinya?`
  );

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-700 bg-brand-100/80 px-3 py-1 rounded-full border border-brand-200">
            Tanya Jawab (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Temukan jawaban cepat seputar sistem sewa, pembayaran, aturan jam malam, dan prosedur masuk di KOS Buk Yet.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {[
            { id: 'all', label: 'Semua Pertanyaan' },
            { id: 'pembayaran', label: 'Pembayaran & Deposit' },
            { id: 'fasilitas', label: 'Fasilitas & Listrik' },
            { id: 'aturan', label: 'Aturan & Jam Malam' },
            { id: 'survei', label: 'Survei & Booking' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq: FAQ) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'bg-brand-50/40 border-brand-300 shadow-xs' : 'bg-stone-50 border-stone-200/80 hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-extrabold text-stone-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-brand-100 text-brand-800' : 'text-stone-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-brand-100/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-3xl bg-stone-100/80 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shrink-0 text-brand-600">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm sm:text-base">Masih punya pertanyaan lain?</h4>
              <p className="text-xs text-stone-500">Buk Yet dengan senang hati menjawab pertanyaan Anda secara langsung.</p>
            </div>
          </div>
          <a
            href={waAskUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya Langsung Buk Yet</span>
          </a>
        </div>

      </div>
    </section>
  );
};
