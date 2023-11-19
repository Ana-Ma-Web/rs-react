import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detailsLoadingFlag: false,
};

export const detailsLoadingFlagSlice = createSlice({
  name: 'detailsLoadingFlag',
  initialState,
  reducers: {
    setDetailsLoadingFlag(state) {
      state.detailsLoadingFlag = true;
    },
    removeDetailsLoadingFlag(state) {
      state.detailsLoadingFlag = false;
    },
  },
});

export default detailsLoadingFlagSlice.reducer;
