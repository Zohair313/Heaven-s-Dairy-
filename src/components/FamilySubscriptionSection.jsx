import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FamilySubscriptionSection({ onOpenSubscribe }) {
  return (
    <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 xl:px-12 w-full">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Headline + Narrative + Dark Green Button (exact match to Section 5 of reference) */}
        <div className="md:col-span-6 text-left order-2 md:order-1">
          <span className="text-xs font-black uppercase tracking-widest text-[#0c281e] bg-[#cbe346] px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
            Wholesome Daily Nutrition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c281e] tracking-tight leading-[1.08] mb-5">
            Creamy. Fresh. <br />
            <span className="font-serif italic font-normal text-[#194d3d]">Naturally Good.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4a6358] leading-relaxed mb-7 max-w-lg font-medium">
            Our dairy is crafted from raw, farm-fresh morning milk with zero additives, starch, or preservatives. Enjoy wholesome goodness delivered right to your porch before breakfast.
          </p>

          <div className="space-y-3 mb-8 text-xs sm:text-sm text-[#236350] font-bold">
            <p className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 stroke-[2.5]" />
              <span>100% Raw Milk with 0% water or chemical adulteration</span>
            </p>
            <p className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 stroke-[2.5]" />
              <span>Chilled to 4°C & delivered to your doorstep between 6:00 AM – 8:00 AM</span>
            </p>
            <p className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 stroke-[2.5]" />
              <span>1-Tap Pause, skip, or adjust milk quantities anytime on WhatsApp</span>
            </p>
          </div>

          <button
            onClick={onOpenSubscribe}
            className="bg-[#0c281e] hover:bg-[#071a13] text-white font-black text-xs sm:text-sm px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all inline-flex items-center gap-2.5 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Start Daily Subscription</span>
            <ArrowRight className="w-4 h-4 text-[#cbe346] stroke-[3]" />
          </button>
        </div>

        {/* Right Side: Warm Lifestyle Photo (Mom & child pouring milk in kitchen) */}
        <div className="md:col-span-6 flex justify-center order-1 md:order-2">
          <div className="relative group w-full max-w-xl aspect-[16/11] rounded-[2.5rem] sm:rounded-[3.2rem] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-[#e2decfa0] bg-[#edeae0]">
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85" 
              alt="Mother and daughter pouring fresh morning milk" 
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
            />
            {/* Tag on photo */}
            <div className="absolute bottom-5 inset-x-5 bg-black/45 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-white text-xs font-bold text-center shadow-lg">
              <span>🏡 Trusted by 2,000+ Families in Soan Gardens & Bahria Town</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
