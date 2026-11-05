import React, { useState } from 'react';
import { PRODUCTS } from '../data/dairyData';
import { Plus, ArrowLeft, ArrowRight, Check, Sparkles, Star, ShieldCheck } from 'lucide-react';

export default function ProductsSection({ onAddToCart, onOpenSubscribe }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedId, setAddedId] = useState(null);

  const categories = ['All', 'Fresh Milk', 'Yogurt', 'Cheese', 'Butter & Ghee', 'Kulfi'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="products" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 xl:px-12 w-full">
      
      {/* Header: Left title + Right Category Pills & Navigation Arrows */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-[#0c281e] bg-[#cbe346] px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
            Hand-Crafted Farm Dairy • Islamabad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c281e] tracking-tight leading-tight">
            Pure Goodness, <br />
            <span className="font-serif italic font-normal text-[#194d3d]">Every Day.</span>
          </h2>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-[#e4dfd3] shadow-xs overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0c281e] text-white shadow-sm'
                    : 'text-[#4a6358] hover:text-[#0c281e] hover:bg-[#f4f1ea]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Product Cards - Full Width Responsive Grid showing all requested dairy items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 sm:gap-6">
        {filteredProducts.map((prod) => {
          const isJustAdded = addedId === prod.id;

          return (
            <div 
              key={prod.id}
              className="group relative rounded-[2.2rem] overflow-hidden bg-white border border-[#e4dfd3] shadow-[0_10px_28px_rgba(12,40,30,0.06)] hover:shadow-[0_24px_50px_rgba(12,40,30,0.16)] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between"
            >
              {/* Product Image Container with Tall Aspect Ratio */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#edeae0]">
                <img 
                  src={prod.image} 
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.98]" 
                />

                {/* Subtle gradient vignette at bottom so the pill button pops */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#071a13]/90 via-[#071a13]/40 to-transparent pointer-events-none" />

                {/* Top Badge (Price Tag / Quick Plus) */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                  <span className="bg-[#cbe346] text-[#0c281e] text-[11px] font-black px-2.5 py-1 rounded-full shadow-md">
                    Rs. {prod.price} <span className="font-normal text-[9px]">/{prod.unit.replace('per ', '')}</span>
                  </span>

                  <button
                    onClick={() => handleAdd(prod)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer ${
                      isJustAdded 
                        ? 'bg-emerald-600 text-white scale-110' 
                        : 'bg-white hover:bg-[#cbe346] text-[#0c281e] hover:scale-110'
                    }`}
                    title="Add to daily basket"
                  >
                    {isJustAdded ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </button>
                </div>

                {/* Tag pill top left under price if bestseller */}
                {prod.tag && (
                  <div className="absolute top-12 left-3.5 z-10">
                    <span className="bg-black/50 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/20">
                      {prod.tag}
                    </span>
                  </div>
                )}

                {/* Bottom Pill Button - EXACT match to reference image */}
                <div className="absolute inset-x-3.5 bottom-3.5 z-10 flex flex-col items-center">
                  <button
                    onClick={() => onOpenSubscribe(prod)}
                    className="w-full py-2.5 px-3 rounded-full bg-[#0c281e] hover:bg-[#071a13] text-white text-[11px] sm:text-xs font-black tracking-wide transition-all text-center flex items-center justify-center gap-1 shadow-xl hover:scale-[1.02] active:scale-98 border border-white/20 cursor-pointer"
                  >
                    <span className="truncate">{prod.title}</span>
                  </button>
                  <p className="text-[10px] text-[#eef5c4] font-medium mt-1 drop-shadow-sm truncate max-w-[180px]">
                    {prod.fat || prod.subtitle}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Free Delivery Banner under products */}
      <div className="mt-12 p-6 sm:p-8 rounded-[2.2rem] bg-white border border-[#e4dfd3] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#cbe346]/30 text-[#0c281e] flex items-center justify-center shrink-0 border border-[#cbe346]/60">
            <Sparkles className="w-6 h-6 text-[#0c281e]" />
          </div>
          <div>
            <h4 className="text-base font-black text-[#0c281e]">
              Daily Morning Delivery across Islamabad & Rawalpindi
            </h4>
            <p className="text-xs sm:text-sm text-[#4a6358] font-medium">
              Free morning delivery in Soan Gardens, PWD, Media Town & Bahria Town for milk subscriptions over Rs. 500.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenSubscribe()}
          className="bg-[#0c281e] hover:bg-[#071a13] text-white text-xs sm:text-sm font-black px-7 py-3 rounded-full transition-all shrink-0 hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
        >
          <span>Subscribe Daily Milk</span>
          <ArrowRight className="w-4 h-4 text-[#cbe346]" />
        </button>
      </div>

    </section>
  );
}
