import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardsLoadingFlag: false,
};

export const cardsLoadingFlagSlice = createSlice({
  name: 'cardsLoadingFlag',
  initialState,
  reducers: {
    setCardsLoadingFlag(state) {
      state.cardsLoadingFlag = true;
    },
    removeCardsLoadingFlag(state) {
      state.cardsLoadingFlag = false;
    },
  },
});

export default cardsLoadingFlagSlice.reducer;
