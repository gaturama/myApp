import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"
import LoginScreen from '../Screens/LoginScreen';
import CadastroScreen from "../Screens/CadastroScreen";
import HomeScreen from "../Screens/HomeScreen";
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
                <Stack.Screen
                    name="CadastroScreen"
                    component={CadastroScreen}
                    options={{
                        title: "Cadastrar-se",
                    }}                
                />
                <Stack.Screen 
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title: "Página Inicial",
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}