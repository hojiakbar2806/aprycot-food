import React from "react";
import CartItem from "../common/cartItem";
import RightSectionHeader from "../common/rightSectionHeader";

const CartSection = () => {
  return (
    <div className="w-[35%] bg-white rounded-2xl p-6 flex flex-col items-center gap-5">
      <RightSectionHeader title="Your Cart" path="/" />
      <div className="w-full max-h-[560px] overflow-y-auto flex  flex-col gap-10 pt-4 pl-5 mb-1 ">
        <CartItem
          name="Mushroom Pizza"
          image="/images/products/mushroom-pizza.png"
          price={20}
          quantity={1}
        />
        <CartItem
          name="Mushroom Pizza"
          image="/images/products/mushroom-pizza.png"
          price={20}
          quantity={1}
        />
        <CartItem
          name="Mushroom Pizza"
          image="/images/products/mushroom-pizza.png"
          price={20}
          quantity={1}
        />
        <CartItem
          name="Mushroom Pizza"
          image="/images/products/mushroom-pizza.png"
          price={20}
          quantity={1}
        />
        <CartItem
          name="Mushroom Pizza"
          image="/images/products/mushroom-pizza.png"
          price={20}
          quantity={1}
        />
        <CartItem
          name="Mushroom Pizza"
          image="/images/products/mushroom-pizza.png"
          price={20}
          quantity={1}
        />
        <CartItem
          name="Mushroom Pizza"
          image="/images/products/mushroom-pizza.png"
          price={20}
          quantity={1}
        />
        <CartItem
          name="Mushroom Pizza"
          image="/images/products/mushroom-pizza.png"
          price={20}
          quantity={1}
        />
      </div>

      <button className="py-4 px-8 bg-primary text-white rounded-full">
        Checkout
      </button>
    </div>
  );
};

export default CartSection;
