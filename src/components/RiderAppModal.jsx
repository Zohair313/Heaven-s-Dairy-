import React, { useState } from 'react';
import { STORE_INFO } from '../data/dairyData';
import { 
  X, Smartphone, Navigation, Bike, CheckCircle2, Camera, 
  MapPin, Clock, ShieldCheck, Zap, BarChart3, Users, DollarSign,
  TrendingUp, RefreshCw, Send
} from 'lucide-react';

export default function RiderAppModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('demo');
  const [deliveredStops, setDeliveredStops] = useState([1]);

  const demoStops = [
    { id: 1, name: "Brig. Tariq", address: "House 42, St 7, Sector B, Soan Gardens Ph 2", litres: "2L Buffalo", time: "6:20 AM", status: "delivered" },
    { id: 2, name: "Farah Zafar", address: "House 118, St 14, Media Town", litres: "1L Cow + 1Kg Matka Dahi", time: "6:35 AM", status: "active" },
    { id: 3, name: "Dr. Rizwan", address: "Villa 204, Safari Villas, Bahria Town Ph 4", litres: "3L Buffalo", time: "6:50 AM", status: "pending" },
    { id: 4, name: "Hamza Malik", address: "Flat 4B, Sector C Commercial, PWD", litres: "2L Buffalo + 400g Paneer", time: "7:05 AM", status: "pending" },
  ];

  const handleMarkDelivered = (id) => {
    if (!deliveredStops.includes(id)) {
      setDeliveredStops([...deliveredStops, id]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-2xl border border-[#d8d3c3] my-6 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#edeae0] hover:bg-[#e2decfa0] text-[#113a2d] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pitch Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-black tracking-widest text-[#113a2d] bg-[#cbe346] px-3.5 py-1 rounded-full mb-2">
            <Smartphone className="w-3.5 h-3.5" /> Heaven's Dairy Technical Proposal
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#113a2d] tracking-tight">
            Mobile Rider Delivery App & Fleet System
          </h2>
          <p className="text-xs sm:text-sm text-[#556961] mt-1 max-w-2xl leading-relaxed">
            Tailored specifically for Heaven's Dairy footprint: Soan Gardens, PWD, Media Town & Bahria Town.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#e2decfa0] mb-8 gap-4 overflow-x-auto">
          {[
            { id: 'demo', label: 'Interactive Rider App Prototype' },
            { id: 'architecture', label: 'How It Works (Fleet Architecture)' },
            { id: 'roi', label: 'Business ROI for Heaven\'s Dairy' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-[#113a2d] text-[#113a2d]'
                  : 'text-[#6d847c] hover:text-[#113a2d]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Interactive Prototype Demo */}
        {activeTab === 'demo' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Mobile Phone Simulation */}
            <div className="md:col-span-6 flex justify-center">
              <div className="w-72 sm:w-80 bg-[#0c281e] rounded-[2.5rem] p-4 border-4 border-[#113a2d] shadow-2xl text-white">
                
                {/* Phone Top Notch */}
                <div className="flex justify-between items-center text-[10px] text-[#cbe346] px-2 mb-3">
                  <span>6:28 AM</span>
                  <div className="w-20 h-3.5 bg-black rounded-full" />
                  <span className="text-emerald-400 font-bold">● 4G</span>
                </div>

                {/* Rider Info Header */}
                <div className="bg-[#113a2d] p-3 rounded-2xl mb-3 border border-white/10">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white">Rider: Tariq J.</span>
                    <span className="text-[10px] bg-[#cbe346] text-[#0c281e] font-black px-2 py-0.5 rounded-full">
                      Cluster #1 (Soan & PWD)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#d6e5df]">
                    <span>Morning Run: 22 Drops</span>
                    <span className="text-[#cbe346] font-mono">Temp: 3.9°C</span>
                  </div>
                </div>

                {/* Live Delivery Stops List */}
                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {demoStops.map((stop, idx) => {
                    const isDone = deliveredStops.includes(stop.id);
                    return (
                      <div 
                        key={stop.id}
                        className={`p-3 rounded-xl border text-xs transition-all ${
                          isDone 
                            ? 'bg-emerald-950/40 border-emerald-800/40 opacity-70'
                            : 'bg-white/10 border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between font-bold mb-1">
                          <span className="text-[#cbe346] flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-[#cbe346] text-[#0c281e] text-[10px] font-black flex items-center justify-center">
                              {idx + 1}
                            </span>
                            {stop.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#cbd5e1]">{stop.time}</span>
                        </div>
                        <p className="text-[11px] text-white/80 line-clamp-1">{stop.address}</p>
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/10">
                          <span className="text-[10px] text-amber-300 font-bold">{stop.litres}</span>
                          {isDone ? (
                            <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Delivered
                            </span>
                          ) : (
                            <button
                              onClick={() => handleMarkDelivered(stop.id)}
                              className="bg-[#cbe346] hover:bg-white text-[#0c281e] text-[10px] font-extrabold px-2.5 py-1 rounded-md flex items-center gap-1"
                            >
                              <Camera className="w-3 h-3" /> Drop & Photo
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom App Navigation */}
                <div className="mt-4 pt-3 border-t border-white/10 flex justify-around text-[10px] text-[#cbe346]">
                  <span className="text-white font-bold flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-[#cbe346]" /> Route GPS
                  </span>
                  <span>Milk Pass</span>
                  <span>Empty Bottles</span>
                </div>

              </div>
            </div>

            {/* Right: Technical Explanation of Features */}
            <div className="md:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-[#113a2d]">
                Core Capabilities Built For Your Drivers
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-[#faf9f5] p-3.5 rounded-2xl border border-[#e2decfa0]">
                  <Navigation className="w-5 h-5 text-[#113a2d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#113a2d]">Route Cluster Optimization</h4>
                    <p className="text-[11px] text-[#556961]">
                      Automatically groups morning milk drop-offs by street (Soan Gardens Phase 2 Block B, PWD Block C) to reduce fuel cost & finish deliveries before 7:45 AM.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#faf9f5] p-3.5 rounded-2xl border border-[#e2decfa0]">
                  <Camera className="w-5 h-5 text-[#113a2d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#113a2d]">Porch Photo Proof & WhatsApp Ping</h4>
                    <p className="text-[11px] text-[#556961]">
                      Rider clicks 1 photo of the milk bottle on the porch. App automatically shoots a WhatsApp confirmation so customers bring in the milk immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#faf9f5] p-3.5 rounded-2xl border border-[#e2decfa0]">
                  <RefreshCw className="w-5 h-5 text-[#113a2d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#113a2d]">Empty Glass Bottle Returns Tracking</h4>
                    <p className="text-[11px] text-[#556961]">
                      Rider logs collected empty bottles in 1 tap, keeping accurate inventory of Heaven's Dairy glass bottles across households.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Architecture */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#113a2d]">
              Three Interconnected Portals for Heaven's Dairy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#faf9f5] border border-[#e2decfa0]">
                <div className="w-8 h-8 rounded-full bg-[#113a2d] text-white flex items-center justify-center font-bold text-xs mb-3">1</div>
                <h4 className="text-sm font-bold text-[#113a2d] mb-1">Customer Web App</h4>
                <p className="text-xs text-[#556961] leading-relaxed">
                  Interactive portal where residents of Soan Gardens, PWD, Media Town & Bahria Town customize milk quantity, pause dates, and make weekly/monthly payments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf9f5] border border-[#e2decfa0]">
                <div className="w-8 h-8 rounded-full bg-[#113a2d] text-[#cbe346] flex items-center justify-center font-bold text-xs mb-3">2</div>
                <h4 className="text-sm font-bold text-[#113a2d] mb-1">Rider Mobile App</h4>
                <p className="text-xs text-[#556961] leading-relaxed">
                  Lightweight Android APK installed on delivery motorbikes. Shows turn-by-turn house locations, quantity tags, and customer special notes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf9f5] border border-[#e2decfa0]">
                <div className="w-8 h-8 rounded-full bg-[#cbe346] text-[#0c281e] flex items-center justify-center font-bold text-xs mb-3">3</div>
                <h4 className="text-sm font-bold text-[#113a2d] mb-1">Store Dispatch Dashboard</h4>
                <p className="text-xs text-[#556961] leading-relaxed">
                  Central screen at Soan Gardens Phase 2 hub. Calculates total litres required from the 4:30 AM dawn milking, assigns clusters to riders, and tracks live fleet locations.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: ROI */}
        {activeTab === 'roi' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#113a2d]">
              Projected Impact on Heaven's Dairy Business
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-[#faf9f5] rounded-2xl border border-[#e2decfa0]">
                <TrendingUp className="w-6 h-6 text-[#113a2d] mx-auto mb-2" />
                <div className="text-2xl font-black text-[#113a2d]">35%</div>
                <p className="text-[11px] text-[#556961] mt-1">Faster morning delivery completion</p>
              </div>

              <div className="p-4 bg-[#faf9f5] rounded-2xl border border-[#e2decfa0]">
                <Users className="w-6 h-6 text-[#113a2d] mx-auto mb-2" />
                <div className="text-2xl font-black text-[#113a2d]">300+</div>
                <p className="text-[11px] text-[#556961] mt-1">Subscribers capacity in Bahria & PWD</p>
              </div>

              <div className="p-4 bg-[#faf9f5] rounded-2xl border border-[#e2decfa0]">
                <ShieldCheck className="w-6 h-6 text-[#113a2d] mx-auto mb-2" />
                <div className="text-2xl font-black text-[#113a2d]">99.8%</div>
                <p className="text-[11px] text-[#556961] mt-1">Delivery accuracy with photo proof</p>
              </div>

              <div className="p-4 bg-[#faf9f5] rounded-2xl border border-[#e2decfa0]">
                <DollarSign className="w-6 h-6 text-[#113a2d] mx-auto mb-2" />
                <div className="text-2xl font-black text-[#113a2d]">0%</div>
                <p className="text-[11px] text-[#556961] mt-1">Lost revenue from billing errors</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#edeae0] border border-[#d8d3c3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#113a2d]">
                  Ready to deploy this system for Heaven's Dairy?
                </h4>
                <p className="text-xs text-[#556961]">
                  Customizable React web app + mobile rider app for immediate rollout.
                </p>
              </div>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!%20I'm%20interested%20in%20discussing%20the%20Subscription%20Website%20and%20Mobile%20Rider%20Delivery%20App.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#113a2d] hover:bg-[#0c281e] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors shrink-0 shadow flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 text-[#cbe346]" />
                <span>Discuss Implementation</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
