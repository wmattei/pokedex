import * as React from 'react';
import { ContextAction } from '../../types';
import { IUser } from '../../types/user';

export type AuthState = {
  user?: IUser;
};

const AuthContext = React.createContext<{
  state: AuthState;
  dispatch: React.Dispatch<ContextAction<IUser>>;
}>({ state: {}, dispatch: () => null });

export enum AuthActions {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}

const authReducer = (state: AuthState, action: ContextAction<IUser>) => {
  switch (action.type) {
    case AuthActions.SET_USER:
      return { ...state, user: action.payload };
    case AuthActions.LOGOUT:
      return { ...state, user: undefined };
    default:
      return state;
  }
};

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, {});

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
