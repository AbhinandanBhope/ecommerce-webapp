import React, { createContext, useContext, useState } from 'react';

export interface CartItem {
  id?: number | string;
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addCartItem: (item: any) => void;
  removeCartItem: (index: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 101, title: "Album 1", price: 12.99, quantity: 1 },
    { id: 102, title: "Album 2", price: 9.99, quantity: 2 },
  ]);

  const addCartItem = (newItem: any) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => (item.id && newItem.id && item.id === newItem.id) || (item.title === newItem.title)
      );
      if (existingItem) {
        return prev.map((item) =>
          ((item.id && newItem.id && item.id === newItem.id) || (item.title === newItem.title))
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeCartItem = (indexToRemove: number) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <CartContext.Provider value={{ cartItems, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
