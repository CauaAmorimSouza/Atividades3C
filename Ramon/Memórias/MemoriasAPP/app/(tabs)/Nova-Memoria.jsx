import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function NovaMemoria() {
  const [newMemory, setNewMemory] = useState('');
  const router = useRouter();

  const addMemory = async () => {
    if (newMemory.trim() !== '') {
      try {
        const storedMemories = await AsyncStorage.getItem('memories');
        const memories = storedMemories ? JSON.parse(storedMemories) : [];
        const updatedMemories = [...memories, newMemory];
        await AsyncStorage.setItem('memories', JSON.stringify(updatedMemories));
        setNewMemory('');
        router.push('/Memorias'); 
      } catch (error) {
        console.log('Erro ao salvar memória: ', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma nova memória"
        value={newMemory}
        onChangeText={setNewMemory}
      />
      <Button title="Salvar Memória" onPress={addMemory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
});