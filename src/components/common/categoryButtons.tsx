import React from "react";
import RightSectionHeader from "./rightSectionHeader";

const category = [
  {
    id: 2,
    name: "Burgers",
  },
  {
    id: 3,
    name: "Pizza",
  },
  {
    id: 4,
    name: "Dessert",
  },
  {
    id: 5,
    name: "Dessert",
  },
  {
    id: 6,
    name: "Biscuits",
  },
  {
    id: 7,
    name: "Grilled cheese",
  },
  {
    id: 8,
    name: "Grilled cheese",
  },
  {
    id: 9,
    name: "Tomato soup",
  },
  {
    id: 10,
    name: "Chicken fingers",
  },
  {
    id: 11,
    name: "Chicken ",
  },
  {
    id: 12,
    name: "nuggets",
  },
  {
    id: 13,
    name: "Flatbread pizza",
  },
  {
    id: 14,
    name: "Flatbread pizza",
  },
  {
    id: 15,
    name: "Mac & cheese",
  },
  {
    id: 16,
    name: "Mini burgers",
  },
  {
    id: 17,
    name: "Mini pizzas",
  },
  {
    id: 18,
    name: "Grilled Cheese",
  },
  {
    id: 19,
    name: "Grilled ",
  },
  {
    id: 20,
    name: "Veggie Grill’s",
  },
  {
    id: 21,
    name: "Sandwich",
  },
  {
    id: 22,
    name: "Soups",
  },
];

const CategoryButtons = () => {
  return (
    <div className="w-[35%] flex flex-col gap-6 bg-white/60 backdrop:blur-3xl rounded-2xl shadow-md p-6 z-20">
      <RightSectionHeader title="Categories" path="" withBtn />

      <div className="flex flex-wrap gap-7">
        {category.map((item) => (
          <button
            key={item.id}
            className="text-left border border-primary py-2 px-6 rounded-full hover:bg-primary hover:text-white transition"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons;
