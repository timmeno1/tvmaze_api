import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mobileDetectReducer from "../features/mobileDetect";
import homePageReducer from "../features/Content/Home/home.reducer"
import { homePageApi } from "./services/home/homePageApi";
import { moviesPageApi } from "./services/movies/moviesPageApi";

export const store = configureStore({
  reducer: {
    mobileDetect: mobileDetectReducer,
    homePage: homePageReducer,
    [homePageApi.reducerPath] : homePageApi.reducer,
    [moviesPageApi.reducerPath] : moviesPageApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homePageApi.middleware).concat(moviesPageApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
