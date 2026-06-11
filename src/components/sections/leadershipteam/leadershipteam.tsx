import Image from "next/image";

const team = [
  {
    name: "Muhammad STS Founder",
    role: "Founder & Visionary",
    image: "/images/team/1.png",
  },
  {
    name: "Ayesha Leadership",
    role: "Head of Beauty Division",
    image: "/images/team/2.png",
  },
  {
    name: "Ali Growth Lead",
    role: "Wealth & Training Director",
    image: "/images/team/1.png",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[#fcfaf5]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Leadership <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            The visionaries behind STS building beauty, jewelry & wealth
            ecosystem.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-white/70 backdrop-blur border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 text-center space-y-1">
                <h3 className="font-semibold text-sm">{member.name}</h3>
                <p className="text-xs text-[#800000] font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
