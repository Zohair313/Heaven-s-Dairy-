import React from 'react';
import { STORE_INFO } from '../data/dairyData';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTASection({ onOpenSubscribe }) {
  return (
    <section className="relative pt-10 pb-16 sm:pb-24 px-6 max-w-6xl mx-auto overflow-visible">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
        
        {/* Left Side: Headline & Order Stamp - exact match to reference image */}
        <div className="w-full md:w-7/12 text-center md:text-left z-10">
          
          <h2 className="font-retro text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] text-[#30160d] tracking-tight leading-[0.98] mb-6 select-none">
            Find Your <br />
            Signature <br />
            Glass Now
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            
            {/* Scalloped "Order now" stamp button matching reference */}
            <button
              onClick={onOpenSubscribe}
              className="group focus:outline-none transform hover:scale-105 transition-transform"
              aria-label="Order now"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                <svg 
                  viewBox="0 0 120 120" 
                  className="w-full h-full text-[#9c4928] drop-shadow-xl"
                  fill="currentColor"
                >
                  <path d="M60 0 C64 12, 68 12, 75 5 C80 16, 85 16, 94 12 C96 23, 100 25, 110 24 C109 36, 113 39, 120 42 C116 52, 118 57, 120 68 C113 75, 113 80, 112 92 C102 94, 100 98, 95 109 C86 107, 82 110, 74 118 C67 113, 63 113, 56 120 C51 111, 46 111, 38 115 C34 105, 30 103, 19 104 C21 93, 18 89, 10 85 C14 75, 12 70, 0 65 C6 56, 5 51, 1 40 C11 36, 13 32, 12 21 C22 23, 26 19, 33 11 C40 18, 45 17, 52 10 Z" />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
                  <span className="font-retro text-sm sm:text-base leading-tight text-center drop-shadow">
                    Order<br />now
                  </span>
                </div>
              </div>
            </button>

            {/* Quick Contact badge */}
            <div className="text-left text-xs space-y-1.5 text-[#542d1f]">
              <p className="font-bold text-[#30160d]">Home Delivery in Islamabad</p>
              <p>Soan Gardens • PWD • Media Town • Bahria Town</p>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-800 font-bold hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>WhatsApp: 0335 9131316</span>
              </a>
            </div>

          </div>
        </div>

        {/* Right Side: Hand holding chilled drink - exact match to reference image */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
          <div className="relative group cursor-pointer" onClick={onOpenSubscribe}>
            
            {/* Soft backdrop glow */}
            <div className="absolute -inset-2 bg-[#d6c3b0] rounded-3xl blur-xl opacity-50" />

            {/* Hand with Cup Photo */}
            <div className="relative w-64 sm:w-72 md:w-80 h-88 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70 bg-[#d8c7b6]">
              <img 
                src="https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80" 
                alt="Heaven's Dairy Signature Milk" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Inscribed brand tag on cup */}
              <div className="absolute inset-x-4 bottom-4 p-3 rounded-2xl bg-black/45 backdrop-blur-md text-white text-center">
                <p className="font-retro text-lg text-white lowercase">heaven's dairy</p>
                <p className="text-[10px] text-[#fae8b2]">Delivered fresh 6:00 AM – 8:00 AM</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
