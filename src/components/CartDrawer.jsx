import React from 'react';
import { STORE_INFO } from '../data/dairyData';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemove, onClear }) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 500 ? 0 : 100;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    let itemsList = cart.map(item => `• ${item.quantity}x ${item.title || item.name} (Rs. ${item.price * item.quantity})`).join('%0A');
    
    const text = `*New Dairy Order - Heaven's Dairy*%0A%0A` +
      `*Items Requested:*%0A${itemsList}%0A%0A` +
      `• Subtotal: Rs. ${subtotal.toLocaleString()}%0A` +
      `• Delivery Fee: ${deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}%0A` +
      `• *Grand Total: Rs. ${grandTotal.toLocaleString()}*%0A%0A` +
      `Please deliver to my address in Islamabad. Let me know when the rider can drop it off!`;

    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 border-l border-[#d8d3c3]">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#e2decfa0]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#113a2d]" />
              <h3 className="text-xl font-bold text-[#113a2d]">Your Dairy Basket</h3>
              <span className="text-xs bg-[#eef5c4] text-[#113a2d] font-black px-2 py-0.5 rounded-full">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#edeae0] hover:bg-[#e2decfa0] text-[#113a2d] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="overflow-y-auto max-h-[55vh] py-4 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-base font-bold text-[#113a2d] mb-1">Your basket is empty</p>
                <p className="text-xs text-[#556961]">Add fresh milk, matka dahi, or artisan cheese to begin.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center gap-3 p-3 bg-[#faf9f5] rounded-2xl border border-[#e2decfa0] shadow-xs"
                >
                  <img 
                    src={item.image} 
                    alt={item.title || item.name} 
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#113a2d] truncate">
                      {item.title || item.name}
                    </h4>
                    <p className="text-[11px] text-[#113a2d] font-black">
                      Rs. {item.price} <span className="text-[10px] text-[#556961] font-normal">{item.unit}</span>
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-[#edeae0] hover:bg-[#e2decfa0] flex items-center justify-center text-[#113a2d]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#113a2d] px-1">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-[#edeae0] hover:bg-[#e2decfa0] flex items-center justify-center text-[#113a2d]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-xs text-[#113a2d] block">
                      Rs. {item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-red-600 hover:text-red-800 p-1 mt-1"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Billing & WhatsApp Order Dispatch */}
        {cart.length > 0 && (
          <div className="pt-4 border-t border-[#e2decfa0] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#556961]">
                <span>Items Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#556961]">
                <span>Delivery (Soan Gardens, PWD, Bahria)</span>
                <span>{deliveryFee === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `Rs. ${deliveryFee}`}</span>
              </div>
              {subtotal < 500 && (
                <p className="text-[10px] text-amber-800">
                  Add Rs. {500 - subtotal} more for free delivery!
                </p>
              )}
              <div className="flex justify-between text-base font-black text-[#113a2d] pt-2 border-t border-[#e2decfa0]">
                <span>Total Amount</span>
                <span>Rs. {grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 rounded-full bg-[#113a2d] hover:bg-[#0c281e] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#cbe346]" />
              <span>Send Order to WhatsApp (0335 9131316)</span>
            </button>

            <button
              onClick={onClear}
              className="w-full text-center text-[11px] text-[#556961] hover:underline"
            >
              Empty Basket
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
