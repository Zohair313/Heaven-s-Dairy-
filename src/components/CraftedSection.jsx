import React from 'react';
import { ShieldCheck, Droplet, Clock, Award } from 'lucide-react';

export default function CraftedSection({ onOpenSubscribe }) {
  return (
    <section id="philosophy" className="relative my-12 sm:my-16 overflow-hidden">
      
      {/* Top Wave Shape Transition */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12 sm:h-16 text-[#9c4928] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Main Solid Terracotta Body */}
      <div className="bg-[#9c4928] text-white py-14 sm:py-20 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
          
          {/* Left Side: Hand holding chilled milk cup/bottle (exact visual match to reference image) */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-start">
            <div className="relative group">
              
              {/* Outer soft aura */}
              <div className="absolute -inset-2 bg-black/20 rounded-3xl blur-xl opacity-60" />

              {/* Hand Holding Drink Photo */}
              <div className="relative w-64 sm:w-72 md:w-80 h-88 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-[#6b311a]">
                <img 
                  src="https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80" 
                  alt="Holding Heaven's Dairy pure bottle" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* On-cup overlay */}
                <div className="absolute bottom-5 inset-x-5 p-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white">
                  <p className="font-retro text-lg text-white lowercase">heaven's dairy</p>
                  <p className="text-[11px] text-[#fae8b2] mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Unadulterated
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Big Title and Balanced Paragraph (exact layout from reference) */}
          <div className="w-full md:w-7/12 text-left md:pl-6">
            <h2 className="font-retro text-3xl sm:text-5xl md:text-6xl text-white leading-[1.08] mb-6">
              Crafted Beyond the Ordinary
            </h2>

            <p className="text-[#f7ebe0] text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              Every drop is thoughtfully sourced from healthy, pasture-grazed herds along the Soan River basin, meticulously chilled to 4°C to celebrate the authentic essence of raw, uncorrupted farm milk. Designed for twin-city families who appreciate quiet luxury and honest wellness in every sip.
            </p>

            {/* Subtle features pills */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2 mb-8">
              <div className="flex items-center gap-2 bg-[#843c1e] px-3.5 py-2 rounded-xl text-xs font-semibold text-[#fceada]">
                <Droplet className="w-4 h-4 text-[#fae8b2]" />
                <span>Zero Injected Hormones</span>
              </div>
              <div className="flex items-center gap-2 bg-[#843c1e] px-3.5 py-2 rounded-xl text-xs font-semibold text-[#fceada]">
                <Clock className="w-4 h-4 text-[#fae8b2]" />
                <span>6:00 AM Sunrise Slot</span>
              </div>
            </div>

            <button
              onClick={onOpenSubscribe}
              className="bg-white hover:bg-[#fae8b2] text-[#30160d] font-bold text-xs px-7 py-3 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Start Daily Milk Delivery
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Wave Shape Transition */}
      <div className="w-full overflow-hidden leading-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12 sm:h-16 text-[#9c4928] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>

    </section>
  );
}
