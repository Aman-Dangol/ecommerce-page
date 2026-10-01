// store/useStore.ts
import { Product } from "@/interfaces/product.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartProduct {
  id: Product["id"];
  amount: number;
}

interface CartStore {
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  removeProduct: (productId: CartProduct["id"]) => void;
  updateProduct: (product: CartProduct) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      products: [],

      addProduct: (data) => {
        if (!data) return;
        set((state) => {
          const exists = state.products.some((item) => item.id === data.id);
          return {
            products: exists
              ? state.products.map((item) =>
                  item.id === data.id
                    ? { ...item, amount: item.amount + data.amount }
                    : item,
                )
              : [...state.products, data],
          };
        });
      },

      removeProduct: (productId) => {
        set((state) => ({
          products: state.products.filter((item) => item.id !== productId),
        }));
      },

      updateProduct: (product) => {
        set((state) => ({
          products: state.products.map((item) =>
            item.id === product.id ? { ...item, amount: product.amount } : item,
          ),
        }));
      },
    }),
    {
      name: "my-cart",
    },
  ),
);
