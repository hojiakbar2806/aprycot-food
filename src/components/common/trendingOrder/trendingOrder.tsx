import React from "react";
import TrendingOrderItem from "./trendingOrderItem";

const trendingOrders = [
  {
    id: 1,
    name: "Italian Salad",
    image: "/orders/salad1.png",
    calories: 100,
    selling_person_count: 10,
    price: 20,
  },
  {
    id: 2,
    name: "Italian Salad",
    image: "/orders/salad2.png",
    calories: 100,
    selling_person_count: 10,
    price: 20,
  },
  {
    id: 3,
    name: "Italian Salad",
    image: "/orders/salad3.png",
    calories: 100,
    selling_person_count: 10,
    price: 20,
  },
  {
    id: 4,
    name: "Italian Salad",
    image: "/orders/salad3.png",
    calories: 100,
    selling_person_count: 10,
    price: 20,
  },
  {
    id: 5,
    name: "Italian Salad",
    image: "/orders/salad2.png",
    calories: 100,
    selling_person_count: 10,
    price: 20,
  },
  {
    id: 6,
    name: "Italian Salad",
    image: "/orders/salad1.png",
    calories: 100,
    selling_person_count: 10,
    price: 20,
  },
];

const TrendingOrder: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-20 pt-10 pr-20">
      {trendingOrders.map((item) => (
        <TrendingOrderItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          calories={item.calories}
          selling_person_count={item.selling_person_count}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default TrendingOrder;
