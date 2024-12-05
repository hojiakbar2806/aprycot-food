import React from "react";
import LeftSectionHeader from "../common/leftSectionHeader";
import { TrendingOrder } from "../common/trendingOrder";
import CategoryButtons from "../common/categoryButtons";

const TrendingOrdersSection: React.FC = () => {
  return (
    <section className="flex gap-10 p-10">
      <div className="w-[65%] flex flex-col justify-between">
        <div className="flex flex-col">
          <LeftSectionHeader title="Trending Orders" path="" />
          <TrendingOrder />
        </div>
      </div>
      <CategoryButtons />
    </section>
  );
};

export default TrendingOrdersSection;
