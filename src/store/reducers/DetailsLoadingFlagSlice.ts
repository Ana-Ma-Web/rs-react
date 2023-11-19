import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  detailsLoadingFlag: false,
};

export const detailsLoadingFlagSlice = createSlice({
  name: 'detailsLoadingFlag',
  initialState,
  reducers: {
    setDetailsLoadingFlag(state, action: PayloadAction<boolean>) {
      state.detailsLoadingFlag = action.payload;
    },
  },
});

export default detailsLoadingFlagSlice.reducer;
