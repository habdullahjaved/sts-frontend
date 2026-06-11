import { ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export default function WhySTS() {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fcfaf5]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why <span className="text-primary">STS</span>?
            </h2>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              STS is more than a brand — it is a lifestyle ecosystem designed to
              empower beauty, elevate confidence, and create long-term financial
              growth opportunities.
            </p>

            {/* KEY POINTS */}
            <div className="space-y-4 pt-2">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="text-[#800000] w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Trusted Quality</p>
                  <p className="text-xs text-muted-foreground">
                    Premium tested cosmetics and jewelry collections
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Sparkles className="text-primary w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Luxury Experience</p>
                  <p className="text-xs text-muted-foreground">
                    Designed with elegance, detail, and premium branding
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <TrendingUp className="text-[#800000] w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Growth Opportunities</p>
                  <p className="text-xs text-muted-foreground">
                    Learn, sell, and build income through STS systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative flex justify-center">
            {/* Glow Background */}
            <div className="absolute w-[280px] md:w-[380px] h-[280px] md:h-[380px] bg-gradient-to-br from-[#e6b13a]/30 via-[#fadd67]/20 to-[#800000]/10 rounded-full blur-3xl" />

            {/* Floating Card */}
            <div className="relative bg-white/70 backdrop-blur border border-border rounded-2xl p-6 shadow-soft max-w-sm">
              <h3 className="text-lg font-semibold mb-3">
                Built on Trust & Vision
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Since 2016, STS has focused on creating premium experiences in
                beauty, jewelry, and business development — combining luxury
                with opportunity.
              </p>

              {/* Maroon highlight strip */}
              <div className="mt-4 h-[3px] w-16 bg-[#800000] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
