import {View} from 'react-native';
import {Link} from 'expo-router'

export default function Listagem(){
    return(
        <View>
            <Link href="./AppBancario/Banco">Banco Santander</Link>
            <Link href="./Calculadora/Calculadora">Calculadora</Link>
            <Link href="./FlatList/FlatList">FlatList</Link>
            <Link href="./Login-Tela/TelaLogin">Tela de Login</Link>
            <Link href="./Pokemon/Pokemon">Seletor de Pokémons</Link>
            <Link href="./SplashScreen/splashscreen">SplashScreen</Link>
        </View>
    )
}