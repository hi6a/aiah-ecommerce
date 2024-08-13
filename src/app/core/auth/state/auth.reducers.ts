import { createReducer, on } from "@ngrx/store";
import { login} from "./auth.actions";
import { ILoginRequest } from "../models/auth.model";
import { Token } from "@angular/compiler";
import { IUser } from "../models/user.model";
import * as AuthActions from "./auth.actions"

export interface AuthState{
  // user: IUser | undefined;
  email: string | undefined;
  token: string | undefined;
}

export const initialAuthState: AuthState = {
  email: undefined,
  token: undefined
}

export const authReducer = createReducer(

  initialAuthState,

  on(AuthActions.login, (state, action) => {
      return {
          email: action.email,
          token: action.token
      }
  })
);

// export interface ILoginState{
//   isloggedIn: boolean;
//   User : {
//     email: string;
//     token: string;
//   }
//   error: string;
// }


// export const initialState: ILoginState ={
//   isloggedIn : false,
//   User: {
//     email: 'initial email',
//     token: 'initial token',
//   },
//   error: 'initial error',
// };


// export const authReducer = createReducer(
//   initialState,
//   on(loginSuccess,(state = initialState, {loginRes,username})=> ({
//     ...state,
//     isloggedIn: true,
//     User: {
//       email: username,
//       token: loginRes.Login.AccessToken,
  
//     },

//     error: 'no error',
//   } )),
//   on(loginFailure, (state= initialState, {error}) => ({
//     ...state,
//     error:error,
//   }))

// );


// export interface ISignupState{
//   isSignedUp: boolean;
//   User: {
//     fName: string;
//     lName: string;
//     email: string;
//     token: string;
//   }
//   error: string;
// }