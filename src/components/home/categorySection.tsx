import React from "react";
import { MenuCategoryItem, CategoryWrapper } from "../common/menuCategory";
import { MenuProductItem, MenuProductWrapper } from "../common/menuProduct";
import LeftSectionHeader from "../common/leftSectionHeader";

const CategorySection: React.FC = () => {
  return (
    <div className="w-[65%] flex flex-col justify-between">
      <div className="flex flex-col">
        <LeftSectionHeader title="Menu Category" path="" />

        <CategoryWrapper>
          <MenuCategoryItem name="Pizza" image="/icons/categories/pizza.svg" />
          <MenuCategoryItem
            name="Burger"
            image="/icons/categories/burger.svg"
          />
          <MenuCategoryItem name="Drinks" image="/icons/categories/coke.svg" />
          <MenuCategoryItem
            name="Fruits"
            image="/icons/categories/fruits.svg"
          />
          <MenuCategoryItem
            name="Hotdog"
            image="/icons/categories/hotdog.svg"
          />
          <MenuCategoryItem
            name="Snacks"
            image="/icons/categories/snacks.svg"
          />
          <MenuCategoryItem
            name="Veggies"
            image="/icons/categories/veggies.svg"
          />
        </CategoryWrapper>
      </div>

      <MenuProductWrapper>
        <MenuProductItem
          name="Pizza "
          image="/images/products/Vegetable-pizza.png"
          rate={1}
          price={20}
        />
        <MenuProductItem
          name="Pizza "
          image="/images/products/Mushroom-pizza.png"
          rate={2}
          price={20}
        />
        <MenuProductItem
          name="Pizza "
          image="/images/products/Spaghetti.png"
          rate={3}
          price={20}
        />
        <MenuProductItem
          name="Pizza "
          image="/images/products/Vegetable-pizza.png"
          rate={4}
          price={20}
        />
      </MenuProductWrapper>
    </div>
  );
};

export default CategorySection;
