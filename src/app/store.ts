import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mobileDetectReducer from "../features/mobileDetect";
import homePageReducer from "../features/Content/Home/home.reducer"
import { homePageApi } from "./services/home/homePageApi";
import { moviesPageApi } from "./services/movies/moviesPageApi";
import { showsPageApi } from "./services/shows/showsPageApi";
import { peoplePageApi } from "./services/people/peoplePageApi";
import MoviesPageReducer from "../features/Content/Movies/movies.reducer";
import ShowsPageReducer from "../features/Content/Shows/shows.reducer";
import PeoplePageReducer from "../features/Content/People/people.reducer";

export const store = configureStore({
  reducer: {
    mobileDetect: mobileDetectReducer,
    homePage: homePageReducer,
    moviesPage: MoviesPageReducer,
    showsPage: ShowsPageReducer,
    peoplePage: PeoplePageReducer,
    [homePageApi.reducerPath] : homePageApi.reducer,
    [moviesPageApi.reducerPath] : moviesPageApi.reducer,
    [showsPageApi.reducerPath] : showsPageApi.reducer,
    [peoplePageApi.reducerPath] : peoplePageApi.reducer,
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
