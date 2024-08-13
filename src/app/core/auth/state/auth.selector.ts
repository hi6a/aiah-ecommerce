import { createFeatureSelector,createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducers";
// import { AppState } from "./app.state";
// import { ILoginState } from "./auth.reducers";


// export const selectLoginState = (state: AppState) => state.userAuth;

// export const selectUser = createSelector(
//   selectLoginState,
//   (state: ILoginState)=> 
//     state.User
  
// )

export const selectAuthstate = createFeatureSelector<AuthState>("auth");