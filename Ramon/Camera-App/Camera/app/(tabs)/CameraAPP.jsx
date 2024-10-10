import { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Linking from 'expo-linking';

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [ladoCamera, setLadoCamera] = useState('back');

    if (!permissao) {
        return <View />;
    }

    if (!permissao.granted) {
        return (
            <View style={styles.permissionContainer}>
                <Text style={styles.permissionText}>Você precisa da permissão para utilizar a câmera</Text>
                <Button
                    title="Pedir permissão"
                    onPress={pedirPermissao}
                    color="#FF6347"
                />
            </View>
        );
    }

    const inverterLadoCamera = () => {
        setLadoCamera(ladoCamera === 'back' ? 'front' : 'back');
    };

    const tirarFoto = async () => {
        const novaFoto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        setFoto(novaFoto);
        console.log(novaFoto);
    };

    const salvarFoto = async () => {
        const permissaoSalvar = await MediaLibrary.requestPermissionsAsync();
        if (permissaoSalvar.status === 'granted') {
            await MediaLibrary.saveToLibraryAsync(foto.uri);
        } else {
            alert('Min De permissão pra tirar foto pufavor');
        }
    };

    const onBarcodeScanned = (data) => {
        Linking.openURL(data.raw);
    };

    return (
        <View style={styles.container}>
            {foto ? (
                <View style={styles.imagePreviewContainer}>
                    <Image style={styles.image} source={{ uri: foto.uri }} />
                    <View style={styles.actionButtons}>
                        <Button title="Joga fora Issae" onPress={() => setFoto(null)} color="#FF6347" />
                        <Button title="Salvar Esta linda imagem" onPress={salvarFoto} color="#1E90FF" />
                    </View>
                </View>
            ) : (
                <CameraView
                    style={styles.camera}
                    facing={ladoCamera}
                    ref={cameraRef}
                    barcodeScannerSettings={{
                        barcodeTypes: ['qr'],
                    }}
                    onBarcodeScanned={onBarcodeScanned}
                >
                    <View style={styles.cameraButtonContainer}>
                        <Button title="Tirar Foto" onPress={tirarFoto} color="#FF6347" />
                        <Button title="Inverter Câmera" onPress={inverterLadoCamera} color="#1E90FF" />
                    </View>
                </CameraView>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    permissionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    permissionText: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 16,
        color: '#333',
    },
    camera: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    cameraButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    imagePreviewContainer: {
        flex: 1,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  'rgba(0, 0, 0, 0.5)',
    },
    image: {
        width: '90%',
        height: '70%',
        marginBottom: 20,
        borderRadius: 10,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
});