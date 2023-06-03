import { Actions, AppState, UserActions, NavigationActions, PostActions, FriendsActions } from "../types/store";

export const reducer = (Action: Actions, State: AppState): AppState => {
    const { action, payload } = Action; 

    switch (action) {
        case UserActions.LOGIN:
            State.user = payload
            return State
            
        case UserActions.REGISTER:
            State.user = payload
            return State 

        case UserActions.LOGOUT: 
            return {
                ...State , user:{
                    id: "",
                    userName: "",
                    email: "",
                    password: "",
                    img: "",
                }
            }

        case UserActions.EDIT:
            State.user = payload
            return State 
        

        case NavigationActions.NAVIGATE:
            State.screen = payload
            return State
            

        case PostActions.ADD_POST:
            State.posts = [...State.posts, payload]
            return State
        
        case PostActions.GET_POSTS:
            State.posts = payload
            return State


        case PostActions.ADD_FAVORITE:
            State.favorites = [...State.favorites, payload]
            return State
            
        case PostActions.GET_FAVORITES:
            State.favorites = payload
            return State

        
        case FriendsActions.ADD_FRIEND:
            State.friends = [...State.friends, payload]
            return State
            
        case FriendsActions.GET_FRIENDS:
            State.friends = payload
            return State
    
        default:
            return State;
    }
}