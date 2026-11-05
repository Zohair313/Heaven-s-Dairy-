import React, { useState } from 'react';
import { STORE_INFO } from '../data/dairyData';
import { Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function DeliverySubscriptionBanner({ onOpenSubscribe }) {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) return;
    const text = `Hello Heaven's Dairy! I want to start a morning milk subscription for my home in Soan Gardens / Bahria. My contact number is: ${phone}`;
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="w-full py-8 sm:py-14 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Forest Green Rounded Capsule Banner */}
        <div className="relative rounded-2xl sm:rounded-[2.5rem] bg-[#143d2c] text-white p-6 sm:p-12 lg:p-14 overflow-hidden shadow-xl border border-emerald-900/40">
          
          {/* Subtle decorative leaf glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#cbe346]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-3.5 sm:space-y-4">
            
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs font-black text-[#cbe346] border border-white/15">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Twin Cities Morning Doorstep Pass</span>
            </div>

            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              Pure Farm Dairy Starts Here
            </h3>

            <p className="text-xs sm:text-sm text-emerald-100/90 font-medium leading-relaxed max-w-lg mx-auto">
              Join 2,000+ happy families across Soan Gardens, PWD, Media Town & Bahria Town receiving unadulterated milk before 8:00 AM breakfast.
            </p>

            {/* Form: Mobile flex-col or flex-row */}
            <form onSubmit={handleSubmit} className="pt-2 max-w-md mx-auto flex flex-col sm:flex-row items-stretch sm:items-center bg-white/10 sm:bg-white rounded-2xl sm:rounded-full p-2 sm:p-1.5 shadow-2xl gap-2 sm:gap-0">
              <input 
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter WhatsApp / Mobile (0335...)"
                className="w-full bg-white sm:bg-transparent rounded-full sm:rounded-none py-2.5 sm:py-0 px-4 text-xs font-bold text-gray-800 placeholder-gray-400 outline-none"
              />
              <button
                type="submit"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-black text-xs px-5 py-2.5 rounded-full transition-all shrink-0 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Subscribe</span>
                <Send className="w-3 h-3" />
              </button>
            </form>

            {submitted && (
              <p className="text-xs text-[#cbe346] font-bold flex items-center justify-center gap-1.5 animate-pulse">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Redirecting to WhatsApp to confirm your slot!</span>
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-emerald-200/80 pt-1 font-medium">
              <span>✓ Zero Deposit</span>
              <span>•</span>
              <span>✓ Pause Anytime via WhatsApp</span>
              <span>•</span>
              <span>✓ Free Morning Delivery</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
