import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App(){
    const Ventilas = 'https://png.pngtree.com/png-vector/20230329/ourmid/pngtree-summer-electric-fan-desk-fan-white-png-image_6673261.png';

    return(
        <View style={styles.container}>
            <LinearGradient
            colors={['#6F4A95', 'transparent']}
            style={styles.background}
            />
                <Image
                style={styles.logo}
                source={{
                uri: Ventilas
                }}
                /> 
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c187ff'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
      },
    logo: {
        width: 250,
        height: 250,
        backgroundColor: 'transparent'
    },
});