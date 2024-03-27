import { useState } from "react";
import { View } from "react-native";
import styles from "../config/styles";
import { Image } from "expo-image";
import { Text, TextInput, Button } from 'react-native-paper';


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    source={require("../assets/logo.png")}
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
                <Button
                    mode="outlined"
                    style={{
                        marginTop: 10,
                        maxWidth: 100,
                        alignSelf: "flex-end",
                    }}
                >
                    Entrar
                </Button>
            </View>
        </View>
    );
}
