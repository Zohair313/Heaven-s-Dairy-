import React from 'react';
import { STORE_INFO } from '../data/dairyData';
import { ArrowRight } from 'lucide-react';

export default function StorySection({ onOpenSubscribe }) {
  return (
    <section id="wholesale" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 xl:px-12 w-full">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Clean Editorial Journey & 2x2 Stats Grid */}
        <div className="lg:col-span-6 text-left">
          
          {/* Top Kicker Label */}
          <span className="text-xs font-black uppercase tracking-widest text-[#4a6358] inline-block mb-3">
            Our Dairy Journey
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-black text-[#0c281e] tracking-tight leading-[1.1] mb-5">
            Pure Heritage. <br />
            <span className="font-serif italic font-normal text-[#194d3d]">Naturally Wholesome.</span>
          </h2>

          {/* Subtitle paragraph - clean & relaxed */}
          <p className="text-sm sm:text-base text-[#4a6358] leading-relaxed mb-8 max-w-lg font-medium">
            Founded on a commitment to unadulterated purity, Heaven's Dairy traces its roots to Islamabad's Soan river pastures, delivering fresh morning milk, artisan paneer, and desi butter to thousands of homes and premier cafes across the twin cities.
          </p>

          {/* 2x2 Stats Grid - Clean & Uncluttered (matching reference layout) */}
          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-7 max-w-lg mb-8">
            
            {/* Stat 1 */}
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0c281e] tracking-tight mb-1">
                2,500+ L
              </div>
              <p className="text-xs sm:text-[13px] text-[#6b857d] font-medium leading-relaxed">
                of daily bulk farm capacity delivered across Islamabad
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0c281e] tracking-tight mb-1">
                2,000+ Homes
              </div>
              <p className="text-xs sm:text-[13px] text-[#6b857d] font-medium leading-relaxed">
                families & partner cafes supplied with daily excellence
              </p>
            </div>

            {/* Stat 3 (with lime accent line) */}
            <div className="pt-2">
              <div className="w-12 h-1 bg-[#cbe346] rounded-full mb-3" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0c281e] tracking-tight mb-1">
                4:30 AM
              </div>
              <p className="text-xs sm:text-[13px] text-[#6b857d] font-medium leading-relaxed">
                dawn milking cycle dispatched straight to your doorstep
              </p>
            </div>

            {/* Stat 4 (with lime accent line) */}
            <div className="pt-2">
              <div className="w-12 h-1 bg-[#cbe346] rounded-full mb-3" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0c281e] tracking-tight mb-1">
                99.9% Pure
              </div>
              <p className="text-xs sm:text-[13px] text-[#6b857d] font-medium leading-relaxed">
                daily lab-tested zero water adulteration guarantee
              </p>
            </div>

          </div>

          {/* Clean Action Button */}
          <div className="flex items-center gap-4 pt-1">
            <button
              onClick={onOpenSubscribe}
              className="bg-[#0c281e] hover:bg-[#071a13] text-white font-black text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Start Daily Subscription</span>
              <ArrowRight className="w-4 h-4 text-[#cbe346]" />
            </button>
          </div>

        </div>

        {/* Right Column: Clean Large Photo Card with Subtle Floating Tag */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative group w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-[2.4rem] sm:rounded-[2.8rem] overflow-hidden shadow-2xl border-4 border-white bg-[#edeae0] transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85" 
              alt="Heaven's Dairy commercial artisanal kitchen and fresh milk preparation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.98]"
            />

            {/* Single Clean Floating Pill at Bottom */}
            <div className="absolute bottom-5 inset-x-5 bg-black/45 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 text-white text-xs font-bold text-center shadow-lg">
              <span>🏡 Trusted by 2,000+ Families in Soan Gardens & Bahria Town</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
