import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesTVsItem } from "../Home/home.reducer";


const initialState = {
  movies: [
    {
      id: 1,
      title: "no title",
      poster: "no poster",
      year: 1,
      rating: 1,
      mediaType: "no type",
      backdrop: "no backdrop"
    },
  ],
};

export const MoviesPageSlice = createSlice({
  name: "moviesPage",
  initialState: initialState,
  reducers: {
    setMoviesArray: (
      state,
      action: PayloadAction<Array<MoviesTVsItem> | undefined>
    ) => {
      if (action.payload) {
        state.movies = action.payload;
      }
    },
  },
});

export const { setMoviesArray } =
MoviesPageSlice.actions;

export default MoviesPageSlice.reducer;
