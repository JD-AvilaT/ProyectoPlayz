import {  AuthActions,  LogInAction, LogOutAction, RegisterAction } from "../types/store"

export const Register = ({payload}: Pick<RegisterAction, "payload">): RegisterAction => {
    return {
        action: AuthActions.REGISTER,
        payload
    }
}

export const logOut = (): LogOutAction => {
    return {
        action: AuthActions.LOGOUT,
        payload: undefined
    }
}

export const logIn = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
    return {
        action: AuthActions.LOGIN,
        payload
    }
}

