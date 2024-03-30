
import { View } from "react-native";
import styles from './../config/styles';
import { Avatar, Button, Card, Text} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function HomeScreen() {
    return (
        <View styles={styles.container}> 

            <Card style={styles.justify}>
                {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
                <Card.Content>
                    <Text variant="titleLarge">First cap</Text>
                    <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700'}} />
            </Card>
        </View>
        
    )
}