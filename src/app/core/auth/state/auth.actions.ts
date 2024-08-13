import { createAction, props } from "@ngrx/store";
import { ILoginRequest, ILoginResponse } from "../models/auth.model";


export const login = createAction(
  '[Login Component] Login',
  props<{email:string, token:string}>()
);

export const logout = createAction(
  '[Nav Component] Logout'
);


