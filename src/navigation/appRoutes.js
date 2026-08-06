import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator 
        screenOptions={{
        headerShown: false
      }}
>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    );
}