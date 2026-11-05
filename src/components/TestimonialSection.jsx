import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/dairyData';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Dr. Tariq Mahmood",
      area: "Bahria Town Phase 4, Islamabad",
      quote: "The farm fresh whole milk tastes just like my childhood! The creaminess is unbelievable, and my kids love the paneer and matka dahi. Highly recommended!",
      rating: 5,
      leftPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      rightPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Farah Zafar",
      area: "Soan Gardens Phase 2, Islamabad",
      quote: "We switched to their 6:30 AM doorstep delivery in Soan Gardens. Rain or cold, the milk is on our porch before breakfast. The rider alerts make life so easy!",
      rating: 5,
      leftPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      rightPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Engr. Salman Qureshi",
      area: "PWD Housing Society, Islamabad",
      quote: "Finally a reliable dairy brand that doesn't adulterate or add water! The buffalo milk has a genuine thick malai layer, and pausing deliveries via WhatsApp takes 5 seconds.",
      rating: 5,
      leftPhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      rightPhoto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const current = reviews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 xl:px-12 w-full">
      
      {/* Centered Heading from reference */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-xs font-black uppercase tracking-widest text-[#0c281e] bg-[#cbe346] px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
          Verified Customer Experiences
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c281e] tracking-tight">
          Loved by Families <br className="sm:hidden" />
          <span className="font-serif italic font-normal text-[#194d3d]">Across the Region</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#4a6358] mt-2 font-medium">
          4.6 ★ Rating based on 83 verified Google reviews in Islamabad & Rawalpindi
        </p>
      </div>

      {/* 3 Columns Layout: Left Photo + Center Dark Green Card + Right Photo (exact match to Section 6 of reference) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Customer Photo */}
        <div className="hidden md:flex md:col-span-3 justify-center">
          <div className="w-full max-w-[280px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-card hover:shadow-card-hover border-4 border-white bg-[#edeae0] transition-all duration-500">
            <img 
              src={current.leftPhoto} 
              alt="Happy customer" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center: Forest Green Review Card with 5 Stars, Quote, Avatar & Big Quote Mark "99" */}
        <div className="md:col-span-6 bg-[#0c281e] text-white rounded-[2.5rem] sm:rounded-[3.2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[350px] border border-white/10">
          
          <div>
            {/* 5 Stars */}
            <div className="flex text-[#cbe346] gap-1.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#cbe346]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed italic pr-4">
              "{current.quote}"
            </p>
          </div>

          {/* Bottom Row: User Avatar & Big Quote Mark "99" */}
          <div className="flex items-end justify-between pt-8 border-t border-white/10 mt-8 relative">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#cbe346] text-[#0c281e] font-black text-sm flex items-center justify-center shadow-md">
                {current.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{current.name}</p>
                <p className="text-xs text-[#cbe346] font-medium">{current.area}</p>
              </div>
            </div>

            {/* Big Stylistic Quote Mark "99" in Lime Green - exact match to reference image */}
            <span className="text-6xl sm:text-7xl font-sans font-black tracking-tighter text-[#cbe346]/40 leading-none select-none -mb-3">
              99
            </span>
          </div>

        </div>

        {/* Right Customer Photo */}
        <div className="hidden md:flex md:col-span-3 justify-center">
          <div className="w-full max-w-[280px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-card hover:shadow-card-hover border-4 border-white bg-[#edeae0] transition-all duration-500">
            <img 
              src={current.rightPhoto} 
              alt="Happy customer" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* Navigation Arrows & Indicator Dots */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button 
          onClick={handlePrev}
          className="w-11 h-11 rounded-full bg-white hover:bg-[#eef5c4] text-[#0c281e] flex items-center justify-center transition-colors border border-[#d8d3c3] shadow-xs active:scale-95 cursor-pointer"
          aria-label="Previous review"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-1.5">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-[#0c281e]' : 'w-2 bg-[#d8d3c3]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="w-11 h-11 rounded-full bg-[#0c281e] hover:bg-[#071a13] text-white flex items-center justify-center transition-colors shadow-sm active:scale-95 cursor-pointer"
          aria-label="Next review"
        >
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

    </section>
  );
}
