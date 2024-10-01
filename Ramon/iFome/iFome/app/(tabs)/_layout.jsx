import React from 'react';
import { CartProvider } from './CartContext'; // Usa o CartContext criado
import { Stack } from 'expo-router'; // Usa o stack do expo-router

const Layout = () => {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="Inicial" options={{ headerShown: false }} />
        <Stack.Screen name="Carrinho" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
};

export default Layout;
