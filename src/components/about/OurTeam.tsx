import React, { useEffect, useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Anderson",
    role: "Chief Executive Officer",
    description:
      "John leads BuySmartly with a vision of creating a unified ecosystem where businesses, providers, and users can discover opportunities and build valuable connections.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Business Development Manager",
    description:
      "Sarah focuses on strategic partnerships, business growth, and creating opportunities that help organizations expand their reach and impact.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Operations Director",
    description:
      "Michael ensures smooth platform operations, efficient workflows, and exceptional service delivery across the BuySmartly ecosystem.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Marketing Lead",
    description:
      "Emily develops innovative marketing strategies that strengthen brand visibility and help connect users with valuable opportunities.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
  },
];

const OurTeam: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === teamMembers.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#A18244]/10 px-4 py-2 text-sm font-semibold text-[#A18244]">
            Our Team
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#191919] lg:text-5xl">
            Meet Our Leadership Team
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            The people driving innovation, growth, and success behind
            BuySmartly.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative mt-16">

          <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl">
            <div className="grid lg:grid-cols-2">

              {/* Left Side Image */}
              <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] overflow-hidden">
                <img
                  src={teamMembers[current].image}
                  alt={teamMembers[current].name}
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Right Side Content */}
              <div className="flex flex-col justify-center p-8 lg:p-14">

                <span className="w-fit rounded-full bg-[#A18244]/10 px-4 py-2 text-sm font-semibold text-[#A18244]">
                  Leadership Team
                </span>

                <h3 className="mt-6 text-3xl font-bold text-[#191919]">
                  {teamMembers[current].name}
                </h3>

                <p className="mt-2 text-lg font-semibold text-[#A18244]">
                  {teamMembers[current].role}
                </p>

                <div className="mt-6 h-1 w-20 rounded-full bg-[#A18244]" />

                <p className="mt-8 text-lg leading-relaxed text-gray-600">
                  {teamMembers[current].description}
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6">

                  <div>
                    <h4 className="text-2xl font-bold text-[#191919]">
                      10+
                    </h4>
                    <p className="text-gray-500">
                      Years Experience
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-[#191919]">
                      100+
                    </h4>
                    <p className="text-gray-500">
                      Projects Managed
                    </p>
                  </div>

                </div>

                {/* Buttons */}
                <div className="mt-10 flex gap-4">

                  <button
                    onClick={prevSlide}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#191919] text-white transition hover:bg-[#A18244]"
                  >
                    ←
                  </button>

                  <button
                    onClick={nextSlide}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#191919] text-white transition hover:bg-[#A18244]"
                  >
                    →
                  </button>

                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-3">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`rounded-full transition-all duration-300 ${
                  current === index
                    ? "h-3 w-10 bg-[#A18244]"
                    : "h-3 w-3 bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurTeam;