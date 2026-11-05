import React, { useState } from 'react';
import { STORE_INFO } from '../data/dairyData';
import { 
  Search, ShoppingCart, Heart, User, Phone, MapPin, 
  ChevronDown, Leaf, MessageCircle, Bike, Menu, X 
} from 'lucide-react';

export default function OrganicoHeader({ cartCount, cartTotal, onOpenCart, onOpenSubscribe, onOpenRiderApp, onSelectCategory }) {
  const [selectedArea, setSelectedArea] = useState('Soan Gardens, Islamabad');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const categories = ['All Categories', 'Fresh Milk', 'Yogurt', 'Cheese & Paneer', 'Butter & Ghee', 'Kulfi'];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 shadow-xs">
      
      {/* 1. Main Top Header Bar (Logo | Search Bar | Account & Cart) */}
      <div className="max-w-[1600px] mx-auto px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2.5 sm:gap-6">
        
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 -ml-1 text-gray-700 hover:text-[#1b4332] rounded-lg hover:bg-gray-100 transition-colors"
          title="Menu"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Brand Logo - Responsive */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#1b4332] flex items-center justify-center text-[#1b4332] group-hover:bg-[#1b4332] group-hover:text-white transition-colors">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-black tracking-tight text-[#1b4332] uppercase font-sans leading-tight">
              HEAVEN'S
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-[#f59e0b] -mt-0.5">
              DOODH GHAR • ISLAMABAD
            </span>
          </div>
        </a>

        {/* Center: Desktop Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl items-center border border-gray-200 rounded-full pl-4 pr-1 py-1 focus-within:border-[#1b4332] focus-within:ring-1 focus-within:ring-[#1b4332] transition-all bg-gray-50/50">
          
          {/* Category Dropdown */}
          <div className="relative border-r border-gray-200 pr-3 mr-3 shrink-0">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                onSelectCategory?.(e.target.value);
              }}
              className="bg-transparent text-xs font-bold text-gray-700 outline-none cursor-pointer pr-4 appearance-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pure milk, matka dahi, artisan cheese..."
            className="w-full bg-transparent text-xs text-gray-800 placeholder-gray-400 outline-none font-medium"
          />

          {/* Green Search Button */}
          <button 
            className="w-9 h-9 rounded-full bg-[#1b4332] hover:bg-[#143225] text-white flex items-center justify-center transition-colors shrink-0 shadow-xs cursor-pointer"
            title="Search"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Right Side: Mobile Search Trigger, Rider App & Cart */}
        <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
          
          {/* Mobile Search Toggle Icon */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#1b4332] rounded-full hover:bg-gray-100 transition-colors"
            title="Toggle search"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Rider App Button */}
          <button 
            onClick={onOpenRiderApp}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full transition-colors border border-emerald-200 cursor-pointer"
            title="Rider Delivery Fleet"
          >
            <Bike className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden lg:inline">Rider App</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          </button>

          {/* WhatsApp Direct */}
          <a 
            href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex p-2 rounded-full text-gray-600 hover:text-emerald-700 hover:bg-gray-100 transition-colors"
            title="WhatsApp Support"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </a>

          {/* Cart Icon & Total Pill */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-gray-50 hover:bg-emerald-50 text-gray-800 px-2.5 sm:px-3.5 py-1.5 rounded-full border border-gray-200 transition-all cursor-pointer group"
          >
            <div className="relative">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-[#1b4332]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#f59e0b] text-white text-[9px] sm:text-[10px] font-black flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="text-left hidden sm:block">
              <span className="text-[9px] text-gray-400 block font-medium leading-none">Your Cart</span>
              <span className="text-xs font-black text-[#1b4332] leading-none">
                Rs. {cartTotal !== undefined ? cartTotal : (cartCount * 240)}
              </span>
            </div>
          </button>

        </div>

      </div>

      {/* Mobile Search Bar Dropdown */}
      {mobileSearchOpen && (
        <div className="md:hidden px-4 pb-3 pt-1 border-t border-gray-100 bg-white">
          <div className="flex items-center border border-gray-200 rounded-full pl-3 pr-1 py-1 bg-gray-50">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search milk, yogurt, paneer..."
              className="w-full bg-transparent text-xs text-gray-800 outline-none"
              autoFocus
            />
            <button 
              className="w-7 h-7 rounded-full bg-[#1b4332] text-white flex items-center justify-center shrink-0"
              title="Search"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Sub-Navigation Bar (Hidden on Mobile, Visible on Desktop) */}
      <div className="hidden lg:block w-full border-t border-gray-100 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs font-bold text-gray-700">
        
          {/* Left Links with smooth horizontal scroll */}
          <nav className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-1 w-full lg:w-auto">
            <a href="#" className="text-[#1b4332] border-b-2 border-[#1b4332] pb-0.5 shrink-0">Home</a>
            <button onClick={() => onOpenSubscribe()} className="hover:text-[#1b4332] text-gray-600 transition-colors cursor-pointer shrink-0">
              Daily Milk Pass 🔥
            </button>
            <a href="#products" className="hover:text-[#1b4332] text-gray-600 transition-colors shrink-0">Categories</a>
            <a href="#subscription-pitch" className="hover:text-[#1b4332] text-gray-600 transition-colors shrink-0">Subscription Plan</a>
            <a href="#why-choose-us" className="hover:text-[#1b4332] text-gray-600 transition-colors shrink-0">Our Farm</a>
            <a href="#contact" className="hover:text-[#1b4332] text-gray-600 transition-colors shrink-0">Contact</a>
          </nav>

          {/* Right Info: Hotline + Delivery Area Dropdown */}
          <div className="hidden lg:flex items-center gap-6 shrink-0 text-gray-600">
            <a 
              href={`tel:${STORE_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#1b4332] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1b4332]" />
              <span>+92 335 9131316</span>
            </a>

            <div className="flex items-center gap-1 hover:text-[#1b4332] cursor-pointer">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="bg-transparent text-xs font-bold text-gray-700 outline-none cursor-pointer pr-1"
              >
                <option value="Soan Gardens, Islamabad">📍 Soan Gardens, Islamabad</option>
                <option value="PWD Housing Society">📍 PWD Housing Society</option>
                <option value="Media Town">📍 Media Town</option>
                <option value="Bahria Town (Phases 1-8)">📍 Bahria Town (Phases 1-8)</option>
              </select>
            </div>

            <span className="text-gray-400">|</span>
            <span className="text-gray-500 font-bold">PKR (Rs.)</span>
          </div>

        </div>
      </div>

      {/* Slide-out Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-sm bg-white h-full p-5 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1b4332] text-white flex items-center justify-center">
                    <Leaf className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-black text-[#1b4332] text-base">HEAVEN'S DAIRY</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Location Badge */}
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs">
                <p className="font-bold text-[#1b4332]">📍 Islamabad Service Hub</p>
                <p className="text-[11px] text-gray-600 mt-0.5">Soan Gardens (1 & 2), PWD, Media Town, Bahria Town</p>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col space-y-2.5 text-sm font-bold text-gray-800">
                <a 
                  href="#" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-50 rounded-lg text-[#1b4332]"
                >
                  🏡 Home
                </a>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSubscribe();
                  }}
                  className="p-2 hover:bg-gray-50 rounded-lg text-left text-amber-600 font-extrabold flex items-center justify-between"
                >
                  <span>🔥 Daily Milk Pass</span>
                  <span className="text-[10px] bg-amber-100 px-2 py-0.5 rounded-full">POPULAR</span>
                </button>
                <a 
                  href="#products" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-50 rounded-lg text-gray-700"
                >
                  🧺 Dairy Products
                </a>
                <a 
                  href="#subscription-pitch" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-50 rounded-lg text-gray-700"
                >
                  📱 Subscription Plan Builder
                </a>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRiderApp();
                  }}
                  className="p-2 hover:bg-gray-50 rounded-lg text-left text-emerald-800 flex items-center justify-between"
                >
                  <span>🛵 Rider Delivery Fleet</span>
                  <span className="text-[10px] bg-emerald-100 px-2 py-0.5 rounded-full">TECH</span>
                </button>
                <a 
                  href="#why-choose-us" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-50 rounded-lg text-gray-700"
                >
                  🌿 About Our Farm
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-50 rounded-lg text-gray-700"
                >
                  📞 Contact & Location
                </a>
              </nav>
            </div>

            {/* Bottom Contact inside Drawer */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <a 
                href={`tel:${STORE_INFO.phone}`} 
                className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 text-xs font-bold text-gray-800"
              >
                <Phone className="w-4 h-4 text-[#1b4332]" />
                <span>Call: 0335 9131316</span>
              </a>
              <a 
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
            </div>

          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}

    </header>
  );
}
