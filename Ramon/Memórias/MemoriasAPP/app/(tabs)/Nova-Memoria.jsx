import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

export default function NovaMemoria() {
  const [newMemory, setNewMemory] = useState('');
  const [image, setImage] = useState(null);
  const router = useRouter();

  const addMemory = async () => {
    if (newMemory.trim() !== '') {
      try {
        const storedMemories = await AsyncStorage.getItem('memories');
        const memories = storedMemories ? JSON.parse(storedMemories) : [];
        const updatedMemories = [...memories, { text: newMemory, image }];
        await AsyncStorage.setItem('memories', JSON.stringify(updatedMemories));
        setNewMemory('');
        setImage(null);
        router.push('/Memorias');
      } catch (error) {
        console.log('Erro ao salvar memória: ', error);
      }
    }
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Você precisa permitir o acesso à galeria para adicionar uma imagem!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
      <Button title="Escolher Imagem" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      <Button title="Salvar Memória" onPress={addMemory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F0FE', // Cor de fundo suave
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
});
