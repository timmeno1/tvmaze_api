import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mobileDetectReducer from "../features/mobileDetect";
import homePageReducer from "../features/Content/Home/home.reducer"
import { homePageApi } from "./services/home/homePageApi";

export const store = configureStore({
  reducer: {
    mobileDetect: mobileDetectReducer,
    homePage: homePageReducer,
    [homePageApi.reducerPath] : homePageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homePageApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
