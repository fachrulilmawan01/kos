import React from 'react';
import { 
  Users, 
  KeyRound, 
  VolumeX, 
  Trash2, 
  AlertOctagon, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { RULES, Rule } from '../data/kosData';

export const RulesSection: React.FC = () => {
  const getRuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-emerald-600" />;
      case 'VolumeX':
        return <VolumeX className="w-5 h-5 text-amber-600" />;
      case 'Trash2':
        return <Trash2 className="w-5 h-5 text-teal-600" />;
      case 'AlertOctagon':
        return <AlertOctagon className="w-5 h-5 text-rose-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section id="aturan" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-700 bg-brand-100/80 px-3 py-1 rounded-full border border-brand-200">
            Kenyamanan & Keamanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Tata Tertib & Norma Hunian Bersama
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Aturan dibuat demi menjamin ketenangan istirahat, keamanan barang berharga, dan kehormatan seluruh warga KOS Buk Yet.
          </p>
        </div>

        {/* Rules Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RULES.map((rule: Rule) => (
            <div
              key={rule.id}
              className="p-6 rounded-3xl bg-stone-50 border border-stone-200/80 hover:border-brand-300 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shrink-0">
                    {getRuleIcon(rule.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-stone-200/70 text-stone-700">
                    {rule.category}
                  </span>
                </div>

                <h3 className="font-extrabold text-stone-900 text-base mb-2">
                  {rule.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {rule.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1 text-xs text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Wajib ditaati seluruh penghuni</span>
              </div>
            </div>
          ))}

          {/* Parental Peace of Mind Highlight Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-900 to-emerald-950 text-white flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-emerald-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-base sm:text-lg mb-2">
                Ketenangan untuk Orang Tua di Rumah
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Orang tua dapat tenang menitipkan putra-putrinya. Lingkungan terpantau, bebas dari pergaulan bebas dan obat terlarang, serta komunikasi terbuka langsung dengan Buk Yet.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-emerald-300 font-semibold">
              Keluarga Terbuka untuk Komunikasi Kapan Saja
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
