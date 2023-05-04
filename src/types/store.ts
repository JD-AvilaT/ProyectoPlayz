import { User } from "./users";

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    Users: User[]
}

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "REGISTER" = "REGISTER",
    "LOGOUT" = "LOGOUT",
}

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: User
}

export interface LogOutAction {
    action: AuthActions.LOGOUT,
    payload: void
}

export interface RegisterAction {
    action: AuthActions.REGISTER,
    payload: User
}

export type Actions = LogInAction | LogOutAction | RegisterAction;