import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./nav-links";
import NavDropdown from "./nav-dropdown";
import NavLink from "./nav-link";
import NavbarActions from "./navbar-actions";

export default function DesktopNav() {
  return (
    <div className="hidden md:flex items-center justify-between w-full">
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/sts-logo.png"
          alt="STS"
          width={56}
          height={56}
          className="rounded-xl"
        />

        <div className="leading-tight">
          <p className="font-bold text-lg text-primary">STS</p>
          <p className="text-xs text-muted-foreground">
            Beauty • Jewelry • Wealth
          </p>
        </div>
      </Link>

      {/* NAV LINKS */}
      <nav className="flex items-center gap-6">
        {navLinks.map((item) =>
          item.children ? (
            <NavDropdown
              key={item.label}
              label={item.label}
              items={item.children}
            />
          ) : (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ),
        )}
      </nav>

      {/* ACTIONS */}
      <NavbarActions />
    </div>
  );
}
