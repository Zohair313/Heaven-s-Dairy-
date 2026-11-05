import React from 'react';
import { STORE_INFO } from '../data/dairyData';
import { ShoppingCart, Bike, Phone, MessageCircle, ShieldCheck, MapPin, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export default function OrganicoHero({ onOpenSubscribe, onOpenRiderApp }) {
  return (
    <section className="w-full bg-gradient-to-b from-[#edf5f0] via-[#f7faf8] to-white border-b border-gray-200/80 py-6 sm:py-12 lg:py-16 overflow-hidden">
      
      {/* Centered Max-Width Container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Details, Badges & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 bg-[#1b4332] text-white px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-black shadow-2xs">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f59e0b] animate-spin" style={{ animationDuration: '6s' }} />
                <span>Heaven's Dairy • Doodh Ghar</span>
              </div>

              <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200/80 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f59e0b]" />
                <span className="truncate max-w-[170px] sm:max-w-none">Soan Gardens Phase 2, Islamabad</span>
              </div>

              <div className="inline-flex items-center gap-1 bg-white text-gray-800 border border-gray-200 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-extrabold shadow-2xs">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                <span>4.6 ★ (83)</span>
              </div>
            </div>

            {/* Main Headline - Responsive font size */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight">
              <span className="text-[#f59e0b]">100% Raw & Pure</span> <br />
              Farm Milk Delivered to Your Doorstep.
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed max-w-xl">
              Farm-daily unadulterated buffalo & cow milk, creamy clay-pot matka yogurt, artisan malai paneer, and hand-churned desi butter delivered fresh every morning across <strong className="text-gray-900 font-bold">Soan Gardens (Phase 1 & 2), PWD, Media Town & Bahria Town</strong>.
            </p>

            {/* Highlighted Price Tags for Core Products */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <div className="bg-white px-2.5 sm:px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                <span className="font-extrabold text-gray-900">Buffalo:</span>
                <span className="font-black text-emerald-700">Rs. 240/L</span>
                <span className="text-[10px] text-gray-400 font-bold hidden sm:inline">(7% Fat)</span>
              </div>

              <div className="bg-white px-2.5 sm:px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="font-extrabold text-gray-900">Cow:</span>
                <span className="font-black text-emerald-700">Rs. 260/L</span>
              </div>

              <div className="bg-white px-2.5 sm:px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span className="font-extrabold text-gray-900">Dahi:</span>
                <span className="font-black text-emerald-700">Rs. 320/Kg</span>
              </div>
            </div>

            {/* CTAs Row - Mobile Stacked buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={onOpenSubscribe}
                className="w-full sm:w-auto bg-[#1b4332] hover:bg-[#122e22] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <ShoppingCart className="w-4 h-4 stroke-[2.5] group-hover:rotate-12 transition-transform duration-300" />
                <span>Order Now / Daily Pass</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenRiderApp}
                  className="flex-1 sm:flex-none bg-white hover:bg-emerald-50 text-[#1b4332] border border-[#1b4332] font-black text-xs sm:text-sm px-4 py-3 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Bike className="w-4 h-4 text-emerald-700" />
                  <span>Rider App</span>
                </button>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!%20I%20want%20to%20order%20farm-fresh%20milk.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#1b4332] bg-emerald-50 hover:bg-emerald-100 px-4 py-3 rounded-full border border-emerald-200 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Footprint note */}
            <p className="text-[11px] text-gray-500 font-medium flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Dawn Milking 4:30 AM • Porch Delivery Between 6:00 AM – 8:00 AM</span>
            </p>

          </div>

          {/* Right Column: Hero Image Container (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <img 
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1000&q=85" 
                alt="Pure farm fresh milk bottles and morning breakfast table" 
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              
              {/* Floating Top Badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md text-[10px] sm:text-xs font-black text-[#1b4332] border border-gray-100 flex items-center gap-1.5 animate-float">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Water-Free Tested</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between text-xs animate-float-slow">
                <div className="min-w-0 pr-2">
                  <p className="font-extrabold text-gray-900 text-[11px] sm:text-sm truncate">Twin Cities Delivery Footprint</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium truncate">Soan Gardens, PWD, Media Town & Bahria</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[8px] sm:text-[9px] text-gray-400 block font-bold uppercase">From</span>
                  <span className="font-black text-emerald-700 text-xs sm:text-sm">Rs. 240/L</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
