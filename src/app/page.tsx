import AdsSection from "@/components/home/adsSection";
import CartSection from "@/components/home/cartSection";
import CategoryButtons from "@/components/common/categoryButtons";
import CategorySection from "@/components/home/categorySection";
import TrendingOrdersSection from "@/components/home/trendingOrdersSection";
import React from "react";
import FooterSection from "@/components/home/footerSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <AdsSection />
      <div className="flex gap-10 p-10">
        <CategorySection />
        <CartSection />
      </div>
      <div className="flex gap-10 p-10">
        <TrendingOrdersSection />
        <CategoryButtons />
      </div>
      <FooterSection />
    </div>
  );
}
