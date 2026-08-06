import { NavigationContainer } from '@react-navigation/native';

// Importar as rotas de navegação
import AppRoutes from './appRoutes';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    );
}