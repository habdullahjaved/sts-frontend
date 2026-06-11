import { Button } from "@/components/ui/button";

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="ghost" className="hidden md:flex">
        Login
      </Button>

      <Button className="bg-gradient-primary text-white shadow-gold hover:opacity-90">
        Shop Now
      </Button>
    </div>
  );
}
