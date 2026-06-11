export const navLinks = [
  { label: "Home", href: "/" },

  { label: "About", href: "/about" },

  {
    label: "Products",
    children: [
      { label: "Cosmetics", href: "/products/cosmetics" },
      { label: "Jewelry", href: "/products/jewelry" },
      { label: "All Products", href: "/products" },
    ],
  },

  {
    label: "Trainings",
    href: "/trainings",
  },

  {
    label: "Seminars",
    href: "/seminars",
  },

  {
    label: "Wealth",
    children: [
      { label: "Opportunities", href: "/wealth-creation" },
      { label: "Success Stories", href: "/success-stories" },
    ],
  },

  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];
