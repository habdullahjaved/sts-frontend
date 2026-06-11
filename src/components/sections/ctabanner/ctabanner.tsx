import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-20 relative">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden relative p-10 md:p-16 text-center">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000] via-[#e6b13a] to-[#997e32]" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start Your STS Journey Today
            </h2>

            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
              Join beauty, jewelry, and wealth ecosystem designed to transform
              your lifestyle and income.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#800000] hover:bg-white/90">
                Join Now
              </Button>

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#800000]"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
