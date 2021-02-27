import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { APP_SCREENS } from './app-screens';
import Login from '../components/screens/Login';
import PokemonList from '../components/screens/PokemonList';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={APP_SCREENS.AUTH.LOGIN} component={Login} />
        <Stack.Screen name={APP_SCREENS.POKEMON.LIST} component={PokemonList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
