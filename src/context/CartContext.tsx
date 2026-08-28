import {
    createContext,
    useState,
} from "react";

import type { ReactNode } from "react";

import type { Product } from "../types/product";

export interface CartItem extends Product {
    quantity: number;
}

export interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    total: number;
}

export const CartContext =
    createContext<CartContextType | undefined>(
        undefined
    );

export function CartProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setItems((current) => {
            const existing = current.find(
                (item) => item.id === product.id
            );

            if (existing) {
                return current.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity + 1,
                          }
                        : item
                );
            }

            return [
                ...current,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };

    const removeFromCart = (productId: string) => {
        setItems((current) =>
            current.filter(
                (item) => item.id !== productId
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const total = items.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                clearCart,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}