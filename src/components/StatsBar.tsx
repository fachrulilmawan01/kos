import React from 'react';
import { BedDouble, Wifi, Star, HeartHandshake } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

export const StatsBar: React.FC = () => {
  const statIcons = [
    <BedDouble className="w-6 h-6 text-emerald-600" />,
    <Wifi className="w-6 h-6 text-blue-600" />,
    <Star className="w-6 h-6 text-amber-500 fill-amber-500" />,
    <HeartHandshake className="w-6 h-6 text-rose-500" />
  ];

  return (
    <section className="py-8 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {KOS_INFO.stats.map((stat, idx) => (
            <div key={stat.label} className={`flex items-center gap-4 ${idx > 0 ? 'sm:pl-6' : ''} pt-4 sm:pt-0`}>
              <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center shrink-0">
                {statIcons[idx]}
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-500">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 font-medium">
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
