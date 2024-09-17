import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const GameBox = ({ name, description, imageUrl }) => {
  return (
    <View style={styles.box}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,  // Largura da imagem
    height: 100, // Altura da imagem
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: '#555',
    textAlign: 'center',
  },
});

export default GameBox;
