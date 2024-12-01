"use client";

import React from "react";
import CartItem from "../common/cart/cartItem";
import RightSectionHeader from "../common/rightSectionHeader";
import { useCartStore } from "@/store/cartStore";

const CartSection = () => {
  const cart = useCartStore((state) => state.items);
  return (
    <div className="w-[35%] bg-white rounded-2xl p-6 flex flex-col items-center gap-5">
      <RightSectionHeader title="Your Cart" path="/" />
      <div className="w-full max-h-[560px] overflow-y-auto flex  flex-col gap-10 pt-4 pl-5 mb-1 ">
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <button className="py-4 px-8 bg-primary text-white rounded-full">
        Checkout
      </button>
    </div>
  );
};

export default CartSection;
