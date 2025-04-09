import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    language: "eng",
  },
  reducers: {
    choosedLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { choosedLanguage } = langSlice.actions;
export default langSlice.reducer;
