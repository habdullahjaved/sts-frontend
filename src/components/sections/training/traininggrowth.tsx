import { BookOpen, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrainingGrowth() {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fcfaf5]" />

      {/* Glow */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-[#e6b13a]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#800000]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Training & <span className="text-primary">Growth</span>
            </h2>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              STS Academy is designed to build skills, confidence, and financial
              independence. Learn beauty, understand business, and grow your
              income through structured systems.
            </p>

            {/* KEY IDEA */}
            <div className="bg-white/60 backdrop-blur border border-border rounded-2xl p-5 shadow-soft">
              <p className="text-sm font-medium">
                “We don’t just sell products — we build people.”
              </p>
              <div className="w-16 h-[3px] bg-[#800000] mt-3 rounded-full" />
            </div>

            <Button className="bg-gradient-primary text-white shadow-gold hover:opacity-90">
              Join STS Academy
            </Button>
          </div>

          {/* ================= RIGHT CARDS ================= */}
          <div className="grid gap-5">
            {/* CARD 1 */}
            <div className="group bg-white/70 backdrop-blur border border-border rounded-2xl p-5 shadow-soft hover:shadow-medium transition">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="text-primary w-5 h-5" />
                <h3 className="font-semibold text-sm">Beauty Training</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Learn professional cosmetics usage, skin care knowledge and
                product expertise.
              </p>
            </div>

            {/* CARD 2 (WEALTH - MAROON FOCUS) */}
            <div className="group bg-white/70 backdrop-blur border border-[#800000]/20 rounded-2xl p-5 shadow-soft hover:shadow-medium transition hover:border-[#800000]">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="text-[#800000] w-5 h-5" />
                <h3 className="font-semibold text-sm text-[#800000]">
                  Wealth Creation Program
                </h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Learn how to build income through STS business model and network
                growth.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group bg-white/70 backdrop-blur border border-border rounded-2xl p-5 shadow-soft hover:shadow-medium transition">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-primary w-5 h-5" />
                <h3 className="font-semibold text-sm">Business Community</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Join a growing community of entrepreneurs and beauty
                professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
