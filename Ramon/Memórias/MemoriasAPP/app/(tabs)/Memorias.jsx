import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
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

  const deleteMemory = async (index) => {
    try {
      const storedMemories = await AsyncStorage.getItem('memories');
      const memories = storedMemories ? JSON.parse(storedMemories) : [];
      memories.splice(index, 1);
      await AsyncStorage.setItem('memories', JSON.stringify(memories));
      setMemories(memories);
    } catch (error) {
      console.log('Erro ao deletar memória: ', error);
    }
  };

  const renderMemory = ({ item, index }) => (
    <View style={styles.memoryContainer}>
      {item.image && <Image source={{ uri: item.image }} style={styles.memoryImage} />}
      <Text style={styles.memoryText}>{item.text}</Text>
      <Button title="Deletar" onPress={() => deleteMemory(index)} color="#FF5733" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memórias</Text>
      <FlatList
        data={memories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMemory}
        contentContainerStyle={styles.listContainer}
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
    backgroundColor: '#E8F0FE', // Cor de fundo suave
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  memoryContainer: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  memoryImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  memoryText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  listContainer: {
    paddingBottom: 20,
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
    fontSize: 18,
  },
});
