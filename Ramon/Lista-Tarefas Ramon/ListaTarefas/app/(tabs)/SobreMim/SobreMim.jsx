import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sobre Mim</Text>
      </View>
      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://media.licdn.com/dms/image/D4D03AQFSRNU_314DTg/profile-displayphoto-shrink_200_200/0/1713798761869?e=2147483647&v=beta&t=AEIq8rpzWz-XP6PGSd1Y-OmmTymtwkSMUi8lj3O0MTA', 
        }}
      />
      <Text style={styles.name}>Cauã Amorim Souza</Text>
      <Text style={styles.description}>
        O objetivo de tudo é rir no final...
      </Text>
      <Link style={styles.games} href="./Jogos/Games">Jogos!!!</Link>
      <Link style={styles.games} href="./Viagens/Viagens">Viagens!!!</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#9B1FE8',
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
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 80,
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  games: {
    fontSize: 18,
    color: '#FFFFFF',
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#9B1FE8',
    textAlign: 'center',
    width: '35%', 
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;
