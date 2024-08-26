import React from "react";
import { StyleSheet, Text, View, Flatlist } from 'react-native';


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },   
});


const Item = ({ title, feito }) => (
  <View style={[styles.item, feito ? styles.doneItem : styles.notDoneItem]}>
      <Text style={feito ? styles.doneTitle : styles.title}>{title}</Text>
  </View>
);

export default function listatarefa(){
 const TAREFAS = [
  {id: '1', title: 'Ain Nobru', feito: false}       
];   
    return(
        <View style={styles.container}>
          <Text>Lista de tarefas</Text>
            
        </View>
    );
}