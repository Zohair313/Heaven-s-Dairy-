import React, { useState, useRef } from 'react';
import { ArrowRight, ShoppingCart, Heart, Plus, Minus, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DairyProductRow({ title, products, onAddToCart, onOpenSubscribe }) {
  const [quantities, setQuantities] = useState({});
  const [justAddedId, setJustAddedId] = useState(null);
  const [favoritedIds, setFavoritedIds] = useState({});
  const scrollContainerRef = useRef(null);

  const getQty = (id) => quantities[id] || 1;

  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const handleAdd = (item) => {
    const qty = getQty(item.id);
    for (let i = 0; i < qty; i++) {
      onAddToCart(item);
    }
    setJustAddedId(item.id);
    setTimeout(() => setJustAddedId(null), 1200);
  };

  const toggleFavorite = (id) => {
    setFavoritedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const slide = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="w-full py-6 sm:py-10 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header: Title on Left | Sliding arrows & View All on Right */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 pb-2 border-b border-gray-200">
          <div>
            <h3 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-1.5 sm:gap-2">
              <span>{title}</span>
              <span className="text-[10px] sm:text-xs font-bold bg-emerald-100 text-[#1b4332] px-2 py-0.5 rounded-full">
                {products.length} Items
              </span>
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
              100% pure farm-daily unadulterated doorstep delivery
            </p>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Sliding Chevron Buttons */}
            <div className="flex items-center gap-0.5 bg-white p-0.5 sm:p-1 rounded-full border border-gray-200 shadow-2xs">
              <button
                onClick={() => slide('left')}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full hover:bg-emerald-50 text-gray-600 hover:text-[#1b4332] flex items-center justify-center transition-all cursor-pointer"
                title="Slide left"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => slide('right')}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full hover:bg-emerald-50 text-gray-600 hover:text-[#1b4332] flex items-center justify-center transition-all cursor-pointer"
                title="Slide right"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>
            </div>

            <button 
              onClick={() => onOpenSubscribe?.()} 
              className="text-[11px] sm:text-xs font-bold text-[#1b4332] hover:text-emerald-700 flex items-center gap-0.5 sm:gap-1 cursor-pointer bg-white px-2.5 sm:px-3.5 py-1.5 rounded-full border border-gray-200 shadow-2xs transition-all"
            >
              <span className="hidden sm:inline">view all</span>
              <span className="sm:hidden">all</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>

        {/* 5-Column Grid on Desktop, 2-Column Responsive Grid on Mobile */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4 overflow-x-auto pb-3 pt-1 scroll-smooth scrollbar-none"
        >
          {products.map((prod, idx) => {
            const qty = getQty(prod.id);
            const isAdded = justAddedId === prod.id;
            const isFav = !!favoritedIds[prod.id];

            return (
              <div 
                key={prod.id}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className="bg-white rounded-2xl border border-gray-200/80 p-2.5 sm:p-3.5 shadow-xs hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer"
              >
                {/* Top Row: Pill Tag & Favorite Heart */}
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-[8px] sm:text-[9px] font-extrabold text-[#1b4332] bg-emerald-50 border border-emerald-100 px-1.5 sm:px-2 py-0.5 rounded-full truncate max-w-[85px] sm:max-w-[110px]">
                    {prod.tag || 'Fresh Daily'}
                  </span>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(prod.id);
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all hover:scale-125 cursor-pointer shrink-0 ${
                      isFav 
                        ? 'text-rose-500 bg-rose-50' 
                        : 'text-gray-300 hover:text-rose-500 hover:bg-rose-50'
                    }`}
                    title="Save to favorites"
                  >
                    <Heart className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isFav ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Fixed-Height Product Image Container */}
                <div className="relative w-full h-28 sm:h-36 rounded-xl overflow-hidden mb-2 bg-gray-50 flex items-center justify-center">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Fat/Nutrition Tag */}
                  {prod.fat && (
                    <span className="absolute bottom-1 left-1 bg-black/60 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded">
                      {prod.fat}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-0.5 mb-2 sm:mb-3 flex-1 min-w-0">
                  <p className="text-[8px] sm:text-[9px] font-bold text-[#f59e0b] uppercase tracking-wider truncate">
                    {prod.subtitle || prod.category}
                  </p>
                  <h4 className="text-xs sm:text-sm font-black text-gray-900 group-hover:text-[#1b4332] transition-colors leading-snug line-clamp-1">
                    {prod.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium line-clamp-2 leading-tight">
                    {prod.description}
                  </p>
                </div>

                {/* Bottom Row: Price, Stepper, and Circular Organico Cart Button */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-1">
                  
                  {/* Price */}
                  <div className="min-w-0">
                    <span className="text-[7px] sm:text-[8px] text-gray-400 font-bold uppercase block leading-none">Price</span>
                    <div className="flex items-baseline gap-0.5 mt-0.5">
                      <span className="text-xs sm:text-sm font-black text-[#1b4332]">
                        Rs. {prod.price}
                      </span>
                    </div>
                  </div>

                  {/* Stepper + Cart Button */}
                  <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                    
                    {/* Stepper */}
                    <div className="flex items-center bg-gray-100/90 rounded-full p-0.5 border border-gray-200/60">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQtyChange(prod.id, -1)}
                        }
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full hover:bg-white flex items-center justify-center text-gray-600 hover:text-black transition-all cursor-pointer"
                        title="Decrease"
                      >
                        <Minus className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[2.5]" />
                      </button>
                      <span className="w-3.5 sm:w-4 text-center text-[10px] sm:text-[11px] font-black text-gray-800">
                        {qty}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQtyChange(prod.id, 1)}
                        }
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full hover:bg-white flex items-center justify-center text-gray-600 hover:text-black transition-all cursor-pointer"
                        title="Increase"
                      >
                        <Plus className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[2.5]" />
                      </button>
                    </div>

                    {/* Circular Green Cart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAdd(prod)}
                      }
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-115 active:scale-95 ${
                        isAdded
                          ? 'bg-emerald-600 text-white animate-bounce'
                          : 'bg-[#1b4332] hover:bg-[#122e22] text-white'
                      }`}
                      title="Add to cart"
                    >
                      {isAdded ? (
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      ) : (
                        <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                      )}
                    </button>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
