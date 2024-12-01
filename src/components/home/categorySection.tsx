import React from "react";
import { MenuProductItem, MenuProductWrapper } from "../common/menuProduct";
import { CategoryWrapper, MenuCategoryItem } from "../common/menuCategory";
import LeftSectionHeader from "../common/leftSectionHeader";

const menuCategory = [
  {
    id: 1,
    name: "Pizza",
    image: "/icons/categories/pizza.svg",
  },
  {
    id: 2,
    name: "Burger",
    image: "/icons/categories/burger.svg",
  },
  {
    id: 3,
    name: "Drinks",
    image: "/icons/categories/coke.svg",
  },
  {
    id: 4,
    name: "Fruits",
    image: "/icons/categories/fruits.svg",
  },
  {
    id: 5,
    name: "Hotdog",
    image: "/icons/categories/hotdog.svg",
  },
  {
    id: 6,
    name: "Snacks",
    image: "/icons/categories/snacks.svg",
  },
  {
    id: 7,
    name: "Veggies",
    image: "/icons/categories/veggies.svg",
  },
];

const menuProducts = [
  {
    id: 1,
    name: "Spaghetti",
    image: "/images/products/Spaghetti.png",
    rate: 4.5,
    price: 12.99,
  },
  {
    id: 2,
    name: "Vegetable Pizza",
    image: "/images/products/Vegetable-pizza.png",
    rate: 4.5,
    price: 12.99,
  },
  {
    id: 3,
    name: "Mushroom Pizza",
    image: "/images/products/Mushroom-pizza.png",
    rate: 4.5,
    price: 12.99,
  },
  {
    id: 4,
    name: "Sweets",
    image: "/images/products/Sweets.png",
    rate: 4.5,
    price: 12.99,
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="w-[65%] flex flex-col justify-between">
      <div className="flex flex-col">
        <LeftSectionHeader title="Menu Category" path="" />

        <CategoryWrapper>
          {menuCategory.map((item) => (
            <MenuCategoryItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
            />
          ))}
        </CategoryWrapper>
      </div>

      <MenuProductWrapper>
        {menuProducts.map((item) => (
          <MenuProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            rate={item.rate}
            price={item.price}
          />
        ))}
      </MenuProductWrapper>
    </section>
  );
};

export default CategorySection;
