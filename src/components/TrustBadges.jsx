import React from 'react';
import { ShieldCheck, Truck, MessageCircle, Star } from 'lucide-react';
import { STORE_INFO } from '../data/dairyData';

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: '100% Raw Milk',
      subtitle: '0% Water or chemicals',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      icon: Truck,
      title: 'Dawn Delivery',
      subtitle: '6:00 AM – 8:00 AM',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Pass',
      subtitle: 'Instant pause anytime',
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      icon: Star,
      title: '4.6 ★ Rated',
      subtitle: '83 Map Reviews',
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 py-4 sm:py-7">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {badges.map((b, i) => {
          const Icon = b.icon;
          return (
            <div key={i} className="flex items-center gap-2.5 sm:gap-4 p-2 sm:p-2.5 rounded-xl bg-gray-50/60 sm:bg-transparent border border-gray-100 sm:border-transparent">
              <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shrink-0 ${b.color}`}>
                <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 leading-snug truncate">
                  {b.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-500 font-medium truncate">
                  {b.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
