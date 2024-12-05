import AdsSection from "@/components/home/adsSection";
import CategorySection from "@/components/home/categorySection";
import TrendingOrdersSection from "@/components/home/trendingOrdersSection";
import React from "react";
import FooterSection from "@/components/home/footerSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <AdsSection />
      <CategorySection />
      <TrendingOrdersSection />
      <FooterSection />
    </div>
  );
}
