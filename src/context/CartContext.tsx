"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };

  type CartContextType = {
    cart: CartItem[];
    addToCart: (
      item: Omit<CartItem, "quantity">
    ) => void;
    removeFromCart: (id: number) => void;
  };

const CartContext =
  createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart =
      localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  function addToCart(item: Omit<CartItem, "quantity">) {
    setCart((prev) => {
      const existingItem = prev.find(
        (p) => p.id === item.id
      );
  
      if (existingItem) {
        return prev.map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity: p.quantity + 1,
              }
            : p
        );
      }
  
      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(id: number) {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
}