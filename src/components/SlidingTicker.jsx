import React from 'react';
import { Sparkles, ShieldCheck, Truck, Star, Heart, CheckCircle2, Phone, MapPin } from 'lucide-react';

export default function SlidingTicker() {
  const items = [
    { icon: '🥛', text: '100% Raw Buffalo Milk (7% Natural Fat)', tag: 'Farm Fresh' },
    { icon: '⏰', text: 'Dawn Milking 4:30 AM • Porch Delivery by 8:00 AM', tag: 'Chilled 4°C' },
    { icon: '📍', text: 'Serving Soan Gardens (Ph 1 & 2), PWD, Media Town & Bahria Town', tag: 'Twin Cities' },
    { icon: '⭐', text: '4.6 ★ Rated (83 Google & Map Reviews)', tag: 'Trusted Quality' },
    { icon: '🧪', text: 'Zero Water & Zero Chemical Preservatives Guarantee', tag: '100% Pure' },
    { icon: '🥣', text: 'Traditional Clay-Pot Matka Dahi Set Every Midnight', tag: 'Thick Malai' },
    { icon: '🧈', text: 'Hand-Churned Desi Makhan & Golden Khalis Ghee', tag: 'Artisan' },
    { icon: '💬', text: 'WhatsApp Direct Pass & 1-Tap Pause: 0335 9131316', tag: 'Daily Delivery' },
  ];

  return (
    <div className="w-full bg-[#1b4332] text-white py-3 overflow-hidden border-y border-emerald-900/60 pause-hover relative select-none">
      
      {/* Subtle fade masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1b4332] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1b4332] to-transparent z-10 pointer-events-none" />

      {/* Infinite sliding track */}
      <div className="flex w-max animate-marquee marquee-track">
        
        {/* Render items twice for infinite loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-6 shrink-0 group">
            <span className="text-base group-hover:scale-125 transition-transform duration-200">
              {item.icon}
            </span>
            <span className="text-xs font-extrabold text-white tracking-wide">
              {item.text}
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider bg-[#cbe346] text-[#0c281e] px-2 py-0.5 rounded-full shadow-2xs">
              {item.tag}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 ml-4" />
          </div>
        ))}

      </div>

    </div>
  );
}

