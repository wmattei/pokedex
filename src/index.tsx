import 'react-native-gesture-handler';

import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes';
import { lightTheme } from './theme';

export default function App(): JSX.Element {
  return (
    <PaperProvider theme={lightTheme}>
      <Routes />
    </PaperProvider>
  );
}
