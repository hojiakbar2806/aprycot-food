import AdsSection from "@/components/home/adsSection";
import CartSection from "@/components/home/cartSection";
import CategorySection from "@/components/home/categorySection";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <AdsSection />
      <div className="flex gap-10">
        <CategorySection />
        <CartSection />
      </div>
    </div>
  );
}
