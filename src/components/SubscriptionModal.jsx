import React, { useState } from 'react';
import { STORE_INFO, PRODUCTS } from '../data/dairyData';
import { X, CheckCircle2, MessageCircle, CalendarCheck, MapPin } from 'lucide-react';

export default function SubscriptionModal({ isOpen, onClose, preselectedProduct }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState(STORE_INFO.deliveryAreas[0].name);
  const [variety, setVariety] = useState(preselectedProduct?.id === 'a2-cow-milk' ? 'cow' : 'buffalo');
  const [litres, setLitres] = useState(2);
  const [frequency, setFrequency] = useState('daily');
  const [slot, setSlot] = useState('morning');
  const [notes, setNotes] = useState('Please leave in porch cooler box');

  const pricePerLitre = variety === 'cow' ? 260 : 240;
  const daysPerMonth = frequency === 'daily' ? 30 : frequency === 'alternate' ? 15 : 22;
  const monthlyTotal = litres * pricePerLitre * daysPerMonth;

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderText = `*Heaven's Dairy - Daily Milk Subscription*%0A%0A` +
      `*Customer Details:*%0A` +
      `• Name: ${name || 'Islamabad Customer'}%0A` +
      `• Phone: ${phone || 'Not provided'}%0A` +
      `• Area: ${area}%0A` +
      `• Address: ${address || 'Near Soan Gardens Hub'}%0A%0A` +
      `*Subscription Details:*%0A` +
      `• Milk: ${variety === 'cow' ? 'Pure A2 Cow Milk (Rs. 260/L)' : 'Pure Buffalo Milk (Rs. 240/L)'}%0A` +
      `• Daily Quantity: ${litres} Litre(s)%0A` +
      `• Frequency: ${frequency.toUpperCase()}%0A` +
      `• Delivery Slot: ${slot === 'morning' ? 'Sunrise Slot (6:00 AM - 8:00 AM)' : 'Evening Slot (5:00 PM - 7:30 PM)'}%0A` +
      `• Estimated Monthly: Rs. ${monthlyTotal.toLocaleString()}%0A` +
      `• Notes: ${notes}%0A%0A` +
      `Please activate my subscription starting tomorrow morning!`;

    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${orderText}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-[#d8d3c3] my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#edeae0] hover:bg-[#e2decfa0] text-[#113a2d] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#113a2d] bg-[#cbe346] px-3 py-1 rounded-full">
            Farm-Fresh Doorstep Routine
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#113a2d] mt-2">
            Start Daily Milk Subscription
          </h3>
          <p className="text-xs text-[#556961] mt-1">
            Delivered between 6:00 AM – 8:00 AM across Soan Gardens, PWD, Media Town & Bahria Town.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Variety and Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#113a2d] mb-1.5">Milk Variety</label>
              <select
                value={variety}
                onChange={(e) => setVariety(e.target.value)}
                className="w-full text-xs font-semibold p-3 rounded-2xl bg-[#faf9f5] border border-[#d8d3c3] text-[#113a2d] focus:outline-none focus:ring-2 focus:ring-[#113a2d]"
              >
                <option value="buffalo">Pure Buffalo Milk (Rs. 240 / L)</option>
                <option value="cow">Pure A2 Cow Milk (Rs. 260 / L)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#113a2d] mb-1.5">Quantity / Day</label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setLitres(num)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      litres === num ? 'bg-[#113a2d] text-white' : 'bg-[#edeae0] text-[#113a2d]'
                    }`}
                  >
                    {num} L
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Area & Delivery Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#113a2d] mb-1.5">Delivery Area</label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full text-xs font-semibold p-3 rounded-2xl bg-[#faf9f5] border border-[#d8d3c3] text-[#113a2d] focus:outline-none focus:ring-2 focus:ring-[#113a2d]"
              >
                {STORE_INFO.deliveryAreas.map((a) => (
                  <option key={a.name} value={a.name}>{a.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#113a2d] mb-1.5">Delivery Slot</label>
              <select
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                className="w-full text-xs font-semibold p-3 rounded-2xl bg-[#faf9f5] border border-[#d8d3c3] text-[#113a2d] focus:outline-none focus:ring-2 focus:ring-[#113a2d]"
              >
                <option value="morning">Morning (6:00 AM – 8:00 AM)</option>
                <option value="evening">Evening (5:00 PM – 7:30 PM)</option>
              </select>
            </div>
          </div>

          {/* Schedule Frequency */}
          <div>
            <label className="block text-xs font-bold text-[#113a2d] mb-1.5">Delivery Frequency</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'daily', label: 'Everyday' },
                { id: 'alternate', label: 'Alternate Days' },
                { id: 'weekdays', label: 'Mon – Fri' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFrequency(f.id)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    frequency === f.id
                      ? 'bg-[#113a2d] text-white border-[#113a2d]'
                      : 'bg-white border-[#d8d3c3] text-[#446358]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Customer Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#113a2d] mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Usman Tariq"
                className="w-full text-xs p-3 rounded-2xl bg-[#faf9f5] border border-[#d8d3c3] text-[#113a2d] focus:outline-none focus:ring-2 focus:ring-[#113a2d]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#113a2d] mb-1">WhatsApp / Phone No.</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="03XX-XXXXXXX"
                className="w-full text-xs p-3 rounded-2xl bg-[#faf9f5] border border-[#d8d3c3] text-[#113a2d] focus:outline-none focus:ring-2 focus:ring-[#113a2d]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#113a2d] mb-1">House & Street Address</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. House 45, Street 12, Sector B"
              className="w-full text-xs p-3 rounded-2xl bg-[#faf9f5] border border-[#d8d3c3] text-[#113a2d] focus:outline-none focus:ring-2 focus:ring-[#113a2d]"
            />
          </div>

          {/* Summary Box */}
          <div className="p-4 bg-[#edeae0] rounded-2xl flex items-center justify-between">
            <div>
              <span className="text-[11px] text-[#556961] block">Calculated Monthly Total</span>
              <span className="text-xl font-black text-[#113a2d]">
                Rs. {monthlyTotal.toLocaleString()}
              </span>
            </div>
            <div className="text-right text-[11px] text-[#113a2d] font-bold">
              ✓ Free Doorstep Delivery<br />
              ✓ No Advance Lock-in
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-[#113a2d] hover:bg-[#0c281e] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#cbe346]" />
            <span>Confirm & Activate on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
