import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface StoryItem {
  year: string;
  title: string;
  description: string;
  image: string;
  stat: string;
  statLabel: string;
}

const storyItems: StoryItem[] = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Founded with a vision to create a unified platform connecting businesses, suppliers, and users across industries. Started with a small team of passionate innovators.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1974&auto=format&fit=crop",
    stat: "10+",
    statLabel: "Team Members",
  },
  {
    year: "2021",
    title: "Rapid Expansion",
    description:
      "Expanded operations to 5 countries, onboarded 2,000+ businesses, and launched key platform features that transformed how organizations connect and grow.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1974&auto=format&fit=crop",
    stat: "2K+",
    statLabel: "Businesses Onboarded",
  },
  {
    year: "2022",
    title: "Trusted Ecosystem",
    description:
      "Reached 50,000 users with verified providers and introduced smart discovery algorithms that revolutionized opportunity matching.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    stat: "50K+",
    statLabel: "Active Users",
  },
  {
    year: "2023",
    title: "Industry Leader",
    description:
      " Became a leading platform with 100,000+ users, 10,000+ opportunities, and regional presence across 50+ areas worldwide.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    stat: "10K+",
    statLabel: "Opportunities Created",
  },
  {
    year: "2024",
    title: "Global Scale",
    description:
      "Launched AI-powered recommendations, expanded to 100+ regions, and empowered millions of connections worldwide with cutting-edge technology.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    stat: "100+",
    statLabel: "Global Regions",
  },
];

const OurSuccessStory: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#A18244] to-transparent opacity-40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex rounded-full bg-[#A18244]/10 px-4 py-2 text-sm font-semibold text-[#A18244]">
            Our Journey
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#191919] lg:text-5xl">
            Our Success Story
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            From a bold idea to a thriving global ecosystem — discover how
            BuySmartly transformed opportunities for businesses and individuals
            worldwide.
          </p>
        </div>

        {/* Story Items */}
        <div className="mt-20 space-y-16 lg:space-y-24">
          {storyItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
              data-aos={
                index % 2 === 0 ? "fade-right" : "fade-left"
              }
              data-aos-duration="1000"
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Year Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full bg-[#A18244] px-5 py-2 text-sm font-bold text-white shadow-lg">
                      {item.year}
                    </span>
                  </div>

                  {/* Stat Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
                      <p className="text-2xl font-bold text-[#A18244]">
                        {item.stat}
                      </p>
                      <p className="text-xs font-medium text-gray-600">
                        {item.statLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-[24px] border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-[0_20px_60px_rgba(161,130,68,0.15)] hover:border-[#A18244]/30 lg:p-10">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#A18244]">
                      <svg
                        className="h-7 w-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>

                    <div>
                      <span className="rounded-full bg-[#A18244]/10 px-4 py-1.5 text-sm font-bold text-[#A18244]">
                        {item.year}
                      </span>
                      <h3 className="mt-2 text-2xl font-bold text-[#191919] lg:text-3xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 h-0.5 w-16 rounded-full bg-[#A18244]" />

                  <p className="mt-5 text-lg leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#A18244]">
                    <div className="h-2 w-2 rounded-full bg-[#A18244]" />
                    <span className="text-sm font-semibold">
                      Milestone Achieved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="relative mt-20 overflow-hidden rounded-[28px] bg-[#191919] p-8 lg:p-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#A18244]/20 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#A18244]/15 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white lg:text-3xl">
                Ready to be part of our success?
              </h3>
              <p className="mt-2 text-gray-400">
                Join thousands of businesses and users already growing with
                BuySmartly.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-[#A18244] px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105">
                Join Now
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#A18244] hover:text-[#A18244]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccessStory;
