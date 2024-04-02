import { View } from "react-native";
import styles from './../config/styles';
import { Button, Card, Text } from 'react-native-paper';
import { ScrollView } from "react-native";


export default function HomeScreen({ navigation }) {
    const handleBackToLogin = () => {
        navigation.navigate("LoginScreen");
    };

    return (            
            <ScrollView>
                <Text variant="titleLarge"
                    style={{
                        backgroundColor: "#000000",
                        color: "white",
                        fontSize: 17,
                        textAlign: "center",
                    }}
                >Duck's Page - Os patos mais gente boa do Brasil</Text>
                <View style={styles.container}>
                    <Card style={styles.justify}>
                        <Card.Content>
                            <Text variant="titleLarge">Pato da Coca</Text>
                            <Text variant="bodyMedium"
                                style={{
                                    marginBottom: 10,
                                }}
                            >Para ele, não há nada melhor do que um gole refrescante de Coca-Cola para alegrar o dia.</Text>
                        </Card.Content>
                        <Card.Cover source={require("../assets/pato-coca.jpeg")}
                            style={{
                                width: 300,
                                height: 312,
                            }}
                        />
                    </Card>
                    <Card style={styles.justify}>
                        <Card.Content>
                            <Text variant="titleLarge">Pato do Rock</Text>
                            <Text variant="bodyMedium"
                                style={{
                                    marginBottom: 10,
                                }}
                            >Em vez de grasnidos, ele solta gritos de rock'n'roll e bate suas asas no ritmo da música.</Text>
                        </Card.Content>
                        <Card.Cover source={require("../assets/pato-rock.jpeg")}
                            style={{
                                width: 300,
                                height: 312,
                            }}
                        />
                    </Card>
                    <Card style={styles.justify}>
                        <Card.Content>
                            <Text variant="titleLarge">Pato Tímido</Text>
                            <Text variant="bodyMedium"
                                style={{
                                    marginBottom: 10,
                                }}
                            >Seu jeito tímido e reservado o faz evitar ser o centro das atenções</Text>
                        </Card.Content>
                        <Card.Cover source={require("../assets/pato-timido.jpg")}
                            style={{
                                width: 300,
                                height: 312,
                            }}
                        />
                    </Card>

                    <Button title="Voltar para a tela de login" onPress={handleBackToLogin}
                        style={{
                            marginTop: 10,
                            width: 100,
                            alignSelf: "center",
                            backgroundColor: "white"
                        }}
                    >Voltar</Button>
                </View>
            </ScrollView>
    )
}