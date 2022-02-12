import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MoviesType = {
  movies : MoviesArray
}
export type MoviesArray = [{
  id: number,
  title: string,
  poster: string,
  year: number,
  rating: number,
}]
export type TVsType = {
  tvs : [{
    id: number,
    title: string,
    poster: string,
    year: string,
    rating: string,
  }]
}
export type SlidesType = {
  slides : [{
    id: number,
    title: string,
    bgImage: string,
    trailerLink: string,
    year: string,
    rating: string
  }]
}
export type PeopleType = {
  people : [{
    id: number,
    name: string
  }]
}

export type SliceState = MoviesType & TVsType & SlidesType & PeopleType

const initialState = {
  slides: [
    {
      id: 1,
      caption: "caption",
      bgImage: "image",
      trailerLink: "link to video",
      year: "release year",
      rating: "users rating"
    },
  ],
  movies: [
    {
      id: 1,
      title: "title",
      poster: "poster",
      year: 1995,
      rating: 50
    },
  ],
  TVs: [
    {
      id: 1,
      title: "title",
      poster: "poster",
      year: "release year",
      rating: "users rating"
    },
  ],
  people: [
    {
      id: 1,
      name:"asdasd QWeds"
    },
  ],
};

export const HomePageSlice = createSlice({
  name: "homePage",
  initialState:initialState,
  reducers: {
    setMoviesSection: (state, action: PayloadAction<MoviesArray>) => {
      state.movies = action.payload
    },
    setTVsSection: (state) => {
      //add something
    },
    setPeopleSection: (state) => {
      //add something
    },
  },
});

export const { setMoviesSection } = HomePageSlice.actions;

export default HomePageSlice.reducer;

