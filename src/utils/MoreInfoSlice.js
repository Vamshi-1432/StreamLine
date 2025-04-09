import { createSlice } from "@reduxjs/toolkit";

const MoreInfo = createSlice({
  name: "moreInfo",
  initialState: {
    infoData: null,
    enableInfo: false,
  },
  reducers: {
    setInfoData: (state, action) => {
      state.infoData = action.payload;
    },
    setEnableInfo: (state) => {
      state.enableInfo = !state.enableInfo;
    },
    resetEnableInfo: (state) => {
      state.enableInfo = false;
    },
  },
});

export const { setInfoData, setEnableInfo, resetEnableInfo } = MoreInfo.actions;
export default MoreInfo.reducer;
