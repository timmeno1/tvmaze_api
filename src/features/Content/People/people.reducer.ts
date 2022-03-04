import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PeopleType } from "../Home/home.reducer";

const initialState = {
  people: [
    {
      id: 2,
      name: "name",
      profile_path: "image link",
      mediaType: "no type",
    },
  ],
};

export const PeoplePageSlice = createSlice({
  name: "PeoplePage",
  initialState: initialState,
  reducers: {
    setPeopleArray: (
      state,
      action: PayloadAction<Array<PeopleType> | undefined>
    ) => {
      if (action.payload) {
        state.people = action.payload;
      }
    },
  },
});

export const { setPeopleArray } = PeoplePageSlice.actions;

export default PeoplePageSlice.reducer;
