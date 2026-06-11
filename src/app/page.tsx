import CTABanner from "@/components/sections/ctabanner/ctabanner";
import Hero from "@/components/sections/hero/hero";
import LeadershipTeam from "@/components/sections/leadershipteam/leadershipteam";
import Pillars from "@/components/sections/pillars/pillars";
import FeaturedProducts from "@/components/sections/products/products";
import Seminars from "@/components/sections/seminars/seminars";
import SuccessStories from "@/components/sections/successstories/successstories";
import TrainingGrowth from "@/components/sections/training/traininggrowth";
import WhySTS from "@/components/sections/whysts/whySTS";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <FeaturedProducts />
      <WhySTS />
      <TrainingGrowth />
      <Seminars />
      {/* seminars not responisive */}
      <SuccessStories />
      <LeadershipTeam />
      <CTABanner />
    </>
  );
}
