import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const cartItems = [
  { id: '1', name: 'Big Mac', price: 32.5 },
  { id: '2', name: 'Coxinha do Jefferson', price: 4.5 },
];

export default function Cart() {
  const router = useRouter();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Carrinho</Text>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>R$ {item.price.toFixed(2)}</Text>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
      <Pressable style={styles.button} onPress={() => {/* Finalizar compra logic */}}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push('./iFome')}>
        <Text style={styles.buttonText}>Voltar aos Produtos</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#f5f5f5',
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
  pressed: {
    opacity: 0.7,
  },
});
