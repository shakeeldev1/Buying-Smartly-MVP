import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

// Import Swiper core styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=2070&auto=format&fit=crop",
    title: "Global Sourcing & Retail Hub",
    tagline: "Discover uncompromised luxury and premium direct-to-provider channels."
  },
  {
    image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=2006&auto=format&fit=crop",
    title: "Elite Travel & Connections",
    tagline: "Seamless coordination across international business and travel corridors."
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    title: "The Monetization Ecosystem",
    tagline: "Bridging complex global opportunities across multi-vertical networks."
  }
];

function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-black overflow-hidden">
      
      {/* Background Swiper Slider Layout */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect={'fade'}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination'
          }}
          loop={true}
          className="h-full w-full"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              {/* Radial and Linear overlays combined for absolute center focus text legibility */}
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Layer -> Completely Centered */}
      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-3xl text-center flex flex-col items-center justify-center">
          
          {/* Brand Anchor Text */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wider text-amber-400 uppercase mb-6 mx-auto">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            ELROIX HOLDINGS Ecosystem
          </div>

          {/* Core Brand Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            BuySmartly<span className="text-[#A18244]">.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mx-auto">
            The premium Search, Discovery, Connection, and Monetization ecosystem bridging global opportunities across multi-vertical industries.
          </p>

          {/* Centered Actions CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a 
              href="/register" 
              className="group inline-flex items-center justify-center rounded-full bg-[#A18244] px-8 py-4 text-sm font-semibold text-black hover:bg-[#b59553] active:bg-[#8a6e3b] transition-all duration-300 shadow-xl shadow-amber-950/20 w-full sm:w-auto"
            >
              Join Ecosystem
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a 
              href="/about" 
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/40 backdrop-blur-md px-8 py-4 text-sm font-semibold text-white hover:bg-zinc-900 hover:border-zinc-500 transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>

      {/* Custom Minimalist Pagination Dots Container */}
      <div className="absolute bottom-8   z-20 flex justify-center">
        <div className="custom-swiper-pagination flex gap-2" />
      </div>

      {/* Custom Styling Overrides */}
      <style>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.3;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
          border-radius: 9999px;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #A18244 !important;
          opacity: 1;
          width: 24px;
        }
      `}</style>
    </section>
  );
}

export default Hero;