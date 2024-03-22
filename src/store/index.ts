import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";

export const getClientStore = () => {
  const defaultState = window.context
    ? (window.context.state as RootState)
    : {};
  return configureStore({
    reducer: {
      counter: counterSlice,
    },
    preloadedState: defaultState,
  });
};

export const getServerStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
    },
  });
};

const store = getServerStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
