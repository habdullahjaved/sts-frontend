"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "./nav-links";
import NavbarActions from "./navbar-actions";

export default function MobileNav() {
  return (
    <div className="md:hidden flex items-center justify-between w-full">
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/sts-logo.png"
          alt="STS"
          width={38}
          height={38}
          className="rounded-md"
        />
        <span className="font-bold text-primary tracking-wide">STS</span>
      </Link>

      {/* MENU */}
      <Sheet>
        <SheetTrigger className="p-2">
          <Menu className="w-6 h-6 text-foreground" />
        </SheetTrigger>

        <SheetContent side="right" className="w-[300px] p-0">
          {/* ================= HEADER ================= */}
          <div className="p-5 border-b border-border bg-gradient-to-br from-[#fcfaf5] to-[#f8f2df]">
            <div className="flex items-center gap-3">
              <Image
                src="/images/sts-logo.png"
                alt="STS"
                width={42}
                height={42}
                className="rounded-md"
              />

              <div>
                <p className="font-bold text-primary">STS</p>
                <p className="text-xs text-muted-foreground">
                  Beauty • Jewelry • Wealth
                </p>
              </div>
            </div>
          </div>

          {/* ================= MENU ================= */}
          <div className="p-5 space-y-6">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="space-y-3">
                  {/* Section Title */}
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>

                  {/* Children */}
                  <div className="space-y-2 pl-2 border-l border-border">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-sm py-1 px-2 rounded-md hover:bg-muted hover:text-primary transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium py-2 px-2 rounded-md hover:bg-muted hover:text-primary transition"
                >
                  {item.label}
                </Link>
              ),
            )}

            {/* ================= CTA AREA ================= */}
            <div className="pt-6 border-t border-border space-y-3">
              {/* Wealth Highlight */}
              <div className="bg-[#800000]/10 border border-[#800000]/20 rounded-lg p-3">
                <p className="text-xs text-[#800000] font-semibold">
                  Start Your Wealth Journey
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  Join STS premium programs
                </p>
              </div>

              <NavbarActions />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
