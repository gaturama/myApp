import { useState } from "react";
import { View } from "react-native";
import styles from "../config/styles";
import { Image } from "expo-image";
import { Text, TextInput, Button } from 'react-native-paper';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../config/InitialApp.js'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, senha);
            console.log(user);
            navigation.navigate("HomeScreen");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    source={require("../assets/duck.png")}
                    style={{
                        width: 65,
                        height: 65,
                        alignSelf: "center",
                    }}
                />
                <Text variant="headlineLarge" style={styles.selfCenter}>
                    Welcome to the Duck's Page
                </Text>

                <TextInput
                    label="Email" //aleatoria@gmail.com
                    mode="outlined"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                    }}
                />
                <TextInput
                    label="Senha"//123456
                    mode="outlined"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
                <Button
                    style={{
                        marginTop: 10,
                        maxWidth: 130,
                        alignSelf: "center",
                        backgroundColor: "white"
                    }}
                    onPress={() => navigation.navigate("CadastroScreen")}
                >
                    Cadastre-se
                </Button>
                <Button
                    mode="outlined"
                    style={{
                        marginTop: 10,
                        maxWidth: 100,
                        alignSelf: "flex-end",
                        backgroundColor: "white"
                    }}
                    onPress={login}
                >
                    Entrar
                </Button>
            </View>
        </View>
    );
}
