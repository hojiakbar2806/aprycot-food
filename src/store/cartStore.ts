import { StaticImageData } from "next/image";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductItem = {
  id: number;
  name: string;
  image: string | StaticImageData;
  rate?: number;
  price: number;
};

type CartItem = { quantity: number } & ProductItem;

type CartStore = {
  items: CartItem[];
  add: (item: ProductItem) => void;
  remove: (id: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      add: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          } else {
            return {
              items: [...state.items, { ...item, quantity: 1 }],
            };
          }
        }),

      remove: (id: number) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      clear: () => set({ items: [] }),
    }),
    {
      name: "cart",
    }
  )
);
