import * as React from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes';
import { AuthProvider } from './store/auth/AuthContext';
import { lightTheme } from './theme';

export default function App(): JSX.Element {
  return (
    <AuthProvider>
      <PaperProvider theme={lightTheme}>
        <Routes />
      </PaperProvider>
    </AuthProvider>
  );
}
