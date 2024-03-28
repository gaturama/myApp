import { useState } from "react";
import { View } from "react-native";
import styles from "../config/styles";
import { Image } from "expo-image";
import { Text, TextInput, Button } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/InitialApp';



export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, email, senha);
            console.log(user);
            navigation.navigate("HomeScreen");
        }catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    
                    style={{ width: 50, height: 50, alignSelf: "center" }}
                />

                <Text variant="headlineLarge" style={styles.selfCenter}>
                 Login
                </Text>
            

                <TextInput
                    label="Email"
                    mode="outlined"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    label="Senha"
                    mode="outlined"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
                <Button onPress={() => navigation.navigate("CadastroScreen")}>
                    Cadastre-se
                </Button>
                <Button
                    mode="outlined"
                    style={{
                        marginTop: 10,
                        maxWidth: 100,
                        alignSelf: "flex-end",
                    }}
                    onPress={login}
                >
                    Entrar
                </Button>
            </View>
        </View>
    );
}
