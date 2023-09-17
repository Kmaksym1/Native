import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./Posts/postSlice";
import { authReducer } from "./Users/authSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistPostsConfig = {
  key: "posts",
  storage: AsyncStorage,
};

const persistAuthConfig = {
  key: "auth",
  storage: AsyncStorage,
};

const persistedPostsReducer = persistReducer(persistPostsConfig, postsReducer);
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  posts: persistedPostsReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
