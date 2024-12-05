import React from "react";
import {MenuProductItem} from "@/components/common/menuProduct/index";


const menuProducts = [
    {
        id: 1,
        name: "Spaghetti",
        image: "/images/products/Spaghetti.png",
        rate: 4.5,
        price: 12.99,
    },
    {
        id: 2,
        name: "Vegetable Pizza",
        image: "/images/products/Vegetable-pizza.png",
        rate: 4.5,
        price: 12.99,
    },
    {
        id: 3,
        name: "Mushroom Pizza",
        image: "/images/products/Mushroom-pizza.png",
        rate: 4.5,
        price: 12.99,
    },
    {
        id: 4,
        name: "Sweets",
        image: "/images/products/Sweets.png",
        rate: 4.5,
        price: 12.99,
    },
];


const MenuProduct: React.FC = () => {
    return (
        <div className="flex justify-between gap-6 pt-14 pb-2 overflow-x-auto">
            {menuProducts.map((item) => (
                <MenuProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    rate={item.rate}
                    price={item.price}
                />
            ))}
        </div>
    );
};

export default MenuProduct;
