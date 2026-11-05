import React from 'react';
import { STORE_INFO } from '../data/dairyData';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function AboutPromoBanner({ onOpenSubscribe }) {
  return (
    <section id="why-choose-us" className="w-full bg-gradient-to-r from-[#edf5f0] via-[#f7faf8] to-[#fbf7f2] border-y border-gray-200/80 py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left">
            
            {/* Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#cbe346] text-[#0c281e] px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-2xs">
                ABOUT US • HEAVEN'S DAIRY (DOODH GHAR)
              </span>
              <span className="bg-white text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold">
                📍 Soan Gardens Phase 2
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.15] tracking-tight">
              Delivering Pure Dairy <br />
              <span className="text-[#1b4332]">Across Islamabad Since 1990</span>
            </h2>

            {/* Dark Green Sub-pill */}
            <div className="inline-block bg-[#1b4332] text-white px-3 py-1 rounded-xl text-xs font-bold shadow-xs">
              100% Unadulterated Raw Buffalo & Cow Milk
            </div>

            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed max-w-xl">
              Founded on the pristine pastures along Islamabad's Soan River, Heaven's Dairy supplies 100% pure milk without starch, chemical adulterants, or water dilution. We run strict cold-chain chilling to 4°C within 15 minutes of dawn milking and dispatch morning deliveries straight to your porch before 8:00 AM breakfast.
            </p>

            {/* 4 Key Business Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1.5 pb-1.5 border-y border-gray-200/60">
              <div className="bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                <p className="text-lg sm:text-2xl font-black text-[#1b4332]">2,500+ L</p>
                <p className="text-[10px] text-gray-500 font-medium">Daily Farm Capacity</p>
              </div>
              <div className="bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                <p className="text-lg sm:text-2xl font-black text-[#1b4332]">2,000+</p>
                <p className="text-[10px] text-gray-500 font-medium">Homes Delivered</p>
              </div>
              <div className="bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                <p className="text-lg sm:text-2xl font-black text-[#1b4332]">4:30 AM</p>
                <p className="text-[10px] text-gray-500 font-medium">Dawn Milking</p>
              </div>
              <div className="bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                <p className="text-lg sm:text-2xl font-black text-[#1b4332]">99.9%</p>
                <p className="text-[10px] text-gray-500 font-medium">Purity Guarantee</p>
              </div>
            </div>

            {/* 4 bullet checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs font-bold text-gray-800 pt-0.5">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> 100% Water-Free Tested Daily
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Chilled to 4°C in 15 Minutes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Soan Gardens, PWD & Bahria
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> WhatsApp 1-Tap Pause Anytime
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={onOpenSubscribe}
                className="w-full sm:w-auto bg-[#1b4332] hover:bg-[#122e22] text-white font-black text-xs px-5 py-3 rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Daily Subscription</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!%20I%20am%20interested%20in%20wholesale%20rates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#1b4332] border border-gray-300 font-bold text-xs px-4 py-2.5 rounded-full transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Inquire Wholesale Rates</span>
              </a>
            </div>

          </div>

          {/* Right Visual (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-56 sm:h-72 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=85" 
                alt="Family kitchen cooking with pure farm fresh dairy products" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute top-3 left-3 bg-[#1b4332] text-white px-2.5 py-1 rounded-full shadow-md text-[10px] font-black">
                Bulk Milk & Commercial Supply
              </div>

              <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-gray-100">
                <p className="font-black text-gray-900 text-[11px] sm:text-xs">Commercial Fleet for Bakeries & Cafes</p>
                <p className="text-[10px] text-gray-500">Chilled bulk delivery across Islamabad & Rawalpindi</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
