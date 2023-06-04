import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer, Screens } from "../types/store";
import { reducer } from "./reducer";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { LogIn, Navigate } from "./actions";

onAuthStateChanged(auth, async(user) => {
  console.log('Entra');
  console.log('user',user)
  if (user) {
    appState.user !== null ? dispatch(await LogIn (appState.user)) : '';
    dispatch(Navigate(Screens.DASHBOARD));
  } else {
    dispatch(Navigate(Screens.REGISTER));
  }
});

const initialState: AppState = {
    user: {
      id: "",
      userName: "",
      email: "",
      password: "",
      img: "",
    },
    screen: Screens.REGISTER,
    posts: [],
    friends: [],
    favorites: [],
};

export let appState = Storage.get<AppState>({
    key: PersistanceKeys.STORE,
    defaultValue: initialState,
  });
  
  let observers: Observer[] = [];

  const notifyObservers = () => observers.forEach((o) => o.render());
  
  const persistStore = (state: AppState) =>
    Storage.set({ key: PersistanceKeys.STORE, value: state });
  
  export const dispatch = (action: Actions) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = newState;
  
    persistStore(newState);
    notifyObservers();
  };
  
  export const addObserver = (ref: Observer) => {
    observers = [...observers, ref];
  };
