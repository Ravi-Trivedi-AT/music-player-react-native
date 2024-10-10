import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './src/features/theme/themeSlice';
import languageReducer from './src/features/language/languageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
