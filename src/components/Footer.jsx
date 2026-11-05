import React from 'react';
import { STORE_INFO } from '../data/dairyData';
import { Leaf, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer({ onOpenSubscribe, onOpenRiderApp }) {
  return (
    <footer id="contact" className="px-3 sm:px-6 lg:px-8 xl:px-12 pb-12 pt-6 w-full">
      
      {/* Dark Forest Green Footer Container - exact match to Section 7 of reference */}
      <div className="bg-[#071a13] text-white rounded-[2.5rem] sm:rounded-[3.2rem] lg:rounded-[3.8rem] p-8 sm:p-14 lg:p-18 relative overflow-hidden shadow-2xl border border-white/5">
        
        {/* Main Grid: Left Brand + Center Farm Photo + Right Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10 pb-14 border-b border-white/10">
          
          {/* Left Column: Brand & Details */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#113a2d] flex items-center justify-center text-[#cbe346]">
                <Leaf className="w-5 h-5 fill-[#cbe346]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase font-sans">
                HEAVEN'S DAIRY
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#d6e5df] max-w-sm leading-relaxed">
              Soan Gardens Phase 2, Islamabad. Farm-fresh morning milk, thick clay-set matka dahi, artisan cheese, and hand-churned desi butter delivered daily to your doorstep.
            </p>

            <div className="text-xs sm:text-[13px] text-[#cbe346] font-semibold space-y-1">
              <p>Delivery Coverage: Soan Gardens • PWD • Media Town • Bahria Town</p>
              <p>Hotline: {STORE_INFO.phoneDisplay} (Call & WhatsApp)</p>
            </div>

            {/* Social Circle Icons from reference */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#cbe346] hover:text-[#0c281e] text-white flex items-center justify-center transition-all border border-white/10"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#cbe346] hover:text-[#0c281e] text-white flex items-center justify-center transition-all border border-white/10"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#cbe346] hover:text-[#0c281e] text-white flex items-center justify-center transition-all border border-white/10"
                title="Map Location (Doodh Ghar)"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#cbe346] hover:text-[#0c281e] text-white flex items-center justify-center transition-all border border-white/10 text-xs font-bold"
                title="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          {/* Center Column: Farm Photo Card from reference */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border border-white/20 bg-white/10 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=600&q=80" 
                alt="Farm fresh milk pouring" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Columns: Quick Navigation & Products */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 text-xs sm:text-sm">
            <div>
              <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2.5 text-[#d6e5df]">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Product Catalog</a></li>
                <li><a href="#our-farm" className="hover:text-white transition-colors">Farm Quality</a></li>
                <li>
                  <button onClick={onOpenRiderApp} className="text-[#cbe346] hover:underline text-left font-semibold">
                    Rider App Pitch →
                  </button>
                </li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Fresh Dairy</h4>
              <ul className="space-y-2.5 text-[#d6e5df]">
                <li><a href="#products" className="hover:text-white transition-colors">Fresh Milk (Khalis)</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Butter & Ghee</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Cheese & Paneer</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Yogurt & Matka Dahi</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Shahi Kulfi</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Giant Watermark Word "HEAVEN'S" like "MILKO" in reference image */}
        <div className="relative text-center pt-10 overflow-hidden select-none">
          <p className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black text-white/[0.07] tracking-widest uppercase font-sans leading-none">
            HEAVEN'S
          </p>
          <p className="text-xs text-[#91a8a0] mt-4 font-medium">
            © {new Date().getFullYear()} Heaven's Dairy (Doodh Ghar) — Soan Gardens Phase 2, Islamabad. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}
