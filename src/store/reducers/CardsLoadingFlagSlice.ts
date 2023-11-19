import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  cardsLoadingFlag: true,
};

export const cardsLoadingFlagSlice = createSlice({
  name: 'cardsLoadingFlag',
  initialState,
  reducers: {
    setCardsLoadingFlag(state, action: PayloadAction<boolean>) {
      state.cardsLoadingFlag = action.payload;
    },
  },
});

export default cardsLoadingFlagSlice.reducer;
