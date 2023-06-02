import { Post } from "./post";
import { User } from "./users";

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    user: User,
    screen: Screens,
    posts: Post[],
    friends: User[],
    favorites: Post[],
}

export enum Screens{
    LANDING = "LANDING",
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    DASHBOARD = "DASHBOARD",
    FRIENDS="FRIENDS",
    FAVORITES="FAVORITES",
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
    payload: User
}


export enum PostActions {
    "ADD_POST" = "ADD_POST",
    "GET_POSTS" = "GET_POSTS",
    "ADD_FAVORITE" = "ADD_FAVORITE",
    "GET_FAVORITES" = "GET_FAVORITES",
}

export interface AddPostAction {
    action: PostActions.ADD_POST,
    payload: Post,
}

export interface GetPostsAction {
    action: PostActions.GET_POSTS,
    payload: Post[],
}

export interface AddFavoriteAction {
    action: PostActions.ADD_FAVORITE,
    payload: Post,
}

export interface GetFavoritesAction {
    action: PostActions.GET_FAVORITES,
    payload: Post[],
}


export enum FriendsActions {
    "ADD_FRIEND" = "ADD_FRIEND",
    "GET_FRIENDS" = "GET_FRIENDS",
}

export interface AddFriendAction {
    action: FriendsActions.ADD_FRIEND,
    payload: User,
}

export interface GetFriendsAction {
    action: FriendsActions.GET_FRIENDS,
    payload: User[],
}

export type Actions = LogInAction | LogOutAction | RegisterAction | NavigationAction | AddPostAction | GetPostsAction | AddFavoriteAction | GetFavoritesAction | AddFriendAction | GetFriendsAction;