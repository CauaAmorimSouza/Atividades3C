import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';

export default function Home() {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const loadMemories = async () => {
      try {
        const storedMemories = await AsyncStorage.getItem('memories');
        if (storedMemories) {
          setMemories(JSON.parse(storedMemories));
        }
      } catch (error) {
        console.log('Erro ao carregar memórias: ', error);
      }
    };
    loadMemories();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memórias</Text>
      <FlatList
        data={memories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.memoryItem}>{item}</Text>}
      />
      <Link href="/Nova-Memoria" style={styles.button}>
        <Text style={styles.buttonText}>Memória Nova</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  memoryItem: {
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});