import { Post } from "../types/post"
import {  Actions, UserActions, PostActions, NavigationActions, FriendsActions, LogInAction, LogOutAction, AddFavoriteAction, AddFriendAction, NavigationAction, Screens, RegisterAction, EditAction, GetFriendsAction, GetFavoritesAction, GetPostsAction, AddPostAction } from "../types/store"
import { User } from "../types/users"
import firebase from "../utils/firebase"

export const Navigate = (screen:Screens): NavigationAction =>{
    return{
        action: NavigationActions.NAVIGATE,
        payload: screen,
    }
}

export const LogIn = async (user:User): Promise<LogInAction> =>{

    await firebase.loginUser(user)

    return{
        action: UserActions.LOGIN,
        payload: user,
    }
}

export const Register = async (user:User): Promise<RegisterAction> =>{

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

export const Edit = async (user:User): Promise<EditAction> =>{

    await firebase.loginUser(user)

    return{
        action: UserActions.EDIT,
        payload: user,
    }
}


export const AddPost = async (post:Post): Promise<AddPostAction> =>{

    await firebase.AddPostDB(post)

    return{
        action:PostActions.ADD_POST,
        payload: post,
    }
}

export const GetPosts = async (): Promise<GetPostsAction> =>{

    const posts = await firebase.GetPostsDB()

    return{
        action:PostActions.GET_POSTS,
        payload: posts,
    }
}


export const AddFavorite = async (post:Post): Promise<AddFavoriteAction> =>{

    await firebase.AddFavoriteDB(post)

    return{
        action:PostActions.ADD_FAVORITE,
        payload: post,
    }
}

export const GetFavorites = async (): Promise<GetFavoritesAction> =>{

    const posts = await firebase.GetFavoritesDB()

    return{
        action:PostActions.GET_FAVORITES,
        payload: posts,
    }
}


export const AddFriend = async (friend:User): Promise<AddFriendAction> =>{

    await firebase.AddFriendDB(friend)

    return{
        action:FriendsActions.ADD_FRIEND,
        payload: friend,
    }
}

export const GetFriends = async (): Promise<GetFriendsAction> =>{

    const friends = await firebase.GetFriendsDB()

    return{
        action:FriendsActions.GET_FRIENDS,
        payload: friends,
    }
}
