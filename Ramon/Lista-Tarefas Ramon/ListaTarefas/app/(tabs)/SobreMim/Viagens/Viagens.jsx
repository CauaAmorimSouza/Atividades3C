import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const TravelScreen = () => {
  const travels = [
    {
      id: 1,
      location: 'Gramado',
      imageUri: 'https://www.abraceomundo.com/wp-content/uploads/2021/08/fotos-de-gramado.jpg',
      description: 'Na vez que eu fui ja era inverno e como la é muito mais frio que o habitual eu tive que aguentar uma temperatura de -2 graus. Mas, tudo la era muito bonito e tinha uma pegada "Medieval"',
    },
    {
      id: 2,
      location: 'Tubarão',
      imageUri: 'https://i.ytimg.com/vi/8fOhul3U_yc/maxresdefault.jpg',
      description: 'Fui com meu pai para tubarão para um evento onde apresentavam ideias de negócios, não vi muito do resto da cidade.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Viagens</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {travels.map((travel) => (
          <View key={travel.id} style={styles.travelBlock}>
            <Text style={styles.location}>{travel.location}</Text>
            <Image source={{ uri: travel.imageUri }} style={styles.image} />
            <Text style={styles.description}>{travel.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    height: 60,
    backgroundColor: '#9B1FE8',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  scrollContainer: {
    padding: 20,
  },
  travelBlock: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default TravelScreen;
