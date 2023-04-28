export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    user: {
        userName: string,
        email: string,
        password: string,
    }
}

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "REGISTER" = "REGISTER",
    "LOGOUT" = "LOGOUT",
}

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: Pick<AppState, "user">
}

export interface LogOutAction {
    action: AuthActions.LOGOUT,
    payload: void
}

export interface RegisterAction {
    action: AuthActions.REGISTER,
    payload: Pick<AppState, "user">
}

export type Actions = LogInAction | LogOutAction | RegisterAction;