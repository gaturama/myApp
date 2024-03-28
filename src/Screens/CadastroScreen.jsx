import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth, { db } from "../config/InitialApp";
import { doc, setDoc } from "firebase/firestore";
import { View } from "native-base";
import styles from "../config/styles";
import { Image } from "expo-image";
import { Button, Text, TextInput } from "react-native-paper";


export default function CadastroScreen({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const cadastroUsuario = async () => {
        try {
            const usuario = await createUserWithEmailAndPassword(auth, email, senha);
            const uid = await usuario.user.uid;
            await setDoc(doc(db, "usuarios", uid), {
                name: nome,
                email: email,
            });

            navigation.navigate("LoginScreen");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text variant="headlineLarge" style={styles.selfCenter}>
                    Cadastre-se
                </Text>

                <TextInput
                    label="Nome"
                    mode="outlined"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    label="Email"
                    mode="outlined"
                    keyboardType="email-address"
                    value={email}
                    onChange={setEmail}
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

                    onPress={cadastroUsuario}
                >
                    Cadastrar
                </Button>
            </View>
        </View>
    );
}