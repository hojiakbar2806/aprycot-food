import { Plus } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type TrendingOrderItemProps = {
  id: number;
  name: string;
  image: string | StaticImageData;
  calories: number;
  selling_person_count: number;
  price: number;
};

const TrendingOrderItem: React.FC<TrendingOrderItemProps> = (item) => {
  return (
    <div
      className="flex justify-between bg-white rounded-2xl shadow-md relative p-6
      group hover:bg-primary hover:text-white transition"
    >
      <div className="flex flex-col gap-4">
        <p
          className="text-sm text-primary
          group-hover:text-white transition"
        >
          👑 Top of the week
        </p>
        <h2>{item.name}</h2>

        <div
          className="flex flex-col gap-2 text-gray-400 
          group-hover:text-white transition"
        >
          <p>{item.calories} calories</p>
          <span
            className="w-full h-px bg-gray-400
          group-hover:bg-white transition"
          ></span>
          <p>{item.selling_person_count} person</p>
        </div>

        <div className="w-full flex  items-center gap-4">
          <h1
            className="text-primary font-bold
          group-hover:text-white transition"
          >
            ${item.price}
          </h1>
          <button className="p-1 group-hover:bg-white group-hover:text-primary transition bg-primary text-white rounded-full">
            <Plus size={15} />
          </button>
        </div>
      </div>
      <Image
        src={item.image}
        alt=""
        width={80}
        height={80}
        className="rounded-full scale-[1.8] shadow-xl absolute top-1/2 -translate-y-1/2 -right-10"
      />
    </div>
  );
};

export default TrendingOrderItem;
