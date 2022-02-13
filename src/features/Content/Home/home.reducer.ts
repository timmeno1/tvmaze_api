import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MoviesTVsItem = {
  id: number;
  title: string;
  poster: string;
  year: number;
  rating: number;
  link: string;
  backdrop:string
};
export type MoviesType = {
  movies: Array<MoviesTVsItem>;
};
export type TVsType = {
  tvs: Array<MoviesTVsItem>;
};

export type SlidesType = {
  slides: Array<MoviesTVsItem>;
};
export type PeopleType = {
  id: number;
  name: string;
  profile_path: string;
};

export type SliceState = MoviesType & TVsType & SlidesType & [PeopleType];

const initialState = {
  slides: [
    {
      id: 1,
      title: "no title",
      poster: "no poster",
      year: 1,
      rating: 1,
      link: "no link",
      backdrop: "no backdrop"
    },
  ],
  movies: [
    {
      id: 1,
      title: "no title",
      poster: "no poster",
      year: 1,
      rating: 1,
      link: "no link",
      backdrop: "no backdrop"
    },
  ],
  TVs: [
    {
      id: 1,
      title: "no title",
      poster: "no poster",
      year: 1,
      rating: 1,
      link: "no link",
      backdrop: "no backdrop"
    },
  ],
  people: [
    {
      id: 1,
      name: "FirstName LastName",
      profile_path: "image link",
    },
  ],
};

export const HomePageSlice = createSlice({
  name: "homePage",
  initialState: initialState,
  reducers: {
    setMoviesSection: (
      state,
      action: PayloadAction<Array<MoviesTVsItem> | undefined>
    ) => {
      if (action.payload) {
        state.movies = action.payload;
        state.slides = action.payload
      }
    },
    setTVsSection: (
      state,
      action: PayloadAction<Array<MoviesTVsItem> | undefined>
    ) => {
      if (action.payload) state.TVs = action.payload;
    },
    setPeopleSection: (
      state,
      action: PayloadAction<Array<PeopleType> | undefined>
    ) => {
      if (action.payload) state.people = action.payload;
    },
  },
});

export const { setMoviesSection, setTVsSection, setPeopleSection } =
  HomePageSlice.actions;

export default HomePageSlice.reducer;
