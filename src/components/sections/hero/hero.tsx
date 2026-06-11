import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fcfaf5] to-[#f8f2df]" />

      {/* Glow (responsive sizing) */}
      <div className="absolute -top-20 -left-20 w-48 md:w-72 h-48 md:h-72 bg-[#e6b13a]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#800000]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-48 md:w-72 h-48 md:h-72 bg-[#fadd67]/20 rounded-full blur-3xl" />

      {/* ================= GRID ================= */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* ================= LEFT ================= */}
        <div className="space-y-5 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-border bg-white/60 backdrop-blur mx-auto md:mx-0">
            <span className="w-2 h-2 rounded-full bg-[#800000] animate-pulse" />
            <p className="text-[11px] md:text-xs font-medium text-muted-foreground">
              Since 2016 • Premium Lifestyle Brand
            </p>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-primary">STS</span>
            <br />
            <span className="text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
              Beauty • Jewelry • Wealth
            </span>
          </h1>

          {/* Maroon Accent Line */}
          <div className="w-14 md:w-20 h-[3px] bg-[#800000] rounded-full mx-auto md:mx-0" />

          {/* Description */}
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Empowering Beauty, Elevating Lifestyles, Creating Wealth
          </p>

          <p className="text-xs md:text-sm text-muted-foreground max-w-md mx-auto md:mx-0">
            Premium cosmetics, exclusive jewelry collections, and professional
            training programs designed to transform your lifestyle with luxury
            and confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
            <Button className="bg-gradient-primary text-white shadow-gold hover:opacity-90 w-full sm:w-auto">
              Shop Now
            </Button>

            <Button
              variant="outline"
              className="border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white transition w-full sm:w-auto"
            >
              Explore STS
            </Button>
          </div>

          {/* Trust */}
          <div className="pt-4 space-y-1 text-center md:text-left">
            <p className="text-[11px] md:text-xs text-muted-foreground">
              Trusted by customers worldwide • Premium Quality • Luxury
              Experience
            </p>

            <p className="text-[11px] md:text-xs text-[#800000] font-medium">
              Luxury • Integrity • Growth
            </p>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative flex justify-center items-center mt-6 md:mt-0">
          {/* Glow Core */}
          <div className="absolute w-[240px] md:w-[380px] h-[240px] md:h-[380px] bg-gradient-to-br from-[#e6b13a]/30 via-[#fadd67]/20 to-[#800000]/10 rounded-full blur-2xl" />

          {/* Product */}
          <div className="relative z-10 float">
            <Image
              src="/images/cosmetics.jpg"
              alt="STS Beauty Product"
              width={260}
              height={260}
              className="md:w-[380px] md:h-[380px] object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>

          {/* Floating Jewelry */}
          <div className="absolute top-5 right-2 md:top-10 md:right-0 bg-white/70 backdrop-blur border border-border rounded-xl md:rounded-2xl p-2 md:p-3 shadow-medium animate-fade-up">
            <Image
              src="/images/jewelry.jpg"
              alt="Jewelry"
              width={50}
              height={50}
              className="md:w-[80px] md:h-[80px] rounded-xl"
            />
            <p className="text-[10px] md:text-xs text-[#800000] font-medium mt-1 text-center">
              Exclusive
            </p>
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-5 left-2 md:bottom-10 md:left-0 bg-[#800000]/10 backdrop-blur border border-[#800000]/20 rounded-full px-3 md:px-4 py-1 md:py-2 shadow-soft">
            <p className="text-[10px] md:text-xs font-medium text-[#800000]">
              Luxury Collection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
