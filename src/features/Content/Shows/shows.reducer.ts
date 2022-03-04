import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesTVsItem } from "../Home/home.reducer";


const initialState = {
    shows: [
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

export const ShowsPageSlice = createSlice({
  name: "ShowsPage",
  initialState: initialState,
  reducers: {
    setShowsArray: (
      state,
      action: PayloadAction<Array<MoviesTVsItem> | undefined>
    ) => {
      if (action.payload) {
        state.shows = action.payload;
      }
    },
  },
});

export const { setShowsArray } =
ShowsPageSlice.actions;

export default ShowsPageSlice.reducer;
