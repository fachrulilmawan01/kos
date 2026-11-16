import React from 'react';
import { BedSingle, Tag, MapPin, Shield } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

export const StatsBar: React.FC = () => {
  const icons = [
    <Tag className="w-5 h-5 text-emerald-600" />,
    <BedSingle className="w-5 h-5 text-stone-700" />,
    <MapPin className="w-5 h-5 text-blue-600" />,
    <Shield className="w-5 h-5 text-emerald-600" />
  ];

  return (
    <section className="py-6 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {KOS_INFO.stats.map((stat, idx) => (
            <div key={stat.label} className={`flex items-center gap-3 ${idx > 0 ? 'sm:pl-6' : ''} pt-2 sm:pt-0`}>
              <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0">
                {icons[idx]}
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-xl font-black text-stone-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-stone-500">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-xs text-stone-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
