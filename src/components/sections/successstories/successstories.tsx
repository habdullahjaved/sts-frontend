import Image from "next/image";

const stories = [
  {
    name: "Ayesha Khan",
    role: "Beauty Entrepreneur",
    story: "Started as a customer, now running her own STS beauty business.",
    image: "/images/team/2.png",
    tag: "Beauty Success",
  },
  {
    name: "Ali Raza",
    role: "Business Partner",
    story: "Built consistent monthly income through STS wealth program.",
    image: "/images/team/1.png",
    tag: "Wealth Growth",
  },
  {
    name: "Sara Ahmed",
    role: "Jewelry Consultant",
    story: "Turned passion into profession with luxury jewelry sales.",
    image: "/images/team/2.png",
    tag: "Jewelry Business",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fcfaf5]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#e6b13a]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#800000]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Success <span className="text-primary">Stories</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Real people. Real growth. Real transformation through STS ecosystem.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((item, i) => (
            <div
              key={i}
              className="group bg-white/70 backdrop-blur border border-border rounded-2xl p-5 shadow-soft hover:shadow-medium transition hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* TAG */}
              <span className="text-[10px] px-2 py-1 rounded-full bg-[#fadd67]/70 text-[#9a6c18] font-medium">
                {item.tag}
              </span>

              {/* NAME */}
              <h3 className="mt-2 font-semibold text-sm">{item.name}</h3>

              {/* ROLE */}
              <p className="text-xs text-[#800000] font-medium">{item.role}</p>

              {/* STORY */}
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {item.story}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
