

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
  return (
    <section className="relative overflow-hidden bg-[#191919] py-20">
      <div className="absolute left-10 top-20 h-60 w-60 rounded-full bg-[#A18244]/15 blur-[120px]" />
      <div className="absolute right-10 bottom-20 h-60 w-60 rounded-full bg-[#A18244]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#A18244]/10 px-4 py-2 text-sm font-semibold text-[#A18244]">
            Our Team
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white lg:text-5xl">
            Meet Our Leadership Team
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            The people driving innovation, growth, and success behind
            BuySmartly.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative h-[420px] w-full overflow-hidden rounded-[24px] bg-[#1f1f1f] border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#A18244]/40 hover:shadow-[#A18244]/20"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6">
                <span className="w-fit rounded-full bg-[#A18244]/10 px-3 py-1 text-xs font-semibold text-[#A18244]">
                  Leadership
                </span>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#A18244]">
                  {member.role}
                </p>

                <div className="mt-3 h-0.5 w-10 rounded-full bg-[#A18244] transition-all duration-300 group-hover:w-16" />

                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-400">
                  {member.description}
                </p>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#191919]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#A18244]">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-white">View Profile</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;