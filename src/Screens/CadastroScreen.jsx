import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth, { db } from "../config/InitialApp";
import { doc, setDoc } from "firebase/firestore";
import { View } from "react-native";
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
                name: name,
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
                <Image
                    source={require("../assets/duck.png")}
                    style={{
                        width: 65,
                        height: 65,
                        alignSelf: "center",
                    }}

                />
                <Text style={styles.selfCenter}>
                    Cadastre-se
                </Text>

                <TextInput
                    label="Nome"
                    mode="outlined"
                    value={name}
                    onChangeText={setName}

                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                    }}
                />

                <TextInput
                    label="Email"
                    mode="outlined"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}

                    style={{
                        marginBottom: 10,
                    }}
                />

                <TextInput
                    label="Senha"
                    mode="outlined"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                    style={{
                        marginBottom: 5,
                    }}
                />

                <Button
                    mode="outlined"
                    style={{
                        marginTop: 10,
                        maxWidth: 150,
                        alignSelf: "flex-end",
                        backgroundColor: "white",
                    }}

                    onPress={() => {
                        try{ 
                            cadastroUsuario()
                            console.error('Usuário cadastrado')
                            navigation.navigate("LoginScreen")
                        }catch (error){
                            console.error(error)
                        }
                    }}
                >
                    Cadastrar
                </Button>
            </View>
        </View>
    );
}