import React from 'react';

export default function CategoriesSection({ activeCategory, onSelectCategory }) {
  const categories = [
    { id: 'All', name: 'All Products', icon: '🧺', count: '10 items', color: 'bg-emerald-100/70 text-emerald-800' },
    { id: 'Fresh Milk', name: 'Fresh Milk', icon: '🥛', count: '3 items', color: 'bg-blue-100/70 text-blue-800' },
    { id: 'Yogurt', name: 'Matka Dahi', icon: '🥣', count: '2 items', color: 'bg-amber-100/70 text-amber-800' },
    { id: 'Cheese', name: 'Artisan Paneer', icon: '🧀', count: '2 items', color: 'bg-orange-100/70 text-orange-800' },
    { id: 'Butter & Ghee', name: 'Desi Makhan & Ghee', icon: '🧈', count: '1 item', color: 'bg-yellow-100/70 text-yellow-800' },
    { id: 'Kulfi', name: 'Shahi Kulfi', icon: '🍧', count: '2 items', color: 'bg-rose-100/70 text-rose-800' },
  ];

  return (
    <section className="w-full py-10 bg-[#f8f9fa]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Centered Heading */}
        <div className="text-center mb-8">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#1b4332] bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-2 shadow-2xs">
            Farm-Daily Freshness
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b4332] tracking-tight">
            Browse By Categories
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1.5">
            Select a category to view unadulterated morning milk, yogurt, cheeses, and artisanal ghee
          </p>
        </div>

        {/* Row of Category Cards with hover lift and icon zoom */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                style={{ transitionDelay: `${idx * 40}ms` }}
                className={`p-4 rounded-2xl border transition-all duration-300 text-left flex items-center gap-3 cursor-pointer group ${
                  isActive
                    ? 'bg-white border-[#1b4332] shadow-lg ring-2 ring-[#1b4332]/20 -translate-y-1'
                    : 'bg-white border-gray-100 shadow-xs hover:border-[#1b4332]/40 hover:shadow-xl hover:-translate-y-1.5'
                }`}
              >
                {/* Soft pastel background blob for icon with hover rotation & bounce */}
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0 transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6 ${cat.color}`}>
                  <span>{cat.icon}</span>
                </div>
                
                <div className="min-w-0">
                  <p className={`text-xs font-black truncate transition-colors ${
                    isActive ? 'text-[#1b4332]' : 'text-gray-900 group-hover:text-[#1b4332]'
                  }`}>
                    {cat.name}
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium">
                    {cat.count}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
