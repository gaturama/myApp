
import { View } from "react-native";
import styles from './../config/styles';
import { Card, Text } from 'react-native-paper';
import { ScrollView } from "react-native-web";

export default function HomeScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Card style={styles.justify}>
                    <Card.Content>
                        <Text variant="titleLarge">First cap</Text>
                        <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                </Card>
                <Card style={styles.justify}>
                    <Card.Content>
                        <Text variant="titleLarge">First cap</Text>
                        <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                </Card>
            </View>
        </ScrollView>
    )
}