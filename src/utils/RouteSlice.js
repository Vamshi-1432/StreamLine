import { createSlice } from "@reduxjs/toolkit";

const RouteSlice = createSlice({
  name: "path",
  initialState: {
    route: "",
  },
  reducers: {
    addRoutePath: (state, action) => {
      state.route = action.payload;
    },
  },
});

export const { addRoutePath } = RouteSlice.actions;
export default RouteSlice.reducer;
