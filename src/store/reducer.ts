import { Actions, AppState, AuthActions } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction; 

    switch (action) {
        case AuthActions.REGISTER:
            return {
                ...currentState,
                user: payload.user
            }
    }

    switch (action) {
        case AuthActions.LOGIN:
            return {
                ...currentState,
                user: payload.user
            }

        case AuthActions.LOGOUT:
            return {
                ...currentState,
                user: {
                    userName: "",
                    email: "",
                    password: "",
                }
            }
            
        default:
            return currentState;
    }
}