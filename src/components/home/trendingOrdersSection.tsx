import React from "react";
import LeftSectionHeader from "../common/leftSectionHeader";
import {
  TrendingOrderItem,
  TrendingOrderWrapper,
} from "../common/trendingOrder";

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

const TrendingOrdersSection: React.FC = () => {
  return (
    <section className="w-[65%] flex flex-col justify-between">
      <div className="flex flex-col">
        <LeftSectionHeader title="Trending Orders" path="" />

        <TrendingOrderWrapper>
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
        </TrendingOrderWrapper>
      </div>
    </section>
  );
};

export default TrendingOrdersSection;
