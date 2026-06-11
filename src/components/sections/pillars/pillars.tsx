import { Button } from "@/components/ui/button";
import { Sparkles, Gem, TrendingUp } from "lucide-react";

export default function Pillars() {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fcfaf5]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Discover <span className="text-primary">STS</span> Ecosystem
          </h2>

          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            A complete lifestyle platform combining beauty, luxury jewelry, and
            financial growth opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* BEAUTY */}
          <div className="group bg-white/70 backdrop-blur border border-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#fadd67]/30 mb-4">
              <Sparkles className="text-[#e6b13a]" />
            </div>

            <h3 className="text-xl font-semibold mb-2">Premium Cosmetics</h3>

            <p className="text-sm text-muted-foreground mb-4">
              High-quality beauty products designed for elegance and confidence.
            </p>

            <Button className="bg-gradient-primary text-white w-full">
              Explore Beauty
            </Button>
          </div>

          {/* JEWELRY */}
          <div className="group bg-white/70 backdrop-blur border border-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#e6b13a]/20 mb-4">
              <Gem className="text-[#9a6c18]" />
            </div>

            <h3 className="text-xl font-semibold mb-2">Luxury Jewelry</h3>

            <p className="text-sm text-muted-foreground mb-4">
              Exclusive collections crafted for timeless beauty and elegance.
            </p>

            <Button className="bg-gradient-primary text-white w-full">
              Explore Jewelry
            </Button>
          </div>

          {/* WEALTH (MAROON FOCUS) */}
          <div className="group bg-white/70 backdrop-blur border border-[#800000]/20 rounded-2xl p-6 shadow-soft hover:shadow-medium transition hover:border-[#800000]">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#800000]/10 mb-4">
              <TrendingUp className="text-[#800000]" />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-[#800000]">
              Wealth Creation
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              Build income opportunities through STS business programs.
            </p>

            <Button className="bg-[#800000] text-white w-full hover:opacity-90">
              Join Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
