import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useCart, CartProvider } from './CartContext'; 

const products = [
  { id: '1', name: 'Big Mac', price: 32.5, image: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br', description: 'McDonalds - Kobrasol' },
  { id: '2', name: 'Coxinha do Jefferson', price: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJYnk19-jrGFPClIRsq16Ni2KtX-xgqkJkA&s', description: 'Jeffin Lanches' },
  { id: '3', name: 'Hot Dog do Paulão', price: 14.2, image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/31/istock-143175178-1iuy9pef5iz3q.jpg', description: 'Paulão Hot Dog' },
];

function Home() {
  const { ItensCarrinho, addToCart } = useCart();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>iFome - Produtos</Text>
      </View>
      {products.map((item) => (
        <View key={item.id} style={styles.produtoContainer}>
          <Image source={{ uri: item.image }} style={styles.produtoImage} />
          <View style={styles.produtoDetails}>
            <Text style={styles.produtoName}>{item.name}</Text>
            <Text style={styles.produtoDescription}>{item.description}</Text>
            <Text style={styles.produtoPrice}>R$ {item.price.toFixed(2)}</Text>
            <Pressable style={styles.button} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Comprar</Text>
            </Pressable>
          </View>
        </View>
      ))}
      <Link href="./Carrinho" style={styles.Carrinho}>
        Ver Carrinho ({ItensCarrinho.reduce((total, item) => total + item.quantity, 0)} itens)
      </Link>
    </View>
  );
}

export default function iFome() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 80,
      backgroundColor: '#f5f5f5',
    },
    headerContainer: {
      width: '100%',
      backgroundColor: '#AC1121',
      paddingVertical: 20,
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      zIndex: 1,
    },
    header: {
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold',
    },
    produtoContainer: {
      flexDirection: 'row',
      marginVertical: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    produtoImage: {
      width: 80,
      height: 80,
      borderRadius: 10,
    },
    produtoDetails: {
      marginLeft: 20,
      justifyContent: 'flex-start',
      flex: 1,
    },
    produtoName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    produtoDescription: {
      fontSize: 14,
      color: '#666',
    },
    produtoPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    button: {
      backgroundColor: '#2196f3',
      paddingVertical: 8,
      borderRadius: 5,
      marginTop: 5,
      alignItems: 'center',
      width: '100%',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    Carrinho: {
      alignItems: 'center',
      fontSize: 18,
      color: '#FFFFFF',
      marginTop: 20,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      backgroundColor: '#FF6347',
      textAlign: 'center',
      width: '100%',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
  });
 