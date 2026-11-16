import React from 'react';
import { Tag, MapPin, Shield, GraduationCap, CheckCircle } from 'lucide-react';
import { KOS_INFO } from '../data/kosData';

export const StatsBar: React.FC = () => {
  const icons = [
    <GraduationCap className="w-5 h-5 text-brand-500" />,
    <Tag className="w-5 h-5 text-brand-500" />,
    <MapPin className="w-5 h-5 text-brand-500" />,
    <Shield className="w-5 h-5 text-brand-500" />
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {KOS_INFO.stats.map((stat, idx) => (
            <div key={stat.label} className={`flex items-center gap-3.5 ${idx > 0 ? 'sm:pl-6' : ''} pt-3 sm:pt-0`}>
              <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0">
                {icons[idx]}
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-bold text-brand-600">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-xs text-gray-600 font-semibold">
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
