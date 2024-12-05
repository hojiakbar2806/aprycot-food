import React from "react";
import LeftSectionHeader from "../common/leftSectionHeader";
import Cart from "@/components/common/cart/cart";
import Category from "@/components/common/menuCategory/menuCategory";
import MenuProduct from "@/components/common/menuProduct/menuProduct";

const CategorySection: React.FC = () => {
  return (
    <section className="flex gap-10 p-10">
      <div className="w-[65%] flex flex-col justify-between">
        <div className="flex flex-col">
          <LeftSectionHeader title="Menu Category" path="" />
          <Category />
        </div>
        <MenuProduct />
      </div>
      <Cart />
    </section>
  );
};

export default CategorySection;
