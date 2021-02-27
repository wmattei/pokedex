import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { APP_SCREENS } from './app-screens';
import Login from '../components/screens/Login';
import PokemonList from '../components/screens/PokemonList';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const StackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen name={APP_SCREENS.POKEMON.LIST} component={PokemonList} />
  </Stack.Navigator>
);

const AuthScreens = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name={APP_SCREENS.AUTH.LOGIN} component={Login} />
  </AuthStack.Navigator>
);

export default function Routes() {
  const [isLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn && <StackScreens />}
      {!isLoggedIn && <AuthScreens />}
    </NavigationContainer>
  );
}
