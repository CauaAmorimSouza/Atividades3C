import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
        padding: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        borderColor: '#d1d9e6',
        width: '100%',
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        backgroundColor: '#ffffff',
        elevation: 3,  // Adds a slight shadow for depth
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1E88E5',  // Changed to a shade of blue
        marginBottom: 30,
        textAlign: 'center',
    },
    PressableRegistro: {
        backgroundColor: '#1E88E5',  // Changed to a shade of blue
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '100%',
        alignItems: 'center',
        elevation: 3,  // Adds a slight shadow for depth
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
})

export default SignUp = () => {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    console.log(email)
    console.log(nome)
    console.log(senha)

    const registrarUsuario = async function(){
        if(!nome || !email || !senha){
            console.log('os parametros nome, email, senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name:nome, email:email, password:senha})
        })
        if(!resposta){
            console.log('erro')
        } else if(resposta.status == 200){
            console.log('usuário criado com sucesso')
        }else{
            console.log('ocorreu um erro')
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder='E-mail'
                />
                <TextInput
                style={styles.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder='Insira seu Nome'
                />
                <TextInput
                style={styles.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder='Senha'
                secureTextEntry={true}
                />
            </View>
            <Pressable style={styles.PressableRegistro} onPress={registrarUsuario}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>
        </SafeAreaView>
    )
}
