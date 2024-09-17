import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default Seletor = () => {
  const [pokemon, setPokemon] = useState('');
  const [listaPokemons, setListaPokemons] = useState([]);
  const [pokemonsIniciais, setPokemonsIniciais] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((response) => response.json())
      .then((dados) => setTipos(dados.results))
      .catch((error) => console.error('Erro ao buscar os tipos:', error));

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((dados) => {
        setListaPokemons(dados.results);
        setPokemonsIniciais(dados.results);
      })
      .catch((error) => console.error('Erro ao buscar os pokémons:', error));
  }, []);

  useEffect(() => {
    if (tipoSelecionado) {
      fetch(`https://pokeapi.co/api/v2/type/${tipoSelecionado}`)
        .then((response) => response.json())
        .then((dados) => {
          const pokemonsPorTipo = dados.pokemon.map((p) => p.pokemon.name);

          const pokemonsFiltrados = pokemonsIniciais.filter((pokemon) =>
            pokemonsPorTipo.includes(pokemon.name)
          );

          setListaPokemons(pokemonsFiltrados);
        })
        .catch((error) =>
          console.error('Erro ao buscar os pokémons por tipo:', error)
        );
    } else {
      setListaPokemons(pokemonsIniciais);
    }
  }, [tipoSelecionado, pokemonsIniciais]);

  const image = { uri: "https://i.redd.it/74crvhb3vyn61.png" };

  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione um Tipo de Pokémon</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={tipoSelecionado}
            onValueChange={(itemValue) => setTipoSelecionado(itemValue)}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Selecione um Tipo" value="" />
            {tipos.map((tipo, index) => (
              <Picker.Item key={index} label={tipo.name} value={tipo.name} />
            ))}
          </Picker>
        </View>

        <Text style={styles.title}>Selecione um Pokémon</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={pokemon}
            onValueChange={(itemValue) => setPokemon(itemValue)}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Selecione um Pokémon" value="" />
            {listaPokemons.map((item, index) => (
              <Picker.Item key={index} label={item.name} value={item.name} />
            ))}
          </Picker>
        </View>

        {pokemon ? (
          <Text style={styles.selectedPokemon}>Você selecionou {pokemon}</Text>
        ) : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta a imagem de fundo
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  pickerContainer: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 50,
  },
  pickerItem: {
    fontSize: 16,
  },
  selectedPokemon: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
