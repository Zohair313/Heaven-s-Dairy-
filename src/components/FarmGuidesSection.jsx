import React from 'react';
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';

export default function FarmGuidesSection() {
  const blogs = [
    {
      id: 1,
      title: 'Why Raw Buffalo Milk Has 7% Natural Fat & Thick Golden Malai',
      desc: 'Discover why unprocessed raw morning milk forms a rich cream layer when slow-simmered, providing essential fat-soluble vitamins.',
      date: 'Nov 02, 2026',
      author: 'Master Dairyman',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'The 4°C Cold-Chain Promise: Preserving Live Probiotics & Enzymes',
      desc: 'How our insulated chilling tanks in Soan Gardens Phase 2 halt bacterial multiplication within 15 minutes of dawn milking.',
      date: 'Oct 28, 2026',
      author: 'Veterinary Team',
      image: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'How to Test Pure Milk at Home: Simple Water & Starch Detection',
      desc: '3 effortless tests every Islamabad homemaker can perform using iodine tincture and inclined surface drop testing.',
      date: 'Oct 20, 2026',
      author: 'Quality Lab',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <section className="w-full py-12 sm:py-16 bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading matching Organico Screenshot 2 */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#1b4332] bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-2">
            Knowledge & Purity
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b4332] tracking-tight">
            News & Pure Dairy Guides
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
            Educational insights from our local dairy lab and pastures in Soan Gardens, Islamabad
          </p>
        </div>

        {/* 3 Compact Blog Cards (Exact match to Organico reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <div 
              key={b.id}
              className="bg-[#f8f9fa] rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Fixed-height Image Container */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-100">
                  <img 
                    src={b.image} 
                    alt={b.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black text-emerald-800 shadow-xs">
                    {b.author}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{b.date}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-black text-gray-900 group-hover:text-[#1b4332] transition-colors leading-snug mb-2 line-clamp-2">
                    {b.title}
                  </h3>

                  <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2">
                    {b.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#1b4332] group-hover:text-emerald-700 transition-colors cursor-pointer">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
