import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Golden Glow Foundation",
    category: "Cosmetics",
    price: "Rs 2,499",
    image: "/images/1.png",
    tag: "Best Seller",
  },
  {
    title: "Luxury Gold Necklace",
    category: "Jewelry",
    price: "Rs 8,999",
    image: "/images/2.png",
    tag: "Premium",
  },
  {
    title: "STS Beauty Kit",
    category: "Bundle",
    price: "Rs 5,999",
    image: "/images/3.png",
    tag: "Limited",
  },
  {
    title: "Diamond Shine Earrings",
    category: "Jewelry",
    price: "Rs 6,499",
    image: "/images/4.png",
    tag: "New",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fcfaf5]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-primary">Products</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Carefully curated premium cosmetics and jewelry collections designed
            for elegance and lifestyle upgrade.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition hover:-translate-y-1"
            >
              {/* ================= IMAGE (BIGGER BUT NOT FULL CARD) ================= */}
              <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-[#f8f2df] to-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* soft luxury glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                {/* tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-[#fadd67]/90 text-[#9a6c18] font-medium backdrop-blur">
                    {product.category}
                  </span>

                  <span className="text-[10px] px-2 py-1 rounded-full bg-[#800000]/90 text-white font-medium backdrop-blur">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* ================= TEXT SECTION ================= */}
              <div className="p-4 space-y-2">
                {/* TITLE */}
                <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition">
                  {product.title}
                </h3>

                {/* PRICE */}
                <p className="text-[#800000] font-semibold text-sm">
                  {product.price}
                </p>

                {/* CTA */}
                <Button className="w-full mt-2 bg-gradient-primary text-white hover:opacity-90">
                  View Product
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
