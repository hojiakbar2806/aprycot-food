import { Trash, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type CartItemProps = {
  name: string;
  image: string | StaticImageData;
  price: number;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = (item) => {
  return (
    <div className="flex gap-4 border justify-between bg-white rounded-full">
      <Image
        src={item.image}
        alt={item.name}
        width={80}
        height={80}
        className="rounded-full object-contain scale-[1.5]"
      />
      <div className="w-full flex items-center py-4 px-6">
        <div className="flex-1 space-y-2">
          <h1 className="font-semibold">{item.name}</h1>
          <p className="flex items-center gap-px">
            <X size={15} stroke="red" />
            {item.quantity}
          </p>
        </div>

        <div className="space-y-2">
          <button >
            <Trash stroke="red"/>
          </button>
          <p>${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
