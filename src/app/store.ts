import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mobileDetectReducer from "../features/mobileDetect";

export const store = configureStore({
  reducer: {
    mobileDetect: mobileDetectReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
