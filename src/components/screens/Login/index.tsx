import * as React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { AuthApi } from '../../../api/auth/index';
import { AuthActions } from '../../../store/auth/AuthContext';
import { useAuth } from '../../../store/auth/useAuth';
import { fullWidth } from '../../../theme/utils';
import { ContextAction } from '../../../types';
import { IUser } from '../../../types/user';
import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import Auth from '../../templates/Auth';
import { ACTIONS, LoginState, reducer } from './reducer';
import style from './style';

const initialState: LoginState = {
  email: '',
  password: '',
  error: '',
  loading: false,
};

export default function Login() {
  const theme = useTheme();
  const themedStyle = style(theme);
  const { dispatch: authDispatch } = useAuth();
  const [state, dispatch] = React.useReducer<
    React.Reducer<LoginState, ContextAction<string>>
  >(reducer, initialState);

  const login = () => {
    if (!state.email || !state.password || state.loading) return;
    dispatch({ type: ACTIONS.SUBMIT });
    AuthApi.login(state.email, state.password)
      .then((result: { token: string; user: IUser }) => {
        dispatch({ type: ACTIONS.SUBMIT_SUCCESS });
        authDispatch({ type: AuthActions.SET_USER, payload: result.user });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.SUBMIT_FAIL, payload: err });
      });
  };

  return (
    <Auth>
      <View style={[fullWidth.main, themedStyle.container]}>
        <Text style={themedStyle.welcome}>Bem-vindo</Text>
        <TextField
          onChangeText={(text) =>
            dispatch({ type: ACTIONS.EMAIL_CHANGED, payload: text })
          }
          type="email"
          label="Email"
          mode="outlined"
        />
        <TextField
          onChangeText={(text) =>
            dispatch({ type: ACTIONS.PASSWORD_CHANGED, payload: text })
          }
          type="password"
          label="Password"
          mode="outlined"
        />
        <Button
          disabled={!state.email || !state.password}
          loading={state.loading}
          onPress={login}
          title={'Login'}
        />

        <Text style={themedStyle.error}>{state.error}</Text>
        <Text style={themedStyle.caption}>
          Essa aplicação foi desenvolvida para o processo seletivo da empresa
          Totvs, e não tem nenhum fim comercial.
        </Text>
      </View>
    </Auth>
  );
}
