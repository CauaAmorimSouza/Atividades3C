import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from './CartContext';

function Cart() {
  const router = useRouter();
  const { ItensCarrinho } = useCart();

  const total = ItensCarrinho.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Carrinho</Text>
      </View>
      {ItensCarrinho.length > 0 ? (
        <>
          <FlatList
            data={ItensCarrinho}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text>{item.name} (x{item.quantity})</Text>
                <Text>R$ {(item.price * item.quantity).toFixed(2)}</Text>
              </View>
            )}
          />
          <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Finalizar Compra</Text>
          </Pressable>
        </>
      ) : (
        <Text style={styles.emptyCartText}>Seu carrinho está vazio</Text>
      )}
      <Pressable style={styles.button} onPress={() => router.push('./iFome')}>
        <Text style={styles.buttonText}>Voltar aos Produtos</Text>
      </Pressable>
    </View>
  );
}

export default Cart;


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
    cartItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 20,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#FF6347',
      paddingVertical: 15,
      borderRadius: 5,
      marginHorizontal: 20,
      marginBottom: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    emptyCartText: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: 20,
      color: '#666',
    },
  });
