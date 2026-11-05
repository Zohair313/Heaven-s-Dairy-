import React, { useState, useEffect } from 'react';
import OrganicoHeader from './components/OrganicoHeader';
import OrganicoHero from './components/OrganicoHero';
import SlidingTicker from './components/SlidingTicker';
import TrustBadges from './components/TrustBadges';
import CategoriesSection from './components/CategoriesSection';
import DairyProductRow from './components/DairyProductRow';
import AboutPromoBanner from './components/AboutPromoBanner';
import PitchSection from './components/PitchSection';
import FarmGuidesSection from './components/FarmGuidesSection';
import DeliverySubscriptionBanner from './components/DeliverySubscriptionBanner';
import OrganicoFooter from './components/OrganicoFooter';
import SubscriptionModal from './components/SubscriptionModal';
import CartDrawer from './components/CartDrawer';
import RiderAppModal from './components/RiderAppModal';
import ScrollReveal from './components/ScrollReveal';
import { STORE_INFO, PRODUCTS } from './data/dairyData';
import { MessageCircle, Bike, Home, ShoppingBag, ShoppingCart, Sparkles, Phone } from 'lucide-react';

export default function App() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isRiderAppOpen, setIsRiderAppOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress listener for top indicator bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart state initialized with 1 item for instant preview
  const [cart, setCart] = useState([
    {
      id: "buffalo-milk",
      title: "Pure Buffalo Milk",
      price: 240,
      unit: "per Litre",
      image: PRODUCTS[0].image,
      quantity: 2
    }
  ]);

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  const handleOpenSubscribe = (product = null) => {
    setPreselectedProduct(product);
    setIsSubscribeOpen(true);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.title || product.name} to basket!`);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Group products into 5 items per row matching the Organico reference design
  const milkAndYogurt = PRODUCTS.filter(
    (p) => p.category === 'Fresh Milk' || p.category === 'Yogurt'
  ).slice(0, 5);
  
  const cheeseAndMakhan = PRODUCTS.filter(
    (p) => p.category === 'Cheese' || p.category === 'Butter & Ghee' || p.category === 'Kulfi'
  ).slice(0, 5);

  // Filter if user selects a specific category
  const filteredProducts = selectedCategory === 'All'
    ? null
    : PRODUCTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 font-sans selection:bg-[#cbe346] selection:text-[#0c281e] overflow-x-hidden relative pb-16 md:pb-0">
      
      {/* 1. Top Scroll Progress Indicator Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-600 via-[#f59e0b] to-[#cbe346] z-50 transition-all duration-150 shadow-xs"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#1b4332] text-white px-5 py-2.5 rounded-full shadow-2xl text-xs font-bold flex items-center gap-2 border border-white/20 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#cbe346]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. Header (Organico E-Commerce Header with Mobile Drawer & Search) */}
      <OrganicoHeader
        cartCount={totalCartCount}
        cartTotal={totalCartAmount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSubscribe={() => handleOpenSubscribe()}
        onOpenRiderApp={() => setIsRiderAppOpen(true)}
        onSelectCategory={(cat) => setSelectedCategory(cat === 'All Categories' ? 'All' : cat)}
      />

      <main className="w-full">
        {/* 3. Hero Section (Organico Fresh Market Hero edge-to-edge) */}
        <OrganicoHero 
          onOpenSubscribe={() => handleOpenSubscribe()}
          onOpenRiderApp={() => setIsRiderAppOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 4. Infinite Sliding Marquee Ticker */}
        <SlidingTicker />

        {/* 5. Four Trust Badges with Scroll Reveal (2x2 on Mobile, 4x1 on Desktop) */}
        <ScrollReveal direction="up" delay={50}>
          <TrustBadges />
        </ScrollReveal>

        {/* 6. Browse By Categories with Scroll Reveal */}
        <ScrollReveal direction="up" delay={100}>
          <CategoriesSection
            activeCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
          />
        </ScrollReveal>

        {/* Product display: either filtered category or dual rows */}
        {filteredProducts ? (
          <ScrollReveal direction="up" delay={100}>
            <DairyProductRow
              title={`Category: ${selectedCategory}`}
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              onOpenSubscribe={handleOpenSubscribe}
            />
          </ScrollReveal>
        ) : (
          <>
            {/* 7. Product Row 1 (5 Items in a Row - 2 Columns on Mobile) */}
            <ScrollReveal direction="up" delay={80}>
              <DairyProductRow
                title="Fresh Farm Milk & Yogurt"
                products={milkAndYogurt}
                onAddToCart={handleAddToCart}
                onOpenSubscribe={handleOpenSubscribe}
              />
            </ScrollReveal>

            {/* 8. Middle Promo Banner with Scroll Reveal */}
            <ScrollReveal direction="up" delay={100}>
              <AboutPromoBanner onOpenSubscribe={() => handleOpenSubscribe()} />
            </ScrollReveal>

            {/* 9. Product Row 2 (5 Items in a Row - 2 Columns on Mobile) */}
            <ScrollReveal direction="up" delay={80}>
              <DairyProductRow
                title="Artisan Cheese, Desi Makhan & Treats"
                products={cheeseAndMakhan}
                onAddToCart={handleAddToCart}
                onOpenSubscribe={handleOpenSubscribe}
              />
            </ScrollReveal>
          </>
        )}

        {/* 10. Morning Milk Pass & Rider App Tech Pitch with Scroll Reveal */}
        <ScrollReveal direction="up" delay={100}>
          <PitchSection
            onOpenSubscribe={() => handleOpenSubscribe()}
            onOpenRiderApp={() => setIsRiderAppOpen(true)}
          />
        </ScrollReveal>

        {/* 11. News & Pure Dairy Guides with Scroll Reveal */}
        <ScrollReveal direction="up" delay={100}>
          <FarmGuidesSection />
        </ScrollReveal>

        {/* 12. Doorstep Delivery Subscription Banner with Scroll Reveal */}
        <ScrollReveal direction="up" delay={100}>
          <DeliverySubscriptionBanner onOpenSubscribe={() => handleOpenSubscribe()} />
        </ScrollReveal>
      </main>

      {/* 13. Clean 4-Column E-Commerce Footer */}
      <OrganicoFooter
        onOpenSubscribe={() => handleOpenSubscribe()}
        onOpenRiderApp={() => setIsRiderAppOpen(true)}
      />

      {/* Interactive Modals */}
      <SubscriptionModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        preselectedProduct={preselectedProduct}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
      />

      <RiderAppModal
        isOpen={isRiderAppOpen}
        onClose={() => setIsRiderAppOpen(false)}
      />

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={() => setIsRiderAppOpen(true)}
          className="hidden md:flex bg-[#1b4332] hover:bg-[#122e22] text-white p-3 rounded-full shadow-xl items-center gap-2 text-xs font-bold transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 cursor-pointer"
          title="Mobile Rider Delivery App Fleet"
        >
          <Bike className="w-4 h-4 text-[#cbe346]" />
          <span>Rider App</span>
        </button>

        <a
          href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Heaven's%20Dairy!%20I%20want%20to%20order%20farm-fresh%20milk.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1ebd5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-115 active:scale-95 border border-white/30 animate-pulse-glow"
          title="Direct WhatsApp: 0335-9131316"
        >
          <MessageCircle className="w-6 h-6 fill-white/20" />
        </a>
      </div>

      {/* 14. Native Mobile Bottom App Navigation Bar (Visible only on mobile screens < 768px) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-1.5 flex items-center justify-around shadow-2xl">
        <a 
          href="#" 
          className="flex flex-col items-center gap-0.5 text-[#1b4332] py-1 px-2"
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] font-bold">Home</span>
        </a>

        <a 
          href="#products" 
          className="flex flex-col items-center gap-0.5 text-gray-500 hover:text-[#1b4332] py-1 px-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-[10px] font-bold">Products</span>
        </a>

        <button 
          onClick={() => handleOpenSubscribe()} 
          className="flex flex-col items-center gap-0.5 text-[#f59e0b] py-1 px-2 relative"
        >
          <div className="w-8 h-8 -mt-4 rounded-full bg-[#1b4332] text-[#f59e0b] flex items-center justify-center shadow-lg border-2 border-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-black text-[#1b4332]">Daily Pass</span>
        </button>

        <button 
          onClick={() => setIsRiderAppOpen(true)} 
          className="flex flex-col items-center gap-0.5 text-gray-500 hover:text-[#1b4332] py-1 px-2"
        >
          <Bike className="w-4 h-4 text-emerald-700" />
          <span className="text-[10px] font-bold">Rider App</span>
        </button>

        <button 
          onClick={() => setIsCartOpen(true)} 
          className="flex flex-col items-center gap-0.5 text-gray-500 hover:text-[#1b4332] py-1 px-2 relative"
        >
          <div className="relative">
            <ShoppingCart className="w-4 h-4" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 bg-[#f59e0b] text-white text-[8px] font-black rounded-full flex items-center justify-center">
                {totalCartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold">Cart</span>
        </button>
      </nav>

    </div>
  );
}
