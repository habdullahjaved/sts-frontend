"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type Props = {
  label: string;
  items: { label: string; href: string }[];
};

export default function NavDropdown({ label, items }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium hover:text-primary transition">
        {label}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-52">
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href} className="w-full cursor-pointer">
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
