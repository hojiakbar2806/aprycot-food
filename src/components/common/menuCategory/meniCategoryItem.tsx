import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type MenuCategoryItemProps = {
  id: number;
  name: string;
  image: StaticImageData | string;
  path?: string;
};

const MenuCategoryItem: React.FC<MenuCategoryItemProps> = (item) => {
  return (
    <div className="snap-start group flex flex-shrink-0 flex-col gap-7 p-8 bg-white items-center shadow-md rounded-3xl hover:bg-primary transition">
      <Image
        src={item.image}
        alt={item.name}
        width={64}
        height={64}
        className=""
      />
      <h1 className="group-hover:text-white font-bold transition">
        {item.name}
      </h1>
      <span
        className="h-px w-full bg-primary transition
        group-hover:bg-white"
      ></span>
      <button
        className="p-1 bg-primary rounded-full text-white transition
        group-hover:bg-white group-hover:text-primary"
      >
        <ChevronRight size={15} />
      </button>
    </div>
  );
};

export default MenuCategoryItem;
