import React, { useState } from 'react';
import { STORE_INFO } from '../data/dairyData';
import { 
  Bike, MapPin, CheckCircle2, ArrowRight, MessageCircle, 
  Navigation, ChevronRight, Camera, Sparkles, ShieldCheck
} from 'lucide-react';

export default function PitchSection({ onOpenSubscribe, onOpenRiderApp }) {
  const [selectedArea, setSelectedArea] = useState(STORE_INFO.deliveryAreas[0].name);
  const [milkType, setMilkType] = useState('buffalo');
  const [litres, setLitres] = useState(2);
  const [frequency, setFrequency] = useState('daily');
  const [slot, setSlot] = useState('morning');
  const [riderDelivered, setRiderDelivered] = useState(false);

  const pricePerLitre = milkType === 'buffalo' ? 240 : 260;
  const daysPerMonth = frequency === 'daily' ? 30 : frequency === 'alternate' ? 15 : 22;
  const monthlyTotal = litres * pricePerLitre * daysPerMonth;

  const handleWhatsAppSubscribe = () => {
    const text = `*New Milk Subscription Request - Heaven's Dairy*%0A%0A` +
      `• Area: ${selectedArea}%0A` +
      `• Milk: ${milkType === 'buffalo' ? 'Pure Buffalo Milk (Rs. 240/L)' : 'Pure A2 Cow Milk (Rs. 260/L)'}%0A` +
      `• Quantity: ${litres} Litre(s) per delivery%0A` +
      `• Schedule: ${frequency.toUpperCase()}%0A` +
      `• Slot: ${slot === 'morning' ? 'Morning (6:00 AM - 8:00 AM)' : 'Evening (5:00 PM - 7:30 PM)'}%0A` +
      `• Est. Monthly: Rs. ${monthlyTotal.toLocaleString()}%0A%0A` +
      `Please confirm my doorstep trial delivery!`;
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="subscription-pitch" className="w-full bg-[#f8f9fa] border-y border-gray-200/80 py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-3.5 sm:px-6 lg:px-8">
      
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#1b4332] bg-emerald-100/80 px-3.5 py-1.5 rounded-full inline-block mb-2.5 shadow-2xs">
            TWIN CITIES DOORSTEP PASS & SMART FLEET
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-2 sm:mb-3">
            Morning Milk Pass & <span className="text-[#1b4332]">Rider App Tech</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            Unadulterated raw milk delivered before 8:00 AM across Soan Gardens, PWD, Media Town & Bahria Town. Customize your morning pass with instant 1-tap WhatsApp activation.
          </p>
        </div>

        {/* Two Column Grid: Left = Live Subscription Calculator | Right = Mobile Rider App Pitch */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Interactive Subscription Builder */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-gray-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-100 mb-4 sm:mb-6">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
                    Step 1: Customize Your Pass
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-gray-900 mt-1">
                    Build Your Morning Plan
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] sm:text-xs font-black text-[#1b4332] bg-emerald-100 px-2.5 py-1 rounded-full shadow-2xs">
                    FREE DELIVERY
                  </span>
                </div>
              </div>

              {/* Area Selector */}
              <div className="mb-4 sm:mb-5">
                <label className="block text-xs font-black text-gray-800 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1b4332]" /> Choose Delivery Neighborhood
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {STORE_INFO.deliveryAreas.map((area) => (
                    <button
                      key={area.name}
                      onClick={() => setSelectedArea(area.name)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                        selectedArea === area.name
                          ? 'border-[#1b4332] bg-emerald-50/50 text-[#1b4332] font-black shadow-xs ring-1 ring-[#1b4332]'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs truncate">{area.name}</span>
                        {selectedArea === area.name && <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332] shrink-0" />}
                      </div>
                      <span className="text-[10px] text-gray-500 font-medium block mt-0.5">
                        Slot: {area.time}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Milk Type Toggle */}
              <div className="mb-4 sm:mb-5">
                <label className="block text-xs font-black text-gray-800 uppercase tracking-wide mb-2">
                  Milk Variety
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <button
                    onClick={() => setMilkType('buffalo')}
                    className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer ${
                      milkType === 'buffalo'
                        ? 'border-[#1b4332] bg-emerald-50/50 shadow-xs ring-1 ring-[#1b4332]'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-black text-[#1b4332] mb-1">
                      <span>Pure Buffalo Milk</span>
                      <span className="text-white font-bold bg-[#1b4332] px-2 py-0.5 rounded-full text-[10px]">Rs. 240/L</span>
                    </div>
                    <p className="text-[11px] text-gray-500">Rich natural golden malai & 7% fat</p>
                  </button>

                  <button
                    onClick={() => setMilkType('cow')}
                    className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer ${
                      milkType === 'cow'
                        ? 'border-[#1b4332] bg-emerald-50/50 shadow-xs ring-1 ring-[#1b4332]'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-black text-[#1b4332] mb-1">
                      <span>Pure A2 Cow Milk</span>
                      <span className="text-white font-bold bg-[#1b4332] px-2 py-0.5 rounded-full text-[10px]">Rs. 260/L</span>
                    </div>
                    <p className="text-[11px] text-gray-500">Gentle digestion with A2 protein</p>
                  </button>
                </div>
              </div>

              {/* Litres Selector */}
              <div className="mb-4 sm:mb-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black text-gray-800 uppercase tracking-wide">
                    Litres Per Delivery
                  </label>
                  <span className="text-xs sm:text-sm font-black text-[#1b4332]">
                    🥛 {litres} Litre{litres > 1 ? 's' : ''} daily
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setLitres(num)}
                      className={`flex-1 py-2 sm:py-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                        litres === num
                          ? 'bg-[#1b4332] text-white shadow-md scale-102'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {num} L
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency Options */}
              <div className="mb-5 sm:mb-6">
                <label className="block text-xs font-black text-gray-800 uppercase tracking-wide mb-2">
                  Delivery Schedule
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'daily', label: 'Everyday', note: '30 Days/Mo' },
                    { id: 'alternate', label: 'Alternate', note: '15 Days/Mo' },
                    { id: 'weekdays', label: 'Mon – Fri', note: '22 Days/Mo' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setFrequency(item.id)}
                      className={`p-2 sm:p-3 rounded-xl text-center border text-xs transition-all cursor-pointer ${
                        frequency === item.id
                          ? 'border-[#1b4332] bg-emerald-50/50 text-[#1b4332] font-black ring-1 ring-[#1b4332]'
                          : 'border-gray-200 bg-white text-gray-600'
                      }`}
                    >
                      <span className="block text-xs font-bold">{item.label}</span>
                      <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium">{item.note}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Box & 1-Click WhatsApp CTA */}
            <div className="bg-gray-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <span className="text-[11px] font-medium text-gray-500">Estimated Monthly Total</span>
                  <div className="text-2xl sm:text-3xl font-black text-[#1b4332]">
                    Rs. {monthlyTotal.toLocaleString()}
                    <span className="text-xs font-normal text-gray-500 ml-1">/ mo</span>
                  </div>
                </div>
                <div className="text-right text-[11px] sm:text-xs text-gray-700 font-bold">
                  <p>✓ Free Delivery</p>
                  <p>✓ Pause Anytime</p>
                </div>
              </div>

              <button
                onClick={handleWhatsAppSubscribe}
                className="w-full bg-[#1b4332] hover:bg-[#122e22] text-white py-3 sm:py-3.5 px-4 sm:px-6 rounded-full font-black text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Confirm & Activate via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Mobile Rider Delivery App Pitch */}
          <div className="lg:col-span-5 bg-[#143d2c] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden border border-emerald-900/40">
            
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-emerald-950 bg-[#cbe346] px-2.5 sm:px-3 py-1 rounded-full">
                  Custom Mobile Tech
                </span>
                <span className="text-xs text-[#cbe346] flex items-center gap-1.5 font-bold">
                  <Bike className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Twin Cities Fleet
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-white leading-tight mb-2">
                Dedicated Rider Delivery App
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 mb-4 sm:mb-6 leading-relaxed font-normal">
                Replacing manual paper registers with live route optimization across Soan Gardens, PWD & Bahria Town.
              </p>

              {/* Interactive Mobile Mockup */}
              <div className="bg-[#0c281e] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-white/15 shadow-xl">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#cbe346] pb-2 border-b border-white/10 mb-2.5">
                  <span className="font-bold">6:25 AM • Dawn Milking Dispatch</span>
                  <span className="flex items-center gap-1 font-mono text-[#cbe346]">
                    <span className="w-2 h-2 rounded-full bg-[#cbe346] animate-ping" /> GPS Live
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-white text-[11px] sm:text-xs">Route: Soan Gardens Ph 2</span>
                      <span className="text-[9px] bg-[#cbe346] text-[#0c281e] font-black px-1.5 py-0.5 rounded-full">16/22 Done</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-emerald-100">Rider: Muhammad Asif (Chilled 4.0°C)</p>
                  </div>

                  <div className="p-2.5 sm:p-3 bg-white/10 rounded-xl border border-white/20 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#cbe346] flex items-center gap-1 text-[11px] sm:text-xs">
                        <Navigation className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Next Stop
                      </span>
                      <span className="text-white text-xs font-bold">House 42, St 7</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-white/90">2 Litres Buffalo Milk • Gate Delivery</p>
                    
                    <div className="mt-2.5 flex gap-1.5">
                      <button 
                        onClick={() => setRiderDelivered(!riderDelivered)}
                        className={`flex-1 text-[10px] sm:text-[11px] font-black py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          riderDelivered 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-[#cbe346] hover:bg-white text-[#0c281e]'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{riderDelivered ? 'Delivered with Proof ✓' : 'Mark Delivered'}</span>
                      </button>
                      <button className="px-2.5 bg-white/20 hover:bg-white/30 text-white text-[11px] rounded-xl font-bold cursor-pointer">
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/15 flex items-center justify-between relative z-10">
              <div>
                <p className="text-xs font-bold text-white">Mobile Rider Fleet Pitch</p>
                <p className="text-[10px] sm:text-[11px] text-emerald-200">Route clustering, GPS & photo proof.</p>
              </div>

              <button
                onClick={onOpenRiderApp}
                className="bg-[#cbe346] hover:bg-white text-[#0c281e] text-xs font-black px-4 py-2 rounded-full transition-all flex items-center gap-1 shadow-md cursor-pointer"
              >
                <span>Demo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
