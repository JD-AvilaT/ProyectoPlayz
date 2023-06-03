import { Post } from "../types/post"
import {  Actions, UserActions, PostActions, NavigationActions, FriendsActions, LogInAction, LogOutAction } from "../types/store"
import { User } from "../types/users"
import firebase from "../utils/firebase"

export const Navigate = (screen:Screen) =>{
    return{
        action: NavigationActions.NAVIGATE,
        payload:screen,
    }
}

export const LogIn = async (user:User) =>{

    await firebase.loginUser(user)

    return{
        action: UserActions.LOGIN,
        payload: user,
    }
}

export const Register = async (user:User) =>{

    await firebase.registerUser(user)
    await firebase.AddUserDB(user)

    return{
        action: UserActions.REGISTER,
        payload: user,
    }
}

export const LogOut =  ():LogOutAction =>{

    return{
        action: UserActions.LOGOUT,
        payload: undefined,
    }
}

export const Edit = async (user:User) =>{

    await firebase.loginUser(user)

    return{
        action: UserActions.EDIT,
        payload: user,
    }
}


export const AddPost = async (post:Post): Promise<Actions> =>{

    await firebase.AddPostDB(post)

    return{
        action:PostActions.ADD_POST,
        payload: post,
    }
}

export const GetPosts = async (): Promise<Actions> =>{

    const posts = await firebase.GetPostsDB()

    return{
        action:PostActions.GET_POSTS,
        payload: posts,
    }
}


export const AddFavorite = async (post:Post): Promise<Actions> =>{

    await firebase.AddFavoriteDB(post)

    return{
        action:PostActions.ADD_FAVORITE,
        payload: post,
    }
}

export const GetFavorites = async (): Promise<Actions> =>{

    const posts = await firebase.GetFavoritesDB()

    return{
        action:PostActions.GET_FAVORITES,
        payload: posts,
    }
}


export const AddFriend = async (friend:User): Promise<Actions> =>{

    await firebase.AddFriendDB(friend)

    return{
        action:FriendsActions.ADD_FRIEND,
        payload: friend,
    }
}

export const GetFriends = async (): Promise<Actions> =>{

    const friends = await firebase.GetFriendsDB()

    return{
        action:FriendsActions.GET_FRIENDS,
        payload: friends,
    }
}
