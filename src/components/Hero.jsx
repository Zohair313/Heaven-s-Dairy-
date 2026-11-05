import React from 'react';
import { STORE_INFO } from '../data/dairyData';
import { 
  ArrowRight, Leaf, ShieldCheck, ShoppingBag, MessageCircle, 
  Bike, Star, Clock
} from 'lucide-react';

export default function Hero({ onOpenSubscribe, onOpenCart, cartCount, onOpenRiderApp }) {
  return (
    <section className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 pt-3 sm:pt-4 pb-8 sm:pb-12">
      
      {/* Hero Billboard Container - Clean, Spacious, Elegant */}
      <div className="relative rounded-[2.2rem] sm:rounded-[3rem] lg:rounded-[3.6rem] overflow-hidden min-h-[600px] sm:min-h-[680px] lg:min-h-[740px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 xl:p-16 shadow-[0_30px_70px_-15px_rgba(12,40,30,0.22)] border-2 border-white/60">
        
        {/* Background Image: Serene, spacious rolling green pasture with soft natural lighting */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85" 
            alt="Heaven's Dairy Pastoral Green Meadow"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02]"
          />
          {/* Gentle cinematic atmospheric gradient - calm and easy to read */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071d15]/85 via-[#071d15]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071d15]/75 via-transparent to-black/20" />
        </div>

        {/* Embedded Top Navigation Bar inside Hero */}
        <div className="relative z-20 flex items-center justify-between pb-6 flex-wrap gap-4">
          
          {/* Brand Logo: HEAVEN'S DAIRY */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-sans drop-shadow-md">
                HEAVEN'S
              </span>
              <Leaf className="w-5 h-5 text-[#cbe346] fill-[#cbe346] absolute -top-3.5 right-4 transform -rotate-12 group-hover:scale-125 transition-transform" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-black tracking-wider text-[#cbe346] bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs w-fit">
                DOODH GHAR
              </span>
              <span className="text-[9px] text-white/80 font-bold tracking-tight hidden sm:block">
                Soan Gardens Phase 2, Islamabad
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] font-bold text-white/95 drop-shadow-xs">
            <a href="#" className="text-white hover:text-[#cbe346] transition-colors">Home</a>
            <a href="#our-farm" className="hover:text-[#cbe346] transition-colors">Our Farm</a>
            <a href="#products" className="hover:text-[#cbe346] transition-colors">Products</a>
            <a href="#wholesale" className="hover:text-[#cbe346] transition-colors">Wholesale</a>
            <a href="#subscription" className="hover:text-[#cbe346] transition-colors">Subscription Pass</a>
            <button 
              onClick={onOpenRiderApp}
              className="hover:text-[#cbe346] transition-colors flex items-center gap-1.5 text-left font-bold cursor-pointer"
            >
              <Bike className="w-3.5 h-3.5 text-[#cbe346]" />
              <span>Rider App</span>
              <span className="w-2 h-2 rounded-full bg-[#cbe346] animate-ping" />
            </button>
            <a href="#contact" className="hover:text-[#cbe346] transition-colors">Contact</a>
          </nav>

          {/* Right Action: Hotline + Cart + Shop Now */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!%20I%20want%20to%20order%20farm-fresh%20milk.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/15 hover:bg-[#cbe346] text-white hover:text-[#0c281e] text-xs font-bold transition-all border border-white/20 backdrop-blur-md shadow-xs cursor-pointer"
              title="Call / WhatsApp: 0335-9131316"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#cbe346]" />
              <span>0335 9131316</span>
            </a>

            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-white/20 hover:bg-[#cbe346] text-white hover:text-[#0c281e] transition-all border border-white/25 backdrop-blur-md shadow-xs hover:scale-105 cursor-pointer"
              title="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#cbe346] text-[#0c281e] text-[10px] font-black rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenSubscribe}
              className="bg-[#cbe346] hover:bg-[#b5cc36] text-[#0c281e] text-xs sm:text-sm font-black px-6 py-2.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Hero Left Content Overlay - Clean, Spacious, Confident */}
        <div className="relative z-10 max-w-2xl lg:max-w-3xl my-auto py-8 sm:py-14">
          
          {/* Subtle Trust Pill */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[#eef5c4] text-xs font-bold mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#cbe346]" />
            <span>Farm-Fresh Raw Dairy • Soan Gardens, Islamabad</span>
          </div>

          {/* Clean 2-Line Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[4.1rem] font-black text-white leading-[1.08] tracking-tight mb-5 drop-shadow-md">
            Pure Dairy Goodness, <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#eef5c4]">Delivered Fresh</span> to Your Doorstep.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/85 font-medium leading-relaxed mb-8 max-w-xl drop-shadow-xs">
            100% unadulterated buffalo & A2 cow milk, thick clay-pot matka dahi, and artisan cheese delivered fresh to your porch every morning before breakfast.
          </p>

          {/* Clean CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenSubscribe}
              className="bg-[#cbe346] hover:bg-[#b5cc36] text-[#0c281e] font-black text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-[0_15px_30px_rgba(203,227,70,0.35)] hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <span>Subscribe Daily Milk</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>

            <a
              href="#products"
              className="bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full backdrop-blur-md border border-white/25 transition-all hover:scale-102 active:scale-98 cursor-pointer flex items-center gap-2"
            >
              <span>View Products</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#cbe346]" />
            </a>
          </div>

        </div>

        {/* Clean Hero Bottom Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/15 text-xs text-white/80">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-[#cbe346]" />
              <span>100% Raw • 0% Water</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-[#cbe346]" />
              <span>Dawn Milking 4:30 AM → Porch 6:30 AM</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 font-medium">
              <Star className="w-4 h-4 fill-[#cbe346] text-[#cbe346]" />
              <span>4.6 ★ (83 Google Reviews)</span>
            </span>
          </div>

          <span className="text-[#eef5c4] font-semibold">
            Coverage: Soan Gardens • PWD • Media Town • Bahria Town
          </span>
        </div>

      </div>

    </section>
  );
}
