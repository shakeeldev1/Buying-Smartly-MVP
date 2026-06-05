import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { ArrowRight, Sparkles } from 'lucide-react';

// Import Swiper core styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" ,
    title: "Global Sourcing",
    highlight: "& Retail Hub",
    tagline: "Discover uncompromised luxury and premium direct-to-provider channels managed at scale."
  },
  {
    image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=2006&auto=format&fit=crop",
    title: "Elite Travel",
    highlight: "& Connections",
    tagline: "Seamless coordination across international business structures and luxury travel corridors."
  },
  {
   
    
    image: "https://cdn.dribbble.com/userupload/44957414/file/a62738f5a130366c85da42a8bfd23c70.png?format=webp&resize=400x300&vertical=center",
    title: "The Monetization",
    highlight: "Ecosystem",
    tagline: "Bridging complex global capital opportunities across premium multi-vertical networks."
  }
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative h-[75vh] min-h-[480px] w-full bg-zinc-950 overflow-hidden select-none">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect={'fade'}
          speed={1200}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="h-full w-full"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                  activeSlide === index ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-zinc-950 z-10" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 z-10" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Floating Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#A18244]/10 rounded-full blur-[100px] pointer-events-none z-10" />

      {/* CONTENT CONTAINER: Changed back to items-center for stability, but added -mt-12 to push the core layout up away from the bottom controls */}
      <div className="relative z-20 mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center justify-center -mt-12">
        <div className="max-w-4xl text-center flex flex-col items-center justify-center">
          
          {/* Brand Anchor Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-6 shadow-2xl transition-all duration-500 hover:border-amber-500/30">
            <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
            ELROIX HOLDINGS ECOSYSTEM
          </div>

          {/* Dynamic Core Animated Title */}
          <div key={activeSlide} className="animate-[fadeInUp_0.6s_ease-out_forwards]">
            <h1 className="text-4xl sm:text-5xl font-bold  text-white ">
              BuySmartly: {SLIDES[activeSlide].title} <span className="font-serif italic text-[#A18244] font-medium">{SLIDES[activeSlide].highlight}</span>
            </h1>

            {/* Dynamic Tagline */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed mx-auto balance">
              {SLIDES[activeSlide].tagline}
            </p>
          </div>

          {/* Call to Actions CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <a 
              href="/register" 
              className="group inline-flex items-center justify-center rounded-full bg-[#A18244] px-7 py-2.5 text-sm font-semibold text-black hover:bg-[#c2a25c] active:bg-[#8a6e3b] transition-all duration-300 shadow-xl shadow-amber-950/20 w-full sm:w-52 tracking-wide"
            >
              Enter Ecosystem
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            
            <a 
              href="/about" 
              className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/20 backdrop-blur-xl px-7 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-900/60 hover:text-white hover:border-zinc-600 transition-all duration-300 w-full sm:w-52 tracking-wide"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>

      {/* MODERN PAGINATION: Changed position class to bottom-10 to give it breathing room away from the content */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex justify-center">
        <div className="custom-swiper-pagination flex gap-2.5 items-center bg-zinc-950/40 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800/40" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.25;
          width: 7px;
          height: 7px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 9999px;
          margin: 0 !important;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #A18244 !important;
          opacity: 1;
          width: 28px;
        }
      `}</style>
    </section>
  );
}

export default Hero;