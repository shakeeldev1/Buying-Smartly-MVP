import { useEffect, useState } from "react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop",
    title: "Connecting People With Opportunities",
    subtitle:
      "Discover businesses, suppliers, services, education, healthcare and growth opportunities through one unified ecosystem.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
    title: "Smarter Search. Better Results.",
    subtitle:
      "Find trusted providers, compare options and make informed decisions with confidence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    title: "Built For Businesses & Individuals",
    subtitle:
      "A powerful platform designed to connect users, providers and opportunities worldwide.",
  },
];

const AboutHead: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden bg-[#191919]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            currentSlide === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#191919] via-[#191919]/85 to-black/40" />

          <div className="absolute left-10 top-20 h-60 w-60 rounded-full bg-[#A18244]/15 blur-[120px]" />
          <div className="absolute right-10 bottom-20 h-60 w-60 rounded-full bg-[#A18244]/10 blur-[120px]" />
        </div>
      ))}

      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">

          <div className="max-w-3xl">

            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-[#A18244]/40 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-[#A18244] backdrop-blur-md">
              About BuySmartly
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-2xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {slides[currentSlide].title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
              {slides[currentSlide].subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#A18244] px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105">
                Explore Platform
              </button>

              <button className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#A18244] hover:text-[#A18244]">
                Learn More
              </button>
            </div>

            {/* Compact Stats */}
            <div className="mt-12 flex flex-wrap gap-8">

              <div>
                <h3 className="text-2xl font-bold text-[#A18244]">
                  10K+
                </h3>
                <p className="text-sm text-gray-400">
                  Opportunities
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#A18244]">
                  5K+
                </h3>
                <p className="text-sm text-gray-400">
                  Businesses
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#A18244]">
                  20K+
                </h3>
                <p className="text-sm text-gray-400">
                  Users
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#A18244]">
                  100+
                </h3>
                <p className="text-sm text-gray-400">
                  Regions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "h-2 w-10 bg-[#A18244]"
                : "h-2 w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutHead;