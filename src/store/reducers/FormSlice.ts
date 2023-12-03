import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

const initialState: IUser[] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<IUser>) {
      state.unshift(action.payload);
    },
  },
});

export default formSlice.reducer;
