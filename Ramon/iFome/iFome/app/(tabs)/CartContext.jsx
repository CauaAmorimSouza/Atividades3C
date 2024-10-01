import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [ItensCarrinho, setItensCarrinho] = useState([]);

  const addToCart = (product) => {
    setItensCarrinho((prevCart) => {
      const itemExistente = prevCart.find((item) => item.id === product.id);
      if (itemExistente) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setItensCarrinho([]);
  };

  return (
    <CartContext.Provider value={{ ItensCarrinho, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
