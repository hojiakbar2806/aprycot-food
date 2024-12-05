"use client";

import React from "react";
import {useCartStore} from "@/store/cartStore";
import {ShoppingBasket} from "lucide-react";
import RightSectionHeader from "@/components/common/rightSectionHeader";
import {CartItem} from "@/components/common/cart/index";

const Cart = () => {
    const cart = useCartStore((state) => state.items);
    return (
        <div className="w-[35%] bg-white rounded-2xl p-6 flex flex-col items-center  gap-5 shadow-md">
            <RightSectionHeader title="Your Cart" path="/"/>
            <div className="w-full max-h-[560px] h-full overflow-y-auto flex  flex-col gap-5 mb-1 ">
                {cart.length > 0 ? (
                    cart.map((item) => <CartItem key={item.id} {...item} />)
                ) : (
                    <div className="h-full flex flex-col justify-center items-center gap-4 text-gray-600">
                        <ShoppingBasket size={100}/>
                        <p className="text-center ">Your cart is empty</p>
                    </div>
                )}
                {cart.length > 0 && (
                    <div className="w-full flex justify-center sticky bottom-0 bg-white p-2">
                        <button className="bg-primary text-white py-3 px-6 text-lg rounded-full">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
