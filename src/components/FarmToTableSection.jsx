import React from 'react';
import { Leaf, Sun, ShieldCheck, Bike, Sparkles, Droplet } from 'lucide-react';

export default function FarmToTableSection() {
  const cards = [
    {
      id: 1,
      stat: '100%',
      title: 'Organic Pasture Grazing',
      subtitle: 'Soan River Basin',
      desc: 'Free-range buffaloes and cows grazing on fresh green natural forage with zero chemical fertilizers.',
      tag: '🌿 Soan River Pastures',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=85',
      icon: Leaf,
    },
    {
      id: 2,
      stat: '0%',
      title: 'Hormones & Additives',
      subtitle: 'Ethical & Humane Care',
      desc: 'Strictly zero oxytocin, antibiotics, or synthetic hormones. Healthy stress-free herds with 24/7 vet care.',
      tag: '🐄 Ethical Herd Care',
      image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=1000&q=85',
      icon: Sun,
    },
    {
      id: 3,
      stat: '4°C',
      title: 'Instant Cold-Chain Chill',
      subtitle: 'Preserves Live Enzymes',
      desc: 'Chilled immediately within 15 minutes of milking to stop bacterial growth and keep natural golden malai intact.',
      tag: '❄️ Tested Cold-Chain',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1000&q=85',
      icon: ShieldCheck,
    },
    {
      id: 4,
      stat: '6:00 AM',
      title: 'Dawn Porch Delivery',
      subtitle: 'Soan, PWD, Bahria',
      desc: 'Delivered directly to your porch before breakfast in insulated crates across Islamabad and Rawalpindi.',
      tag: '🚚 Daily Morning Fleet',
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=1000&q=85',
      icon: Bike,
    }
  ];

  return (
    <section id="our-farm" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 xl:px-12 w-full">
      
      {/* Centered Header matching reference image */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-[#cbe346] text-[#0c281e] px-4 py-1.5 rounded-full text-xs font-black tracking-wide shadow-xs mb-3.5">
          <Leaf className="w-3.5 h-3.5 fill-[#0c281e]" />
          <span>Why Choose Us</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0c281e] tracking-tight mb-4">
          Why Choose Us
        </h2>

        <p className="text-sm sm:text-base text-[#4a6358] font-medium leading-relaxed">
          Our mission is to bring unadulterated dairy purity into your home, enhancing the wellness of our customers by delivering superior farm milk that exceeds every expectation.
        </p>
      </div>

      {/* 4 Cards Grid - EXACT match to reference layout with Heaven's Dairy styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div 
              key={card.id}
              className="relative group rounded-[2.2rem] sm:rounded-[2.6rem] overflow-hidden aspect-[3/4] sm:aspect-[4/5] min-h-[430px] shadow-[0_15px_35px_rgba(12,40,30,0.08)] hover:shadow-[0_30px_65px_rgba(12,40,30,0.18)] hover:-translate-y-2 transition-all duration-500 border-4 border-white bg-[#edeae0] flex flex-col justify-between p-4 sm:p-5"
            >
              {/* Full-Bleed Background Photo with Zoom on Hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-[0.96]" 
                />
                {/* Gradient vignette for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />
              </div>

              {/* Top Tag on Card */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="bg-black/45 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-md">
                  {card.tag}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-[#cbe346] text-xs font-black flex items-center justify-center border border-white/20">
                  0{card.id}
                </span>
              </div>

              {/* Bottom Frosted Glass Overlay Box - EXACT match to reference card badge */}
              <div className="relative z-10 p-4 sm:p-5 rounded-[1.8rem] backdrop-blur-xl bg-black/45 border border-white/25 text-white flex items-center justify-between shadow-2xl group-hover:bg-black/60 group-hover:border-white/35 transition-all">
                
                {/* Left: Big Stat & Title */}
                <div className="min-w-0 pr-3">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none mb-1 flex items-baseline gap-1">
                    <span>{card.stat}</span>
                  </div>
                  <p className="text-xs sm:text-[13px] font-bold text-white truncate">
                    {card.title}
                  </p>
                  <p className="text-[10px] text-[#eef5c4] font-medium truncate mt-0.5">
                    {card.subtitle}
                  </p>
                </div>

                {/* Right: Circular Icon Badge with Pasture Lime & Icon (matching the circular badge from reference) */}
                <div className="w-11 h-11 rounded-full bg-[#cbe346] text-[#0c281e] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform border-2 border-white/40">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
