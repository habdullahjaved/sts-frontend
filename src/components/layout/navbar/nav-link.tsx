import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: Props) {
  return (
    <Link
      href={href}
      className="text-sm font-medium hover:text-primary transition"
    >
      {label}
    </Link>
  );
}
