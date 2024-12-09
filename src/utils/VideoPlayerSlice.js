import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    enablePlayer: false,
  },
  reducers: {
    setEnablePlayer: (state) => {
      state.enablePlayer = !state.enablePlayer;
    },
    resetPlayer: (state) => {
      state.enablePlayer = false;
    },
  },
});

export const { setEnablePlayer, resetPlayer } = playerSlice.actions;
export default playerSlice.reducer;
