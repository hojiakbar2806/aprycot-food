"use client";

import Rating from "@/components/common/rating";
import { useCartStore } from "@/store/cartStore";
import { Plus } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type MenuProductItemProps = {
  id: number;
  name: string;
  image: string | StaticImageData;
  rate: number;
  price: number;
};

const MenuProductItem: React.FC<MenuProductItemProps> = (item) => {
  const { add } = useCartStore();
  return (
    <div
      className="flex-1 min-w-[180px] flex flex-col items-start p-4 gap-4 bg-white shadow-md
        group hover:bg-primary hover:text-white  rounded-2xl transition"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={80}
        height={80}
        className="w-20 h-20 mx-auto scale-[1.8] -translate-y-8 shadow-xl rounded-full"
      />
      <h1 className="text-lg font-bold">{item.name}</h1>
      <Rating value={item.rate} />
      <div className="w-full flex justify-between items-center mt-8">
        <h1 className="text-primary font-bold">${item.price}</h1>
        <button
          className="p-1 bg-primary text-white rounded-full
          group-hover:bg-white group-hover:text-primary transition"
          onClick={() => add(item)}
        >
          <Plus size={15} />
        </button>
      </div>
    </div>
  );
};

export default MenuProductItem;
