import { ContextAction } from '../../../types';

export const ACTIONS = {
  EMAIL_CHANGED: 'EMAIL_CHANGED',
  PASSWORD_CHANGED: 'PASSWORD_CHANGED',
  SUBMIT: 'SUBMIT',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
  SUBMIT_FAIL: 'SUBMIT_FAIL',
};

export type LoginState = {
  email?: string;
  password?: string;
  loading?: boolean;
  error?: string;
};

export const reducer: React.Reducer<LoginState, ContextAction<string>> = (
  state,
  action
) => {
  switch (action.type) {
    case ACTIONS.EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case ACTIONS.PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case ACTIONS.SUBMIT:
      return { ...state, loading: true, error: '' };
    case ACTIONS.SUBMIT_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ACTIONS.SUBMIT_SUCCESS:
      return { ...state, loading: false, error: '' };
    default:
      return state;
  }
};
