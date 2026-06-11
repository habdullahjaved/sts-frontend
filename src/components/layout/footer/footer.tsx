import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#fcfaf5] to-[#f8f2df] text-[#1f1b14] overflow-hidden">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-10 w-72 h-72 bg-[#e6b13a]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#800000]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ================= BRAND IDENTITY ================= */}
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
              <span className="text-[#e6b13a]">STS</span>
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              A premium ecosystem of Beauty, Jewelry, and Wealth Creation. Built
              to empower individuals with elegance, confidence, and financial
              growth opportunities.
            </p>

            {/* Luxury line */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-[2px] bg-[#800000]" />
              <div className="w-4 h-[2px] bg-[#e6b13a]" />
            </div>

            <p className="text-xs text-[#800000] italic font-medium">
              “Empowering Beauty, Elevating Lifestyles, Creating Wealth.”
            </p>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div className="space-y-3">
              <h3 className="font-semibold text-[#1f1b14]">Explore</h3>

              <Link
                className="block text-muted-foreground hover:text-[#e6b13a] transition"
                href="#"
              >
                Home
              </Link>
              <Link
                className="block text-muted-foreground hover:text-[#e6b13a] transition"
                href="#"
              >
                Products
              </Link>
              <Link
                className="block text-muted-foreground hover:text-[#e6b13a] transition"
                href="#"
              >
                Training
              </Link>
              <Link
                className="block text-muted-foreground hover:text-[#e6b13a] transition"
                href="#"
              >
                Seminars
              </Link>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-[#1f1b14]">Company</h3>

              <Link
                className="block text-muted-foreground hover:text-[#800000] transition"
                href="#"
              >
                About STS
              </Link>
              <Link
                className="block text-muted-foreground hover:text-[#800000] transition"
                href="#"
              >
                Leadership
              </Link>
              <Link
                className="block text-muted-foreground hover:text-[#800000] transition"
                href="#"
              >
                Success Stories
              </Link>
              <Link
                className="block text-muted-foreground hover:text-[#800000] transition"
                href="#"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#1f1b14]">Connect</h3>

            <p className="text-sm text-muted-foreground">support@sts.com</p>

            <p className="text-sm text-muted-foreground">
              Pakistan • Global Expansion
            </p>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <div className="w-9 h-9 rounded-full border border-[#e6b13a]/30 flex items-center justify-center hover:bg-[#e6b13a]/10 transition cursor-pointer">
                <span className="text-xs">IG</span>
              </div>

              <div className="w-9 h-9 rounded-full border border-[#800000]/30 flex items-center justify-center hover:bg-[#800000]/10 transition cursor-pointer">
                <span className="text-xs">FB</span>
              </div>

              <div className="w-9 h-9 rounded-full border border-[#997e32]/30 flex items-center justify-center hover:bg-[#997e32]/10 transition cursor-pointer">
                <span className="text-xs">WA</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-16 pt-6 border-t border-[#eadfbc] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} STS. All rights reserved.
          </p>

          <p className="text-xs text-[#800000] font-medium tracking-wide">
            Beauty • Jewelry • Wealth • Legacy Brand
          </p>
        </div>
      </div>
    </footer>
  );
}
