import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import { APP_SCREENS } from './app-screens';
import Login from '../components/screens/Login';
import PokemonList from '../components/screens/PokemonList';
import { useAuth } from '../store/auth/useAuth';
import { AuthActions } from '../store/auth/AuthContext';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const StackScreens = () => {
  const { dispatch } = useAuth();

  const logout = () => {
    dispatch({ type: AuthActions.LOGOUT });
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={APP_SCREENS.POKEMON.LIST}
        component={PokemonList}
        options={{
          headerRight: () => <IconButton icon="logout" onPress={logout} />,
        }}
      />
    </Stack.Navigator>
  );
};

const AuthScreens = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name={APP_SCREENS.AUTH.LOGIN} component={Login} />
  </AuthStack.Navigator>
);

export default function Routes() {
  const isLoggedIn = !!useAuth().state.user;

  return (
    <NavigationContainer>
      {isLoggedIn && <StackScreens />}
      {!isLoggedIn && <AuthScreens />}
    </NavigationContainer>
  );
}
