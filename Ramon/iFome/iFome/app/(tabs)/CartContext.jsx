import React, { createContext, useContext, useState } from 'react';

// Cria o contexto do Carrinho
const CartContext = createContext();

// Hook para usar o contexto do carrinho
export const useCart = () => useContext(CartContext);

// Provedor do contexto do Carrinho
export const CartProvider = ({ children }) => {
  const [ItensCarrinho, setItensCarrinho] = useState([]);

  // Função para adicionar itens ao carrinho
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

  // Função para limpar o carrinho
  const clearCart = () => {
    setItensCarrinho([]);
  };

  return (
    <CartContext.Provider value={{ ItensCarrinho, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
