import { User as FirebaseAuthUser } from 'firebase/auth';

interface AuthState {
  user: FirebaseAuthUser | null;
}

interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS';
  payload: FirebaseAuthUser;
}

interface LogoutSuccessAction {
  type: 'LOGOUT_SUCCESS';
}

type AuthAction = LoginSuccessAction | LogoutSuccessAction;

const initialState = {
  user: null,
}

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        user: null,
      }
    default:
      return state;
  }
}
export default authReducer;