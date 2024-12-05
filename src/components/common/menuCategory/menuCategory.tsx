import React from "react";
import { MenuCategoryItem } from "@/components/common/menuCategory/index";

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

const Category: React.FC = () => {
  return (
    <div className="flex gap-4 justify-between p-8 pt-10 overflow-x-scroll snap-mandatory">
      {menuCategory.map((item) => (
        <MenuCategoryItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Category;
