import { User } from "./users";

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    Users: User[],
    screen: Screens
}

export enum Screens{
    REGISTER = "REGISTER",
    DASHBOARD = "DASHBOARD",
    PROFILE = "PROFILE",
}

export enum NavigationActions{
    "NAVIGATE"="NAVIGATE",
}

export interface NavigationAction{
    action: NavigationActions.NAVIGATE;
    payload: Screens;
}

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "REGISTER" = "REGISTER",
    "LOGOUT" = "LOGOUT",
    "PROFILE" = "PROFILE",
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

export type Actions = LogInAction | LogOutAction | RegisterAction | NavigationAction;