import React from 'react';
import { STORE_INFO } from '../data/dairyData';
import { Leaf, Phone, MessageCircle, MapPin, ArrowRight, Star, Bike, Clock, ShieldCheck } from 'lucide-react';

export default function OrganicoFooter({ onOpenSubscribe, onOpenRiderApp }) {
  return (
    <footer id="contact" className="w-full bg-white border-t border-gray-200 pt-14 pb-8">
      
      {/* Max-width container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid (Exact match to Organico Screenshot 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-gray-100">
          
          {/* Column 1: Brand Logo & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full border-2 border-[#1b4332] flex items-center justify-center text-[#1b4332]">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-[#1b4332] uppercase font-sans">
                  HEAVEN'S DAIRY
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#f59e0b] -mt-1">
                  DOODH GHAR • ISLAMABAD
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-sm">
              Delivering unadulterated farm-fresh morning milk, creamy matka yogurt, artisan cheese, and desi butter directly from Soan River pastures to your doorstep before breakfast.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a 
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-50 hover:bg-[#1b4332] text-[#1b4332] hover:text-white flex items-center justify-center transition-colors border border-emerald-100"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${STORE_INFO.phone}`}
                className="w-9 h-9 rounded-full bg-emerald-50 hover:bg-[#1b4332] text-[#1b4332] hover:text-white flex items-center justify-center transition-colors border border-emerald-100"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenRiderApp}
                className="w-9 h-9 rounded-full bg-emerald-50 hover:bg-[#1b4332] text-[#1b4332] hover:text-white flex items-center justify-center transition-colors border border-emerald-100"
                title="Rider Fleet App"
              >
                <Bike className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-600">
              <li>
                <a href="#products" className="hover:text-emerald-700 transition-colors">» Pure Buffalo Milk</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-700 transition-colors">» Pure A2 Cow Milk</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-700 transition-colors">» Traditional Matka Dahi</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-700 transition-colors">» Artisan Malai Paneer</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-700 transition-colors">» Desi Makhan & Ghee</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-700 transition-colors">» Shahi Khoya Kulfi</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Delivery Footprint (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">
              Delivery Footprint
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-600">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Soan Gardens (Phase 1 & 2)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>PWD Housing Society</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Media Town, Islamabad</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Bahria Town (Phases 1-8)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Police Foundation / CBR Town</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">
              Contact & Location
            </h4>
            
            <div className="space-y-2.5 text-xs text-gray-600">
              <a 
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#1b4332] group"
              >
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="group-hover:underline">Soan Gardens Phase 2, Islamabad (View on Yandex/Google Maps)</span>
              </a>

              <a 
                href={`tel:${STORE_INFO.phone}`}
                className="flex items-center gap-2 hover:text-[#1b4332]"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{STORE_INFO.phoneDisplay} / {STORE_INFO.phone}</span>
              </a>

              <a 
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1b4332]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {STORE_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-center gap-2 pt-1 text-gray-500">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span>Dawn Milking: 4:30 AM • Porch: 6:00 AM – 8:00 AM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-medium">
          <p>© 2026 Heaven's Dairy (Doodh Ghar). All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>⭐ 4.6 (83 Reviews)</span>
            <span>•</span>
            <span>Zero Water Adulteration Guarantee</span>
            <span>•</span>
            <span>Twin Cities Porch Delivery</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
