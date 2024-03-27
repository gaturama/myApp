import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"
import LoginScreen from '../Screens/LoginScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    title: "Login",
                    headerShown: false,
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}